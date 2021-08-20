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
    <ul class=${styles["side-menu-item-container"]}>
      <li>home</li>
      <li>malibu life</li>
      <li>discover</li>
      <li>equestrian</li>
      <li>video</li>
      <li>pictures</li>
      <li>contact</li>
      <li>
        <div class=${styles["sidebar-logo-container"]}>
          <img class=${styles["sidebar-logo"]} src=${logo} alt="" />
        </div>
      </li>
    </ul>
  </div>
  <div class=${styles["header-mask"]}></div>`;
