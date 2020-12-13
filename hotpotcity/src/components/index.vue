<template>
  <!-- 顶部 -->
  <el-container>
        <el-header>
          <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" >
              <div class="grid-content bg-purple" >
                <img src="../assets/logo.png" style="width: 30px;height: 30px;" />
              </div>
            </el-col>
            <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
              <div class="grid-content bg-purple-light">
                <span >火锅城后台管理系统</span>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
              <div class="grid-content bg-purple">
                <span style="font-size: 5px;">欢迎你 {{msg}}</span>
                <el-button type="text"  @click="exit()" >退出登录</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-container>
          <div class="aside" style="width: 200px;">
           <!-- <el-aside width="200px"> -->
             <el-menu  default-active="2" unique-opened class="el-menu-vertical-demo"   :router="true">
               <!-- 用户管理 -->
               <el-submenu index="1">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>用户管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="1-1"><i class="el-icon-menu"></i>用户列表</el-menu-item>
                   <el-menu-item index="1-2"><i class="el-icon-menu"></i>用户详情</el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
               <!-- 食物管理 -->
               <el-submenu index="2">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>食物管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="2-1"><i class="el-icon-menu"></i>食物大类</el-menu-item>
                   <el-menu-item index="2-2"><i class="el-icon-menu"></i>食物小类</el-menu-item>
                   <el-menu-item index="2-3"><i class="el-icon-menu" ></i><span >食物详情</span></el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
               <!-- 订单管理 -->
               <el-submenu index="3">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>订单管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="orders"><i class="el-icon-menu"></i>订单列表</el-menu-item>
                   <el-menu-item index="4-2"><i class="el-icon-menu"></i>订单详情</el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
               <!-- 餐桌管理 -->
               <el-submenu index="4">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>餐桌管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="5-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
                   <el-menu-item index="5-2"><i class="el-icon-menu"></i>订单详情</el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
               <!-- 文章管理 -->
               <el-submenu index="5">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>文章管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="6-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
                   <el-menu-item index="6-2"><i class="el-icon-menu"></i>订单详情</el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
               <!-- 评论管理 -->
               <el-submenu index="6">
                 <template slot="title">
                   <i class="el-icon-location"></i>
                   <span>评论管理</span>
                 </template>
                 <el-menu-item-group>
                   <el-menu-item index="7-1"><i class="el-icon-menu"></i>订单列表</el-menu-item>
                   <el-menu-item index="7-2"><i class="el-icon-menu"></i>订单详情</el-menu-item>
                 </el-menu-item-group>
               </el-submenu>
             </el-menu>
            </div>
           <!-- </el-aside> -->

           <el-main><router-view></router-view></el-main>
         </el-container>


  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'adminj'
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .el-header {
     /* background-color: #B3C0D1; */
     background-color: #333;
     color: #f5f5f5;
     text-align: center;
     line-height: 60px;
   }


   /* .aside{
     background-color: #333;
   } */
   /* .el-aside {
     background-color: #D3DCE6;
     color: #333;
     text-align: center;
     line-height: 200px;
   } */

   .el-main {
     background-color: #E9EEF3;
     color: #333;
     text-align: center;
     line-height: 160px;
   }


 /* body > .el-container {
     margin-bottom: 40px;
   }

   .el-container:nth-child(5) .el-aside,
   .el-container:nth-child(6) .el-aside {
     line-height: 260px;
   }

   .el-container:nth-child(7) .el-aside {
     line-height: 320px;
   } */
</style>
