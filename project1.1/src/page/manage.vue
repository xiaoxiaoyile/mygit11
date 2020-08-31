<template>
  <div class="manage_page fillcontain">
    <el-row style="height:100%">
      <el-col :span="4" style="min-height:100%;background-color:#324057">
        <el-menu
          default-active="defaultActive"
          style="min-height:100%;background-color:rgb(128 198 154);"
        >
          <el-menu-item index='manage' >
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document" ></i>数据管理
            </template>
            <el-menu-item index="userList"  @click="userListHtml">用户列表</el-menu-item>
            <el-menu-item index="shopList" @click="Merchantlist">商家列表</el-menu-item>
            <el-menu-item index="foodList" @click="foodList">食品列表</el-menu-item>
            <el-menu-item index="orderList" @click="orderList">订单列表</el-menu-item>
            <el-menu-item index="adminList" @click="adminList">管理员列表</el-menu-item>
          </el-submenu>
           <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="addShop" @click="addShop" >添加商铺</el-menu-item>
            <el-menu-item index="addGoods" @click="addGoods">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-plus"></i>图表
            </template>
            <el-menu-item index="visitor" @click="visitor">用户分布</el-menu-item>
            <el-menu-item index="newMember" @click="newMember">用户数据</el-menu-item>
          </el-submenu>
           <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="uploadImg">上传图片</el-menu-item>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="uploadImg">管理员设置</el-menu-item>
            <el-menu-item index="vueEdit">发送通知</el-menu-item>
          </el-submenu>
           <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item index="explain">说明</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <!-- <el-col :span="20" style="height:100%;overflow:auto">
          <keep-alive>

          </keep-alive>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    //用户列表
    userListHtml(){
      // console.log('Merchantlist');
      this.$router.push("userList");
    },
    //商铺列表
    Merchantlist(){
      // console.log('Merchantlist');
      this.$router.push("Merchantlist");
    },
    //食品列表
    foodList(){
      this.$router.push("foodList");
    },
    //订单列表
    orderList(){
      this.$router.push("orderList");
    },
    //管理员列表
    adminList(){
      this.$router.push("adminList");
    },
    //添加商铺
    addShop(){
      this.$router.push("addShop");
    },
    //添加商品
    addGoods(){
      this.$router.push("addGoods");
    },
    //用户分布
    visitor(){
      this.$router.push("visitor");
    },
    //用户数据
    newMember(){
      this.$router.push("newMember");
    }
  }
}
</script>
<style lang='less' scoped>
// @import '../style/mixin.less';
</style>
