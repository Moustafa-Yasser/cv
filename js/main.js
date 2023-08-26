// start menu
let btn1 = document.querySelector(".hidden-one");
let btn2 = document.querySelector(".hidden-two");
let list = document.querySelector(".hidden-one + ul");
btn1.addEventListener("click", () => {
  list.style = "  transform: translateX(0%);";
});

btn2.addEventListener("click", () => {
  list.style = "  transform: translateX(100%);";
});
let all = document.querySelector("header + div");
all.addEventListener("click", () => {
  list.style = "  transform: translateX(100%);";
});
// end menu
// start valid form
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let emailValid = document.getElementById("email");
let order = document.getElementById("help");
let submit = document.getElementById("btn");
let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

firstName.onblur = () => {
  if (firstName.value === "") {
    firstName.style.borderColor = "red";
  } else {
    firstName.style.borderColor = "green";
  }
};

lastName.onblur = () => {
  if (lastName.value === "") {
    lastName.style.borderColor = "red";
  } else {
    lastName.style.borderColor = "green";
  }
};

order.onblur = () => {
  if (order.value === "") {
    order.style.borderColor = "red";
  } else {
    order.style.borderColor = "green";
  }
};

emailValid.onchange = function () {
  if (emailValid.value.match(reg)) {
    emailValid.style.borderColor = "green";
  } else {
    emailValid.style.borderColor = "red";
  }
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
});
function Send() {
  let name = `${document.getElementById("first").value} ${
    document.getElementById("last").value
  }`;
  let email = document.getElementById("email").value;
  let mess = document.getElementById("help").value;
  let body = `Name: ${name} <br/> Email: ${email} <br/> Message: ${mess}`;
  Email.send({
    SecureToken: "51eff55e-d31b-45cb-93ce-e9b9a112ef6b",
    To: "almtabynrsayl@gmail.com",
    From: "almtabynrsayl@gmail.com",
    Subject: "Questions Followers",
    Body: body,
  }).then((message) => {
    if (
      message == "OK" &&
      emailValid.value.match(reg) &&
      firstName.value !== "" &&
      lastName.value !== "" &&
      order.value !== ""
    ) {
      swal("عملية ناجحة", "تم إرسال رسالتك بنجاح", "success");
    } else {
      swal(
        "عملية فاشلة",
        "حدث خطأ ما، يرجي ملئ جميع الحقول بشكل صحيح",
        "error"
      );
    }
  });
}
