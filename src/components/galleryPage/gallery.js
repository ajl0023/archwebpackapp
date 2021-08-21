import styles from "./gallery.module.scss";

const element = document.createElement("div");
const cache = {};
const highResImages = {};
function importAll(r, s) {
  r.keys().forEach((key) => (cache[key] = r(key)));
  s.keys().forEach((key) => (highResImages[key] = s(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(
  require.context("./images/properyImages", false, /\.(png|jpe?g|svg)$/),
  require.context("./images/propertyImagesHighRes", false, /\.(png|jpe?g|svg)$/)
);

Object.entries(cache).map((module) => module[1].default);

export const renderGallery = (pos) => {
  if (pos === "l") {
    element.innerHTML = /* HTML */ `
      <div class=${styles["gallery-image-container"]}>
        <div class=${styles["gallery-images"]}>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./1.jpg"]}
              highRes-src=${highResImages["./1.jpg"]}
              alt=""
            />
          </div>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./2.jpg"]}
              highRes-src=${highResImages["./2.jpg"]}
              alt=""
            />
          </div>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./5.jpg"]}
              highRes-src=${highResImages["./5.jpg"]}
              alt=""
            />
          </div>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./6.jpg"]}
              highRes-src=${highResImages["./6.jpg"]}
              alt=""
            />
          </div>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./9.jpg"]}
              highRes-src=${highResImages["./9.jpg"]}
              alt=""
            />
          </div>
          <div class=${styles["gallery-property-image-container"]}>
            <img
              src="https://via.placeholder.com/440x560?text=Img+01"
              data-id="lazy"
              name="gallery-image-container"
              class=${styles["gallery-property-image"]}
              data-src=${cache["./10.jpg"]}
              highRes-src=${highResImages["./10.jpg"]}
              alt=""
            />
          </div>
        </div>
      </div>
    `;
    return element.firstElementChild;
  }
  element.innerHTML = /* HTML */ `
    <div class=${styles["gallery-image-container"]}>
      <div class=${styles["gallery-images"]}>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./3.jpg"]}
            highRes-src=${highResImages["./3.jpg"]}
            alt=""
          />
        </div>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./4.jpg"]}
            highRes-src=${highResImages["./4.jpg"]}
            alt=""
          />
        </div>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./7.jpg"]}
            highRes-src=${highResImages["./7.jpg"]}
            alt=""
          />
        </div>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./9.jpg"]}
            highRes-src=${highResImages["./19.jpg"]}
            alt=""
          />
        </div>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./11.jpg"]}
            highRes-src=${highResImages["./11.jpg"]}
            alt=""
          />
        </div>
        <div class=${styles["gallery-property-image-container"]}>
          <img
            src="https://via.placeholder.com/440x560?text=Img+01"
            data-id="lazy"
            name="gallery-image-container"
            class=${styles["gallery-property-image"]}
            data-src=${cache["./12.jpg"]}
            highRes-src=${highResImages["./12.jpg"]}
            alt=""
          />
        </div>
      </div>
    </div>
  `;
  return element.firstElementChild;
};
