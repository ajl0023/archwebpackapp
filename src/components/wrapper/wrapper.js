import styles from "./wrapper.module.scss";
import Splide from "@splidejs/splide";
import { leftContainer as leftContainerArr } from "../leftContainer/leftContainer";
import { rightContainer as rightContainerArr } from "../rightContainer/rightContainer";

const element = document.createElement("div");

export const renderWrapper = (fragment) => {
  element.innerHTML = /* HTML */ `<div class=${styles["scroll-wrapper"]}>
    <div
      style="transform: translate3d(0px, 0px, 0px)"
      id="left-container-scroll"
      class=${styles["left-container"]}
    ></div>
    <div
      id="right-container-scroll"
      style="transform: translate3d(0px, 0px, 0px)"
      class=${styles["right-container"]}
    ></div>
    <div class=${styles["arrow-container"]}>
      <div class=${styles["arrow"]}></div>
    </div>
  </div>`;
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  fragment.appendChild(element.firstChild);

  const leftContainer = fragment.getElementById("left-container-scroll");

  const rightContainer = fragment.getElementById("right-container-scroll");

  leftContainerArr.forEach((ele) => {
    const newEle = document.createElement("div");
    newEle.innerHTML = ele;

    leftContainer.appendChild(newEle.children[0]);
  });
  rightContainerArr.forEach((ele) => {
    const newEle = document.createElement("div");
    newEle.innerHTML = ele;

    rightContainer.appendChild(newEle.children[0]);
  });
  console.log(leftContainerArr.length);

  let shouldScroll = true;

  let windowHeight = window.innerHeight;

  let currentPage = 0;
  let currentContainerSizeLeft = 0;
  let currentContainerSizeRight = -windowHeight * (leftContainerArr.length - 1);

  rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;

  window.addEventListener("wheel", function (e) {
    if (rightContainer.style.transition !== "all 1s ease-out") {
      rightContainer.style.transition = "all 1s ease-out";
    }

    // if (e.deltaY < 0 && currentPage === 0) {
    //   return;
    // }
    if (shouldScroll) {
      if (e.deltaY > 0 && currentPage < leftContainerArr.length - 1) {
        currentContainerSizeLeft += windowHeight;
        currentContainerSizeRight += windowHeight;
        currentPage += 1;

        leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
        rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
      }
      if (e.deltaY < 0 && currentPage > 0) {
        currentContainerSizeLeft -= windowHeight;
        currentContainerSizeRight -= windowHeight;
        currentPage -= 1;
        leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
        rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
      }
      this.setTimeout(() => {
        shouldScroll = true;
      }, 1100);
    }

    shouldScroll = false;
  });

  return element;
};
