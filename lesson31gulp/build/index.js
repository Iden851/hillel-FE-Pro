"use strict";

phoneNumberVar2.onfocus = function () {
  if (this.classList.contains("succesfull")) {
    this.classList.remove("succesfull");
  } else if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
  }
};
phoneNumberVar2.onblur = function () {
  var regexp = /^\+380[5-9]\d{8}$/;
  if (!regexp.test(phoneNumberVar2.value)) {
    this.classList.add("invalid");
  } else {
    this.classList.add("succesfull");
  }
};