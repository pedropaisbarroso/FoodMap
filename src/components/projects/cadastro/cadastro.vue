<template>
  <div>
        <el-row class="container">
          <div class="cadastro-header">
              <el-col :span="22">
                <h1>Cadastro de novo avaliador:</h1 >
              </el-col>
          </div>


        </el-row> 
  </div>  
</template>
 dafadfas
<script>  
import { mapGetters, mapActions } from 'vuex'
//import cadastroTable from './cadastroTable'


export default {
  computed: {
    //...mapGetters('cadastro', ['content', 'cadastros']),

  },
  created: function() {
    //this.getCadastros();
  },
  components: {
      // cadastroTable: cadastroTable
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    //...mapActions('cadastro', ['getCadastros', 'getShifts']),
    openModal(){
      this.showModal = true
    },
    closeModal(){
      this.showModal = false
    }
  }
}
</script>
<style scoped>
.cadastro-header {
  padding: 0% 0% 4% 0%;
}

.cadastro-header h1 {
  color:#286a6a;
  font-weight: 500;
  text-align: center;
}
.container {
  width:90%;
  margin: 0 auto;
  margin: 1% 1%;
  border-radius: 5px;
  padding: 0% 0% 0% 5%;
}

.align-right {
  text-align: right;
  padding: 10px 0px;
}
