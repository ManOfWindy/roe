(function(t){if(window.layui&&layui.define){layui.define("videojs",function(e){var n=layui.videojs;e("videojsbrand",t(n))})}else if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=t()}else if(typeof define==="function"&&define.amd){define([],t)}else{var e;if(typeof window!=="undefined"){e=window}else if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{e=this}e.videojsBrand=t()}})(function(f){layui.link(layui.cache.base+"lib/extend/video/plus/css/videojs-brand.css");var e,n,t;return function r(a,d,l){function f(t,e){if(!d[t]){if(!a[t]){var n=typeof require=="function"&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var o=d[t]={exports:{}};a[t][0].call(o.exports,function(e){var n=a[t][1][e];return f(n?n:e)},o,o.exports,r,a,d,l)}return d[t].exports}var u=typeof require=="function"&&require;for(var e=0;e<l.length;e++)f(l[e]);return f}({1:[function(e,d,l){(function(e){"use strict";Object.defineProperty(l,"__esModule",{value:true});function n(e){return e&&e.__esModule?e:{default:e}}var t=typeof window!=="undefined"?window["videojs"]:typeof e!=="undefined"?e["videojs"]:null;var i=n(t);var a={image:"/logo-example.png",title:"Logo Title",destination:"http://www.google.com",destinationTarget:"_blank"};var o=function e(n,t){var i=document.createElement("div");i.className="vjs-brand-container";var o=document.createElement("a");o.className="vjs-brand-container-link";o.setAttribute("href",t.destination||a.destination);o.setAttribute("title",t.title||a.title);o.setAttribute("target",t.destinationTarget||a.destinationTarget);var r=document.createElement("img");r.src=t.image||a.image;o.appendChild(r);i.appendChild(o);n.controlBar.el().insertBefore(i,n.controlBar.fullscreenToggle.el());n.addClass("vjs-brand")};var r=function e(n){var t=this;this.ready(function(){o(t,f.mergeOptions(a,n))})};f.plugin("brand",r);r.VERSION="0.0.4";l["default"]=r;d.exports=l["default"]}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1])(1)});