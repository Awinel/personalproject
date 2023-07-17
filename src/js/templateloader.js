import { loadHTML, loader } from "./utils.js";

export function templateLoader() {
    const headerSelector = ".main-header";
    const headerPath = "/personalproject/src/partials/header.html";

    const footerSelector = ".main-footer";
    const footerPath = "/personalproject/src/partials/footer.html";

    const navSelector = ".navbar-menu";
    const navPath = "/personalproject/src/partials/nav.html";

    loader(headerPath, headerSelector);
    loader(footerPath, footerSelector);
    loader(navPath, navSelector);


    const excercisePath = "/personalproject/src/covers/exercise-cover.html";
    const caloriesPath = "/personalproject/src/covers/nutritionalinfo-cover.html";
    const foodPath = "/personalproject/src/covers/food-cover.html";

    const coverEl = document.querySelector(".covers");
  if (coverEl) {
        loadHTML(excercisePath, coverEl);
        loadHTML(caloriesPath, coverEl);
        loadHTML(foodPath, coverEl);
    } else {
            return;
        }
  
}