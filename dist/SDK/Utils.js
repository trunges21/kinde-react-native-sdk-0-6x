var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof3=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.checkAdditionalParameters=exports.addAdditionalParameters=exports.OpenWebInApp=void 0;exports.checkNotNull=checkNotNull;exports.generateChallenge=generateChallenge;exports.generateRandomString=generateRandomString;exports.openWebBrowser=exports.isExpoGo=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _typeof2=_interopRequireDefault(require("@babel/runtime/helpers/typeof"));var _cryptoJs=_interopRequireDefault(require("crypto-js"));var _invalidType=require("../common/exceptions/invalid-type.exception");var _propertyRequired=require("../common/exceptions/property-required.exception");var _unexpected=require("../common/exceptions/unexpected.exception");var _constants=require("./constants");var _reactNativeInappbrowserReborn=_interopRequireDefault(require("react-native-inappbrowser-reborn"));var _expoConstants=_interopRequireWildcard(require("expo-constants"));var WebBrowser=_interopRequireWildcard(require("expo-web-browser"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof3(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function base64URLEncode(str){return str.toString().replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');}function sha256(buffer){return _cryptoJs["default"].SHA256(buffer).toString(_cryptoJs["default"].enc.Base64);}function generateRandomString(){var byteLength=arguments.length>0&&arguments[0]!==undefined?arguments[0]:32;return base64URLEncode(_cryptoJs["default"].lib.WordArray.random(byteLength));}function generateChallenge(){var state=generateRandomString();var codeVerifier=generateRandomString();var codeChallenge=base64URLEncode(sha256(codeVerifier));return{state:state,codeVerifier:codeVerifier,codeChallenge:codeChallenge};}function checkNotNull(reference,name){if(reference===null||reference===undefined){throw new _propertyRequired.PropertyRequiredException(name);}return reference;}var getValueByKey=function getValueByKey(obj,key){return obj[key];};var checkAdditionalParameters=function checkAdditionalParameters(){var additionalParameters=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if((0,_typeof2["default"])(additionalParameters)!=='object'){throw new _unexpected.UnexpectedException('additionalParameters');}var keyExists=Object.keys(additionalParameters);if(keyExists.length){var keysAllow=Object.keys(_constants.AdditionalParametersAllow);var _iterator=_createForOfIteratorHelper(keyExists),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var key=_step.value;if(!keysAllow.includes(key)){throw new _unexpected.UnexpectedException(key);}if((0,_typeof2["default"])(additionalParameters[key])!==_constants.AdditionalParametersAllow[key]){throw new _invalidType.InvalidTypeException(key,getValueByKey(_constants.AdditionalParametersAllow,key));}}}catch(err){_iterator.e(err);}finally{_iterator.f();}return additionalParameters;}return{};};exports.checkAdditionalParameters=checkAdditionalParameters;var addAdditionalParameters=function addAdditionalParameters(target){var additionalParameters=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var keyExists=Object.keys(additionalParameters);if(keyExists.length){keyExists.forEach(function(key){target[key]=getValueByKey(additionalParameters,key);});}return target;};exports.addAdditionalParameters=addAdditionalParameters;var isExpoGo=_expoConstants["default"].executionEnvironment===_expoConstants.ExecutionEnvironment.StoreClient;exports.isExpoGo=isExpoGo;var OpenWebInApp=function(){var _ref=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(url,kindeSDK,options){var response;return _regenerator["default"].wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return openWebBrowser(url,kindeSDK.redirectUri,options||kindeSDK.authBrowserOptions);case 3:response=_context.sent;if(!(response.type==='success'&&response.url)){_context.next=6;break;}return _context.abrupt("return",kindeSDK.getToken(response.url));case 6:console.error('Something wrong when trying to authenticating. Reason: ',response.type);return _context.abrupt("return",null);case 10:_context.prev=10;_context.t0=_context["catch"](0);if(_context.t0 instanceof Error){console.error('Something wrong when trying to authenticating. Reason: ',_context.t0.message);}return _context.abrupt("return",null);case 14:case"end":return _context.stop();}},_callee,null,[[0,10]]);}));return function OpenWebInApp(_x,_x2,_x3){return _ref.apply(this,arguments);};}();exports.OpenWebInApp=OpenWebInApp;var openWebBrowser=function(){var _ref2=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(url,redirectUri,options){return _regenerator["default"].wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:if(!isExpoGo){_context2.next=2;break;}return _context2.abrupt("return",WebBrowser.openAuthSessionAsync(url,redirectUri));case 2:if(!_reactNativeInappbrowserReborn["default"]){_context2.next=7;break;}_context2.next=5;return _reactNativeInappbrowserReborn["default"].isAvailable();case 5:if(!_context2.sent){_context2.next=7;break;}return _context2.abrupt("return",_reactNativeInappbrowserReborn["default"].openAuth(url,redirectUri,Object.assign({ephemeralWebSession:false,showTitle:false,enableUrlBarHiding:true,enableDefaultShare:false},options)));case 7:throw new Error('Not found web browser');case 8:case"end":return _context2.stop();}},_callee2);}));return function openWebBrowser(_x4,_x5,_x6){return _ref2.apply(this,arguments);};}();exports.openWebBrowser=openWebBrowser;