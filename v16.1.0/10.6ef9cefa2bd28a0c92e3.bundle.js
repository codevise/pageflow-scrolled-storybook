/*! For license information please see 10.6ef9cefa2bd28a0c92e3.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1716:function(module,__webpack_exports__,__webpack_require__){"use strict";var extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)};var __assign=function(){return(__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};var react=__webpack_require__(0),styles=".".concat("kvfysmfp","{overflow:hidden;touch-action:none}.").concat("ufhsfnkm","{transform-origin: 0 0}"),isSsr="undefined"==typeof window,isTouch=function(){return!isSsr&&("ontouchstart"in window||navigator.maxTouchPoints>0)},make3dTransformValue=function(_a){var x=_a.x,y=_a.y,scale=_a.scale;return"scale3d(".concat(scale,",").concat(scale,", 1) translate3d(").concat(x,"px, ").concat(y,"px, 0)")},min=Math.min,max=Math.max;function getOffsetBounds(_a){var containerDimension=_a.containerDimension,childDimension=_a.childDimension,padding=_a.padding,centerContained=_a.centerContained,diff=childDimension-containerDimension;return diff+2*padding<=0&&centerContained?[diff/2,diff/2]:[min(diff+padding,0)-padding,max(0,diff+padding)]}var classnames=function(base,other){return other?"".concat(base," ").concat(other):base},abs=Math.abs,component_min=Math.min,sqrt=Math.sqrt,component_isSsr="undefined"==typeof window,isMac=!component_isSsr&&/(Mac)/i.test(navigator.platform),isDragInteraction=function(i){return"drag"===i},isZoomInteraction=function(i){return"zoom"===i},isZoomGesture=function(wheelEvent){return isMac&&wheelEvent.ctrlKey},cancelEvent=function(event){event.stopPropagation(),event.preventDefault()},getDistance=function(a,b){var x=a.x-b.x,y=a.y-b.y;return sqrt(x*x+y*y)},calculateScale=function(startTouches,endTouches){var startDistance=getDistance(startTouches[0],startTouches[1]);return getDistance(endTouches[0],endTouches[1])/startDistance},swing=function(p){return-Math.cos(p*Math.PI)/2+.5},getPointByPageCoordinates=function(touch){return{x:touch.pageX,y:touch.pageY}},getPageCoordinatesByTouches=function(touches){return Array.from(touches).map(getPointByPageCoordinates)},sum=function(a,b){return a+b},clamp=function(min,max,value){return value<min?min:value>max?max:value},shouldInterceptWheel=function(event){return!(event.ctrlKey||event.metaKey)},noup=function(){},zeroPoint={x:0,y:0},component=function(_super){function PinchZoom(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this._prevDragMovePoint=null,_this._containerObserver=null,_this._fingers=0,_this._firstMove=!0,_this._initialOffset=__assign({},zeroPoint),_this._interaction=null,_this._isDoubleTap=!1,_this._isOffsetsSet=!1,_this._lastDragPosition=null,_this._lastScale=1,_this._lastTouchStart=0,_this._lastZoomCenter=null,_this._listenMouseMove=!1,_this._nthZoom=0,_this._offset=__assign({},zeroPoint),_this._startOffset=__assign({},zeroPoint),_this._startTouches=null,_this._updatePlaned=!1,_this._wheelTimeOut=null,_this._zoomFactor=1,_this._initialZoomFactor=1,_this._draggingPoint=__assign({},zeroPoint),_this._ignoreNextClick=!1,_this._containerRef=react.createRef(),_this._handleClick=function(clickEvent){_this._ignoreNextClick&&(_this._ignoreNextClick=!1,clickEvent.stopPropagation())},_this._onResize=function(){var _a;(null===(_a=_this._containerRef)||void 0===_a?void 0:_a.current)&&(_this._updateInitialZoomFactor(),_this._setupOffsets(),_this._update())},_this._handlerOnTouchEnd=_this._handlerIfEnable((function(touchEndEvent){_this._fingers=touchEndEvent.touches.length,_this.props.shouldCancelHandledTouchEndEvents&&(isZoomInteraction(_this._interaction)||isDragInteraction(_this._interaction)&&(_this._startOffset.x!==_this._offset.x||_this._startOffset.y!==_this._offset.y))&&cancelEvent(touchEndEvent),isDragInteraction(_this._interaction)&&!_this._enoughToDrag()&&_this._handleClick(touchEndEvent),_this._updateInteraction(touchEndEvent)})),_this._handlerOnTouchStart=_this._handlerIfEnable((function(touchStartEvent){_this._firstMove=!0,_this._fingers=touchStartEvent.touches.length,_this._detectDoubleTap(touchStartEvent)})),_this._handlerOnTouchMove=_this._handlerIfEnable((function(touchMoveEvent){_this._isDoubleTap||(_this._collectInertia(touchMoveEvent),_this._firstMove?(_this._updateInteraction(touchMoveEvent),_this._interaction&&cancelEvent(touchMoveEvent),_this._startOffset=__assign({},_this._offset),_this._startTouches=getPageCoordinatesByTouches(touchMoveEvent.touches)):(isZoomInteraction(_this._interaction)?_this._startTouches&&2===_this._startTouches.length&&2===touchMoveEvent.touches.length&&_this._handleZoom(touchMoveEvent,calculateScale(_this._startTouches,getPageCoordinatesByTouches(touchMoveEvent.touches))):isDragInteraction(_this._interaction)&&_this._handleDrag(touchMoveEvent),_this._interaction&&(cancelEvent(touchMoveEvent),_this._update())),_this._firstMove=!1)})),_this._handlerWheel=function(wheelEvent){if(!_this.props.shouldInterceptWheel(wheelEvent)){cancelEvent(wheelEvent);var pageX=wheelEvent.pageX,pageY=wheelEvent.pageY,deltaY=wheelEvent.deltaY,deltaMode=wheelEvent.deltaMode,scaleDelta=1;(isZoomGesture(wheelEvent)||1===deltaMode)&&(scaleDelta=15);var likeTouchEvent={touches:[{pageX:pageX,pageY:pageY}]},center=_this._getOffsetByFirstTouch(likeTouchEvent),dScale=deltaY*scaleDelta;_this._stopAnimation(),_this._scaleTo(_this._zoomFactor-dScale/_this.props.wheelScaleFactor,center),_this._update(),clearTimeout(_this._wheelTimeOut),_this._wheelTimeOut=setTimeout((function(){return _this._sanitize()}),100)}},_this._handlers=_this.props.isTouch()?[["touchstart",_this._handlerOnTouchStart],["touchend",_this._handlerOnTouchEnd],["touchmove",_this._handlerOnTouchMove]]:[["mousemove",_this.simulate(_this._handlerOnTouchMove),_this.props._document],["mouseup",_this.simulate(_this._handlerOnTouchEnd),_this.props._document],["mousedown",_this.simulate(_this._handlerOnTouchStart)],["click",_this._handleClick],["wheel",_this._handlerWheel]],_this}return function __extends(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}(PinchZoom,_super),PinchZoom.prototype._handleDragStart=function(event){this._ignoreNextClick=!0,this.props.onDragStart(),this._stopAnimation(),this._resetInertia(),this._lastDragPosition=null,this._hasInteraction=!0,this._draggingPoint=this._offset,this._handleDrag(event)},PinchZoom.prototype._handleDrag=function(event){var touch=this._getOffsetByFirstTouch(event);this._enoughToDrag()?this._drag(touch,this._lastDragPosition):this._virtualDrag(touch,this._lastDragPosition),this._offset=this._sanitizeOffset(this._offset),this._lastDragPosition=touch},PinchZoom.prototype._resetInertia=function(){this._velocity=null,this._prevDragMovePoint=null},PinchZoom.prototype._realizeInertia=function(){var _this=this,_a=this.props,inertiaFriction=_a.inertiaFriction;if(_a.inertia&&this._velocity){var _b=this._velocity,x=_b.x,y=_b.y;if(x||y){this._stopAnimation(),this._resetInertia();this._animate((function(){if(y*=inertiaFriction,!(x*=inertiaFriction)&&!y)return _this._stopAnimation();var p1,p2,prevOffset=__assign({},_this._offset);if(_this._addOffset({x:x,y:y}),_this._offset=_this._sanitizeOffset(_this._offset),p1=prevOffset,p2=_this._offset,p1.x===p2.x&&p1.y===p2.y)return _this._stopAnimation();_this._update({isAnimation:!0})}),{duration:9999})}}},PinchZoom.prototype._collectInertia=function(_a){var touches=_a.touches;if(this.props.inertia){var startPoint,endPoint,currentCoordinates=getPageCoordinatesByTouches(touches)[0],prevPoint=this._prevDragMovePoint;prevPoint&&(this._velocity=(startPoint=currentCoordinates,{x:(endPoint=prevPoint).x-startPoint.x,y:endPoint.y-startPoint.y})),this._prevDragMovePoint=currentCoordinates}},PinchZoom.prototype._handleDragEnd=function(){this.props.onDragEnd(),this._end(),this._realizeInertia()},PinchZoom.prototype._handleZoomStart=function(){this.props.onZoomStart(),this._stopAnimation(),this._lastScale=1,this._nthZoom=0,this._lastZoomCenter=null,this._hasInteraction=!0},PinchZoom.prototype._handleZoom=function(event,newScale){var vectors,touchCenter={x:(vectors=this._getOffsetTouches(event)).map((function(_a){return _a.x})).reduce(sum,0)/vectors.length,y:vectors.map((function(_a){return _a.y})).reduce(sum,0)/vectors.length},scale=newScale/this._lastScale;this._lastScale=newScale,this._nthZoom+=1,this._nthZoom>3&&(this._scale(scale,touchCenter),this._drag(touchCenter,this._lastZoomCenter),this.props.enforceBoundsDuringZoom&&(this._offset=this._sanitizeOffset(this._offset))),this._lastZoomCenter=touchCenter},PinchZoom.prototype._handleZoomEnd=function(){this.props.onZoomEnd(),this._end()},PinchZoom.prototype._handleDoubleTap=function(event){var _this=this;if(!this._hasInteraction&&0!==this.props.tapZoomFactor){var needZoomOut=this.props.doubleTapZoomOutOnMaxScale&&this._zoomFactor===this.props.maxZoom||this.props.doubleTapToggleZoom&&this._zoomFactor>1;this.props.onDoubleTap(),this._ignoreNextClick=!0;var zoomFactor=this._zoomFactor+this.props.tapZoomFactor,startZoomFactor=this._zoomFactor,center=this._getOffsetByFirstTouch(event);this._isDoubleTap=!0,startZoomFactor>zoomFactor&&(center=this._getCurrentZoomCenter()),needZoomOut?this._zoomOutAnimation():this._animate((function(progress){_this._scaleTo(startZoomFactor+progress*(zoomFactor-startZoomFactor),center)}))}},PinchZoom.prototype._computeInitialOffset=function(){var rect=this._getContainerRect(),_a=this._getChildSize(),width=_a.width,height=_a.height,x=-abs(width*this._getInitialZoomFactor()-rect.width)/2,y=-abs(height*this._getInitialZoomFactor()-rect.height)/2;this._initialOffset={x:x,y:y}},PinchZoom.prototype._resetOffset=function(){this._offset=__assign({},this._initialOffset)},PinchZoom.prototype._setupOffsets=function(){this.props.setOffsetsOnce&&this._isOffsetsSet||(this._isOffsetsSet=!0,this._computeInitialOffset(),this._resetOffset())},PinchZoom.prototype._sanitizeOffset=function(offset){var rect=this._getContainerRect(),_a=this._getChildSize(),width=_a.width,height=_a.height,elWidth=width*this._getInitialZoomFactor()*this._zoomFactor,elHeight=height*this._getInitialZoomFactor()*this._zoomFactor,_b=getOffsetBounds({containerDimension:rect.width,childDimension:elWidth,padding:this.props.horizontalPadding,centerContained:this.props.centerContained}),minOffsetX=_b[0],maxOffsetX=_b[1],_c=getOffsetBounds({containerDimension:rect.height,childDimension:elHeight,padding:this.props.verticalPadding,centerContained:this.props.centerContained}),minOffsetY=_c[0],maxOffsetY=_c[1];return{x:clamp(minOffsetX,maxOffsetX,offset.x),y:clamp(minOffsetY,maxOffsetY,offset.y)}},PinchZoom.prototype.alignCenter=function(options){var _this=this,_a=__assign({duration:250,animated:!0},options),x=_a.x,y=_a.y,scale=_a.scale,animated=_a.animated,duration=_a.duration,startZoomFactor=this._zoomFactor,startOffset=__assign({},this._offset),rect=this._getContainerRect(),containerCenter={x:rect.width/2,y:rect.height/2};if(this._zoomFactor=1,this._offset={x:-(containerCenter.x-x),y:-(containerCenter.y-y)},this._scaleTo(scale,containerCenter),this._stopAnimation(),!animated)return this._update();var diffZoomFactor=this._zoomFactor-startZoomFactor,diffOffset_x=this._offset.x-startOffset.x,diffOffset_y=this._offset.y-startOffset.y;this._zoomFactor=startZoomFactor,this._offset=__assign({},startOffset);this._animate((function(progress){var x=startOffset.x+diffOffset_x*progress,y=startOffset.y+diffOffset_y*progress;_this._zoomFactor=startZoomFactor+diffZoomFactor*progress,_this._offset=_this._sanitizeOffset({x:x,y:y}),_this._update()}),{callback:function(){return _this._sanitize()},duration:duration})},PinchZoom.prototype.scaleTo=function(options){var _this=this,_a=__assign({duration:250,animated:!0},options),x=_a.x,y=_a.y,scale=_a.scale,animated=_a.animated,duration=_a.duration,startZoomFactor=this._zoomFactor,startOffset=__assign({},this._offset);if(this._zoomFactor=1,this._offset={x:0,y:0},this._scaleTo(scale,{x:x,y:y}),this._stopAnimation(),!animated)return this._update();var diffZoomFactor=this._zoomFactor-startZoomFactor,diffOffset_x=this._offset.x-startOffset.x,diffOffset_y=this._offset.y-startOffset.y;this._zoomFactor=startZoomFactor,this._offset=__assign({},startOffset);this._animate((function(progress){var x=startOffset.x+diffOffset_x*progress,y=startOffset.y+diffOffset_y*progress;_this._zoomFactor=startZoomFactor+diffZoomFactor*progress,_this._offset={x:x,y:y},_this._update()}),{callback:function(){return _this._sanitize()},duration:duration})},PinchZoom.prototype._scaleTo=function(zoomFactor,center){this._scale(zoomFactor/this._zoomFactor,center),this._offset=this._sanitizeOffset(this._offset)},PinchZoom.prototype._scale=function(scale,center){scale=this._scaleZoomFactor(scale),this._addOffset({x:(scale-1)*(center.x+this._offset.x),y:(scale-1)*(center.y+this._offset.y)}),this.props.onZoomUpdate()},PinchZoom.prototype._scaleZoomFactor=function(scale){var originalZoomFactor=this._zoomFactor;return this._zoomFactor*=scale,this._zoomFactor=clamp(this.props.minZoom,this.props.maxZoom,this._zoomFactor),this._zoomFactor/originalZoomFactor},PinchZoom.prototype._canDrag=function(){return this.props.draggableUnZoomed||!((value=this._zoomFactor)>(expected=1)-.01&&value<expected+.01);var value,expected},PinchZoom.prototype._drag=function(center,lastCenter){if(lastCenter){var y=-(center.y-lastCenter.y),x=-(center.x-lastCenter.x);this.props.lockDragAxis?abs(x)>abs(y)?this._addOffset({x:x,y:0}):this._addOffset({y:y,x:0}):this._addOffset({x:x,y:y}),this.props.onDragUpdate()}},PinchZoom.prototype._virtualDrag=function(center,lastCenter){if(lastCenter){var y=-(center.y-lastCenter.y),x=-(center.x-lastCenter.x);this._draggingPoint={x:x+this._draggingPoint.x,y:y+this._draggingPoint.y}}},PinchZoom.prototype._addOffset=function(offset){var _a=this._offset,x=_a.x,y=_a.y;this._offset={x:x+offset.x,y:y+offset.y}},PinchZoom.prototype._sanitize=function(){this._zoomFactor<this.props.zoomOutFactor?(this._resetInertia(),this._zoomOutAnimation()):this._isInsaneOffset()&&this._sanitizeOffsetAnimation()},PinchZoom.prototype._isInsaneOffset=function(){var offset=this._offset,sanitizedOffset=this._sanitizeOffset(offset);return sanitizedOffset.x!==offset.x||sanitizedOffset.y!==offset.y},PinchZoom.prototype._sanitizeOffsetAnimation=function(){var _this=this,targetOffset=this._sanitizeOffset(this._offset),startOffset=__assign({},this._offset);this._animate((function(progress){var x=startOffset.x+progress*(targetOffset.x-startOffset.x),y=startOffset.y+progress*(targetOffset.y-startOffset.y);_this._offset={x:x,y:y},_this._update()}))},PinchZoom.prototype._zoomOutAnimation=function(){var _this=this;if(1!==this._zoomFactor){var startZoomFactor=this._zoomFactor,center=this._getCurrentZoomCenter();this._animate((function(progress){var scaleFactor=startZoomFactor+progress*(1-startZoomFactor);_this._scaleTo(scaleFactor,center)}))}},PinchZoom.prototype._getInitialZoomFactor=function(){return this._initialZoomFactor},PinchZoom.prototype._getCurrentZoomCenter=function(){var _a=this._offset,x=_a.x,y=_a.y,offsetLeft=x-this._initialOffset.x,offsetTop=y-this._initialOffset.y;return{x:-1*x-offsetLeft/(1/this._zoomFactor-1),y:-1*y-offsetTop/(1/this._zoomFactor-1)}},PinchZoom.prototype._getOffsetByFirstTouch=function(event){return this._getOffsetTouches(event)[0]},PinchZoom.prototype._getOffsetTouches=function(event){var _document=this.props._document,_html=_document.documentElement,_body=_document.body,_a=this._getContainerRect(),top=_a.top,left=_a.left,scrollTop=_html.scrollTop||_body.scrollTop,scrollLeft=_html.scrollLeft||_body.scrollLeft,posTop=top+scrollTop,posLeft=left+scrollLeft;return getPageCoordinatesByTouches(event.touches).map((function(_a){var x=_a.x,y=_a.y;return{x:x-posLeft,y:y-posTop}}))},PinchZoom.prototype._animate=function(frameFn,options){var _this=this,startTime=(new Date).getTime(),_a=__assign({timeFn:swing,callback:function(){},duration:this.props.animationDuration},options),timeFn=_a.timeFn,callback=_a.callback,duration=_a.duration,renderFrame=function(){if(_this._inAnimation){var frameTime=(new Date).getTime()-startTime,progress=frameTime/duration;frameTime>=duration?(frameFn(1),_this._stopAnimation(),callback(),_this._update()):(progress=timeFn(progress),frameFn(progress),_this._update({isAnimation:!0}),requestAnimationFrame(renderFrame))}};this._inAnimation=!0,requestAnimationFrame(renderFrame)},PinchZoom.prototype._stopAnimation=function(){this._inAnimation=!1},PinchZoom.prototype._end=function(){this._hasInteraction=!1,this._sanitize(),this._update()},PinchZoom.prototype._getContainerRect=function(){return this._containerRef.current.getBoundingClientRect()},PinchZoom.prototype._getChildSize=function(){var div=this._containerRef.current;return function(element){if(element){var offsetWidth=element.offsetWidth,offsetHeight=element.offsetHeight;if(offsetWidth&&offsetHeight)return{width:offsetWidth,height:offsetHeight};var style=getComputedStyle(element),width=parseFloat(style.width),height=parseFloat(style.height);if(height&&width)return{width:width,height:height}}return{width:0,height:0}}(null==div?void 0:div.firstElementChild)},PinchZoom.prototype._updateInitialZoomFactor=function(){var rect=this._getContainerRect(),size=this._getChildSize(),xZoomFactor=rect.width/size.width,yZoomFactor=rect.height/size.height;this._initialZoomFactor=component_min(xZoomFactor,yZoomFactor)},PinchZoom.prototype._bindEvents=function(){var _this=this,div=this._containerRef.current;window.ResizeObserver?(this._containerObserver=new ResizeObserver(this._onResize),this._containerObserver.observe(div)):window.addEventListener("resize",this._onResize),this._handlers.forEach((function(_a){var eventName=_a[0],fn=_a[1];(_a[2]||div).addEventListener(eventName,fn,!0)})),Array.from(div.querySelectorAll("img")).forEach((function(img){return img.addEventListener("load",_this._onResize)}))},PinchZoom.prototype._unSubscribe=function(){var _this=this,div=this._containerRef.current;this._containerObserver&&(this._containerObserver.disconnect(),this._containerObserver=null),window.removeEventListener("resize",this._onResize),this._handlers.forEach((function(_a){var eventName=_a[0],fn=_a[1];(_a[2]||div).removeEventListener(eventName,fn,!0)})),Array.from(div.querySelectorAll("img")).forEach((function(img){return img.removeEventListener("load",_this._onResize)}))},PinchZoom.prototype._update=function(options){var _this=this;if(!this._updatePlaned){var updateFrame=function(){var scale=_this._getInitialZoomFactor()*_this._zoomFactor,x=-_this._offset.x/scale,y=-_this._offset.y/scale;_this.props.onUpdate({scale:scale,x:x,y:y})};if(null==options?void 0:options.isAnimation)return updateFrame();this._updatePlaned=!0,requestAnimationFrame((function(){_this._updatePlaned=!1,updateFrame()}))}},PinchZoom.prototype._handlerIfEnable=function(fn){var _this=this;return function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];_this.props.enabled&&fn.apply(void 0,args)}},PinchZoom.prototype._setInteraction=function(newInteraction,event){var interaction=this._interaction;interaction!==newInteraction&&(interaction&&!newInteraction&&(isZoomInteraction(interaction)?this._handleZoomEnd():isDragInteraction(interaction)&&this._handleDragEnd()),isZoomInteraction(newInteraction)?this._handleZoomStart():isDragInteraction(newInteraction)&&this._handleDragStart(event)),this._interaction=newInteraction},PinchZoom.prototype._distanceBetweenNumbers=function(a,b){return a>b?a-b:b-a},PinchZoom.prototype._enoughToDrag=function(){return this._distanceBetweenNumbers(this._startOffset.x,this._draggingPoint.x)>5||this._distanceBetweenNumbers(this._startOffset.y,this._draggingPoint.y)>5},PinchZoom.prototype._updateInteraction=function(event){var fingers=this._fingers;return 2===fingers?this._setInteraction("zoom",event):1===fingers&&this._canDrag()?this._setInteraction("drag",event):void this._setInteraction(null,event)},PinchZoom.prototype._detectDoubleTap=function(event){var time=(new Date).getTime();this._fingers>1&&(this._lastTouchStart=0),time-this._lastTouchStart<300?(cancelEvent(event),this._handleDoubleTap(event),isZoomInteraction(this._interaction)?this._handleZoomEnd():isDragInteraction(this._interaction)&&this._handleDragEnd()):this._isDoubleTap=!1,1===this._fingers&&(this._lastTouchStart=time)},PinchZoom.prototype.simulate=function(fn){var _this=this;return function(mouseEvent){var pageX=mouseEvent.pageX,pageY=mouseEvent.pageY,type=mouseEvent.type,isEnd="mouseup"===type;"mousedown"===type&&(mouseEvent.preventDefault(),_this._listenMouseMove=!0),_this._listenMouseMove&&(mouseEvent.touches=isEnd?[]:[{pageX:pageX,pageY:pageY}],fn(mouseEvent)),isEnd&&(_this._listenMouseMove=!1)}},PinchZoom.prototype.componentDidMount=function(){this._bindEvents(),this._update()},PinchZoom.prototype.componentWillUnmount=function(){this._stopAnimation(),this._unSubscribe()},PinchZoom.prototype.render=function(){var _a=this.props,children=_a.children,containerProps=_a.containerProps,child=react.Children.only(children),props=containerProps||{};return react.createElement(react.Fragment,null,react.createElement("style",null,styles),react.createElement("div",__assign({},props,{ref:this._containerRef,className:classnames("kvfysmfp",props.className)}),react.cloneElement(child,{className:classnames("ufhsfnkm",child.props.className)})))},PinchZoom.defaultProps={animationDuration:250,draggableUnZoomed:!0,enforceBoundsDuringZoom:!1,centerContained:!1,enabled:!0,inertia:!0,inertiaFriction:.96,horizontalPadding:0,isTouch:isTouch,lockDragAxis:!1,maxZoom:5,minZoom:.5,onDoubleTap:noup,onDragEnd:noup,onDragStart:noup,onDragUpdate:noup,onZoomEnd:noup,onZoomStart:noup,onZoomUpdate:noup,setOffsetsOnce:!1,shouldInterceptWheel:shouldInterceptWheel,shouldCancelHandledTouchEndEvents:!1,tapZoomFactor:1,verticalPadding:0,wheelScaleFactor:1500,zoomOutFactor:1.3,doubleTapZoomOutOnMaxScale:!1,doubleTapToggleZoom:!1,_document:component_isSsr?null:window.document},PinchZoom}(react.Component);__webpack_require__.d(__webpack_exports__,"b",(function(){return make3dTransformValue}));__webpack_exports__.a=component}}]);
//# sourceMappingURL=10.6ef9cefa2bd28a0c92e3.bundle.js.map