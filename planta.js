class Planta {
  constructor(nome, viva = true, umidade = 20) {
    this.nome = nome;
    this.viva = viva;
    if (umidade < 100) {
      this.umidade = umidade;
    }
  }

  regar(valor) {
    if ((valor > 0 && valor < 100) || this.umidade + valor < 100) {
      this.umidade += valor;
      this.viva = true;
      console.log("A planta já está umida");
    } else {
      this.viva = false;
      console.log("Voce matou a plantinha");
    }
  }
  umidadePlanta() {
    return "Umidade da planta:" + (this.umidade / 100) * 100 + "%";
  }
}
const planta = new Planta("baoba");
planta.regar(50);
console.log(planta.umidadePlanta());
