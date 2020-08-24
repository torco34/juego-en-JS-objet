let cuadroUno = document.getElementById('cuadro1')
let cuadroDos = document.getElementById('cuadro2')
let cuadroTres = document.getElementById('cuadro3')
let cuadroCuatro = document.getElementById('cuadro4')
let cuadroCinco = document.getElementById('cuadro5')
let cuadroSeis = document.getElementById('cuadro6')
let cuadroSiete= document.getElementById('cuadro7')
let cuadroOcho = document.getElementById('cuadro8')
let cuadroNueve = document.getElementById('cuadro9')
let cuadroDiez = document.getElementById('cuadro10')
let cuadroOnce= document.getElementById('cuadro11')
let cuadroDoce = document.getElementById('cuadro12')
let cuadroTrece = document.getElementById('cuadro13')
let cuadroCatorce = document.getElementById('cuadro14')

const comenzoJuego = document.getElementById('iniciar_juego')
console.log(comenzoJuego)


class Juego {


	constructor(){
		this.iniciar()
		this.secuenciaBotones()
	}
	iniciar(){
		comenzoJuego.classList.add('borrar')
		this.nivel = 1
		this.colores = {
			rosa: cuadroUno,
			celeste:  cuadroTres,
			morado: cuadroCinco,
			azul:  cuadroSiete,
			verde:cuadroNueve,
			trullo: cuadroOnce,
			cian:cuadroOnce
		}

	}
	secuenciaBotones(){
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
	}
}

function iniciaJuego(){
window.juego = new Juego()
}