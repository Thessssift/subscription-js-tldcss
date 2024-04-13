import * as validation from "./validation.js";

const clickone = document.querySelector("#clickone");
const tel = document.querySelector("#tel");
const nametyped = document.querySelector("#name");
const email = document.querySelector("#email");
const idrequiredemail = document.querySelector("#classrequiredemail");
const idrequiredtel = document.querySelector("#classrequiredtel");
const idrequiredname = document.querySelector("#classrequiredname");
const stepone = document.querySelector("#stepone");
const steptwo = document.querySelector("#steptwo");
const stepthree = document.querySelector("#stepthree");
const stepfour = document.querySelector("#stepfour");
const tag1 = document.querySelector(".tagone");
const tag2 = document.querySelector(".tagtwo");
const tag3 = document.querySelector(".tagthree");
const tag4 = document.querySelector(".tagfour");
const arcade = document.querySelector("#arcade");
const advanced = document.querySelector("#advanced");
const pro = document.querySelector("#pro");
const duration = document.querySelector("#duration");
const clicktwo = document.querySelector("#clicktwo");
const pricingone = [...document.querySelectorAll(".pricingone")];
const pricingtwo = [...document.querySelectorAll(".pricingtwo")];
const clickthree = document.querySelector("#clickthree");
const onlineoption = document.querySelector(".online-option");
const storageoption = document.querySelector(".storage-option");
const profileoption = document.querySelector(".profile-option");
const summaryplan = document.querySelector(".summaryplan");
const summaryduration = document.querySelector(".summaryduration");
const summaryprice = document.querySelector(".summaryprice");
const clickfinish = document.querySelector("#clickfinish");
const stepfive = document.querySelector("#stepfive");
const clickbacktothree = document.querySelector("#clickbacktothree");
const clickbacktotwo = document.querySelector("#clickbacktotwo");

let prices = ["9", "12", "15"];

let SelectPlan = {
  plan: "Arcade",
  duration: 0,
  onlineoption: "",
  storageoption: "",
  profileoption: "",
};

var d = 0;

