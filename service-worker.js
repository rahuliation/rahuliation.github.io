"use strict";var precacheConfig=[["/index.html","999798f02d2744a8ddcb2faed6f4f9cd"],["/static/css/main.d25a38f1.css","b049be06f8536f2c1ed1e23d254423c7"],["/static/js/main.3cdf552c.js","acd7f30833405c574c60b8c1ac1031af"],["/static/media/Gotham-Black.e29998d8.woff","e29998d86afd3d3d0dfc1198290ef8c3"],["/static/media/Gotham-Bold.b51ec430.woff","b51ec430e735ebae2eddaa4f03675d56"],["/static/media/Gotham-BookItalic.cec78cc5.woff","cec78cc5a1d901e4874e3d9feebb7646"],["/static/media/Gotham-Light.dcb8a07c.woff","dcb8a07cf3cbc95e4fc326dda7bf4329"],["/static/media/Gotham-Thin.cae9f840.woff","cae9f840575e702faf5229839f268f9e"],["/static/media/Gotham-ThinItalic.9633c274.woff","9633c2743683e1725e07925834204905"],["/static/media/Gotham-UltraItalic.a5048d94.woff","a5048d9425015d68823a9879e49a1681"],["/static/media/Gotham-XLight.c614fbad.woff","c614fbadff73fc2f0825661e872a94be"],["/static/media/Gotham-XLightItalic.a2a0f267.woff","a2a0f26729aefc3a01b6fde552fe6c5e"],["/static/media/GothamBold.39b1c119.woff","39b1c119caf33ce82b61e6b5f6a6c53e"],["/static/media/GothamBoldItalic.4091bfea.woff","4091bfea289f4d7a9feb495860909170"],["/static/media/GothamBook.41eebc60.woff","41eebc608a217814063e8b16a285beb7"],["/static/media/GothamBookItalic.50aed062.woff","50aed062699526d3b2fc25f9bdac3529"],["/static/media/GothamLight.f0de7009.woff","f0de7009e4f5750463854369de46427b"],["/static/media/GothamLightItalic.7f5118ac.woff","7f5118ac8a719c29c554c5d9638b1cec"],["/static/media/GothamMedium.ba7ee4ff.woff","ba7ee4ffcdcd65f753a35cd804ac1514"],["/static/media/GothamMediumItalic.3718793a.woff","3718793abbcecd542fb00b77f5027d33"],["/static/media/GothamMedium_1.ba7ee4ff.woff","ba7ee4ffcdcd65f753a35cd804ac1514"],["/static/media/devicon.0f964a72.woff","0f964a72f8fbdf9c8d4e0122b8effb40"],["/static/media/devicon.29f80b00.ttf","29f80b00a7b4641183f96f08be374697"],["/static/media/devicon.681fa39a.eot","681fa39a79c22f0035a0720e2b2bda3b"],["/static/media/devicon.74e6e6c3.svg","74e6e6c3dcfca56767adabe83a510f2e"],["/static/media/unicons.3784cfb8.eot","3784cfb8c04da1ada02fe097669b5938"],["/static/media/unicons.80985b4f.ttf","80985b4fc088ff15f21b958b36499515"],["/static/media/unicons.97a19766.woff2","97a1976675c3bf28c2665812f39a4fd9"],["/static/media/unicons.d6933f98.woff","d6933f98004d884499efc048591b9ef5"],["/static/media/unicons.f662f67f.svg","f662f67f2447591050ede20b359cd044"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});