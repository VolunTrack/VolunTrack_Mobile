(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{296:function(e,t,n){"use strict";n.r(t);var a=n(36),r=n(472),i=n(0),o=n(469),c=n(5),l=n.n(c),s=n(6),u=n(39),d=n(52),f=n(460),g=n(19),j=n.n(g),h=n(21),m=n(11),b=n(38),x=n(458),A=n(10),p=m.default.create({backgroundStyle:{backgroundColor:"#DCDCDC",height:50,borderRadius:20,marginVertical:60,marginHorizontal:40,flexDirection:"row",marginBottom:10},inputStyle:{flex:1,fontSize:16,marginHorizontal:15},iconStyle:{fontSize:25,alignSelf:"center",marginHorizontal:10}}),O=function(e){var t=e.term,n=e.onTermChange,a=e.onTermSubmit;return Object(A.jsxs)(s.default,{style:p.backgroundStyle,children:[Object(A.jsx)(b.default,{autoCapitalize:"none",autoCorrect:!1,style:p.inputStyle,placeholder:"Search",placeholderTextColor:"gray",value:t,onChangeText:n,onEndEditing:a}),Object(A.jsx)(x.default,{name:"search",style:p.iconStyle})]})},y=m.default.create({buttonContainer:{elevation:8,backgroundColor:"#C9D6DF",borderRadius:30,paddingVertical:10,paddingHorizontal:12,alignSelf:"center",marginVertical:40},buttonText:{fontSize:18,color:"#000000",marginVertical:10,marginHorizontal:30,alignSelf:"center",fontFamily:"HelveticaNeue"}}),w=Object(a.withNavigation)((function(e){var t=e.title,n=e.navigation;return Object(A.jsx)(d.default,{onPress:function(){return n.navigate("Todo")},style:y.buttonContainer,children:Object(A.jsxs)(h.default,{style:y.buttonText,children:[" ",t," "]})})})),C=n(42),v=n.n(C),k=n(470).default.create({baseURL:"https://cors.zimjs.com/https://api.yelp.com/v3/businesses",headers:{Authorization:"Bearer J8IlQ6CHenk7D59VQbZcqDqiLkhXq0dPFkyiihu2ASMHCl8QlffPUi3jSN0eTOs2rIbZx7S4ajh1yneMnzmQwGOit5Tp26yL9JBMjFXdAJ5fzczET3CDuZhP7zV5Y3Yx"}}),B=function(){var e=Object(i.useState)([]),t=j()(e,2),n=t[0],a=t[1],r=Object(i.useState)(""),o=j()(r,2),c=o[0],l=(o[1],function(){var e=v()((function*(e){console.log("Starting search!"),console.log(e),e||(e=null);try{var t=yield k.get("/search",{params:{limit:30,location:"toronto",term:e,categories:"nonprofit, All"}});a(t.data.businesses)}catch(n){console.log("Something went wrong...")}}));return function(t){return e.apply(this,arguments)}}());return Object(i.useEffect)((function(){l("")}),[]),[l,n,c]},I=m.default.create({topText:{fontSize:15,alignSelf:"center",marginTop:100,color:"#1E2022",fontFamily:"HelveticaNeue"},bottomText:{fontSize:15,alignSelf:"center",marginTop:5,marginBottom:120,color:"#1E2022",fontFamily:"HelveticaNeue"}}),F=Object(a.withNavigation)((function(e){var t=e.navigation,n=Object(i.useState)(""),a=j()(n,2),r=a[0],o=a[1],c=B(),l=j()(c,3);l[0],l[1],l[2];return Object(A.jsxs)(s.default,{children:[Object(A.jsx)(O,{term:r,onTermChange:o,onTermSubmit:function(){t.navigate("Menu",r)}}),Object(A.jsx)(h.default,{style:I.topText,children:"It looks like you haven't added any"}),Object(A.jsx)(h.default,{style:I.bottomText,children:"Volunteering tasks yet..."}),Object(A.jsx)(w,{title:"Create a New Task!"})]})})),S=n(56),z=n(66),R=m.default.create({container:{marginLeft:15},image:{width:250,height:120,borderRadius:4,marginBottom:5},name:{marginTop:3,fontWeight:"bold",fontFamily:"HelveticaNeue"}}),T=function(e){var t=e.result;return Object(A.jsxs)(s.default,{style:R.container,children:[Object(A.jsx)(u.default,{style:R.image,source:{uri:t.image_url}}),Object(A.jsx)(h.default,{style:R.name,children:t.name}),Object(A.jsx)(h.default,{children:t.location.address1}),Object(A.jsxs)(h.default,{children:[t.rating," Stars, ",t.review_count," Reviews"]}),Object(A.jsxs)(h.default,{children:["Phone: ",t.display_phone]})]})},E=m.default.create({title:{fontSize:18,fontWeight:"bold",marginLeft:20,marginBottom:5,fontFamily:"HelveticaNeue"},container:{marginBottom:5},flatlist:{marginLeft:2}}),D=Object(a.withNavigation)((function(e){var t=e.title,n=e.results,a=e.navigation;return n.length?Object(A.jsxs)(s.default,{style:E.container,children:[Object(A.jsx)(h.default,{style:E.title,children:t}),Object(A.jsx)(h.default,{}),Object(A.jsx)(z.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,data:n,keyExtractor:function(e){return e.id},style:E.flatlist,renderItem:function(e){var t=e.item;return Object(A.jsx)(d.default,{onPress:function(){return a.navigate("Results",{id:t.id})},children:Object(A.jsx)(T,{result:t})})}})]}):null})),P=(m.default.create({}),Object(a.withNavigation)((function(e){var t=e.navigation,n=e.route.params,a=Object(i.useState)(!0),r=j()(a,2),o=r[0],c=r[1],l=Object(i.useState)(n),s=j()(l,2),u=s[0],d=s[1],f=B(),g=j()(f,3),m=g[0],b=g[1],x=g[2],p=function(e){return b.filter((function(t){return t.rating===e}))};t.addListener("focus",(function(){c(!0),d(n)}));return n&&o&&(m(n),c(!1)),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(O,{term:u,onTermChange:d,onTermSubmit:function(){return m(u)}}),x?Object(A.jsx)(h.default,{children:x}):null,Object(A.jsx)(h.default,{}),Object(A.jsxs)(S.default,{children:[Object(A.jsx)(D,{results:p(5),title:"Excellent oppurtunities! - 5 stars"}),Object(A.jsx)(h.default,{}),Object(A.jsx)(D,{results:p(4),title:"Great oppurtunities! - 4 stars"}),Object(A.jsx)(h.default,{}),Object(A.jsx)(D,{results:p(3),title:"Good oppurtunities! - 3 stars"})]})]})}))),N=n(89),J=m.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),H=function(e){e.navigation;return Object(A.jsxs)(s.default,{style:J.container,children:[Object(A.jsx)(h.default,{children:"Notifications!"}),Object(A.jsx)(N.default,{title:"Click Here!",onPress:function(){return alert("Button Clicked!")}})]})},q=n(273);function U(){return Object(A.jsx)(q.default,{style:K.container,children:Object(A.jsxs)(S.default,{showsVerticalScrollIndicator:!1,children:[Object(A.jsx)(s.default,{style:K.titleBar}),Object(A.jsx)(s.default,{style:{alignSelf:"center"},children:Object(A.jsx)(s.default,{style:K.profileImage,children:Object(A.jsx)(u.default,{source:{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"},style:K.image,resizeMode:"center"})})}),Object(A.jsxs)(s.default,{style:K.infoContainer,children:[Object(A.jsx)(h.default,{style:[K.text,{fontWeight:"200",fontSize:36}],children:"Your Profile!"}),Object(A.jsx)(h.default,{style:[K.text,{color:"#AEB5BC",fontSize:14}],children:"VolunTrack User! (Demo)"})]}),Object(A.jsxs)(s.default,{style:{marginTop:32},children:[Object(A.jsxs)(S.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,children:[Object(A.jsx)(s.default,{style:K.mediaImageContainer,children:Object(A.jsx)(u.default,{source:n(428),style:K.image})}),Object(A.jsx)(s.default,{style:K.mediaImageContainer,children:Object(A.jsx)(u.default,{source:n(429),style:K.image})}),Object(A.jsx)(s.default,{style:K.mediaImageContainer,children:Object(A.jsx)(u.default,{source:n(430),style:K.image})})]}),Object(A.jsx)(s.default,{style:K.mediaCount,children:Object(A.jsx)(h.default,{style:[K.text,{fontSize:18,color:"#DFD8C8",fontWeight:"300",textTransform:"uppercase"}],children:"Media"})})]}),Object(A.jsx)(h.default,{style:[K.subText,K.recent],children:"Recent Activity: "}),Object(A.jsxs)(s.default,{style:{alignItems:"center"},children:[Object(A.jsxs)(s.default,{style:K.recentItem,children:[Object(A.jsx)(s.default,{style:K.activityIndicator}),Object(A.jsx)(s.default,{style:{width:250},children:Object(A.jsxs)(h.default,{style:[K.text,{color:"#41444B",fontWeight:"300"}],children:["Added a",Object(A.jsx)(h.default,{style:{fontWeight:"400"},children:" new volunteering task!"})]})})]}),Object(A.jsxs)(s.default,{style:K.recentItem,children:[Object(A.jsx)(s.default,{style:K.activityIndicator}),Object(A.jsx)(s.default,{style:{width:250},children:Object(A.jsxs)(h.default,{style:[K.text,{color:"#41444B",fontWeight:"300"}],children:["Added a",Object(A.jsx)(h.default,{style:{fontWeight:"400"},children:" new volunteering task!"})]})})]})]})]})})}var K=m.default.create({container:{flex:1,backgroundColor:"#FFF"},text:{fontFamily:"HelveticaNeue",color:"#52575D"},image:{flex:1,height:void 0,width:void 0},titleBar:{flexDirection:"row",justifyContent:"space-between",marginTop:24,marginHorizontal:16},subText:{fontSize:12,color:"#AEB5BC",textTransform:"uppercase",fontWeight:"500"},profileImage:{width:200,height:200,borderRadius:100,overflow:"hidden"},dm:{backgroundColor:"#41444B",position:"absolute",top:20,width:40,height:40,borderRadius:20,alignItems:"center",justifyContent:"center"},active:{backgroundColor:"#34FFB9",position:"absolute",bottom:28,left:10,padding:4,height:20,width:20,borderRadius:10},add:{backgroundColor:"#41444B",position:"absolute",bottom:0,right:0,width:60,height:60,borderRadius:30,alignItems:"center",justifyContent:"center"},infoContainer:{alignSelf:"center",alignItems:"center",marginTop:16},statsContainer:{flexDirection:"row",alignSelf:"center",marginTop:32},statsBox:{alignItems:"center",flex:1},mediaImageContainer:{width:180,height:200,borderRadius:12,overflow:"hidden",marginHorizontal:10},mediaCount:{backgroundColor:"#41444B",position:"absolute",top:"50%",marginTop:-120,marginLeft:10,width:100,height:50,alignItems:"center",justifyContent:"center",borderRadius:12,shadowColor:"rgba(0, 0, 0, 0.38)",shadowOffset:{width:0,height:10},shadowRadius:20,shadowOpacity:1},recent:{marginLeft:65,marginTop:32,marginBottom:10,fontSize:10},recentItem:{flexDirection:"row",alignItems:"flex-start",marginBottom:16},activityIndicator:{backgroundColor:"#CABFAB",padding:4,height:12,width:12,borderRadius:6,marginTop:3,marginRight:20}}),L=m.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),G=function(e){e.navigation;return Object(A.jsxs)(s.default,{style:L.container,children:[Object(A.jsx)(h.default,{children:"Comming Soon!"}),Object(A.jsx)(N.default,{title:"Click Here",onPress:function(){return alert("Coming soon!")}})]})},M=n(17),Q=n.n(M),Y=n(70),V=n(274),W=n(459),X=m.default.create({container:{borderColor:"#fff",backgroundColor:"#52616B",borderWidth:1,marginHorizontal:20,borderRadius:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:10,position:"absolute",bottom:20},inputField:{color:"#fff",height:50,flex:1,marginLeft:0},button:{height:30,width:30,borderRadius:5,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),Z=function(e){var t=Object(i.useState)(),n=j()(t,2),a=n[0],r=n[1];return Object(A.jsxs)(V.default,{behavior:"ios"===Platform.OS?"padding":"height",style:X.container,children:[Object(A.jsx)(b.default,{style:X.inputField,value:a,onChangeText:function(e){return r(e)},placeholder:" Write a task",placeholderTextColor:"#fff"}),Object(A.jsx)(d.default,{onPress:function(){return t=a,e.addTask(t),void r(null);var t},children:Object(A.jsx)(s.default,{style:X.button,children:Object(A.jsx)(W.default,{name:"keyboard-arrow-up",size:24,color:"black"})})})]})},_=m.default.create({container:{flexDirection:"row",marginHorizontal:20},indexContainer:{backgroundColor:"#52616B",borderRadius:12,marginRight:10,alignItems:"center",justifyContent:"center",width:50,height:50},index:{color:"#fff",fontSize:20},taskContainer:{backgroundColor:"#52616B",borderRadius:12,flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1,paddingHorizontal:10,paddingVertical:5,minHeight:50},task:{color:"#fff",width:"90%",fontSize:16},delete:{marginLeft:10}}),$=function(e){return Object(A.jsxs)(s.default,{style:_.container,children:[Object(A.jsx)(s.default,{style:_.indexContainer,children:Object(A.jsx)(h.default,{style:_.index,children:e.index})}),Object(A.jsxs)(s.default,{style:_.taskContainer,children:[Object(A.jsx)(h.default,{style:_.task,children:e.task}),Object(A.jsx)(d.default,{onPress:function(){return e.deleteTask()},children:Object(A.jsx)(W.default,{style:_.delete,name:"delete",size:18,color:"#fff"})})]})]})},ee=m.default.create({buttonContainer:{elevation:8,backgroundColor:"#C9D6DF",borderRadius:10,paddingVertical:0,paddingHorizontal:0,alignSelf:"center",marginVertical:10},buttonText:{fontSize:15,color:"#000000",marginVertical:10,marginHorizontal:30,alignSelf:"center",fontFamily:"HelveticaNeue"}}),te=Object(a.withNavigation)((function(e){var t=e.title,n=e.navigation;return Object(A.jsx)(d.default,{onPress:function(){return n.navigate("Navigator")},style:ee.buttonContainer,children:Object(A.jsxs)(h.default,{style:ee.buttonText,children:[" ",t," "]})})})),ne=m.default.create({container:{flex:1},heading:{color:"#1E2022",fontSize:20,fontWeight:"600",marginTop:60,marginBottom:10,marginLeft:20},scrollView:{marginBottom:70},taskContainer:{marginTop:20}}),ae=function(){var e=Object(i.useState)([]),t=j()(e,2),n=t[0],a=t[1];return Object(A.jsxs)(s.default,{style:ne.container,children:[Object(A.jsx)(h.default,{style:ne.heading,children:"TODO LIST"}),Object(A.jsx)(te,{title:"Go back"}),Object(A.jsx)(S.default,{style:ne.scrollView,children:n.map((function(e,t){return Object(A.jsx)(s.default,{style:ne.taskContainer,children:Object(A.jsx)($,{index:t+1,task:e,deleteTask:function(){return e=t,void a(n.filter((function(t,n){return n!=e})));var e}})},t)}))}),Object(A.jsx)(Z,{addTask:function(e){null!=e&&(a([].concat(Q()(n),[e])),Y.default.dismiss())}})]})},re=n(3),ie=n.n(re),oe=n(4),ce=n.n(oe),le=n(7),se=n.n(le),ue=n(9),de=n.n(ue),fe=n(1),ge=n.n(fe);function je(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ge()(e);if(t){var r=ge()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return de()(this,n)}}var he=function(e){se()(n,e);var t=je(n);function n(e){var a;return ie()(this,n),(a=t.call(this,e)).state={data:[{id:3,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 1",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:"https://via.placeholder.com/100x100/FFB6C1/000000"},{id:2,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 2",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:"https://via.placeholder.com/100x100/20B2AA/000000"},{id:4,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 3",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:""},{id:5,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 4",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:""},{id:1,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 5",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:"https://via.placeholder.com/100x100/7B68EE/000000"},{id:6,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 6",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:""},{id:7,image:"https://www.banq.qc.ca/sites/default/files/2022-06/icone_profil_generique.jpg",name:"Demo 7",text:"As a regular classroom volunteer you will work under the guidance of our teachers and the therapy staff and be an important part of the classroom team. ",attachment:""}]},a}return ce()(n,[{key:"render",value:function(){return Object(A.jsx)(z.default,{style:me.root,data:this.state.data,extraData:this.state,ItemSeparatorComponent:function(){return Object(A.jsx)(s.default,{style:me.separator})},keyExtractor:function(e){return e.id},renderItem:function(e){var t,n=e.item,a=Object(A.jsx)(s.default,{});return n.attachment&&(t=me.mainContent,a=Object(A.jsx)(u.default,{style:me.attachment,source:{uri:n.attachment}})),Object(A.jsxs)(s.default,{style:me.container,children:[Object(A.jsx)(u.default,{source:{uri:n.image},style:me.avatar}),Object(A.jsxs)(s.default,{style:me.content,children:[Object(A.jsxs)(s.default,{style:t,children:[Object(A.jsxs)(s.default,{style:me.text,children:[Object(A.jsx)(h.default,{style:me.name,children:n.name}),Object(A.jsx)(h.default,{style:me.description,children:n.text})]}),Object(A.jsx)(h.default,{style:me.timeAgo,children:"2 hours ago"})]}),a]})]})}})}}]),n}(i.Component),me=m.default.create({root:{backgroundColor:"#FFFFFF"},container:{padding:16,flexDirection:"row",borderBottomWidth:1,borderColor:"#FFFFFF",alignItems:"flex-start"},avatar:{width:50,height:50,borderRadius:25},text:{marginBottom:5,flexDirection:"row",flexWrap:"wrap",fontFamily:"HelveticaNeue",color:"#52575D"},content:{flex:1,marginLeft:16,marginRight:0,fontFamily:"HelveticaNeue"},mainContent:{marginRight:60,fontFamily:"HelveticaNeue"},img:{height:50,width:50,margin:0},attachment:{position:"absolute",right:0,height:50,width:50},separator:{height:1,backgroundColor:"#CCCCCC"},timeAgo:{fontSize:12,color:"#696969"},name:{fontSize:16,fontFamily:"HelveticaNeue",color:"#52575D"},description:{fontFamily:"HelveticaNeue",marginTop:5}});function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var xe=Object(f.default)(),Ae=function(e){var t=e.children,n=e.onPress;return Object(A.jsx)(d.default,{style:{top:-10,justifyConent:"center",alignItems:"center"},onPress:n,children:Object(A.jsx)(s.default,{style:{width:50,height:50,borderRadius:35},children:t})})},pe=function(){return Object(A.jsxs)(xe.Navigator,{screenOptions:{tabBarShowLabel:!1,tabBarStyle:[{display:"flex"},null]},children:[Object(A.jsx)(xe.Screen,{name:"VolunTrack",component:F,options:{tabBarIcon:function(e){var t=e.focused;return Object(A.jsx)(s.default,{style:{alignItems:"center",justifyContent:"center",top:10},children:Object(A.jsx)(u.default,{source:n(436),resizeMode:"contain",style:{width:30,height:30,tintColor:t?"#2F4F4F":"#748c94"}})})}}}),Object(A.jsx)(xe.Screen,{name:"Menu",component:P,options:{tabBarIcon:function(e){var t=e.focused;return Object(A.jsx)(s.default,{style:{alignItems:"center",justifyContent:"center",top:10},children:Object(A.jsx)(u.default,{source:n(437),resizeMode:"contain",style:{width:30,height:30,tintColor:t?"#2F4F4F":"#748c94"}})})}}}),Object(A.jsx)(xe.Screen,{name:"Post",component:G,options:{tabBarIcon:function(e){e.focused;return Object(A.jsx)(u.default,{source:n(438),resizeMode:"contain",style:{width:40,height:40,tintColor:"#2F4F4F"}})},tabBarButton:function(e){return Object(A.jsx)(Ae,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}}}),Object(A.jsx)(xe.Screen,{name:"Mail",component:he,options:{tabBarIcon:function(e){var t=e.focused;return Object(A.jsx)(s.default,{style:{alignItems:"center",justifyContent:"center",top:10},children:Object(A.jsx)(u.default,{source:n(439),resizeMode:"contain",style:{width:30,height:30,tintColor:t?"#2F4F4F":"#748c94"}})})}}}),Object(A.jsx)(xe.Screen,{name:"User",component:U,options:{tabBarIcon:function(e){var t=e.focused;return Object(A.jsx)(s.default,{style:{alignItems:"center",justifyContent:"center",top:10},children:Object(A.jsx)(u.default,{source:n(440),resizeMode:"contain",style:{width:30,height:30,tintColor:t?"#2F4F4F":"#748c94"}})})}}})]})},Oe=function(){return Object(A.jsx)(o.default,{children:Object(A.jsx)(pe,{})})},ye=m.default.create({container:{flex:1,alignItems:"center",justifyContent:"center"}}),we=function(e){e.navigation;return Object(A.jsxs)(s.default,{style:ye.container,children:[Object(A.jsx)(h.default,{children:"Create Screen!"}),Object(A.jsx)(N.default,{title:"Click Here!",onPress:function(){return alert("Swipe right to return!")}})]})},Ce=n(46),ve=n.n(Ce),ke=m.default.create({image:{marginTop:10,height:200,width:300},container:{marginTop:50}}),Be=function(e){var t=e.navigation,n=Object(i.useState)(null),a=j()(n,2),r=a[0],o=a[1],c=t.getParam("id");return Object(i.useEffect)((function(){!function(e){var t;ve.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ve.a.awrap(k.get("/"+e));case 2:t=n.sent,o(t.data);case 4:case"end":return n.stop()}}),null,null,null,Promise)}(c)}),[]),r?Object(A.jsxs)(s.default,{children:[Object(A.jsx)(h.default,{style:ke.container,children:r.name}),Object(A.jsx)(z.default,{data:r.photos,keyExtractor:function(e){return e},renderItem:function(e){var t=e.item;return Object(A.jsx)(u.default,{style:ke.image,source:{uri:t}})}}),Object(A.jsx)(h.default,{style:ke.container,children:"Apply today! For more info:"}),Object(A.jsx)(h.default,{children:r.url})]}):null},Ie=Object(r.default)({Home:F,Create:we,Menu:P,Mail:H,User:U,Post:G,Navigator:Oe,Todo:ae,Results:Be},{initialRouteName:"Navigator",defaultNavigationOptions:{headerShown:!1}});t.default=Object(a.createAppContainer)(Ie)},308:function(e,t,n){e.exports=n(447)},428:function(e,t,n){e.exports=n.p+"static/media/media1.f713d6be.jpg"},429:function(e,t,n){e.exports=n.p+"static/media/media2.03cbf734.jpg"},430:function(e,t,n){e.exports=n.p+"static/media/media3.26ff96af.jpg"},436:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVRoge3XsWvUYBzG8Y9yKIJVEXQoDjd2EVzsJDgIgpubbnVydtM/wdWxq5MgiCCO4mBBKAguLuLiIqIUWpCj2FodLm/PxrSXq7nkZ32/8EzJvXm+5PJ7EzK16ONlkX7HXfbNNazgZ5FVXO+00YQcwl38MJJI2cJ9HO6sXU1O4Ik/Bcp5jtMddRzLBXwwXiLlIy6W1tjt3NZYwGCPIrtlUPw2cQffK86bOkfxYB8C5TzEsWLNS/jUpsg5vG5AIuWN0Yg+gxdtiFzG5wYlUr7ianGNnuGE25qGQBqtm1OQSNnEveJacKNpiRk8nqJAOc9wqmmJObxrUSLlPc43JXET3zqQSBng1t8IpIetK4FyFnFkUomzdo6/KFnCbF2Jqg0pUr7gyjiJ26pfEaJlw3AbSCN6m+N4FKDgpHmKk7+LLBcH1gKUq5vUdZnRB84G3mK+fKsCM2/4frZOxX/M0PJfYEf38J+cdcki0cgi0cgi0eg1vF7VvrQXje1ZB+aOZJFoZJFoZJFoZJFoZJFoZJFoZJFoHGiRpdZbTM6rrgtk/ht+AZJi8ybhOtGyAAAAAElFTkSuQmCC"},437:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRoge3WwQ0AIAzEsCv77wxLIFoke4I8kwAAqSS7O+KG1R0AAADP2HgAAPiOjQcABjrSpwMHOlg7MAAAAABJRU5ErkJggg=="},438:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACeklEQVRoge2ay2oUQRSGPzXYETUYL4k7A15QX8FLNpKQN1DzDKLkMcSFoiBuxUcwSMRNUCEE17nN4MLoQlEIXhaakHFx+mDRpKe7uqq7qiUfHKjpnq46f5+qM92nBnaJiz0e+xoGxoFLwEXgNDACHEzP/wI+A++BJeANMA9sePShMgkwDcwBW0DP0raAF8DNtK/GOQDMAJ9KOFvWPgJ3gMGmREwBXY8CstYBJusUkAAPahSQtadI5L0yCrxrUITaIpIwvDCGhLtpEWprqQ9OnABWAopQ6wInq4oYJMx06jfNKqXoxxE4n7WHtiKmInA6zybKikiAVY8DK77661DyR3PG46B1COkBt4tEJMijQuxC1ilY+NOeB6xLSA+40U/IXIuEzOaJGKbao3goIZvAkHa+1xhoHNiXpzJCBoCr+sEUcrl5X5zZUciFAI64cl4bppCzARxx5Zw2TCHHAjjiylFtDBgHD1l0UKX6YnNNr/grQE7WajVmRH5ihKqAsncM/kXC5pqyfNeGGZGvNQxUN9+0YQrpBnDElY42TCFLARxxZVkbppC3ARxx5fVOB4/QrofGP+Sk3w3gldX9CMtLcrIWSJmyLTzrd7JNr7r7TcezEfkN3Cu4EzFwF1kjfUnwWyZVfPW3hkXFcdLjwD5tG7hWVoTyKALHs3bfVgRI+BYjcF5tgcwCt+E48WwrjFYVoYwhCyyUiFXglKsIZYQw02wB2Wzyim6Gbjck4gk1771PUO9UW6FCiq1KgpT21z0K+ADcItA/IBKkKj6L1GJtnd8EngPXcUit4PdPNUNI/fgKUrU8gyzUw+n5H8AXJJUuIy9F8+nxXf47/gKzr9boU4v4RwAAAABJRU5ErkJggg=="},439:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACsElEQVRoge2azWsTQRjGf7WY2KopeNI2NVrQ4sUcrB9H9SIKnlQ8iuBJPIn+D73o3+BBLxLUg3jy7Mmi+NEqSMEPKGorNDWirTYe5l3SJtlk39mdmYA+8JBs8r7zPs/OTGZ3NuAOo0AFqArvAeMO6znBKLAA1Ju4ABQD6lKjQquJiHcD6lKjSryRRRcFN7hotAvqLhp1ZeSx5XfBMQBcAybleJz4yb5HYiYlZ8Cr0g4oAzMYob+BCfm8iJnYi8IKDRMHJbYuuWWPetviOFBj/VmfxwiNwyFae6sGHHOqtAPKtJqIuALcAg4Dg8Ij8tlKTE4N2O/VAbAJmI4RlIbT0rY3XHdgIuJVXyY2Al8cGvksNZzjtEMTEU9pRdksiCcscrQ4qU2wMTLRPSQ1DmgTbIzssshxXqPPoshPIG+Rp62hunTRGskBv5Q5tshhFs9E0A6tLcr4NNisCf5vxAO2aoK1RkrK+DTYqQnWGvG5naOqpTWyVxmfBk5P2ivcX2dFfO7KRNGjiTqwCgwnFacZWmcVsVmgDziTdaP9wDv89kgdmJXameFiABMRL2RlYgT4FtDIPLAjrYkC8CygiYhPUa70azEGvOwBExFfALu1Jo5iujS0+GZ+FW2JcB5Y7gHRcVwGziUx8qkHxHbjx2bR7RZE60nlES0a2xl55EFIWjxMEjQMvCX88InjG2B7UseDwE3id9tDsAbcEG1qFIBLwANgLoD4OeC+aCh0EqrdDioB+zAbaCXM8/RtUmRIuPa+fojGPFxl/RPd7zSeZlUxl0EfgPfCGXn9t2Cz09gJY5iz+0eOf9DY0MvTGN/9mF6czbh+Zlgi+fjP9I8DWT9nf+0otiuyNnJHEXs749qZIk+y+5cpzCZ1T2OEzmamUOyOhEYOuAI8wfwALMn7yzjqib8v76Eh+HRjNAAAAABJRU5ErkJggg=="},440:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVRoge3Zz4uNURzH8dcME1HqXkmKDWo2sp4SSfIjsfJjr1gp/wHFQin/gI2VsmQjy1FIWRmWJmykaUxRI2O4Y/G4pen+OPc53+c+k+6nvrvz/ZzP+z73PJ3zHEYaaaReGqvQezcOYBIN/MIcpvECKxXOHaJjeKkI2q2eoVlXwBTdQktviHZ9xF3sryVpD12RBrC6fuJiDXk7qoGvyoGsYBn7cgKM5zT/o1PYktG/HldzAkSBnAzwOJjTHAWyN8hjQ9nmKJBGgMc6TJRtjgKJ8mnVHWAuwOMbvpdtjgL5HOAxm9McBfImwON5TnMUyKsAj6c5zVEgnwI83gd4ZOuJ8tuTdj3OCRD1RHYGeOzKaY4CmQnweB3gka2j0s8hnaqFI0NP3UUnlAc5XkPenpo1OMS7iImj1khbD0v0PArOEKI9WDLYyXCylqQJuikd5E5NGZM0hrf6Q3xQnEFCFL1GKEIuJoxbxO+oSasAIe0LZujcVYFsThizKXLCKkAmsC1hXBMbK5g/TNelv7Vu15Sxp5q4Z/A9131pT7Bybcc1xQeIsnutedzAjiFnB4cUv+aPxLAptYQHOKzauxvjOKs4O0SF71YzOK+CF9LUkAA6AU1FQVxSbPCGDdGu5b8ZsnRB3ukvqlo4VxaigS9rAKJdC9jaKWi/hXTZ2rq0bOhyTdcP5Ex8lmydLtO0oP6/0+qaLwMy0kgj/Sf6A6ZhsRVpv88MAAAAAElFTkSuQmCC"}},[[308,1,2]]]);
//# sourceMappingURL=app.dfc18f7e.chunk.js.map