import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "",
    thumbnail : "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/539806/06/mod01/fnd/IND/fmt/png/PUMA-x-DAPPER-DAN-Men's-Hoodie",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    // picture: "/images/Home/women_category.jpg",
    description: "",
    thumbnail: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/537075/67/mod01/fnd/IND/fmt/png/T7-Printed-Track-Jacket-Women",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description: "",
    thumbnail: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/676581/58/mod01/fnd/IND/fmt/png/Super-PUMA-Printed-Graphic-Youth-T-Shirt",    
  },
];
