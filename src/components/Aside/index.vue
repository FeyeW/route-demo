<template>
  <el-menu>
    <el-menu-item index="1"> 选项1 </el-menu-item>
    <el-menu-item index="2">选项2</el-menu-item>
    <el-submenu index="3">
      <template slot="title"
        ><i style="color: #fff" class="el-icon-setting"></i>选项3</template
      >
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">分组1.1</el-menu-item>
        <el-menu-item index="3-2">分组1.2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="4">选项4</el-menu-item>
  </el-menu>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped lang='less'>
.el-menu,
.menu-title {
  background: pink;
  .el-menu-item,
  /deep/ .el-submenu__title {
    color: #fff;
  }
  .el-menu-item:hover,
  /deep/ .el-submenu__title:hover {
    background: rgb(199, 126, 138);
  }
  .el-menu-item:focus,
  /deep/ .el-submenu__title:focus {
    background: pink;
    color: rgb(255, 138, 43);
  }
}
/deep/.el-menu-item-group__title {
  color: rgb(166, 47, 26);
}
.el-submenu /deep/ .el-menu {
  background: pink !important;
}
</style>