function AllisValid() {
  const a = validation.containsOnlyStringOrSpace();
  const b = validation.isValidemailFunction();
  const c = validation.isValidTelephone();
  if (a && b && c) {
    steptwo.classList.remove("hidden");
    stepone.classList.add("hidden");
    tag1.classList.remove("bg-Pastelblue");
    tag2.classList.add("bg-Pastelblue");
  }
  if (a === true) {
    nametyped.classList.remove("border-red-700");
    idrequiredname.classList.add("text-red-700", "text-white");
  }
  if (b === true) {
    email.classList.remove("border-red-700");
    idrequiredemail.classList.add("text-red-700", "text-white");
  }
  if (c === true) {
    tel.classList.remove("border-red-700");
    idrequiredtel.classList.add("text-red-700", "text-white");
  }
  if (a === false) {
    idrequiredname.classList.remove("text-white");
    idrequiredname.classList.add("text-red-700");
    nametyped.classList.remove("border-gray-300");
    nametyped.classList.add("border-red-700");
  }
  if (b === false) {
    idrequiredemail.classList.remove("text-white");
    idrequiredemail.classList.add("text-red-700");
    email.classList.remove("border-gray-300");
    email.classList.add("border-red-700");
  }
  if (c === false) {
    idrequiredtel.classList.remove("text-white");
    idrequiredtel.classList.add("text-red-700");
    tel.classList.remove("border-gray-300");
    tel.classList.add("border-red-700");
  }
}
function totabthree() {
  tag2.classList.remove("bg-Pastelblue");
  tag3.classList.add("bg-Pastelblue");
  const mo = document.querySelector(".mo");
  if (SelectPlan.duration % 2 === 0 || SelectPlan.duration === 0) {
    SelectPlan.duration = "monthly";
    stepthree.classList.remove("hidden");
    steptwo.classList.add("hidden");
  }
  if (SelectPlan.duration % 2 === 1) {
    mo.textContent = "yr";
    pricingone.forEach((element) => {
      element.textContent = "+$10/y";
    }),
      pricingtwo.forEach((element) => {
        element.textContent = "+$20/y";
      }),
      (SelectPlan.duration = "yearly");
    stepthree.classList.remove("hidden");
    steptwo.classList.add("hidden");
  }
}
function summaryFilling() {
  const total = document.querySelector(".total");
  var t = 0;
  var to = 0;
  if (SelectPlan.duration === "monthly") {
    summaryplan.textContent = SelectPlan.plan;
    summaryduration.textContent = SelectPlan.duration;
    if (SelectPlan.plan === "Arcade") {
      summaryprice.textContent = prices[0];
      t = t + parseInt(prices[0]);
    }
    if (SelectPlan.plan === "Advanced") {
      summaryprice.textContent = prices[1];
      t = t + parseInt(prices[1]);
    }
    if (SelectPlan.plan === "Pro") {
      summaryprice.textContent = prices[2];
      t = t + parseInt(prices[2]);
    }
  }
  if (SelectPlan.duration === "yearly") {
    summaryplan.textContent = SelectPlan.plan;
    summaryduration.textContent = SelectPlan.duration;
    if (SelectPlan.plan === "Arcade") {
      summaryprice.textContent = prices[0] * 10;
      t = t + parseInt(prices[0]) * 10;
    }
    if (SelectPlan.plan === "Advanced") {
      summaryprice.textContent = prices[1] * 10;
      t = t + parseInt(prices[1]) * 10;
    }
    if (SelectPlan.plan === "Pro") {
      summaryprice.textContent = prices[2] * 10;
      t = t + parseInt(prices[2]) * 10;
    }
  }
  if (SelectPlan.onlineoption !== "") {
    const summaryoptionOne = document.querySelector(".summaryoptionOne");
    to = to + 1;
    summaryoptionOne.classList.remove("hidden");
  }
  if (SelectPlan.storageoption !== "") {
    const summaryoptionTwo = document.querySelector(".summaryoptionTwo");
    to = to + 2;
    summaryoptionTwo.classList.remove("hidden");
  }
  if (SelectPlan.profileoption !== "") {
    const summaryoptionThree = document.querySelector(".summaryoptionThree");
    to = to + 2;
    summaryoptionThree.classList.remove("hidden");
  }
  if (SelectPlan.duration === "monthly") {
    total.textContent = t + to;
  }
  if (SelectPlan.duration === "yearly") {
    total.textContent = t + to * 10;
  }
}
function totabfour() {
  stepfour.classList.remove("hidden");
  stepthree.classList.add("hidden");
  tag3.classList.remove("bg-Pastelblue");
  tag4.classList.add("bg-Pastelblue");
  summaryFilling();
}
function tofinish() {
  stepfour.classList.add("hidden");
  stepfive.classList.remove("hidden");
  tag3.classList.remove("bg-Pastelblue");
  tag4.classList.add("bg-Pastelblue");
}
function backtotwo() {
  stepthree.classList.add("hidden");
  steptwo.classList.remove("hidden");
}
function backtothree() {
  stepfour.classList.add("hidden");
  stepthree.classList.remove("hidden");
  tag4.classList.remove("bg-Pastelblue");
  tag3.classList.add("bg-Pastelblue");
}

clickone.addEventListener("click", AllisValid);
arcade.addEventListener("click", function () {
  arcade.classList.add("bg-Magnolia", "border-2", "border-Marineblue");
  arcade.classList.remove("bg-white");
  pro.classList.remove("bg-Magnolia", "border-2");
  advanced.classList.remove("bg-Magnolia", "border-2");
});
pro.addEventListener("click", function () {
  pro.classList.remove("bg-white");
  pro.classList.add("bg-Magnolia", "border-2", "border-Marineblue");
  arcade.classList.remove("bg-Magnolia", "border-2");
  advanced.classList.remove("bg-Magnolia", "border-2");
});
advanced.addEventListener("click", function () {
  advanced.classList.remove("bg-white");
  advanced.classList.add("bg-Magnolia", "border-2", "border-Marineblue");
  pro.classList.remove("bg-Magnolia", "border-2");
  arcade.classList.remove("bg-Magnolia", "border-2");
});
duration.addEventListener("change", function () {
  d++;
  SelectPlan.duration = d;
});
arcade.addEventListener("click", function () {
  SelectPlan.plan = "Arcade";
});
advanced.addEventListener("click", function () {
  SelectPlan.plan = "Advanced";
});
pro.addEventListener("click", function () {
  SelectPlan.plan = "Pro";
});
clicktwo.addEventListener("click", totabthree);

onlineoption.addEventListener("click", function () {
  SelectPlan.onlineoption = "onlineoption";
});
storageoption.addEventListener("click", function () {
  SelectPlan.storageoption = "storageoption";
});
profileoption.addEventListener("click", function () {
  SelectPlan.profileoption = "profileoption";
});
clickbacktothree.addEventListener("click", backtothree);
clickbacktotwo.addEventListener("click", backtotwo);
clickfinish.addEventListener("click", tofinish);
clickthree.addEventListener("click", totabfour);
