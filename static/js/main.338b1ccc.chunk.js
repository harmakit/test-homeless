(this.webpackJsonpgodnobomzh=this.webpackJsonpgodnobomzh||[]).push([[0],{190:function(t,e,n){},206:function(t,e,n){t.exports=n.p+"static/media/winter.915a88ec.png"},207:function(t,e,n){t.exports=n.p+"static/media/casual.1c0f20b2.png"},213:function(t,e,n){"use strict";n.r(e);n(98),n(124),n(126),n(127),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166);var a=n(2),o=n.n(a),s=n(26),c=n.n(s),i=n(41),l=n.n(i),r=n(42),h=n(43),p=n(46),u=n(45),m=n(44),d=n(47),g=n(96),f=n.n(g),b=(n(174),n(95)),x=n.n(b),E=n(64),y=n.n(E),O=n(27),v=n.n(O),j=n(94),C=n.n(j),T=(n(190),{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),P=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(p.a)(this,Object(u.a)(e).call(this,t))).createClothes=function(){for(var t=[],e=0;e<n.props.clothes.length;e++)t.push(o.a.createElement("img",{key:e,src:n.props.clothes[e].img,className:"cloth"}));return t},n.createClothePrices=function(){for(var t=[],e=0;e<n.state.text.items.length;e++)t.push(o.a.createElement(v.a,{key:e,style:{paddingTop:"10px"}},n.state.text.items[e]));return console.log(t),t},n.selectCloth=function(t){n.setState({text:n.props.clothes[t].text})},n.componentDidMount=function(){n.setState({text:n.props.clothes[0].text})},n.state={text:{type:"",description:"",items:[]}},n}return Object(d.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return o.a.createElement(x.a,{id:this.props.id,style:{textAlign:"center"}},o.a.createElement(y.a,null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u0440\u043e \u0431\u043b\u0430\u0433\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),o.a.createElement("div",{className:"bomzh"},o.a.createElement(C.a,Object.assign({},T,{afterChange:this.selectCloth}),this.createClothes())),o.a.createElement(v.a,{style:{float:"right",width:"15rem",textAlign:"right",marginRight:"15px"}},this.createClothePrices()),o.a.createElement(v.a,null),o.a.createElement(v.a,{style:{height:"25rem"}}),o.a.createElement("h2",null,this.state.text.type),o.a.createElement("p",null,this.state.text.description))}}]),e}(a.Component),$=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(p.a)(this,Object(u.a)(e).call(this,t))).go=function(t){a.setState({activePanel:t.currentTarget.dataset.to})},a.closePopout=function(){a.setState({popout:null})},a.state={activePanel:"home",clothes:[{img:n(206),text:{type:"\u0417\u0438\u043c\u043d\u0438\u0439",description:"\u0412\u0430\u0448 \u0431\u043e\u043c\u0436 \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0441\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u043e\u043b\u043e\u0434\u0443 +10 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u0434\u0435\u0436\u0434\u044b \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430",items:["\u0428\u0430\u043f\u043a\u0430 The Norht Face \u2013 80$","\u041f\u0443\u0445\u043e\u0432\u0438\u043a The Norht Face \u2013 500$","\u0423\u0442\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u0435 \u0448\u0442\u0430\u043d\u044b Ralph Louren \u2013 400$","\u0417\u0438\u043c\u043d\u0438\u0435 \u0431\u043e\u0442\u0438\u043d\u043a\u0438 Balenciaga \u2013 900$","TOTAL: 1880$"]}},{img:n(207),text:{type:"Casual",description:"\u041a\u044d\u0436\u0443\u0430\u043b \u2013 \u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0439 \u0441\u0442\u0438\u043b\u044c, \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0449\u0438\u0439 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u044c. \u0412\u0430\u0448 \u0431\u043e\u043c\u0436 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u0438 \u0434\u0430\u0436\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043b\u0435\u0433\u043a\u043e\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e",items:["\u0411\u0435\u0439\u0441\u0431\u043e\u043b\u043a\u0430 Vans \u2013 50$","\u0424\u0443\u0442\u0431\u043e\u043b\u043a\u0430 \u0422\u0412\u041e\u0415 \u2013 300\u20bd","\u0428\u043e\u0440\u0442\u044b Lacoste - 250$","\u041a\u0435\u0434\u044b Vans \u2013 100$","TOTAL: 405$"]}}],popout:null},a.closePopout=a.closePopout.bind(Object(m.a)(a)),a}return Object(d.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(f.a,{activePanel:this.state.activePanel,popout:this.state.popout},o.a.createElement(P,{id:"home",go:this.go,clothes:this.state.clothes}))}}]),e}(a.Component);n(211),n(212);l.a.send("VKWebAppInit"),c.a.render(o.a.createElement($,null),document.getElementById("root"))},97:function(t,e,n){t.exports=n(213)}},[[97,1,2]]]);
//# sourceMappingURL=main.338b1ccc.chunk.js.map