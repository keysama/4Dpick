webpackJsonp([2],{"2ig4":function(t,s,a){"use strict";a.d(s,"a",function(){return i});var e=a("gyMJ"),i=function(){return e.a.post("api/result/get4dResult")}},"5VTp":function(t,s){},OC6q:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Xxa5"),i=a.n(e),n=a("exGp"),r=a.n(n),o=a("2ig4"),c={created:function(){this.init()},data:function(){return{fourResult:{}}},computed:{fourResult2:function(){switch(parseInt(this.$store.state.homeMode)){case 0:return this.fourResult;case 1:return{magnum:this.fourResult.magnum,damacai:this.fourResult.damacai,toto:this.fourResult.toto};case 2:return{sabah88:this.fourResult.sabah88,sarawak:this.fourResult.sarawak,sandakan:this.fourResult.sandakan};case 3:return{singapore:this.fourResult.singapore};default:return""}}},methods:{init:function(){var t=this;return r()(i.a.mark(function s(){var a;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(o.a)();case 2:if(0!=(a=s.sent).data.state){s.next=6;break}return alert(a.data.text),s.abrupt("return");case 6:t.fourResult=a.data.body;case 7:case"end":return s.stop()}},s,t)}))()}},filters:{filterLogo:function(t){switch(t){case"magnum":return"/static/logo/logo-magnum.jpg";case"damacai":return"/static/logo/logo-pmp.jpg";case"toto":return"/static/logo/logo-toto.jpg";case"sabah88":return"/static/logo/logo-sabah88.jpg";case"sarawak":return"/static/logo/logo-sarawak.jpg";case"sandakan":return"/static/logo/logo-stc4d.jpg";case"singapore":return"/static/logo/logo-singapore.jpg"}}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"row crads"},t._l(t.fourResult2,function(s,e){return a("div",{key:e,staticClass:"col-md-4 cardBox"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("img",{staticClass:"float-left",attrs:{src:t._f("filterLogo")(s.title)}}),t._v(" "),a("div",{staticClass:"title d-flex align-items-center justify-content-center"},[a("span",[t._v(t._s(s.title))])]),t._v(" "),a("router-link",{staticClass:"buy_now hover",attrs:{to:"/buy",tag:"span"}},[t._v("Buy Now!")])],1),t._v(" "),a("div",{staticClass:"card-time d-flex justify-content-between"},[a("span",[t._v("Date: "+t._s(s.date))]),t._v(" "),a("span",[t._v("Draw No.: "+t._s(s.drawNumber))])]),t._v(" "),a("div",{staticClass:"card-body d-flex flex-column align-items-start"},[a("div",{staticClass:"line"},[a("div",{staticClass:"float-left d-50"},[t._v("First Prize")]),t._v(" "),a("div",{staticClass:"float-right d-50 bg-white "},[t._v(t._s(s.firstPrize))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"float-left d-50"},[t._v("Second Prize")]),t._v(" "),a("div",{staticClass:"float-right d-50 bg-white "},[t._v(t._s(s.secondPrize))])]),t._v(" "),a("div",{staticClass:"line"},[a("div",{staticClass:"float-left d-50"},[t._v("Third Prize")]),t._v(" "),a("div",{staticClass:"float-right d-50 bg-white text-black"},[t._v(t._s(s.thirdPrize))])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"d-flex align-items-center justify-content-center"},[t._v("Specials")]),t._v(" "),a("div",{staticClass:"bg-white"},[a("span",[t._v(t._s(s.specials0))]),t._v(" "),a("span",[t._v(t._s(s.specials1))]),t._v(" "),a("span",[t._v(t._s(s.specials2))]),t._v(" "),a("span",[t._v(t._s(s.specials3))]),t._v(" "),a("span",[t._v(t._s(s.specials4))]),t._v(" "),a("span",[t._v(t._s(s.specials5))]),t._v(" "),a("span",[t._v(t._s(s.specials6))]),t._v(" "),a("span",[t._v(t._s(s.specials7))]),t._v(" "),a("span",[t._v(t._s(s.specials8))]),t._v(" "),a("span",[t._v(t._s(s.specials9))])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"d-flex align-items-center justify-content-center"},[t._v("Consolations")]),t._v(" "),a("div",{staticClass:"bg-white"},[a("span",[t._v(t._s(s.consolations0))]),t._v(" "),a("span",[t._v(t._s(s.consolations1))]),t._v(" "),a("span",[t._v(t._s(s.consolations2))]),t._v(" "),a("span",[t._v(t._s(s.consolations3))]),t._v(" "),a("span",[t._v(t._s(s.consolations4))]),t._v(" "),a("span",[t._v(t._s(s.consolations5))]),t._v(" "),a("span",[t._v(t._s(s.consolations6))]),t._v(" "),a("span",[t._v(t._s(s.consolations7))]),t._v(" "),a("span",[t._v(t._s(s.consolations8))]),t._v(" "),a("span",[t._v(t._s(s.consolations9))])])])])])}))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"notice"},[s("span",[this._v("公告公告公告公告公告公告公告公告公告公告")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"/static/img/lottery-banner.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"info"},[s("span",[this._v("Check Latest 4D Results (Keputusan 4d) for Malaysia Lottery | 4DPick")])])}]};var _=a("VU/8")(c,l,!1,function(t){a("5VTp")},"data-v-32855534",null);s.default=_.exports}});
//# sourceMappingURL=2.25bbf157855a524c06ff.js.map