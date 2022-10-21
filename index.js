const EXP_URL = "https://zany-skitter-caper.glitch.me/experiences";
const SKI_URL = "https://zany-skitter-caper.glitch.me/skills";

async function getData(url) {
  try {
    const response = await fetch(url);
    const expArr = await response.json();
    console.log(expArr);
    return expArr;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function drawFromUrlExp(url) {
  const exp = await getData(url);
  drawExp(exp);
}

async function drawFromUrlSkill(url) {
  const skill = await getData(url);
  drawSkill(skill);
}

function drawExp(data) {
  const expDiv = document.querySelector("div.dynamicExperience");

  data.forEach((element) => {
    const experienceInfo = document.createElement("div");
    experienceInfo.classList = "experienceInfo";
    const leftPart = document.createElement("div");
    leftPart.className = "leftPart";
    const sinceUntil = document.createElement("h6");
    sinceUntil.textContent = element.startYear + " - " + element.finishYear;
    const company = document.createElement("h6");
    company.textContent = element.companyName;

    leftPart.append(sinceUntil, company);

    const rightPart = document.createElement("div");
    rightPart.classList = "rightPart";
    const position = document.createElement("h6");
    position.textContent = element.position;
    const description = document.createElement("p");
    description.textContent = element.description;

    rightPart.append(position, description);
    experienceInfo.append(leftPart, rightPart);

    expDiv.append(experienceInfo);
  });
}

function drawSkill(data) {
  const skillDiv = document.querySelector("div.dynamicSkills");
  data.forEach((element) => {
    const textInfo = document.createElement("div");
    textInfo.classList = "textInfo";

    const textInfoLeft = document.createElement("div");
    textInfoLeft.classList = "textInfoLeft";
    textInfoLeft.textContent = element.title;

    const textInfoRight = document.createElement("div");
    textInfoRight.classList = "textInfoRight";
    textInfoRight.textContent = element.level + "%";
    textInfo.append(textInfoLeft, textInfoRight);
    // skillWrap.append(textInfo);

    const progressFull = document.createElement("div");
    progressFull.classList = "progressFull";

    const progressActual = document.createElement("div");
    progressActual.classList = "progressActual";
    progressActual.style.width = element.level + "%";

    progressFull.append(progressActual);

    skillDiv.append(textInfo, progressFull);

    // const title = document.createElement("p");
    // title.textContent = element.title;
    // const level = document.createElement("div");
    // level.textContent = element.level;
    // level.style.cssText = "color:red";

    // skillDiv.append(title, level);
  });
}

drawFromUrlExp(EXP_URL);
drawFromUrlSkill(SKI_URL);

// const BASE_URL = "https://olive-bead-glazer.glitch.me";

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// async function pildykLentele(url) {
//   const car = await getData(url);
//   draw(car);
// }

// function draw(data) {
//   const tbody = document.querySelector("tbody");
//   data.forEach((element) => {
//     const carBrand = document.createElement("td");
//     carBrand.textContent = element.brand;
//     const carModel = document.createElement("td");
//     carModel.textContent = element.model;
//     const tr = document.createElement("tr");
//     tr.append(carBrand, carModel);
//     tbody.append(tr);
//   });
// }

// pildykLentele(BASE_URL);
