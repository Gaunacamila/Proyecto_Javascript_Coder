class Tutor {
    constructor(pNombre, pEmpresa ){
        this.nombre = pNombre
        this.empresa = pEmpresa
        
    }
}

class Movimiento {
    constructor(pFecha, pIngreso , pEgreso  ,todosLosMovimientos,pInformacion){
        this.fecha = pFecha
        this.ingreso = pIngreso
        this.egreso = pEgreso
        this.todosLosMovimientos = todosLosMovimientos
        this.informacion = pInformacion
    }
       
    sumarMovimientos(){
        let sumar = 0;
        for(var i=0; i< this.todosLosMovimientos.length; i++){
            sumar += this.todosLosMovimientos[i]
            
        }
        console.log("Su saldo actual es",sumar);
    }
    
}


const ingreso = [1000,6000,760,8900]
let credito = [Movimiento.ingreso]
credito.push(ingreso)


const egreso = [-9000,-7809,-6555,-3456]
let debito =[Movimiento.debito]
debito.push(egreso)


 //let nombre =  prompt("Ingrese su nombre")
 //let empresa =  prompt("Ingrese su Empresa Ejemplo :Coder ")
 let nombre ="Camila"
 let empresa = "Coder"
const tutor1 = new Tutor(nombre,empresa)



let todosLosMovimientos = ingreso.concat(egreso)



const movimiento1 = new Movimiento(new Date(),ingreso ,egreso, todosLosMovimientos ,tutor1)


if (tutor1.nombre != "" && tutor1.empresa != ""    ){
   
console.log(movimiento1)
 movimiento1.sumarMovimientos()
   

}


const initSesion = () => {
    const bienvenida = document.querySelector(".titulo")
    const name = document.createElement("h1")
    name.textContent = `Bienvenido ${tutor1.nombre}`
    bienvenida.appendChild(name)
   
}

initSesion()



const mostrarSaldo = () => {
    const saldoUsuario = document.querySelector(".saldo")
    const saldo = document.createElement("spam")
    saldo.textContent = movimiento1.todosLosMovimientos
    saldoUsuario.appendChild(saldo)
    

}

mostrarSaldo()

/*
function mensaje(){
    alert("Oppsi  !! , proximamente se va a agregar")
}

*/

//let button = document.getElementById('btn').addEventListener('click',)

const addMovement = () => {

    let button = document.getElementById('btn').addEventListener('click', function mensaje(){
        alert("Oppsi  !! , proximamente se va a agregar");
         
     
    
        