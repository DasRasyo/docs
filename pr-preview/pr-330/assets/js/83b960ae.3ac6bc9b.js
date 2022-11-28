"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5606],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2719:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});var n=r(3117),o=(r(7294),r(3905));const l={sidebar_label:"Wordle Overview"},i="Wordle App on Rollmint",a={unversionedId:"developers/wordle",id:"developers/wordle",title:"Wordle App on Rollmint",description:"mamaki-testnet",source:"@site/docs/developers/wordle.md",sourceDirName:"developers",slug:"/developers/wordle",permalink:"/pr-preview/pr-330/developers/wordle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle.md",tags:[],version:"current",frontMatter:{sidebar_label:"Wordle Overview"},sidebar:"developers",previous:{title:"Wordle",permalink:"/pr-preview/pr-330/category/wordle"},next:{title:"Scaffolding The Chain",permalink:"/pr-preview/pr-330/developers/scaffold-wordle"}},s={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Design Implementation",id:"design-implementation",level:2},{value:"Table of Contents For This Tutorial",id:"table-of-contents-for-this-tutorial",level:2}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wordle-app-on-rollmint"},"Wordle App on Rollmint"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mamaki-testnet",src:r(5867).Z,width:"513",height:"682"})),(0,o.kt)("p",null,"This tutorial guide will go over building a cosmos-sdk app\nfor Rollmint, the Sovereign-Rollup implementation of\nTendermint, for the popular game ",(0,o.kt)("a",{parentName:"p",href:"https://www.nytimes.com/games/wordle/index.html"},"Wordle"),"."),(0,o.kt)("p",null,"This tutorial will go over how to setup Rollmint\nin the Ignite CLI and use it to build the game.\nThe tutorial will go over the simple design,\nas well as conclude with future implementations and ideas\nto extend this codebase."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'NOTE: This tutorial will explore developing with Rollmint,\nwhich is still in Alpha stage. If you run into bugs, please\nwrite a Github Issue ticket or let us know in our Discord.\nFurthermore, while Rollmint allows you to build sovereign\nrollups on Celestia, it currently does not support fraud\nproofs yet and is therefore running in "pessimistic" mode,\nwhere nodes would need to re-execute the transactions to check\nthe validity of the chain (i.e. a full node). Furthermore,\nRollmint currently only supports a single sequencer.')),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"Given this tutorial is targeted for developers who are experienced\nin Cosmos-SDK, we recommend you go over the following tutorials\nin Ignite to understand all the different components in Cosmos-SDK before\nproceeding with this tutorial."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ignite.com/guide/hello"},"Hello, World")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ignite.com/guide/blog"},"Blog and Module Basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ignite.com/guide/nameservice"},"Nameservice Tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.ignite.com/guide/scavenge"},"Scavenger Hunt"))),(0,o.kt)("p",null,"You do not have to do those guides in order to follow this Wordle tutorial,\nbut doing so helps you understand the architecture of Cosmos-SDK better."),(0,o.kt)("h2",{id:"design-implementation"},"Design Implementation"),(0,o.kt)("p",null,"The rules of Wordle are simple: You have to guess the word of the day."),(0,o.kt)("p",null,"Key Points to Consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The word is a five-letter word."),(0,o.kt)("li",{parentName:"ul"},"You have 6 guesses."),(0,o.kt)("li",{parentName:"ul"},"Every 24 hours, there\u2019s a new word.")),(0,o.kt)("p",null,"The GUI for Wordle shows you a few indicators: a\ngreen highlight on a letter in a certain position\nmeans that\u2019s the correct letter for the Wordle\nin the right position. A yellow highlight means\nit\u2019s a correct letter for the Wordle included in\nthe wrong position. A grey highlight means the letter\nisn\u2019t part of the Wordle."),(0,o.kt)("p",null,"For simplicity of the design, we will avoid those\nhints, although there are ways to extend this codebase\nto implement that, which we will show at the end."),(0,o.kt)("p",null,"In this current design, we implement the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 Wordle can be submitted per day"),(0,o.kt)("li",{parentName:"ul"},"Every address will have 6 tries to guess the word"),(0,o.kt)("li",{parentName:"ul"},"It must be a five-letter word.  "),(0,o.kt)("li",{parentName:"ul"},"Whoever guesses the word correctly before their\n6 tries are over gets an award of 100 WORDLE tokens.")),(0,o.kt)("p",null,"We will go over the architecture to achieve this further\nin the guide. But for now, we will get started setting up\nour development environment."),(0,o.kt)("h2",{id:"table-of-contents-for-this-tutorial"},"Table of Contents For This Tutorial"),(0,o.kt)("p",null,"The following tutorial is broken down into the following\nsections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/scaffold-wordle"},"Ignite and Chain Scaffolding")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/install-rollmint"},"Installing Rollmint")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/wordle-module"},"Modules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/wordle-messages"},"Messages")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/wordle-types"},"Types")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/wordle-keeper"},"Keepers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-330/developers/run-wordle"},"Running Wordle"))))}d.isMDXComponent=!0},5867:function(e,t,r){t.Z=r.p+"assets/images/wordle-16b8ade596cb0209e0b4eed7fc8cec3f.jpg"}}]);