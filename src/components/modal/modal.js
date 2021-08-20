import styles from "./modal.module.scss";

const element = document.createElement("div");

export const renderModal = (fragment) => {
  element.innerHTML = /* HTML */ `
    <div id="wrapper-trigger" class=${styles["wrapper"]}>
      <div id="modal-backdrop" class="modal-container">
        <iframe
          width="1086"
          height="611"
          src="https://www.youtube.com/embed/nTS10ZQM5Ms?enablejsapi=1&version=3&playerapiid=ytplayer"
          title="YouTube video player"
          id="main-video-player"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
  document.body.appendChild(element.firstElementChild);
};
export function closeModal() {
  const eleToRemove = document.getElementById("wrapper-trigger");
  console.log(eleToRemove,1231312);
  document.body.removeChild(eleToRemove);
}
