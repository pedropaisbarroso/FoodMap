<template>
  <div>
        <el-row class="container">
          <div class="cadastro-header">
              <el-col :span="22">


              </el-col>

              
          </div>
  	<div id="mapa">
          	
		<img id="icex" src="./marcador.png" @mouseover="mostrarIcex()"></img>
		<img id="eng" src="./marcador.png" @mouseover="mostrarEng()"></img>
		<img id="icb" src="./marcador.png" @mouseover="mostrarIcb()"></img>
		<img id="face" src="./marcador.png" @mouseover="mostrarFace()"></img>
		<img id="fafich" src="./marcador.png" @mouseover="mostrarFafich()"></img>
		<img id="musica" src="./marcador.png" @mouseover="mostrarMusica()"></img>
		<img id="vet" src="./marcador.png" @mouseover="mostrarVet()"></img>
		<img id="farmacia" src="./marcador.png" @mouseover="mostrarFarmacia()"></img>
		<img id="coltec" src="./marcador.png" @mouseover="mostrarColtec()"></img>

		<div id="info-icex" @mouseout="esconderIcex()">
        <h2>Cantina icex</h2>
        <el-rate
     v-model="value1"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value1} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value2"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value2} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value3"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value3} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value4"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value4} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-eng" @mouseout="esconderEng()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value5"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value5} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value6"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value6} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value7"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value7} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value8"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value8} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-icb" @mouseout="esconderIcb()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value9"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value9} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value10"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value10} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value11"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value11} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value12"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value12} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-face" @mouseout="esconderFace()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value13"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value13} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value14"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value14} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value15"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value15} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value16"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value16} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-fafich" @mouseout="esconderFafich()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value17"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value17} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value18"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value18} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value19"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value19} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value20"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value20} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-musica" @mouseout="esconderMusica()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value21"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value21} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value22"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value22} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value23"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value23} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value24"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value24} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-vet" @mouseout="esconderVet()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value25"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value25} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value26"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value26} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value27"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value27} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value28"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value28} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-farmacia" @mouseout="esconderFarmacia()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value29"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value29} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value30"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value30} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value31"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value31} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value32"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value32} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
		<div id="info-coltec" @mouseout="esconderColtec()">
              <h2>Cantina icex</h2>
        <el-rate
     v-model="value33"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value33} points">
    
    </el-rate>
    <table style="width:100%">
  <tr>
    <th>Produto</th>
    <th>Avaliação</th> 
    <th>Preço</th>
  </tr>
  <tr>
    <td>Misto</td>
    <td><el-rate
     v-model="value34"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value34} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Kibe</td>
    <td><el-rate
     v-model="value35"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value35} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
  <tr>
    <td>Vitamina</td>
    <td><el-rate
     v-model="value36"
     disabled
     show-score
     text-color="#ff9900"
    score-template="{value36} points">
    
    </el-rate></td>
    <td>R$2,00</td>
  </tr>
</table>
        </div>
	
	
	</div>
        </el-row> 
  </div>  

  
</template>

<script>  
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
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
     value1: 3,
value2: 2,
value3: 4,
value4: 3,
value5: 4,
value6: 5,
value7: 4,
value8: 4,
value9: 0,
value10: 3,
value11: 5,
value12: 4,
value13: 3,
value14: 4,
value15: 4,
value16: 2,
value17: 4,
value18: 3,
value19: 3,
value20: 3,
value21: 0,
value22: 3,
value23: 0,
value24: 1,
value25: 3,
value26: 3,
value27: 2,
value28: 2,
value29: 5,
value30: 2,
value31: 4,
value32: 5,
value33: 2,
value34: 5,
value35: 4,
value36: 3,
value37: 5

    };
  },
  methods: {
    //...mapActions('cadastro', ['getCadastros', 'getShifts']),
     mostrarIcex() {
    document.getElementById("info-icex").style.display = "block";
},
 esconderIcex() {
    document.getElementById("info-icex").style.display = "none";
},


//eng
 mostrarEng() {
       
    // var theUrl = "http://localhost:54918/api/Avaliacoes";
    // var xmlHttp = new XMLHttpRequest();
    
    // xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // xmlHttp.send( null );
    // document.getElementById("info-eng").innerHTML =  xmlHttp.responseText;
    document.getElementById("info-eng").style.display = "block";
},

 esconderEng() {
    document.getElementById("info-eng").style.display = "none";
},
//icb
 mostrarIcb() {
    document.getElementById("info-icb").style.display = "block";
},

 esconderIcb() {
    document.getElementById("info-icb").style.display = "none";
},
//face
 mostrarFace() {
    document.getElementById("info-face").style.display = "block";
},

 esconderFace() {
    document.getElementById("info-face").style.display = "none";
},
//fafich
 mostrarFafich() {
    document.getElementById("info-fafich").style.display = "block";
},

 esconderFafich() {
    document.getElementById("info-fafich").style.display = "none";
},
//musica
 mostrarMusica() {
    document.getElementById("info-musica").style.display = "block";
},

 esconderMusica() {
    document.getElementById("info-musica").style.display = "none";
},
//vet
 mostrarVet() {
    document.getElementById("info-vet").style.display = "block";
},

 esconderVet() {
    document.getElementById("info-vet").style.display = "none";
},
//farmacia
 mostrarFarmacia() {
    document.getElementById("info-farmacia").style.display = "block";
},

 esconderFarmacia() {
    document.getElementById("info-farmacia").style.display = "none";
},
//coltec
 mostrarColtec() {
    document.getElementById("info-coltec").style.display = "block";
},

 esconderColtec() {
    document.getElementById("info-coltec").style.display = "none";
},

    openModal(){
      this.showModal = true
    },
    closeModal(){
      this.showModal = false
    }
  }
}
//icex


       
  
</script>
<el-popover
  ref="popover1"
  placement="top-start"
  title="Title"
  width="200"
  trigger="hover"
  content="this is content, this is content, this is content">
</el-popover>
<style scoped>

#mapa {
background-image: url("./mapa_ufmg.png");
position: relative;
margin: auto;
width: 600px;
height: 550px;
z-index: 1
}

img{
	
	width: 35px;
	height: 35px;

}
/*icex*/
#info-icex {
    text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 100px;
    right: 60px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}  
#icex{
	position: absolute;
	top: 215px;
	right: 325px;
}
/*eng*/
#info-eng {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 100px;
    right: 125px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#eng{
	position: absolute;
	top:  215px;
	right: 390px;
}
/*icb*/
#info-icb {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 75px;
    right: 250px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#icb{
	position: absolute;
	top:  185px;
	right: 250px;
}
/*face*/
#info-face {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 130px;
    right: 50px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#face{
	position: absolute;
	top:  245px;
	right: 315px;
}
/*fafich*/
#info-fafich {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 265px;
    right: 55px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#fafich{
	position: absolute;
	top:  280px;
	right: 320px;
}
/*musica*/
#info-musica {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 315px;
    right: 145px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#musica{
	position: absolute;
	top:  325px;
	right: 150px;
}
/*Vet*/
#info-vet {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 90px;
    right: 220px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#vet{
	position: absolute;
	top:  100px;
	right: 220px;
}
/*farmacia*/
#info-farmacia {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 130px;
    right: 245px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#farmacia{
	position: absolute;
	top:  135px;
	right: 245px;
}
/*coltec*/
#info-coltec {
     text-align: center;
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 190px;
    right: 170px;
    background-color:#a7bccc;
    z-index: 2;
    border: 1px solid black;
    box-shadow: 4px black;
    border-radius: 20px;
}   
#coltec{
	position: absolute;
	top:  195px;
	right: 435px;
}
</style>