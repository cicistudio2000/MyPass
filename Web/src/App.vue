<template>
 <div id="app"> 
  
      <!-- 这里是需要keepalive的 -->
      <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive> -->

      <!-- 这里不会被keepalive -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        timer: '',
        value: 0,
        debugInfo:''
      };
    },
    mounted() {
        this.checkPermision();
    },
    methods: {
       checkPermision(){
            var self = this;
            var permissions = cordova.plugins.permissions;
            permissions.hasPermission(permissions.READ_EXTERNAL_STORAGE, checkPermissionCallback, null);

            function checkPermissionCallback(status) {
                if (!status.hasPermission) {      // 未取得权限
                    var errorCallback = function() {
                        self.$Common.showMessage("没有写入权限")
                    }
                    permissions.requestPermission(
                        permissions.READ_EXTERNAL_STORAGE,
                        function(status) {
                            if (!status.hasPermission) {
                                self.$Common.showMessage("获取写入权限失败")
                            } else {
                                self.$Common.showMessage("获取写入权限成功")
                            }
                        },
                        errorCallback);
                }else{
                    // 如果已经有权限则直接执行代码
                }
            }
        }
    },
    beforeDestroy() {
     
    } 
  };
</script>
<style>
body {
	margin: 0;
	padding: 0;
	border: 0;
	font-family: Microsoft Yahei, Arial, sans-serif;
  overflow-x: hidden;
}
</style>
