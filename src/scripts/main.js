AOS.init();

// data e hora do evento
const dataDoEvento = new Date("Oct 13, 2025 19:00");


const timeStampDoEvento = dataDoEvento.getTime();

// atualiza a cada 1 segundo
const contaAsHoras = setInterval(function() {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  // conversões para milissegundos
  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  // cálculo do tempo restante
  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

  // exibe no HTML
  document.getElementById('contador').innerHTML =
    `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  // se já passou do evento
  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = "Evento expirado!";
  }

}, 1000);
