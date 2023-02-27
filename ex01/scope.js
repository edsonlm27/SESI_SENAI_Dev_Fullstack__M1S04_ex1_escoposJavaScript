var global = "Estou no escopo global;";

function escopo() {
  console.log("Estou no escopo de função;");
}
escopo();

console.log(global);

let bloco = ["Estou no escopo ...", "... de bloco;"];

for (let i = 0; i < bloco.length; i++) {
  console.log(bloco[i]);
}
