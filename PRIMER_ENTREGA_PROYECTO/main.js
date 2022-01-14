class Tutor {
    constructor(pNombre, pEmpresa ){
        this.nombre = []
        this.empresa = []
        
    }
}

class Movimiento {
    constructor(pFecha, pIngreso , pEgreso  ,todosLosMovimientos,pInformacion){
        this.fecha = pFecha
        this.ingreso = []
        this.egreso = []
        this.todosLosMovimientos = todosLosMovimientos
        this.informacion = pInformacion
    }
       
    sumarMovimientos(){
        let sumar = 0;
        for(var i=0; i< this.todosLosMovimientos.length; i++){
            sumar += this.todosLosMovimientos[i]
            
        }
        console.log("La suma Total es ", sumar);
    }
    
}


const ingreso = [1000,6000,760,8900]
let credito = [Movimiento.ingreso]
credito.push(ingreso)


const egreso = [-9000,-7809,-6555,-3456]
let debito =[Movimiento.debito]
debito.push(egreso)



let nombre = []
const tutor1 = new Tutor("","")
tutor1.nombre = prompt("Ingrese su nombre")
tutor1.empresa = prompt("Ingrese su Empresa Ejemplo :Coder ")
nombre.push(tutor1)
console.log(nombre)

let todosLosMovimientos = ingreso.concat(egreso)



const movimiento1 = new Movimiento(new Date(),ingreso ,egreso, todosLosMovimientos ,nombre)


if (tutor1.nombre != "" && tutor1.empresa != ""    ){
   
console.log(movimiento1)
 movimiento1.sumarMovimientos()
   

}



