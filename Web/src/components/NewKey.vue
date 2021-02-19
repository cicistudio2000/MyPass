<template>
    <div id="home">
        <Header :isShowBackIcon= 'isShowBackIcon' headerTitle="www.chengchen.net"></Header>
         <mt-field label="名称" placeholder="" v-model="myName"></mt-field>
         <mt-button @click="submit" type="primary" size="large">确定</mt-button>    
         <mt-field label="备注" placeholder="" type="textarea" v-model="remarks"></mt-field>       
        <mt-field label="用户1" placeholder="" v-model="username1"></mt-field>
        <mt-field label="密码1" placeholder="" v-model="password1"></mt-field>
         <mt-field label="用户2" placeholder="" v-model="username2"></mt-field>
        <mt-field label="密码2" placeholder="" v-model="password2"></mt-field>
         <mt-field label="用户3" placeholder="" v-model="username3"></mt-field>
        <mt-field label="密码3" placeholder="" v-model="password3"></mt-field>
         <mt-field label="用户4" placeholder="" v-model="username4"></mt-field>
        <mt-field label="密码4" placeholder="" v-model="password4"></mt-field>
         <mt-field label="用户5" placeholder="" v-model="username5"></mt-field>
        <mt-field label="密码5" placeholder="" v-model="password5"></mt-field>
         <mt-field label="用户6" placeholder="" v-model="username6"></mt-field>
        <mt-field label="密码6" placeholder="" v-model="password6"></mt-field>
         <mt-field label="用户7" placeholder="" v-model="username7"></mt-field>
        <mt-field label="密码7" placeholder="" v-model="password7"></mt-field>
        <mt-field label="用户8" placeholder="" v-model="username8"></mt-field>
        <mt-field label="密码8" placeholder="" v-model="password8"></mt-field>
         <mt-field label="用户9" placeholder="" v-model="username9"></mt-field>
        <mt-field label="密码9" placeholder="" v-model="password9"></mt-field>
    </div>
</template>

<script>
import Header from './Header';
//import SecretKeys from '../js/keys.json'
import ase from 'crypto-js/aes';

export default {
    data() {
    return {
        isShowBackIcon:true,
        remarks:null,
        myName:null,
        username1:null,
        username2:null,
        username3:null,
        username4:null,
        username5:null,
        username6:null,
        username7:null,
        username8:null,
        username9:null,
        password1:null,
        password2:null,
        password3:null,
        password4:null,
        password5:null,
        password6:null,
        password7:null,
        password8:null,
        password9:null,
        MySecretKeys:[],
        secretkey: "secretkeypwd",
        jsonFolderName:"MyPass",
        jsonFileName:"keys.json"
     };
    },
    components:{
        Header
    },
    created(){
        this.getAndReadFile();
    },
    methods:{
        submit(){
            if(this.$Common.isEmpty(this.myName)){
                this.$Common.showMessage("名称不能为空！");
                return;
            }

            if(this.MySecretKeys.length >0){
                var filterKeys = this.MySecretKeys.filter(mykey=>{
                    if(mykey.Name.toLowerCase() === this.myName.toLowerCase())
                        return true;
                })

                if(filterKeys.length>0){
                    this.$Common.showMessage("不能和现有的名称重复！");
                    return;
                }
            }

            var CryptoJS = require("crypto-js");
            var pwd1 = this.password1;
            var pwd2 = this.password2;
            var pwd3 = this.password3;
            var pwd4 = this.password4;
            var pwd5 = this.password5;
            var pwd6 = this.password6;
            var pwd7 = this.password7;
            var pwd8 = this.password8;
            var pwd9 = this.password9;
            
            if(!this.$Common.isEmpty(pwd1)){
                pwd1 = CryptoJS.AES.encrypt(pwd1, this.secretkey).toString();
                pwd1 = pwd1.replaceAll("\r", "").replaceAll("\n", ""); 
            }
            
            if(!this.$Common.isEmpty(pwd2)){
                pwd2 = CryptoJS.AES.encrypt(pwd2, this.secretkey).toString();
                pwd2 = pwd2.replaceAll("\r", "").replaceAll("\n", ""); 
            }

            if(!this.$Common.isEmpty(pwd3)){
                pwd3 = CryptoJS.AES.encrypt(pwd3, this.secretkey).toString();
                pwd3 = pwd3.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd4)){
                pwd4 = CryptoJS.AES.encrypt(pwd4, this.secretkey).toString();
                pwd4 = pwd4.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd5)){
                pwd5 = CryptoJS.AES.encrypt(pwd5, this.secretkey).toString();
                pwd5 = pwd5.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd6)){
                pwd6 = CryptoJS.AES.encrypt(pwd6, this.secretkey).toString();
                pwd6 = pwd6.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd7)){
                pwd7 = CryptoJS.AES.encrypt(pwd7, this.secretkey).toString();
                pwd7 = pwd7.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd8)){
                pwd8 = CryptoJS.AES.encrypt(pwd8, this.secretkey).toString();
                pwd8 = pwd8.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            if(!this.$Common.isEmpty(pwd9)){
                pwd9 = CryptoJS.AES.encrypt(pwd9, this.secretkey).toString();
                pwd9 = pwd9.replaceAll("\r", "").replaceAll("\n", ""); 
            } 

            var keys = [
                {UserName:this.username1, Password: pwd1},
                {UserName:this.username2, Password: pwd2},
                {UserName:this.username3, Password: pwd3},
                {UserName:this.username4, Password: pwd4},
                {UserName:this.username5, Password: pwd5},
                {UserName:this.username6, Password: pwd6},
                {UserName:this.username7, Password: pwd7},
                {UserName:this.username8, Password: pwd8},
                {UserName:this.username9, Password: pwd9},
            ];

            var newKey = { Name: this.myName, Remark:this.remarks, Keys:keys};
            this.MySecretKeys.push(newKey);
            //console.log(JSON.stringify(this.MySecretKeys))
            this.createAndWriteFile();
        },
        createAndWriteFile() {
            var self = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                console.log('打开的文件系统: ' + fs.name);
                fs.root.getDirectory(self.jsonFolderName, {create: false}, function (dirEntry) {
                       // Create new file or return the file if it already exists.  
                        dirEntry.getFile(self.jsonFileName, {create: false, exclusive: false}, function (fileEntry) {
                            fileEntry.name == self.jsonFileName;
                            fileEntry.fullPath == self.jsonFolderName + '/' + self.jsonFileName;
                            //文件内容
                            var dataObj = self.MySecretKeys;
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
                    self.$Common.showMessage("保存成功");
                    console.log("Successful file write...");

                    //写入成功后跳转会主页
                    self.$router.push({path:'/Home'});

                };   
                //文件写入失败
                fileWriter.onerror = function (e) {
                    self.$Common.showMessage("文件写入失败" + e.toString());
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
            this.$Common.showMessage("文件创建失败！" + error);
        },
        onErrorReadFile() {
            this.MySecretKeys = [];
            this.$Common.showMessage("文件读取失败" + error);
        }
    },
    updated(){
        window.scroll(0, 0);
    }
}
</script>
