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

		<div id="info-icex" @mouseout="esconderIcex()">Cantina icex</div>
		<div id="info-eng" @mouseout="esconderEng()"></div>
		<div id="info-icb" @mouseout="esconderIcb()"></div>
		<div id="info-face" @mouseout="esconderFace()"></div>
		<div id="info-fafich" @mouseout="esconderFafich()"></div>
		<div id="info-musica" @mouseout="esconderMusica()"></div>
		<div id="info-vet" @mouseout="esconderVet()"></div>
		<div id="info-farmacia" @mouseout="esconderFarmacia()"></div>
		<div id="info-coltec" @mouseout="esconderColtec()"></div>
	
	
	</div>
        </el-row> 
  </div>  

  
</template>

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
     mostrarIcex() {
    document.getElementById("info-icex").style.display = "block";
},
 esconderIcex() {
    document.getElementById("info-icex").style.display = "none";
},


//eng
 mostrarEng() {
     var x = 5;
    document.getElementById("info-eng").innerHTML = x
    document.getElementById("info-eng").style.display = "block";
  
    axios.get(rootState.baseUrl + 'Avaliacoes', cantina)
      .then(response => {
          commit('setMapas', response.data);
        })
    
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 100px;
    right: 60px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 100px;
    right: 125px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 75px;
    right: 250px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 130px;
    right: 50px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 265px;
    right: 55px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 315px;
    right: 145px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 90px;
    right: 220px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 130px;
    right: 245px;
    background-color: white;
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
    position: absolute;
    display: none;
    width: 300px;
    height: 150px;
    top: 190px;
    right: 170px;
    background-color: white;
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