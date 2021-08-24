import styles from "./navbar.module.scss";
import { html } from "./burgerMenu";
import logo from "./images/logo-white.png";
const element = document.createElement("div");

export const renderNav = (fragment) => {
  element.innerHTML = /* HTML */ `
    <nav class=${styles["wrapper"]}>
      <div class=${styles["container"]}>
        <div class=${styles["left-container"]}>${html}</div>

        <div class=${styles["logo-container"]}>
          <a href="https://www.apeldesign.com/"
            ><img class=${styles["logo"]} src=${logo} alt=""
          /></a>
        </div>
      </div>
    </nav>
  `;
  const listContainer = element.querySelector("ul[name='list-container']");
  const listObj = {};

  // const rightContainer = fragment.getElementById("right-container-scroll");


  fragment.appendChild(element.firstElementChild);

  console.log(listContainer, 345);
};
