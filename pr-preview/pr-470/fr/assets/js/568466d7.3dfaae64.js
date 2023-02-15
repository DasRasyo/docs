"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(3117),a=n(7294),l=n(4334),o=n(2466),i=n(6775),s=n(1980),p=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function k(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=c(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,p]=m({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=s??d;return k({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=n(2389),g="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==i&&(d(t),s(r))},k=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:c},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_label:"Wallet with Celestia Node"},s="Create A Wallet with Celestia Node",p={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create A Wallet with Celestia Node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.mdx",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-470/fr/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with Celestia Node"},sidebar:"developers",previous:{title:"Wallet With Celestia App",permalink:"/pr-preview/pr-470/fr/developers/celestia-app-wallet"},next:{title:"Data Availability API",permalink:"/pr-preview/pr-470/fr/category/data-availability-api"}},u={},d=[{value:"Using the <code>cel-key</code> utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:3},{value:"Steps for generating node keys",id:"steps-for-generating-node-keys",level:3},{value:"Steps for exporting node keys",id:"steps-for-exporting-node-keys",level:3},{value:"Steps for importing node keys",id:"steps-for-importing-node-keys",level:3},{value:"View all options for <code>cel-key</code>",id:"view-all-options-for-cel-key",level:3}],c={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create A Wallet with Celestia Node"),(0,a.kt)("p",null,"This tutorial will go over using the ",(0,a.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on Celestia Node."),(0,a.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-470/fr/nodes/environment"},"Setting Up Your Environment"))),(0,a.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,a.kt)("h2",{id:"using-the-cel-key-utility"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h2"},"cel-key")," utility"),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository is a utility called ",(0,a.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,a.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You need to first pull down the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,a.kt)("p",null,"It can be built using either of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,a.kt)("p",null,"For the purpose of this guide, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,a.kt)("h3",{id:"steps-for-generating-node-keys"},"Steps for generating node keys"),(0,a.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,a.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,a.kt)("p",null,"This will load the key ",(0,a.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the bridge node.")),(0,a.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,a.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type full --p2p.network <network>\n")),(0,a.kt)("p",null,"This will load the key ",(0,a.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the full node.")),(0,a.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,a.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")),(0,a.kt)("p",null,"This will load the key ",(0,a.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the light node."))),(0,a.kt)("p",null,"Further flags you can use to customize your key are the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--node.store"),": Specifies a different directory you can use to\nsave your node data and configurations. Expects a path to a directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--p2p.network"),": Specifies which network you want the key for. Values\nare ",(0,a.kt)("inlineCode",{parentName:"li"},"arabica")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"mocha"),". Please note the default network will be ",(0,a.kt)("inlineCode",{parentName:"li"},"mocha"),".")),(0,a.kt)("p",null,"Keep in mind that your Celestia Node will only pick up keys that\nare inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"node.store")," directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"/keys")," so you should make\nsure to point ",(0,a.kt)("inlineCode",{parentName:"p"},"cel-key")," utility to the correct directory via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"node.store")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p.network")," flags if you have specified a custom\ndirectory or network other than Mocha."),(0,a.kt)("p",null,"Also keep in mind that if you do not specify a network with ",(0,a.kt)("inlineCode",{parentName:"p"},"--p2p.network"),",\nthe default one will always be ",(0,a.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,a.kt)("h3",{id:"steps-for-exporting-node-keys"},"Steps for exporting node keys"),(0,a.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,a.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,a.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,a.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,a.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,a.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,a.kt)("h3",{id:"steps-for-importing-node-keys"},"Steps for importing node keys"),(0,a.kt)(l.Z,{groupId:"node-type",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,a.kt)("p",null,"Importing from a mnemonic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,a.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,a.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,a.kt)("p",null,"Importing from a mnemonic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type full --p2p.network <network>\n")),(0,a.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,a.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,a.kt)("p",null,"Importing from a mnemonic:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type light --p2p.network <network>\n")),(0,a.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"view-all-options-for-cel-key"},"View all options for ",(0,a.kt)("inlineCode",{parentName:"h3"},"cel-key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./cel-key --help\nKeyring management commands. These keys may be in any format supported by the\nTendermint crypto library and can be used by light-clients, full nodes, or any other application\nthat needs to sign with a private key.\n\nThe keyring supports the following backends:\n\n    os          Uses the operating system\'s default credentials store.\n    file        Uses encrypted file-based keystore within the app\'s configuration directory.\n                This keyring will request a password each time it is accessed, which may occur\n                multiple times in a single command resulting in repeated password prompts.\n    kwallet     Uses KDE Wallet Manager as a credentials management application.\n    pass        Uses the pass command line utility to store and retrieve keys.\n    test        Stores keys insecurely to disk. It does not prompt for a password to be unlocked\n                and it should be used only for testing purposes.\n\nkwallet and pass backends depend on external tools. Refer to their respective documentation for more\ninformation:\n    KWallet     https://github.com/KDE/kwallet\n    pass        https://www.passwordstore.org/\n\nThe pass backend requires GnuPG: https://gnupg.org/\n\nUsage:\n  keys [command]\n\nAvailable Commands:\n  add         Add an encrypted private key (either newly generated or recovered), encrypt it, and save to <name> file\n  completion  Generate the autocompletion script for the specified shell\n  delete      Delete the given keys\n  export      Export private keys\n  help        Help about any command\n  import      Import private keys into the local keybase\n  list        List all keys\n  migrate     Migrate keys from amino to proto serialization format\n  mnemonic    Compute the bip39 mnemonic for some input entropy\n  parse       Parse address from hex to bech32 and vice versa\n  rename      Rename an existing key\n  show        Retrieve key information by name or address\n\nFlags:\n  -h, --help                     help for keys\n      --home string              The application home directory (default "~")\n      --keyring-backend string   Select keyring\'s backend (os|file|test) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --node.type string         Sets key utility to use the node type\'s directory (e.g. ~/.celestia-light-mocha if --node.type light is passed).\n      --output string            Output format (text|json) (default "text")\n      --p2p.network string       Sets key utility to use the node network\'s directory (e.g. ~/.celestia-light-mynetwork if --node.network MyNetwork is passed). (default "mocha")\n\nUse "keys [command] --help" for more information about a command.\n')))}k.isMDXComponent=!0}}]);