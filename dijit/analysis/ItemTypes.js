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

define(["dojo/_base/lang","dojo/has","../../kernel"],function(e,a,r){var i={BIGDATA:"Big Data File Share",CSV:"CSV",XLS:"Microsoft Excel",FS:"Feature Service",MS:"Map Service",IS:"Image Service",FLAYER:"Feature Layer",BDATAFEATURE:"featureClass",TABLE:"Table",BTABLE:"table",FLAYERVIEW:"FeatureLayerView"};return a("extend-esri")&&e.setObject("dijit.analysis.itemTypes",i,r),i});