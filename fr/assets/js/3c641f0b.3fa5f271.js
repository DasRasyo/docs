"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3274],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=a(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5516:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return a}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:"Node Metrics"},s="M\xe9triques de Celestia Node",u={unversionedId:"developers/celestia-node-metrics",id:"developers/celestia-node-metrics",title:"M\xe9triques de Celestia Node",description:"Ce tutoriel est pour ex\xe9cuter des m\xe9triques pour votre instance de disponibilit\xe9 des donn\xe9es de votre node Celestia.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/celestia-node-metrics.md",sourceDirName:"developers",slug:"/developers/celestia-node-metrics",permalink:"/fr/developers/celestia-node-metrics",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-metrics.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node Metrics"},sidebar:"developers",previous:{title:"Node Video Tutorial",permalink:"/fr/developers/light-node-video"},next:{title:"Node API",permalink:"/fr/developers/node-api"}},l={},a=[{value:"Executer les drapeaux des m\xe9triques",id:"executer-les-drapeaux-des-m\xe9triques",level:2},{value:"R\xe9flexions sur la conception du terminal des m\xe9triques",id:"r\xe9flexions-sur-la-conception-du-terminal-des-m\xe9triques",level:2}],c={toc:a};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"m\xe9triques-de-celestia-node"},"M\xe9triques de Celestia Node"),(0,o.kt)("p",null,"Ce tutoriel est pour ex\xe9cuter des m\xe9triques pour votre instance de disponibilit\xe9 des donn\xe9es de votre node Celestia."),(0,o.kt)("p",null,"Ce tutoriel se concentrera sur l'ex\xe9cution de m\xe9triques pour un light node."),(0,o.kt)("p",null,"This tutorial assumes you have already setup your light node by following the tutorial in the ",(0,o.kt)("a",{parentName:"p",href:"/fr/developers/node-tutorial"},"Node API tutorial"),"."),(0,o.kt)("h2",{id:"executer-les-drapeaux-des-m\xe9triques"},"Executer les drapeaux des m\xe9triques"),(0,o.kt)("p",null,"Vous pouvez activer les drapeaux des m\xe9triques de Celestia-node avec la commande suivante :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port> --metrics --metrics.endpoint <ip-address:port>\n")),(0,o.kt)("p",null,"Notez que les drapeaux ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics")," activent les m\xe9triques et attendent une entr\xe9e au niveau de ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics.endpoint"),"."),(0,o.kt)("p",null,"Nous allons passer en revue ce que le terminal devra \xeatre dans la prochaine section."),(0,o.kt)("h2",{id:"r\xe9flexions-sur-la-conception-du-terminal-des-m\xe9triques"},"R\xe9flexions sur la conception du terminal des m\xe9triques"),(0,o.kt)("p",null,"Pour le moment, l'architecture des m\xe9triques au sein du node Celestia fonctionne comme sp\xe9cifi\xe9 dans l'",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-010-incentivized-testnet-monitoring.md"},"ADR")," suivant."),(0,o.kt)("p",null,"En substance, les r\xe9flexions sur la conception vont ici n\xe9cessiter d'ex\xe9cuter un collecteur OpenTelemetry (OTEL) qui se connecte au light node Celestia."),(0,o.kt)("p",null,"Pour une pr\xe9sentation d'OTEL, consultez le guide ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/"},"ici"),"."),(0,o.kt)("p",null,"L'ADR et la document de l'OTEL vous aideront \xe0 ex\xe9cuter votre collecteur sur le terminal des m\xe9triques. Cela vous permettra alors de traiter les donn\xe9es du collecteur sur un serveur Prometheus qui peut \xeatre consult\xe9 sur un tableau de bord Grafana."),(0,o.kt)("p",null,"Dans le futur, nous souhaitons des outils de d\xe9veloppement en acc\xe8s libre autour de cette infrastructure pour permettre aux op\xe9rateurs de nodes d'\xeatre en capacit\xe9 de surveiller leurs nodes de disponibilit\xe9 des donn\xe9es."))}d.isMDXComponent=!0}}]);