import { renderModal, closeModal } from "./modal";
const videoTrigger = document.getElementById("video-modal-trigger");

document.body.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === videoTrigger || e.target.name === "play-button") {
    console.log(5050);
    renderModal();
  }
  if (e.target.id === "wrapper-trigger") {
    console.log(123123123123123123);
    closeModal();
  }
});
