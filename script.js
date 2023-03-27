
 function cor1(){
  let cor1 = document.getElementById("num1");
  if (cor1.checked){
    document.getElementById("n1").setAttribute("style", "background-color: rgba(59, 56, 56, 0.534")
  } else{
    document.getElementById("n1").setAttribute("style", "background-color: white")
  } 
 }
 function cor2(){
  let cor2 = document.getElementById("num2");
  if (cor2.checked){
    document.getElementById("n2").setAttribute("style", "background-color: rgba(59, 56, 56, 0.534")
  } else{
    document.getElementById("n2").setAttribute("style", "background-color: white")
  } 
 }
 function cor3(){
 let cor3 = document.getElementById("num3");
  if (cor3.checked){
    document.getElementById("n3").setAttribute("style", "background-color: rgba(59, 56, 56, 0.534")
  } else{
    document.getElementById("n3").setAttribute("style", "background-color: white")
  }
 }
 function cor4(){
  let cor4 = document.getElementById("num4");
  if (cor4.checked){
    document.getElementById("n4").setAttribute("style", "background-color: rgba(59, 56, 56, 0.534")
  } else{
    document.getElementById("n4").setAttribute("style", "background-color: white")
  }
 }
 function cor5(){
  let cor5 = document.getElementById("num5");
  if (cor5.checked){
    document.getElementById("n5").setAttribute("style", "background-color: rgba(59, 56, 56, 0.534")
  } else{
    document.getElementById("n5").setAttribute("style", "background-color: white")
  }
 }

 let nm1 = document.getElementById("num1");
  let nm2 = document.getElementById("num2")
  let nm3 = document.getElementById("num3")
  let nm4 = document.getElementById("num4")
  let nm5 = document.getElementById("num5")
  



function check(){
  //checks
  let sel = []
if (nm1.checked){
    sel.push(document.getElementById("n1").innerHTML)
  }
if(nm2.checked){
  sel.push(document.getElementById("n2").innerHTML)
}
if(nm3.checked){
  sel.push(document.getElementById("n3").innerHTML)
}
if(nm4.checked){
  sel.push(document.getElementById("n4").innerHTML)
}
if(nm5.checked){
  sel.push(document.getElementById("n5").innerHTML) 
}
// change screen
 document.querySelector("form.interface").setAttribute("style", "display: none;transition: ease-in-out 2s;")

 document.getElementById("interface2").setAttribute("style", "display: block;transition: ease-in-out 2s;")


 document.getElementById("resposta").innerHTML = "You selected "+sel[0]+" out of "+sel[1];
}
