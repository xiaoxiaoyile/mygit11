<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin:10px auto;" >
    <el-form-item label="食品种类" >
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option label="特点一" value="shanghai"></el-option>
        <el-option label="特点二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="食品名称" prop="storeName" >
      <el-input v-model="ruleForm.storeName"  ></el-input>
    </el-form-item>
    <el-form-item label="食品活动" prop="detailsAddress">
      <el-input v-model="ruleForm.detailsAddress"></el-input>
    </el-form-item>
    <el-form-item label="食品详情" prop="contactNumber">
      <el-input v-model="ruleForm.contactNumber"></el-input>
    </el-form-item>
    <el-form-item label="上传食品图片">
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
    <el-form-item label="食品特点" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择">
        <el-option label="特点一" value="shanghai"></el-option>
        <el-option label="特点二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="食品规格"> 
      <el-radio v-model="radio" label="1">单规格</el-radio>
      <el-radio v-model="radio" label="2">多规格</el-radio>
    </el-form-item>
    <el-form-item label="包装费" >
        <el-input-number v-model="num1" @change="handleChange1" :min="5" :max="10" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item label="价格" >
        <el-input-number v-model="num2" @change="handleChange2" :min="20" :max="30" label="描述文字"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button style="width:150px;height:45px" type="primary">确认添加食品</el-button>
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
        rules: {
          
        }
      };
    },
    methods: {
      
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