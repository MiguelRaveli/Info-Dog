import * as comps from "./components/components.js";
import { IMAGES_URL } from "../../api/endpoint.js";
import { dogsGET } from "../../api/dogsGET.js";
import { renderButtons } from "./utils/renderButton.js";
import { actualPage } from "./utils/pageController.js";
import { setPage } from "./utils/pageController.js";
comps.searchBtn.onclick = () => search();
comps.searchBar.onkeyup = (val) => checkIfEmpty(val);
const search = () => {
    comps.footer.style.display = "none";
    load();
};
const checkIfEmpty = (val) => {
    if (val.target.value === "") {
        comps.footer.style.display = "flex";
        load();
    }
};
export const load = () => {
    for (let i = 1; i <= 12; i++) {
        const dogLoading = document.createElement("div");
        dogLoading.setAttribute("class", "dogLoading");
        comps.skeleton.append(dogLoading);
    }
    comps.bodyHome.innerHTML = "";
    comps.bodyHome.append(comps.skeleton);
    comps.skeleton.style.display = "inline-block";
    if (actualPage === 1) {
        renderButtons(actualPage, actualPage + 2);
    }
    else if (actualPage === 2) {
        renderButtons(actualPage - 1, actualPage + 1);
    }
    else if (actualPage === 4) {
        renderButtons(actualPage - 3, actualPage + 1);
    }
    else if (actualPage === 5) {
        renderButtons(actualPage - 1, actualPage + 3);
    }
    else if (actualPage === 6) {
        renderButtons(actualPage - 1, actualPage + 3);
    }
    else if (actualPage === 13) {
        renderButtons(actualPage - 3, actualPage + 1);
    }
    else if (actualPage === 14) {
        renderButtons(actualPage - 4, actualPage);
    }
    else {
        if (actualPage > 2) {
            renderButtons(actualPage - 2, actualPage + 2);
        }
    }
    dogsGET(comps.searchBar.value || String(actualPage))
        .then((data) => {
        data.forEach((dog) => {
            const dogLabel = document.createElement("a");
            dogLabel.setAttribute("class", "dogsLabel");
            dogLabel.setAttribute("href", `../dog/dog.html?id=${dog.id}`);
            dogLabel.innerHTML = dog.name;
            const dogLabelDIV = document.createElement("div");
            dogLabelDIV.setAttribute("class", "dogsLabelDIV");
            const dogFrame = document.createElement("div");
            dogFrame.setAttribute("class", "frameDOGS");
            const dogImg = document.createElement("div");
            dogImg.setAttribute("class", "dogsImg");
            dogImg.style.setProperty("background-image", `url(${IMAGES_URL}/${dog.reference_image_id}.jpg)`);
            dogLabelDIV.append(dogLabel);
            dogFrame.append(dogImg);
            dogFrame.append(dogLabelDIV);
            comps.bodyHome.append(dogFrame);
            comps.skeleton.style.display = "none";
        });
        comps.skeleton.innerHTML = "";
    })
        .catch((error) => console.log("error", error));
};
window.onload = () => {
    renderButtons(actualPage, actualPage + 2);
    setPage(actualPage);
};
