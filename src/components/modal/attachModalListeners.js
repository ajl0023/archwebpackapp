import { renderModal, closeModal } from "./modal";
import styles from "../navbar/burger.module.scss";
const videoTrigger = document.getElementById("video-modal-trigger");

document.body.addEventListener("click", function (e) {
  
  if (e.target === videoTrigger || e.target.name === "play-button") {
    
    renderModal();
  }
  if (e.target.id === "wrapper-trigger") {
    
    closeModal();
  }
  if (e.target.name === "gallery-image-container") {
    renderModal("gallery", e.target.src);
  }
  let targetElement = document.querySelector(`input.${styles["burger-input"]}`);
  
  if (e.target.getAttribute("data-id") === "header-mask") {
    
    targetElement.checked = false;
  }
});
