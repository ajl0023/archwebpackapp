import styles from "./socials.module.scss";

const element = document.createElement("div");
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

Object.entries(cache).map((module) => module[1].default);

export const renderSocialBar = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div class=${styles["container"]}>
      <img  src=${cache["./facebook.svg"]} alt="" />
      <img src=${cache["./instagram.svg"]} alt="" />
      <img src=${cache["./twitter.svg"]} alt="" />
      <img src=${cache["./linkedin.svg"]} alt="" />
    </div>
  `;
  fragment.appendChild(element.firstElementChild);
};
