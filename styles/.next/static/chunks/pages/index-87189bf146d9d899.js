(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1469)}])},1469:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return B}});var t=o(5893);o(9008);var a=o(7294),l=o(1676),r=o(8178),i=o.n(r),s=o(3750),c=o(9583),d=o(1664),u=o.n(d),h=o(1163),p=o(3680),g=o(9905),x=function(e){let{setShow:n,show:o,primaryCta:a}=e,l=()=>n(!1);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(g.Z,{show:o,onHide:l,children:[(0,t.jsx)(g.Z.Header,{closeButton:!0,children:(0,t.jsx)(g.Z.Title,{children:"Modal heading"})}),(0,t.jsx)(g.Z.Body,{children:"Woohoo, you re reading this text in a modal!"}),(0,t.jsxs)(g.Z.Footer,{children:[(0,t.jsx)(p.Z,{variant:"secondary",onClick:l,children:"Close"}),(0,t.jsx)(p.Z,{variant:"primary",onClick:a,children:"Save Changes"})]})]})})};let m=["FluffMongo","GoldBoy","Hoary","Macho","Robot","Zombie"],v=["BigBucks","Dubbies","Emperor'sEye","EyePatch","FacePlates","NeatMister","NerdPair","None","Partayy","PotterHead","SteampunkGoggles","ThugShades"],j=["Boggly","Dopey","Droopy","Googly","Pirate","Shut","Sunken","Zombie"],y=["Artsy","ClassItUp","Eunoia","Gangsta","GoldDigger","Greek","HotShot","None","skull necklace","Stethoscope","StoneAge","Theist","TigerTeeth","TrippyTie","Tropical","WildBoy"],w=["Cigar","Cigarillo","Duchenne","Gloat","Grin","Marijuana roll","PanAm","Pipe","Smirk","Smug","SpacedOut"],S=["AngelHalo","Antiquity","Bambocopter","Bonnet","BunnyEars","Cyclist","DevilHorns","DizzyDude","EarFlipCap","HardyHelmet","Haterica","Inmate","ITshit","None","PartyAnimal","pope","RetroTie","SailorLid","SantaHat","ShelfLife","Sheriff","SnowCap","StarBoy","Troop","WitchSloth"],f=["Adorkable","Beachy","Cloud","CloudedLeopard","CopCat","DoctorBadass","FurCoat","GentlemanSuit","Handyman","Inmate","None","Royalty","SignatureBrown","SignatureWhite","SleekLad","StarBoy","Trooper","StreetCred","USA","VacationMode"];var C=function(){let e=Math.floor(6*Math.random()),n=Math.floor(20*Math.random()),o=Math.floor(8*Math.random()),r=Math.floor(12*Math.random()),d=Math.floor(16*Math.random()),p=Math.floor(11*Math.random()),g=Math.floor(25*Math.random()),[C,B]=(0,a.useState)("white");(0,h.useRouter)();let[b,k]=(0,a.useState)(0),[T,_]=(0,a.useState)(0),[E,M]=(0,a.useState)(!1),[N,P]=(0,a.useState)([]),[Z,H]=(0,a.useState)(!1),[D,G]=(0,a.useState)([{uri:"/new/Races/Zombie.png",order:1,value:1},{uri:"/new/Bosstumes/None.png",order:2,value:1},{uri:"/new/Gaze/Boggly.png",order:3,value:1},{uri:"/new/EyePieces/None.png",order:4,value:1},{uri:"/new/Funk/None.png",order:5,value:1},{uri:"/new/Smiles/Cigar.png",order:6,value:1},{uri:"/new/Headwears/None.png",order:7,value:1}]);console.log(D,"imgCollection"),console.log(E,"onlyBg"),console.log(N,"mapArray"),console.log(f[0],"firstImg");let I=e=>new Promise((n,o)=>{let t=new Image;console.log(t,"checkImg"),t.onload=()=>n(t),t.onerror=()=>o(Error("load ".concat(e," fail"))),t.src=e});function F(e,n){return e.order<n.order?-1:e.order>n.order?1:0}(0,a.useEffect)(()=>{window.performance&&1==performance.navigation.type&&L()},[]),(0,a.useEffect)(()=>{D.forEach(A)},[b,T]);let A=async e=>{console.log(e,"options");let n=Object.assign({},e);P([]),console.log(n,"myOptions"),I(n.uri).then(n=>{let o={newImg:n,order:e.order};console.log(o,"newObject"),P(e=>[...e,o]),console.log(N,N.sort(F),"renderImg")})};function R(e,n){return[...new Map(e.map(e=>[n(e),e])).values()]}function z(e,n,o){console.log("index: "+o);let t=[...D];t[o].uri=e,t[o].value=n,G(t)}function L(){z("/new/Races/".concat(m[e],".png"),m[e],0),z("/new/Bosstumes/".concat(f[n],".png"),f[n],1),z("/new/Gaze/".concat(j[o],".png"),j[o],2),z("/new/EyePieces/".concat(v[r],".png"),v[r],3),z("/new/Funk/".concat(y[d],".png"),y[d],4),z("/new/Smiles/".concat(w[p],".png"),w[p],5),z("/new/Headwears/".concat(S[g],".png"),S[g],6),_(T+1)}return(0,a.useEffect)(()=>{let e=document.getElementById("myCanvas").getContext("2d");e.clearRect(0,0,500,500),E?(e.globalCompositeOperation="destination-over",M(!1),console.log("entered")):(e.globalCompositeOperation="source-over",M(!1),console.log("notentered")),console.log(R(N,e=>e.order),"mapArrayInside"),R(N,e=>e.order).sort(F).map(n=>e.drawImage(n.newImg,0,0,500,500))},[N,T]),(0,t.jsxs)("div",{children:[(0,t.jsx)("nav",{id:"header",children:(0,t.jsxs)("div",{class:"wrapper",children:[(0,t.jsx)("a",{href:"index.html",class:"main-logo",children:(0,t.jsx)("img",{src:"/assets/logo.png",alt:"Lousy Sloth Den NFT",width:"188"})}),(0,t.jsxs)("div",{class:"navigation",children:[(0,t.jsx)("a",{class:"menu-toggle",tooltip:"Menu","tooltip-position":"bottom",children:(0,t.jsx)("i",{class:"bx bx-menu"})}),(0,t.jsx)(u(),{href:"/",style:{textDecoration:"none"},children:"Home"}),(0,t.jsx)(u(),{href:"/",style:{textDecoration:"none"},children:"FAQ"}),(0,t.jsx)(c.j2d,{style:{color:"#acacac",marginLeft:"30px",cursor:"pointer",fontSize:"30px",marginBottom:"5px"}}),(0,t.jsx)(c.fWC,{style:{color:"#acacac",marginLeft:"30px",cursor:"pointer",fontSize:"28px",marginBottom:"5px"}})]})]})}),(0,t.jsx)(x,{show:Z,setShow:H,primaryCta:function(){var e=document.createElement("a");e.download="lsd.png",e.href=document.getElementById("myCanvas").toDataURL(),e.click(),H(!1)}}),(0,t.jsx)("div",{className:i().container,children:(0,t.jsxs)("div",{className:i().content,children:[(0,t.jsxs)("h2",{className:i().mainTxt,children:["Build Your ",(0,t.jsx)("span",{style:{color:"#f9be70"},children:"LSD"})," "]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",width:"55rem",margin:"55px auto 0"},children:[(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsx)("canvas",{id:"myCanvas",width:"500",height:"500",style:{backgroundColor:C}}),(0,t.jsx)("div",{className:i().randomBtn,onClick:L,children:(0,t.jsx)(s.RPd,{})})]}),(0,t.jsxs)("div",{style:{width:"30%"},children:[(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{onChange:e=>B(e.target.value),children:[(0,t.jsx)("option",{children:"Select Background"}),(0,t.jsx)("option",{value:"white",children:"White"}),(0,t.jsx)("option",{value:"red",children:"Red"}),(0,t.jsx)("option",{value:"yellow",children:"Yellow"}),(0,t.jsx)("option",{value:"lightgreen",children:"Green"}),(0,t.jsx)("option",{value:"lightblue",children:"Blue"}),(0,t.jsx)("option",{value:"lightpink",children:"Pink"}),(0,t.jsx)("option",{value:"purple",children:"Purple"})]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[0].value,onChange(e){z("/new/Races/".concat(e.target.value,".png"),e.target.value,0),M(!0),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Fur"}),m.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[1].value,onChange(e){z("/new/Bosstumes/".concat(e.target.value,".png"),e.target.value,1),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:" Select Clothes"}),f.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[6].value,onChange(e){z("/new/Headwears/".concat(e.target.value,".png"),e.target.value,6),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Head"}),S.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[2].value,onChange(e){z("/new/Gaze/".concat(e.target.value,".png"),e.target.value,2),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Eyes"}),j.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[3].value,onChange(e){z("/new/EyePieces/".concat(e.target.value,".png"),e.target.value,3),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Glasses"}),v.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[5].value,onChange(e){z("/new/Smiles/".concat(e.target.value,".png"),e.target.value,5),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Mouth"}),w.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})}),(0,t.jsx)("div",{style:{marginTop:"20px"},children:(0,t.jsxs)(l.Z.Select,{value:D[4].value,onChange(e){z("/new/Funk/".concat(e.target.value,".png"),e.target.value,4),k(b+1)},children:[(0,t.jsx)("option",{value:1,children:"Select Neck"}),y.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:()=>H(!0),className:i().button,children:"Download "})})]})})]})};function B(){return(0,t.jsx)("div",{children:(0,t.jsx)(C,{})})}},8178:function(e){e.exports={content:"build_content__snnCK",mainTxt:"build_mainTxt__WQdiz",button:"build_button__eVuGJ",randomBtn:"build_randomBtn___Fze0"}}},function(e){e.O(0,[445,13,431,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);