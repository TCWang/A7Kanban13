import{_ as b}from"./nuxt-img.dp2grRG6.js";import{o as c,c as n,b as a,a as t,t as i,d as _,h as l,v as r,m as d,g as u,n as f,u as v,H as x,G as k}from"./entry.fTE8QCsP.js";import{u as w}from"./useShops.tNYPS1IT.js";import{u as y}from"./vue.f36acd1f.psNz-_QW.js";import"./shops.aVvU0LRu.js";import"./typecs.qIdT0Xe8.js";const $={class:"mt-2 flex flex-col md:flex-row"},q={class:"w-full md:w-1/2"},j={class:"mt-1"},L={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},T={class:"flex-col"},B={class:""},D=["href"],G={class:""},N={class:""},O={class:"flex flex-row space-x-4"},S=["href"],H=["href"],V=["href"],C=["href"],I={class:"flex flex-row space-x-4"},E=["href"],M=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),R=[M],F=["href"],W=t("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),z=[W],A=["innerHTML"],J={__name:"Detail",props:{shop:Object},setup(e){return(h,o)=>{const s=b;return c(),n("div",$,[a(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/shop/${e.shop.figure}`,class:"w-full md:w-1/2 md:h-1/2 md:px-4",alt:""},null,8,["src"]),t("div",q,[t("h1",j,i(e.shop.type)+" - "+i(e.shop.name),1),t("div",L,[t("div",T,[t("p",B,[_(" 地址: "),t("a",{href:e.shop.google},i(e.shop.address),9,D)]),t("p",G,"電話: "+i(e.shop.telphone),1),t("p",N,"營業時間: "+i(e.shop.hours),1)]),t("p",O,[l(t("a",{href:e.shop.web},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,S),[[r,e.shop.web]]),l(t("a",{href:e.shop.facebook},[a(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,H),[[r,e.shop.facebook]]),l(t("a",{href:e.shop.line},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,V),[[r,e.shop.line]]),l(t("a",{href:e.shop.ig},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,C),[[r,e.shop.ig]])])]),t("div",I,[e.shop.suggestion?(c(),n("a",{key:0,href:e.shop.suggestion},R,8,E)):d("",!0),e.shop.suggestion2?(c(),n("a",{key:1,href:e.shop.suggestion2},z,8,F)):d("",!0)]),e.shop.description?(c(),n("div",{key:0,class:"mt-2",innerHTML:e.shop.description},null,8,A)):d("",!0)])])}}},K=J,P={class:"container mb-4 mr-8 flex justify-end"},Q={__name:"Back",props:{area:Text},setup(e){return(h,o)=>(c(),n("div",P,[t("button",{onClick:o[0]||(o[0]=s=>("navigateTo"in h?h.navigateTo:u(f))(`/area/${e.area}/shop`)),class:"btn btn-primary"}," 回列表清單 ")]))}},U=Q,X={key:0,class:"container"},Y=t("h1",null,"店家介紹",-1),ne={__name:"[name]-[id]",setup(e){const{shops:h}=w(),o=v(),s=x(()=>h.find(p=>p.id===o.params.id));if(!s.value)throw k({statusCode:404,message:`Restaurant with ID of ${o.params.id} does not exist`});return y({title:`生活指引-商店黃頁:${o.params.name}`}),(p,Z)=>{const g=K,m=U;return u(s)?(c(),n("div",X,[Y,a(g,{shop:u(s)},null,8,["shop"]),a(m,{area:u(s).category},null,8,["area"])])):d("",!0)}}};export{ne as default};