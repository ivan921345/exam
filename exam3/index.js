const refs = {
  mainEl: document.querySelector("main"),
  firstCtrlEl: document.querySelector(".firstCtrl"),
  secondCtrlEl: document.querySelector(".secondCtrl"),
  thirdCtrl: document.querySelector(".thirdCtrl"),
  allCtrls: document.querySelectorAll(".controls"),
  allInputs: document.querySelectorAll("input"),
  stepInside: document.querySelector(".stepInside"),
  confirmEl: document.querySelector(".confirm"),
};

const addCtrlArrClass = (ctrls, className) => {
  ctrls.forEach((ctrl) => {
    ctrl.classList.add(className);
  });
};

const removeCtrlArrClass = (ctrls, className) => {
  ctrls.forEach((ctrl) => {
    ctrl.classList.remove(className);
  });
};

const handleMainClick = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const buttonName = e.target.value;

  switch (buttonName) {
    case "client":
      removeCtrlArrClass(refs.allCtrls, "showCtrl");
      addCtrlArrClass(refs.allCtrls, "hideCtrl");
      refs.firstCtrlEl.classList.add("showCtrl");
      break;
    case "adress":
      removeCtrlArrClass(refs.allCtrls, "showCtrl");
      addCtrlArrClass(refs.allCtrls, "hideCtrl");
      refs.secondCtrlEl.classList.add("showCtrl");
      break;
    case "contact":
      removeCtrlArrClass(refs.allCtrls, "showCtrl");
      addCtrlArrClass(refs.allCtrls, "hideCtrl");
      refs.thirdCtrl.classList.add("showCtrl");
      break;
    default:
      break;
  }
};

const handleInputBlur = (e) => {
  const w = (1323 / 100) * 12;

  if (refs.stepInside.offsetWidth > 1323) {
    return;
  }

  refs.stepInside.style.width = `${refs.stepInside.offsetWidth + w}px`;
};

const handleSendInfoBtnClick = (e) => {
  const arrayStr = [];

  refs.allInputs.forEach((inp) => arrayStr.push(inp.value));

  console.log(arrayStr.join(", "));
};

refs.confirmEl.addEventListener("click", handleSendInfoBtnClick);

refs.allInputs.forEach((input) => {
  input.addEventListener("blur", handleInputBlur);
});

refs.mainEl.addEventListener("click", handleMainClick);
