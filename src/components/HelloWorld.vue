<template>
  <el-card class="box-card">
    <h1>动态路由</h1>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item>
        <el-input
          prefix-icon="el-icon-user"
          v-model="formLabelAlign.name"
          placeholder="默认账号：admin"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          prefix-icon="el-icon-lock"
          v-model="formLabelAlign.region"
          placeholder="默认密码：123456"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <router-link to="/about">
          <el-button type="primary" round>登陆</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
};
</script>

<style scoped lang="less">
.el-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  h1 {
    text-align: center;
  }
  /deep/ .el-input__inner {
    height: 30px;
  }
  /deep/ .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-button {
    height: 30px;
    line-height: 7px;
    width: 100%;
  }
}
</style>