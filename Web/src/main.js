// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui';

Vue.use(VueAxios, axios)
Vue.use(Mint);

import { MessageBox } from 'mint-ui';
import { Indicator } from 'mint-ui';
import Common from './js/common'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.prototype.$axios = axios.create({
  baseURL:config.apihost,
  timeout:60000,
  headers: {
    'Content-Type': 'text/plain'
  }
})

Vue.prototype.$MessageBox = MessageBox;
Vue.prototype.$Indicator = Indicator;
Vue.prototype.$Common = Common;

//register Date format
Date.prototype.format = function(format)
{
    var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
    RegExp.$1.length==1 ? o[k] :
    ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
};

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

/* eslint-disable no-new */
/*
document.addEventListener('deviceready', () => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
},false);
*/

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
