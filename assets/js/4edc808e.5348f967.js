"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4173],{9047:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(7294),i=t(5893);function a(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=n.filter((e=>e!==t)),s=t?.props.children;return{mdxAdmonitionTitle:s,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(e.children),a=e.title??n;return{...e,...a&&{title:a},children:t}}var s=t(6905),r=t(5999),l=t(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:o}=e;return(0,i.jsx)("div",{className:(0,s.Z)(l.k.common.admonition,l.k.common.admonitionType(n),c.admonition,t),children:o})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:c.admonitionContent,children:n}):null}function p(e){const{type:n,icon:t,title:o,children:a,className:s}=e;return(0,i.jsxs)(d,{type:n,className:s,children:[(0,i.jsx)(h,{title:o,icon:t}),(0,i.jsx)(u,{children:a})]})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,i.jsx)(p,{...f,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const w={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,i.jsx)(p,{...w,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}function j(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const v={icon:(0,i.jsx)(j,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,i.jsx)(p,{...v,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function F(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,i.jsx)(F,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,i.jsx)(F,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const A={...{note:m,tip:y,info:b,warning:function(e){return(0,i.jsx)(p,{...k,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...L,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(m,{title:"secondary",...e}),important:e=>(0,i.jsx)(b,{title:"important",...e}),success:e=>(0,i.jsx)(y,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...N,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}}};var B=t(5108);function I(e){const n=a(e),t=(o=n.type,A[o]||(B.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),A.info));var o;return(0,i.jsx)(t,{...n})}},3414:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),i=t(9965),a=t(4996),s=t(5893);const r=e=>{let{alt:n,sources:t,style:r}=e;const[l,c]=(0,o.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,o.useEffect)((()=>(l?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[l]);return(0,s.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{c(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,s.jsx)(i.Z,{className:"zoomable-image-inner",alt:n,sources:{light:(0,a.Z)(t.light),dark:(0,a.Z)(t.dark)}})})}},6131:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>u,assets:()=>h,chCodeConfig:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>g});t(7294);var o=t(5893),i=t(1151),a=t(9794),s=(t(9965),t(4996),t(3414)),r=t(9047);const l={},c="\ud83d\udc4b Welcome to Langflow",d={id:"index",title:"\ud83d\udc4b Welcome to Langflow",description:"Langflow is an easy way to build from simple to complex AI applications. It is a low-code platform that allows you to integrate AI into everything you do.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"\ud83d\udce6 How to install?",permalink:"/getting-started/installation"}},h={},u={annotations:a.ds,Code:a.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"\ud83d\ude80 First steps",id:"-first-steps",level:2},{value:"Installation",id:"installation",level:2},{value:"\u26d3\ufe0f Running Langflow",id:"\ufe0f-running-langflow",level:3},{value:"\ud83e\udd17 HuggingFace Spaces",id:"-huggingface-spaces",level:4},{value:"\ud83d\udda5\ufe0f Command Line Interface (CLI)",id:"\ufe0f-command-line-interface-cli",level:3},{value:"Usage",id:"usage",level:4},{value:"Find out more about 1.0",id:"find-out-more-about-10",level:2}];function f(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",h4:"h4",code:"code"},(0,i.ah)(),e.components);return u||x("CH",!1),u.Code||x("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(n.h1,{id:"-welcome-to-langflow",children:"\ud83d\udc4b Welcome to Langflow"}),"\n",(0,o.jsx)(n.p,{children:"Langflow is an easy way to build from simple to complex AI applications. It is a low-code platform that allows you to integrate AI into everything you do."}),"\n"," ","\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:"img/new_langflow_demo.gif",dark:"img/new_langflow_demo.gif"},style:{width:"100%"}}),"\n",(0,o.jsx)(n.h2,{id:"-first-steps",children:"\ud83d\ude80 First steps"}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you have ",(0,o.jsx)(n.strong,{children:"Python 3.10"})," installed on your system."]}),"\n",(0,o.jsxs)(n.p,{children:["You can install ",(0,o.jsx)(n.strong,{children:"Langflow"})," with ",(0,o.jsx)(n.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})," or with pip."]}),"\n",(0,o.jsx)(n.p,{children:"Pipx can fetch the missing Python version for you, but you can also install it manually."}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pip ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"-U",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"# or (since pipx 1.5.0)",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10 --fetch-missing-python",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Or you can install a pre-release version using:"}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pip ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--pre --force-reinstall",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"# or (since pipx 1.5.0)",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10 --fetch-missing-python --pip-args=",props:{style:{color:"#79C0FF"}}},{content:'"--pre --force-reinstall"',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"We recommend using --force-reinstall to ensure you have the latest version of Langflow and its dependencies."}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-running-langflow",children:"\u26d3\ufe0f Running Langflow"}),"\n",(0,o.jsx)(n.p,{children:"Langflow can be run in a variety of ways, including using the command-line interface (CLI) or HuggingFace Spaces."}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"# or langflow --help",props:{style:{color:"#8B949E"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h4,{id:"-huggingface-spaces",children:"\ud83e\udd17 HuggingFace Spaces"}),"\n",(0,o.jsx)(n.p,{children:"Hugging Face provides a great alternative for running Langflow in their Spaces environment. This means you can run Langflow without any local installation required."}),"\n",(0,o.jsxs)(n.p,{children:["The first step is to go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/spaces/Langflow/Langflow?duplicate=true",children:"Langflow Space"})," or ",(0,o.jsx)(n.a,{href:"https://huggingface.co/spaces/Langflow/Langflow-Preview?duplicate=true",children:"Langflow 1.0 Preview Space"})]}),"\n",(0,o.jsx)(n.p,{children:"Remember to use a Chromium-based browser for the best experience. You'll be presented with the following screen:"}),"\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:"img/duplicate-space.png",dark:"img/duplicate-space.png"},style:{width:"100%",margin:"20px auto"}}),"\n",(0,o.jsxs)(n.p,{children:["From here, just name your Space, define the visibility (Public or Private), and click on ",(0,o.jsx)(n.code,{children:"Duplicate Space"})," to start the installation process. When that is done, you'll be redirected to the Space's main page to start using Langflow right away!"]}),"\n",(0,o.jsx)(n.p,{children:"Once you get Langflow running, click on New Project in the top right corner of the screen. Langflow provides a range of example flows to help you get started."}),"\n",(0,o.jsx)(n.p,{children:"To quickly try one of them, open a starter example, set up your API keys and click \u26a1 Run, on the bottom right corner of the canvas. This will open up Langflow's Interaction Panel with the chat console, text inputs, and outputs."}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-command-line-interface-cli",children:"\ud83d\udda5\ufe0f Command Line Interface (CLI)"}),"\n",(0,o.jsx)(n.p,{children:"Langflow provides a command-line interface (CLI) for easy management and configuration."}),"\n",(0,o.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"You can run the Langflow using the following command:"}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run",props:{style:{color:"#A5D6FF"}}},{content:" [OPTIONS]",props:{style:{color:"#C9D1D9"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Find more information about the available options by running:"}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"--help",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h2,{id:"find-out-more-about-10",children:"Find out more about 1.0"}),"\n",(0,o.jsx)(r.Z,{type:"caution",icon:"\ud83d\udea7",title:"ZONE UNDER CONSTRUCTION",children:(0,o.jsx)("p",{children:(0,o.jsx)(n.p,{children:"We are currently working on updating the documentation for Langflow 1.0."})})}),"\n",(0,o.jsxs)(n.p,{children:["To get you learning more about what's new and why you should be excited about Langflow 1.0, go to ",(0,o.jsx)(n.a,{href:"https://pre-release.langflow.org/whats-new/a-new-chapter-langflow",children:"A new chapter for Langflow"})," and also come back often to check out our ",(0,o.jsx)(n.a,{href:"https://pre-release.langflow.org/whats-new/migrating-to-one-point-zero",children:"migration guides"})," as we release them."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(f,e)})):f(e)};function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);