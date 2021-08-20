import styles from "./rightContainer.module.scss";
import pageStyle from "../miscStyles/pages.module.scss";
import rightLogo from "./images/Maliview Right Logo.png";
import hiddenLogoGrey from "./images/hiddenLogoGrey.png";
import maliview from "./images/maliview.jpg";
import mullholland from "./images/33340 Mulholland IMG 1A.jpg";
import playButton from "./images/playButton.png";
import hiddenLogoBrown from "./images/hiddenLogoBrown.png";
import { renderGallery } from "../galleryPage/gallery";

const rightContainer = [];

export function createRightEle(innerEle, classNameArr) {
  const container = document.createElement("div");

  const html = /* HTML */ ` <div class="">${innerEle}</div>`;

  container.innerHTML = html;

  classNameArr.forEach((name) => {
    container.firstElementChild.classList.add(name);
  });

  rightContainer.push(container.firstElementChild.outerHTML);
}
const gallery = renderGallery("r");
createRightEle(/* HTML */ `${gallery.outerHTML}`, [styles["container"]]);

createRightEle(
  /* HTML */ ` <div class=${pageStyle["container"]}>
    <div
      class="${pageStyle["image-container"] +
      " " +
      `${pageStyle["expand-hover"]}` +
      " " +
      `${pageStyle["blur"]}`}"
    >
      <img
        name="play-button"
        class=${pageStyle["play-button"]}
        src=${playButton}
        alt=""
      />
      <img
        id="video-modal-trigger"
        class=${pageStyle["image-page"]}
        data-src=${mullholland}
        data-id="lazy"
        alt=""
      />
    </div>
  </div>`,
  [pageStyle["container"], pageStyle["image-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${pageStyle["hidden-logo-container-grey"]}>
      <img
        src=${hiddenLogoGrey}
        class=${pageStyle["hidden-logo-grey"]}
        alt=""
      />
    </div>
    <h5 class=${pageStyle["content-header"]}>equestrian</h5>
    <p class=${pageStyle["content-text"]}>
      This equestrian property will present a barn with stalls on a lower
      portion of a four-acre space with its own separate driveway and plenty of
      room for the horses, other equestrians, or your trailer. You will have
      access to trails directly from the property and a creek of your own. You
      can call this paradise your home!
    </p>

    <p class=${pageStyle["content-text"]}>(More Equestrian Info Here)</p>

    <p class=${pageStyle["content-text"]}>
      As much as it feels remote, you will be only 15 minutes away from PCH and
      less than 20 minutes away from Westlake Village. Great school district
      with plenty of activities. Come by to see this beautifully planned home in
      the making for yourself.
    </p>`,
  [pageStyle["container"], pageStyle["text-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${pageStyle["container"]}>
    <div class=${pageStyle["image-container"]}>
      <img
        class=${pageStyle["image-page"]}
        data-id="lazy"
        data-src=${maliview}
        alt=""
      />
    </div>
  </div>`,
  [pageStyle["container"], pageStyle["image-content"]]
);
createRightEle(
  /* HTML */ ` <div class=${pageStyle["hidden-logo-container-grey"]}>
      <img
        src=${hiddenLogoGrey}
        class=${pageStyle["hidden-logo-grey"]}
        alt=""
      />
    </div>
    <h5 class=${pageStyle["content-header"]}>malibu</h5>
    <p class=${pageStyle["content-text"]}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, sunt,
      assumenda expedita eaque saepe distinctio consequuntur quam vel odit
      fugiat, ut doloremque nemo voluptate numquam cum nobis facere voluptatibus
      ad!
    </p>

    <p class=${pageStyle["content-text"]}>(More Equestrian Info Here)</p>

    <p class=${pageStyle["content-text"]}>
      As much as it feels remote, you will be only 15 minutes away from PCH and
      less than 20 minutes away from Westlake Village. Great school district
      with plenty of activities. Come by to see this beautifully planned home in
      the making for yourself.
    </p>`,
  [pageStyle["container"], pageStyle["text-content"]]
);
createRightEle(
  /* HTML */ ` <span class=${styles["logo-container"]}>
    <img src=${rightLogo} alt="" />
  </span>`,
  [styles["container"]]
);

export { rightContainer };
