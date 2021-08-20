import "./components/navbar/navbar";
import "../main.scss";
import { renderNav } from "./components/navbar/navbar";
import { renderWrapper } from "./components/wrapper/wrapper";
const docFrag = new DocumentFragment();
const body = document.createElement("div");

body.setAttribute("id", "#root");
renderNav(docFrag);

const wrapper = renderWrapper(docFrag);

document.body.appendChild(docFrag);
const videoTrigger = document.getElementById("video-modal-trigger");
const closeModalTrigger = document.getElementById("wrapper-trigger");
console.log(closeModalTrigger, 2223123123123144);
require("./components/modal/attachModalListeners");
