<template>
  <div>
        <el-row class="container">
          <div class="cadastro-header">
              <el-col :span="22">


              </el-col>

              
          </div>

  	<div id="mapa">
		<div id="info-icex" onmouseout="esconderIcex()"></div>
		<div id="info-eng" onmouseout="esconderEng()"></div>
		<div id="info-icb" onmouseout="esconderIcb()"></div>
		<div id="info-face" onmouseout="esconderFace()"></div>
		<div id="info-fafich" onmouseout="esconderFafich()"></div>
		<div id="info-musica" onmouseout="esconderMusica()"></div>
		<div id="info-vet" onmouseout="esconderVet()"></div>
		<div id="info-farmacia" onmouseout="esconderFarmacia()"></div>
		<div id="info-coltec" onmouseout="esconderColtec()"></div>
		
		<img id="icex" src="marcador.png" onmouseover="mostrarIcex()"></img>
		<img id="eng" src="marcador.png" onmouseover="mostrarEng()"></img>
		<img id="icb" src="marcador.png" onmouseover="mostrarIcb()"></img>
		<img id="face" src="marcador.png" onmouseover="mostrarFace()"></img>
		<img id="fafich" src="marcador.png" onmouseover="mostrarFafich()"></img>
		<img id="musica" src="marcador.png" onmouseover="mostrarMusica()"></img>
		<img id="vet" src="marcador.png" onmouseover="mostrarVet()"></img>
		<img id="farmacia" src="marcador.png" onmouseover="mostrarFarmacia()"></img>
		<img id="coltec" src="marcador.png" onmouseover="mostrarColtec()"></img>
	
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
    openModal(){
      this.showModal = true
    },
    closeModal(){
      this.showModal = false
    }
  }
}
//icex
function mostrarIcex() {
    document.getElementById("info-icex").style.display = "block";
}

function esconderIcex() {
    document.getElementById("info-icex").style.display = "none";
}

//eng
function mostrarEng() {
    document.getElementById("info-eng").style.display = "block";
}

function esconderEng() {
    document.getElementById("info-eng").style.display = "none";
}
//icb
function mostrarIcb() {
    document.getElementById("info-icb").style.display = "block";
}

function esconderIcb() {
    document.getElementById("info-icb").style.display = "none";
}
//face
function mostrarFace() {
    document.getElementById("info-face").style.display = "block";
}

function esconderFace() {
    document.getElementById("info-face").style.display = "none";
}
//fafich
function mostrarFafich() {
    document.getElementById("info-fafich").style.display = "block";
}

function esconderFafich() {
    document.getElementById("info-fafich").style.display = "none";
}
//musica
function mostrarMusica() {
    document.getElementById("info-musica").style.display = "block";
}

function esconderMusica() {
    document.getElementById("info-musica").style.display = "none";
}
//vet
function mostrarVet() {
    document.getElementById("info-vet").style.display = "block";
}

function esconderVet() {
    document.getElementById("info-vet").style.display = "none";
}
//farmacia
function mostrarFarmacia() {
    document.getElementById("info-farmacia").style.display = "block";
}

function esconderFarmacia() {
    document.getElementById("info-farmacia").style.display = "none";
}
//coltec
function mostrarColtec() {
    document.getElementById("info-coltec").style.display = "block";
}

function esconderColtec() {
    document.getElementById("info-coltec").style.display = "none";
}
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
