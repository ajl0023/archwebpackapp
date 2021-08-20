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
          <img class=${styles["logo"]} src=${logo} alt="" />
        </div>
      </div>
    </nav>
  `;
  fragment.appendChild(element.firstElementChild);
};
