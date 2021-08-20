import "./components/navbar/navbar";
import "../main.scss";
import LazyLoad from "vanilla-lazyload";

import { renderNav } from "./components/navbar/navbar";
import { renderWrapper } from "./components/wrapper/wrapper";
import { renderSocialBar } from "./components/socials/socials";
const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
renderNav(docFrag);
renderSocialBar(docFrag);
const wrapper = renderWrapper(docFrag);

document.body.appendChild(docFrag);
const videoTrigger = document.getElementById("video-modal-trigger");
const closeModalTrigger = document.getElementById("wrapper-trigger");
function test() {
  console.log("lazyasfdf");
}
const lazy = new LazyLoad({
  elements_selector: '[data-id="lazy"]',
  threshold: "1800",
  callback_enter: test,
});
const x = lazy.update();
console.log(lazy);
require("./components/modal/attachModalListeners");
