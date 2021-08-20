import styles from "./modal.module.scss";

const element = document.createElement("div");

export const renderModal = (type, image) => {
  const mainEle =
    type === "gallery"
      ? `
      <img class=${styles["main-content"]} src=${image} alt="" />
    `
      : `<iframe
        width="100%"
        height="611"
        src="https://www.youtube.com/embed/nTS10ZQM5Ms?enablejsapi=1&version=3&playerapiid=ytplayer"
        title="YouTube video player"
        id="main-video-player"
        allowfullscreen
      ></iframe>`;
  element.innerHTML = /* HTML */ `
    <div id="wrapper-trigger" class=${styles["wrapper"]}>
      <div id="modal-backdrop" class=${styles["modal-container"]}>
        ${mainEle}
      </div>
    </div>
  `;
  document.body.appendChild(element.firstElementChild);
};
export function closeModal() {
  const eleToRemove = document.getElementById("wrapper-trigger");
  
  document.body.removeChild(eleToRemove);
}
