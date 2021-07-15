// put js for todo app here
//alert("hi");

var list = document.querySelectorAll(".item");
var btn = document.getElementById("btn");

console.log("list ",list);
list.forEach(item => {
    item.addEventListener('click', function(ev) {
        ev.target.classList.toggle("cross");
    });
})

btn.addEventListener('click', function(ev){
    alert("ji");
});
