


function encontrarVocalA(string){
    for (let i = 0; i < string.length; i++){
      if(string[i]==="a"){
        return "Encontramos la vocal a"
      }
    }
    return "La palabra no tiene la vocal a"
  }
  console.log(encontrarVocalA("paula"))


function CuentaRegresiva(num){
  for (var i = num ; i>=0 ; i--) {
    console.log (i)
  }
}

CuentaRegresiva (5)


function deletrear(string){
  for(var i = 0 ; i < string.length ; i++){
    console.log(string[i]);
  }
}

deletrear('fatima')



function MientrasMenorSeis(){
  var contador = 1
  while(contador < 6){
    console.log ("contador es:" + contador)
    contador = contador + 1
  }
  return contador

}
  
MientrasMenorSeis()


var contador = 0
do {
  console.log('contador' + contador)
  contador++
  console.log(contador)
  
} while (contador <=5);
    


function semaforo(color){
  switch(color){
    case 'rojo':
      return 'los autos se detienen'
    case 'amarillo':
      return 'los autos avanzan o se detienen'
    case 'verde':
      return 'los autos avanzan'
    default :
      return 'este color no es del semaforo'
  }
}


console.log(semaforo ('verde'))


var comidas = ['pizza', 'hamburguesa', 'hot dog', 'lasaña']

console.log(comidas[3])


var comidas = ['pizza', 'hamburguesa', 'hot dog', 'lasaña']

var comidaFavorita = comidas[1]

console.log (comidaFavorita)

comidas [3] = 'helado'

console.log(comidas)


var comidas = ['pizza', 'hamburguesa', 'hot dog', 'lasaña']

//console.log(comidas.length)

for(var i = 0; i< comidas.length; i++){
  console. log(comidas[i])
}


var comidas = ['pizza', 'hamburguesa', 'hot dog', 'lasaña']

for(var comida of comidas){
  console.log(comida)
  
}




