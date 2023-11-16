(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},4294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=a(7096),r=a(6132),i=a(7284),n=a.n(i),o=a(2564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9447)),"/home/marc/Documents/AWS-ACM/awscc-project-1-dashboard/src/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,4553)),"/home/marc/Documents/AWS-ACM/awscc-project-1-dashboard/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/marc/Documents/AWS-ACM/awscc-project-1-dashboard/src/app/page.js"],p="/page",u={require:a,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7446:(e,t,a)=>{Promise.resolve().then(a.bind(a,4273))},4273:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Home});var s=a(784),r=a(2451),i=a.n(r),n=a(7731),o=a.n(n);let l={src:"/_next/static/media/logo.b9bb99d6.png",height:605,width:700,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAX0lEQVR42iXLMQsBcQAH0N8dkzLoFrvRF1BIlO1usMhlEotkZFF885fhv756UYuVm6OrsUTMtBYepvoCSx8/X28nTVQ6Oy+9u4NR1J5i7WKuLWXjbCIa+wIDW52oDOUPzLhCT2r6js4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7};var d=a(9811),c=a(2050);a(9973);var p=a(9885),u=a(4997);function Home(){let[e,t]=(0,p.useState)([]);(0,p.useEffect)(()=>{console.log("in eff"),getData()},[]);let getData=async()=>{try{let e=await u.Z.get("https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/s3/all",{headers:{"Content-Type":"application/json"}});console.log(e.data),t(JSON.parse(e.data))}catch(e){console.error("Error:",e)}},a=e.length>0?e:(()=>{let e=[];for(let t=1;t<=15;t++)e.push({id:t,Key:`Name ${t}`,Type:`Type ${t}`,LastModified:`Date ${t}`,Tags:`Tag ${t}`});return e})();return(0,s.jsxs)("main",{className:o().main,children:[(0,s.jsxs)("nav",{className:o().navbar,children:[(0,s.jsxs)("a",{className:o().navImage,href:"#",children:[s.jsx(i(),{src:l,width:103,height:89}),s.jsx("span",{className:o().navTitle,children:"Extracta"})]}),s.jsx("div",{className:o().navDiv})]}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx("div",{className:o().mainBody,children:s.jsx("div",{className:`table-responsive ${o().tableContainer}`,style:{height:"60vh",overflowY:"auto"},children:(0,s.jsxs)("table",{className:"table table-striped table-hover",style:{width:"100%",backgroundColor:"#A69CAC !important",borderCollapse:"collapse",fontSize:"1.2rem"},children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:o().th,style:{width:"25%"},children:"Name"}),s.jsx("th",{className:o().th,style:{width:"20%"},children:"Type"}),s.jsx("th",{className:o().th,style:{width:"20%"},children:"Created At"}),s.jsx("th",{className:o().th,style:{width:"25%"},children:"Tags"}),s.jsx("th",{className:o().th,style:{width:"10%"},children:"Download"})]})}),s.jsx("tbody",{children:a.map(e=>(0,s.jsxs)("tr",{children:[s.jsx("td",{className:o().td,style:{width:"25%"},children:e.Key}),s.jsx("td",{className:o().td,style:{width:"20%"},children:e.Type}),s.jsx("td",{className:o().td,style:{width:"20%"},children:e.LastModified}),s.jsx("td",{className:o().td,style:{width:"25%"},children:"string"==typeof e.Tags?e.Tags:e.Tags.map(e=>`${e.Key}: ${e.Value}`).join(", ")}),s.jsx("td",{className:o().td,style:{width:"10%"},children:s.jsx("a",{className:`btn ${o().downloadButton}`,style:{display:"flex",backgroundColor:"inherit",boxShadow:"none",fontSize:20,border:"solid 0px white",padding:2},children:s.jsx(d.G,{icon:c.q7m,style:{height:20}})})})]},e.id))})]})})})})]})}},7731:e=>{e.exports={main:"page_main__GlU4n",navbar:"page_navbar__chktt",navImage:"page_navImage__6fCdC",navDiv:"page_navDiv__rksg4",navTitle:"page_navTitle__j1_zp",navLink:"page_navLink__2S7dD",mainBody:"page_mainBody__Bkoo5",bodyLeftBlob:"page_bodyLeftBlob__E3HUn",blobText:"page_blobText___vfWj",bodyRightBlob:"page_bodyRightBlob__Hr5bM",uploadBtn:"page_uploadBtn__mRj99",previewImage:"page_previewImage__AEEaF",fileInputLabel:"page_fileInputLabel__AYWmz",fileInput:"page_fileInput__GPmDd",outputText:"page_outputText__r3omD",tableContainer:"page_tableContainer__ZKrGH",table:"page_table__71QjM",th:"page_th___l48e",td:"page_td__VfSpZ",downloadButton:"page_downloadButton__A6C4Z"}},9447:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var s=a(5153);let r=(0,s.createProxy)(String.raw`/home/marc/Documents/AWS-ACM/awscc-project-1-dashboard/src/app/page.js`),{__esModule:i,$$typeof:n}=r,o=r.default,l=o},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[751,950,423],()=>__webpack_exec__(4294));module.exports=a})();