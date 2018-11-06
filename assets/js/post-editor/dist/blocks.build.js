/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * BLOCK: post-editor\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar _wp$data$select = wp.data.select('core/editor'),\n    getCurrentPostId = _wp$data$select.getCurrentPostId;\n\n/**\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\n\nregisterBlockType('social-warfare/social-warfare', {\n\ttitle: __('Social Warfare'), // Block title.\n\ticon: wp.element.createElement('i', { className: 'mce-ico mce-i-sw sw sw-social-warfare' }),\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [\n\t// Has a limit of 3 keywords.\n\t__('sharing'), __('social sharing'), __('share buttons')],\n\tattributes: {\n\t\tuseThisPost: { type: 'string', default: \"this\" },\n\t\tbuttons: { type: 'string', default: '' },\n\t\tpostID: { type: 'number', default: '' }\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    useThisPost = _props$attributes.useThisPost,\n\t\t    buttons = _props$attributes.buttons,\n\t\t    postID = _props$attributes.postID;\n\n\n\t\tvar updateWhichPost = function updateWhichPost(event) {\n\t\t\tprops.setAttributes({ useThisPost: event.target.value });\n\t\t};\n\n\t\tvar updateButtonsList = function updateButtonsList(event) {\n\t\t\tprops.setAttributes({ buttons: event.target.value });\n\t\t};\n\n\t\tvar updatePostID = function updatePostID(event) {\n\t\t\tvar postID = getCurrentPostId();\n\t\t\tvar value = event.target.value;\n\n\t\t\tif (value == '') {\n\t\t\t\tprops.setAttributes({ postID: \"\" });\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif (isNaN(parseInt(value))) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tprops.setAttributes({ postID: parseInt(value) });\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className + ' social-warfare-block-wrap' },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'heading' },\n\t\t\t\t'Social Warfare Shortcode'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Should the buttons reflect this post, or a a different post?'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'select',\n\t\t\t\t{ value: useThisPost == \"other\" && postID ? \"other\" : \"this\",\n\t\t\t\t\tonChange: updateWhichPost\n\t\t\t\t},\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'option',\n\t\t\t\t\t{ value: 'this' },\n\t\t\t\t\t'This post'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'option',\n\t\t\t\t\t{ value: 'other' },\n\t\t\t\t\t'Another post'\n\t\t\t\t)\n\t\t\t),\n\t\t\tprops.attributes.useThisPost == \"other\" && wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Which post should we fetch SW settings and shares from?'\n\t\t\t\t),\n\t\t\t\twp.element.createElement('input', { type: 'text',\n\t\t\t\t\tonChange: updatePostID,\n\t\t\t\t\tvalue: props.attributes.postID\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Which networks should we display? Leave blank to use your global settings. '\n\t\t\t),\n\t\t\twp.element.createElement('input', { value: props.attributes.buttons,\n\t\t\t\ttype: 'text',\n\t\t\t\tonChange: updateButtonsList\n\t\t\t})\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\t\tvar buttons = props.attributes.buttons && props.attributes.buttons.length ? 'buttons=\"' + props.attributes.buttons + '\"' : '';\n\n\t\tvar postID = props.attributes.useThisPost == \"other\" ? 'id=\"' + props.attributes.postID + '\"' : '';\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t'[social_warfare ',\n\t\t\tbuttons,\n\t\t\t' ',\n\t\t\tpostID,\n\t\t\t']'\n\t\t);\n\t}\n});\n\n/**\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('social-warfare/click-to-tweet', {\n\ttitle: __('Click To Tweet'), // Block title.\n\ticon: wp.element.createElement('i', { className: 'mce-ico mce-i-sw sw swp_twitter_icon' }),\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [\n\t// Has a limit of 3 keywords.\n\t__('twitter'), __('tweet'), __('ctt')],\n\tattributes: {\n\t\ttweetText: { type: 'string', default: \"\" },\n\t\tdisplayText: { type: 'string', default: \"\" }\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    tweetText = _props$attributes2.tweetText,\n\t\t    displayText = _props$attributes2.displayText,\n\t\t    theme = _props$attributes2.theme;\n\n\t\tvar styles = ['Default', 'Send Her My Love', 'Roll With The Changes', 'Free Bird', 'Don\\t Stop Believin\\'', 'Thunderstruck', 'Livin\\' On A Prayer'];\n\n\t\tvar updateText = function updateText(event) {\n\t\t\tvar attribute = event.target.name;\n\t\t\tvar value = event.target.value;\n\n\t\t\tprops.setAttributes(_defineProperty({}, attribute, value));\n\t\t};\n\n\t\tvar updateTheme = function updateTheme(event) {\n\t\t\tvar index = event.target.value;\n\n\t\t\tif (parseInt(index) == 0) {\n\t\t\t\tprops.setAttributes({ theme: '' });\n\t\t\t} else {\n\t\t\t\tprops.setAttributes({ theme: index });\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className + ' click-to-tweet-block-wrap' },\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\t{ className: 'heading' },\n\t\t\t\t'Click to Tweet'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Type your tweet as you want it to display ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'b',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'em',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'on Twitter'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t':'\n\t\t\t),\n\t\t\twp.element.createElement('textarea', { name: 'tweetText',\n\t\t\t\tplaceholder: 'Type your tweet. . . ',\n\t\t\t\tonChange: updateText,\n\t\t\t\tvalue: props.attributes.tweetText\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Type your tweet as you want it to display ',\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'b',\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'em',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t'on the page'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t':'\n\t\t\t),\n\t\t\twp.element.createElement('textarea', { name: 'displayText',\n\t\t\t\tplaceholder: 'Type your tweet. . . ',\n\t\t\t\tonChange: updateText,\n\t\t\t\tvalue: props.attributes.displayText\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'p',\n\t\t\t\tnull,\n\t\t\t\t'Which theme would you like to use for this CTT?'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'select',\n\t\t\t\t{ name: 'theme',\n\t\t\t\t\tvalue: theme,\n\t\t\t\t\tonChange: updateTheme\n\t\t\t\t},\n\t\t\t\tstyles.map(function (theme, index) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'option',\n\t\t\t\t\t\t{ value: index },\n\t\t\t\t\t\ttheme\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\t\tvar _props$attributes3 = props.attributes,\n\t\t    tweetText = _props$attributes3.tweetText,\n\t\t    displayText = _props$attributes3.displayText;\n\n\n\t\tvar theme = props.attributes.theme ? 'style' + props.attributes.theme : '';\n\n\t\tif (!tweetText) return;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t'[click_to_tweet tweet=\"',\n\t\t\ttweetText,\n\t\t\t'\" quote=\"',\n\t\t\tdisplayText,\n\t\t\t'\" theme=\"',\n\t\t\ttheme,\n\t\t\t'\"]'\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbi8qKlxuICogQkxPQ0s6IHBvc3QtZWRpdG9yXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIF93cCRkYXRhJHNlbGVjdCA9IHdwLmRhdGEuc2VsZWN0KCdjb3JlL2VkaXRvcicpLFxuICAgIGdldEN1cnJlbnRQb3N0SWQgPSBfd3AkZGF0YSRzZWxlY3QuZ2V0Q3VycmVudFBvc3RJZDtcblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdzb2NpYWwtd2FyZmFyZS9zb2NpYWwtd2FyZmFyZScsIHtcblx0dGl0bGU6IF9fKCdTb2NpYWwgV2FyZmFyZScpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdtY2UtaWNvIG1jZS1pLXN3IHN3IHN3LXNvY2lhbC13YXJmYXJlJyB9KSxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0Ly8gSGFzIGEgbGltaXQgb2YgMyBrZXl3b3Jkcy5cblx0X18oJ3NoYXJpbmcnKSwgX18oJ3NvY2lhbCBzaGFyaW5nJyksIF9fKCdzaGFyZSBidXR0b25zJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dXNlVGhpc1Bvc3Q6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6IFwidGhpc1wiIH0sXG5cdFx0YnV0dG9uczogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJycgfSxcblx0XHRwb3N0SUQ6IHsgdHlwZTogJ251bWJlcicsIGRlZmF1bHQ6ICcnIH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHVzZVRoaXNQb3N0ID0gX3Byb3BzJGF0dHJpYnV0ZXMudXNlVGhpc1Bvc3QsXG5cdFx0ICAgIGJ1dHRvbnMgPSBfcHJvcHMkYXR0cmlidXRlcy5idXR0b25zLFxuXHRcdCAgICBwb3N0SUQgPSBfcHJvcHMkYXR0cmlidXRlcy5wb3N0SUQ7XG5cblxuXHRcdHZhciB1cGRhdGVXaGljaFBvc3QgPSBmdW5jdGlvbiB1cGRhdGVXaGljaFBvc3QoZXZlbnQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyB1c2VUaGlzUG9zdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgdXBkYXRlQnV0dG9uc0xpc3QgPSBmdW5jdGlvbiB1cGRhdGVCdXR0b25zTGlzdChldmVudCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGJ1dHRvbnM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZVBvc3RJRCA9IGZ1bmN0aW9uIHVwZGF0ZVBvc3RJRChldmVudCkge1xuXHRcdFx0dmFyIHBvc3RJRCA9IGdldEN1cnJlbnRQb3N0SWQoKTtcblx0XHRcdHZhciB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuXHRcdFx0aWYgKHZhbHVlID09ICcnKSB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBwb3N0SUQ6IFwiXCIgfSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzTmFOKHBhcnNlSW50KHZhbHVlKSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcG9zdElEOiBwYXJzZUludCh2YWx1ZSkgfSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgKyAnIHNvY2lhbC13YXJmYXJlLWJsb2NrLXdyYXAnIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdoZWFkaW5nJyB9LFxuXHRcdFx0XHQnU29jaWFsIFdhcmZhcmUgU2hvcnRjb2RlJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnU2hvdWxkIHRoZSBidXR0b25zIHJlZmxlY3QgdGhpcyBwb3N0LCBvciBhIGEgZGlmZmVyZW50IHBvc3Q/J1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NlbGVjdCcsXG5cdFx0XHRcdHsgdmFsdWU6IHVzZVRoaXNQb3N0ID09IFwib3RoZXJcIiAmJiBwb3N0SUQgPyBcIm90aGVyXCIgOiBcInRoaXNcIixcblx0XHRcdFx0XHRvbkNoYW5nZTogdXBkYXRlV2hpY2hQb3N0XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnb3B0aW9uJyxcblx0XHRcdFx0XHR7IHZhbHVlOiAndGhpcycgfSxcblx0XHRcdFx0XHQnVGhpcyBwb3N0J1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J29wdGlvbicsXG5cdFx0XHRcdFx0eyB2YWx1ZTogJ290aGVyJyB9LFxuXHRcdFx0XHRcdCdBbm90aGVyIHBvc3QnXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnVzZVRoaXNQb3N0ID09IFwib3RoZXJcIiAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J1doaWNoIHBvc3Qgc2hvdWxkIHdlIGZldGNoIFNXIHNldHRpbmdzIGFuZCBzaGFyZXMgZnJvbT8nXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRvbkNoYW5nZTogdXBkYXRlUG9zdElELFxuXHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnBvc3RJRFxuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnV2hpY2ggbmV0d29ya3Mgc2hvdWxkIHdlIGRpc3BsYXk/IExlYXZlIGJsYW5rIHRvIHVzZSB5b3VyIGdsb2JhbCBzZXR0aW5ncy4gJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbnMsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0b25DaGFuZ2U6IHVwZGF0ZUJ1dHRvbnNMaXN0XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHZhciBidXR0b25zID0gcHJvcHMuYXR0cmlidXRlcy5idXR0b25zICYmIHByb3BzLmF0dHJpYnV0ZXMuYnV0dG9ucy5sZW5ndGggPyAnYnV0dG9ucz1cIicgKyBwcm9wcy5hdHRyaWJ1dGVzLmJ1dHRvbnMgKyAnXCInIDogJyc7XG5cblx0XHR2YXIgcG9zdElEID0gcHJvcHMuYXR0cmlidXRlcy51c2VUaGlzUG9zdCA9PSBcIm90aGVyXCIgPyAnaWQ9XCInICsgcHJvcHMuYXR0cmlidXRlcy5wb3N0SUQgKyAnXCInIDogJyc7XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHRudWxsLFxuXHRcdFx0J1tzb2NpYWxfd2FyZmFyZSAnLFxuXHRcdFx0YnV0dG9ucyxcblx0XHRcdCcgJyxcblx0XHRcdHBvc3RJRCxcblx0XHRcdCddJ1xuXHRcdCk7XG5cdH1cbn0pO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIG5hbWUgICAgIEJsb2NrIG5hbWUuIEJsb2NrIG5hbWVzIG11c3QgYmUgc3RyaW5nIHRoYXQgY29udGFpbnMgYSBuYW1lc3BhY2UgcHJlZml4LiBFeGFtcGxlOiBteS1wbHVnaW4vbXktY3VzdG9tLWJsb2NrLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgnc29jaWFsLXdhcmZhcmUvY2xpY2stdG8tdHdlZXQnLCB7XG5cdHRpdGxlOiBfXygnQ2xpY2sgVG8gVHdlZXQnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaScsIHsgY2xhc3NOYW1lOiAnbWNlLWljbyBtY2UtaS1zdyBzdyBzd3BfdHdpdHRlcl9pY29uJyB9KSxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtcblx0Ly8gSGFzIGEgbGltaXQgb2YgMyBrZXl3b3Jkcy5cblx0X18oJ3R3aXR0ZXInKSwgX18oJ3R3ZWV0JyksIF9fKCdjdHQnKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0d2VldFRleHQ6IHsgdHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6IFwiXCIgfSxcblx0XHRkaXNwbGF5VGV4dDogeyB0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogXCJcIiB9XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuICAqIFRoaXMgcmVwcmVzZW50cyB3aGF0IHRoZSBlZGl0b3Igd2lsbCByZW5kZXIgd2hlbiB0aGUgYmxvY2sgaXMgdXNlZC5cbiAgKlxuICAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgdHdlZXRUZXh0ID0gX3Byb3BzJGF0dHJpYnV0ZXMyLnR3ZWV0VGV4dCxcblx0XHQgICAgZGlzcGxheVRleHQgPSBfcHJvcHMkYXR0cmlidXRlczIuZGlzcGxheVRleHQsXG5cdFx0ICAgIHRoZW1lID0gX3Byb3BzJGF0dHJpYnV0ZXMyLnRoZW1lO1xuXG5cdFx0dmFyIHN0eWxlcyA9IFsnRGVmYXVsdCcsICdTZW5kIEhlciBNeSBMb3ZlJywgJ1JvbGwgV2l0aCBUaGUgQ2hhbmdlcycsICdGcmVlIEJpcmQnLCAnRG9uXFx0IFN0b3AgQmVsaWV2aW5cXCcnLCAnVGh1bmRlcnN0cnVjaycsICdMaXZpblxcJyBPbiBBIFByYXllciddO1xuXG5cdFx0dmFyIHVwZGF0ZVRleHQgPSBmdW5jdGlvbiB1cGRhdGVUZXh0KGV2ZW50KSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG5cdFx0XHR2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoX2RlZmluZVByb3BlcnR5KHt9LCBhdHRyaWJ1dGUsIHZhbHVlKSk7XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVUaGVtZSA9IGZ1bmN0aW9uIHVwZGF0ZVRoZW1lKGV2ZW50KSB7XG5cdFx0XHR2YXIgaW5kZXggPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRcdGlmIChwYXJzZUludChpbmRleCkgPT0gMCkge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdGhlbWU6ICcnIH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IHRoZW1lOiBpbmRleCB9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSArICcgY2xpY2stdG8tdHdlZXQtYmxvY2std3JhcCcgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2hlYWRpbmcnIH0sXG5cdFx0XHRcdCdDbGljayB0byBUd2VldCdcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1R5cGUgeW91ciB0d2VldCBhcyB5b3Ugd2FudCBpdCB0byBkaXNwbGF5ICcsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnYicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZW0nLFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdCdvbiBUd2l0dGVyJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KSxcblx0XHRcdFx0JzonXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHsgbmFtZTogJ3R3ZWV0VGV4dCcsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHR3ZWV0LiAuIC4gJyxcblx0XHRcdFx0b25DaGFuZ2U6IHVwZGF0ZVRleHQsXG5cdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnR3ZWV0VGV4dFxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdwJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1R5cGUgeW91ciB0d2VldCBhcyB5b3Ugd2FudCBpdCB0byBkaXNwbGF5ICcsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnYicsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZW0nLFxuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdCdvbiB0aGUgcGFnZSdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCksXG5cdFx0XHRcdCc6J1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7IG5hbWU6ICdkaXNwbGF5VGV4dCcsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHR3ZWV0LiAuIC4gJyxcblx0XHRcdFx0b25DaGFuZ2U6IHVwZGF0ZVRleHQsXG5cdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLmRpc3BsYXlUZXh0XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3AnLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHQnV2hpY2ggdGhlbWUgd291bGQgeW91IGxpa2UgdG8gdXNlIGZvciB0aGlzIENUVD8nXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc2VsZWN0Jyxcblx0XHRcdFx0eyBuYW1lOiAndGhlbWUnLFxuXHRcdFx0XHRcdHZhbHVlOiB0aGVtZSxcblx0XHRcdFx0XHRvbkNoYW5nZTogdXBkYXRlVGhlbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0c3R5bGVzLm1hcChmdW5jdGlvbiAodGhlbWUsIGluZGV4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdvcHRpb24nLFxuXHRcdFx0XHRcdFx0eyB2YWx1ZTogaW5kZXggfSxcblx0XHRcdFx0XHRcdHRoZW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgdHdlZXRUZXh0ID0gX3Byb3BzJGF0dHJpYnV0ZXMzLnR3ZWV0VGV4dCxcblx0XHQgICAgZGlzcGxheVRleHQgPSBfcHJvcHMkYXR0cmlidXRlczMuZGlzcGxheVRleHQ7XG5cblxuXHRcdHZhciB0aGVtZSA9IHByb3BzLmF0dHJpYnV0ZXMudGhlbWUgPyAnc3R5bGUnICsgcHJvcHMuYXR0cmlidXRlcy50aGVtZSA6ICcnO1xuXG5cdFx0aWYgKCF0d2VldFRleHQpIHJldHVybjtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHQnW2NsaWNrX3RvX3R3ZWV0IHR3ZWV0PVwiJyxcblx0XHRcdHR3ZWV0VGV4dCxcblx0XHRcdCdcIiBxdW90ZT1cIicsXG5cdFx0XHRkaXNwbGF5VGV4dCxcblx0XHRcdCdcIiB0aGVtZT1cIicsXG5cdFx0XHR0aGVtZSxcblx0XHRcdCdcIl0nXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);