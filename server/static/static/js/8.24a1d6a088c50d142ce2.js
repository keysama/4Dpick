webpackJsonp([8],{"25MW":function(t,e){},SwGl:function(t,e,a){"use strict";(function(t){var s=a("Xxa5"),n=a.n(s),o=a("exGp"),i=a.n(o),r=a("nv77");e.a={data:function(){return{nickname:"",username:"",password:"",password2:"",email:"",phone:"",bank_name:"",bank_number:"",bank_accountName:"",agree:""}},computed:{pass_all:function(){return 1==this.agree&&""!=this.nickname&&""!=this.username&&""!=this.password&&""!=this.email&&""!=this.bank_name&&""!=this.bank_number&&""!=this.bank_accountName&&this.pass_email&&this.pass_password},pass_email:function(){return""==this.email||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)},pass_password:function(){return this.password==this.password2}},methods:{goRegiste:function(){var t=this;return i()(n.a.mark(function e(){var a,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={nickname:t.nickname,username:t.username,password:t.password,password2:t.password2,email:t.email,phone:t.phone,bank_name:t.bank_name,bank_number:t.bank_number,bank_accountName:t.bank_accountName},e.next=3,Object(r.f)(a);case 3:if(0!=(s=e.sent).data.state){e.next=7;break}return alert(s.data.text),e.abrupt("return");case 7:alert("success!go for login!"),t.$router.push("/login");case 9:case"end":return e.stop()}},e,t)}))()}},mounted:function(){t(document).ready(function(){t('[data-toggle="tooltip"]').tooltip()})}}}).call(e,a("4kSj"))},"h/OC":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("SwGl"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"notice"},[t._v("\n\t\t\t\t公告公告公告公告公告公告公告公告公告公告\n\t\t\t")]),t._v(" "),a("h2",[t._v("Member Registration")]),t._v(" "),a("div",{staticClass:"registe-box row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.nickname},on:{input:function(e){e.target.composing||(t.nickname=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control ",class:{"is-invalid":!t.pass_email},attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"form-control",class:{"is-invalid":!t.pass_password},attrs:{type:"password"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"mulit"},[t._v("Bank Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_name,expression:"bank_name"}],staticClass:"form-control form-control",attrs:{name:"bank",id:"bank","data-required":"1","data-error":"Please select at least one from the option."},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.bank_name=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("Select one")]),t._v(" "),a("option",{attrs:{value:"AMB"}},[t._v("AmBank")]),t._v(" "),a("option",{attrs:{value:"BIMB"}},[t._v("BIMB")]),t._v(" "),a("option",{attrs:{value:"BSN"}},[t._v("Bank Simpanan Nasional")]),t._v(" "),a("option",{attrs:{value:"CIMB"}},[t._v("CIMB Bank")]),t._v(" "),a("option",{attrs:{value:"HLB"}},[t._v("Hong Leong Bank")]),t._v(" "),a("option",{attrs:{value:"MBB"}},[t._v("Maybank")]),t._v(" "),a("option",{attrs:{value:"PBB"}},[t._v("Public Bank")]),t._v(" "),a("option",{attrs:{value:"RHB"}},[t._v("RHB Bank")])])]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(7),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_number,expression:"bank_number"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.bank_number},on:{input:function(e){e.target.composing||(t.bank_number=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(8),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_accountName,expression:"bank_accountName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.bank_accountName},on:{input:function(e){e.target.composing||(t.bank_accountName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,null)>-1:t.agree},on:{change:function(e){var a=t.agree,s=e.target,n=!!s.checked;if(Array.isArray(a)){var o=t._i(a,null);s.checked?o<0&&(t.agree=a.concat([null])):o>-1&&(t.agree=a.slice(0,o).concat(a.slice(o+1)))}else t.agree=n}}}),t._v("I agreed with the terms & conditions.\n            ")])]),t._v(" "),a("div",{staticClass:"btn btn-primary",class:{disabled:!t.pass_all},staticStyle:{"margin-top":"10px"},on:{click:t.goRegiste}},[t._v("Register")])])]),t._v(" "),t._m(9)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Enter your full name here.!"}},[this._v("Your Name"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Your valid email address. We need this for verification purpose."}},[this._v("Email Address"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Please make sure you enter your contact number correctly. In case of money transfer failure, we need to contact you for clarification purpose."}},[this._v("Contact Number"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Please enter a login ID between 6 to 12 characters. Do not use any symbol or space for your login ID."}},[this._v("Login ID"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers."}},[this._v("Password"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Please enter a login password between 6 to 20 characters. Do not use spaces in your password. It is strongly advise to use a password with a combination of alphabets and numbers."}},[this._v("Password"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"border-bottom":"1px solid #ccc","margin-bottom":"10px"}},[e("h3",[this._v("Bank Account")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Only numbers allowed. Do NOT use any symbol to separate your number."}},[this._v("Account Number"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"mulit",attrs:{"data-toggle":"tooltip",title:"Please enter the FULL NAME as you used for this bank account."}},[this._v("Account Name"),e("i",{staticClass:"iconfont icon-iconfontwenhao1"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info"},[e("span",[this._v("You must agreed with our terms & conditions before register as a member. If you have any questions, please do not feel hesitate to contact us or email at admin@4dpick.com. Our customer service operators are willing to answer your doubts.")])])}]};var o=function(t){a("25MW")},i=a("VU/8")(s.a,n,!1,o,"data-v-782bc6ce",null);e.default=i.exports}});
//# sourceMappingURL=8.24a1d6a088c50d142ce2.js.map