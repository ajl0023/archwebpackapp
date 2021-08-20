import styles from "./leftContainer.module.scss";
import leftLogo from "./images/Maliview Left Logo.png";
import malibu from "./images/Malibu.jpg";
import { renderGallery } from "../galleryPage/gallery";
import mulholland from "./images/mulholland.jpg";
import pageStyle from "../miscStyles/pages.module.scss";
import hiddenLogoBrown from "./images/hiddenLogoBrown.png";
import Splide from "@splidejs/splide";

const leftContainer = [];

export function createLeftEle(innerEle, classNameArr) {
  const container = document.createElement("div");

  const html = /* HTML */ ` <div class="">${innerEle}</div>`;

  container.innerHTML = html;
  console.log(container.firstElementChild);
  classNameArr.forEach((name) => {
    container.firstElementChild.classList.add(name);
  });
  leftContainer.push(container.firstElementChild.outerHTML);
}
createLeftEle(
  /* HTML */ ` <span class=${styles["logo-container"]}>
    <img src=${leftLogo} alt="" />
  </span>`,
  [styles["container"]]
);
createLeftEle(
  /* HTML */ ` <div class=${pageStyle["container"]}>
    <div class=${styles["image-container"]}>
      <img class=${styles["image-page"]} src=${malibu} alt="" />
    </div>
  </div>`,
  [pageStyle["container"], pageStyle["image-content"]]
);
createLeftEle(
  /* HTML */ `<div class=${pageStyle["hidden-logo-container-brown"]}>
      <div class="hidden-logo-container">
        <img
          src=${hiddenLogoBrown}
          class=${pageStyle["hidden-logo-brown"]}
          alt=""
        />
      </div>
    </div>
    <h5 class=${pageStyle["content-header"]}>discover</h5>
    <p class=${pageStyle["content-text"]}>
      Maliview Estates. This unique architectural design by Amit Apel Design,
      Inc. presents a style of its own. The Worldwide architect has received
      multiple awards and Amit Apel, Inc. was most recently recognized in its
      hometown as one of the best firms by Home Builder Digest.
    </p>

    <p class=${pageStyle["content-text"]}>
      The villa will have open space plan with high ceilings with a touch of
      nature coming indoors. The home includes 4 perfectly placed bedrooms with
      views to admire the scenery as well as 4.5 bathrooms. All of the interior
      will be featuring custom interior design by Amit Apel Design, Inc. From an
      infinity pool you will be enjoying the ocean in the horizon, the view of
      Santa Monica Mountains, and overwhelming sunrises, and sunsets.
    </p>

    <p class=${pageStyle["content-text"]}>
      Currently under construction with a completion date early fall. Please
      note that both exterior and interior paint colors can be changed.
    </p>`,
  [pageStyle["container"], pageStyle["text-content"], pageStyle["brown-bg"]]
);
createLeftEle(
  /* HTML */ ` <div class=${pageStyle["container"]}>
    <div class=${pageStyle["image-container"]}>
      <img class=${pageStyle["image-page"]} src=${mulholland} alt="" />
    </div>
  </div>`,
  [pageStyle["container"], pageStyle["image-content"]]
);
createLeftEle(
  /* HTML */ `<div class=${pageStyle["hidden-logo-container-brown"]}>
      <div class="hidden-logo-container">
        <img
          src=${hiddenLogoBrown}
          class=${pageStyle["hidden-logo-brown"]}
          alt=""
        />
      </div>
    </div>
    <h5 class=${pageStyle["content-header"]}>video render</h5>
    <p class=${pageStyle["content-text"]}>
      Take a dive into Maliview with our 3D rendering. To get a feeling of the
      completed project and vision, please click on the video to the right.
    </p> `,
  [pageStyle["container"], pageStyle["text-content"], pageStyle["brown-bg"]]
);
const gallery = renderGallery("l");
createLeftEle(/* HTML */ `${gallery.outerHTML}`, [styles["container"]]);
export { leftContainer };
