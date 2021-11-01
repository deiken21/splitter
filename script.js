"use strict"
function split4(){
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
    addQuarter(this)
}
function addQuarter(intoDiv){
    let q = document.createElement("div")
    q.classList.add("flexy")
    q.classList.add("quarter")
    q.addEventListener("click",split4)
    q.style.backgroundColor=`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
    intoDiv.appendChild(q)

}
document.body.addEventListener("click",split4)