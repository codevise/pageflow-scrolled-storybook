(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1444:function(module,exports,__webpack_require__){var api=__webpack_require__(11),content=__webpack_require__(1450);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1448:function(module,exports,__webpack_require__){var api=__webpack_require__(11),content=__webpack_require__(1449);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1449:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,'.SectionDecorator-module_wrapper__-oNHl {\n  position: relative;\n}\n\n.SectionDecorator-module_selected__10MUC > section::before {\n  content: "";\n  display: block;\n  position: absolute;\n  border: solid 1px currentColor;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  z-index: 9;\n  pointer-events: none;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr > section:before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: 0;\n  width: 100%;\n  border-top: dotted 2px #fff;\n  z-index: 9;\n  background-color: #555;\n  opacity: 0.7;\n}\n\n.SectionDecorator-module_controls__1HZ7e {\n  position: absolute;\n  top: -33px;\n  right: 0;\n  height: 100%;\n  width: 50px;\n  padding-left: 20px;\n  z-index: 10;\n  display: none;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr .SectionDecorator-module_controls__1HZ7e,\n.SectionDecorator-module_selected__10MUC .SectionDecorator-module_controls__1HZ7e {\n  display: block;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr .SectionDecorator-module_editToolbar__2vSGs {\n  visibility: hidden;\n}\n\n.SectionDecorator-module_toolbar__1ubWF {\n  position: absolute;\n  padding: 10px 0 10px 10px;\n  z-index: 10;\n  overflow: hidden;\n}\n\n.SectionDecorator-module_transitionToolbar-before__22nc6 {\n  top: 0;\n}\n\n.SectionDecorator-module_transitionToolbar-after__28ejO {\n  bottom: -63px;\n}\n',""]),exports.locals={wrapper:"SectionDecorator-module_wrapper__-oNHl",selected:"SectionDecorator-module_selected__10MUC",transitionSelected:"SectionDecorator-module_transitionSelected__1aAvr",controls:"SectionDecorator-module_controls__1HZ7e",editToolbar:"SectionDecorator-module_editToolbar__2vSGs",toolbar:"SectionDecorator-module_toolbar__1ubWF","transitionToolbar-before":"SectionDecorator-module_transitionToolbar-before__22nc6 SectionDecorator-module_toolbar__1ubWF","transitionToolbar-after":"SectionDecorator-module_transitionToolbar-after__28ejO SectionDecorator-module_toolbar__1ubWF"},module.exports=exports},1450:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,".ContentElementDecorator-module_wrapper__3l93F {\n}\n",""]),exports.locals={wrapper:"ContentElementDecorator-module_wrapper__3l93F"},module.exports=exports},1451:function(module,exports,__webpack_require__){var api=__webpack_require__(11),content=__webpack_require__(1452);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1452:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,'.DropTargets-module_target__3A9OZ {\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  left: -50px;\n  padding-left: 50px;\n  padding-bottom: 0.5em;\n  opacity: 0.8;\n}\n\n.DropTargets-module_target__3A9OZ::before {\n  content: "";\n  position: absolute;\n  display: block;\n  left: 50px;\n  right: 0;\n}\n\n.DropTargets-module_target__3A9OZ.DropTargets-module_isOver__3QLOh::before {\n  border-top: solid 2px currentColor;\n}\n\n.DropTargets-module_before__1A8kf {\n  top: -0.5em;\n}\n\n.DropTargets-module_before__1A8kf::before {\n  top: -1px;\n}\n\n.DropTargets-module_after__1xK2x {\n  top: 50%;\n}\n\n.DropTargets-module_after__1xK2x::before {\n  top: calc(100% - 1px);\n}\n',""]),exports.locals={target:"DropTargets-module_target__3A9OZ",isOver:"DropTargets-module_isOver__3QLOh",before:"DropTargets-module_before__1A8kf DropTargets-module_target__3A9OZ",after:"DropTargets-module_after__1xK2x DropTargets-module_target__3A9OZ"},module.exports=exports},1453:function(module,exports,__webpack_require__){var api=__webpack_require__(11),content=__webpack_require__(1454);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1454:function(module,exports,__webpack_require__){(exports=__webpack_require__(10)(!1)).push([module.i,".ContentElementInsertButton-module_container__1rHvp {\n  height: 0;\n  position: relative;\n  top: 1em;\n  text-align: center;\n  opacity: 0.8;\n}\n\n.ContentElementInsertButton-module_hovered__2qRHR {\n  opacity: 1;\n}\n\n.ContentElementInsertButton-module_container__1rHvp::before,\n.ContentElementInsertButton-module_container__1rHvp::after {\n  content: '';\n  border-top: solid 1px currentColor;\n  width: calc(50% - 20px);\n  position: absolute;\n  top: 0;\n}\n\n.ContentElementInsertButton-module_container__1rHvp::before {\n  left: 0;\n}\n\n.ContentElementInsertButton-module_container__1rHvp::after {\n  right: 0;\n}\n\n.ContentElementInsertButton-module_button__1AWJh {\n  border: 0;\n  background: none;\n  color: currentColor;\n  position: relative;\n  top: -8px;\n}\n",""]),exports.locals={container:"ContentElementInsertButton-module_container__1rHvp",hovered:"ContentElementInsertButton-module_hovered__2qRHR",button:"ContentElementInsertButton-module_button__1AWJh"},module.exports=exports},1474:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),DndProvider=__webpack_require__(1438),esm=__webpack_require__(681),entryState=__webpack_require__(22),usePostMessageListener=__webpack_require__(488),EditorState=__webpack_require__(272),backbone_events_standalone=(__webpack_require__(52),__webpack_require__(80)),backbone_events_standalone_default=__webpack_require__.n(backbone_events_standalone),useContentElementEditorCommandSubscription=__webpack_require__(318);function ContentElementEditorCommandSubscriptionProvider(_ref){var emitter=_ref.emitter,children=_ref.children;return(react_default.a.createElement(useContentElementEditorCommandSubscription.a.Provider,{value:emitter},children))}function ScrollPointMessageHandler(){var scrollPoint=Object(react.useRef)(),receiveMessage=Object(react.useCallback)((function(data){"SAVE_SCROLL_POINT"===data.type?(scrollPoint.current=function getCurrentScrollPoint(){var scrollPointElement=function getSelectionScrollPointElement(){return document.querySelector("[data-scrollpoint=selection]")}()||function getScrollPointElementWithMinimumTopPositionInViewport(){for(var scrollPointElement,rect,minTop=1/0,scrollPoints=document.querySelectorAll("[data-scrollpoint]"),i=0;i<scrollPoints.length;i++)0<(rect=scrollPoints[i].getBoundingClientRect()).top&&rect.top<minTop&&(minTop=rect.top,scrollPointElement=scrollPoints[i]);return scrollPointElement}();return null==scrollPointElement?void 0:scrollPointElement.getAttribute("data-scrollpoint")}(),window.parent.postMessage({type:"SAVED_SCROLL_POINT"},window.location.origin)):"RESTORE_SCROLL_POINT"===data.type&&scrollPoint.current&&function restoreScrollPoint(name){var element=document.querySelector('[data-scrollpoint="'.concat(name,'"]'));element&&window.scrollTo({top:element.getBoundingClientRect().top+window.scrollY-100,behavior:"smooth"})}(scrollPoint.current)}),[]);return Object(usePostMessageListener.a)(receiveMessage),null}ContentElementEditorCommandSubscriptionProvider.displayName="ContentElementEditorCommandSubscriptionProvider",ContentElementEditorCommandSubscriptionProvider.__docgenInfo={description:"",methods:[],displayName:"ContentElementEditorCommandSubscriptionProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementEditorCommandSubscriptionProvider.js"]={name:"ContentElementEditorCommandSubscriptionProvider",docgenInfo:ContentElementEditorCommandSubscriptionProvider.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementEditorCommandSubscriptionProvider.js"});var ContentDecorator_ref=react_default.a.createElement(ScrollPointMessageHandler,null);function ContentDecorator(props){var contentElementEditorCommandEmitter=function useContentElementEditorCommandEmitter(){return Object(react.useMemo)((function(){return Object.assign({},backbone_events_standalone_default.a)}),[])}();return(react_default.a.createElement(EditorState.a,null,react_default.a.createElement(MessageHandler,{contentElementEditorCommandEmitter:contentElementEditorCommandEmitter}),ContentDecorator_ref,react_default.a.createElement(ContentElementEditorCommandSubscriptionProvider,{emitter:contentElementEditorCommandEmitter},react_default.a.createElement(DndProvider.a,{backend:esm.a},props.children))))}function MessageHandler(_ref2){var contentElementEditorCommandEmitter=_ref2.contentElementEditorCommandEmitter,select=Object(EditorState.b)().select,dispatch=Object(entryState.g)(),receiveMessage=Object(react.useCallback)((function(data){"ACTION"===data.type?dispatch(data.payload):"SELECT"===data.type?select(data.payload):"CONTENT_ELEMENT_EDITOR_COMMAND"===data.type&&contentElementEditorCommandEmitter.trigger("command:".concat(data.payload.contentElementId),data.payload.command)}),[dispatch,select,contentElementEditorCommandEmitter]);return Object(usePostMessageListener.a)(receiveMessage),Object(react.useEffect)((function(){window.parent!==window&&window.parent.postMessage({type:"READY"},window.location.origin)}),[]),null}ContentDecorator.displayName="ContentDecorator",ContentDecorator.__docgenInfo={description:"",methods:[],displayName:"ContentDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentDecorator.js"]={name:"ContentDecorator",docgenInfo:ContentDecorator.__docgenInfo,path:"src/frontend/inlineEditing/ContentDecorator.js"});__webpack_require__(19);var classnames=__webpack_require__(5),classnames_default=__webpack_require__.n(classnames),SectionDecorator_module=__webpack_require__(1448),SectionDecorator_module_default=__webpack_require__.n(SectionDecorator_module),ContentElementDecorator_module=__webpack_require__(1444),ContentElementDecorator_module_default=__webpack_require__.n(ContentElementDecorator_module),Toolbar=__webpack_require__(330),Foreground=__webpack_require__(654),MotifArea=__webpack_require__(206),i18n=__webpack_require__(28);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var arrows=({styles:styles={},...props})=>react_default.a.createElement("svg",_extends({"aria-hidden":"true","data-prefix":"fas","data-icon":"random",className:(styles["svg-inline--fa"]||"svg-inline--fa")+" "+(styles["fa-random"]||"fa-random")+" "+(styles["fa-w-16"]||"fa-w-16"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},props),react_default.a.createElement("path",{fill:"currentColor",d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 01-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 00122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 00-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}));function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SectionDecorator(props){var t=Object(i18n.c)({locale:"ui"}).t,_useEditorSelection=Object(EditorState.b)({id:props.id,type:"sectionSettings"}),isSelected=_useEditorSelection.isSelected,select=_useEditorSelection.select,resetSelection=_useEditorSelection.resetSelection,transitionSelection=Object(EditorState.b)({id:props.id,type:"sectionTransition"}),nextTransitionSelection=Object(EditorState.b)({id:props.nextSection&&props.nextSection.id,type:"sectionTransition"}),lastContentElement=props.contentElements[props.contentElements.length-1],isLastContentElementSelected=Object(EditorState.b)({id:lastContentElement&&lastContentElement.id,type:"contentElement"}).isSelected;return(react_default.a.createElement("div",{"aria-label":t("pageflow_scrolled.inline_editing.select_section"),className:className(isSelected,transitionSelection),onMouseDown:function(event){event.target.closest(".".concat(ContentElementDecorator_module_default.a.wrapper))||(isSelected?resetSelection():select())}},react_default.a.createElement("div",{className:SectionDecorator_module_default.a.controls},renderEditTransitionButton({id:props.previousSection&&props.id,selection:transitionSelection,position:"before"}),renderEditTransitionButton({id:props.nextSection&&props.nextSection.id,selection:nextTransitionSelection,position:"after"})),react_default.a.createElement(MotifArea.b,{visible:isSelected},react_default.a.createElement(Foreground.a.Provider,{value:isLastContentElementSelected||isSelected},props.children))))}function className(isSectionSelected,transitionSelection){var _classNames;return classnames_default()(SectionDecorator_module_default.a.wrapper,(_defineProperty(_classNames={},SectionDecorator_module_default.a.selected,isSectionSelected),_defineProperty(_classNames,SectionDecorator_module_default.a.transitionSelected,transitionSelection.isSelected),_classNames))}function renderEditTransitionButton(_ref){var id=_ref.id,position=_ref.position,selection=_ref.selection;return id?react_default.a.createElement("div",{className:SectionDecorator_module_default.a["transitionToolbar-".concat(position)]},react_default.a.createElement(EditTransitionButton,{id:id,selection:selection,position:position})):null}function EditTransitionButton(_ref2){var id=_ref2.id,position=_ref2.position,selection=_ref2.selection,t=Object(i18n.c)({locale:"ui"}).t;return(react_default.a.createElement(EditSectionButton,{id:id,selection:selection,text:t("pageflow_scrolled.inline_editing.edit_section_transition_".concat(position)),icon:arrows}))}function EditSectionButton(_ref3){_ref3.id;var selection=_ref3.selection,icon=_ref3.icon,text=_ref3.text;return(react_default.a.createElement(Toolbar.a,{buttons:[{name:"button",active:selection.isSelected,icon:icon,text:text}],iconSize:20,onButtonClick:function onButtonClick(){return selection.select()}}))}SectionDecorator.displayName="SectionDecorator",renderEditTransitionButton.displayName="renderEditTransitionButton",EditTransitionButton.displayName="EditTransitionButton",EditSectionButton.displayName="EditSectionButton",SectionDecorator.__docgenInfo={description:"",methods:[],displayName:"SectionDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/SectionDecorator.js"]={name:"SectionDecorator",docgenInfo:SectionDecorator.__docgenInfo,path:"src/frontend/inlineEditing/SectionDecorator.js"});__webpack_require__(20);var useDrag=__webpack_require__(1439),useContentElementEditorState=__webpack_require__(161),api=__webpack_require__(100),SelectionRect=__webpack_require__(132),useDrop=__webpack_require__(1443),DropTargets_module=__webpack_require__(1451),DropTargets_module_default=__webpack_require__.n(DropTargets_module);function DropTargets_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DropTargets(_ref){var accept=_ref.accept,_canDrop=_ref.canDrop,onDrop=_ref.onDrop,_useDrop2=_slicedToArray(Object(useDrop.a)({accept:accept,canDrop:function canDrop(item){return _canDrop({at:"before",id:item.id})},collect:function collect(monitor){return{canDropBefore:monitor.canDrop(),isBefore:monitor.isOver()&&monitor.canDrop()}},drop:function drop(item){return onDrop({at:"before",id:item.id,range:item.range})}}),2),_useDrop2$=_useDrop2[0],canDropBefore=_useDrop2$.canDropBefore,isBefore=_useDrop2$.isBefore,dropBefore=_useDrop2[1],_useDrop4=_slicedToArray(Object(useDrop.a)({accept:accept,canDrop:function canDrop(item){return _canDrop({at:"after",id:item.id})},collect:function collect(monitor){return{canDropAfter:monitor.canDrop(),isAfter:monitor.isOver()&&monitor.canDrop()}},drop:function drop(item){return onDrop({at:"after",id:item.id,range:item.range})}}),2),_useDrop4$=_useDrop4[0],canDropAfter=_useDrop4$.canDropAfter,isAfter=_useDrop4$.isAfter,dropAfter=_useDrop4[1];return(react_default.a.createElement(react_default.a.Fragment,null,canDropBefore&&react_default.a.createElement("div",{ref:dropBefore,"data-testid":"drop-before",className:classnames_default()(DropTargets_module_default.a.before,DropTargets_defineProperty({},DropTargets_module_default.a.isOver,isBefore))}),canDropAfter&&react_default.a.createElement("div",{ref:dropAfter,"data-testid":"drop-after",title:"bar",className:classnames_default()(DropTargets_module_default.a.after,DropTargets_defineProperty({},DropTargets_module_default.a.isOver,isAfter))})))}DropTargets.__docgenInfo={description:"",methods:[],displayName:"DropTargets"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/DropTargets.js"]={name:"DropTargets",docgenInfo:DropTargets.__docgenInfo,path:"src/frontend/inlineEditing/DropTargets.js"});var postMessage=__webpack_require__(147),useContentElementConfigurationUpdate=__webpack_require__(489);function ContentElementConfigurationUpdateProvider(_ref){var id=_ref.id,permaId=_ref.permaId,children=_ref.children,dispatch=Object(entryState.g)(),update=Object(react.useCallback)((function(configuration){Object(postMessage.c)({id:id,configuration:configuration}),Object(entryState.b)({dispatch:dispatch,permaId:permaId,configuration:configuration})}),[dispatch,permaId,id]);return(react_default.a.createElement(useContentElementConfigurationUpdate.a.Provider,{value:update},children))}ContentElementConfigurationUpdateProvider.displayName="ContentElementConfigurationUpdateProvider",ContentElementConfigurationUpdateProvider.__docgenInfo={description:"",methods:[],displayName:"ContentElementConfigurationUpdateProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementConfigurationUpdateProvider.js"]={name:"ContentElementConfigurationUpdateProvider",docgenInfo:ContentElementConfigurationUpdateProvider.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementConfigurationUpdateProvider.js"});var ContentElementEditorStateProvider=__webpack_require__(680);function ContentElementDecorator_slicedToArray(arr,i){return function ContentElementDecorator_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ContentElementDecorator_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function ContentElementDecorator_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ContentElementDecorator_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ContentElementDecorator_arrayLikeToArray(o,minLen)}(arr,i)||function ContentElementDecorator_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ContentElementDecorator_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ContentElementDecorator(props){return react_default.a.createElement("div",{className:ContentElementDecorator_module_default.a.wrapper,"data-scrollpoint":props.id},react_default.a.createElement(ContentElementEditorStateProvider.a,{id:props.id},react_default.a.createElement(OptionalSelectionRect,props,react_default.a.createElement(ContentElementConfigurationUpdateProvider,{id:props.id,permaId:props.permaId},props.children))))}function OptionalSelectionRect(props){return(api.a.contentElementTypes.getOptions(props.type)||{}).customSelectionRect?props.children:react_default.a.createElement(DefaultSelectionRect,props,props.children)}function DefaultSelectionRect(props){var _useContentElementEdi=Object(useContentElementEditorState.b)(),isSelected=_useContentElementEdi.isSelected,select=_useContentElementEdi.select,t=Object(i18n.c)({locale:"ui"}).t,_useDrag2=ContentElementDecorator_slicedToArray(Object(useDrag.a)({item:{type:"contentElement",id:props.id}}),3),drag=_useDrag2[1],preview=_useDrag2[2];return(react_default.a.createElement(SelectionRect.a,{selected:isSelected,scrollPoint:isSelected,drag:drag,dragHandleTitle:t("pageflow_scrolled.inline_editing.drag_content_element"),full:"full"===props.position,ariaLabel:t("pageflow_scrolled.inline_editing.select_content_element"),insertButtonTitles:t("pageflow_scrolled.inline_editing.insert_content_element"),onClick:function onClick(){return select()},onInsertButtonClick:function onInsertButtonClick(at){return Object(postMessage.a)({id:props.id,at:at})}},react_default.a.createElement("div",{ref:preview},props.children),react_default.a.createElement(DropTargets,{accept:"contentElement",canDrop:function canDrop(_ref2){return _ref2.id!==props.id},onDrop:function onDrop(_ref3){var id=_ref3.id,range=_ref3.range,at=_ref3.at;return Object(postMessage.b)({id:id,range:range,to:{id:props.id,at:at}})}})))}ContentElementDecorator.displayName="ContentElementDecorator",DefaultSelectionRect.displayName="DefaultSelectionRect",ContentElementDecorator.__docgenInfo={description:"",methods:[],displayName:"ContentElementDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementDecorator.js"]={name:"ContentElementDecorator",docgenInfo:ContentElementDecorator.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementDecorator.js"});var layouts=__webpack_require__(682),plus=__webpack_require__(679),ContentElementInsertButton_module=__webpack_require__(1453),ContentElementInsertButton_module_default=__webpack_require__.n(ContentElementInsertButton_module);function ContentElementInsertButton_slicedToArray(arr,i){return function ContentElementInsertButton_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ContentElementInsertButton_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function ContentElementInsertButton_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ContentElementInsertButton_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ContentElementInsertButton_arrayLikeToArray(o,minLen)}(arr,i)||function ContentElementInsertButton_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ContentElementInsertButton_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ContentElementInsertButton_ref2=react_default.a.createElement(plus.a,{width:15,height:15,fill:"currentColor"});function ContentElementInsertButton(_ref){var obj,key,value,onClick=_ref.onClick,_useState2=ContentElementInsertButton_slicedToArray(Object(react.useState)(),2),hovered=_useState2[0],setHovered=_useState2[1],t=Object(i18n.c)({locale:"ui"}).t;return(react_default.a.createElement("div",{className:classnames_default()(ContentElementInsertButton_module_default.a.container,(obj={},key=ContentElementInsertButton_module_default.a.hovered,value=hovered,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))},react_default.a.createElement("button",{className:ContentElementInsertButton_module_default.a.button,title:t("pageflow_scrolled.inline_editing.add_content_element"),onClick:onClick,onMouseDown:function onMouseDown(event){return event.stopPropagation()},onMouseEnter:function onMouseEnter(){return setHovered(!0)},onMouseLeave:function onMouseLeave(){return setHovered(!1)}},ContentElementInsertButton_ref2)))}function LayoutWithPlaceholder_extends(){return(LayoutWithPlaceholder_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function LayoutWithPlaceholder(props){var isSelected=Object(EditorState.b)({id:props.sectionId,type:"section"}).isSelected,settingsSelected=Object(EditorState.b)({id:props.sectionId,type:"sectionSettings"}).isSelected,placeholder=isSelected||settingsSelected?react_default.a.createElement(ContentElementInsertButton,{onClick:function onClick(){return Object(postMessage.a)({at:"endOfSection",id:props.sectionId})}}):null;return(react_default.a.createElement(layouts.b,LayoutWithPlaceholder_extends({},props,{placeholder:placeholder})))}ContentElementInsertButton.displayName="ContentElementInsertButton",ContentElementInsertButton.__docgenInfo={description:"",methods:[],displayName:"ContentElementInsertButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementInsertButton.js"]={name:"ContentElementInsertButton",docgenInfo:ContentElementInsertButton.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementInsertButton.js"}),LayoutWithPlaceholder.displayName="LayoutWithPlaceholder",LayoutWithPlaceholder.__docgenInfo={description:"",methods:[],displayName:"LayoutWithPlaceholder"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/LayoutWithPlaceholder.js"]={name:"LayoutWithPlaceholder",docgenInfo:LayoutWithPlaceholder.__docgenInfo,path:"src/frontend/inlineEditing/LayoutWithPlaceholder.js"});var EditableText=__webpack_require__(467),index_es=__webpack_require__(4),dist_index_es=__webpack_require__(55),TextPlaceholder=__webpack_require__(678),useCachedValue=__webpack_require__(677);function EditableInlineText_slicedToArray(arr,i){return function EditableInlineText_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function EditableInlineText_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function EditableInlineText_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return EditableInlineText_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return EditableInlineText_arrayLikeToArray(o,minLen)}(arr,i)||function EditableInlineText_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function EditableInlineText_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var EditableInlineText_ref2=react_default.a.createElement(dist_index_es.a,null),EditableInlineText=Object(react.memo)((function(_ref){var _cachedValue$,_cachedValue$$childre,value=_ref.value,_ref$defaultValue=_ref.defaultValue,defaultValue=void 0===_ref$defaultValue?"":_ref$defaultValue,placeholder=_ref.placeholder,onChange=_ref.onChange,editor=Object(react.useMemo)((function(){return function withSingleLine(editor){var normalizeNode=editor.normalizeNode;return editor.normalizeNode=function(_ref3){var _ref4=EditableInlineText_slicedToArray(_ref3,2),node=_ref4[0],path=_ref4[1];return 0===path.length&&1<editor.children.length&&index_es.g.mergeNodes(editor),normalizeNode([node,path])},editor}(Object(dist_index_es.e)(Object(index_es.h)()))}),[]),_useCachedValue2=EditableInlineText_slicedToArray(Object(useCachedValue.a)(value,{defaultValue:[{type:"heading",children:[{text:defaultValue}]}],onDebouncedChange:onChange}),2),cachedValue=_useCachedValue2[0],setCachedValue=_useCachedValue2[1];return(react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(dist_index_es.c,{editor:editor,value:cachedValue,onChange:setCachedValue},EditableInlineText_ref2),react_default.a.createElement(TextPlaceholder.a,{text:placeholder,visible:!(null===(_cachedValue$=cachedValue[0])||void 0===_cachedValue$?void 0:null===(_cachedValue$$childre=_cachedValue$.children[0])||void 0===_cachedValue$$childre?void 0:_cachedValue$$childre.text)})))}));var PhonePlatformContext=__webpack_require__(327);function PhonePlatformProvider_slicedToArray(arr,i){return function PhonePlatformProvider_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function PhonePlatformProvider_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function PhonePlatformProvider_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return PhonePlatformProvider_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PhonePlatformProvider_arrayLikeToArray(o,minLen)}(arr,i)||function PhonePlatformProvider_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function PhonePlatformProvider_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PhonePlatformProvider(_ref){var children=_ref.children,_useState2=PhonePlatformProvider_slicedToArray(Object(react.useState)(!1),2),phoneEmulationMode=_useState2[0],setPhoneEmulationMode=_useState2[1];return Object(react.useEffect)((function(){function receive(event){"CHANGE_EMULATION_MODE"===event.data.type&&("phone"===event.data.payload?setPhoneEmulationMode(!0):setPhoneEmulationMode(!1))}return window.addEventListener("message",receive),function(){return window.removeEventListener("message",receive)}})),react_default.a.createElement(PhonePlatformContext.a.Provider,{value:phoneEmulationMode},children)}PhonePlatformProvider.displayName="PhonePlatformProvider",PhonePlatformProvider.__docgenInfo={description:"",methods:[],displayName:"PhonePlatformProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/PhonePlatformProvider.js"]={name:"PhonePlatformProvider",docgenInfo:PhonePlatformProvider.__docgenInfo,path:"src/frontend/inlineEditing/PhonePlatformProvider.js"}),__webpack_require__.d(__webpack_exports__,"ContentDecorator",(function(){return ContentDecorator})),__webpack_require__.d(__webpack_exports__,"SectionDecorator",(function(){return SectionDecorator})),__webpack_require__.d(__webpack_exports__,"ContentElementDecorator",(function(){return ContentElementDecorator})),__webpack_require__.d(__webpack_exports__,"LayoutWithPlaceholder",(function(){return LayoutWithPlaceholder})),__webpack_require__.d(__webpack_exports__,"EditableText",(function(){return EditableText.a})),__webpack_require__.d(__webpack_exports__,"EditableInlineText",(function(){return EditableInlineText})),__webpack_require__.d(__webpack_exports__,"PhonePlatformProvider",(function(){return PhonePlatformProvider}))}}]);
//# sourceMappingURL=4.6fea2181886279eac1cf.bundle.js.map