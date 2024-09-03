import puppeteer from "puppeteer";

const url = "https://www.youtube.com/@TheDigitalBrickLayer/streams";

async function robo() {
  const browser = await puppeteer.launch(); // inicia o navegador
  const page = await browser.newPage();

  console.log("iniciei");

  await page.goto(url);
  console.log("carregando...");

  const time = await page.$$eval(
    "badge-shape .badge-shape-wiz__text",
    (element) => [...new Set(element.map((el) => el.textContent))]
  );
 

  const totalHours = [];
  const totalMinutes = [];
  const totalSeconds = [];

  for (let i = 0; i < time.length; i++) {
    let [hours, minutes, seconds] = time[i].split(":").map(Number);

    if (seconds === undefined) {
      seconds = 0;
    }

    if (minutes === undefined) {
      minutes = 0; 
    }
    if(hours === undefined){
      hours = 0;
    };
    
    totalHours.push(hours);
    totalMinutes.push(minutes);
    totalSeconds.push(seconds);
  }


  




  let totalHoras = 0;
  let totalMinutos = 0;
  let totalSegundos = 0;

  for (let i = 0; i < totalHours.length; i++) {
    totalHoras += totalHours[i];
    totalMinutos += totalMinutes[i];
    totalSegundos += totalSeconds[i];
  }

  totalMinutos += Math.floor(totalSegundos / 60);
  totalSegundos = totalSegundos % 60;

  totalHoras += Math.floor(totalMinutos / 60);
  totalMinutos = totalMinutos % 60;

  console.log(
    `O total de horas em live foi de ${totalHoras} horas, ${totalMinutos} minutos e ${totalSegundos} segundos.`
  );

  await browser.close();
  console.log("Navegação concluída");
}

robo();

