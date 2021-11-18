const FORM = document.getElementById("telegram-register");

const PSWD_INPUTS = document.querySelectorAll(".password-input");
const RESULT = document.getElementById("result");

const checkPasswordParameters = () => {
  if (PSWD_INPUTS[0].value !== PSWD_INPUTS[1].value ||
  (PSWD_INPUTS[0].className.split(" ").indexOf("invalid") > -1) ||
  (PSWD_INPUTS[1].className.split(" ").indexOf("invalid") > -1)) {
    RESULT.innerHTML = "";
    return false;
  }
  return true;
}

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = checkPasswordParameters();
  if (!isValid) return;

  const SURVEY = `<p>Name: ${document.getElementById("name-input").value}</p>
                  <p>Email: ${document.getElementById("email-input").value}</p>
                  <p>Country: ${document.getElementById("country-select").value}</p>
                  <p>Language: ${document.getElementById("language-select").value}</p>
                  <p>Chat background: <span style="height: 14px;width: 14px;background: ${document.getElementById("color-input").value};display: inline-block;"></span></p>`
  RESULT.innerHTML = "Success!" + SURVEY;
});

PSWD_INPUTS.forEach((i) => {
  i.addEventListener("change", (event) => {
    const PSWD = event.target.value
    const hasUpperCase = /[A-Z]/.test(PSWD)
    const hasLowerCase = /[a-z]/.test(PSWD)
    const hasDigital = /\d/.test(PSWD)

    if (PSWD.length < 8 || !hasUpperCase || !hasLowerCase || !hasDigital) {
      event.target.classList.add("invalid");
    } else {
      event.target.classList.remove("invalid");
    }
  })
});

const PSWD_EYE_BTNS = document.querySelectorAll(".eye");
const PSWD_EYE_SLASH_BTNS = document.querySelectorAll(".eye-slash");

PSWD_EYE_SLASH_BTNS.forEach((b) => {
  b.addEventListener("click", (e) => {
    const BTN = e.target;
    BTN.classList.add("hidden");
    BTN.parentElement.querySelector(".eye").classList.remove("hidden");
    BTN.parentElement.querySelector(".password-input").type = "text";
  });
});

PSWD_EYE_BTNS.forEach((b) => {
  b.addEventListener("click", (e) => {
    const BTN = e.target;
    BTN.classList.add("hidden");
    BTN.parentElement.querySelector(".eye-slash").classList.remove("hidden");
    BTN.parentElement.querySelector(".password-input").type = "password";
  });
});

PSWD_EYE_BTNS.forEach((b) => {
  b.addEventListener("click", (e) => {
    const BTN = e.target;
    BTN.classList.add("hidden");
    BTN.parentElement.querySelector(".eye-slash").classList.remove("hidden");
    BTN.parentElement.querySelector(".password-input").type = "password";
  });
});

