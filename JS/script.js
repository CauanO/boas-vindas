alert("Bem vindo(a)");
nome = prompt("Qual o seu nome?");

horaAtual = new Date().getHours();

if (horaAtual >= 4 && horaAtual < 12) {
  alert(`Bom dia, ${nome}`);
} else if (horaAtual >= 12 && horaAtual < 18) {
  alert(`Boa tarde, ${nome}`);
} else if (horaAtual >= 18 && horaAtual <= 21) {
  alert(`Boa noite, ${nome}`);
} else {
  alert(`Vá dormir, ${nome}`);
}