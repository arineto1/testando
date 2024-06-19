function soma(){
    let a = document.getElementById("num1").value    
    let b = document.getElementById("num2").value    
    let soma = Number(a)+Number(b)
    document.getElementById("resultado").innerHTML =
    soma
}