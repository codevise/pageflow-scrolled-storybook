(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1442:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(1445);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1443:function(module,exports,__webpack_require__){var api=__webpack_require__(10),content=__webpack_require__(1444);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1444:function(module,exports,__webpack_require__){(exports=__webpack_require__(6)(!1)).push([module.i,'.SectionDecorator-module_wrapper__-oNHl {\n  position: relative;\n}\n\n.SectionDecorator-module_selected__10MUC > section::before {\n  content: "";\n  display: block;\n  position: absolute;\n  border: solid 1px currentColor;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  z-index: 9;\n  pointer-events: none;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr > section:before {\n  content: "";\n  position: absolute;\n  display: block;\n  top: 0;\n  width: 100%;\n  border-top: dotted 2px #fff;\n  z-index: 9;\n  background-color: #555;\n  opacity: 0.7;\n}\n\n.SectionDecorator-module_controls__1HZ7e {\n  position: absolute;\n  top: -33px;\n  right: 0;\n  height: 100%;\n  padding-left: 20px;\n  z-index: 10;\n  display: none;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr .SectionDecorator-module_controls__1HZ7e,\n.SectionDecorator-module_selected__10MUC .SectionDecorator-module_controls__1HZ7e {\n  display: block;\n}\n\n.SectionDecorator-module_transitionSelected__1aAvr .SectionDecorator-module_editToolbar__2vSGs {\n  visibility: hidden;\n}\n\n.SectionDecorator-module_toolbar__1ubWF {\n  position: absolute;\n  padding: 10px 0 10px 10px;\n  z-index: 10;\n  overflow: hidden;\n}\n\n.SectionDecorator-module_editToolbar__2vSGs {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(50vh - 30px);\n  margin-top: 55px;\n}\n\n.SectionDecorator-module_transitionToolbar-before__22nc6 {\n  top: 0;\n}\n\n.SectionDecorator-module_transitionToolbar-after__28ejO {\n  bottom: -63px;\n}\n',""]),exports.locals={wrapper:"SectionDecorator-module_wrapper__-oNHl",selected:"SectionDecorator-module_selected__10MUC",transitionSelected:"SectionDecorator-module_transitionSelected__1aAvr",controls:"SectionDecorator-module_controls__1HZ7e",editToolbar:"SectionDecorator-module_editToolbar__2vSGs SectionDecorator-module_toolbar__1ubWF",toolbar:"SectionDecorator-module_toolbar__1ubWF","transitionToolbar-before":"SectionDecorator-module_transitionToolbar-before__22nc6 SectionDecorator-module_toolbar__1ubWF","transitionToolbar-after":"SectionDecorator-module_transitionToolbar-after__28ejO SectionDecorator-module_toolbar__1ubWF"},module.exports=exports},1445:function(module,exports,__webpack_require__){(exports=__webpack_require__(6)(!1)).push([module.i,".ContentElementDecorator-module_wrapper__3l93F {\n}\n",""]),exports.locals={wrapper:"ContentElementDecorator-module_wrapper__3l93F"},module.exports=exports},1446:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),entryState=__webpack_require__(21),usePostMessageListener=__webpack_require__(658),EditorState=__webpack_require__(325),backbone_events_standalone=(__webpack_require__(59),__webpack_require__(153)),backbone_events_standalone_default=__webpack_require__.n(backbone_events_standalone),useContentElementEditorCommandSubscription=__webpack_require__(323);function ContentElementEditorCommandSubscriptionProvider(_ref){var emitter=_ref.emitter,children=_ref.children;return react_default.a.createElement(useContentElementEditorCommandSubscription.a.Provider,{value:emitter},children)}function EntryDecorator(props){var contentElementEditorCommandEmitter=function useContentElementEditorCommandEmitter(){return Object(react.useMemo)((function(){return Object.assign({},backbone_events_standalone_default.a)}),[])}();return react_default.a.createElement(EditorState.a,null,react_default.a.createElement(MessageHandler,{contentElementEditorCommandEmitter:contentElementEditorCommandEmitter}),react_default.a.createElement(ContentElementEditorCommandSubscriptionProvider,{emitter:contentElementEditorCommandEmitter},props.children))}function MessageHandler(_ref){var contentElementEditorCommandEmitter=_ref.contentElementEditorCommandEmitter,select=Object(EditorState.b)().select,dispatch=Object(entryState.e)(),receiveMessage=Object(react.useCallback)((function(data){"ACTION"===data.type?dispatch(data.payload):"SELECT"===data.type?select(data.payload):"CONTENT_ELEMENT_EDITOR_COMMAND"===data.type&&contentElementEditorCommandEmitter.trigger("command:".concat(data.payload.contentElementId),data.payload.command)}),[dispatch,select,contentElementEditorCommandEmitter]);return Object(usePostMessageListener.a)(receiveMessage),Object(react.useEffect)((function(){window.parent!==window&&window.parent.postMessage({type:"READY"},window.location.origin)}),[]),null}ContentElementEditorCommandSubscriptionProvider.displayName="ContentElementEditorCommandSubscriptionProvider",ContentElementEditorCommandSubscriptionProvider.__docgenInfo={description:"",methods:[],displayName:"ContentElementEditorCommandSubscriptionProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementEditorCommandSubscriptionProvider.js"]={name:"ContentElementEditorCommandSubscriptionProvider",docgenInfo:ContentElementEditorCommandSubscriptionProvider.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementEditorCommandSubscriptionProvider.js"}),EntryDecorator.displayName="EntryDecorator",EntryDecorator.__docgenInfo={description:"",methods:[],displayName:"EntryDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/EntryDecorator.js"]={name:"EntryDecorator",docgenInfo:EntryDecorator.__docgenInfo,path:"src/frontend/inlineEditing/EntryDecorator.js"});__webpack_require__(26);var classnames=__webpack_require__(3),classnames_default=__webpack_require__.n(classnames),SectionDecorator_module=__webpack_require__(1443),SectionDecorator_module_default=__webpack_require__.n(SectionDecorator_module),ContentElementDecorator_module=__webpack_require__(1442),ContentElementDecorator_module_default=__webpack_require__.n(ContentElementDecorator_module),Toolbar=__webpack_require__(326),i18n=__webpack_require__(90);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var settings=({styles:styles={},...props})=>react_default.a.createElement("svg",_extends({"aria-hidden":"true","data-prefix":"fas","data-icon":"pencil-alt",className:(styles["svg-inline--fa"]||"svg-inline--fa")+" "+(styles["fa-pencil-alt"]||"fa-pencil-alt")+" "+(styles["fa-w-16"]||"fa-w-16"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},props),react_default.a.createElement("path",{fill:"currentColor",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}));function arrows_extends(){return(arrows_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var arrows=({styles:styles={},...props})=>react_default.a.createElement("svg",arrows_extends({"aria-hidden":"true","data-prefix":"fas","data-icon":"random",className:(styles["svg-inline--fa"]||"svg-inline--fa")+" "+(styles["fa-random"]||"fa-random")+" "+(styles["fa-w-16"]||"fa-w-16"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},props),react_default.a.createElement("path",{fill:"currentColor",d:"M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 01-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 00122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 00-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"}));function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SectionDecorator(props){var t=Object(i18n.b)({locale:"ui"}).t,_useEditorSelection=Object(EditorState.b)({id:props.id,type:"section"}),isSelected=_useEditorSelection.isSelected,select=_useEditorSelection.select,resetSelection=_useEditorSelection.resetSelection,settingsSelection=Object(EditorState.b)({id:props.id,type:"sectionSettings"}),transitionSelection=Object(EditorState.b)({id:props.id,type:"sectionTransition"}),nextTransitionSelection=Object(EditorState.b)({id:props.nextSection&&props.nextSection.id,type:"sectionTransition"}),isSectionSelected=isSelected||settingsSelection.isSelected;return react_default.a.createElement("div",{"aria-label":t("pageflow_scrolled.inline_editing.select_section"),className:className(isSectionSelected,transitionSelection),onMouseDown:function(event){event.target.closest(".".concat(ContentElementDecorator_module_default.a.wrapper))||(isSelected?resetSelection():select())}},react_default.a.createElement("div",{className:SectionDecorator_module_default.a.controls},renderEditTransitionButton({id:props.previousSection&&props.id,selection:transitionSelection,position:"before"}),react_default.a.createElement("div",{className:SectionDecorator_module_default.a.editToolbar},react_default.a.createElement(EditSectionButton,{id:props.id,selection:settingsSelection,text:t("pageflow_scrolled.inline_editing.edit_section_settings"),icon:settings})),renderEditTransitionButton({id:props.nextSection&&props.nextSection.id,selection:nextTransitionSelection,position:"after"})),props.children)}function className(isSectionSelected,transitionSelection){var _classNames;return classnames_default()(SectionDecorator_module_default.a.wrapper,(_defineProperty(_classNames={},SectionDecorator_module_default.a.selected,isSectionSelected),_defineProperty(_classNames,SectionDecorator_module_default.a.transitionSelected,transitionSelection.isSelected),_classNames))}function renderEditTransitionButton(_ref){var id=_ref.id,position=_ref.position,selection=_ref.selection;return id?react_default.a.createElement("div",{className:SectionDecorator_module_default.a["transitionToolbar-".concat(position)]},react_default.a.createElement(EditTransitionButton,{id:id,selection:selection,position:position})):null}function EditTransitionButton(_ref2){var id=_ref2.id,position=_ref2.position,selection=_ref2.selection,t=Object(i18n.b)({locale:"ui"}).t;return react_default.a.createElement(EditSectionButton,{id:id,selection:selection,text:t("pageflow_scrolled.inline_editing.edit_section_transition_".concat(position)),icon:arrows})}function EditSectionButton(_ref3){_ref3.id;var selection=_ref3.selection,icon=_ref3.icon,text=_ref3.text;return react_default.a.createElement(Toolbar.a,{buttons:[{name:"button",active:selection.isSelected,icon:icon,text:text}],iconSize:20,onButtonClick:function onButtonClick(){return selection.select()}})}SectionDecorator.displayName="SectionDecorator",renderEditTransitionButton.displayName="renderEditTransitionButton",EditTransitionButton.displayName="EditTransitionButton",EditSectionButton.displayName="EditSectionButton",SectionDecorator.__docgenInfo={description:"",methods:[],displayName:"SectionDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/SectionDecorator.js"]={name:"SectionDecorator",docgenInfo:SectionDecorator.__docgenInfo,path:"src/frontend/inlineEditing/SectionDecorator.js"});var useContentElementEditorState=__webpack_require__(213),api=__webpack_require__(214),SelectionRect=__webpack_require__(259),postMessage=__webpack_require__(258),useContentElementConfigurationUpdate=__webpack_require__(466);function ContentElementConfigurationUpdateProvider(_ref){var id=_ref.id,permaId=_ref.permaId,children=_ref.children,dispatch=Object(entryState.e)(),update=Object(react.useCallback)((function(configuration){Object(postMessage.b)({id:id,configuration:configuration}),Object(entryState.b)({dispatch:dispatch,permaId:permaId,configuration:configuration})}),[dispatch,permaId,id]);return react_default.a.createElement(useContentElementConfigurationUpdate.a.Provider,{value:update},children)}ContentElementConfigurationUpdateProvider.displayName="ContentElementConfigurationUpdateProvider",ContentElementConfigurationUpdateProvider.__docgenInfo={description:"",methods:[],displayName:"ContentElementConfigurationUpdateProvider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementConfigurationUpdateProvider.js"]={name:"ContentElementConfigurationUpdateProvider",docgenInfo:ContentElementConfigurationUpdateProvider.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementConfigurationUpdateProvider.js"});var ContentElementEditorStateProvider=__webpack_require__(670);function ContentElementDecorator(props){return react_default.a.createElement("div",{className:ContentElementDecorator_module_default.a.wrapper},react_default.a.createElement(ContentElementEditorStateProvider.a,{id:props.id},react_default.a.createElement(OptionalSelectionRect,props,react_default.a.createElement(ContentElementConfigurationUpdateProvider,{id:props.id,permaId:props.permaId},props.children))))}function OptionalSelectionRect(props){return(api.a.contentElementTypes.getOptions(props.type)||{}).customSelectionRect?props.children:react_default.a.createElement(DefaultSelectionRect,props,props.children)}function DefaultSelectionRect(props){var _useContentElementEdi=Object(useContentElementEditorState.b)(),isSelected=_useContentElementEdi.isSelected,select=_useContentElementEdi.select,t=Object(i18n.b)({locale:"ui"}).t;return react_default.a.createElement(SelectionRect.a,{selected:isSelected,full:"full"===props.position,ariaLabel:t("pageflow_scrolled.inline_editing.select_content_element"),insertButtonTitles:t("pageflow_scrolled.inline_editing.insert_content_element"),onClick:function onClick(){return select()},onInsertButtonClick:function onInsertButtonClick(at){return Object(postMessage.a)({id:props.id,at:at})}},props.children)}ContentElementDecorator.displayName="ContentElementDecorator",DefaultSelectionRect.displayName="DefaultSelectionRect",ContentElementDecorator.__docgenInfo={description:"",methods:[],displayName:"ContentElementDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/frontend/inlineEditing/ContentElementDecorator.js"]={name:"ContentElementDecorator",docgenInfo:ContentElementDecorator.__docgenInfo,path:"src/frontend/inlineEditing/ContentElementDecorator.js"});var EditableText=__webpack_require__(456);__webpack_require__.d(__webpack_exports__,"EntryDecorator",(function(){return EntryDecorator})),__webpack_require__.d(__webpack_exports__,"SectionDecorator",(function(){return SectionDecorator})),__webpack_require__.d(__webpack_exports__,"ContentElementDecorator",(function(){return ContentElementDecorator})),__webpack_require__.d(__webpack_exports__,"EditableText",(function(){return EditableText.a}))}}]);
//# sourceMappingURL=3.425c022fd5e24932791e.bundle.js.map