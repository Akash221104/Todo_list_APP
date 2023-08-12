let input=document.getElementById("inp");
let text =document.querySelector('.text')
let button= document.getElementById("btn")

button.addEventListener('click',add);
function add(e){
    if(input.value=="")
    {
        alert("plz enter task");
    }
    else
    {
        let newele=document.createElement("ul");
        newele.innerHTML=`${input.value} <i class="fa fa-trash" aria-hidden="true"></i>`;
        text.append(newele);
        input.value="";
        newele.querySelector("i").addEventListener("click",remove);
        function remove(e){
            newele.remove();
        }
    }
}