import{i as o,o as r,c,f as x,C as d,u as n,a as t,H as _,D as p,n as m,b as f}from"./entry.WTFPe48x.js";import{u as h}from"./vue.f36acd1f.j1JUu4ki.js";const b={class:"w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-xl bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"},v={__name:"SearchBar",setup(u){const e=o(""),s=o(!1),l=()=>{if(!e.value)return s.value=!0;m(`/city/${e.value}/restaurant`)};return(z,a)=>(r(),c("div",b,[x(t("input",{type:"text",class:_(["py-3 px-5 w-full text-lg sm:text-xl md:text-2xl xl:text-3xl rounded-full focus:outline-none",n(s)?"border-red-500 border":""]),placeholder:"請以 A7, A8, A9, 桃園 搜尋 ...","onUpdate:modelValue":a[0]||(a[0]=i=>p(e)?e.value=i:null)},null,2),[[d,n(e)]]),t("button",{class:"bg-sky-500 px-5 text-white w-[100px]",onClick:l}," 搜尋 ")]))}},g=v,w=t("h1",null,"A7新林口-社區網站: 13.生活指引資訊平台",-1),y={class:"relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-03-RestaurantBanner1.jpeg')]"},k={class:"z-10 absolute w-full h-full flex justify-center items-center"},A={class:"text-center w-5/6 md:w-4/5 xl:w-3/4"},B=t("p",{class:"text-lg sm:text-xl md:text-2xl xl:text-3xl mb-10 text-white"}," 大林口找餐廳 ",-1),j=t("div",{class:"z-1 absolute w-full h-full bg-black opacity-30"},null,-1),S={__name:"index",setup(u){return h({title:"A7-13.生活指引",meta:[{name:"description",content:"A7新林口-社區網站: 13.生活指引資訊平台 "}]}),(e,s)=>{const l=g;return r(),c("div",null,[w,t("div",y,[t("div",k,[t("div",A,[B,f(l)])]),j])])}}};export{S as default};