npm install -g cordova --registry https://registry.npm.taobao.org
npm config set registry "https://registry.npm.taobao.org"
cordova create MyPassApp
cd MyPassApp

cordova platform add android@7.1.1

cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-android-permissions //处理权限

修改程序名：修改config.xml文件里面的name字段即可。
修改图标：修改platforms\android\app\src\main\res文件里面的所有的icon.png图片即可。
修改默认首页：修改config.xml文件里面的content字段即可。

修改权限platforms\android\app\src\main\AndroidManifest.xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />


ANDROID_HOME=E:\Program Files\adt-bundle-windows-x86_64-20131030\sdk
PATH=%PATH%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

https://maven.google.com连接不上的解决办法
在build.gradle里替换成maven { url 'https://dl.google.com/dl/android/maven2/' } 就OK了

maven{ url 'https://maven.aliyun.com/repository/google'}
maven{ url 'https://maven.aliyun.com/repository/gradle-plugin'}
maven{ url 'https://maven.aliyun.com/repository/public'}
maven{ url 'https://maven.aliyun.com/repository/jcenter'}