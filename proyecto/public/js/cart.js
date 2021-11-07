window.onload = function(){
    const addCart = document.querySelector("#addCart");
    const query = new URLSearchParams(location.search);
    console.log(addCart);

    addCart.addEventListener("click",function(event){
        console.log("click")
        query.append("enabled","true")
    })
}