<template>
  <div class="teste">
    <el-menu default-active="activeIndex" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/mineShot">Mine Shot</el-menu-item>
      <el-menu-item index="/truckLoad">Truck Load</el-menu-item>
      <el-menu-item>Block Model</el-menu-item>
    </el-menu>  
  </div>
</template>

<script>
  
</script>

<style scoped>
.el-menu {
  background-color: #fff;
}

.el-menu-item, .el-submenu, .el-submenu__title {
  color: #888;
}

.el-menu-item:hover, .el-submenu:hover, .el-submenu__title:hover {
  background: #fff;
}

.el-menu--horizontal .el-menu-item:hover, .el-submenu__title:hover{
  border-bottom: 0px;
}

.el-menu--horizontal .el-menu-item:hover, 
.el-menu--horizontal .el-submenu__title:hover {
  background-color: #fff;
}
.el-menu-item, .el-submenu__title {
  transition: none;
}

.sub-menu:hover .el-submenu__title:hover{
  border-bottom: 0px;
}


</style>
