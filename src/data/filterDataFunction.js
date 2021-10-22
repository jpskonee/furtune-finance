import { cookies } from "./01_COOKIE";
import { dips } from "./02_DIP";
import { hats } from "./03_HATS";
import { toppings } from "./04_TOPPINGS";
import { insides } from "./05_INSIDES";
import { accessories } from "./06_ACCESSORIES";

const getData = (attr = "cookies", cat = "all") => {
  let dataSet = cookies;
  let filteredData = [];
  switch (attr) {
    case "cookies":
      dataSet = cookies;
      break;
    case "dips":
      dataSet = dips;
      break;
    case "hats":
      dataSet = hats;
      break;
    case "toppings":
      dataSet = toppings;
      break;
    case "insides":
      dataSet = insides;
      break;
    case "accessories":
      dataSet = accessories;
      break;
    default:
      dataSet = cookies;
      break;
  }

  dataSet.map((data) => {
    if (cat === "all") {
      filteredData.push(data);
    } else if (data.cat.toLocaleLowerCase() === cat.toLocaleLowerCase()) {
      filteredData.push(data);
    }
    return filteredData;
  });

  return filteredData;
};

export { getData };
