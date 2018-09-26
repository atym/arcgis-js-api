// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../../kernel","../../lang","../../layers/FeatureLayer","../../symbols/CartographicLineSymbol","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../symbols/SimpleMarkerSymbol","../../tasks/query","../CalculateField","./_AnalysisOptions","./AnalysisBase","./AnalysisRegistry","./CreditEstimator","./ItemTypes","./storeUtils","./utils","dgrid1/Editor","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","dgrid1/Keyboard","dgrid1/OnDemandGrid","dgrid1/Selection","dgrid1/Selector","dijit/_FocusMixin","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/registry","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/json","dojo/_base/lang","dojo/aspect","dojo/data/ObjectStore","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-prop","dojo/dom-style","dojo/fx/easing","dojo/has","dojo/i18n!../../nls/jsapi","dojo/json","dojo/query","dojo/store/Memory","dojo/store/Observable","dojo/string","dojo/i18n!./nls/AppendData","dojo/text!./templates/AppendData.html","require"],function(e,t,i,s,n,a,r,o,l,p,h,d,c,y,u,L,f,m,_,g,F,S,b,w,A,x,v,T,E,C,D,O,M,j,I,B,G,P,N,R,k,H,U,q,J,V,Y,z,W,K,Q,X,Z,$,ee,te,ie,se,ne,ae,re){var oe=R([F,f,g,S,b,m,_]),le=R([v,x,T,A,w,p,h],{declaredClass:"esri.dijit.analysis.AppendData",templateString:ae,widgetsInTemplate:!0,inputLayer:void 0,appendLayer:void 0,appendLayers:[],fieldMapping:[],filter:{},inputLayers:[],isAppendToLayerSelected:!0,primaryActionButttonClass:"btn calcite primary",toolName:"AppendData",helpFileName:"AppendData",resultName:"",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),G.forEach(this._pbConnects,N.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),U.mixin(this.i18n,ne),U.mixin(this.i18n,Z.expressionGrid)},postCreate:function(){this.inherited(arguments),Y.add(this._form.domNode,"esriSimpleForm"),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_buildJobParams:function(){var e={};if(e.inputLayer=H.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams)),e.appendLayer=this.constructAnalysisInputLyrObj(this.appendLayer,this.showGeoAnalyticsParams),e.fieldMapping=H.toJson(this.getFieldMappingForRest()),this.isValidFilter(this.filter)&&!this.checkIfAppendLayerHasFilter()?e.appendLayer.filter=this.filter.expression.where:this.isValidFilter(this.filter)&&this.appendLayer.filter&&(e.appendLayer.filter+="AND "+this.filter.expression.where),e.appendLayer=H.toJson(e.appendLayer),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=H.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection){var t={outSR:this.map.spatialReference};this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),e.context=H.toJson(t)}return e},isValidFilter:function(e){return e&&e.expression&&e.expression.where},checkIfAppendLayerHasFilter:function(){return!!this.appendLayer.filter&&this.appendLayer.filter.toLowerCase().indexOf(this.filter.expression.where.toLowerCase().trim())>-1},getFieldMappingForRest:function(){return G.map(this.inputLayer.fields,function(e,t){var i=this.mappedFields[t];return{inputLayerField:e.name,mappingType:"Expression"===i.alias?"Expression":"AppendField",mappingValue:i.name}},this)},_handleSaveBtnClick:function(e){if(this._form.validate()){var t={};this._saveBtn.set("disabled",!0),t.jobParams=this._buildJobParams(),this.showGeoAnalyticsParams&&(t.isSpatioTemporalDataStore=!0),this.execute(t)}},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(U.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()}))},_save:function(){},_buildUI:function(){this.set("showReadyToUseLayers",!1),this.signInPromise.then(U.hitch(this,L.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(this.inputLayer=this.setDefaultLayer(this.inputLayer,this.inputLayers),L.populateAnalysisLayers(this,"inputLayer","inputLayers",{layerSelect:this._inputLayerSelect})),this.setAlert(),this.filterAppendLayers(this.inputLayer),this.appendLayer=this.setDefaultLayer(this.appendLayer,this.appendLayers),L.populateAnalysisLayers(this,"appendLayer","appendLayers",{layerSelect:this._appendLayerSelect,postIncrement:1}),this.appendLayer&&this.setSelectionLayer(),L.addReadyToUseLayerOption(this,[this._inputLayerSelect,this._appendLayerSelect]),K.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),K.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.setFilterBtn(),this.setFieldMapping(),this._loadConnections()},setFilterBtn:function(){this._filterBtn.set("disabled",!t.isDefined(this.appendLayer))},setDefaultLayer:function(e,t){return e&&t&&!L.isLayerInLayers(e,t)&&t.push(e),e||!t||this.rerun?e:t[0]},setFieldMapping:function(e){e?this.updateMappedFieldsForRerun(e):this.getInputAndAppendFieldMatch(),this.mappedFields.length>0&&this.setDataGrid()},updateMappedFieldsForRerun:function(e){this.mappedFields=G.map(e,function(e,t){return"AppendField"===e.appendType?G.filter(this.appendLayer.fields,function(t){return t.name===e.appendTypeValue},this)[0]:"Expression"===e.appendType?{name:e.appendTypeValue,alias:e.appendTypeValue}:void 0},this)},getInputAndAppendFieldMatch:function(){if(this.mappedFields=[],t.isDefined(this.inputLayer)&&t.isDefined(this.appendLayer)){this.inputFields=this.inputLayer.fields;var e=this.appendLayer.fields;G.forEach(this.inputFields,function(t){this.mappedFields.push(this.getMappingFieldAndTypes(t,e))},this)}},getMappingFieldAndTypes:function(e,t){var i=G.filter(t,function(t){return t.name.toLowerCase()===e.name.toLowerCase()&&t.type===e.type});return i.length>0?i[0]:{name:"null",alias:"Expression"}},setAlert:function(){t.isDefined(this.inputLayer)?(Y.add(this._alert,"is-active"),this.setAlertHostedLayer(!1)):Y.remove(this._alert,"is-active")},setAlertHostedLayer:function(e){e?Y.add(this._alertHosted,"is-active"):Y.remove(this._alertHosted,"is-active")},_handleInputLayerChange:function(e){this.isAppendToLayerSelected=!0,this._checkBrowseLayer(e,!0)||(this.inputLayer=this.inputLayers[e],this.getUserProfile().then(U.hitch(this,function(e){this.inputLayer&&this.verifyInputLayer(e),this.setAlert(),t.isDefined(this.inputLayer)&&(this.filterAppendLayers(this.inputLayer),this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,this._appendLayerSelect),this.setFieldMapping())})))},_handleAppendLayerChange:function(e){this.isAppendToLayerSelected=!1,this._checkBrowseLayer(e,!1)||(this.appendLayer=this.appendFilteredLayers[e-1],t.isDefined(this.appendLayer)&&(this.setSelectionLayer(),this.setFilterBtn(),this.clearFilter(),this.isSameLayer(this.inputLayer,this.appendLayer)&&(this.appendLayer=void 0,this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,this._appendLayerSelect)))),this.setFieldMapping()},verifyInputLayer:function(e){var t=this.inputLayer&&this.inputLayer.url;L.isPortalHostedService(t)&&this.isLayerEditable(this.inputLayer,e)||(this.setAlertHostedLayer(!0),this.inputLayers=G.filter(this.inputLayers,function(e){return!this.isSameLayer(this.inputLayer,e)&&L.isPortalHostedService(e&&e.url)},this),this.inputLayer=void 0,this.updateSelectLayerOptions(this.inputLayer,this.inputLayers,this._inputLayerSelect),this._inputLayerSelect.removeOption(this._inputLayerSelect.get("selectedOption")),this._inputLayerSelect.set("value",""))},isLayerEditable:function(e,t){return!!(e&&e.capabilities.indexOf("Create")>=0||this.isAdmin(t)||this.isOwner(e,t))},updateSelectLayerOptions:function(e,t,i){var s=e&&[]||[{label:" ",value:""}];G.forEach(t,function(t,n){var a={value:"_inputLayerSelect"===i.dojoAttachPoint?n:n+1,label:t.name};e&&(t.name===e.name||t.url&&e.url&&t.url===e.url)&&(a.selected=!0),s.push(a)}),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers"))&&s.push({type:"separator",value:""}),this.get("showReadyToUseLayers")&&s.push({value:"browse",label:this.i18n.browseAnalysisTitle}),this.get("showBrowseLayers")&&s.push({value:"browselayers",label:this.i18n.browseLayers}),i.removeOption(i.getOptions()),i.addOption(s)},isSameLayer:function(e,t){return e&&t&&e.url&&t.url&&e.url===t.url},filterAppendLayers:function(e){this.appendFilteredLayers=G.filter(this.appendLayers,U.hitch(this,function(t){return!this.isSameLayer(e,t)&&this.isSimilarTypeAsInput(t)})),!this.isSameLayer(e,this.appendLayer)&&this.isSimilarTypeAsInput(this.appendLayer)||(this.appendLayer=void 0)},_checkBrowseLayer:function(e,t){if("browselayers"===e){if(this.showGeoAnalyticsParams){var i=this._browseLyrsdlg.browseItems.get("query");L.isBigDataTypeTobeAdded(i.types)&&!t&&(i.types.push('type:"'+y.BIGDATA+'"'),this._browseLyrsdlg.browseItems.set("query",i))}return this._filterLayersForGeometryType(t),this._browseLyrsdlg.show(),!0}return!1},_filterLayersForGeometryType:function(e){if(this.showGeoAnalyticsParams&&(this._browseLyrsdlg.browseItems.plugIn.layerTypes=[y.TABLE,y.BTABLE,y.FLAYER,y.BDATAFEATURE],this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!0,this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0,this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[void 0,d.GeometryTypes.Polygon,d.GeometryTypes.Point,d.GeometryTypes.Line],this.inputLayer&&!e)){var t=this.inputLayer.geometryType;t?this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[t]:this._browseLyrsdlg.browseItems.plugIn.layerTypes=[y.BTABLE,y.TABLE]}},setFilterForm:function(){this._filterForm.set("showUnique",!this.isBigDataorTable()),this._filterForm.set("showFirstRow",!1),this._filterForm.set("firstOperands",[this.appendLayer]),this._filterForm.set("inputOperands",[this.appendLayer]),this._filterForm.set("selectedFirstOperand",this.appendLayer),this._filterForm.init()},isBigDataorTable:function(){return this.appendLayer&&(this.appendLayer.type===y.BDATAFEATURE||this.appendLayer.type===y.BTABLE)},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&L.addAnalysisReadyLayer({item:e.selection,layers:this.isAppendToLayerSelected?this.inputLayers:this.appendFilteredLayers,layersSelect:this.isAppendToLayerSelected?this._inputLayerSelect:this._appendLayerSelect,browseDialog:e.dialog||this._browsedlg,posIncrement:this.isAppendToLayerSelected?0:1,widget:this},t).then(U.hitch(this,function(e){this.appendLayers.push(e)}))},_handleFilterBtnClick:function(){this.setFilterForm(),this._isAttrFlag=!0,this._filterForm.set("showUnique",!this.isBigDataorTable()),this.filter?(this._filterForm.set("action","edit"),this._filterForm.set("expression",this.filter.expression)):this._filterForm.set("action","add"),this._filterDialog.show()},_handleExpressionFormAdd:function(e){if("add"===e.action||"edit"===e.action){V.set(this._filterLabel,"innerHTML",se.trim(e.expression._attributeText)),this.filter=e;var t;t=new o,t.returnGeometry=!0,t.where=e.expression.where,this.selectionLayer&&this.selectionLayer.selectFeatures(t,i.SELECTION_ADD)}this._filterDialog.hide()},_handleExpressionFormCancel:function(){this._filterDialog.hide()},clearFilter:function(){this.filter=void 0,V.set(this._filterLabel,"innerHTML","")},setSelectionLayer:function(){this.selectionLayer&&this.selectionLayer.clearSelection(),this.selectionLayer=new i(this.appendLayer.url&&!this.appendLayer._collection?this.appendLayer.url:this.appendLayer.toJson(),{outFields:["*"],mode:this.appendLayer.url&&!this.appendLayer._collection?i.MODE_SELECTION:i.MODE_SNAPSHOT}),this.selectionLayer.setRenderer(null),this.selectionLayer.loaded?this._onSelectionLayerLoad(this.appendLayer,this.selectionLayer):this.selectionLayer.on("load",U.hitch(this,this._onSelectionLayerLoad,this.appendLayer,this.selectionLayer))},setDataGrid:function(){this.dataFieldGrid?(this.dataFieldGrid.set("columns",this.getColumns()),this.dataFieldGrid.set("collection",u.createStore(this.prepareData()))):(this.dataFieldGrid=new oe({collection:u.createStore(this.prepareData()),cellNavigation:!1,columns:this.getColumns(),renderRow:this.updateGridRow,selectionMode:"single"},this._dataGridDiv),this.dataFieldGrid.startup(),this.updateSelectOptions(),this.updateMappedOnChange())},getOptionStore:function(e){var t=this.getMappedFields(),i=this.getUnmappedFields(),s={value:"Expression",label:this.i18n.expression},n={value:"null",label:"null"},a={type:"separator",value:""},r=[s,n];i.length>0&&(r=r.concat(a).concat(i)),t.length>0&&(r=r.concat(a).concat(t));var o=!1;return G.forEach(r,function(t){t.value!==e||o||"Expression"===e||(t.selected=!0,o=!0)}),r=[{label:"",value:"",selected:!o}].concat(r)},prepareData:function(){var e=this.inputLayer.fields,t=this.mappedFields,i=[];return G.forEach(e,function(e,s){i.push({inputField:e,mappedField:t[s],inputFieldName:e.name,mappedFieldName:t[s].name})}),i},getMappedFields:function(){var e=[];this.mappedFields.forEach(function(t,i){-1===e.indexOf(t)&&e.push(t)});var t=G.filter(e,function(e){return e&&"null"!==e.name&&(!this.selectedField||!e.type||this.selectedField.type===e.type)},this);return this.getOptionObject(t)},getUnmappedFields:function(){var e=G.filter(this.appendLayer.fields,function(e){return this.mappedFields.indexOf(e)<0&&(!this.selectedField||this.selectedField.type===e.type)},this);return this.getOptionObject(e)},getOptionObject:function(e){return G.map(e,function(e){return{value:e.name,label:e.name}})},getColumns:function(){return[{label:this.i18n.inputField,field:"inputFieldName"},{label:this.i18n.appendValue,field:"mappedFieldName",editor:O,editOn:"click",editorArgs:{style:"width:120px;",maxHeight:-1,sortByLabel:!1,onChange:U.hitch(this,function(e){"Expression"===e&&(this.addExpression(),this.onExpressionSelect())})},autoSave:!0,renderCell:U.hitch(this,function(e,t,i,s){var n=t&&"Expression"!==t?t:"null";i.innerHTML=n})}]},updateGridRow:function(e){var t=this.inherited(arguments);return"null"!==e.mappedFieldName&&e.mappedFieldName&&"Expression"!==e.mappedFieldName||(t.className+="dgrid-row-highlight"),t},updateSelectOptions:function(){this.dataFieldGrid.on("dgrid-editor-show",U.hitch(this,function(e){var t=e.cell,i=t.row;this.selectedField=i.data.inputField,this.selectedIndex=i.id,e.editor.removeOption(e.editor.getOptions()),e.editor.addOption(this.getOptionStore(e.cell.row.data.mappedFieldName))}))},updateMappedOnChange:function(){this.dataFieldGrid.on("dgrid-datachange",U.hitch(this,function(e){this.selectedIndex=e.cell.row.id,"null"===e.value&&this.updateMappedFields({name:"null",alias:"Expression"}),e.value&&"Expression"!==e.value?this.getChangedMappedField(!0,e):this.getChangedMappedField(!1,e)}))},getChangedMappedField:function(e,t){var i=G.filter(this.appendLayer.fields,function(i){var s=e?t.value:t.oldValue;return i.name===s});i[0]&&this.updateMappedFields(i[0])},updateMappedFields:function(e){this.mappedFields[this.selectedIndex]=e,this.dataFieldGrid.set("collection",u.createStore(this.prepareData()))},onExpressionSelect:function(){this._calcField.set("expression",""),e.show(this._calcField.domNode),this._exprDialog.show()},addExpression:function(){if(this._calcField)this._calcField&&this._calcField.layer!==this.appendLayer&&(this._calcField.reset(),this._calcField.set("layer",this.appendLayer));else{var e=L.getExprFunctions();this._calcField=new l({expressionMode:l.MODE_ARCADE,arcadeEditor:this.arcadeEditor,map:this.map,layer:this.appendLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",helperMethods:e,showHelp:!1,css:{addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add,expression:this.expression||null},this._expressionCtr),this._calcField.startup(),this._calcField.expressionMode===l.MODE_SQL?(K.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=q.around(this._calcField,"_handleAddFieldButtonClick",U.hitch(this,function(e){return U.hitch(this,function(e,t){var i=this._calcField.get("expression")[0];this.updateMappedFields({alias:"Expression",name:i.sqlExpression}),this._exprDialog.hide()})}))):this._calcField.expressionMode===l.MODE_ARCADE&&this._calcField.on("expression-add",U.hitch(this,function(e){this.updateMappedFields({alias:"Expression",name:e.expression}),this._exprDialog.hide()})),this._calcField.on("close",U.hitch(this,function(){this._exprDialog.hide()}))}},_onSelectionLayerLoad:function(e,t){var l,p=this.filter&&this.filter.filter||"";if(t.setScaleRange(e.minScale,e.maxScale),this._connect(e,"onScaleRangeChange",U.hitch(this,function(e,t){e.setScaleRange(t.minScale,t.maxScale)},t,e)),this.map.addLayer(t),"esriGeometryPoint"===t.geometryType||"esriGeometryMultPoint"===t.geometryType?(l=new r,l.setStyle(r.STYLE_TARGET),l._setDim(16,16,0),l.setOutline(new s(a.STYLE_SOLID,new P([0,255,255]),2,s.CAP_ROUND,s.JOIN_ROUND)),l.setColor(new P([0,0,0,0])),t.setSelectionSymbol(l)):"esriGeometryPolyline"===t.geometryType?t.setSelectionSymbol(new a(a.STYLE_SOLID,new P([0,255,255]),2)):"esriGeometryPolygon"===t.geometryType&&t.setSelectionSymbol(new n(n.STYLE_NULL,new a(a.STYLE_SOLID,new P([0,255,255]),2),new P([0,0,0,0]))),this.selectionLayer&&p){p.match(/ OR /g)?this._isAttrFlag=!1:(this._isAttrFlag=!0,V.set(this._filterLabel,"innerHTML",se.trim(p)),this._expression={action:"edit",expression:{layer:0,where:p,_attributeText:p,_attributeExprObj:this.attributeExprObj}});var h=new o;h.returnGeometry=!0,h.where=p,this.selectionLayer.selectFeatures(h,i.SELECTION_ADD)}},_loadConnections:function(){this.on("start",U.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",U.hitch(this,"_onClose",!1)),this._filterForm.on("add-expression",U.hitch(this,this._handleExpressionFormAdd)),this._filterForm.on("cancel-expression",U.hitch(this,this._handleExpressionFormCancel))},_showMessages:function(e){V.set(this._bodyNode,"innerHTML",e),k.fadeIn({node:this._errorMessagePane,easing:Q.quadIn,onEnd:U.hitch(this,function(){K.set(this._errorMessagePane,{display:""})})}).play(),window.setTimeout(U.hitch(this,this._handleCloseMsg),3e3)},_handleCloseMsg:function(e){e&&e.preventDefault(),k.fadeOut({node:this._errorMessagePane,easing:Q.quadOut,onEnd:U.hitch(this,function(){K.set(this._errorMessagePane,{display:"none"})})}).play()},isLayerAllowed:function(e){return e&&e.type===y.TABLE||e.type===y.BTABLE||e.geometryType===d.GeometryTypes.Point||e.geometryType===d.GeometryTypes.Polygon||e.geometryType===d.GeometryTypes.Line},isSimilarTypeAsInput:function(e){return this.inputLayer&&e&&e.type===this.inputLayer.type&&e.geometryType==this.inputLayer.geometryType},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){this.getUserProfile().then(U.hitch(this,function(t){this.isLayerEditable(e,t)&&L.isPortalHostedService(e&&e.url)?this.inputLayer=e:this.inputLayer=void 0,this.updateSelectLayerOptions(this.inputLayer,this.inputLayers,this._inputLayerSelect)}))},_setInputLayersAttr:function(e){this.getUserProfile().then(U.hitch(this,function(t){this.inputLayers=G.filter(e,function(e){return L.isPortalHostedService(e&&e.url)&&this.isLayerEditable(e,t)&&this.isLayerAllowed(e)},this),this.inputLayer=this.setDefaultLayer(this.inputLayer,this.inputLayers),this.updateSelectLayerOptions(this.inputLayer,this.inputLayers,this._inputLayerSelect),this.set("appendLayers",e)}))},_setAppendLayerAttr:function(e){this.appendLayer=!this.isSameLayer(this.inputLayer,e)&&e},_setAppendLayersAttr:function(e){this.appendLayers=e,this.filterAppendLayers(this.inputLayer),this.appendLayer=this.setDefaultLayer(this.appendLayer,this.appendFilteredLayers),this.updateSelectLayerOptions(this.appendLayer,this.appendFilteredLayers,this._appendLayerSelect),this.setFilterBtn(),this.setFieldMapping()},_setFilterAttr:function(e){this.filter=e},_setFieldMappingAttr:function(e){this.fieldMapping=e},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_connect:function(e,t,i){this._pbConnects.push(N.connect(e,t,i))}});return X("extend-esri")&&U.setObject("dijit.analysis.AppendData",le,e),le});