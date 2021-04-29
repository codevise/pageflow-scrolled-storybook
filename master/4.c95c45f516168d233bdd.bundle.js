(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12),__webpack_require__(20),__webpack_require__(18),__webpack_require__(23),__webpack_require__(16),__webpack_require__(21),__webpack_require__(29),__webpack_require__(11),__webpack_require__(22),__webpack_require__(14),__webpack_require__(15);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),classnames=__webpack_require__(5),classnames_default=__webpack_require__.n(classnames),view360_esm=__webpack_require__(1458),screenfull=__webpack_require__(1451),screenfull_default=__webpack_require__.n(screenfull),useBrowserFeature=__webpack_require__(324);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var enterFullscreen=({styles:styles={},...props})=>react_default.a.createElement("svg",_extends({"aria-hidden":"true","data-prefix":"fas","data-icon":"expand",className:(styles["svg-inline--fa"]||"svg-inline--fa")+" "+(styles["fa-expand"]||"fa-expand")+" "+(styles["fa-w-14"]||"fa-w-14"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},props),react_default.a.createElement("path",{fill:"currentColor",d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"}));function exitFullscreen_extends(){return(exitFullscreen_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var exitFullscreen=({styles:styles={},...props})=>react_default.a.createElement("svg",exitFullscreen_extends({"aria-hidden":"true","data-prefix":"fas","data-icon":"compress",className:(styles["svg-inline--fa"]||"svg-inline--fa")+" "+(styles["fa-compress"]||"fa-compress")+" "+(styles["fa-w-14"]||"fa-w-14"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},props),react_default.a.createElement("path",{fill:"currentColor",d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"})),i18n=__webpack_require__(33),ToggleFullscreenButton_module=__webpack_require__(1452),ToggleFullscreenButton_module_default=__webpack_require__.n(ToggleFullscreenButton_module);function ToggleFullscreenButton(props){var t=Object(i18n.c)().t;return react_default.a.createElement("button",{className:ToggleFullscreenButton_module_default.a.button,title:t(props.isFullscreen?"exit_fullscreen":"enter_fullscreen",{scope:"pageflow_scrolled.public"}),onClick:function onClick(){return props.isFullscreen?props.onExit():props.onEnter()}},function icon(props){return props.isFullscreen?ToggleFullscreenButton_ref:ToggleFullscreenButton_ref2}(props))}ToggleFullscreenButton.displayName="ToggleFullscreenButton";var ToggleFullscreenButton_ref=react_default.a.createElement(exitFullscreen,null),ToggleFullscreenButton_ref2=react_default.a.createElement(enterFullscreen,null);ToggleFullscreenButton.__docgenInfo={description:"",methods:[],displayName:"ToggleFullscreenButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/Panorama/ToggleFullscreenButton.js"]={name:"ToggleFullscreenButton",docgenInfo:ToggleFullscreenButton.__docgenInfo,path:"src/frontend/Panorama/ToggleFullscreenButton.js"});var react_dom=__webpack_require__(116),react_dom_default=__webpack_require__.n(react_dom),Fullscreen_module=__webpack_require__(1454),Fullscreen_module_default=__webpack_require__.n(Fullscreen_module);function Fullscreen(_ref){var isFullscreen=_ref.isFullscreen,children=_ref.children,root=Object(react.useMemo)((function(){return document.getElementById("fullscreenRoot")}),[]);return Object(react.useEffect)((function(){document.body.style.overflow=isFullscreen?"hidden":"initial"}),[isFullscreen]),isFullscreen?react_dom_default.a.createPortal(react_default.a.createElement("div",{className:Fullscreen_module_default.a.wrapper},children),root):children}var Viewer_module=__webpack_require__(1456),Viewer_module_default=__webpack_require__.n(Viewer_module);function spinner_extends(){return(spinner_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var spinner=({styles:styles={},...props})=>react_default.a.createElement("svg",spinner_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),react_default.a.createElement("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",opacity:".23"}),react_default.a.createElement("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:".75"}));function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(!(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Viewer(_ref){var obj,key,value,imageFile=_ref.imageFile,viewerRef=_ref.viewerRef,initialYaw=_ref.initialYaw,initialPitch=_ref.initialPitch,elRef=Object(react.useRef)(),initialYawRef=Object(react.useRef)(initialYaw),initialPitchRef=Object(react.useRef)(initialPitch),touchSupport=Object(useBrowserFeature.b)("touch support"),_useState2=_slicedToArray(Object(react.useState)(!0),2),isLoading=_useState2[0],setIsLoading=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(!1),2),isFullscreen=_useState4[0],setIsFullscreen=_useState4[1];return Object(react.useEffect)((function(){return function(){elRef.current&&(viewerRef.current.destroy(),viewerRef.current=null,elRef.current=null)}}),[viewerRef]),Object(react.useEffect)((function(){initialYawRef.current!==initialYaw&&(initialYawRef.current=initialYaw,viewerRef.current.lookAt({yaw:initialYaw},200))}),[initialYaw,viewerRef]),Object(react.useEffect)((function(){initialPitchRef.current!==initialPitch&&(initialPitchRef.current=initialPitch,viewerRef.current.lookAt({pitch:initialPitch},200))}),[initialPitch,viewerRef]),Object(react.useEffect)((function(){function onChange(){screenfull_default.a.isFullscreen||setIsFullscreen(!1)}if(screenfull_default.a.isEnabled)return screenfull_default.a.on("change",onChange),function(){return screenfull_default.a.off("change",onChange)}}),[]),Object(react.useEffect)((function(){function onChange(){viewerRef.current.updateViewportDimensions()}return window.addEventListener("resize",onChange),function(){return window.removeEventListener("resize",onChange)}}),[viewerRef]),Object(react.useEffect)((function(){isFullscreen?(viewerRef.current.setTouchDirection(view360_esm.a.TOUCH_DIRECTION.ALL),viewerRef.current.setGyroMode(view360_esm.a.GYRO_MODE.YAWPITCH),viewerRef.current.setUseZoom(!0)):(touchSupport?(viewerRef.current.setTouchDirection(view360_esm.a.TOUCH_DIRECTION.YAW),viewerRef.current.lookAt({pitch:0,fov:65})):viewerRef.current.lookAt({fov:65}),viewerRef.current.setGyroMode(view360_esm.a.GYRO_MODE.NONE),viewerRef.current.setUseZoom(!1))}),[isFullscreen,viewerRef,touchSupport]),react_default.a.createElement(Fullscreen,{isFullscreen:isFullscreen},react_default.a.createElement("div",{className:Viewer_module_default.a.container,onKeyDown:function(event){"ArrowUp"!==event.key&&"ArrowDown"!==event.key||event.preventDefault()}},react_default.a.createElement(DOMNodeContainer,{className:Viewer_module_default.a.full,onUpdate:function onUpdate(el){return function appendViewerTo(parentNode){elRef.current||(elRef.current=document.createElement("div"),elRef.current.className=Viewer_module_default.a.full,viewerRef.current=new view360_esm.a(elRef.current,{image:imageFile.urls.ultra,projectionType:"equirectangular_stereo"===imageFile.configuration.projection?view360_esm.a.PROJECTION_TYPE.STEREOSCOPIC_EQUI:view360_esm.a.PROJECTION_TYPE.EQUIRECTANGULAR,touchDirection:touchSupport?view360_esm.a.TOUCH_DIRECTION.YAW:view360_esm.a.TOUCH_DIRECTION.ALL,useZoom:!1,yaw:initialYawRef.current,pitch:initialPitchRef.current}),viewerRef.current.on(view360_esm.a.EVENTS.READY,(function(){viewerRef.current.updateViewportDimensions(),setIsLoading(!1)}))),parentNode.appendChild(elRef.current),viewerRef.current.updateViewportDimensions()}(el)}})),react_default.a.createElement(spinner,{className:classnames_default()(Viewer_module_default.a.spinner,(obj={},key=Viewer_module_default.a.isLoading,value=isLoading,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))}),react_default.a.createElement("div",{className:Viewer_module_default.a.controls},react_default.a.createElement(ToggleFullscreenButton,{isFullscreen:isFullscreen,onEnter:function(){screenfull_default.a.isEnabled&&screenfull_default.a.request(),setIsFullscreen(!0),viewerRef.current.enableSensor()},onExit:function(){screenfull_default.a.isEnabled&&screenfull_default.a.exit(),setIsFullscreen(!1)}})))}__webpack_require__.d(__webpack_exports__,"default",(function(){return Viewer})),Viewer.displayName="Viewer";var DOMNodeContainer=react_default.a.memo((function(_ref2){var className=_ref2.className,onUpdate=_ref2.onUpdate,ref=Object(react.useRef)();return Object(react.useEffect)((function(){var current=ref.current;return onUpdate(current),function(){current.removeChild(current.firstChild)}})),react_default.a.createElement("div",{ref:ref,className:className})}),(function(){return!0}));Viewer.__docgenInfo={description:"",methods:[],displayName:"Viewer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/Panorama/Viewer.js"]={name:"Viewer",docgenInfo:Viewer.__docgenInfo,path:"src/frontend/Panorama/Viewer.js"})},1452:function(module,exports,__webpack_require__){var api=__webpack_require__(13),content=__webpack_require__(1453);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1453:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(10),___CSS_LOADER_ICSS_IMPORT_0___=__webpack_require__(121);(exports=___CSS_LOADER_API_IMPORT___(!1)).i(___CSS_LOADER_ICSS_IMPORT_0___,"",!0),exports.push([module.i,".ToggleFullscreenButton-module_button__2eNZT {\n  width: 40px;\n  height: 40px;\n  margin: 0 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: currentColor;\n  cursor: pointer;\n}\n\n.ToggleFullscreenButton-module_button__2eNZT svg {\n  fill: currentColor;\n  width: 20px;\n  height: 20px;\n}\n",""]),exports.locals={button:"ToggleFullscreenButton-module_button__2eNZT "+___CSS_LOADER_ICSS_IMPORT_0___.locals.unstyledButton},module.exports=exports},1454:function(module,exports,__webpack_require__){var api=__webpack_require__(13),content=__webpack_require__(1455);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1455:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,".Fullscreen-module_wrapper__1WV01 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 20000;\n}\n",""]),exports.locals={wrapper:"Fullscreen-module_wrapper__1WV01"},module.exports=exports},1456:function(module,exports,__webpack_require__){var api=__webpack_require__(13),content=__webpack_require__(1457);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1457:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,".Viewer-module_full__1Vx7O {\n  height: 100%;\n}\n\n.Viewer-module_container__oQ_yg {\n  background-color: #000;\n  color: #fff;\n  cursor: move;\n}\n\n.Viewer-module_controls__2Il1l {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fff;\n  background: linear-gradient(30deg, transparent, transparent 60%, #000000a6);\n  padding: 5px 5px 40px 70px;\n  pointer-events: none;\n}\n\n.Viewer-module_controls__2Il1l > * {\n  pointer-events: auto;\n}\n\n.Viewer-module_spinner__2HKB0 {\n  -webkit-animation: Viewer-module_spin__2oSYC 0.75s linear infinite;\n          animation: Viewer-module_spin__2oSYC 0.75s linear infinite;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n}\n\n.Viewer-module_spinner__2HKB0.Viewer-module_isLoading__1W-P6 {\n  display: block;\n}\n\n@-webkit-keyframes Viewer-module_spin__2oSYC {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes Viewer-module_spin__2oSYC {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]),exports.locals={full:"Viewer-module_full__1Vx7O",container:"Viewer-module_container__oQ_yg Viewer-module_full__1Vx7O",controls:"Viewer-module_controls__2Il1l",spinner:"Viewer-module_spinner__2HKB0",spin:"Viewer-module_spin__2oSYC",isLoading:"Viewer-module_isLoading__1W-P6"},module.exports=exports}}]);
//# sourceMappingURL=4.c95c45f516168d233bdd.bundle.js.map