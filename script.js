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

let isvalidname = false;
let isvalidemail = false;
let isvalidtel = false;

function isValidTelephone() {
  const telvalidation = parseInt(tel.value);
  if (Number.isInteger(telvalidation)) {
    isvalidtel = true;
  } else {
    isvalidtel = false;
    //console.log('tel');
  }
  return isvalidtel;
}
function containsOnlyStringOrSpace() {
  const namevalidation = nametyped.value;
  var regex = /^[a-zA-Z\s]*$/;

  if (regex.test(namevalidation)) {
    isvalidname = true;
  } else {
    isvalidname = false;
    //console.log('name');
  }
  return isvalidname;
}
function isValidemailFunction() {
  const emailvalidation = email.value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(emailvalidation)) {
    isvalidemail = true;
  } else {
    isvalidemail = false;
    //console.log('email');
  }
  return isvalidemail;
}
const tag1 = document.querySelector(".tagone");
const tag2 = document.querySelector(".tagtwo");
const tag3 = document.querySelector(".tagthree");
const tag4 = document.querySelector(".tagfour");

function AllisValid() {
  const a = containsOnlyStringOrSpace();
  const b = isValidemailFunction();
  const c = isValidTelephone();
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

clickone.addEventListener("click", AllisValid);

const arcade = document.querySelector("#arcade");
const advanced = document.querySelector("#advanced");
const pro = document.querySelector("#pro");
const duration = document.querySelector("#duration");
const clicktwo = document.querySelector("#clicktwo");

arcade.addEventListener("click", function () {
  arcade.classList.remove("bg-white");
  arcade.classList.add("bg-Magnolia");
  arcade.classList.add("border-2");
  arcade.classList.add("border-Marineblue");
  pro.classList.remove("bg-Magnolia");
  pro.classList.remove("border-2");
  advanced.classList.remove("bg-Magnolia");
  advanced.classList.remove("border-2");
});
pro.addEventListener("click", function () {
  pro.classList.remove("bg-white");
  pro.classList.add("bg-Magnolia");
  pro.classList.add("border-2");
  pro.classList.add("border-Marineblue");
  arcade.classList.remove("bg-Magnolia");
  arcade.classList.remove("border-2");
  advanced.classList.remove("bg-Magnolia");
  advanced.classList.remove("border-2");
});
advanced.addEventListener("click", function () {
  advanced.classList.remove("bg-white");
  advanced.classList.add("bg-Magnolia");
  advanced.classList.add("border-2");
  advanced.classList.add("border-Marineblue");
  pro.classList.remove("bg-Magnolia");
  arcade.classList.remove("bg-Magnolia");
  pro.classList.remove("border-2");
  arcade.classList.remove("border-2");
});

let SelectPlan = {
  plan: "Arcade",
  duration: 0,
  onlineoption: "",
  storageoption: "",
  profileoption: "",
};
var d = 0;

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

const pricingone = [...document.querySelectorAll(".pricingone")];
const pricingtwo = [...document.querySelectorAll(".pricingtwo")];

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
clicktwo.addEventListener("click", totabthree);

const clickthree = document.querySelector("#clickthree");
const onlineoption = document.querySelector(".online-option");
const storageoption = document.querySelector(".storage-option");
const profileoption = document.querySelector(".profile-option");

onlineoption.addEventListener("click", function () {
  SelectPlan.onlineoption = "onlineoption";
});
storageoption.addEventListener("click", function () {
  SelectPlan.storageoption = "storageoption";
});
profileoption.addEventListener("click", function () {
  SelectPlan.profileoption = "profileoption";
});

let Arcade_Array = {
  plan: "Arcade",
  price: "9",
};
let Advanced_Array = {
  plan: "Advanced",
  price: "12",
};
let Pro_Array = {
  plan: "Pro",
  price: "15",
};
const summaryplan = document.querySelector(".summaryplan");
const summaryduration = document.querySelector(".summaryduration");
const summaryprice = document.querySelector(".summaryprice");

function summaryFilling() {
  const total = document.querySelector(".total");
  var t = 0;
  var to = 0;
  if (SelectPlan.duration === "monthly") {
    summaryplan.textContent = SelectPlan.plan;
    summaryduration.textContent = SelectPlan.duration;
    if (SelectPlan.plan === "Arcade") {
      summaryprice.textContent = Arcade_Array.price;
      t = t + parseInt(Arcade_Array.price);
    }
    if (SelectPlan.plan === "Advanced") {
      summaryprice.textContent = Advanced_Array.price;
      t = t + parseInt(Advanced_Array.price);
    }
    if (SelectPlan.plan === "Pro") {
      summaryprice.textContent = Pro_Array.price;
      t = t + parseInt(Pro_Array.price);
    }
  }
  if (SelectPlan.duration === "yearly") {
    summaryplan.textContent = SelectPlan.plan;
    summaryduration.textContent = SelectPlan.duration;
    if (SelectPlan.plan === "Arcade") {
      summaryprice.textContent = Arcade_Array.price * 10;
      t = t + parseInt(Arcade_Array.price) * 10;
    }
    if (SelectPlan.plan === "Advanced") {
      summaryprice.textContent = Advanced_Array.price * 10;
      t = t + parseInt(Advanced_Array.price) * 10;
    }
    if (SelectPlan.plan === "Pro") {
      summaryprice.textContent = Pro_Array.price * 10;
      t = t + parseInt(Pro_Array.price) * 10;
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

clickthree.addEventListener("click", totabfour);

const clickfinish = document.querySelector("#clickfinish");
const stepfive = document.querySelector("#stepfive");
function tofinish() {
  stepfour.classList.add("hidden");
  stepfive.classList.remove("hidden");
  tag3.classList.remove("bg-Pastelblue");
  tag4.classList.add("bg-Pastelblue");
}
clickfinish.addEventListener("click", tofinish);

id = "clickbacktothree";
const clickbacktothree = document.querySelector("#clickbacktothree");
const clickbacktotwo = document.querySelector("#clickbacktotwo");

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

clickbacktothree.addEventListener("click", backtothree);
clickbacktotwo.addEventListener("click", backtotwo);
