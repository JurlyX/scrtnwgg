(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"7Qko":function(i,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("K4CH");function r(i){if(i&&i.__esModule)return i;var e=Object.create(null);return i&&Object.keys(i).forEach((function(s){if("default"!==s){var o=Object.getOwnPropertyDescriptor(i,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return i[s]}})}})),e.default=i,Object.freeze(e)}var t=r(s("q1tI")),n=["\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/","googlebot","baiduspider","gurujibot","yandexbot","slurp","msnbot","bingbot","facebookexternalhit","linkedinbot","twitterbot","slackbot","telegrambot","applebot","pingdom","tumblr"];function a(i){var e=new o.UAParser(i).getResult(),s=new RegExp("("+n.join("|")+")","ig"),r=!!i&&s.test(i.toLowerCase()),t=e.browser.name,a=e.device.type||null,l=e.os.name,d=e.engine.name,c="mobile"===a,u="tablet"===a,w="iOS"===l;return Object.freeze({browser:t,deviceType:a,os:l,engine:d,isMobile:c,isTablet:u,isIos:w,source:i,deviceVendor:e.device.vendor||null,osVersion:parseInt(e.os.version,10),browserVersion:parseFloat(e.browser.version),engineVersion:parseFloat(e.engine.version),isIphone:c&&w,isIpad:u&&w,isDesktop:!c&&!u,isChrome:"Chrome"===t,isFirefox:"Firefox"===t,isSafari:"Safari"===t,isIE:"IE"===t,isMac:"Mac OS"===l,isChromeOS:"Chromium OS"===l,isWindows:"Windows"===l,isAndroid:"Android"===l,isBot:r})}var l=function(i,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,e){i.__proto__=e}||function(i,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=e[s])})(i,e)};var d=function(){return(d=Object.assign||function(i){for(var e,s=1,o=arguments.length;s<o;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r]);return i}).apply(this,arguments)};function c(i,e,s,o){return new(s||(s=Promise))((function(r,t){function n(i){try{l(o.next(i))}catch(e){t(e)}}function a(i){try{l(o.throw(i))}catch(e){t(e)}}function l(i){var e;i.done?r(i.value):(e=i.value,e instanceof s?e:new s((function(i){i(e)}))).then(n,a)}l((o=o.apply(i,e||[])).next())}))}function u(i,e){var s,o,r,t,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return t={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function a(t){return function(a){return function(t){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,o&&(r=2&t[0]?o.return:t[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,t[1])).done)return r;switch(o=0,r&&(t=[2&t[0],r.value]),t[0]){case 0:case 1:r=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,o=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(!(r=(r=n.trys).length>0&&r[r.length-1])&&(6===t[0]||2===t[0])){n=0;continue}if(3===t[0]&&(!r||t[1]>r[0]&&t[1]<r[3])){n.label=t[1];break}if(6===t[0]&&n.label<r[1]){n.label=r[1],r=t;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(t);break}r[2]&&n.ops.pop(),n.trys.pop();continue}t=e.call(i,n)}catch(a){t=[6,a],o=0}finally{s=r=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,a])}}}e.useUserAgent=function(i){return a(i)},e.withUserAgent=function(i){var e,s=this,o=i.displayName||i.name,r=function(s){function r(){return null!==s&&s.apply(this,arguments)||this}return function(i,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=i}l(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}(r,s),r.prototype.render=function(){return e||"undefined"===typeof window||(e=a(window.navigator.userAgent)),t.createElement(i,d({ua:e},this.props))},r.displayName="withUserAgent("+o+")",r}(t.Component);return i.getInitialProps&&(r.getInitialProps=function(o){return c(s,void 0,void 0,(function(){var s,r;return u(this,(function(t){switch(t.label){case 0:return s={},r="","undefined"!==typeof o.req?r=o.req.headers["user-agent"]:"undefined"!==typeof window&&(r=window.navigator.userAgent),e=a(r),o.ua=Object.assign({},e),[4,i.getInitialProps(o)];case 1:return s=t.sent(),o.ua&&delete o.ua,[2,s]}}))}))}),r}},Ff2n:function(i,e,s){"use strict";function o(i,e){if(null==i)return{};var s,o,r=function(i,e){if(null==i)return{};var s,o,r={},t=Object.keys(i);for(o=0;o<t.length;o++)s=t[o],e.indexOf(s)>=0||(r[s]=i[s]);return r}(i,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);for(o=0;o<t.length;o++)s=t[o],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(r[s]=i[s])}return r}s.d(e,"a",(function(){return o}))},K4CH:function(i,e,s){var o;!function(r,t){"use strict";var n="function",a="undefined",l="object",d="string",c="model",u="name",w="type",b="vendor",p="version",f="architecture",m="console",h="mobile",g="tablet",v="smarttv",x="wearable",y="embedded",k={extend:function(i,e){var s={};for(var o in i)e[o]&&e[o].length%2===0?s[o]=e[o].concat(i[o]):s[o]=i[o];return s},has:function(i,e){return typeof i===d&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===d?i.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(i,e){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof e===a?i:i.substring(0,255)}},O={rgx:function(i,e){for(var s,o,r,a,d,c,u=0;u<e.length&&!d;){var w=e[u],b=e[u+1];for(s=o=0;s<w.length&&!d;)if(d=w[s++].exec(i))for(r=0;r<b.length;r++)c=d[++o],typeof(a=b[r])===l&&a.length>0?2==a.length?typeof a[1]==n?this[a[0]]=a[1].call(this,c):this[a[0]]=a[1]:3==a.length?typeof a[1]!==n||a[1].exec&&a[1].test?this[a[0]]=c?c.replace(a[1],a[2]):t:this[a[0]]=c?a[1].call(this,c,a[2]):t:4==a.length&&(this[a[0]]=c?a[3].call(this,c.replace(a[1],a[2])):t):this[a]=c||t;u+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===l&&e[s].length>0){for(var o=0;o<e[s].length;o++)if(k.has(e[s][o],i))return"?"===s?t:s}else if(k.has(e[s],i))return"?"===s?t:s;return i}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},_={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[u,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[u,p],[/opios[\/\s]+([\w\.]+)/i],[p,[u,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[p,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,p],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[p,[u,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[p,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[u,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[p,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[p,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],p],[/focus\/([\w\.]+)/i],[p,[u,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[p,[u,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[p,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[u,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[p,[u,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[p,[u,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],p],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[u,p],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[u],[/;fbav\/([\w\.]+);/i],[p,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[u,p],[/\bgsa\/([\w\.]+)\s.*safari\//i],[p,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[p,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],p],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[p,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,p],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[p,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[p,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[p,O.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,p],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],p],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[p,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[c,[b,"Samsung"],[w,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[c,[b,"Samsung"],[w,h]],[/\((ip(?:hone|od)[\s\w]*);/i],[c,[b,"Apple"],[w,h]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[b,"Apple"],[w,g]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[c,[b,"Huawei"],[w,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[c,[b,"Huawei"],[w,h]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[b,"Xiaomi"],[w,h]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[c,/_/g," "],[b,"Xiaomi"],[w,g]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[c,[b,"OPPO"],[w,h]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[c,[b,"Vivo"],[w,h]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[c,[b,"Realme"],[w,h]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[c,[b,"Motorola"],[w,h]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[b,"Motorola"],[w,g]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[c,[b,"LG"],[w,g]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[c,[b,"LG"],[w,h]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[c,[b,"Lenovo"],[w,g]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[c,/_/g," "],[b,"Nokia"],[w,h]],[/droid.+;\s(pixel\sc)[\s)]/i],[c,[b,"Google"],[w,g]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[c,[b,"Google"],[w,h]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[b,"Sony"],[w,h]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[c,"Xperia Tablet"],[b,"Sony"],[w,g]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[c,[b,"OnePlus"],[w,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[c,[b,"Amazon"],[w,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,"Fire Phone"],[b,"Amazon"],[w,h]],[/\((playbook);[\w\s\),;-]+(rim)/i],[c,b,[w,g]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[c,[b,"BlackBerry"],[w,h]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[c,[b,"ASUS"],[w,g]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[c,[b,"ASUS"],[w,h]],[/(nexus\s9)/i],[c,[b,"HTC"],[w,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[c,/_/g," "],[w,h]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[b,"Acer"],[w,g]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[c,[b,"Meizu"],[w,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,c,[w,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[b,c,[w,g]],[/\s(surface\sduo)\s/i],[c,[b,"Microsoft"],[w,g]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[c,[b,"Fairphone"],[w,h]],[/\s(u304aa)\sbuild/i],[c,[b,"AT&T"],[w,h]],[/sie-(\w*)/i],[c,[b,"Siemens"],[w,h]],[/[;\/]\s?(rct\w+)\sbuild/i],[c,[b,"RCA"],[w,g]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[c,[b,"Dell"],[w,g]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[c,[b,"Verizon"],[w,g]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[c,[b,"Barnes & Noble"],[w,g]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[c,[b,"NuVision"],[w,g]],[/;\s(k88)\sbuild/i],[c,[b,"ZTE"],[w,g]],[/;\s(nx\d{3}j)\sbuild/i],[c,[b,"ZTE"],[w,h]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[c,[b,"Swiss"],[w,h]],[/[;\/]\s?(zur\d{3})\sbuild/i],[c,[b,"Swiss"],[w,g]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[c,[b,"Zeki"],[w,g]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[b,"Dragon Touch"],c,[w,g]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[c,[b,"Insignia"],[w,g]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[c,[b,"NextBook"],[w,g]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[b,"Voice"],c,[w,h]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[b,"LvTel"],c,[w,h]],[/;\s(ph-1)\s/i],[c,[b,"Essential"],[w,h]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[c,[b,"Envizen"],[w,g]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[c,[b,"MachSpeed"],[w,g]],[/[;\/]\s?tu_(1491)\sbuild/i],[c,[b,"Rotor"],[w,g]],[/(shield[\w\s]+)\sbuild/i],[c,[b,"Nvidia"],[w,g]],[/(sprint)\s(\w+)/i],[b,c,[w,h]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[b,"Microsoft"],[w,h]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[b,"Zebra"],[w,g]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[b,"Zebra"],[w,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[b,c,[w,m]],[/droid.+;\s(shield)\sbuild/i],[c,[b,"Nvidia"],[w,m]],[/(playstation\s[345portablevi]+)/i],[c,[b,"Sony"],[w,m]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[c,[b,"Microsoft"],[w,m]],[/smart-tv.+(samsung)/i],[b,[w,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[b,"Samsung"],[w,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[b,"LG"],[w,v]],[/(apple)\s?tv/i],[b,[c,"Apple TV"],[w,v]],[/crkey/i],[[c,"Chromecast"],[b,"Google"],[w,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[c,[b,"Amazon"],[w,v]],[/\(dtv[\);].+(aquos)/i],[c,[b,"Sharp"],[w,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,k.trim],[c,k.trim],[w,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[w,v]],[/((pebble))app\/[\d\.]+\s/i],[b,c,[w,x]],[/droid.+;\s(glass)\s\d/i],[c,[b,"Google"],[w,x]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[c,[b,"Zebra"],[w,x]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[b,[w,y]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[w,h]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[w,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[w,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[b,"Generic"]],[/(phone)/i],[[w,h]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[p,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,p],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[u,[p,O.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[p,O.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[u,"Mac OS"],[p,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[u,p],[/\(bb(10);/i],[p,[u,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[p,[u,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[p,[u,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],p],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[u,p],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],p],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,p]]},E=function(i,e){if("object"===typeof i&&(e=i,i=t),!(this instanceof E))return new E(i,e).getResult();var s=i||("undefined"!==typeof r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=e?k.extend(_,e):_;return this.getBrowser=function(){var i={name:t,version:t};return O.rgx.call(i,s,o.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:t};return O.rgx.call(i,s,o.cpu),i},this.getDevice=function(){var i={vendor:t,model:t,type:t};return O.rgx.call(i,s,o.device),i},this.getEngine=function(){var i={name:t,version:t};return O.rgx.call(i,s,o.engine),i},this.getOS=function(){var i={name:t,version:t};return O.rgx.call(i,s,o.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=typeof i===d&&i.length>255?k.trim(i,255):i,this},this.setUA(s),this};E.VERSION="0.7.28",E.BROWSER={NAME:u,MAJOR:"major",VERSION:p},E.CPU={ARCHITECTURE:f},E.DEVICE={MODEL:c,VENDOR:b,TYPE:w,CONSOLE:m,MOBILE:h,SMARTTV:v,TABLET:g,WEARABLE:x,EMBEDDED:y},E.ENGINE={NAME:u,VERSION:p},E.OS={NAME:u,VERSION:p},typeof e!==a?(typeof i!==a&&i.exports&&(e=i.exports=E),e.UAParser=E):(o=function(){return E}.call(e,s,e,i))===t||(i.exports=o);var A="undefined"!==typeof r&&(r.jQuery||r.Zepto);if(A&&!A.ua){var j=new E;A.ua=j.getResult(),A.ua.get=function(){return j.getUA()},A.ua.set=function(i){j.setUA(i);var e=j.getResult();for(var s in e)A.ua[s]=e[s]}}}("object"===typeof window?window:this)},bKGj:function(i,e,s){"use strict";var o=s("nKUr"),r=s("vOnD").b.svg.withConfig({displayName:"style__SvgStyleWrapper",componentId:"sc-4wcfru-0"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.circle{stroke-dasharray:90;stroke-dashoffset:90;stroke-linecap:round;transform-origin:center;animation:animate-stroke 1.5s ease infinite,rotation 1.5s linear infinite;}.circle-2{transform:rotate(-20deg);animation:animate-stroke 1.5s ease-in infinite,rotation2 1.5s linear infinite;}.circle-3{transform:rotate(-60deg);animation:animate-stroke 1.5s ease-in infinite,rotation3 1.5s linear infinite;}@keyframes animate-stroke{50%{stroke-dashoffset:0;}100%{stroke-dashoffset:-90;}}@keyframes rotation{0%{}100%{transform:rotate(360deg);}}@keyframes rotation2{0%{}100%{transform:rotate(340deg);}}@keyframes rotation3{0%{}100%{transform:rotate(300deg);}}"]);e.a=function(){return Object(o.jsxs)(r,{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",className:"img-loader",children:[Object(o.jsx)("style",{type:"text/css"}),Object(o.jsx)("circle",{className:"circle circle-3",cx:"24",cy:"24",r:"20",stroke:"#B3D661",strokeWidth:"8"}),Object(o.jsx)("circle",{className:"circle circle-2",cx:"24",cy:"24",r:"20",stroke:"#51A5C9",strokeWidth:"8"}),Object(o.jsx)("circle",{className:"circle circle-1",cx:"24",cy:"24",r:"20",stroke:"#FF42A5",strokeWidth:"8"})]})}}}]);