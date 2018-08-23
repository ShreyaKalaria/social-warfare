<?php

/**
* SWP_URL_Management
*
* A class engineered to manage the links that are shared out to the various social
* networks. This class will shorten them via Bitly or add Google Analytics tracking
* parameters if the user has either of these options enabled and configured.
*
* @since 3.0.0 | 14 FEB 2018 | Added check for is_attachment() to swp_google_analytics
* @since 3.0.0 | 04 APR 2018 | Converted to class-based, object-oriented system.
*
*/
class SWP_URL_Management {


	/**
	 * The magic __construct method.
	 *
	 * This method instantiates the SWP_URL_Management object. It's primary function
	 * is to add the various methods to their approprate hooks for use later on in
	 * modifying the links.
	 *
	 * @since 3.0.0 | 04 APR 2018 | Created
	 * @param none
	 * @return none
	 * @access public
	 *
	 */
	public function __construct() {

		add_filter( 'swp_link_shortening'  	, array( $this , 'link_shortener' ) );
		add_filter( 'swp_analytics' 		, array( $this , 'google_analytics' ) );
		add_action( 'wp_ajax_nopriv_swp_bitly_oauth', array( $this , 'bitly_oauth_callback' ) );

	}


	/**
	 * Google Analytics UTM Tracking Parameters
	 *
	 * This is the method used to add Google analytics UTM parameters to the links
	 * that are being shared on social media.
	 *
	 * @since  3.0.0 | 04 APR 2018 | Created
	 * @param  array $array An array of arguments and data used in processing the URL.
	 * @return array $array The modified array.
	 * @access public
	 *
	 */
	public function google_analytics( $array ) {
		global $swp_user_options;

	    // Fetch the user options
	    $options = $swp_user_options;
	    $url = $array['url'];
	    $network = $array['network'];

	    if( ( 'pinterest' === $network && isset( $swp_user_options['utm_on_pins']) && true === $swp_user_options['utm_on_pins']) || $network !== 'pinterest' ) :

	    	if ( true === is_attachment() ) :
	    		return $array;
	    	endif;

	    	// Check if Analytics have been enabled or not
	    	if ( true == SWP_Utility::get_option('google_analytics') ) :
	            $url_string = 'utm_source=' . $network . '&utm_medium=' . $options['analytics_medium'] . '&utm_campaign=' . $options['analytics_campaign'] . '';

	    		if ( strpos( $url,'?' ) !== false ) :
	    			$array['url'] = $url . urlencode( '&' . $url_string );
	    		else :
	    			$array['url'] = $url . urlencode( '?' . $url_string );
	    		endif;
	    	endif;

	    	return $array;
	    endif;

	    return $array;
	}


	/**
	 * The Bitly Link Shortener Method
	 *
	 * This is the function used to manage shortened links via the Bitly link
	 * shortening service.
	 *
	 * @since  3.0.0 | 04 APR 2018 | Created
	 * @param  array $array An array of arguments and information.
	 * @return array $array The modified array.
	 * @access public
	 *
	 */
	public function link_shortener( $array ) {
        global $post;
        $postID = $array['postID'];
        $google_analytics = SWP_Utility::get_option('google_analytics');
        $access_token = SWP_Utility::get_option( 'bitly_access_token' );

        // Recently done.
        if ( true == $array['fresh_cache'] ) :
            return $array;
        endif;

        // We need this information to make a bitly request.
        if ( false == $access_token || true !== SWP_Utility::get_option( 'bitly_authentication' ) ) :
            return $array;
        endif;

        // These can not have bitly urls created.
        if ( $array['network'] == 'total_shares' || $array['network'] == 'pinterest' ) :
            return $array;
        endif;

        // We tried making a bitly request and it did not work.
        if ( isset( $_GLOBALS['bitly_status'] ) && $_GLOBALS['bitly_status'] == 'failure' ) :
            return $array;
        endif;

        // Only one bitly url is needed for this post, and it exists.
        if ( !$google_analytics && isset( $_GLOBALS['sw']['links'][ $postID ] ) ) :
            $array['url'] = $_GLOBALS['sw']['links'][ $postID ];
            return $array;
        endif;

        $start_date = SWP_Utility::get_option( 'bitly_start_date' );

        //* They have decided to only allow posts after a certain date.
        if ( $start_date ) :
            $start_date = DateTime::createFromFormat('Y-m-d', $start_date);
            $today = new DateTime();

            if ( $start_date > $today ) :
                return $array;
            endif;
        endif;

        $links_enabled = SWP_Utility::get_option( "bitly_links_{$post->post_type}" );

        //* They have disabled bitly links on this post type.
        if ( false == $links_enabled || 'off' == $links_enabled ) :
            return $array;
        endif;

        $network = $array['network'];

        if ( true == $google_analytics ) :
            $prior_bitly_url = get_post_meta( $postID, 'bitly_link_' . $network, true );
        else :
            $prior_bitly_url = get_post_meta( $postID, 'bitly_link', true );
        endif;


        if ( $prior_bitly_url ) :
            $array['url'] = $prior_bitly_url;
            return $array;
        endif;


        $url = urldecode( $array['url'] );
        $new_bitly_url = $this->make_bitly_url( $url , $network , $access_token );


        if ( $new_bitly_url ) :

            delete_post_meta( $postID,'bitly_link_' . $network );
            update_post_meta( $postID,'bitly_link_' . $network, $new_bitly_url );
            $array['url'] = $bitly_url;

        else :
            $_GLOBALS['sw']['bitly_status'] = 'failure';
        endif;


        if ( false == $google_analytics ) :

            // Delete the meta fields and then update to keep the database clean and up to date.
            delete_post_meta( $postID,'bitly_link_' . $network );

            // Save the link in a global so we can skip this part next time
            $_GLOBALS['sw']['links'][ $postID ] = $bitly_url;

        endif;

	    return $array;
	}


