const para = document.getElementById("src")
const container_main = document.getElementById("container_main")

container_main.addEventListener("click",function(event){
    if(event.target.localName==="button"){
        if(event.target.textContent==="=") {
            if(para.innerText.length>=1){
                para.innerText = eval(para.textContent)
            }
        } else if(event.target.textContent==="CE"){
            para.innerText === "0";
        }else {
            para.append(event.target.textContent)
        }
    }
})


function check(){
    if(para.textContent.length > 1 &&  para.textContent.startsWith(0)){
        
    }
}