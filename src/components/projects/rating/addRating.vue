<template>
  <el-dialog title="Adicionar nova avaliação!!!" :visible.sync="showModal" @close="closeDialog">
      <el-form ref="form" :model="form" :inline="true" label-position="top" >
        <div align="center">
          <el-form-item label="Qual a sua matrícula?" label-width="50px">
            <el-input v-model="newRating.matricula" align="center"></el-input>
          </el-form-item><br>
        </div>
        <div align="center">
          <el-form-item label="Qual o prédio?" label-width="60px">
            <el-col :span="60">
              <el-select v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        <el-form-item label="Qual o produto?">
          <el-col :span="24">
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item><br>
        </div>
        <div align="center">
          <el-form-item label="Qual o tipo do produto?" align="center">
            <el-radio v-model="radio" label="1">Bebida</el-radio>
            <el-radio v-model="radio" label="2">Comida</el-radio>
          </el-form-item><br>
        </div>
        <div align="center">
          <el-form-item label="Qual o produto">
            <el-col :span="24">
              <el-select v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="Qual o preço do produto?">
            <el-form-item>
             <el-input v-model="newRating.precoAtual"></el-input>
            </el-form-item>
          </el-form-item><br><br>
          <el-form-item label="Qual a nota do rango?">
            <el-rate
              v-model="newRating.nota">
            </el-rate>
          </el-form-item><br><br>
        </div>
        <div align="center">
          <el-form-item label="Qual o seu comentário?" label-width="100px">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="Please input"
              v-model="textarea">
            </el-input>
          </el-form-item><br>
        </div>
        <div align="center">
          <el-form-item>
            <el-button 
              type="primary"
              @click="addNewRating()"
              :disabled="!newRating.name">Add 
            </el-button>
            <el-button type="primary" @click="closeDialog()">Cancel</el-button> 
          </el-form-item>
        </div>
      </el-form> 
  </el-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    showModal:{
      type: Boolean
    }
  },
  data(){
    return {
      newRating: {
        name: ''
      },
       options: [{
          value: 'Option1',
          label: 'Engenharia'
        }, {
          value: 'Option2',
          label: 'Biologia'
        }, {
          value: 'Option3',
          label: 'Veterinária'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',
      labelPosition: 'right'
    }
  },
  computed: {
    ...mapGetters('rating', ['ratingData']),
    validateSubmit(){
      if(!this.newRating.name)
        return true;
      else
        return false;
    }
  },
  methods: {
    ...mapActions('rating', ['addRating', 'getRatings']),
    closeDialog(){
      this.$emit('closeDialog',false);
      this.newRating = {
        matricula: '',
        predio: '',
        nomeCantina: '',
        produto: '',
        comentario: '',
        precoAtual: '',
        nota: ''
      };
    },
    addNewRating(){
      this.addRating(this.newRating);
      this.closeDialog();
    }
  }
}
  
</script>

<style>

</style>
