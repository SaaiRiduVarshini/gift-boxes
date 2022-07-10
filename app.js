const but = document.getElementById("generatebutton");

const grid = document.getElementById("grid");

but.onclick =() =>

{

const gb = document.getElementById("textBox").value;

console.log(gb);

let i;

for(i=1;i<=gb;i++){

const gb = document.createElement("div");

grid.append(gb);

gb.innerHTML = `!$@!`;
gb.style.height = `5vh`;
gb.style.textAlign = `center`;
gb.style.width = `5vw`;
gb.style.margin = ` 20px 5px`;
gb.style.border = `3px solid black`;
 }

}