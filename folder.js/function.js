
 class persona {
    constructor(puntoGanar, bomba, puntoPerder){
	this.puntoGanar = puntoGanar
	this.bomba = bomba
	this.puntoPerder = puntoPerder
}
ganar(){
  return this.puntoGanar
}
perdio() {
	return this.puntoPerder
}
explota(){
	return this.bombas
}
}
class  segundoNivel  extends persona{
	constructor(puntoMax, puntoPerder, bombaPinchar){
    super(puntoMax, puntoPerder, bombaPinchar)
}
saludar(){
	return this.puntoPerder
}
}
let juego = new persona("100", 'pum', '50')
 let juegoGanado = new persona("100", 'pum', '50')
  let juegePerdido = new persona("100", 'pum', '50')
  let saludar = new persona("torco",  '50')
  // nombre.saludar()