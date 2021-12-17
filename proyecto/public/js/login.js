window.onload = async function () {
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    let validEmail = false;
    let validPassword = false;

    let pEmail = document.querySelector("#email_error");
    let pPasswordEmpty = document.querySelector("#password_empty_error");

    function ValidateEmail(inputText) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

    buttonSubmit.disabled = true;
    buttonSubmit.classList.replace("button-form", "button-form-disable");
    document.onkeydown = () => {
        if (validEmail && validPassword) {
            buttonSubmit.disabled = false;
            buttonSubmit.classList.replace(
                "button-form-disable",
                "button-form"
            );
        } else {
            buttonSubmit.disabled = true;

            buttonSubmit.classList.replace(
                "button-form",
                "button-form-disable"
            );
        }
    };

    // validacion de email

    email.onchange = () => {
        if (!ValidateEmail(email)) {
            pEmail.classList.remove("hide-error-fe");
            pEmail.classList.add("show-error-fe");
            validEmail = false;
        } else {
            validEmail = true;
            pEmail.classList.replace("show-error-fe", "hide-error-fe");
        }
    };
    email.onkeydown = () => {
        if (!ValidateEmail(email)) {
            pEmail.classList.remove("hide-error-fe");
            pEmail.classList.add("show-error-fe");
            validEmail = false;
        } else {
            validEmail = true;
            pEmail.classList.replace("show-error-fe", "hide-error-fe");
        }
    };

    // validacion de password

    password.onchange = () => {
        let trimedPassword = password.value.trim();
        if (trimedPassword == 0) {
            pPasswordEmpty.classList.remove("hide-error-fe");
            pPasswordEmpty.classList.add("show-error-fe");
            validPassword = false;
        } else {
            pPasswordEmpty.classList.replace("show-error-fe", "hide-error-fe");
            validPassword = true;
        }
    };
    password.onkeydown = () => {
        let trimedPassword = password.value.trim();
        if (trimedPassword == 0) {
            pPasswordEmpty.classList.remove("hide-error-fe");
            pPasswordEmpty.classList.add("show-error-fe");
            validPassword = false;
        } else {
            pPasswordEmpty.classList.replace("show-error-fe", "hide-error-fe");
            validPassword = true;
        }
    };
};
