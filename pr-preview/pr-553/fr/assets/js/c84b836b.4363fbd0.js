"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1615],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3117),r=a(7294),l=a(4334),o=a(2389),i=a(7392),s=a(7094),c=a(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:f,groupId:b,className:m}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:O}=(0,s.U)(),[w,E]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==w&&(P(t),E(n),null!=b&&O(b,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:N},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},464:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.2","node-latest-sha":"eea18a72891af318fb26abb7264416b679ec2a16"});t.Z=a},8842:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.2","node-latest-sha":"eea18a72891af318fb26abb7264416b679ec2a16"});t.Z=a},8549:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"});t.Z=a},4475:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return b}});var n=a(3117),r=(a(7294),a(3905)),l=a(8549),o=a(464),i=a(8842),s=a(5488),c=a(5162);const u={sidebar_label:"Installing celestia-app"},p="celestia-app",d={unversionedId:"nodes/celestia-app",id:"nodes/celestia-app",title:"celestia-app",description:"This tutorial will guide you through building celestia-app. This",source:"@site/docs/nodes/celestia-app.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-app",permalink:"/pr-preview/pr-553/fr/nodes/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing celestia-app"},sidebar:"nodes",previous:{title:"Docker images",permalink:"/pr-preview/pr-553/fr/nodes/docker-images"},next:{title:"Deciding which node to run",permalink:"/pr-preview/pr-553/fr/nodes/decide-node"}},f={},b=[{value:"Install celestia-app",id:"install-celestia-app",level:2}],m={toc:b};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-app"},"celestia-app"),(0,r.kt)("p",null,"This tutorial will guide you through building celestia-app. This\ntutorial presumes you completed the steps in setting up your\nown environment ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-553/fr/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"install-celestia-app"},"Install celestia-app"),(0,r.kt)("p",null,"The steps below will create a binary file named ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node.\nBe sure to select the correct network to install the binary for."),(0,r.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",i.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null)))),(0,r.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",l.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null)))),(0,r.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",o.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null))))),(0,r.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,r.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia-app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')))}g.isMDXComponent=!0}}]);