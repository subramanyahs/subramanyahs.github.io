(this["webpackJsonpcorona-stats"]=this["webpackJsonpcorona-stats"]||[]).push([[0],{134:function(e,t,a){e.exports=a(190)},139:function(e,t,a){},140:function(e,t,a){},190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(139),a(274)),s=a(119),c=(a(140),a(14)),m=a(35),d=a(193),p=a(255),g=a(191),u=a(251),h=a(42);Object(d.a)(e=>({loadingMessage:{position:"absolute",top:"40%",left:"40%"}}))((function(e){const t=e.classes,a=e.loading;return r.a.createElement("div",{style:a?{display:"block"}:{display:"none"},className:t.loadingMessage},r.a.createElement("span",{role:"img","aria-label":"emoji",style:{fontSize:58,textAlign:"center",display:"inline-block",width:"100%"}},"\ud83d\udc4b"),r.a.createElement(h.a,{variant:"h6"},"Waiting for input"))}));var E=a(250),v=a(249);a(78);class b extends n.Component{constructor(...e){super(...e),this.state={value:0,menuDrawer:!1},this.handleChange=(e,t)=>{this.setState({value:t})},this.mobileMenuOpen=e=>{this.setState({menuDrawer:!0})},this.mobileMenuClose=e=>{this.setState({menuDrawer:!1})},this.current=()=>"/home"===this.props.currentPath?0:"/dashboard"===this.props.currentPath?1:"/signup"===this.props.currentPath?2:"/wizard"===this.props.currentPath?3:"/cards"===this.props.currentPath?4:void 0}componentDidMount(){window.scrollTo(0,0)}render(){const e=this.props.classes;return r.a.createElement(v.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(E.a,null,r.a.createElement(u.a,{container:!0,spacing:10,alignItems:"baseline"},r.a.createElement(u.a,{item:!0,xs:12,className:e.flex},r.a.createElement("div",{className:e.inline},r.a.createElement(h.a,{variant:"h6",color:"inherit",noWrap:!0},r.a.createElement(c.b,{to:"/",className:e.link},r.a.createElement("span",{className:e.tagline}," Corona Stats - ")),r.a.createElement(c.b,{to:"/",className:e.link},r.a.createElement("span",{className:e.tagline},"Global"))))))))}}var y=Object(m.f)(Object(d.a)(e=>({appBar:{position:"relative",boxShadow:"none",borderBottom:"1px solid ".concat(e.palette.grey[100]),backgroundColor:"white"},inline:{display:"inline"},flex:{display:"flex",[e.breakpoints.down("sm")]:{display:"flex",justifyContent:"space-evenly",alignItems:"center"}},link:{textDecoration:"none",color:"inherit"},productLogo:{display:"inline-block",borderLeft:"1px solid ".concat(e.palette.grey.A100),marginLeft:32,paddingLeft:24,[e.breakpoints.up("md")]:{paddingTop:"1.5em"}},tagline:{display:"inline-block",marginLeft:10,[e.breakpoints.up("md")]:{paddingTop:"0.8em"}},iconContainer:{display:"none",[e.breakpoints.down("sm")]:{display:"block"}},iconButton:{float:"right"},tabContainer:{marginLeft:32,[e.breakpoints.down("sm")]:{display:"none"}},tabItem:{paddingTop:20,paddingBottom:20,minWidth:"auto"}}))(b)),f=a(257),x=a(261),B=a(260),C=a(256),k=a(258),N=a(259),w=a(25),S=a(9);const T=a(53);class A extends n.Component{constructor(...e){super(...e),this.state={loading:!0,dates:[],cdata:[],chartData:[]},this.handleChangeAmount=(e,t)=>{this.setState({amount:t,loading:!1}),this.updateValues()},this.handleChangePeriod=(e,t)=>{this.setState({period:t,loading:!1}),this.updateValues()},this.handleChangeStart=(e,t)=>{this.setState({start:t,loading:!1}),this.updateValues()}}loadFromAPI(){fetch("https://covidapi.info/api/v1/global/count",{method:"GET"}).then(e=>e.json()).then(e=>{this.parseJSONFormat(e)})}parseJSONFormat(e){for(var t=e.result,a=Object.keys(t).reverse(),n=Object.values(t).reverse(),r=[],o=0;o<20;o++){var i=new Date(a[o]);console.log(i);var l={date:i.getDate()+"-"+(i.getMonth()+1),confirmed:n[o].confirmed,deaths:n[o].deaths};r.push(l)}console.log(r),this.setState({dates:a,cdata:n,chartData:r.reverse()})}componentDidMount(){this.loadFromAPI()}render(){const e=this.props.classes,t=this.state,a=t.chartData,n=t.dates,o=t.cdata,i=this.props.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(y,{currentPath:i}),r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(u.a,{spacing:10,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(u.a,{container:!0,spacing:4,justify:"center"},r.a.createElement(u.a,{item:!0,xs:12,md:6},r.a.createElement(g.a,{className:e.paper,style:{position:"relative"}},r.a.createElement(w.c,{data:a},r.a.createElement(w.a,null),r.a.createElement(w.e,null),r.a.createElement(w.b,{name:"Confirmed",valueField:"confirmed",argumentField:"date",color:"#ffd700"}),r.a.createElement(S.a,null),r.a.createElement(w.d,{text:"Confirmed Cases"}),r.a.createElement(S.i,null)))),r.a.createElement(u.a,{item:!0,xs:12,md:6},r.a.createElement(g.a,{className:e.paper,style:{position:"relative"}},r.a.createElement(w.c,{data:a},r.a.createElement(w.a,null),r.a.createElement(w.e,null),r.a.createElement(w.b,{name:"Deaths",valueField:"deaths",argumentField:"date",color:"#cd7f32"}),r.a.createElement(S.a,null),r.a.createElement(w.d,{text:"Death cases"}),r.a.createElement(S.i,null))))),r.a.createElement(u.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement(C.a,{className:e.container},r.a.createElement(f.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(k.a,null,r.a.createElement(N.a,null,r.a.createElement(B.a,null,"Date"),r.a.createElement(B.a,null,"Confirmed"),r.a.createElement(B.a,null,"Deaths"))),r.a.createElement(x.a,null,n.map((e,t)=>r.a.createElement(N.a,{key:t},r.a.createElement(B.a,null,e),r.a.createElement(B.a,null,o[t].confirmed),r.a.createElement(B.a,null,o[t].deaths)))))))))))))}}var j=Object(m.f)(Object(d.a)(e=>({root:{flexGrow:1,backgroundColor:e.palette.grey[100],overflow:"hidden",background:"url(".concat(T,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",paddingBottom:200},grid:{width:1200,margin:"0 ".concat(e.spacing(2),"px"),[e.breakpoints.down("sm")]:{width:"calc(100% - 20px)"}},loadingState:{opacity:.05},paper:{padding:e.spacing(3),margin:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},rangeLabel:{display:"flex",justifyContent:"space-between",paddingTop:e.spacing(2)},topBar:{display:"flex",justifyContent:"space-between",alignItems:"center"},outlinedButtom:{textTransform:"uppercase",margin:e.spacing(1)},actionButtom:{textTransform:"uppercase",margin:e.spacing(1),width:152,height:36},blockCenter:{padding:e.spacing(2),textAlign:"center"},block:{padding:e.spacing(2)},loanAvatar:{display:"inline-block",verticalAlign:"center",width:16,height:16,marginRight:10,marginBottom:-2,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main},interestAvatar:{display:"inline-block",verticalAlign:"center",width:16,height:16,marginRight:10,marginBottom:-2,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.light},inlining:{display:"inline-block",marginRight:10},buttonBar:{display:"flex"},noBorder:{borderBottomStyle:"hidden"},mainBadge:{textAlign:"center",marginTop:e.spacing(4),marginBottom:e.spacing(4)}}))(A)),D=a(263),O=a(280),W=a(262),P=a(278),I=a(279),F=a(266),L=a(267),M=a(276),G=a(265),z=a(264),R=a(275),U=a(115),q=a.n(U);class J extends n.Component{render(){const e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},r.a.createElement(c.b,{className:e.link,to:{pathname:"/dashboard"}},r.a.createElement(q.a,null),r.a.createElement("span",{className:e.text},"Back to Dashboard"))))}}var K=Object(m.f)(Object(d.a)(e=>({link:{textDecoration:"none",color:"inherit"},text:{display:"inline-block",verticalAlign:"text-bottom"}}))(J));const Y=a(145),H=a(53),V=a(105);V.defaultFormat("0,000");class $ extends n.Component{constructor(...e){super(...e),this.state={activeStep:0,receivingAccount:"Home Account",repaimentAccount:"Saving Account",termsChecked:!1,labelWidth:0},this.handleNext=()=>{this.setState(e=>({activeStep:e.activeStep+1}))},this.handleBack=()=>{this.setState(e=>({activeStep:e.activeStep-1}))},this.handleReset=()=>{this.setState({activeStep:0})},this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleTerms=e=>{this.setState({termsChecked:e.target.checked})},this.goToDashboard=e=>{const t=this.props.location.search;this.props.history.push({pathname:"/dashboard",search:t})}}componentDidMount(){}stepActions(){return 3===this.state.activeStep?"Accept":4===this.state.activeStep?"Send":5===this.state.activeStep?"Done":"Next"}render(){const e=this.props.classes,t=this.props.location.search,a=t?Y.parse(t):{},n=["Info","Bank","Loan details","Terms","Confirm","Done"],o=this.state.activeStep;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(u.a,{spacing:10,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(K,null),r.a.createElement("div",{className:e.stepContainer},r.a.createElement("div",{className:e.bigContainer},r.a.createElement(O.a,{classes:{root:e.stepper},activeStep:o,alternativeLabel:!0},n.map(e=>r.a.createElement(W.a,{key:e},r.a.createElement(P.a,null,e))))),0===o&&r.a.createElement("div",{className:e.bigContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.topInfo},r.a.createElement("div",null,r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Information"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"General information about the service")),r.a.createElement("div",null,r.a.createElement(D.a,{variant:"outlined",size:"large",className:e.outlinedButtom},"Edit"))),r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"User"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"John Doe")),r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"City"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"Tokyo"))))),1===o&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:32}},r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Bank information"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Select account to receive the money")),r.a.createElement("div",{style:{marginBottom:32}},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Bank"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"N26")),r.a.createElement("div",null,r.a.createElement(h.a,{style:{textTransform:"uppercase",marginBottom:20},color:"secondary",gutterBottom:!0},"Receiving account"),r.a.createElement(z.a,{variant:"outlined",className:e.formControl},r.a.createElement(R.a,{value:this.state.receivingAccount,onChange:this.handleChange,input:r.a.createElement(I.a,{labelWidth:this.state.labelWidth,name:"receivingAccount"})},r.a.createElement(G.a,{value:""},r.a.createElement("em",null)),r.a.createElement(G.a,{value:"0297 00988200918"},"First account"),r.a.createElement(G.a,{value:"0235 00235233332"},"Second account"),r.a.createElement(G.a,{value:"1256 00864222212"},"Third account"))))))),2===o&&r.a.createElement("div",{className:e.bigContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.topInfo},r.a.createElement("div",null,r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Details"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"We need some details about any information")),r.a.createElement("div",null,r.a.createElement(D.a,{variant:"outlined",size:"large",className:e.outlinedButtom},"Edit"))),r.a.createElement("div",{className:e.borderColumn},r.a.createElement(u.a,{item:!0,container:!0,xs:12,style:{marginBottom:32}},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Amount"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},a?V(a.amount).format():"75,000"," ","DKK")),r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Total fees"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"0 DKK"))),r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Total price"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},a?V(a.interest).format():"6,600"," ","USD")),r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Total cost"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},a?V(a.cost).format():"81,600"," ","USD")))),r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,container:!0,xs:12,style:{marginBottom:32}},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"How often"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"Once a month"))),r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"When to start"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"01 February 2019")),r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"When it ends?"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"01 May 2019"))),r.a.createElement(u.a,{item:!0,container:!0,xs:12,style:{marginTop:24}},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(h.a,{style:{textTransform:"uppercase",marginBottom:20},color:"secondary",gutterBottom:!0},"Destination account"),r.a.createElement(z.a,{variant:"outlined",className:e.formControl},r.a.createElement(R.a,{value:this.state.repaimentAccount,onChange:this.handleChange,input:r.a.createElement(I.a,{labelWidth:this.state.labelWidth,name:"repaimentAccount"})},r.a.createElement(G.a,{value:""},r.a.createElement("em",null)),r.a.createElement(G.a,{value:"0297 00988200918"},"Account one"),r.a.createElement(G.a,{value:"0235 00235233332"},"Account two"),r.a.createElement(G.a,{value:"1256 00864222212"},"Other account"))))))),3===o&&r.a.createElement("div",{className:e.bigContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{style:{marginBottom:24}},r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Terms & Conditions"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Please read through and accept the terms & conditions")),r.a.createElement("div",{style:{height:330,padding:16,border:"2px solid #ccc",borderRadius:"3px",overflowY:"scroll"}},r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"1. Your agreement"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions."),r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"2. Privacy"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")),r.a.createElement(F.a,{row:!0},r.a.createElement(L.a,{control:r.a.createElement(M.a,{checked:this.state.termsChecked,onChange:this.handleTerms,value:"check"}),label:"I have read and understood the terms & conditions"})))),4===o&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Sign & confirm"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Sign and confirm your agreement"))))),(5===o||6===o)&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"subtitle1",gutterBottom:!0},"Congratulations"," ",r.a.createElement("span",{role:"img","aria-label":"conrats emoji"},"\ud83c\udf89")),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"We have now a positive response"),r.a.createElement(D.a,{fullWidth:!0,variant:"outlined"},"Download the service invoice or whatever"))))),r.a.createElement("div",{className:e.flexBar},5!==o&&r.a.createElement(D.a,{disabled:0===o,onClick:this.handleBack,className:e.backButton,size:"large"},"Back"),r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:5!==o?this.handleNext:this.goToDashboard,size:"large",disabled:3===this.state.activeStep&&!this.state.termsChecked},this.stepActions()))))))))}}var Q=Object(m.f)(Object(d.a)(e=>({root:{flexGrow:1,backgroundColor:e.palette.primary.A100,overflow:"hidden",background:"url(".concat(H,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",marginTop:10,padding:20,paddingBottom:200},grid:{margin:"0 ".concat(e.spacing(2),"px")},smallContainer:{width:"60%"},bigContainer:{width:"80%"},stepContainer:{display:"flex",flexDirection:"column",alignItems:"center"},stepGrid:{width:"80%"},backButton:{marginRight:e.spacing(1)},outlinedButtom:{textTransform:"uppercase",margin:e.spacing(1)},stepper:{backgroundColor:"transparent"},paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},topInfo:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:42},formControl:{width:"100%"},selectEmpty:{marginTop:e.spacing(2)},borderColumn:{borderBottom:"1px solid ".concat(e.palette.grey[100]),paddingBottom:24,marginBottom:24},flexBar:{marginTop:32,display:"flex",justifyContent:"center"}}))($)),X=a(284),Z=a(116),_=a.n(Z);class ee extends n.Component{render(){const e=this.props.classes;return r.a.createElement("div",{className:e.spaceTop},r.a.createElement(D.a,{className:e.primary},"Delete"),r.a.createElement(D.a,{variant:"contained",color:"primary",className:e.secondary},"Edit"))}}var te=Object(d.a)(e=>({primary:{marginRight:e.spacing(2)},secondary:{background:e.palette.secondary[100],color:"white"},spaceTop:{marginTop:20}}))(ee);class ae extends n.Component{render(){const e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.itemContainer},r.a.createElement("div",{className:e.avatarContainer},r.a.createElement(X.a,{className:e.avatar},r.a.createElement(_.a,null))),r.a.createElement("div",{className:e.baseline},r.a.createElement("div",{className:e.inline},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Months"),r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"4 month(s)")),r.a.createElement("div",{className:e.inline},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Creation date"),r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"01 February 2019")),r.a.createElement("div",{className:e.inline},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Amount"),r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"6,600 USD"))),r.a.createElement("div",{className:e.inlineRight},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Other Amount"),r.a.createElement(h.a,{variant:"h4",gutterBottom:!0},"Once a month"),r.a.createElement(te,null)))))}}var ne=Object(d.a)(e=>({paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},avatar:{margin:10,backgroundColor:e.palette.grey[200],color:e.palette.text.primary},avatarContainer:{[e.breakpoints.down("sm")]:{marginLeft:0,marginBottom:e.spacing(4)}},itemContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start",[e.breakpoints.down("sm")]:{display:"flex",flexDirection:"column",justifyContent:"center"}},baseline:{alignSelf:"baseline",marginLeft:e.spacing(4),[e.breakpoints.down("sm")]:{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center",width:"100%",marginTop:e.spacing(2),marginBottom:e.spacing(2),marginLeft:0}},inline:{display:"inline-block",marginLeft:e.spacing(4),[e.breakpoints.down("sm")]:{marginLeft:0}},inlineRight:{width:"30%",textAlign:"right",marginLeft:50,alignSelf:"flex-end",[e.breakpoints.down("sm")]:{width:"100%",margin:0,textAlign:"center"}},backButton:{marginRight:e.spacing(2)}}))(ae);class re extends n.Component{render(){const e=this.props,t=e.classes,a=e.title,n=e.subtitle;return r.a.createElement("div",{className:t.sectionContainer},r.a.createElement(h.a,{variant:"subtitle1",className:t.title},a),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},n))}}var oe=Object(m.f)(Object(d.a)(e=>({sectionContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},title:{fontWeight:"bold"}}))(re));const ie=a(53);class le extends n.Component{render(){const e=this.props.classes,t=this.props.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(y,{currentPath:t}),r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(u.a,{spacing:10,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(oe,{title:"Cards",subtitle:"One page with a list of a collection"}),r.a.createElement(ne,null))))))}}var se=Object(d.a)(e=>({root:{flexGrow:1,backgroundColor:e.palette.grey.A500,overflow:"hidden",background:"url(".concat(ie,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",marginTop:20,padding:20,paddingBottom:200},grid:{width:1e3}}))(le),ce=a(283),me=a(270),de=a(271),pe=a(269);class ge extends n.Component{render(){const e=this.props,t=e.classes,a=e.open,n=e.onClose;return r.a.createElement(ce.a,{open:a,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",scroll:"body"},r.a.createElement(pe.a,{id:"alert-dialog-title"}),r.a.createElement(me.a,null,r.a.createElement(de.a,{id:"alert-dialog-description"},r.a.createElement("div",{className:t.container},this.props.children))))}}var ue=Object(d.a)(e=>({container:{maxWidth:600,flexGrow:1,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"},bottomMargin:{marginBottom:e.spacing(2)}}))(ge);class he extends n.Component{render(){const e=this.props.classes;return r.a.createElement(ue,this.props,r.a.createElement("div",{className:e.bottomMargin},r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"This is a sample introduction")),r.a.createElement(D.a,{component:c.b,to:"/dashboard",className:e.bottomMargin,variant:"contained",onClick:this.handleClose,color:"primary",autoFocus:!0},"Getting started"),r.a.createElement(D.a,{component:c.b,to:"/dashboard",variant:"outlined",onClick:this.handleClose,color:"primary",autoFocus:!0},"Dashboard"))}}var Ee=Object(m.f)(Object(d.a)(e=>({container:{maxWidth:600,flexGrow:1,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"},bottomMargin:{marginBottom:e.spacing(2)}}))(he)),ve=a(117),be=a.n(ve),ye=a(281),fe=a(118);const xe=a(78),Be=Object(fe.autoPlay)(be.a),Ce=[{label:"A first label",description:"This is the first item on the label",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"A second label",description:"This is the second item on the label",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"A third label",description:"This is the third item on the label",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"A fifth label",description:"This is the fifth item on the label",imgPath:"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Other label",description:"This is other label",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];class ke extends n.Component{constructor(...e){super(...e),this.state={activeStep:0},this.handleNext=()=>{this.setState(e=>({activeStep:e.activeStep+1}))},this.handleBack=()=>{this.setState(e=>({activeStep:e.activeStep-1}))},this.handleStepChange=e=>{this.setState({activeStep:e})}}render(){const e=this.props.classes,t=Ce.length,a=this.state.activeStep;return r.a.createElement(ue,this.props,r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.gutterBottom},r.a.createElement("img",{width:100,src:xe,alt:""})),r.a.createElement("div",null,r.a.createElement(Be,{axis:"x",index:a,onChangeIndex:this.handleStepChange,enableMouseEvents:!0},Ce.map((t,n)=>r.a.createElement("div",{key:t.label},Math.abs(a-n)<=2?r.a.createElement("img",{className:e.img,src:t.imgPath,alt:t.label}):null))),r.a.createElement(ye.a,{steps:t,position:"static",activeStep:a,className:e.mobileStepper,nextButton:r.a.createElement(D.a,{size:"small",onClick:this.handleNext,disabled:a===t-1},"Next"),backButton:r.a.createElement(D.a,{size:"small",onClick:this.handleBack,disabled:0===a},"Back")})),r.a.createElement("div",{className:e.stepsContainer},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},Ce[a].label),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},Ce[a].description)),r.a.createElement("div",null,r.a.createElement(D.a,{component:c.b,to:"/dashboard",variant:"contained",onClick:this.handleClose,color:"primary",autoFocus:!0},"Getting started"))))}}var Ne=Object(m.f)(Object(d.a)(e=>({container:{maxWidth:600,flexGrow:1,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"},stepsContainer:{marginLeft:72,textAlign:"left",marginTop:20,height:65},bottomMargin:{marginBottom:e.spacing(2)}}))(ke));const we=a(53);class Se extends n.Component{constructor(...e){super(...e),this.state={learnMoredialog:!1,getStartedDialog:!1},this.openDialog=e=>{this.setState({learnMoredialog:!0})},this.dialogClose=e=>{this.setState({learnMoredialog:!1})},this.openGetStartedDialog=e=>{this.setState({getStartedDialog:!0})},this.closeGetStartedDialog=e=>{this.setState({getStartedDialog:!1})}}componentDidMount(){}render(){const e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(y,null),r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(u.a,{spacing:4,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.box},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"First title"),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},"A first title style ",r.a.createElement("br",null)," with two lines")),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(D.a,{color:"primary",variant:"contained",className:e.actionButtom},"Learn more")))),r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.box},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"Another box"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"A default box")),r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(D.a,{color:"primary",variant:"contained",className:e.actionButtom},"Learn more")))),r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{className:e.box},r.a.createElement(h.a,{style:{textTransform:"uppercase"},color:"secondary",gutterBottom:!0},"A box with a carousel"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"If you click in Getting Started, you will see a nice carousel")),r.a.createElement("div",{className:e.alignRight},r.a.createElement(D.a,{onClick:this.openDialog,variant:"outlined",className:e.actionButtom},"Learn more"),r.a.createElement(D.a,{onClick:this.openGetStartedDialog,color:"primary",variant:"contained",className:e.actionButtom},"Dashboard")))),r.a.createElement(u.a,{container:!0,item:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement("div",{className:e.box},r.a.createElement(h.a,{color:"secondary",gutterBottom:!0},"Full box"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"This is an example of a full-width box")),r.a.createElement("div",{className:e.alignRight},r.a.createElement(D.a,{color:"primary",variant:"contained",className:e.actionButtom},"Learn more")))))))),r.a.createElement(Ne,{open:this.state.learnMoredialog,onClose:this.dialogClose}),r.a.createElement(Ee,{open:this.state.getStartedDialog,onClose:this.closeGetStartedDialog})))}}var Te=Object(m.f)(Object(d.a)(e=>({root:{flexGrow:1,backgroundColor:e.palette.grey[100],overflow:"hidden",background:"url(".concat(we,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",paddingBottom:200},grid:{width:1200,marginTop:40,[e.breakpoints.down("sm")]:{width:"calc(100% - 20px)"}},paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},rangeLabel:{display:"flex",justifyContent:"space-between",paddingTop:e.spacing(2)},topBar:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:32},outlinedButtom:{textTransform:"uppercase",margin:e.spacing(1)},actionButtom:{textTransform:"uppercase",margin:e.spacing(1),width:152},blockCenter:{padding:e.spacing(2),textAlign:"center"},block:{padding:e.spacing(2)},box:{marginBottom:40,height:65},inlining:{display:"inline-block",marginRight:10},buttonBar:{display:"flex"},alignRight:{display:"flex",justifyContent:"flex-end"},noBorder:{borderBottomStyle:"hidden"},loadingState:{opacity:.05},loadingMessage:{position:"absolute",top:"40%",left:"40%"}}))(Se)),Ae=a(252),je=a(192),De=a(272),Oe=a(253),We=a(92),Pe=a.n(We),Ie=a(273),Fe=a(268);const Le=a(53),Me=a(78);a(105).defaultFormat("0");class Ge extends n.Component{constructor(...e){super(...e),this.state={activeStep:0,receivingAccount:"",termsChecked:!1,loading:!0,labelWidth:0},this.handleNext=()=>{this.setState(e=>({activeStep:e.activeStep+1})),2===this.state.activeStep&&setTimeout(()=>this.props.history.push("/dashboard"),5e3)},this.handleBack=()=>{this.setState(e=>({activeStep:e.activeStep-1}))},this.handleReset=()=>{this.setState({activeStep:0})},this.handleChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleTerms=e=>{this.setState({termsChecked:e.target.checked})}}stepActions(){return 0===this.state.activeStep?"Sign in":1===this.state.activeStep?"Next":2===this.state.activeStep?"Accept":"Next"}render(){const e=this.props.classes,t=["User","Signin","Permission"],a=this.state,n=a.activeStep,o=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(K,null),r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(u.a,{spacing:10,alignItems:"center",justify:"center",container:!0,className:e.grid},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",{className:e.logo},r.a.createElement("img",{width:100,height:100,src:Me,alt:""})),r.a.createElement("div",{className:e.stepContainer},r.a.createElement("div",{className:e.stepGrid},r.a.createElement(O.a,{classes:{root:e.stepper},activeStep:n,alternativeLabel:!0},t.map(e=>r.a.createElement(W.a,{key:e},r.a.createElement(P.a,null,e))))),0===n&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:32}},r.a.createElement(h.a,{variant:"subtitle1",style:{fontWeight:"bold"},gutterBottom:!0},"Select"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"A item to select")),r.a.createElement("div",null,r.a.createElement(h.a,{style:{textTransform:"uppercase",marginBottom:20},color:"secondary",gutterBottom:!0},"First options"),r.a.createElement(z.a,{variant:"outlined",className:e.formControl},r.a.createElement(R.a,{value:this.state.receivingAccount,onChange:this.handleChange,input:r.a.createElement(I.a,{labelWidth:this.state.labelWidth,name:"receivingAccount"})},r.a.createElement(G.a,{value:""},r.a.createElement("em",null,"Select some option")),r.a.createElement(G.a,{value:"first"},"Option 1"),r.a.createElement(G.a,{value:"second"},"Other option"))))))),1===n&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement(u.a,{item:!0,container:!0,xs:12},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"subtitle1",gutterBottom:!0},"Sign & confirm"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Sign and confirm loan agreement"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"One text to explain that"))))),2===n&&r.a.createElement("div",{className:e.smallContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",null,r.a.createElement("div",{style:{marginBottom:32}},r.a.createElement(h.a,{variant:"subtitle1",gutterBottom:!0},"Permissions"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"We need some permissions to proceed.")),r.a.createElement("div",null,r.a.createElement(h.a,{color:"secondary",gutterBottom:!0},"Accounts"),r.a.createElement(Ae.a,{component:"nav"},r.a.createElement(je.a,null,r.a.createElement(De.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Oe.a,{inset:!0,primary:"0297 00988200918"})),r.a.createElement(je.a,null,r.a.createElement(De.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Oe.a,{inset:!0,primary:"0297 00988200920"}))))))),3===n&&r.a.createElement("div",{className:e.bigContainer},r.a.createElement(g.a,{className:e.paper},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:380,textAlign:"center"}},r.a.createElement("div",{style:{marginBottom:32}},r.a.createElement(h.a,{variant:"h6",style:{fontWeight:"bold"},gutterBottom:!0},"Collecting your data"),r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"We are processing your request")),r.a.createElement("div",null,r.a.createElement(Fe.a,{in:o,style:{transitionDelay:o?"800ms":"0ms"},unmountOnExit:!0},r.a.createElement(Ie.a,{style:{marginBottom:32,width:100,height:100}}))))))),3!==n&&r.a.createElement("div",{className:e.buttonBar},2!==n?r.a.createElement(D.a,{disabled:0===n,onClick:this.handleBack,className:e.backButton,size:"large"},"Back"):r.a.createElement(D.a,{disabled:0===n,onClick:this.handleBack,className:e.backButton,size:"large"},"Cancel"),r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:this.handleNext,size:"large",style:this.state.receivingAccount.length?{background:e.button,color:"white"}:{},disabled:!this.state.receivingAccount.length},this.stepActions()))))))))}}var ze=Object(m.f)(Object(d.a)(e=>({root:{flexGrow:1,backgroundColor:e.palette.secondary.A100,overflow:"hidden",background:"url(".concat(Le,") no-repeat"),backgroundSize:"cover",backgroundPosition:"0 400px",marginTop:10,padding:20,paddingBottom:500},grid:{margin:"0 ".concat(e.spacing(2),"px")},smallContainer:{width:"60%"},bigContainer:{width:"80%"},logo:{marginBottom:24,display:"flex",justifyContent:"center"},stepContainer:{display:"flex",flexDirection:"column",alignItems:"center"},stepGrid:{width:"80%"},buttonBar:{marginTop:32,display:"flex",justifyContent:"center"},button:{backgroundColor:e.palette.primary.A100},backButton:{marginRight:e.spacing(1)},outlinedButtom:{textTransform:"uppercase",margin:e.spacing(1)},stepper:{backgroundColor:"transparent"},paper:{padding:e.spacing(3),textAlign:"left",color:e.palette.text.secondary},topInfo:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:42},formControl:{width:"100%"},selectEmpty:{marginTop:e.spacing(2)}}))(Ge));class Re extends n.Component{componentDidUpdate(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}render(){return this.props.children}}var Ue=Object(m.f)(Re),qe=e=>r.a.createElement(c.a,null,r.a.createElement(Ue,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:j}),r.a.createElement(m.a,{exact:!0,path:"/main",component:Te}),r.a.createElement(m.a,{exact:!0,path:"/signup",component:ze}),r.a.createElement(m.a,{exact:!0,path:"/wizard",component:Q}),r.a.createElement(m.a,{exact:!0,path:"/cards",component:se})))),Je=a(74),Ke=a(73);const Ye=Object(s.a)({palette:{secondary:{main:Je.a[900]},primary:{main:Ke.a[700]}},typography:{fontFamily:['"Lato"',"sans-serif"].join(",")}});class He extends n.Component{render(){return r.a.createElement("div",null,r.a.createElement(l.a,{theme:Ye},r.a.createElement(qe,null)))}}var Ve=He;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},53:function(e,t,a){e.exports=a.p+"static/media/shape.208f3d38.svg"},78:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[134,1,2]]]);
//# sourceMappingURL=main.6a0939a2.chunk.js.map