import * as comps from "../components/components.js";
import { setPage } from "../utils/pageController.js";
import { actualPage } from "../utils/pageController.js";
export const renderButtons = (init: number = 1, quantity: number = 5) => {
  comps.footer.innerHTML = "" 
  comps.footer.append(comps.btnPrevious);
  for (let i = init; i <= quantity; i++) {
    const numeration = document.createElement("button") as HTMLButtonElement;
    numeration.setAttribute("class", "numerations");
    numeration.onclick = () => setPage(i);
    numeration.innerHTML = String(i);
    comps.footer.append(numeration);
    numeration.disabled = String(actualPage) === numeration.innerHTML
    
  }

  comps.footer.append(comps.btnNext); 
};
