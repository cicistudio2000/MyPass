<template>
    <div id="home">
        <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
         <mt-field label="搜索" placeholder="关键字" v-model="searchKey"></mt-field>
         <!-- <mt-field label="debug" v-model="debuglog"></mt-field> -->
         <mt-button @click="newKey" type="primary" size="large">新建密钥</mt-button>       
        <mt-cell v-for="myKey in showSecretKeys" v-bind:key="myKey.Name" :to="{path:'/KeyDetail', query:{myName: encodeURIComponent(myKey.Name)}}" :title=myKey.Name></mt-cell>
    </div>
</template>

<script>
import Header from './Header';
//import SecretKeys from '../js/keys.json'
import ase from 'crypto-js/aes';

export default {
    data() {
    return {
        isShowBackIcon:false,
        searchKey:null,
        //MySecretKeys:SecretKeys,
        MySecretKeys:[],
        showSecretKeys:[],
        secretkey: "secretkeypwd",
        jsonFolderName:"MyPass",
        jsonFileName:"keys.json",
        debuglog:null
     };
    },
    components:{
        Header
    },
    created(){
        // var CryptoJS = require("crypto-js");
        // SecretKeys.forEach(key => {
        //     key.Keys.forEach(k=>{
        //         if(!this.$Common.isEmpty(k.Password)){
        //              var encrypt = CryptoJS.AES.encrypt(k.Password, 'secretkeypwd').toString();
        //              encrypt = encrypt.replaceAll("\r", "").replaceAll("\n", "");
        //              k.Password = encrypt;
        //         }        
        //     })
        // }); 
        // var test = JSON.stringify(SecretKeys);
        // console.log(test);
        this.createAndWriteFile();
        this.getAndReadFile();
    },
    mounted(){
        setTimeout(()=>{   
                    window.scroll(0, 0);
          },0); 
        },
    watch: {
        searchKey(val, oldval) {
            if(this.MySecretKeys.length>0){
                this.showSecretKeys = this.MySecretKeys.filter(mykey=>{
                if(val === null || val === "")
                    return true;

                if(mykey.Name.toLowerCase().indexOf(val.toLowerCase())!=-1)
                    return true;
                })
            }
        }
    },
    methods:{
        newKey(){
            this.$router.push({path:'/NewKey'});
        },
        createAndWriteFile() {
            var self = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                console.log('打开的文件系统: ' + fs.name);
                fs.root.getDirectory(self.jsonFolderName, {create: true}, function (dirEntry) {
                       // Create new file or return the file if it already exists.  
                        dirEntry.getFile(self.jsonFileName, {create: true, exclusive: true}, function (fileEntry) {
                            fileEntry.name == self.jsonFileName;
                            fileEntry.fullPath == self.jsonFolderName + '/' + self.jsonFileName;
                            //文件内容
                            var dataObj = [];
                            //写入文件
                            self.writeFile(fileEntry, dataObj);
                        }, self.onErrorCreateFile);
                }, self.onErrorGetDir);
            }, self.onErrorLoadFs);
        },
        getAndReadFile() {
            var self = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                console.log('打开的文件系统: ' + fs.name);
                fs.root.getDirectory(self.jsonFolderName, {create: false}, function (dirEntry) {  
                        dirEntry.getFile(self.jsonFileName, {create: false, exclusive: false}, function (fileEntry) {
                            fileEntry.name == self.jsonFileName;
                            fileEntry.fullPath == self.jsonFolderName + '/' + self.jsonFileName;
                            self.readFile(fileEntry);
                        }, self.onErrorCreateFile);
                }, self.onErrorGetDir);
            }, self.onErrorLoadFs);
        },
        writeFile(fileEntry, dataObj) {
            var self = this;
            //创建一个写入对象
            fileEntry.createWriter(function (fileWriter) {
                //文件写入成功
                fileWriter.onwriteend = function () {
                    self.$Common.showMessage("保存成功" + error);
                };   
                //文件写入失败
                fileWriter.onerror = function (e) {
                    self.$Common.showMessage("文件写入失败" + error);
                    console.log("Failed file write: " + e.toString());
                };    
                //写入文件
                fileWriter.write(dataObj);
            });
        },
        readFile(fileEntry) {
            var self = this;
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onload = function () {
                    //self.$Common.showMessage("文读取成功");
                    self.MySecretKeys = JSON.parse(reader.result);
                    self.showSecretKeys = JSON.parse(reader.result);
                    self.debuglog = reader.result;
                };
                reader.readAsText(file);
            }, self.onErrorReadFile);
        },
        onErrorLoadFs(error) {
            this.$Common.showMessage("文件加载失败" + error);
        },
        onErrorGetDir(error) {
            this.$Common.showMessage("文件夹创建失败" + error);
        },
        onErrorCreateFile(error) {
            //this.$Common.showMessage("文件可能已经存在！" + error);
        },
        onErrorReadFile() {
            this.MySecretKeys = [];
            this.$Common.showMessage("文件读取失败" + error);
        }
    }
}
</script>
