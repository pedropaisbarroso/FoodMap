<template>
  <div>
    <el-table
        :data="ratingSliced(page)"
         stripe class="appTable">fdasfad
      <el-table-column
          prop="date"
          :label="teste"
          :formatter="formatDate"
          :header-align="'center'">
      </el-table-column>
      <el-table-column 
          prop="shift"
          :label="teste"
          :header-align="'center'">
      </el-table-column>
      <el-table-column
          prop="initialTonnes"
          :label="teste"
          :header-align="'center'">
      </el-table-column>
      <el-table-column
          prop="finalTonnes"
          :label="teste"
          :header-align="'center'">
        <template scope="load">
          <el-input
              @blur="updateRating(load.$index)"
              v-model="load.row.finalTonnes.edited">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
          prop="tonnes"
          :label="teste"
          :header-align="'center'">
      </el-table-column>
      <el-table-column
          prop="moisture"
          :label="teste"
          :header-align="'center'">
        <template scope="load">
          <el-input
              @blur="updateRating(load.$index)"
              v-model="load.row.moisture.edited">
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
          prop="dryTonnes"
          :label="teste"
          :header-align="'center'">
      </el-table-column>      
      <el-table-column
          prop="maintenanceDowntime"
          :label="teste"
          :header-align="'center'">
        <template scope="load">
          <el-input
              @blur="updateRating(load.$index)"
              v-model="load.row.maintenanceDowntime.edited">
          </el-input>
        </template>
      </el-table-column>      
      <el-table-column
          prop="operationalDowntime"
          :label="content.opTime"
          :header-align="'center'">
        <template scope="load">
          <el-input
              @blur="updateRating(load.$index)"
              v-model="load.row.operationalDowntime.edited">
          </el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        class="rating-pagination"
        small layout="prev, pager, next" 
        :total="ratingLength"
        @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default {
  computed: {
    ...mapGetters('rating', ['content', 'ratings', 'ratingData',  'ratingLength', 'ratingSliced'])
  },
  data() {
    return {
      loads: [],
      page: 1,
    };
  },
   methods: {
     ...mapActions('rating', ['getRatings', 'updateRating']),
     formatDate(row, column, date) {
       return moment(date).format('MM/DD/YYYY');
     },
    changePage(pageChanged){
      this.page = pageChanged;
      this.ratingSliced(this.page);
    },
   }
}
</script>


<style scoped>
  .align-right {
  text-align: right;
  padding: 0px 0px;
}
</style>