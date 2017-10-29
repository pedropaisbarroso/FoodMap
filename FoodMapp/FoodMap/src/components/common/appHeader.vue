<template>
  <div>
    <el-row class="appHeader">
      <el-col :span="16">
        <div class="grid-content">
          <!-- <img @click="goToHome"class="logoApp" src="../../assets/logo.png"/> -->
        </div>
      </el-col>
      <el-col :span="8" style="text-align: right">
        <el-menu
            class="menu-header"
            mode="horizontal"
            :router="true">
          <el-submenu index="1">
            <template slot="title">Rating</template>
            <el-menu-item index="/truckLoad">Usuário</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">Cardápios</template>
            <el-menu-item index="/geology/block-report">Adicionar item</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">Usuários</template>
            <el-menu-item index="/cadastro">Cadastro</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
  </el-row>
  </div>
</template>


<script>
import appMenu from './appNavbar.vue'

export default {
  components: {
    appMenu: appMenu
  },
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods: {
    handleSelect(key, keyPath) {

    },
    goToHome(){
      this.$router.push('/');
    },
    changeLocaleTo(locale) {
      this.$store.state.locale = locale;
    }
  }
}
</script>

<style scoped>
.appHeader {
  background-color: #ffffff;
}

.logoApp {
  width: 10%;
  margin: 5px 30px;
  cursor: pointer;
}

.menu {
  background-color: #fff;
  text-align: right;
}

.locale-flags {
  margin-top: 13px;
  margin-right: 20px;
}

.locale-flags img {
  width: 35px;
  cursor: pointer;
  margin-right: 3px;
}
</style>