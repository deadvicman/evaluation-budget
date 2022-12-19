////////////////////////////////////////////// VARIABLES
let reset = document.getElementById("reset")
let infoDepense = document.getElementById("infoDepense")
let infoRecette = document.getElementById("infoRecette")
let subDep = document.getElementById("subDep")
let subRec = document.getElementById("subRec")
let registerDepens = document.getElementById('registerDepens')
let myLi = document.querySelectorAll("li")
let result = document.getElementById("result")
let show = document.getElementById("addi");

////////////////////////////////////////////// BOUCLES
for(let i = 0; i < myLi.length; i++){
    let createInput = document.createElement("input")
    createInput.placeholder = "Votre chiffre ici.."
    createInput.type = "number"
    createInput.value = "0" // Défini la valeur de 0 par défaut
    createInput.style.marginLeft = '1rem'
    myLi[i].appendChild(createInput)
    createInput.id = "test" + i // Ajouter +1 à chaque id

    function addi(){
        const operate = parseFloat(document.getElementById("test0").value) - parseFloat( document.getElementById("test1").value) -
            parseFloat(document.getElementById("test2").value) - parseFloat(document.getElementById("test3").value) -
            parseFloat(document.getElementById("test4").value) - parseFloat(document.getElementById("test5").value) -
            parseFloat(document.getElementById("test6").value) - parseFloat(document.getElementById("test7").value) -
            parseFloat(document.getElementById("test8").value) - parseFloat(document.getElementById("test9").value) -
            parseFloat(document.getElementById("test10").value) - parseFloat(document.getElementById("test11").value) +
            parseFloat(document.getElementById("test12").value) + parseFloat(document.getElementById("test13").value) +
            parseFloat(document.getElementById("test14").value) + parseFloat(document.getElementById("test15").value) +
            parseFloat(document.getElementById("libre").value)
        console.log(operate)
        show.addEventListener("click", function (){
            if (operate.toString() < 0){
                result.innerHTML = operate.toString() + "<br>"
                result.innerHTML += "Vous êtes en négatif, travaillez plus"
            }
            if (operate.toString() > 100){
                result.innerHTML = operate.toString() + "<br>"
                result.innerHTML += "Vous êtes en positif, travaillez quand même plus"
            }
        })
    }
    registerDepens.addEventListener("click", function (){
        addi()
    })
    reset.addEventListener('click', function (){
        createInput.value = "0"
    })
}
subDep.addEventListener("click", function (){
    let lit = document.createElement("li"); // créer un li

    let lastInput = document.createElement("input")
    lastInput.type = "number"
    lastInput.value = 0
    lastInput.placeholder = "Votre chiffre ici.."

    let lastInputName = document.createElement("span") // le span
    lastInputName.innerHTML = infoDepense.value

    let myList = document.getElementById("testlist")

    myList.appendChild(lit) //créer le lit depuis mylist

    lit.prepend(lastInputName) // créer le li avant le input
    lit.appendChild(lastInput)
})