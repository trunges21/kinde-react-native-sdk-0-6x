var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _jwtDecode=_interopRequireDefault(require("jwt-decode"));var _urlParse=_interopRequireDefault(require("url-parse"));var runtime=_interopRequireWildcard(require("../ApiClient"));var _unauthenticated=require("../common/exceptions/unauthenticated.exception");var _unexpected=require("../common/exceptions/unexpected.exception");var _Enums=require("./Enums");var _AuthorizationCode=_interopRequireDefault(require("./OAuth/AuthorizationCode"));var _Storage=_interopRequireDefault(require("./Storage"));var _Utils=require("./Utils");var _constants=require("./constants");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n["default"]=e,t&&t.set(e,n),n;}function _callSuper(t,o,e){return o=(0,_getPrototypeOf2["default"])(o),(0,_possibleConstructorReturn2["default"])(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_getPrototypeOf2["default"])(t).constructor):o.apply(t,e));}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t;})();}var KindeSDK=function(_runtime$BaseAPI){(0,_inherits2["default"])(KindeSDK,_runtime$BaseAPI);function KindeSDK(issuer,redirectUri,clientId,logoutRedirectUri){var _this;var scope=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'openid profile email offline';var additionalParameters=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};var authBrowserOptions=arguments.length>6?arguments[6]:undefined;(0,_classCallCheck2["default"])(this,KindeSDK);var configuration=new runtime.Configuration({basePath:issuer});_this=_callSuper(this,KindeSDK,[configuration]);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"issuer",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"redirectUri",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"clientId",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"logoutRedirectUri",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"scope",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"clientSecret",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"additionalParameters",void 0);(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(_this),"authBrowserOptions",void 0);_this.issuer=issuer;(0,_Utils.checkNotNull)(_this.issuer,'Issuer');_this.redirectUri=redirectUri;(0,_Utils.checkNotNull)(_this.redirectUri,'Redirect URI');_this.clientId=clientId;(0,_Utils.checkNotNull)(_this.clientId,'Client Id');_this.logoutRedirectUri=logoutRedirectUri;(0,_Utils.checkNotNull)(_this.logoutRedirectUri,'Logout Redirect URI');_this.additionalParameters=(0,_Utils.checkAdditionalParameters)(additionalParameters);_this.scope=scope;_this.authBrowserOptions=authBrowserOptions;return _this;}(0,_createClass2["default"])(KindeSDK,[{key:"login",value:(function(){var _login=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(){var additionalParameters,authBrowserOptions,auth,additionalParametersMerged,_args=arguments;return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:additionalParameters=_args.length>0&&_args[0]!==undefined?_args[0]:{};authBrowserOptions=_args.length>1?_args[1]:undefined;(0,_Utils.checkAdditionalParameters)(additionalParameters);_context.next=5;return this.cleanUp();case 5:auth=new _AuthorizationCode["default"]();additionalParametersMerged=Object.assign({},this.additionalParameters,additionalParameters);return _context.abrupt("return",auth.authenticate(this,true,'login',additionalParametersMerged,authBrowserOptions));case 8:case"end":return _context.stop();}},_callee,this);}));function login(){return _login.apply(this,arguments);}return login;}())},{key:"register",value:function register(){var additionalParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var authBrowserOptions=arguments.length>1?arguments[1]:undefined;(0,_Utils.checkAdditionalParameters)(additionalParameters);var auth=new _AuthorizationCode["default"]();return auth.authenticate(this,true,'registration',additionalParameters,authBrowserOptions);}},{key:"createOrg",value:function createOrg(){var additionalParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var authBrowserOptions=arguments.length>1?arguments[1]:undefined;return this.register(Object.assign({is_create_org:true},additionalParameters),authBrowserOptions);}},{key:"logout",value:(function(){var _logout=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(){var isRevoke,authBrowserOptions,payload,URLParsed,response,_args2=arguments;return _regenerator["default"].wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:isRevoke=_args2.length>0&&_args2[0]!==undefined?_args2[0]:false;authBrowserOptions=_args2.length>1?_args2[1]:undefined;_context2.next=4;return this.cleanUp();case 4:if(!isRevoke){_context2.next=16;break;}payload=new _AuthorizationCode["default"]().buildBaseAuthenticateURL(this);_context2.prev=6;_context2.next=9;return this.request({path:"/oauth2/revoke",method:'POST',headers:{},body:(0,_Utils.convertObject2FormData)(payload)});case 9:return _context2.abrupt("return",true);case 12:_context2.prev=12;_context2.t0=_context2["catch"](6);if(_context2.t0 instanceof Error){console.error(_context2.t0.message);}return _context2.abrupt("return",false);case 16:URLParsed=(0,_urlParse["default"])(this.logoutEndpoint,true);URLParsed.query['redirect']=this.logoutRedirectUri;_context2.next=20;return(0,_Utils.openWebBrowser)(URLParsed.toString(),this.redirectUri,authBrowserOptions||this.authBrowserOptions);case 20:response=_context2.sent;return _context2.abrupt("return",response.type==='success');case 22:case"end":return _context2.stop();}},_callee2,this,[[6,12]]);}));function logout(){return _logout.apply(this,arguments);}return logout;}())},{key:"getToken",value:(function(){var _getToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(url){var token,URLParsed,_URLParsed$query,code,error,error_description,msg,formData,state,codeVerifier;return _regenerator["default"].wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return this.isAuthenticated;case 3:if(!_context3.sent){_context3.next=8;break;}_context3.next=6;return _Storage["default"].getToken();case 6:token=_context3.sent;return _context3.abrupt("return",token);case 8:_context3.next=12;break;case 10:_context3.prev=10;_context3.t0=_context3["catch"](0);case 12:(0,_Utils.checkNotNull)(url,'URL');URLParsed=(0,_urlParse["default"])(String(url),true);_URLParsed$query=URLParsed.query,code=_URLParsed$query.code,error=_URLParsed$query.error,error_description=_URLParsed$query.error_description;if(!error){_context3.next=18;break;}msg=error_description!==null&&error_description!==void 0?error_description:error;throw new _unauthenticated.UnAuthenticatedException(msg);case 18:(0,_Utils.checkNotNull)(code,'code');formData=new FormData();formData.append('code',code);formData.append('client_id',this.clientId);formData.append('grant_type','authorization_code');formData.append('redirect_uri',this.redirectUri);state=_Storage["default"].getState();if(state){formData.append('state',state);}codeVerifier=_Storage["default"].getCodeVerifier();if(codeVerifier){formData.append('code_verifier',codeVerifier);}return _context3.abrupt("return",this.fetchToken(formData));case 29:case"end":return _context3.stop();}},_callee3,this,[[0,10]]);}));function getToken(_x){return _getToken.apply(this,arguments);}return getToken;}())},{key:"useRefreshToken",value:(function(){var _useRefreshToken=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4(){var token,newToken,formData,_args4=arguments;return _regenerator["default"].wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:token=_args4.length>0&&_args4[0]!==undefined?_args4[0]:null;_context4.t0=token;if(_context4.t0){_context4.next=6;break;}_context4.next=5;return _Storage["default"].getToken();case 5:_context4.t0=_context4.sent;case 6:newToken=_context4.t0;if(newToken){_context4.next=9;break;}throw new _unauthenticated.UnAuthenticatedException();case 9:formData=new FormData();formData.append('client_id',this.clientId);formData.append('grant_type','refresh_token');formData.append('refresh_token',newToken===null||newToken===void 0?void 0:newToken.refresh_token);return _context4.abrupt("return",this.fetchToken(formData));case 14:case"end":return _context4.stop();}},_callee4,this);}));function useRefreshToken(){return _useRefreshToken.apply(this,arguments);}return useRefreshToken;}())},{key:"fetchToken",value:function fetchToken(formData){var _this2=this;return new Promise(function(){var _ref=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(resolve,reject){var response,dataResponse;return _regenerator["default"].wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:_context5.next=2;return fetch(_this2.tokenEndpoint,{method:'POST',headers:{'Content-Type':'multipart/form-data','Kinde-SDK':'ReactNative/1.2.0'},body:formData});case 2:response=_context5.sent;_context5.next=5;return response.json();case 5:dataResponse=_context5.sent;if(!dataResponse.error){_context5.next=9;break;}reject(dataResponse);return _context5.abrupt("return");case 9:_context5.next=11;return _Storage["default"].setToken(dataResponse);case 11:resolve(dataResponse);case 12:case"end":return _context5.stop();}},_callee5);}));return function(_x2,_x3){return _ref.apply(this,arguments);};}());}},{key:"cleanUp",value:(function(){var _cleanUp=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(){return _regenerator["default"].wrap(function _callee6$(_context6){while(1)switch(_context6.prev=_context6.next){case 0:return _context6.abrupt("return",_Storage["default"].clearAll());case 1:case"end":return _context6.stop();}},_callee6);}));function cleanUp(){return _cleanUp.apply(this,arguments);}return cleanUp;}())},{key:"getUserDetails",value:(function(){var _getUserDetails=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(){return _regenerator["default"].wrap(function _callee7$(_context7){while(1)switch(_context7.prev=_context7.next){case 0:return _context7.abrupt("return",_Storage["default"].getUserProfile());case 1:case"end":return _context7.stop();}},_callee7);}));function getUserDetails(){return _getUserDetails.apply(this,arguments);}return getUserDetails;}())},{key:"getClaims",value:(function(){var _getClaims=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee8(){var tokenType,token,_args8=arguments;return _regenerator["default"].wrap(function _callee8$(_context8){while(1)switch(_context8.prev=_context8.next){case 0:tokenType=_args8.length>0&&_args8[0]!==undefined?_args8[0]:_Enums.TokenType.ACCESS_TOKEN;if([_Enums.TokenType.ACCESS_TOKEN,_Enums.TokenType.ID_TOKEN].includes(tokenType)){_context8.next=3;break;}throw new _unexpected.UnexpectedException('tokenType');case 3:_context8.next=5;return _Storage["default"].getTokenType(tokenType);case 5:token=_context8.sent;if(token){_context8.next=8;break;}throw new _unauthenticated.UnAuthenticatedException();case 8:return _context8.abrupt("return",(0,_jwtDecode["default"])(token));case 9:case"end":return _context8.stop();}},_callee8);}));function getClaims(){return _getClaims.apply(this,arguments);}return getClaims;}())},{key:"getClaim",value:(function(){var _getClaim=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee9(keyName){var _claims$keyName;var tokenType,claims,_args9=arguments;return _regenerator["default"].wrap(function _callee9$(_context9){while(1)switch(_context9.prev=_context9.next){case 0:tokenType=_args9.length>1&&_args9[1]!==undefined?_args9[1]:_Enums.TokenType.ACCESS_TOKEN;_context9.next=3;return this.getClaims(tokenType);case 3:claims=_context9.sent;return _context9.abrupt("return",{name:keyName,value:(_claims$keyName=claims[keyName])!==null&&_claims$keyName!==void 0?_claims$keyName:null});case 5:case"end":return _context9.stop();}},_callee9,this);}));function getClaim(_x4){return _getClaim.apply(this,arguments);}return getClaim;}())},{key:"getPermissions",value:(function(){var _getPermissions=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee10(){var claims;return _regenerator["default"].wrap(function _callee10$(_context10){while(1)switch(_context10.prev=_context10.next){case 0:_context10.next=2;return this.getClaims();case 2:claims=_context10.sent;return _context10.abrupt("return",{orgCode:claims['org_code'],permissions:claims['permissions']});case 4:case"end":return _context10.stop();}},_callee10,this);}));function getPermissions(){return _getPermissions.apply(this,arguments);}return getPermissions;}())},{key:"getPermission",value:(function(){var _getPermission=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee11(permission){var allClaims,permissions;return _regenerator["default"].wrap(function _callee11$(_context11){while(1)switch(_context11.prev=_context11.next){case 0:_context11.next=2;return this.getClaims();case 2:allClaims=_context11.sent;permissions=allClaims['permissions'];return _context11.abrupt("return",{orgCode:allClaims['org_code'],isGranted:permissions===null||permissions===void 0?void 0:permissions.includes(permission)});case 5:case"end":return _context11.stop();}},_callee11,this);}));function getPermission(_x5){return _getPermission.apply(this,arguments);}return getPermission;}())},{key:"getOrganization",value:(function(){var _getOrganization=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee12(){var orgCode;return _regenerator["default"].wrap(function _callee12$(_context12){while(1)switch(_context12.prev=_context12.next){case 0:_context12.next=2;return this.getClaim('org_code');case 2:orgCode=_context12.sent.value;return _context12.abrupt("return",{orgCode:orgCode});case 4:case"end":return _context12.stop();}},_callee12,this);}));function getOrganization(){return _getOrganization.apply(this,arguments);}return getOrganization;}())},{key:"getUserOrganizations",value:(function(){var _getUserOrganizations=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee13(){var orgCodes;return _regenerator["default"].wrap(function _callee13$(_context13){while(1)switch(_context13.prev=_context13.next){case 0:_context13.next=2;return this.getClaim('org_codes',_Enums.TokenType.ID_TOKEN);case 2:orgCodes=_context13.sent.value;return _context13.abrupt("return",{orgCodes:orgCodes});case 4:case"end":return _context13.stop();}},_callee13,this);}));function getUserOrganizations(){return _getUserOrganizations.apply(this,arguments);}return getUserOrganizations;}())},{key:"getIntegerFlag",value:(function(){var _getIntegerFlag=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee14(flagName,defaultValue){return _regenerator["default"].wrap(function _callee14$(_context14){while(1)switch(_context14.prev=_context14.next){case 0:_context14.next=2;return this.getFlag(flagName,{defaultValue:defaultValue},'i');case 2:return _context14.abrupt("return",_context14.sent.value);case 3:case"end":return _context14.stop();}},_callee14,this);}));function getIntegerFlag(_x6,_x7){return _getIntegerFlag.apply(this,arguments);}return getIntegerFlag;}())},{key:"getBooleanFlag",value:(function(){var _getBooleanFlag=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee15(flagName,defaultValue){return _regenerator["default"].wrap(function _callee15$(_context15){while(1)switch(_context15.prev=_context15.next){case 0:_context15.next=2;return this.getFlag(flagName,{defaultValue:defaultValue},'b');case 2:return _context15.abrupt("return",_context15.sent.value);case 3:case"end":return _context15.stop();}},_callee15,this);}));function getBooleanFlag(_x8,_x9){return _getBooleanFlag.apply(this,arguments);}return getBooleanFlag;}())},{key:"getStringFlag",value:(function(){var _getStringFlag=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee16(flagName,defaultValue){return _regenerator["default"].wrap(function _callee16$(_context16){while(1)switch(_context16.prev=_context16.next){case 0:_context16.next=2;return this.getFlag(flagName,{defaultValue:defaultValue},'s');case 2:return _context16.abrupt("return",_context16.sent.value);case 3:case"end":return _context16.stop();}},_callee16,this);}));function getStringFlag(_x10,_x11){return _getStringFlag.apply(this,arguments);}return getStringFlag;}())},{key:"getFlag",value:(function(){var _getFlag=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee17(flagName){var options,flagType,isUsedDefault,flag,flagTypeParsed,requestType,_args17=arguments;return _regenerator["default"].wrap(function _callee17$(_context17){while(1)switch(_context17.prev=_context17.next){case 0:options=_args17.length>1&&_args17[1]!==undefined?_args17[1]:{};flagType=_args17.length>2?_args17[2]:undefined;isUsedDefault=false;_context17.next=5;return this.getFeatureFlags(flagName);case 5:flag=_context17.sent;if(!flag){isUsedDefault=true;flag={v:options['defaultValue'],t:flagType};}if(!(flag['v']===undefined)){_context17.next=9;break;}throw new Error("This flag '"+flagName+"' was not found, and no default value has been provided");case 9:flagTypeParsed=_constants.FLAG_TYPE[flag['t']];requestType=_constants.FLAG_TYPE[flagType];if(!(requestType!==undefined&&flagTypeParsed!==requestType)){_context17.next=13;break;}throw new Error("Flag '"+flagName+"' is type "+flagTypeParsed+" - requested type "+requestType);case 13:return _context17.abrupt("return",{code:flagName,type:flagTypeParsed,value:flag['v'],is_default:isUsedDefault});case 14:case"end":return _context17.stop();}},_callee17,this);}));function getFlag(_x12){return _getFlag.apply(this,arguments);}return getFlag;}())},{key:"getFeatureFlags",value:(function(){var _getFeatureFlags=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee18(name){var flags;return _regenerator["default"].wrap(function _callee18$(_context18){while(1)switch(_context18.prev=_context18.next){case 0:_context18.next=2;return this.getClaim('feature_flags');case 2:flags=_context18.sent.value;if(!(name&&flags)){_context18.next=5;break;}return _context18.abrupt("return",flags[name]);case 5:return _context18.abrupt("return",flags);case 6:case"end":return _context18.stop();}},_callee18,this);}));function getFeatureFlags(_x13){return _getFeatureFlags.apply(this,arguments);}return getFeatureFlags;}())},{key:"isAuthenticated",get:function get(){var _this3=this;return(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee19(){var timeExpired,now,isAuthenticated,token;return _regenerator["default"].wrap(function _callee19$(_context19){while(1)switch(_context19.prev=_context19.next){case 0:_context19.next=2;return _Storage["default"].getExpiredAt();case 2:timeExpired=_context19.sent;now=new Date().getTime();isAuthenticated=timeExpired*1000>now;if(!isAuthenticated){_context19.next=7;break;}return _context19.abrupt("return",true);case 7:_context19.prev=7;_context19.next=10;return _this3.useRefreshToken();case 10:token=_context19.sent;return _context19.abrupt("return",((token===null||token===void 0?void 0:token.expires_in)||0)>0);case 14:_context19.prev=14;_context19.t0=_context19["catch"](7);return _context19.abrupt("return",false);case 17:case"end":return _context19.stop();}},_callee19,null,[[7,14]]);}))();}},{key:"authorizationEndpoint",get:function get(){return this.issuer+"/oauth2/auth";}},{key:"tokenEndpoint",get:function get(){return this.issuer+"/oauth2/token";}},{key:"logoutEndpoint",get:function get(){return this.issuer+"/logout";}}]);return KindeSDK;}(runtime.BaseAPI);var _default=exports["default"]=KindeSDK;