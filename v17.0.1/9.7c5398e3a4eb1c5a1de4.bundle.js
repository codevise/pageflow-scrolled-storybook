(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1729:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(global){__webpack_require__(25),__webpack_require__(37),__webpack_require__(142),__webpack_require__(23),__webpack_require__(193),__webpack_require__(312),__webpack_require__(311),__webpack_require__(416),__webpack_require__(313),__webpack_require__(36),__webpack_require__(159);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(31),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),deep_assign__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1708),deep_assign__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(deep_assign__WEBPACK_IMPORTED_MODULE_13__),react_measure__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(94),wavesurfer_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(1710),wavesurfer_js__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_15__);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var EVENTS=["audioprocess","error","finish","loading","mouseup","pause","play","ready","scroll","seek","zoom"];function positiveIntegerProptype(props,propName,componentName){var n=props[propName];return void 0!==n&&("number"!=typeof n||n!==parseInt(n,10)||0>n)?new Error("Invalid ".concat(propName," supplied to ").concat(componentName,",\n      expected a positive integer")):null}var Wavesurfer=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Wavesurfer,_Component);var _super=_createSuper(Wavesurfer);function Wavesurfer(props){var _this;if(function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Wavesurfer),(_this=_super.call(this,props)).state={isReady:!1},void 0===_typeof(wavesurfer_js__WEBPACK_IMPORTED_MODULE_15___default.a))throw new Error("WaveSurfer is undefined!");return _this._loadMediaElt=_this._loadMediaElt.bind(_assertThisInitialized(_this)),_this._loadAudio=_this._loadAudio.bind(_assertThisInitialized(_this)),_this._seekTo=_this._seekTo.bind(_assertThisInitialized(_this)),_this._handleResize=function(){_this.state.isReady&&_this._wavesurfer.zoom(!1)},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Wavesurfer,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this,options=deep_assign__WEBPACK_IMPORTED_MODULE_13___default()({},this.props.options,{container:this.wavesurferEl});this.props.mediaElt&&(options.backend="MediaElement"),this._wavesurfer=wavesurfer_js__WEBPACK_IMPORTED_MODULE_15___default.a.create(options),this._wavesurfer.on("ready",(function(){_this2.setState({isReady:!0,pos:_this2.props.pos}),_this2.props.pos&&_this2._seekTo(_this2.props.pos),null!=_this2.props.volume&&_this2._wavesurfer.setVolume(_this2.props.volume),_this2.props.playing&&_this2._wavesurfer.play(),_this2.props.zoom&&_this2._wavesurfer.zoom(_this2.props.zoom)})),this._wavesurfer.on("audioprocess",(function(pos){_this2.setState({pos:pos}),_this2.props.onPosChange({wavesurfer:_this2._wavesurfer,originalArgs:[pos]})})),this._wavesurfer.on("seek",(function(pos){var formattedPos=_this2._posToSec(pos);_this2.setState({formattedPos:formattedPos}),_this2.props.onPosChange({wavesurfer:_this2._wavesurfer,originalArgs:[formattedPos]})})),EVENTS.forEach((function(e){var propCallback=_this2.props["on".concat(function capitaliseFirstLetter(string){return string.split("-").map((function(part){return part.charAt(0).toUpperCase()+part.slice(1)})).join("")}(e))],wavesurfer=_this2._wavesurfer;propCallback&&_this2._wavesurfer.on(e,(function(){for(var _len=arguments.length,originalArgs=Array(_len),_key=0;_key<_len;_key++)originalArgs[_key]=arguments[_key];propCallback({wavesurfer:wavesurfer,originalArgs:originalArgs})}))})),this.props.audioFile&&this._loadAudio(this.props.audioFile,this.props.audioPeaks),this.props.mediaElt&&this._loadMediaElt(this.props.mediaElt,this.props.audioPeaks)}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){this.props.audioFile!=this.props.audioFile&&this._loadAudio(this.props.audioFile,this.props.audioPeaks),prevProps.mediaElt!==this.props.mediaElt&&this._loadMediaElt(this.props.mediaElt,this.props.audioPeaks),prevProps.audioPeaks!==this.props.audioPeaks&&(this.props.mediaElt?this._loadMediaElt(prevProps.mediaElt,this.props.audioPeaks):this._loadAudio(this.props.audioFile,this.props.audioPeaks)),this.props.pos&&this.state.isReady&&prevProps.pos!==this.props.pos&&this.props.pos!==this.state.pos&&this._seekTo(this.props.pos),this.props.playing!==prevProps.playing&&(this.props.playing?this._wavesurfer.play():this._wavesurfer.pause()),this.props.volume!==prevProps.volume&&this._wavesurfer.setVolume(this.props.volume),this.props.zoom!==prevProps.zoom&&this._wavesurfer.zoom(this.props.zoom),this.props.options.audioRate!==prevProps.options.audioRate&&this._wavesurfer.setPlaybackRate(this.props.options.audioRate),prevProps.options.waveColor!==this.props.options.waveColor&&this._wavesurfer.setWaveColor(this.props.options.waveColor),prevProps.options.progressColor!==this.props.options.progressColor&&this._wavesurfer.setProgressColor(this.props.options.progressColor),prevProps.options.cursorColor!==this.props.options.cursorColor&&this._wavesurfer.setCursorColor(this.props.options.cursorColor),prevProps.options.height!==this.props.options.height&&this._wavesurfer.setHeight(this.props.options.height)}},{key:"componentWillUnmount",value:function componentWillUnmount(){var _this3=this;EVENTS.forEach((function(e){_this3._wavesurfer.un(e)})),this._wavesurfer.destroy()}},{key:"_secToPos",value:function _secToPos(sec){return 1/this._wavesurfer.getDuration()*sec}},{key:"_posToSec",value:function _posToSec(pos){return pos*this._wavesurfer.getDuration()}},{key:"_seekTo",value:function _seekTo(sec){var pos=this._secToPos(sec);this.props.options.autoCenter?this._wavesurfer.seekAndCenter(pos):this._wavesurfer.seekTo(pos)}},{key:"_loadMediaElt",value:function _loadMediaElt(selectorOrElt,audioPeaks){selectorOrElt instanceof global.HTMLElement?this._loadAudio(selectorOrElt,audioPeaks):global.document.querySelector(selectorOrElt)&&this._loadAudio(global.document.querySelector(selectorOrElt),audioPeaks)}},{key:"_loadAudio",value:function _loadAudio(audioFileOrElt,audioPeaks){if(audioFileOrElt instanceof global.HTMLElement)this._wavesurfer.loadMediaElement(audioFileOrElt,audioPeaks);else if("string"==typeof audioFileOrElt)this._wavesurfer.load(audioFileOrElt,audioPeaks);else{if(!(audioFileOrElt instanceof global.Blob||audioFileOrElt instanceof global.File))throw new Error("Wavesurfer._loadAudio expects prop audioFile\n        to be either HTMLElement, string or file/blob");this._wavesurfer.loadBlob(audioFileOrElt,audioPeaks)}}},{key:"_measureIfResponsive",value:function _measureIfResponsive(children){return this.props.responsive?react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_measure__WEBPACK_IMPORTED_MODULE_14__.a,{client:!0,onResize:this._handleResize},(function(_ref){var measureRef=_ref.measureRef;return(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{ref:measureRef},children))})):children}},{key:"render",value:function render(){var _this4=this,childrenWithProps=!!this.props.children&&react__WEBPACK_IMPORTED_MODULE_11___default.a.Children.map(this.props.children,(function(child){return react__WEBPACK_IMPORTED_MODULE_11___default.a.cloneElement(child,{wavesurfer:_this4._wavesurfer,isReady:_this4.state.isReady})}));return this._measureIfResponsive(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div",{ref:function ref(c){_this4.wavesurferEl=c}}),childrenWithProps))}}]),Wavesurfer}(react__WEBPACK_IMPORTED_MODULE_11__.Component);Wavesurfer.displayName="Wavesurfer",Wavesurfer.propTypes={playing:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,pos:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,audioFile:function audioFile(props,propName,componentName){var prop=props[propName];return!prop||"string"==typeof prop||prop instanceof global.Blob||prop instanceof global.File?null:new Error("Invalid ".concat(propName," supplied to ").concat(componentName,"\n        expected either string or file/blob"))},mediaElt:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.instanceOf(global.HTMLElement)]),audioPeaks:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array,volume:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,zoom:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,responsive:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,onPosChange:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.element,prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.array]),options:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({audioRate:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,backend:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOf(["WebAudio","MediaElement"]),barWidth:function barWidth(props,propName,componentName){var prop=props[propName];return void 0!==prop&&"number"!=typeof prop?new Error("Invalid ".concat(propName," supplied to ").concat(componentName,"\n          expected either undefined or number")):null},cursorColor:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,cursorWidth:positiveIntegerProptype,dragSelection:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,fillParent:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,height:positiveIntegerProptype,hideScrollbar:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,interact:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,loopSelection:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,mediaControls:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,minPxPerSec:positiveIntegerProptype,normalize:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,pixelRatio:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,progressColor:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,scrollParent:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,skipLength:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,waveColor:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,autoCenter:prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool})},Wavesurfer.defaultProps={playing:!1,pos:0,options:wavesurfer_js__WEBPACK_IMPORTED_MODULE_15___default.a.defaultParams,responsive:!0,onPosChange:function onPosChange(){}},Wavesurfer.__docgenInfo={description:"",methods:[{name:"_secToPos",docblock:null,modifiers:[],params:[{name:"sec",type:null}],returns:null},{name:"_posToSec",docblock:null,modifiers:[],params:[{name:"pos",type:null}],returns:null},{name:"_seekTo",docblock:null,modifiers:[],params:[{name:"sec",type:null}],returns:null},{name:"_loadMediaElt",docblock:null,modifiers:[],params:[{name:"selectorOrElt",type:null},{name:"audioPeaks",type:null}],returns:null},{name:"_loadAudio",docblock:null,modifiers:[],params:[{name:"audioFileOrElt",type:null},{name:"audioPeaks",type:null}],returns:null},{name:"_measureIfResponsive",docblock:null,modifiers:[],params:[{name:"children",type:null}],returns:null}],displayName:"Wavesurfer",props:{playing:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},pos:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},options:{defaultValue:{value:"WaveSurfer.defaultParams",computed:!0},type:{name:"shape",value:{audioRate:{name:"number",required:!1},backend:{name:"enum",value:[{value:"'WebAudio'",computed:!1},{value:"'MediaElement'",computed:!1}],required:!1},barWidth:{name:"custom",raw:"(props, propName, componentName) => {\n  const prop = props[propName];\n  if (prop !== undefined && typeof prop !== 'number') {\n    return new Error(`Invalid ${propName} supplied to ${componentName}\n      expected either undefined or number`);\n  }\n\n  return null;\n}",required:!1},cursorColor:{name:"string",required:!1},cursorWidth:{name:"custom",raw:"positiveIntegerProptype",required:!1},dragSelection:{name:"bool",required:!1},fillParent:{name:"bool",required:!1},height:{name:"custom",raw:"positiveIntegerProptype",required:!1},hideScrollbar:{name:"bool",required:!1},interact:{name:"bool",required:!1},loopSelection:{name:"bool",required:!1},mediaControls:{name:"bool",required:!1},minPxPerSec:{name:"custom",raw:"positiveIntegerProptype",required:!1},normalize:{name:"bool",required:!1},pixelRatio:{name:"number",required:!1},progressColor:{name:"string",required:!1},scrollParent:{name:"bool",required:!1},skipLength:{name:"number",required:!1},waveColor:{name:"string",required:!1},autoCenter:{name:"bool",required:!1}}},required:!1,description:""},responsive:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},onPosChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},audioFile:{type:{name:"custom",raw:"(props, propName, componentName) => {\n  const prop = props[propName];\n  if (prop &&\n      typeof prop !== 'string' &&\n      !(prop instanceof global.Blob) &&\n      !(prop instanceof global.File)) {\n    return new Error(`Invalid ${propName} supplied to ${componentName}\n      expected either string or file/blob`);\n  }\n\n  return null;\n}"},required:!1,description:""},mediaElt:{type:{name:"union",value:[{name:"string"},{name:"instanceOf",value:"global.HTMLElement"}]},required:!1,description:""},audioPeaks:{type:{name:"array"},required:!1,description:""},volume:{type:{name:"number"},required:!1,description:""},zoom:{type:{name:"number"},required:!1,description:""},children:{type:{name:"union",value:[{name:"element"},{name:"array"}]},required:!1,description:""}}},__webpack_exports__.default=Wavesurfer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/PlayerControls/WaveformPlayerControls/Wavesurfer.js"]={name:"Wavesurfer",docgenInfo:Wavesurfer.__docgenInfo,path:"src/frontend/PlayerControls/WaveformPlayerControls/Wavesurfer.js"})}.call(this,__webpack_require__(53))}}]);
//# sourceMappingURL=9.7c5398e3a4eb1c5a1de4.bundle.js.map