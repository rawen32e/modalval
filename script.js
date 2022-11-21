document.querySelector("#btnRes").addEventListener("click", function(){
    let  name = document.querySelector("#name")
    let  age = document.querySelector("#age")
    let str =''
    if(age.value <= 20){
        str =`<p>${name.value} вы молод вам ${age.value} лет</p>`
    }
    else if (age.value > 20){
        str =`<p>${name.value} вы стар вам ${age.value} лет</p>`
    }
    document.querySelector(".rezult").insertAdjacentElement("beforeend", str)
})
