import{_ as m}from"./nuxt-img.hU8hqA2y.js";import{o,c as n,b as a,a as e,t as i,d as f,k as l,f as c,v as u,_ as x,w as k,h as p,G as v,E as w,u as b}from"./entry.VttMrVb9.js";import{_ as y}from"./nuxt-link.g64wgEeT.js";import{u as q}from"./useRestaurants.E22W6Iiy.js";import{u as j}from"./vue.f36acd1f.Se47QIA4.js";import"./restaurants.kCroaytH.js";const $={class:"mt-2 flex flex-col md:flex-row"},L={class:"w-full md:w-1/2"},G={class:"mt-1"},O={class:"text-slate-500 text-lg mt-3 border-b pb-5 justify-between"},N={class:"flex-col"},H={class:""},R=["href"],B={class:""},D={class:""},V=["innerHTML"],C={class:"flex flex-row space-x-4"},E=["href"],I=["href"],T=["href"],M=["href"],S=["href"],A=["href"],F={class:"flex flex-row space-x-4"},P=["href"],U=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 查閱菜單 ",-1),W=[U],z=["href"],J=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 ",-1),K=[J],Q=["href"],X=e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white hover:text-yellow-200 rounded-lg px-4 py-2"}," 推薦 2 ",-1),Y=[X],Z={__name:"Hero",props:{restaurant:Object},setup(t){return(h,r)=>{const s=m;return o(),n("div",$,[a(s,{src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/restaurant/${t.restaurant.figure}`,class:"w-full md:w-1/2 md:px-4",alt:""},null,8,["src"]),e("div",L,[e("h1",G,i(t.restaurant.type)+" - "+i(t.restaurant.name),1),e("div",O,[e("div",N,[e("p",H,[f(" 地址: "),e("a",{href:t.restaurant.google},i(t.restaurant.address),9,R)]),e("p",B,"電話: "+i(t.restaurant.telphone),1),e("p",D,"營業時間: "+i(t.restaurant.hours),1),t.restaurant.description?(o(),n("div",{key:0,innerHTML:t.restaurant.description},null,8,V)):l("",!0)]),e("p",C,[c(e("a",{href:t.restaurant.web},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Web.jpeg"})],8,E),[[u,t.restaurant.web]]),c(e("a",{href:t.restaurant.facebook},[a(s,{class:"h-12 hover:scale-150",src:`https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Facebook.png
            `})],8,I),[[u,t.restaurant.facebook]]),c(e("a",{href:t.restaurant.line},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Line.png"})],8,T),[[u,t.restaurant.line]]),c(e("a",{href:t.restaurant.ig},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Ig.png"})],8,M),[[u,t.restaurant.ig]]),c(e("a",{href:t.restaurant.uber},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Uber.jpeg"})],8,S),[[u,t.restaurant.uber]]),c(e("a",{href:t.restaurant.panda},[a(s,{class:"h-12 hover:scale-150",src:"https://kgptltaqnkidtcqkathb.supabase.co/storage/v1/object/public/a7-images/logo/LOG-01-Panda.png"})],8,A),[[u,t.restaurant.panda]])])]),e("div",F,[t.restaurant.menu?(o(),n("a",{key:0,href:t.restaurant.menu},W,8,P)):l("",!0),t.restaurant.suggestion?(o(),n("a",{key:1,href:t.restaurant.suggestion},K,8,z)):l("",!0),t.restaurant.suggestion2?(o(),n("a",{key:2,href:t.restaurant.suggestion2},Y,8,Q)):l("",!0)])])])}}},tt=Z,et={},st={class:"container mb-4 mr-8 flex justify-end"},at=e("button",{class:"btn btn-primary"},"回列表清單",-1);function ot(t,h){const r=y;return o(),n("div",st,[a(r,{to:"/city/A7/restaurant"},{default:k(()=>[at]),_:1})])}const nt=x(et,[["render",ot]]),rt={key:0,class:"container"},ct=e("h1",null,"餐廳介紹",-1),_t={__name:"[name]-[id]",setup(t){const{restaurants:h}=q(),r=p(),s=v(()=>h.find(d=>d.id===r.params.id));if(!s.value)throw w({statusCode:404,message:`Restaurant with ID of ${r.params.id} does not exist`});return j({title:`生活指引-餐廳推薦:${r.params.name}`}),(d,ut)=>{const g=tt,_=nt;return b(s)?(o(),n("div",rt,[ct,a(g,{restaurant:b(s)},null,8,["restaurant"]),a(_)])):l("",!0)}}};export{_t as default};