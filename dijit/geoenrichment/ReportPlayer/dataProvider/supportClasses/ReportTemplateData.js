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

define(["dojo/_base/declare","dojo/request/xhr","dojo/promise/all","esri/kernel","esri/request","esri/urlUtils","esri/dijit/geoenrichment/utils/DataUtil"],function(e,t,r,n,o,s,i){return e(null,{id:null,_portal:null,_baseUrl:null,constructor:function(e,t){this.id=e.id,this._portal=t,this._baseUrl=this._portal.url+"/sharing/rest"},getFiles:function(){var e=this;return this._getResources().then(function(n){var o=[];return n.resources.map(function(r){var n=r.resource;if("thumbnail.png"!==n){var u=e._baseUrl+"/"+e._contentItemPath(e.id+"/resources/"+n),l=s.getProxyRule(u),a=l&&l.proxyUrl?l.proxyUrl+"?"+u:u;o.push(t(a,{method:"POST",handleAs:"arraybuffer",data:"token="+e._getToken(),headers:{"X-Requested-With":null,"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"}}).then(function(e){var t=!/\.xml$|\.txt$|\.json$/i.test(n);return{name:n,data:t?i.base64FromByteSource(e):decodeURIComponent(escape(i.binaryStringFromByteSource(e)))}}))}}),r(o)})},_contentItemPath:function(e){return"content/items/"+e},_getToken:function(){return n.id.credentials[0].token},_getResources:function(){return o({url:this._baseUrl+"/"+this._contentItemPath(this.id+"/resources"),content:{num:100,f:"json",token:this._getToken()},handleAs:"json"},{usePost:!0})},getPortalUrl:function(e){return e?/[^:]+:\/\/(.+)$/i.exec(this._portal.url)[1]:this._portal.url}})});