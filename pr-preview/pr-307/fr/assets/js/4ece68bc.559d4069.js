"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4619],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return c}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),i=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),c=r,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return t?n.createElement(g,o(o({ref:a},p),{},{components:t})):n.createElement(g,o({ref:a},p))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(7294),r=t(4334),l="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},5488:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(3117),r=t(7294),l=t(4334),o=t(2389),s=t(7392),u=t(7094),i=t(2466),p="tabList__CuJ",m="tabItem_LNqP";function d(e){var a;const{lazy:t,block:o,defaultValue:d,values:c,groupId:g,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),k=(0,s.l)(h,((e,a)=>e.value===a.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,u.U)(),[T,N]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,i.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&h.some((a=>a.value===e))&&N(e)}const $=e=>{const a=e.currentTarget,t=x.indexOf(a),n=h[t].value;n!==T&&(I(a),N(n),null!=g&&y(g,String(n)))},O=e=>{var a;let t=null;switch(e.key){case"Enter":$(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>x.push(e),onKeyDown:O,onClick:$},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===a})}),t??a)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function c(e){const a=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},787:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var n=t(3117),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const s={sidebar_label:"Setting Up Environment"},u="Development Environment",i={unversionedId:"developers/environment",id:"developers/environment",title:"Development Environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/docs/developers/environment.mdx",sourceDirName:"developers",slug:"/developers/environment",permalink:"/pr-preview/pr-307/fr/developers/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting Up Environment"},sidebar:"developers",previous:{title:"Overview",permalink:"/pr-preview/pr-307/fr/developers/overview"},next:{title:"Celestia App",permalink:"/pr-preview/pr-307/fr/category/celestia-app"}},p={},m=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],d={toc:m};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,r.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,r.kt)(o.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,r.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(o.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(o.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,r.kt)(o.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,r.kt)("h3",{id:"install-golang"},"Install Golang"),(0,r.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang"),"\nso we must install Golang to build and run them."),(0,r.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(o.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/amd64\n"))),(0,r.kt)(o.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/arm64\n"))),(0,r.kt)(o.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/arm64\n"))),(0,r.kt)(o.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/amd64\n"))))),(0,r.kt)(o.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,r.kt)(o.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(o.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n"))),(0,r.kt)(o.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/arm64\n"))),(0,r.kt)(o.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/arm64\n"))),(0,r.kt)(o.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/amd64\n")))))))}c.isMDXComponent=!0}}]);