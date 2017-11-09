<template>
  <div>
        <el-row class="container">
        <div class="rating-header">
            <el-col :span="22">
            <h1>Avaliações das cantinas</h1 >
            </el-col>
        </div>
        <div class="align-right" :span="22">
            <el-button @click="openModal" class="add-button">add</el-button>
        </div>
        <rating-table></rating-table>
        </el-row> 
  </div>  
</template>
 dafadfas
<script>  
import { mapGetters, mapActions } from 'vuex'
import ratingTable from './ratingTable'


export default {
  computed: {
    ...mapGetters('rating', ['content', 'ratings']),

  },
  created: function() {
    this.getRatings();
  },
  components: {
      ratingTable: ratingTable
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    ...mapActions('rating', ['getRatings', 'getShifts']),
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
.rating-header {
  padding: 0% 0% 4% 0%;
}

.rating-header h1 {
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
</style>