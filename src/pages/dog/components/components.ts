const bodyDog = document.getElementById("dogBody") as HTMLDivElement;
const footer = document.getElementById("footerHome") as HTMLDivElement;
const header = document.getElementById("header") as HTMLDivElement;

const frameImg = document.createElement("div") as HTMLDivElement;
frameImg.setAttribute("id", "dogFrameImg");

const frameLabel = document.getElementById("dogFrameLabel") as HTMLDivElement;
const name = document.getElementById("name") as HTMLParagraphElement;
const bred_for = document.getElementById("bred_for") as HTMLParagraphElement;
const breed_group = document.getElementById(
  "breed_group"
) as HTMLParagraphElement;
const life_span = document.getElementById("life_span") as HTMLParagraphElement;
const temperament = document.getElementById(
  "temperament"
) as HTMLParagraphElement;

const img = document.createElement("div") as HTMLDivElement;
img.setAttribute("id", "dogImg");

const label = document.createElement("a") as HTMLAnchorElement;
label.setAttribute("id", "dogLabel");

frameImg.append(img);
frameLabel.append(label);

export {
  footer,
  bodyDog,
  frameImg,
  frameLabel,
  img,
  label,
  header,
  temperament,
  bred_for,
  breed_group,
  life_span,
  name,
};
