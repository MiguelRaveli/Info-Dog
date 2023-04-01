type Measures = {
  imperial: string;
  metric: string;
};

type Image = {
  id: string;
  width: number;
  heigth: number;
  url: string;
};

export type Dog = {
  weigth: Measures;
  heigth: Measures;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  image: Image;
  life_span: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
};

