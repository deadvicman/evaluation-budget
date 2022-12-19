registerDepens.addEventListener("click", function (){
    const math = parseFloat(libre.value) + parseFloat(createInput.value)
    console.log(math)
    addi.addEventListener("click", function (){
        result.innerHTML = math
    })
})