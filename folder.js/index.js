const celeste = document.getElementById( 'celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde  = document.getElementById('verde');

const botonEmpezar = document.getElementById('btnEmpezar');

// console.log(botonE)

class Juego {
	constructor(){
		this.inicializarJuego()
		this.generarSecuencia()
		this.siguienteNivel()
	}
	inicializarJuego(){
		this.eligirColor = this.eligirColor.bind(this)
		botonEmpezar.classList.add('hide')
		this.nivel = 1
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde
		}

	}
	generarSecuencia(){
		this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
	}

	siguienteNivel(){
    this.iluminarSecuencia()
    this.agregarEventosClick()
	}

	tranformarNumeroAColor(numero){
		switch (numero){
			case 0:
			return 'celeste'
			case 1:
			return 'violeta'
			case 2:
			return 'naranja'
			case 3:
			return 'verde'
		}

	}
	iluminarSecuencia(){
		for(let i = 0; i<this.nivel; i++){
			const color = this.tranformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
		}
	}
	iluminarColor(color){
		
		this.colores[color].classList.add('light')
		
		setTimeout(() => this.apagarColor(color), 350)
	}
	apagarColor(color){
		this.colores[color].classList.remove('light')
	}
	agregarEventosClick(){
		this.colores.celeste.addEventListener('click', this.eligirColor)
		this.colores.verde.addEventListener('click', this.eligirColor)
		this.colores.violeta.addEventListener('click', this.eligirColor)
		this.colores.naranja.addEventListener('click', this.eligirColor)

	}
	eligirColor(ev){
		console.log(this)

	}
}

function empezarJuego(){
	window.juego = new Juego()

}
// alert('hola')