const form=document.querySelector("#form")
const selected_value=document.querySelector("#rating-selected-value")
const btn_values=document.querySelectorAll(".btn-circle")
let rating_start=document.querySelector("#rating-start")
let rating_end=document.querySelector("#rating-end")


for(let v of btn_values){
    v.addEventListener("click",function setActive(){
        (v===document.activeElement)&&(selected_value.innerHTML=`${v.value}`);
    })
}
form.addEventListener("submit",function noRefresh(e){
    selected_value.innerHTML!==``?( e.preventDefault(),end_transition()):e.preventDefault();
})
 function end_transition(){
    rating_start.style.display="none"
    rating_end.style.display="flex"
} 

