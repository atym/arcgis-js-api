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

define(["require","exports","../../../core/libs/gl-matrix/mat4","../../../core/libs/gl-matrix/vec2","../../../core/libs/gl-matrix/vec3","../../../core/libs/gl-matrix/vec4","../GeometryUtils","./rendererUtils","./vtShaderSnippets","../../webgl/ShaderVariations","../../webgl/VertexArrayObject"],function(t,e,i,r,a,n,o,s,l,f,d){return function(){function t(){this._attributeLocations={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2},this._attributeLocationsDD={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2,a_color:3,a_width:4},this._initialized=!1,this._viewProjMat=i.create(),this._offsetVector=a.create(),this._color=n.create(),this._dashArray=r.create()}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,r,a,n,l,f,d,u,_,c){if(0!==e.triangleElementCount){this._initialized||this._initialize(t);var h=l.tileTransform.transform,m=l.coordRange/512,v=f.getPaintValue("line-translate",r);if(0!==v[0]||0!==v[1]){i.copy(this._viewProjMat,l.tileTransform.transform);var D=v[0],y=v[1],p=0,b=0,g=(1<<l.key.level)/Math.pow(2,r)*m,V=n.rotation;if(1===f.getPaintValue("line-translate-anchor",r)){var A=-o.C_DEG_TO_RAD*V,x=Math.sin(A),z=Math.cos(A);p=g*(D*z-y*x),b=g*(D*x+y*z)}else p=g*D,b=g*y;this._offsetVector[0]=p,this._offsetVector[1]=b,this._offsetVector[2]=0,i.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),h=this._viewProjMat}var P=f.getPaintValue("line-pattern",r),w=void 0!==P,U=1/_,O=f.getPaintValue("line-blur",r),j=f.hasDataDrivenColor?[1,1,1,1]:f.getPaintValue("line-color",r),M=f.hasDataDrivenOpacity?1:f.getPaintValue("line-opacity",r),T=f.hasDataDrivenWidth?1:f.getPaintValue("line-width",r),L=M*j[3]*c;this._color[0]=L*j[0],this._color[1]=L*j[1],this._color[2]=L*j[2],this._color[3]=L;var E,I=f.hasDataDrivenLine,N=3===a;N&&(E=s.int32To4Bytes(e.layerID));var S=this._getLineVAO(t,l,I);if(S){t.bindVAO(S);var B=this._shaderVariations.getProgram([w,I,N],void 0,void 0,I?this._attributeLocationsDD:this._attributeLocations);if(t.bindProgram(B),B.setUniformMatrix4fv("u_transformMatrix",h),B.setUniformMatrix4fv("u_extrudeMatrix",u),B.setUniform2fv("u_normalized_origin",l.tileTransform.displayCoord),B.setUniform1f("u_depth",f.z),B.setUniform1f("u_blur",O),B.setUniform1f("u_antialiasing",U),B.setUniform4fv("u_color",this._color),B.setUniform1f("u_width",T),N&&B.setUniform4f("u_id",E[0],E[1],E[2],E[3]),w){var C=d.getMosaicItemPosition(P,!0);C&&(d.bind(t,9729,C.page,1),B.setUniform2f("u_pattern_tl",C.tl[0],C.br[1]),B.setUniform2f("u_pattern_br",C.br[0],C.tl[1]),B.setUniform2f("u_spriteSize",m*C.size[0],C.size[1]),B.setUniform1i("u_texture",1))}else{var R=f.getPaintValue("line-dasharray",r);R.length<2&&(R=[1,-1]);var G=m;this._dashArray[0]=G*R[0],this._dashArray[1]=G*R[1],B.setUniform2fv("u_dasharray",this._dashArray)}t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=new f("line",["lineVS","lineFS"],[],l,t);return e.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN"),e.addDefine("DD","DD",[!0,!1],"DD"),e.addDefine("ID","ID",[!0,!0],"ID"),this._shaderVariations=e,this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]},this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:20,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:20,normalized:!0,divisor:0},{name:"a_width",count:1,type:5126,offset:16,stride:20,normalized:!1,divisor:0}]},this._initialized=!0,!0},t.prototype._getLineVAO=function(t,e,i){if(i){if(e.lineDDVertexArrayObject)return e.lineDDVertexArrayObject;var r=e.lineDDVertexBuffer,a=e.lineIndexBuffer;return r&&a?(e.lineDDVertexArrayObject=new d(t,this._attributeLocationsDD,this._vertexAttributesDD,{geometry:r},a),e.lineDDVertexArrayObject):null}if(e.lineVertexArrayObject)return e.lineVertexArrayObject;var r=e.lineVertexBuffer,a=e.lineIndexBuffer;return r&&a?(e.lineVertexArrayObject=new d(t,this._attributeLocations,this._vertexAttributes,{geometry:r},a),e.lineVertexArrayObject):null},t}()});