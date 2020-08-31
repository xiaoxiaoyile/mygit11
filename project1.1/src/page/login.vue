<template>
  <div class="login_page fillconctain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>Y-FMM后台管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示:</p>
        <p class="tip">未登录过的用户,自动注册</p>
        <p class="tip">注册过的用户可以凭借账户密码登录</p>
      </section>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  // 声明周期钩子函数
  mounted() {
    // 判断vuex中的adminInfo是否是当前用户id  如果不是  则存入vuex仓库
    if(!this.adminInfo.id){
        // 调用vuex中的方法 从在  vuex  的 store中
        this.getAdminData();
    }
  },
  // 计算属性===> 监听  监测  adminInfo变量的 变化
  computed: {
    ...mapState(['adminInfo'])
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      showLogin: true
    };
  },
  methods: {
    ...mapActions(["getAdminData"]),
    async submitForm(formName){
      console.log(this);
      this.$refs[formName].validate(async valid=>{
        if(valid){
          // 如果通过了data中的数据校验, 则需要操作后台返回结构(后台接口实现)
          // 所以在这里 我们需要假数据  校验==>为了更好操作 直接进入系统主界面
          this.$message({
            type:'success',
            message:'登录成功'
          })
          this.$router.push("manage");
        }else{
          this.$notify.error({
            title:"错误",
            message:'请输入正确的用户名或密码',
            offset:100
          })
          return false;
        }
      })
    }
  },
  watch: {
    adminInfo:function(newValue){
      if(newValue.id){
        console.log("===========+++++++++++++");
        this.$message({
          type:'success',
          message:'检测到您之前登陆过,将自动登录'
        })
        this.$router.push('manage');
      }
    }
  },
};
</script>
<style lang='less' scoped>
@import '../style/mixin.less';
.login_page{
  background-color: #324057;
} 
.manage_tip{
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p{
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer{
  .ctp(320px,210px);
  .wh(320px,210px);
  padding: 25px;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  .submit_btn{
    width: 100%;
    font-size: 16px;
  }
}
.tip{
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,.form-fade-leave-active{
  transition: all 3s;
}
.form-fade-enter,.form-fade-leave-active{
  transform: translate3d(0,-50px,0);
  opacity: 0;
}
</style>
