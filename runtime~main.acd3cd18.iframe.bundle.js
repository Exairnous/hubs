(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({73:"input-NumericInputField-stories",437:"popover-Popover-stories",499:"room-SafariMicModal-stories",576:"input-TextInputField-stories",931:"room-ContentMenu-stories",1219:"room-EnterOnDeviceModal-stories",1223:"room-AudioPopover-stories",1363:"room-ChatSidebar-stories",1410:"room-ObjectMenu-stories",1437:"auth-SignInModal-stories",1540:"room-ReactionPopover-stories",1574:"home-SocialBar-stories",1675:"room-PromoteClientModal-stories",1726:"room-AutoExitWarningModal-stories",1876:"room-PlacePopover-stories",2130:"room-RoomEntryModal-stories",2554:"room-SharePopover-stories",2583:"room-UserProfileSidebar-stories",3010:"input-Button-stories",3133:"room-RoomSidebar-stories",3354:"room-EmojiPicker-stories",3364:"input-CheckboxInput-stories",3991:"room-ExitedRoomScreen-stories",4247:"sidebar-Sidebar-stories",4328:"room-MediaBrowser-stories",4793:"room-TwitterOAuthModal-stories",4919:"room-InvitePopover-stories",4952:"input-RadioInputField-stories",5034:"room-Tip-stories",5035:"room-RoomSettingsSidebar-stories",5207:"layout-FullscreenLayout-stories",5456:"room-TweetEditorModal-stories",5617:"room-CloseRoomModal-stories",5951:"room-AvatarUrlModal-stories",6149:"auth-VerifyModal-stories",6262:"room-AvatarSettingsSidebar-stories",6324:"room-ObjectUrlModal-stories",6762:"input-SelectInputField-stories",7095:"room-LeaveRoomModal-stories",7174:"tokens-Tokens-stories",7344:"room-ObjectsSidebar-stories",7408:"input-ToggleInput-stories",7600:"input-Slider-stories",7744:"modal-Modal-stories",8028:"icons-Icon-stories",8189:"room-PeopleSidebar-stories",8261:"room-WebVRUnsupportedModal-stories",8470:"room-SceneUrlModal-stories",8916:"room-Notification-stories",8979:"input-TextAreaInput-stories",9005:"room-AvatarSetupModal-stories",9012:"auth-OAuthScreen-stories",9110:"room-MoreMenuPopover-stories",9115:"input-ToolbarButton-stories",9339:"room-MicSetupModal-stories",9615:"room-LoadingScreen-stories",9671:"room-SpectatingLabel-stories"}[chunkId]||chunkId)+"."+{73:"b3a54ac9",188:"93d5fa3d",437:"82d68ae5",499:"644ca361",576:"e9b4e6e3",697:"c2f81035",827:"043d4fe5",931:"2aca3ed7",954:"9283ebb5",1032:"73bd7a4e",1195:"d9826822",1219:"a778427a",1223:"403042dd",1341:"1f04602f",1363:"496940c5",1410:"8898057b",1437:"473ca7f5",1540:"26dae583",1574:"4489156a",1675:"9f58fdde",1726:"6c4e917e",1876:"b89b57db",2030:"a4025590",2130:"737e9ff3",2318:"e8e5dba3",2333:"fe3376e0",2390:"0fc20fa8",2554:"c675d8c9",2583:"b088858b",2800:"8350eb28",3010:"b610a8b5",3019:"5437ff4e",3048:"1299e10f",3056:"30014388",3116:"7c57525a",3133:"04a7695c",3160:"6e97595f",3354:"cbecd529",3364:"0d0aeb86",3990:"7adaf209",3991:"542b9314",3996:"3b97f87d",4076:"782b6247",4247:"3f91322d",4328:"ffba24e1",4341:"7f24c052",4793:"6d39cfa0",4919:"7bb9ffcc",4952:"99a77f44",5026:"697fc089",5034:"4d8243c2",5035:"01e25eff",5039:"16595247",5207:"3d1c9d33",5247:"446a6521",5456:"f089c6d1",5540:"46b0786c",5588:"db08b4a5",5617:"04546465",5951:"b2a6c61b",6149:"887897f6",6177:"d54594d2",6232:"ebd35915",6262:"1ba111b4",6324:"6412903d",6441:"83fad9bc",6586:"cfde00b8",6693:"5f200356",6733:"8763ca6e",6762:"9c7a9dcc",6825:"5e110487",7095:"733aa2e8",7098:"5564c866",7174:"6033b127",7196:"06a507a1",7241:"db7fcf99",7261:"7f98a300",7297:"c1889e93",7344:"77a2838b",7399:"359eb4c7",7408:"848c69a5",7441:"dd02e74b",7573:"b647ca73",7600:"91acce6c",7672:"17305943",7744:"5f163728",7991:"c07d7b2b",8028:"98d9c698",8132:"20a80dce",8170:"8d852eb6",8189:"a18af52e",8261:"954dd9ef",8429:"cec5f76a",8470:"2757034a",8713:"8fdd3e2d",8800:"ed3770f0",8916:"2a5c68bd",8979:"70fcefd5",9005:"8a026722",9012:"2d5c7d18",9034:"ccfb09b7",9110:"7d828a7e",9115:"12674b03",9251:"ccbd3e9e",9339:"88e38c74",9423:"c722ba55",9615:"b79eb36e",9644:"99099a50",9671:"0a4e0b7c",9704:"ba530dd5",9731:"fa582c58",9834:"8e9c4187"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="hubs:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","hubs:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();