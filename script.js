let barSide = document.getElementById("bar_side")
let navButton = document.getElementById("navbutton")
let counter = 0
let infoIcon = document.getElementById("info-icon")
let responsiveInfo = document.getElementById("responsive_info")
  let counterInfo = 0

navButton.onclick = function(){
  if (counter == 0){
    navButton.innerHTML = "<img src='img/close-cross.png' >"
    barSide.setAttribute(
      "style",
      "position: fixed;      display: flex;      background-color: #f4f4f4;      top: 71px;      width: 139px;     height: 176px;      position: fixed;      right: 9px;      z-index: 1000000000;      border-radius: 10px;      border: 2px solid #eee;      align-content: center;      flex-wrap: nowrap;      flex-direction: column;      align-items: center;      justify-content: center;      color: #000;      box-shadow: 0 0 5px #b5b5b5;"
    )

    counter = 1
  }else{
    navButton.innerHTML = "<img src='img/list.png' >"
    barSide.setAttribute(
      "style",
      "display: none;"
    )
    counter = 0
  }
}


infoIcon.onclick = function(){
  if (counterInfo == 0){
    infoIcon.className ="fa-solid fa-circle-xmark info-icon"
    responsiveInfo.setAttribute(
      "style",
      "display: flex;"
    )

    counterInfo = 1
  }else{
    infoIcon.className = "fa-solid fa-circle-info info-icon"
    responsiveInfo.setAttribute(
      "style",
      "display: none;"
    )
    counterInfo = 0;
  }
}