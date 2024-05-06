// // window.addEventListener('load',cosa)
// window.addEventListener('load',random)
// function random(){
//     document.getElementById("f1").addEventListener('submit',random2)
// }
//  function random2(){
//     fetch('/procesar')
//             .then(response => response.json())
//             .then(data => {
//                 // Manejar los datos recibidos y mostrarlos en la página
//                 console.log( JSON.stringify(data));
//             })
//             .catch(error => {
//                 console.error('Error al obtener datos del servidor:', error);
//             });
//         }
// function cosa(){
//     const buscar=document.getElementById('buscar')
//     const elemente = document.createElement('ul')
//     const eldiv=document.getElementById("buscar")
//     elemente.id='lallista'
//     eldiv.insertAdjacentElement('afterend',elemente)

//    const x= document.getElementById('input')
//     x.addEventListener('waiting' ,borrarllista)
//     x.addEventListener('input',atra)
//     x.addEventListener('reset',reset)
//     x.addEventListener('focus', atra)
//     const boton = document.getElementById('boton')
//     boton.addEventListener('click',limpiar)
// }
// function atra(){
//     borrarllista()
//     const valorq = document.getElementById("input").value
//     if (valorq!=""){            
//      const llistaids=[]
//      const llista=document.querySelectorAll('h2')
//     llista.forEach(element => {
      
//         llistaids.push(element.id)
//     });
//     i=2
//     llistaids.forEach(element2 => {
//         if(element2.includes(valorq)){
//             const add= document.createElement("li")
//             const llisyta=document.getElementById("lallista")
//             add.className='los'
//             add.innerHTML=element2
//             add.tabIndex=i
            
//             llisyta.style.display="block"
//             llisyta.appendChild(add);
//             i++
//             dondarpropi()
//         }
//     }

//     );
//     }
//     else{
//         const llistaids=[]
//         const llista=document.querySelectorAll('h2')
//         llista.forEach(element => {
         
//            llistaids.push(element.id)
//        });
//        i=0
//        while (i<3){
//             const add= document.createElement("li")
//             const llisyta=document.getElementById("lallista")
//             add.className='los'
//             add.innerHTML=llistaids[i]
//             llisyta.style.display="block"
//             llisyta.appendChild(add);
//             dondarpropi()
//             i++
//        }
//     }
   
// }
// function borrarllista(){
//     const llista = document.getElementById('lallista');
//     while (llista.firstChild) {
//         llista.removeChild(llista.firstChild);
//     }
// }
// function dondarpropi(){
//     const llistes = document.getElementsByClassName('los')
    
//     for (var i = 0; i < llistes.length; i++) {
//         // Acceder a cada elemento de la colección por su índice
//         var elemento = llistes[i];
//         elemento.addEventListener('mouseover',canviar)
//         elemento.addEventListener('click',valor)
       
//         // Hacer algo con cada elemento, por ejemplo, imprimir su contenido
      
// }


// }
// function valor(){
//     console.log('entra')
//      document.getElementById("input").value=this.textContent
//     atra()
// }
// function anar(){

   

//    var anara = document.getElementById("input").value
//    var aa= document.getElementById(anara)
//    try{
//     aa.scrollIntoView(true)
//     aa.style.color="red"
//    }
//    catch(e){
//     console.log("La array llita es nula s"+ e )
//    }
   
   
//     borrarllista()
// }
// function limpiar(){
//     const llista=document.querySelectorAll('h2')
//     llista.forEach(element => {
      
//         element.style.color='black'
//         element.style.fontSize='32px'
//     });
//     anar()
// }
// function canviar(){
//     const x= document.getElementById('input')
//     x.placeholder=this.innerHTML
// }
// function reset(){
//     this.placeholder="Bucar dentro de la web"
// }
// // function ultimredo(){
// //      const llista=document.getElementsByClassName('los')
// //      const llista2=document.getElementById('lallista')
// //      llista[llista.length-1].style.color= 'red'
// //      llista[llista.length-1].style.borderBottom= "1px solid black"
// //      llista[llista.length-1].style.borderRadius="5px 5px"
// //      llista2.style.borderBottom= "0px solid red"
// // }


// //TO-DO que quan clickes una opcio y soles hi haga una opcio no aprega