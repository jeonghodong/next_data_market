(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{1325:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product_all",function(){return t(4662)}])},8512:function(e,s){"use strict";s.Z={src:"/next_data_market/_next/static/media/ic_eye_gray_16.84601f9a.84601f9a.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42j2PTQ6CMBCFm3gUF7gw8SbGuPIAxmuol9CtUW6gboSAQkGgpfy0JaBBruIUxCbNdPrlvTeDDBwP0O/cg0zDlI/6/mKFHUtkPbGD7PoI85MT8aMXSwvquIWUV0PTT5y0qKeY8K3P5CbMyrnhMY9XjYbsZ3pwCZ+5VCxxLPZQ96Be8fKzAIGOMBV6XjYLJ8pX8N5hKuGKpRIpMRKvRjPBjmTV3GfFGuBWxalYAvHd9FE+Bmi5RBzh96QGZvI9aeHZDv9rgu0IbLW+v2E2+AJT95HaEN6mgwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8451:function(e,s){"use strict";s.Z={src:"/next_data_market/_next/static/media/ic_heart_gray_16.29930d70.29930d70.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAw0lEQVR42mMAgf///zMeP3dVhwEKTpy/pgMUYwJzHj99yXfgxMWVh05f3n/g5MUdB09e2gpkHzh06vKSd5++8DMcOXOlcv+Ji1NAio+cvhx39OyVOCATJD7h5MUblQynL91KPXbu2jwGNLDv2IXZh09fTgFzgMZtOXr2aioDFBw7ey0daO02uOortx9y7z567iDQ/tgDJy8lgNi3Hjzngqq+ygz1CcehU5d2AxXtBrLZQWJARzODFR0/dw2uCITBGqFiAKzteHbMOKR8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},4662:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return y}});var n=t(5893),i=t(6154),r=t(7294),l=t(8512),c=t(8451),a=t(8922),x=t(6033),d=t(3156),o=t(7357),h=t(5861),p=t(6863),g=t(3946),j=t(1057),u=t(6886),m=t(5675),f=t.n(m),A=t(1163);function y(){let[e,s]=(0,r.useState)("grid"),[t,m]=(0,r.useState)([]),y=(0,A.useRouter)(),b=e=>{y.push({pathname:"/product",query:{id:e}})},Z=e=>{s(e)};return(0,r.useEffect)(()=>{i.Z.get("/data/products.json").then(e=>{m(e.data.products)}).catch(e=>{console.log(e)})},[]),(0,n.jsxs)(d.Z,{maxWidth:"xl",children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",my:"2rem"},children:[(0,n.jsx)(h.Z,{component:"h2",variant:"h6",sx:{fontSize:"1.5rem",fontWeight:"bold"},children:"전체 데이터"}),(0,n.jsxs)(p.Z,{variant:"contained","aria-label":"text button group",children:[(0,n.jsx)(g.Z,{children:(0,n.jsx)(a.Z,{onClick:()=>Z("grid")})}),(0,n.jsx)(g.Z,{children:(0,n.jsx)(x.Z,{onClick:()=>Z("list")})}),(0,n.jsx)(j.Z,{variant:"text",children:"View all"})]})]}),"grid"===e?(0,n.jsx)(u.ZP,{container:!0,spacing:2,children:t.map((e,s)=>(0,n.jsx)(u.ZP,{item:!0,xs:3,children:(0,n.jsxs)(o.Z,{onClick:()=>b(e.id),sx:{border:"1px solid #eee",borderRadius:"1.5rem",cursor:"pointer"},children:[(0,n.jsx)("img",{src:e.img,alt:"img",width:"100%",height:150,style:{borderTopRightRadius:"1.5rem",borderTopLeftRadius:"1.5rem"}}),(0,n.jsxs)(o.Z,{sx:{p:"1.2rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[(0,n.jsx)(o.Z,{sx:{display:"flex",gap:"0.5rem"},children:e.tag.map((e,s)=>(0,n.jsx)(o.Z,{sx:{bgcolor:"rgb(160, 121, 242)",p:"7px 7px",pt:"8px",color:"white",fontSize:".7rem",borderRadius:"5px",textAlign:"center"},children:(0,n.jsx)("span",{children:e})},s))}),(0,n.jsx)(h.Z,{component:"h2",variant:"h6",fontWeight:"bold",children:e.title}),(0,n.jsx)(h.Z,{component:"p",sx:{fontWeight:"400"},children:e.acc}),(0,n.jsxs)(h.Z,{component:"p",sx:{color:"rgb(162, 175, 188)"},children:[e.price,"₩"]}),(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("span",{style:{color:"gray"},children:"판매자명"}),(0,n.jsx)("span",{children:e.seller})]}),(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.season}),(0,n.jsxs)(o.Z,{sx:{display:"flex",gap:"0.5rem"},children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.3rem"},children:[(0,n.jsx)(f(),{src:l.Z,alt:"eye",width:20,height:20}),(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.count})]}),(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.3rem"},children:[(0,n.jsx)(f(),{src:c.Z,alt:"heart",width:20,height:20}),(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.heart})]})]})]})]})]})},s))}):(0,n.jsx)(u.ZP,{container:!0,spacing:2,children:t.map((e,s)=>(0,n.jsx)(u.ZP,{item:!0,xs:12,children:(0,n.jsxs)(o.Z,{onClick:()=>b(e.id),sx:{border:"1px solid #eee",borderRadius:"1.5rem",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem"},children:[(0,n.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,n.jsx)("img",{src:e.img,alt:"img",width:160,height:150,style:{borderRadius:"1.5rem",marginRight:"1rem"}}),(0,n.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,n.jsx)(h.Z,{component:"h2",variant:"h6",fontWeight:"bold",children:e.title}),(0,n.jsx)(h.Z,{component:"p",sx:{fontWeight:"400"},children:e.acc}),(0,n.jsxs)(o.Z,{sx:{display:"flex",gap:"0.5rem"},children:[e.tag.map((e,s)=>(0,n.jsx)(o.Z,{sx:{bgcolor:"rgb(160, 121, 242)",p:"7px 7px",pt:"8px",color:"white",fontSize:".7rem",borderRadius:"5px",textAlign:"center"},children:(0,n.jsx)("span",{children:e})},s)),(0,n.jsxs)(h.Z,{component:"p",sx:{color:"rgb(162, 175, 188)"},children:[e.price,"₩"]})]})]})]}),(0,n.jsxs)(o.Z,{sx:{p:"1.2rem",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"150px",width:"30%"},children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("span",{style:{color:"gray"},children:"판매자명"}),(0,n.jsx)("span",{children:e.seller})]}),(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.season}),(0,n.jsxs)(o.Z,{sx:{display:"flex",gap:"0.5rem"},children:[(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.3rem"},children:[(0,n.jsx)(f(),{src:l.Z,alt:"eye",width:20,height:20}),(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.count})]}),(0,n.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.3rem"},children:[(0,n.jsx)(f(),{src:c.Z,alt:"heart",width:20,height:20}),(0,n.jsx)("span",{style:{color:"rgb(162, 175, 188)"},children:e.heart})]})]})]})]})]})},s))})]})}}},function(e){e.O(0,[154,483,774,888,179],function(){return e(e.s=1325)}),_N_E=e.O()}]);