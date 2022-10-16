<template>
  <div class="about">
    <el-container>
      <el-aside width="200px">
        <aside-layout />
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-avatar">
            <el-avatar
              style="margin-right: 10px"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            >
            </el-avatar>
            <el-popover
              placement="bottom"
              width="50"
              trigger="click"
              v-model="visible"
            >
              <el-button slot="reference"
                ><p>管理员</p>
                <p>管理员——admin</p></el-button
              >
              <div style="text-align: center; margin: 0">
                <el-button
                  style="background: pink; color: #fff"
                  size="mini"
                  @click="visible = false"
                  >退出</el-button
                >
              </div>
            </el-popover>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import asideLayout from "../components/Aside/index.vue";
export default {
  components: { asideLayout },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style scoped lang="less">
.el-header {
  background-color: #fff;
  color: black;
  .header-avatar {
    position: absolute;
    right: 50px;
    display: flex;
    .el-button {
      text-align: left !important;
      padding: 0 !important;
      border: none !important;
      line-height: 0.5 !important;
    }
    .el-button:hover,
    .el-button:focus {
      background: #fff !important;
      color: #606266 !important;
    }
  }
  .el-button:active {
    color: #606266;
  }
}

.el-aside {
  background-color: pink;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-aside {
  z-index: 999;
}
</style>
