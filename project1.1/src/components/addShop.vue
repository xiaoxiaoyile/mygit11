<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin:10px auto;" >
    <el-form-item label="店铺名称" prop="storeName" >
      <el-input v-model="ruleForm.storeName"  ></el-input>
    </el-form-item>
    <el-form-item label="详情地址" prop="detailsAddress">
      <el-input v-model="ruleForm.detailsAddress"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="contactNumber">
      <el-input v-model="ruleForm.contactNumber"></el-input>
    </el-form-item>
    <el-form-item label="店铺简介" prop="shopProfile">
      <el-input v-model="ruleForm.shopProfile"></el-input>
    </el-form-item>
     <el-form-item label="店铺标语" prop="shopSlogan">
      <el-input v-model="ruleForm.shopSlogan"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
   
    <el-form-item label="店铺特点" >
      <el-switch label="品牌保证" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
      <el-switch label="蜂鸟专送" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
      <el-switch label="新开店铺" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
      <el-switch label="外卖保" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
      <el-switch label="准时达" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
      <el-switch label="开发票" v-model="ruleForm.delivery" name="branGuarantee"></el-switch>
    </el-form-item>
    <el-form-item label="派送费" >
        <el-input-number v-model="num1" @change="handleChange1" :min="5" :max="10" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item label="起送价" >
        <el-input-number v-model="num2" @change="handleChange2" :min="20" :max="30" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item label="营业时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="开始时间" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker placeholder="结束时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="上传店铺头像">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="上传营业执照">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          storeName: '',
          detailsAddress:'',
          contactNumber:'',
          shopProfile:'',
          shopSlogan:'',
          region: '',
          date1: '',
          date2: '',
          branGuarantee: false,
          type: [],
          resource: '',
          desc: ''
        },
        num1: 5,
        num2: 20,
        rules: {
          
        }
      };
    },
    methods: {
      handleChange1(value) {
        console.log(value);
      },
       handleChange2(value) {
        console.log(value);
      }
    }
  }
</script>
<style>
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height:178px;
    top:50%;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>