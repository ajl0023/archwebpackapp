import styles from "./burger.module.scss";
import logo from "./images/logo-black.png";
export const html = /* HTML */ ` <input
    type="checkbox"
    id="burger-trigger"
    class=${styles["burger-input"]}
  />
  <label for="burger-trigger" class=${styles["burger-label"]}>
    <span class=${styles["main-trigger-icon-container"]}>
      <i class=${styles["main-trigger-icon"]}></i>
    </span>
  </label>
  <label class=${styles["nav-menu-label"]} for="burger-trigger"
    ><span>menu</span></label
  >
  <div class=${styles["side-menu-container"]}>
    <ul name="list-container" class=${styles["side-menu-item-container"]}>
      <li>home</li>
      <li>malibu life</li>
      <li>discover</li>
      <li>equestrian</li>
      <li>video</li>
      <li>pictures</li>

      <div class=${styles["sidebar-logo-container"]}>
        <a href="https://www.apeldesign.com/">
          <img class=${styles["sidebar-logo"]} src=${logo} alt=""
        /></a>
      </div>
    </ul>
  </div>
  <div data-id="header-mask" class=${styles["header-mask"]}></div>`;