	/**
	 * Create a new Bitly short URL
	 *
	 * This is the method used to interface with the Bitly API with regard to creating
	 * new shortened URL's via their service.
	 *
	 * @since  3.0.0 | 04 APR 2018 | Created
	 * @param  string $url          The URL to be shortened
	 * @param  string $network      The social network on which this URL is being shared.
	 * @param  string $access_token The user's Bitly access token.
	 * @return string               The shortened URL.
	 * @access public
	 *
	 */
	public function make_bitly_url( $url, $network, $access_token ) {
		global $swp_user_options;

		// Fetch the user's options
		$options = $swp_user_options;

		if ( isset( $bitly_lookup_response['data']['link_lookup'][0]['link'] ) && true == false ) :

			// Store the short url to return to the plugin
			$short_url = $bitly_lookup_response['data']['link_lookup'][0]['link'];

			// If the lookup did not return a valid short link....
		else :

			// Set the format to json
			$format = 'json';

			// Create a link to reach the Bitly API
			$bitly_api = 'https://api-ssl.bitly.com/v3/shorten?access_token=' . $access_token . '&longUrl=' . urlencode( $url ) . '&format=' . $format;

			// Fetch a response from the Bitly Shortening API
			$data = SWP_CURL::file_get_contents_curl( $bitly_api );

			// Parse the JSON formated response into an array
			$data = json_decode( $data , true );

			// If the shortening succeeded....
			if ( isset( $data['data']['url'] ) ) :

				// Store the short URL to return to the plugin
				$short_url = $data['data']['url'];

				// If the shortening failed....
			else :

				// Return a status of false
				$short_url = false;

			endif;

		endif;

		return $short_url;

	}


	/**
	 * The function that processes a URL
	 *
	 * This method is used throughout the plugin to fetch URL's that have been processed
	 * with the link shorteners and UTM parameters. It processes an array of information
	 * through the swp_analytics filter and the swp_link_shortening filter.
	 *
	 * @since  3.0.0 | 04 APR 2018 | Created
	 * @param  string $url     The URL to be modified.
	 * @param  string $network The network on which the URL is being shared.
	 * @param  int    $postID  The post ID.
	 * @return string          The modified URL.
	 * @access public static
	 */
	public static function process_url( $url, $network, $postID, $is_cache_fresh = true ) {
		global $swp_user_options;


		if ( isset( $_GLOBALS['sw']['links'][ $postID ] ) ) :
			return $_GLOBALS['sw']['links'][ $postID ];
		else :
			// Fetch the parameters into an array for use by the filters
			$array['url'] = $url;
			$array['network'] = $network;
			$array['postID'] = $postID;
            $array['fresh_cache'] = $is_cache_fresh;

			if( !is_attachment() ):

				// Run the anaylitcs hook filters

				$array = apply_filters( 'swp_analytics' , $array );

				// Run the link shortening hook filters, but not on Pinterest
				$array = apply_filters( 'swp_link_shortening' , $array );
			endif;

			return $array['url'];

		endif;
	}


	/**
	 * The Bitly OAuth Callback Function
	 *
	 * When authenticating Bitly to the plugin, Bitly uses a back-and-forth handshake
	 * system. This function will intercept the ping from Bitly's server, process the
	 * information and provide a response to Bitly.
	 *
	 * @since  3.0.0 | 04 APR 2018 | Created
	 * @param  none
	 * @return none A response is echoed to the screen for Bitly to read.
	 * @access public
	 *
	 */
	public function bitly_oauth_callback() {
		$options = swp_get_user_options();

		// Set the premium code to null
		$options['bitly_access_token'] = $_GET['access_token'];

		// Update the options array with the premium code nulled
		swp_update_options( $options );

		echo admin_url( 'admin.php?page=social-warfare' );
	}
}
