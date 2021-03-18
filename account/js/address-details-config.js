!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=r(e["@deriv/shared"],e["@deriv/translations"])}(self,(function(e,r){return(()=>{"use strict";var s={"./Configs/address-details-config.js":(e,r,s)=>{s.d(r,{default:()=>l});var t=s("@deriv/translations"),a=s("@deriv/shared"),i=function(e){var r,s,i,o,d,l=e.account_settings,n=e.is_svg;return l?{address_line_1:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(r=l.address_line_1)&&void 0!==r?r:"",rules:[["req",(0,t.localize)("First line of address is required")],["address",(0,t.localize)("Address is not in a proper format")],["length",(0,t.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",(0,a.getErrorMessages)().po_box()]].filter((function(e){return n?0!==e.indexOf("po_box"):e}))},address_line_2:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(s=l.address_line_2)&&void 0!==s?s:"",rules:[["address",(0,t.localize)("Address is not in a proper format")],["length",(0,t.localize)("This should not exceed {{max}} characters.",{max:70}),{max:70}],["po_box",(0,a.getErrorMessages)().po_box()]].filter((function(e){return n?0!==e.indexOf("po_box"):e}))},address_city:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(i=l.address_city)&&void 0!==i?i:"",rules:[["req",(0,t.localize)("City is required")],["regular",(0,t.localize)("City field is not in a proper format"),{regex:/^[A-Za-z0-9\s'.-]{1,35}$/}]]},address_state:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(o=l.address_state)&&void 0!==o?o:"",rules:[["req",(0,t.localize)("State is required")],["regular",(0,t.localize)("State is not in a proper format"),{regex:/^[\w\s\W'.-;,]{0,60}$/}]]},address_postcode:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(d=l.address_postcode)&&void 0!==d?d:"",rules:[["length",(0,t.localize)("Please enter a {{field_name}} under {{max_number}} characters.",{field_name:(0,t.localize)("postal/ZIP code"),max_number:20,interpolation:{escapeValue:!1}}),{min:0,max:20}],["postcode",(0,a.getErrorMessages)().postcode()]]}}:{}},o=function(e,r){return"im"===r&&e.address_state.rules.shift(),/^(im|gb)$/.test(r)&&e.address_postcode.rules.splice(0,0,["req",(0,t.localize)("Postal/ZIP code is required")]),e},d=function(e,r){var s=r.real_account_signup_target;return s&&"svg"!==s||e.address_state.rules.shift(),e};const l=function(e,r){var s=e.upgrade_info,l=e.real_account_signup_target,n=e.residence,u=e.account_settings,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],p="svg"===(null==s?void 0:s.can_upgrade_to),_=i({account_settings:u,is_svg:p});return{header:{active_title:c?(0,t.localize)("Where do you live?"):(0,t.localize)("Complete your address details"),title:c?(0,t.localize)("ADDRESS"):(0,t.localize)("Address")},body:r,form_value:(0,a.getDefaultFields)(l,_),props:{validate:(0,a.generateValidationFunction)(l,d(o(_,n),l)),is_svg:p},passthrough:["residence_list","is_fully_authenticated"],icon:"IcDashboardAddress"}}},"@deriv/shared":r=>{r.exports=e},"@deriv/translations":e=>{e.exports=r}},t={};function a(e){if(t[e])return t[e].exports;var r=t[e]={exports:{}};return s[e](r,r.exports,a),r.exports}return a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var s in r)a.o(r,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a("./Configs/address-details-config.js")})().default}));