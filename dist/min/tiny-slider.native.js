var tinySlider=function(){"use strict";function t(t){function f(){Et.className="tiny-slider",gn.wrap(gt,Et),pt=Et.clientWidth}function y(){bt=un(),vt=Kt-bt-Lt,ct=fn(),ft=vn(),Rt=Ft||"page"===t.slideBy?bt:t.slideBy}function b(){var t=Ct&&Tt?D():Tt?Tt+Mt:0;gt.classList.add("tiny-content",mt,yt),gt.style.cssText+="width: "+(ct+1)*Kt+"px; margin-left: "+t+"px; "+h+": translate3d("+-$t*ct+"px, 0px, 0px);"}function g(){navigator.msMaxTouchPoints&&(Et.classList.add("ms-touch"),Et.addEventListener("scroll",nt,!1))}function E(){""===gt.id?gt.id=dt=n():dt=gt.id;for(var t=0;t<wt;t++)xt[t].id=dt+"item"+t}function x(){if(qt||Tt){for(var t=document.createDocumentFragment(),n=document.createDocumentFragment(),e=Vt;e--;){var i=e%wt,a=xt[i].cloneNode(!0),r=xt[wt-1-i].cloneNode(!0);d(a,"id"),d(r,"id"),t.insertBefore(a,t.firstChild),n.appendChild(r)}gt.appendChild(t),gt.insertBefore(n,gt.firstChild),xt=gt.children}o(xt,{style:"width: "+(ct-Mt)+"px; margin-right: "+Mt+"px","aria-hidden":"true"})}function w(){St&&(t.controlsContainer||(gn.append(Et,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+dt+'" type="button">'+At[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+dt+'" type="button">'+At[1]+"</button></div>"),Nt=Et.querySelector(".tiny-controls")),st=Nt.querySelector('[data-controls="prev"]'),lt=Nt.querySelector('[data-controls="next"]'),a(Nt,"tabindex")||(o(Nt,{"aria-label":"Carousel Navigation"}),o(Nt.children,{"aria-controls":dt,tabindex:"-1"})))}function M(){if(Pt){if(!t.navContainer){for(var n="",e=0;e<wt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+dt+"item"+e+'" type="button"></button>';It&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Ht[0]+"</button>"),n='<div class="tiny-nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(Et,n),kt=Et.querySelector(".tiny-nav")}if(ut=kt.querySelectorAll("[data-slide]"),!a(kt,"aria-label")){o(kt,{"aria-label":"Carousel Pagination"});for(var i=0;i<wt;i++)o(ut[i],{tabindex:"-1","aria-selected":"false","aria-controls":dt+"item"+i})}for(var r=ft;r<wt;r++)o(ut[r],{hidden:""});Yt=ft}}function T(){It&&(kt||(gn.append(Et,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Ht[0]+"</button></div>"),kt=Et.querySelector(".tiny-nav")),en=kt.querySelector("[data-action]"),K())}function L(){for(var t=$t;t<$t+bt;t++)o(xt[t],{"aria-hidden":"false"});St&&(o(lt,{tabindex:"0"}),($t===Lt&&!qt||zt)&&(st.disabled=!0)),Pt&&o(ut[0],{tabindex:"0","aria-selected":"true"})}function C(){if(p&&gt.addEventListener(p,F,!1),Xt&&(gt.addEventListener("touchstart",et,!1),gt.addEventListener("touchmove",it,!1),gt.addEventListener("touchend",at,!1),gt.addEventListener("touchcancel",at,!1)),Pt)for(var t=0;t<wt;t++)ut[t].addEventListener("click",V,!1),ut[t].addEventListener("keydown",tt,!1);if(St&&(st.addEventListener("click",U,!1),lt.addEventListener("click",X,!1),st.addEventListener("keydown",_,!1),lt.addEventListener("keydown",_,!1)),It&&(en.addEventListener("click",J,!1),St&&(st.addEventListener("click",Q,!1),lt.addEventListener("click",Q,!1)),Pt))for(var n=0;n<wt;n++)ut[n].addEventListener("click",Q,!1);Dt&&document.addEventListener("keydown",Z,!1),window.addEventListener("resize",rt,!1),window.addEventListener("scroll",ot,!1)}function S(){if(Ut&&gn.isInViewport(gt)){for(var t=[],n=$t-1;n<$t+bt+1;n++){for(var e=xt[n].querySelectorAll(".tiny-lazy"),i=e.length;i--;t.unshift(e[i]));t.unshift()}for(var a=t.length;a--;){var o=t[a];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function A(){if(Gt){for(var t=[],n=$t-1;n<$t+bt;n++)for(var e=xt[n].querySelectorAll("img"),i=e.length;i--;)t.push(e[i]);0===t.length?W():N(t)}}function N(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?W():setTimeout(function(){N(t)},16)}function P(){f(),y(),b(),g(),E(),x(),w(),M(),T(),L(),C(),k(),S(),A()}function k(){wt<=bt?(Pt=St=It=qt=zt=!1,$t=Vt,kt&&s(kt),Nt&&s(Nt),en&&s(en)):(Pt=t.nav,St=t.controls,It=t.autoplay,qt=!t.rewind&&t.loop,zt=t.rewind,Pt&&l(kt),St&&l(Nt),It&&l(en))}function D(){return(pt-ct*Math.floor(pt/ct)+Mt)/2}function W(){for(var t,n=[],e=$t-Lt;e<$t+bt;e++)n.push(xt[e].offsetHeight);t=Math.max.apply(null,n),pn(1),gt.style.height=t+"px"}function I(){Et.style.msScrollSnapPointsX="snapInterval(0%, "+ct+")"}function O(){var t,n,e,i;$t!==_t&&($t>_t?(t=_t,n=Math.min(_t+bt,$t),e=Math.max(_t+bt,$t),i=$t+bt):(t=Math.max($t+bt,_t),n=_t+bt,e=$t,i=Math.min($t+bt,_t))),_t=$t,Rt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),i=Math.round(i));for(var a=t;a<n;a++)o(xt[a],{"aria-hidden":"true"});for(var r=e;r<i;r++)o(xt[r],{"aria-hidden":"false"})}function B(){if(ft!==Yt)if(ft>Yt)for(var t=Yt;t<ft;t++)d(ut[t],"hidden");else for(var n=ft;n<Yt;n++)o(ut[n],{hidden:""});Yt=ft}function H(){if(Pt){if(Jt===-1){var n=$t<Vt?$t+wt:($t-Vt)%wt;t.navContainer?Qt=n:(Qt=Math.floor(n/bt),qt||wt%bt===0||$t!==vt||(Qt+=1))}else Qt=Jt,Jt=-1;Qt!==Zt&&(o(ut[Zt],{tabindex:"-1","aria-selected":"false"}),o(ut[Qt],{tabindex:"0","aria-selected":"true"}),Zt=Qt)}}function z(){if(St&&!qt)if($t===Lt||!zt&&$t===vt){var t=$t===Lt?st:lt,n=$t===Lt?lt:st;$(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else st.disabled=!1,lt.disabled=!1}function q(t,n){v&&pn(t),mn(n)}function G(){var t=Rt+Lt,n=Kt-bt-Rt-1;($t<t||$t>n)&&($t-wt>=t&&$t-wt<=n?$t-=wt:$t+=wt,q(0))}function j(t){o(gt,{"aria-busy":"true"}),q(t),p||F()}function F(t){p&&"height"===t.propertyName||(qt&&G(),O(),H(),z(),S(),A(),d(gt,"aria-busy"))}function R(t){if("true"!==r(gt,"aria-busy")){var n=$t+t*Rt,e=Math.abs(t*Rt);$t=qt?n:Math.max(Lt,Math.min(n,vt)),j(e)}}function U(){R(-1)}function X(){R(zt&&$t===wt-bt?(bt-wt)/Rt:1)}function V(n){if("true"!==r(gt,"aria-busy")){for(var e,i,a=n.target||n.srcElement;gn.indexOf(ut,a)===-1;)a=a.parentNode;e=Jt=Number(r(a,"data-slide")),$t=t.navContainer?e+Vt:e*bt+Vt,$t=qt?$t:Math.min($t,vt),i=Math.abs($t-_t),j(i)}}function K(){nn=setInterval(function(){R(Bt)},Ot),en.setAttribute("data-action","stop"),en.innerHTML="<span hidden>Stop Animation</span>"+Ht[1],an=!0}function Y(){clearInterval(nn),en.setAttribute("data-action","start"),en.innerHTML="<span hidden>Stop Animation</span>"+Ht[0],an=!1}function J(){an?Y():K()}function Q(){an&&Y()}function Z(t){t=t||window.event,t.keyCode===m.LEFT?R(-1):t.keyCode===m.RIGHT&&R(zt&&$t===wt-bt?(bt-wt)/Rt:1)}function $(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function _(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case m.LEFT:case m.UP:case m.HOME:case m.PAGEUP:e!==st&&st.disabled!==!0&&$(e,st);break;case m.RIGHT:case m.DOWN:case m.END:case m.PAGEDOWN:e!==lt&&lt.disabled!==!0&&$(e,lt);break;case m.ENTER:case m.SPACE:e===lt?X():U()}}function tt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,i=r(e,"data-slide");switch(n){case m.LEFT:case m.PAGEUP:i>0&&$(e,e.previousElementSibling);break;case m.UP:case m.HOME:0!==i&&$(e,ut[0]);break;case m.RIGHT:case m.PAGEDOWN:i<ft-1&&$(e,e.nextElementSibling);break;case m.DOWN:case m.END:i<ft-1&&$(e,ut[ft-1]);break;case m.ENTER:case m.SPACE:V(t)}}function nt(){q(0,gt.scrollLeft())}function et(t){var n=t.changedTouches[0];sn=parseInt(n.clientX),ln=parseInt(n.clientY),rn=Number(gt.style[h].slice(12,-13))}function it(t){var n=t.changedTouches[0];on=parseInt(n.clientX)-sn,dn=parseInt(n.clientY)-ln,"horizontal"===i(e(dn,on),15)&&(cn=!0,t.preventDefault(),q(0,rn+on))}function at(t){var n=t.changedTouches[0];if(on=parseInt(n.clientX)-sn,cn&&0!==on){cn=!1,t.preventDefault();var e=-(rn+on)/ct;e=on>0?Math.floor(e):Math.ceil(e),$t=Math.max(Lt,Math.min(e,vt));var i=-$t*ct;qt||Tt||!Ct||(i=Math.max(-(ct*wt-pt),i)),q(1,i),p||F()}}function rt(){clearTimeout(ht),ht=setTimeout(function(){Et.clientWidth!==pt&&(pt=Et.clientWidth,y(),k(),hn(),B(),navigator.msMaxTouchPoints&&I(),q(0),p||F())},100)}function ot(){tn||window.requestAnimationFrame(function(){S(),tn=!1}),tn=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",direction:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var dt,ct,st,lt,ut,ft,vt,ht,pt,mt=t.mode,yt=t.direction,bt=t.items,gt=t.container,Et=document.createElement("div"),xt=gt.children,wt=xt.length,Mt=t.gutter,Tt=t.edgePadding,Lt=Tt?1:0,Ct=t.fixedWidth,St=t.controls,At=t.controlsText,Nt=!!t.controlsContainer&&t.controlsContainer,Pt=t.nav,kt=!!t.navContainer&&t.navContainer,Dt=t.arrowKeys,Wt=v?t.speed:0,It=t.autoplay,Ot=t.autoplayTimeout,Bt="forward"===t.autoplayDirection?1:-1,Ht=t.autoplayText,zt=t.rewind,qt=!t.rewind&&t.loop,Gt=t.autoHeight,jt=!Ct&&t.responsive,Ft=t.slideByPage,Rt=Ft||"page"===t.slideBy?bt:t.slideBy,Ut=t.lazyload,Xt=t.touch,Vt=qt?Math.ceil(1.5*wt):Tt?1:0,Kt=wt+2*Vt,Yt=wt,Jt=-1,Qt=0,Zt=0,$t=Vt,_t=$t,tn=!1;if(It)var nn,en,an=!1;if(Xt)var rn,on,dn,cn,sn=0,ln=0;var un=function(){return Ct?function(){return Math.max(1,Math.min(wt,Math.floor(pt/Ct)))}:function(){var n=t.items,e=document.documentElement.clientWidth,i="object"==typeof jt&&Object.keys(jt);if(i)for(var a=0;a<i.length;a++)e>=i[a]&&(n=jt[i[a]]);return Math.max(1,Math.min(wt,n))}}(),fn=function(){return Ct?function(){return Ct+Mt}:navigator.appVersion.indexOf("MSIE 8")>0?Tt?function(){return Math.round((pt-Mt-2*Tt)/bt)}:function(){return Math.round((pt+Mt)/bt)}:Tt?function(){return(pt-Mt-2*Tt)/bt}:function(){return(pt+Mt)/bt}}(),vn=function(){return t.navContainer?function(){return wt}:function(){return Math.ceil(wt/bt)}}(),hn=function(){return Ct?Tt?function(){gt.style.marginLeft=D()+"px"}:void 0:function(){gt.style.width=(ct+1)*Kt+"px";for(var t=Kt;t--;)xt[t].style.width=ct-Mt+"px"}}(),pn=function(){return v?function(t){gt.style[v]=Wt*t/1e3+"s"}:function(){}}(),mn=function(){return h?function(t){var n=t||-ct*$t;gt.style[h]="translate3d("+n+"px, 0, 0)"}:function(t){var n=t||-ct*$t;gt.style.left=n+"px"}}();return{init:P,destory:function(){if(gn.unwrap(Et),Et=null,gt.classList.remove("tiny-content",mt,yt),d(gt,["id","style"]),qt)for(var n=Vt;n--;)xt[0].remove(),xt[xt.length-1].remove();d(xt,["id","style","aria-hidden"]),dt=wt=null,St&&(t.controlsContainer?(d(Nt,["aria-label"]),d(Nt.children,["aria-controls","tabindex"]),c(Nt)):(Nt.remove(),Nt=st=lt=null)),Pt&&(t.navContainer?(d(kt,["aria-label"]),d(ut,["aria-selected","aria-controls","tabindex"]),c(kt)):(kt.remove(),kt=null),ut=null),It&&(t.navContainer||null===kt?c(en):(kt.remove(),kt=null)),c(gt),Dt&&document.removeEventListener("keydown",Z,!1),window.removeEventListener("resize",rt,!1),window.removeEventListener("scroll",ot,!1)},hasAttr:a,getAttr:r,setAttrs:o,removeAttrs:d,removeEvents:c,getSlideId:n,toDegree:e,getPanDirection:i,hideElement:s,showElement:l,mode:mt,direction:yt,gutter:Mt,edgePadding:Tt,fixedWidth:Ct,controls:St,nav:Pt,rewind:zt,loop:qt,autoHeight:Gt,slideBy:Rt,lazyload:Ut,touch:Xt,speed:Wt,items:un(),cloneCount:Vt,navCountVisible:function(){return ft},index:function(){return $t},slideWidth:function(){return ct},slideContainer:gt,slideItems:xt,slideCount:wt,controlsContainer:function(){return Nt},prevButton:function(){return st},nextButton:function(){return lt},navContainer:function(){return kt},allNavs:function(){return ut}}}function n(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function i(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function a(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var i in n)t[e].setAttribute(i,n[i])}function d(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,i=t.length;i--;)for(var a=e;a--;)t[i].removeAttribute(n[a])}function c(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function s(t){a(t,"hidden")||o(t,{hidden:""})}function l(t){a(t,"hidden")&&d(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(){var t,n=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==n.style[t])return e[t];return!1}var v=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),h=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),p=f(),m={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
