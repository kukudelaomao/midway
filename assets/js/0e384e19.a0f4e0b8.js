"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={},p="\u4ecb\u7ecd",u={unversionedId:"intro",id:"intro",title:"\u4ecb\u7ecd",description:"Midway \u662f\u963f\u91cc\u5df4\u5df4 - \u6dd8\u5b9d\u524d\u7aef\u67b6\u6784\u56e2\u961f\uff0c\u57fa\u4e8e\u6e10\u8fdb\u5f0f\u7406\u5ff5\u7814\u53d1\u7684 Node.js \u6846\u67b6\uff0c\u901a\u8fc7\u81ea\u7814\u7684\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\uff0c\u642d\u914d\u5404\u79cd\u4e0a\u5c42\u6a21\u5757\uff0c\u7ec4\u5408\u51fa\u9002\u7528\u4e8e\u4e0d\u540c\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"common",next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/quick_guide"}},c={},s=[{value:"\u4e3a\u4ec0\u4e48\u8981\u6709 Midway",id:"\u4e3a\u4ec0\u4e48\u8981\u6709-midway",level:2},{value:"\u6211\u4eec\u7684\u4f18\u52bf",id:"\u6211\u4eec\u7684\u4f18\u52bf",level:2},{value:"\u591a\u7f16\u7a0b\u8303\u5f0f",id:"\u591a\u7f16\u7a0b\u8303\u5f0f",level:2},{value:"\u9762\u5411\u5bf9\u8c61\uff08OOP + Class + IoC\uff09",id:"\u9762\u5411\u5bf9\u8c61oop--class--ioc",level:3},{value:"\u51fd\u6570\u5f0f\uff08FP + Function + Hooks\uff09",id:"\u51fd\u6570\u5f0ffp--function--hooks",level:3},{value:"\u73af\u5883\u51c6\u5907\u5de5\u4f5c",id:"\u73af\u5883\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u6b63\u786e\u7684\u63d0\u95ee",id:"\u6b63\u786e\u7684\u63d0\u95ee",level:2},{value:"\u7b54\u7591\u5206\u4eab\u7fa4",id:"\u7b54\u7591\u5206\u4eab\u7fa4",level:2},{value:"\u5b98\u65b9\u5ba3\u4f20\u6e20\u9053",id:"\u5b98\u65b9\u5ba3\u4f20\u6e20\u9053",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("p",null,"Midway \u662f\u963f\u91cc\u5df4\u5df4 - \u6dd8\u5b9d\u524d\u7aef\u67b6\u6784\u56e2\u961f\uff0c\u57fa\u4e8e\u6e10\u8fdb\u5f0f\u7406\u5ff5\u7814\u53d1\u7684 Node.js \u6846\u67b6\uff0c\u901a\u8fc7\u81ea\u7814\u7684\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\uff0c\u642d\u914d\u5404\u79cd\u4e0a\u5c42\u6a21\u5757\uff0c\u7ec4\u5408\u51fa\u9002\u7528\u4e8e\u4e0d\u540c\u573a\u666f\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",null,"Midway \u57fa\u4e8e TypeScript \u5f00\u53d1\uff0c\u7ed3\u5408\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"\u9762\u5411\u5bf9\u8c61\uff08OOP + Class + IoC\uff09"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"\u51fd\u6570\u5f0f\uff08FP + Function + Hooks\uff09"),"\u4e24\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u5e76\u5728\u6b64\u4e4b\u4e0a\u652f\u6301\u4e86 Web / \u5168\u6808 / \u5fae\u670d\u52a1 / RPC / Socket / Serverless \u7b49\u591a\u79cd\u573a\u666f\uff0c\u81f4\u529b\u4e8e\u4e3a\u7528\u6237\u63d0\u4f9b\u7b80\u5355\u3001\u6613\u7528\u3001\u53ef\u9760\u7684 Node.js \u670d\u52a1\u7aef\u7814\u53d1\u4f53\u9a8c\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u6709-midway"},"\u4e3a\u4ec0\u4e48\u8981\u6709 Midway"),(0,l.kt)("p",null,"\u793e\u533a\u4e0a\u4e5f\u6709\u5f88\u591a\u7c7b\u4f3c\u7684\u6846\u67b6\uff0c\u90a3\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Midway \uff1f"),(0,l.kt)("p",null,"\u539f\u56e0\u6709\u4e09\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Midway \u662f\u963f\u91cc\u5185\u90e8\u4e00\u76f4\u6301\u7eed\u5728\u7814\u53d1\u7684\u6846\u67b6\uff0c\u4e4b\u524d egg \u662f\u4f5c\u4e3a\u5e95\u5c42\u6846\u67b6\uff0c\u9700\u8981\u6709\u9762\u5411\u5e94\u7528\u5c42\u9762\u7684\u6846\u67b6\u6765\u548c\u96c6\u56e2\u573a\u666f\u5bf9\u63a5"),(0,l.kt)("li",{parentName:"ol"},"\u5168\u91cf\u4f7f\u7528 TypeScript \u662f\u672a\u6765\u4e00\u6bb5\u65f6\u95f4\u7684\u8d8b\u52bf\uff0c\u9762\u5411\u672a\u6765\u53bb\u8fed\u4ee3\u548c\u7814\u53d1\u662f\u4f5c\u4e3a\u67b6\u6784\u7ec4\u521b\u65b0\u7684\u8981\u6c42"),(0,l.kt)("li",{parentName:"ol"},"\u867d\u7136\u793e\u533a\u5df2\u7ecf\u6709 nest \u8fd9\u6837\u7684\u6846\u67b6\uff0c\u4f46\u662f\u8fd9\u4e9b\u4ea7\u54c1\u7684\u7ef4\u62a4\u3001\u534f\u4f5c\u3001\u4fee\u6539\u90fd\u4f1a\u53d7\u5230\u5546\u4e1a\u5316\u4ea7\u54c1\u7684\u5236\u7ea6\uff0c\u4e5f\u65e0\u6cd5\u505a\u5230\u9700\u6c42\u7684\u5feb\u901f\u8fed\u4ee3\u548c\u5b89\u5168\u6027\u4fdd\u969c\uff0c\u6574\u4f53\u7684\u7814\u53d1\u7406\u5ff5\u4e5f\u548c\u6211\u4eec\u4e0d\u540c\uff0c\u4e3a\u6b64\uff0c\u6211\u4eec\u9700\u8981\u6709\u4e00\u5957\u81ea\u7814\u7684\u6846\u67b6\u4f53\u7cfb")),(0,l.kt)("h2",{id:"\u6211\u4eec\u7684\u4f18\u52bf"},"\u6211\u4eec\u7684\u4f18\u52bf"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Midway \u6846\u67b6\u662f\u5728\u5185\u90e8\u5df2\u7ecf\u4f7f\u7528 5 \u5e74\u4ee5\u4e0a\u7684 Node.js \u6846\u67b6\uff0c\u6709\u7740\u957f\u671f\u6295\u5165\u548c\u6301\u7eed\u7ef4\u62a4\u7684\u56e2\u961f\u505a\u540e\u76fe"),(0,l.kt)("li",{parentName:"ol"},"\u5df2\u7ecf\u5728\u6bcf\u5e74\u7684\u5927\u4fc3\u573a\u666f\u7ecf\u8fc7\u8003\u9a8c\uff0c\u7a33\u5b9a\u6027\u65e0\u987b\u62c5\u5fc3"),(0,l.kt)("li",{parentName:"ol"},"\u4e30\u5bcc\u7684\u7ec4\u4ef6\u548c\u6269\u5c55\u80fd\u529b\uff0c\u4f8b\u5982\u6570\u636e\u5e93\uff0c\u7f13\u5b58\uff0c\u5b9a\u65f6\u4efb\u52a1\uff0c\u8fdb\u7a0b\u6a21\u578b\uff0c\u90e8\u7f72\u4ee5\u53ca Web\uff0cSocket \u751a\u81f3 Serverless \u7b49\u65b0\u573a\u666f\u7684\u652f\u6301"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4f53\u5316\u8c03\u7528\u65b9\u6848\u53ef\u4ee5\u65b9\u4fbf\u5feb\u6377\u548c\u524d\u7aef\u9875\u9762\u534f\u540c\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ol"},"\u826f\u597d\u7684 TypeScript \u5b9a\u4e49\u652f\u6301"),(0,l.kt)("li",{parentName:"ol"},"\u56fd\u4ea7\u5316\u6587\u6863\u548c\u6c9f\u901a\u5bb9\u6613\u7b80\u5355")),(0,l.kt)("h2",{id:"\u591a\u7f16\u7a0b\u8303\u5f0f"},"\u591a\u7f16\u7a0b\u8303\u5f0f"),(0,l.kt)("p",null,"Midway \u652f\u6301\u9762\u5411\u5bf9\u8c61\u4e0e\u51fd\u6570\u5f0f\u4e24\u79cd\u7f16\u7a0b\u8303\u5f0f\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u7814\u53d1\u7684\u9700\u8981\uff0c\u9009\u62e9\u4e0d\u540c\u7684\u7f16\u7a0b\u8303\u5f0f\u6765\u5f00\u53d1\u5e94\u7528\u3002"),(0,l.kt)("h3",{id:"\u9762\u5411\u5bf9\u8c61oop--class--ioc"},"\u9762\u5411\u5bf9\u8c61\uff08OOP + Class + IoC\uff09"),(0,l.kt)("p",null,"Midway \u652f\u6301\u9762\u5411\u5bf9\u8c61\u7684\u7f16\u7a0b\u8303\u5f0f\uff0c\u4e3a\u5e94\u7528\u63d0\u4f9b\u66f4\u4f18\u96c5\u7684\u67b6\u6784\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e\u9762\u5411\u5bf9\u8c61\uff0c\u5f00\u53d1\u8def\u7531\u7684\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\nimport { Controller, Get } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context\n\n  @Get('/')\n  async home() {\n    return {\n      message: 'Hello Midwayjs!',\n      query: this.ctx.ip\n    }\n  }\n}\n")),(0,l.kt)("h3",{id:"\u51fd\u6570\u5f0ffp--function--hooks"},"\u51fd\u6570\u5f0f\uff08FP + Function + Hooks\uff09"),(0,l.kt)("p",null,"Midway \u4e5f\u652f\u6301\u51fd\u6570\u5f0f\u7684\u7f16\u7a0b\u8303\u5f0f\uff0c\u4e3a\u5e94\u7528\u63d0\u4f9b\u66f4\u9ad8\u7684\u7814\u53d1\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u57fa\u4e8e\u51fd\u6570\u5f0f\uff0c\u5f00\u53d1\u8def\u7531\u63a5\u53e3\u7684\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/api/index.ts\n\nimport { useContext } from '@midwayjs/hooks'\nimport { Context } from '@midwayjs/koa';\n\nexport default async function home () {\n  const ctx = useContext<Context>()\n\n  return {\n    message: 'Hello Midwayjs!',\n    query: ctx.ip\n  }\n}\n")),(0,l.kt)("h2",{id:"\u73af\u5883\u51c6\u5907\u5de5\u4f5c"},"\u73af\u5883\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"Midway \u8fd0\u884c\u8bf7\u9884\u5148\u5b89\u88c5 Node.js \u73af\u5883\u548c npm\uff0c\u5728\u56fd\u5185\u53ef\u4ee5\u4f7f\u7528 cnpm\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 macOS\uff0cLinux\uff0cWindows"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883\uff1a\u5efa\u8bae\u9009\u62e9 ",(0,l.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"LTS \u7248\u672c"),"\uff0c\u6700\u4f4e\u8981\u6c42 ",(0,l.kt)("strong",{parentName:"li"},"12.x"),"\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5e2e\u52a9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"how_to_install_nodejs"},"\u5982\u4f55\u5b89\u88c5 Node.js \u73af\u5883"),"\u3002"),(0,l.kt)("h2",{id:"\u6b63\u786e\u7684\u63d0\u95ee"},"\u6b63\u786e\u7684\u63d0\u95ee"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705  \u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues"},"github issue")," \u63d0\u95ee\uff0c\u53ef\u8ffd\u8e2a\uff0c\u53ef\u6c89\u6dc0\uff0c\u53ef Star",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1\u3001\u63cf\u8ff0\u4f60\u7684\u95ee\u9898\uff0c\u63d0\u4f9b\u5c3d\u53ef\u80fd\u8be6\u7ec6\u7684\u590d\u73b0\u65b9\u6cd5\uff0c\u6846\u67b6\u7248\u672c\uff0c\u573a\u666f\uff08Serverless \u8fd8\u662f\u5e94\u7528\uff09"),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u5c3d\u53ef\u80fd\u63d0\u4f9b\u62a5\u9519\u622a\u56fe\uff0c\u5806\u6808\u4fe1\u606f\uff0c\u6700\u5c0f\u590d\u73b0\u7684 repo")))),(0,l.kt)("h2",{id:"\u7b54\u7591\u5206\u4eab\u7fa4"},"\u7b54\u7591\u5206\u4eab\u7fa4"),(0,l.kt)("p",null,"\u7fa4\u91cc\u4f1a\u6709\u70ed\u5fc3\u7684\u670b\u53cb\uff0c\u4e5f\u4f1a\u6709\u65b0\u7248\u672c\u53d1\u5e03\u63a8\u9001\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9489\u9489\uff08\u5de6\u56fe\uff09\uff1a\u626b\u7801\u52a0\u5165\u7b54\u7591\u7fa4\uff08\u7533\u8bf7\u52a0\u5165\uff0c\u81ea\u52a8\u901a\u8fc7\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5fae\u4fe1\uff08\u53f3\u56fe\uff09\uff1a\u7531\u4e8e\u5fae\u4fe1\u7fa4\u9650\u5236\uff0c\u53ef\u4ee5\u5148\u52a0\u62c9\u7fa4\u5c0f\u52a9\u624b\uff08\u5907\u6ce8 midway \u52a0\u7fa4\uff09\uff0c\u7136\u540e\u62c9\u5230\u5fae\u4fe1\u7fa4\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01LW04Ah1EFWHjVLu7s_!!6000000000322-0-tps-1658-1010.jpg",alt:"image.png"})),(0,l.kt)("h2",{id:"\u5b98\u65b9\u5ba3\u4f20\u6e20\u9053"},"\u5b98\u65b9\u5ba3\u4f20\u6e20\u9053"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1746017680"},"\u54d4\u54e9\u54d4\u54e9"),"\uff0c\u4f1a\u63d0\u4f9b\u66f4\u65b0\u4fe1\u606f\u548c\u6559\u7a0b")))}d.isMDXComponent=!0}}]);