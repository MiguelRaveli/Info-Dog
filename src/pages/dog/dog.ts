import { dogGET } from "../../api/dogGET.js";
import { Dog } from "../../types/Dog";
import * as comps from "./components/components.js";
import { IMAGES_URL } from "../../api/endpoint.js";
import { queryString } from "../../utils/queryString.js";

window.onload = () => {
  const urlParams = new URLSearchParams(queryString);
  const dogId = Number(urlParams.get("id"));

  dogGET(dogId)
    .then((data: Dog) => {
      comps.bodyDog.append(comps.frameImg);
      comps.name.append(data.name)
      comps.bred_for.append(data.bred_for)
      comps.breed_group.append(data.breed_group)
      comps.temperament.append(data.temperament)
      comps.life_span.append(data.life_span)
      comps.frameLabel.append(comps.name)
      comps.frameLabel.append(comps.bred_for)
      comps.frameLabel.append(comps.breed_group)
      comps.frameLabel.append(comps.life_span)
      comps.frameLabel.append(comps.temperament)
      comps.bodyDog.append(comps.frameLabel);
      comps.img.style.setProperty(
        "background-image",
        `url(${IMAGES_URL}/${data.reference_image_id}.jpg)`
      );
     
    })
    .catch((error) => console.log("error", error));
};
