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

define(["require","exports"],function(e,a){function t(e,t){var n=a.functionDecls[e.name.toLowerCase()];void 0===n?a.functionDecls[e.name.toLowerCase()]={min:e.min,max:e.max,av:t}:"a"===n.av&&"f"===t?(void 0!==n.fmin&&delete n.fmin,void 0!==n.fmax&&delete n.fmax,n.fmin=e.min,n.fmax=e.max):"f"===n.av&&"a"===t?(void 0===n.fmin&&(n.fmin=n.min),void 0===n.fmax&&(n.fmax=n.max),n.min=e.min,n.max=e.max,n.av="a"):"f"===t?(n.fmin=e.min,n.fmax=e.max):"a"===t&&(n.min=e.min,n.max=e.max)}function n(e,a,t,n){return"0"!==e.min&&t.length<Number(e.min)?-2:"*"!==e.max&&t.length>Number(e.max)?-2:1}function r(e,a,t){if(null!==t.localScope&&void 0!==t.localScope[e.toLowerCase()]){var r=t.localScope[e.toLowerCase()];if("FormulaFunction"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),n(r.signature,e,a,t);if("any"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),n(r.signature,e,a,t)}if(void 0!==t.globalScope[e.toLowerCase()]){var r=t.globalScope[e.toLowerCase()];if("FormulaFunction"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),n(r.signature,e,a,t);if("any"===r.type)return void 0===r.signature&&(r.signature={min:"0",max:"*"}),n(r.signature,e,a,t)}return-1}function i(e,a){void 0===a&&(a=!0);var t=S(e,"SYNTAX","UNREOGNISED");try{switch(e.type){case"VariableDeclarator":return null!==e.init&&"FunctionExpression"===e.init.type?S(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR"):"Identifier"!==e.id.type?S(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER"):null!==e.init?i(e.init,!1):"";case"VariableDeclaration":for(var n=0;n<e.declarations.length;n++)if(""!==(t=i(e.declarations[n],a)))return t;return"";case"ForInStatement":if(""!==(t=i(e.left,a)))return t;if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return S(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return S(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return S(e,"SYNTAX","LEFTNOTVAR");return""!==(t=i(e.right,a))?t:(t=i(e.body,a),""!==t?t:"");case"ForStatement":return null!==e.test&&""!==(t=i(e.test,a))?t:null!==e.init&&""!==(t=i(e.init,a))?t:null!==e.update&&""!==(t=i(e.update,a))?t:null!==e.body&&""!==(t=i(e.body,a))?t:"";case"ContinueStatement":case"EmptyStatement":case"BreakStatement":return"";case"IfStatement":return t=i(e.test,a),""!==t?t:null!==e.consequent&&""!==(t=i(e.consequent,!1))?t:null!==e.alternate&&""!==(t=i(e.alternate,!1))?t:"";case"BlockStatement":for(var r=[],n=0;n<e.body.length;n++)"EmptyStatement"!==e.body[n].type&&r.push(e.body[n]);e.body=r;for(var n=0;n<e.body.length;n++)if(""!==(t=i(e.body[n],a)))return t;return"";case"FunctionDeclaration":return!1===a?S(e,"SYNTAX","GLOBALFUNCTIONSONLY"):"Identifier"!==e.id.type?S(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER"):i(e.body,!1);case"ReturnStatement":return null!==e.argument?i(e.argument,a):"";case"UpdateExpression":return"Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type?S(e,"SYNTAX","ASSIGNMENTTOVARSONLY"):i(e.argument,a);case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");if(""!==(t=i(e.left,a)))return t;switch(e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return i(e.right,!1);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?i(e.expression,!1):(e.expression.type,i(e.expression,!1));case"Identifier":t="";break;case"MemberExpression":return t=i(e.object,a),""!==t?t:!0===e.computed?i(e.property,a):"";case"Literal":return"";case"ThisExpression":return S(e,"SYNTAX","NOTSUPPORTED");case"CallExpression":if("Identifier"!==e.callee.type)return S(e,"SYNTAX","ONLYNODESSUPPORTED");t="";for(var n=0;n<e.arguments.length;n++)if(""!==(t=i(e.arguments[n],a)))return t;return"";case"UnaryExpression":t=i(e.argument,a);break;case"BinaryExpression":if(""!==(t=i(e.left,a)))return t;if(""!==(t=i(e.right,a)))return t;switch(e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"LogicalExpression":if(""!==(t=i(e.left,a)))return t;if(""!==(t=i(e.right)))return t;switch(e.operator){case"&&":case"||":break;default:return S(e,"SYNTAX","OPERATORNOTRECOGNISED")}return"";case"ConditionalExpression":return S(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":t="";for(var n=0;n<e.elements.length;n++)if(""!==(t=i(e.elements[n],a)))return t;return t;case"Array":return S(e,"SYNTAX","NOTSUPPORTED");case"ObjectExpression":t="";for(var n=0;n<e.properties.length;n++){if(t="",null!==e.properties[n].key&&("Literal"!==e.properties[n].key.type&&"Identifier"!==e.properties[n].key.type&&(t=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[n].key.type)){var s=e.properties[n].key.value;"string"==typeof s||s instanceof String||(t=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===t&&(t=i(e.properties[n],a)),""!==t)return t}return t;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?S(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&""!==(t=i(e.key,a))?t:t=i(e.value,a);default:return t}return t}catch(e){throw e}}function s(e,a){var t=S(e,"SYNTAX","UNREOGNISED"),n=null,i="";try{switch(e.type){case"VariableDeclarator":if(null!==e.init&&"FunctionExpression"===e.init.type)return S(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR");null!==a.localScope?a.localScope[e.id.name.toLowerCase()]:a.globalScope[e.id.name.toLowerCase()];var o=null===e.init?"":s(e.init,a);return""!==o?o:(null===a.localScope?a.globalScope[e.id.name.toLowerCase()]={type:"any"}:a.localScope[e.id.name.toLowerCase()]={type:"any"},"");case"FunctionDeclaration":return n=d(e.id.name.toLowerCase(),e,a),""!==(i=y(e,a))?i:null!==a.localScope?S(e,"SYNTAX","GLOBALFUNCTIONSONLY"):(n.isnative=!1,a.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[n]},"");case"VariableDeclaration":t="";for(var c=0;c<e.declarations.length;c++)if(""!==(t=s(e.declarations[c],a)))return t;return t;case"IfStatement":return t=s(e.test,a),""!==t?t:"AssignmentExpression"===e.test.type||"UpdateExpression"===e.test.type?S(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):null!==e.consequent&&""!==(t=s(e.consequent,a))?t:null!==e.alternate&&""!==(t=s(e.alternate,a))?t:"";case"EmptyStatement":return"";case"BlockStatement":for(var c=0;c<e.body.length;c++)if(""!==(t=s(e.body[c],a)))return t;return"";case"ReturnStatement":return null!==e.argument?s(e.argument,a):"";case"ForInStatement":if("VariableDeclaration"===e.left.type){if(e.left.declarations.length>1)return S(e,"SYNTAX","ONLY1VAR");if(null!==e.left.declarations[0].init)return S(e,"SYNTAX","CANNOTDECLAREVAL")}else if("Identifier"!==e.left.type)return S(e,"SYNTAX","LEFTNOTVAR");return""!==(t=s(e.left,a))?t:""!==(t=s(e.right,a))?t:(t=s(e.body,a),""!==t?t:"");case"ForStatement":return null!==e.init&&""!==(t=s(e.init,a))?t:null!==e.test&&""!==(t=s(e.test,a))?t:null!==e.body&&""!==(t=s(e.body,a))?t:null!==e.update&&""!==(t=s(e.update,a))?t:"";case"BreakStatement":case"ContinueStatement":return"";case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var l=!1;return"MemberExpression"===e.argument.type?s(e.argument,a):(null!==a.localScope&&void 0!==a.localScope[e.argument.name.toLowerCase()]&&(l=!0),void 0!==a.globalScope[e.argument.name.toLowerCase()]&&(l=!0),!1===l?"Identifier "+e.argument.name+" has not been declared.":"");case"AssignmentExpression":if("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type)return S(e,"SYNTAX","ASSIGNMENTTOVARSONLY");var u=s(e.right,a);return""!==u?u:(l=!1,"MemberExpression"===e.left.type?(u=s(e.left,a),""!==u?u:""):(null!==a.localScope&&void 0!==a.localScope[e.left.name.toLowerCase()]&&(l=!0),void 0!==a.globalScope[e.left.name.toLowerCase()]&&(l=!0),!1===l?"Identifier "+e.left.name+" has not been declared.":""));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?s(e.expression,a):(e.expression.type,s(e.expression,a));case"Identifier":var m=e.name.toLowerCase();if(null!==a.localScope&&void 0!==a.localScope[m])return"";t=void 0!==a.globalScope[m]?"":S(e,"SYNTAX","VARIABLENOTFOUND");break;case"MemberExpression":return t=s(e.object,a),""!==t?t:!0===e.computed?s(e.property,a):"";case"Literal":return"";case"ThisExpression":t=S(e,"SYNTAX","NOTSUPPORTED");break;case"CallExpression":if("Identifier"!==e.callee.type)return S(e,"SYNTAX","ONLYNODESSUPPORTED");t="";for(var c=0;c<e.arguments.length;c++)if(""!==(t=s(e.arguments[c],a)))return t;var p=r(e.callee.name,e.arguments,a);-1===p&&(t=S(e,"SYNTAX","NOTFOUND")),-2===p&&(t=S(e,"SYNTAX","WRONGSIGNATURE"));break;case"UnaryExpression":t=s(e.argument,a);break;case"BinaryExpression":return""!==(t=s(e.left,a))?t:(t=s(e.right,a),""!==t?t:"");case"LogicalExpression":return""!==(t=s(e.left,a))?t:"AssignmentExpression"===e.left.type||"UpdateExpression"===e.left.type?S(e.left,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):(t=s(e.right,a),""!==t?t:"AssignmentExpression"===e.right.type||"UpdateExpression"===e.right.type?S(e.right,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"):"");case"ConditionalExpression":return S(e,"SYNTAX","NOTSUPPORTED");case"ArrayExpression":t="";for(var c=0;c<e.elements.length;c++)if(""!==(t=s(e.elements[c],a)))return t;return t;case"ObjectExpression":t="";for(var c=0;c<e.properties.length;c++){if(t="",null!==e.properties[c].key&&("Literal"!==e.properties[c].key.type&&"Identifier"!==e.properties[c].key.type&&(t=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING")),"Literal"===e.properties[c].key.type)){var f=e.properties[c].key.value;"string"==typeof f||f instanceof String||(t=S(e,"SYNTAX","OBJECTPROPERTYMUSTBESTRING"))}if(""===t&&(t=s(e.properties[c],a)),""!==t)return t}return t;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type?S(e,"SYNTAX","ONLYLITERAL"):"Identifier"!==e.key.type&&""!==(t=s(e.key,a))?t:t=s(e.value,a);case"Array":return S(e,"SYNTAX","NOTSUPPORTED");default:return t}return t}catch(e){throw e}}function o(e,a){var t=!1;try{switch(e.type){case"VariableDeclarator":return null!==e.init?(e.init.type,o(e.init,a)):t;case"FunctionDeclaration":return o(e.body,a);case"VariableDeclaration":for(var n=0;n<e.declarations.length;n++)if(o(e.declarations[n],a))return!0;return t;case"IfStatement":return!!o(e.test,a)||(!(null===e.consequent||!o(e.consequent,a))||(!(null===e.alternate||!o(e.alternate,a))||t));case"EmptyStatement":return t;case"BlockStatement":for(var n=0;n<e.body.length;n++)if(o(e.body[n],a))return!0;return t;case"ReturnStatement":return null!==e.argument?o(e.argument,a):t;case"UpdateExpression":return o(e.argument,a);case"AssignmentExpression":return(t=o(e.right,a))||o(e.left,a);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?o(e.expression,a):(e.expression.type,o(e.expression,a));case"ForInStatement":return(t=o(e.left,a))?t:(t=o(e.right,a))?t:(t=o(e.body,a))||t;case"ForStatement":return null!==e.init&&(t=o(e.init,a))?t:null!==e.test&&(t=o(e.test,a))?t:null!==e.body&&(t=o(e.body,a))?t:(null!==e.update&&(t=o(e.update,a)),t);case"BreakStatement":case"ContinueStatement":case"Compound":return t;case"Identifier":return a.toLowerCase()===e.name.toLowerCase();case"MemberExpression":return(t=o(e.object,a))?t:(!0===e.computed&&(t=o(e.property,a)),t);case"Literal":case"ThisExpression":return t;case"CallExpression":for(var n=0;n<e.arguments.length;n++)o(e.arguments[n],a)&&(t=!0);return t;case"ArrayExpression":for(var n=0;n<e.elements.length;n++)o(e.elements[n],a)&&(t=!0);return t;case"UnaryExpression":return o(e.argument,a);case"BinaryExpression":case"LogicalExpression":return(t=o(e.left,a))?t:t=o(e.right,a);case"ObjectExpression":for(var n=0;n<e.properties.length;n++)o(e.properties[n],a)&&(t=!0);return t;case"Property":return t=o(e.value,a);case"ConditionalExpression":case"Array":default:return t}}catch(e){throw e}}function c(e,a){return!0===o(e.body[0].body,a.toLowerCase())}function l(e,a){var t=!1;try{switch(e.type){case"VariableDeclarator":return null!==e.init?(e.init.type,l(e.init,a)):t;case"FunctionDeclaration":return l(e.body,a);case"VariableDeclaration":for(var n=0;n<e.declarations.length;n++)if(l(e.declarations[n],a))return!0;return t;case"IfStatement":return!!l(e.test,a)||(!(null===e.consequent||!l(e.consequent,a))||(!(null===e.alternate||!l(e.alternate,a))||t));case"EmptyStatement":return t;case"BlockStatement":for(var n=0;n<e.body.length;n++)if(l(e.body[n],a))return!0;return t;case"ReturnStatement":return null!==e.argument?l(e.argument,a):t;case"UpdateExpression":return l(e.argument,a);case"AssignmentExpression":return!!l(e.left,a)||l(e.right,a);case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?l(e.expression,a):(e.expression.type,l(e.expression,a));case"ForInStatement":return(t=l(e.left,a))?t:(t=l(e.right,a))?t:(t=l(e.body,a))||t;case"ForStatement":return null!==e.init&&(t=l(e.init,a))?t:null!==e.test&&(t=l(e.test,a))?t:null!==e.body&&(t=l(e.body,a))?t:(null!==e.update&&(t=l(e.update,a)),t);case"BreakStatement":case"ContinueStatement":case"Compound":case"Identifier":return t;case"MemberExpression":return(t=l(e.object,a))?t:(!0===e.computed&&(t=l(e.property,a)),t);case"Literal":case"ThisExpression":return t;case"CallExpression":if(e.callee.name.toLowerCase()===a.toLowerCase())return!0;for(var n=0;n<e.arguments.length;n++)l(e.arguments[n],a)&&(t=!0);return t;case"ArrayExpression":for(var n=0;n<e.elements.length;n++)l(e.elements[n],a)&&(t=!0);return t;case"UnaryExpression":return l(e.argument,a);case"BinaryExpression":case"LogicalExpression":return(t=l(e.left,a))?t:t=l(e.right,a);case"ConditionalExpression":return t;case"ObjectExpression":for(var n=0;n<e.properties.length;n++)l(e.properties[n],a)&&(t=!0);return t;case"Property":return t=l(e.value,a);case"Array":default:return t}}catch(e){throw e}}function u(e,a){return!0===l(e.body[0].body,a)}function m(e,a){var t,n=[];try{switch(e.type){case"VariableDeclarator":return null!==e.init?(e.init.type,m(e.init,a)):n;case"FunctionDeclaration":return m(e.body,a);case"VariableDeclaration":for(var r=0;r<e.declarations.length;r++)t=m(e.declarations[r],a),n=n.concat(t);return n;case"ForInStatement":return t=m(e.left,a),n=n.concat(t),t=m(e.right,a),n=n.concat(t),t=m(e.body,a),n=n.concat(t);case"ForStatement":return null!==e.init&&(t=m(e.init,a),n=n.concat(t)),null!==e.test&&(t=m(e.test,a),n=n.concat(t)),null!==e.body&&(t=m(e.body,a),n=n.concat(t)),null!==e.update&&(t=m(e.update,a),n=n.concat(t)),n;case"IfStatement":return t=m(e.test,a),n=n.concat(t),null!==e.consequent&&(t=m(e.consequent,a),n=n.concat(t)),null!==e.alternate&&(t=m(e.alternate,a),n=n.concat(t)),n;case"EmptyStatement":return n;case"BlockStatement":for(var r=0;r<e.body.length;r++)t=m(e.body[r],a),n=n.concat(t);return n;case"ReturnStatement":return null!==e.argument?m(e.argument,a):n;case"UpdateExpression":return m(e.argument,a);case"AssignmentExpression":return n=m(e.left,a),n=n.concat(m(e.right,a));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?m(e.expression,a):(e.expression.type,m(e.expression,a));case"BreakStatement":case"ContinueStatement":case"Compound":case"Identifier":return n;case"MemberExpression":if("Identifier"!==e.object.type)return n;if(!1===e.computed)n.push(e.object.name.toLowerCase()+"."+e.property.name.toLowerCase());else try{"Literal"===e.property.type&&"string"==typeof e.property.value&&n.push(e.object.name.toLowerCase()+"."+e.property.value.toString().toLowerCase())}catch(e){}return n;case"Literal":case"ThisExpression":return n;case"CallExpression":for(var r=0;r<e.arguments.length;r++)t=m(e.arguments[r],a),n=n.concat(t);return n;case"ArrayExpression":for(var r=0;r<e.elements.length;r++)t=m(e.elements[r],a),n=n.concat(t);return n;case"UnaryExpression":return m(e.argument,a);case"ObjectExpression":for(var r=0;r<e.properties.length;r++)t=m(e.properties[r],a),n=n.concat(t);return n;case"Property":return m(e.value,a);case"BinaryExpression":case"LogicalExpression":return t=m(e.left,a),n=n.concat(t),t=m(e.right,a),n=n.concat(t);case"ConditionalExpression":case"Array":default:return n}}catch(e){throw e}}function p(e,a){return m(e.body[0].body,a)}function d(e,a,t){var n=[];if(void 0!==a.params&&null!==a.params)for(var r=0;r<a.params.length;r++)n.push("any");return{name:e,return:"any",params:n}}function y(e,a){for(var t={globalScope:a.globalScope,localScope:{}},n=0;n<e.params.length;n++){var r=e.params[n].name;t.localScope[r.toLowerCase()]={type:"any"}}return s(e.body,t)}function f(e,a,t,n){var r={};void 0!==e&&null!==e||(e={}),void 0!==t&&null!==t||(t={}),r.infinity={type:"any"},r.textformatting={type:"any"},r.pi={type:"any"};for(var i in a)("simple"!==n||"simple"===n&&"a"===a[i].av)&&(r[i]={type:"FormulaFunction",signature:{min:a[i].min,max:a[i].max}},"simple"!==n&&(void 0!==a[i].fmin&&(r[i].signature.min=a[i].fmin),void 0!==a[i].fmax&&(r[i].signature.max=a[i].fmax)));for(var s=0;s<t.length;s++){var i=t[s];r[i.name]={type:"FormulaFunction",signature:i}}for(var i in e)r[i]=e[i],r[i].type="any";return r}function x(e,t,n){void 0===n&&(n="full");var r=f(t.vars,a.functionDecls,t.customFunctions,n),i={globalScope:r,localScope:null};return s(e.body[0].body,i)}function N(e){return"BlockStatement"!==e.body[0].body.type?"Invalid formula content.":i(e.body[0].body)}function S(e,a,t){var n="";switch(a){case"SYNTAX":n="Syntax Error: ";break;case"RUNTIME":n="Runtime Error: ";break;default:n="Syntax Error: "}try{switch(e.type){case"IfStatement":switch(t){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":n+=" Assignments not be made in logical tests";break;case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":n+=" Non Boolean used as Condition"}break;case"UpdateExpression":case"AssignmentExpression":switch(t){case"CANNOT_USE_ASSIGNMENT_IN_CONDITION":n+=" Assignments not be made in logical tests";break;case"ASSIGNMENTTOVARSONLY":n+=" Assignments can only be made to identifiers"}break;case"ExpressionStatement":n+=" Assignments can only be made to identifiers";break;case"FunctionDeclaration":switch(t){case"GLOBALFUNCTIONSONLY":n+=" Functions cannot be declared as variables";break;case"FUNCTIONMUSTHAVEIDENTIFIER":n+=" Function Definition must have an identifier"}break;case"VariableDeclaration":n+=" Only 1 variable can be declared at a time";break;case"VariableDeclarator":switch(t){case"FUNCTIONVARIABLEDECLARATOR":n+=" Functions cannot be declared as variables";break;case"VARIABLEMUSTHAVEIDENTIFIER":n+=" Variable Definition must have an identifier"}break;case"Identifier":n+=" Identifier Not Found. ",n+=e.name;break;case"ObjectExpression":switch(t){case"OBJECTPROPERTYMUSTBESTRING":n+=" Property name must be a string"}break;case"ForStatement":switch(t){case"CANNOT_USE_NONBOOLEAN_IN_CONDITION":n+=" Non Boolean used as Condition"}break;case"ForInStatement":switch(t){case"ONLY1VAR":n+=" Can only declare 1 var for use with IN";break;case"CANNOTDECLAREVAL":n+=" Can only declare value for use with IN";break;case"LEFTNOVAR":n+="Must provide a variable to iterate with.";break;case"VARIABLENOTDECLARED":n+="Variable must be declared before it is used..";break;case"CANNOTITERATETHISTYPE":n+="This type cannot be used in an IN loop"}break;case"MemberExpression":switch(t){case"PROPERTYNOTFOUND":n+="Cannot find member property. ",n+=!1===e.computed?e.property.name:"";break;case"OUTOFBOUNDS":n+="Out of Bounds. ",n+=!1===e.computed?e.property.name:"";break;case"NOTFOUND":n+="Cannot call member method on null. ",n+=!1===e.computed?e.property.name:"";break;case"INVALIDTYPE":n+="Cannot call member property on object of this type. ",n+=!1===e.computed?e.property.name:""}break;case"Property":switch(t){case"ONLYLITERAL":n+="Property names must be literals or identifiers"}break;case"Literal":break;case"ThisExpression":n+="THIS construct is not supported.";case"CallExpression":switch(t){case"WRONGSIGNATURE":n+="Function signature does not match: ",n+=e.callee.name;break;case"ONLYNODESUPPORTED":n+="Functions must be declared.",n+=e.callee.name;break;case"NOTAFUNCTION":n+="Not a Function: ",n+=e.callee.name;break;case"NOTFOUND":n+="Function Not Found: "+e.callee.name}break;case"UnaryExpression":switch(t){case"NOTSUPPORTEDUNARYOPERATOR":n+="Operator "+e.operator+" not allowed in this context. Only ! can be used with boolean, and - with a number";break;case"NOTSUPPORTEDTYPE":n+="Unary operator "+e.operator+" cannot be used with this argument."}case"BinaryExpression":switch(t){case"OPERATORNOTRECOGNISED":n+="Binary Operator not recognised "+e.operator}break;case"LogicalExpression":switch(t){case"ONLYBOOLEAN":n+="Operator "+e.operator+" cannot be used. Only || or && are allowed values";break;case"ONLYORORAND":n+="Logical Expression "+e.operator+" being applied to parameters that are not boolean."}break;case"ConditionalExpression":n+="Conditional statements not supported.";break;case"ArrayExpression":switch(t){case"FUNCTIONCONTEXTILLEGAL":n+=" Cannot Put Function inside Array."}break;case"Array":n+="Expression contains unrecognised array structure.";break;default:n+="Expression contains unrecognised code structures."}}catch(e){throw e}return n}function E(e,a,t){return{line:e.loc.start.line,character:e.loc.start.column,reason:S(e,a,t)}}function v(e,a,t,n,r){void 0===r&&(r=!0);for(var i={globalScope:a.globalScope,localScope:{}},s=0;s<e.params.length;s++){var o=e.params[s].name;i.localScope[o.toLowerCase()]={type:"any"}}T(e.body,i,t,n,!1)}function T(e,a,t,n,i){if(void 0===i&&(i=!0),null===e)throw new Error("Unnexpexted Expression Syntax");var s=null;try{switch(e.type){case"VariableDeclarator":return null!==e.init&&"FunctionExpression"===e.init.type?void n.push(E(e,"SYNTAX","FUNCTIONVARIABLEDECLARATOR")):("Identifier"!==e.id.type?n.push(E(e,"SYNTAX","VARIABLEMUSTHAVEIDENTIFIER")):(null!==a.localScope?a.localScope[e.id.name.toLowerCase()]:a.globalScope[e.id.name.toLowerCase()],null===a.localScope?a.globalScope[e.id.name.toLowerCase()]={type:"any"}:a.localScope[e.id.name.toLowerCase()]={type:"any"}),void(null===e.init||T(e.init,a,t,n,i)));case"FunctionDeclaration":return!1===i&&n.push(E(e,"SYNTAX","GLOBALFUNCTIONSONLY")),"Identifier"!==e.id.type&&n.push(E(e,"SYNTAX","FUNCTIONMUSTHAVEIDENTIFIER")),s=d("",e,a),v(e,a,t,n,i),null!==a.localScope&&n.push(E(e,"SYNTAX","GLOBALFUNCTIONSONLY")),s.isnative=!1,void("Identifier"===e.id.type&&(a.globalScope[e.id.name.toLowerCase()]={type:"FormulaFunction",signature:[s]}));case"VariableDeclaration":for(var o=0;o<e.declarations.length;o++)T(e.declarations[o],a,t,n,i);return;case"IfStatement":return null!==e.test&&(T(e.test,a,t,n,i),"AssignmentExpression"!==e.test.type&&"UpdateExpression"!==e.test.type||n.push(E(e.test,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))),null!==e.consequent&&T(e.consequent,a,t,n,i),void(null!==e.alternate&&T(e.alternate,a,t,n,i));case"EmptyStatement":return;case"BlockStatement":if(null!==e.body)for(var o=0;o<e.body.length;o++)T(e.body[o],a,t,n,i);return;case"ReturnStatement":return void(null!==e.argument&&T(e.argument,a,t,n,i));case"ForInStatement":return"VariableDeclaration"===e.left.type?(e.left.declarations.length>1&&n.push(E(e,"SYNTAX","ONLY1VAR")),null!==e.left.declarations[0].init&&n.push(E(e,"SYNTAX","CANNOTDECLAREVAL"))):"Identifier"!==e.left.type&&n.push(E(e,"SYNTAX","LEFTNOTVAR")),T(e.left,a,t,n,i),T(e.right,a,t,n,i),void T(e.body,a,t,n,i);case"ForStatement":return null!==e.init&&T(e.init,a,t,n,i),null!==e.test&&T(e.test,a,t,n,i),null!==e.body&&T(e.body,a,t,n,i),void(null!==e.update&&T(e.update,a,t,n,i));case"BreakStatement":case"ContinueStatement":return;case"UpdateExpression":if("Identifier"!==e.argument.type&&"MemberExpression"!==e.argument.type)n.push(E(e,"SYNTAX","ASSIGNMENTTOVARSONLY"));else{if("Identifier"===e.argument.type){var c=!1;!1===t&&(null!==a.localScope&&void 0!==a.localScope[e.argument.name.toLowerCase()]&&(c=!0),void 0!==a.globalScope[e.argument.name.toLowerCase()]&&(c=!0),!1===c&&n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."}))}"MemberExpression"===e.argument.type&&T(e.argument,a,t,n,i)}return;case"AssignmentExpression":switch("Identifier"!==e.left.type&&"MemberExpression"!==e.left.type&&n.push(E(e,"SYNTAX","ASSIGNMENTTOVARSONLY")),e.operator){case"=":case"/=":case"*=":case"%=":case"+=":case"-=":break;default:n.push(E(e,"SYNTAX","OPERATORNOTRECOGNISED"))}T(e.right,a,t,n,i);var l=!1;return"Identifier"===e.left.type&&(null!==a.localScope&&void 0!==a.localScope[e.left.name.toLowerCase()]&&(l=!0),void 0!==a.globalScope[e.left.name.toLowerCase()]&&(l=!0),!1===t&&!1===l&&n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Identifier "+e.argument.name+" has not been declared."})),void("MemberExpression"===e.left.type&&T(e.left,a,t,n,i));case"ExpressionStatement":return void("AssignmentExpression"===e.expression.type?T(e.expression,a,t,n,i):(e.expression.type,T(e.expression,a,t,n,i)));case"Identifier":var u=e.name.toLowerCase();if(null!==a.localScope&&void 0!==a.localScope[u])return;if(void 0!==a.globalScope[u])return;!1===t&&n.push(E(e,"SYNTAX","VARIABLENOTFOUND"));break;case"MemberExpression":return T(e.object,a,t,n,i),void(!0===e.computed&&T(e.property,a,t,n,i));case"Literal":return"";case"ThisExpression":n.push(E(e,"SYNTAX","NOTSUPPORTED"));break;case"CallExpression":"Identifier"!==e.callee.type&&n.push(E(e,"SYNTAX","ONLYNODESSUPPORTED"));for(var o=0;o<e.arguments.length;o++)T(e.arguments[o],a,t,n,i);var m=r(e.callee.name,e.arguments,a);return!1===t&&-1===m&&n.push(E(e,"SYNTAX","NOTFOUND")),void(-2===m&&n.push(E(e,"SYNTAX","WRONGSIGNATURE")));case"UnaryExpression":return void T(e.argument,a,t,n,i);case"BinaryExpression":switch(T(e.left,a,t,n,i),T(e.right,a,t,n,i),e.operator){case"==":case"!=":case"<":case"<=":case">":case">=":case"+":case"-":case"*":case"/":case"%":break;default:n.push(E(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return;case"LogicalExpression":switch(e.operator){case"&&":case"||":break;default:n.push(E(e,"SYNTAX","OPERATORNOTRECOGNISED"))}return T(e.left,a,t,n,i),"AssignmentExpression"!==e.left.type&&"UpdateExpression"!==e.left.type||n.push(E(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")),T(e.right,a,t,n,i),void("AssignmentExpression"!==e.right.type&&"UpdateExpression"!==e.right.type||n.push(E(e,"SYNTAX","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));case"ConditionalExpression":n.push(E(e,"SYNTAX","NOTSUPPORTED"));break;case"ArrayExpression":for(var o=0;o<e.elements.length;o++)T(e.elements[o],a,t,n,i);return;case"Array":n.push(E(e,"SYNTAX","NOTSUPPORTED"));case"ObjectExpression":for(var o=0;o<e.properties.length;o++)T(e.properties[o],a,t,n,i);return;case"Property":return"Literal"!==e.key.type&&"Identifier"!==e.key.type&&n.push(E(e,"SYNTAX","ONLYLITERAL")),"Literal"===e.key.type&&T(e.key,a,t,n,i),void T(e.value,a,t,n,i);default:n.push(E(e,"SYNTAX","UNRECOGNISED"))}return}catch(a){n.push({line:null===e?0:e.loc.start.line,character:null===e?0:e.loc.start.column,reason:"Unnexpected Syntax"})}}function g(e,t,n,r){void 0===r&&(r="full");var i=[];if("BlockStatement"!==e.body[0].body.type)return[{line:0,character:0,reason:"Invalid Body"}];null!==t&&void 0!==t||(t={vars:{},customFunctions:[]});var s=f(t.vars,a.functionDecls,t.customFunctions,r),o={globalScope:s,localScope:null};try{T(e.body[0].body,o,n,i)}catch(e){}return i}function b(e,a){var t,n=[];try{switch(e.type){case"VariableDeclarator":return null!==e.init?(e.init.type,b(e.init,a)):n;case"FunctionDeclaration":return b(e.body,a);case"VariableDeclaration":for(var r=0;r<e.declarations.length;r++)t=b(e.declarations[r],a),n=n.concat(t);return n;case"ForInStatement":return t=b(e.left,a),n=n.concat(t),t=b(e.right,a),n=n.concat(t),t=b(e.body,a),n=n.concat(t);case"ForStatement":return null!==e.init&&(t=b(e.init,a),n=n.concat(t)),null!==e.test&&(t=b(e.test,a),n=n.concat(t)),null!==e.body&&(t=b(e.body,a),n=n.concat(t)),null!==e.update&&(t=b(e.update,a),n=n.concat(t)),n;case"IfStatement":return t=b(e.test,a),n=n.concat(t),null!==e.consequent&&(t=b(e.consequent,a),n=n.concat(t)),null!==e.alternate&&(t=b(e.alternate,a),n=n.concat(t)),n;case"EmptyStatement":return n;case"BlockStatement":for(var r=0;r<e.body.length;r++)t=b(e.body[r],a),n=n.concat(t);return n;case"ReturnStatement":return null!==e.argument?b(e.argument,a):n;case"UpdateExpression":return b(e.argument,a);case"AssignmentExpression":return n=b(e.left,a),n=n.concat(b(e.right,a));case"ExpressionStatement":return"AssignmentExpression"===e.expression.type?b(e.expression,a):(e.expression.type,b(e.expression,a));case"BreakStatement":case"ContinueStatement":case"Compound":case"Identifier":case"MemberExpression":case"Literal":case"ThisExpression":return n;case"CallExpression":for(var r=0;r<e.arguments.length;r++)t=b(e.arguments[r],a),n=n.concat(t);return n.push(e.callee.name.toLowerCase()),n;case"ArrayExpression":for(var r=0;r<e.elements.length;r++)t=b(e.elements[r],a),n=n.concat(t);return n;case"UnaryExpression":return b(e.argument,a);case"ObjectExpression":for(var r=0;r<e.properties.length;r++)t=b(e.properties[r],a),n=n.concat(t);return n;case"Property":return b(e.value,a);case"BinaryExpression":case"LogicalExpression":return t=b(e.left,a),n=n.concat(t),t=b(e.right,a),n=n.concat(t);case"ConditionalExpression":case"Array":default:return n}}catch(e){throw e}}function A(e,a){return b(e.body[0].body,a)}Object.defineProperty(a,"__esModule",{value:!0}),a.functionDecls={concatenate:{min:"0",max:"*",av:"a"},split:{min:"2",max:"4",av:"a"},guid:{min:"0",max:"1",av:"a"},today:{min:"0",max:"0",av:"a"},now:{min:"0",max:"0",av:"a"},timestamp:{min:"0",max:"0",av:"a"},day:{min:"1",max:"1",av:"a"},month:{min:"1",max:"1",av:"a"},year:{min:"1",max:"1",av:"a"},hour:{min:"1",max:"1",av:"a"},second:{min:"1",max:"1",av:"a"},millisecond:{min:"1",max:"1",av:"a"},minute:{min:"1",max:"1",av:"a"},weekday:{min:"1",max:"1",av:"a"},toutc:{min:"1",max:"1",av:"a"},tolocal:{min:"1",max:"1",av:"a"},date:{min:"0",max:"7",av:"a"},datediff:{min:"2",max:"3",av:"a"},dateadd:{min:"2",max:"3",av:"a"},trim:{min:"1",max:"1",av:"a"},text:{min:"1",max:"2",av:"a"},left:{min:"2",max:"2",av:"a"},right:{min:"2",max:"2",av:"a"},mid:{min:"2",max:"3",av:"a"},upper:{min:"1",max:"1",av:"a"},proper:{min:"1",max:"2",av:"a"},lower:{min:"1",max:"1",av:"a"},find:{min:"2",max:"3",av:"a"},iif:{min:"3",max:"3",av:"a"},decode:{min:"2",max:"*",av:"a"},when:{min:"2",max:"*",av:"a"},defaultvalue:{min:"2",max:"2",av:"a"},isempty:{min:"1",max:"1",av:"a"},domaincode:{min:"3",max:"4",av:"a"},domainname:{min:"2",max:"4",av:"a"},polygon:{min:"1",max:"1",av:"a"},point:{min:"1",max:"1",av:"a"},polyline:{min:"1",max:"1",av:"a"},extent:{min:"1",max:"1",av:"a"},multipoint:{min:"1",max:"1",av:"a"},geometry:{min:"1",max:"1",av:"a"},count:{min:"0",max:"*",av:"a"},number:{min:"1",max:"2",av:"a"},acos:{min:"1",max:"1",av:"a"},asin:{min:"1",max:"1",av:"a"},atan:{min:"1",max:"1",av:"a"},atan2:{min:"2",max:"2",av:"a"},ceil:{min:"1",max:"2",av:"a"},floor:{min:"1",max:"2",av:"a"},round:{min:"1",max:"2",av:"a"},cos:{min:"1",max:"1",av:"a"},exp:{min:"1",max:"1",av:"a"},log:{min:"1",max:"1",av:"a"},min:{min:"0",max:"*",av:"a"},constrain:{min:"3",max:"3",av:"a"},console:{min:"0",max:"*",av:"a"},max:{min:"0",max:"*",av:"a"},pow:{min:"2",max:"2",av:"a"},random:{min:"0",max:"0",av:"a"},sqrt:{min:"1",max:"1",av:"a"},sin:{min:"1",max:"1",av:"a"},tan:{min:"1",max:"1",av:"a"},abs:{min:"1",max:"1",av:"a"},isnan:{min:"1",max:"1",av:"a"},stdev:{min:"0",max:"*",av:"a"},average:{min:"0",max:"*",av:"a"},mean:{min:"0",max:"*",av:"a"},sum:{min:"0",max:"*",av:"a"},variance:{min:"0",max:"*",av:"a"},distinct:{min:"0",max:"*",av:"a"},first:{min:"1",max:"1",av:"a"},top:{min:"2",max:"2",av:"a"},boolean:{min:"1",max:"1",av:"a"},dictionary:{min:"0",max:"*",av:"a"},typeof:{min:"1",max:"1",av:"a"},reverse:{min:"1",max:"1",av:"a"},replace:{min:"3",max:"4",av:"a"},sort:{min:"1",max:"2",av:"a"},feature:{min:"1",max:"*",av:"a"},haskey:{min:"2",max:"2",av:"a"
},indexof:{min:"2",max:"2",av:"a"},disjoint:{min:"2",max:"2",av:"a"},intersects:{min:"2",max:"2",av:"a"},touches:{min:"2",max:"2",av:"a"},crosses:{min:"2",max:"2",av:"a"},within:{min:"2",max:"2",av:"a"},contains:{min:"2",max:"2",av:"a"},overlaps:{min:"2",max:"2",av:"a"},equals:{min:"2",max:"2",av:"a"},relate:{min:"3",max:"3",av:"a"},intersection:{min:"2",max:"2",av:"a"},union:{min:"1",max:"2",av:"a"},difference:{min:"2",max:"2",av:"a"},symmetricdifference:{min:"2",max:"2",av:"a"},clip:{min:"2",max:"2",av:"a"},cut:{min:"2",max:"2",av:"a"},area:{min:"1",max:"2",av:"a"},areageodetic:{min:"1",max:"2",av:"a"},length:{min:"1",max:"2",av:"a"},lengthgeodetic:{min:"1",max:"2",av:"a"},distance:{min:"2",max:"3",av:"a"},densify:{min:"2",max:"3",av:"a"},densifygeodetic:{min:"2",max:"3",av:"a"},generalize:{min:"2",max:"4",av:"a"},buffer:{min:"2",max:"3",av:"a"},buffergeodetic:{min:"2",max:"3",av:"a"},offset:{min:"2",max:"6",av:"a"},rotate:{min:"2",max:"3",av:"a"},issimple:{min:"1",max:"1",av:"a"},simplify:{min:"1",max:"1",av:"a"},centroid:{min:"1",max:"1",av:"a"},multiparttosinglepart:{min:"1",max:"1",av:"a"},setgeometry:{min:"2",max:"2",av:"a"}},a.addFunctionDeclaration=t,a.checkFunctionSignature=n,a.findFunction=r,a.validateLanguageNode=i,a.testValidityOfExpression=s,a.referencesMemberImpl=o,a.referencesMember=c,a.referencesFunctionImpl=l,a.referencesFunction=u,a.findFieldLiteralsImpl=m,a.findFieldLiterals=p,a.extractFunctionDeclaration=d,a.validateFunction=y,a.constructGlobalScope=f,a.validateScript=x,a.validateLanguage=N,a.nodeErrorMessage=S,a.makeError=E,a.extractAllIssuesInFunction=v,a.extractAllIssues=T,a.checkScript=g,a.findFunctionCallsImpl=b,a.findFunctionCalls=A});