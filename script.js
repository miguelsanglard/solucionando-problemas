var imagens = document.querySelector("#galeria");
var item0 = imagens.getElementsByTagName("img")[0];
var item1 = imagens.getElementsByTagName("img")[1];
var item2 = imagens.getElementsByTagName("img")[2];
var principal = document.querySelector("#imagem-principal");

function click0() {
  var teste0 = item0.src;
  var principal1 = principal.src;
  principal.src = teste0;
}
function click1() {
  var teste1 = item1.src;
  var principal1 = principal.src;
  principal.src = teste1;
}
function click2() {
  var teste2 = item2.src;
  var principal1 = principal.src;

  principal.src = teste2;
}

item0.addEventListener("click", click0);
item1.addEventListener("click", click1);
item2.addEventListener("click", click2);
