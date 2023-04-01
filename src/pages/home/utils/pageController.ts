export var actualPage = 1;
import { load } from "../home.js";
import { btnNext, btnPrevious } from "../components/components.js";
import { skeleton } from "../components/components.js";

export const setPage = (page: number) => {
  if (skeleton.style.display != "inline-block"){
  actualPage = page;
  btnNext.disabled = actualPage === 14;
  btnPrevious.disabled = actualPage === 1;
  btnNext.onclick = () => {
    setPage(actualPage + 1);
  };
  btnPrevious.onclick = () => {
    setPage(actualPage - 1);
  };

  load();
  return 
}
};
