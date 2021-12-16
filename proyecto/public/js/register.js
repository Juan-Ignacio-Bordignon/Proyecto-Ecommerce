window.onload = async function () {
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const userName = document.querySelector("#user_name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");

    let validUserName = false;
    let validEmail = false;
    let validPassword = false;
    let validConfirmPassword = false;

    let pUserName = document.querySelector("#user_name_error");
    let pEmail = document.querySelector("#email_error");
    let pPasswordEmpty = document.querySelector("#password_empty_error");
    let pPasswordWeak = document.querySelector("#password_weak_error");
    let pConfirmPassword = document.querySelector("#password_confirm_error");

    function ValidateEmail(inputText) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }
    function strongPassword(password) {
        const validator =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        //password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
        if (password.match(validator)) {
            return true;
        } else {
            return false;
        }
    }

    buttonSubmit.disabled = true;
    buttonSubmit.classList.replace("button-form", "button-form-disable");
    document.onchange = () => {
        if (
            validEmail &&
            validPassword &&
            validConfirmPassword &&
            validUserName
        ) {
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

    // validacion de userName

    userName.onkeydown = () => {
        let trimedUserName = userName.value.trim();
        if (trimedUserName.length <= 1) {
            pUserName.classList.remove("hide-error-fe");
            pUserName.classList.add("show-error-fe");
            validUserName = false;
        } else {
            validUserName = true;
            pUserName.classList.replace("show-error-fe", "hide-error-fe");
        }
    };

    // validacion de email

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

    password.onkeydown = () => {
        let trimedPassword = password.value.trim();
        if (trimedPassword == 0) {
            pPasswordEmpty.classList.remove("hide-error-fe");
            pPasswordEmpty.classList.add("show-error-fe");
            validPassword = false;
        } else if (strongPassword(trimedPassword)) {
            pPasswordEmpty.classList.replace("show-error-fe", "hide-error-fe");
            pPasswordWeak.classList.replace("show-error-fe", "hide-error-fe");
            validPassword = true;
        } else {
            pPasswordWeak.classList.remove("hide-error-fe");
            pPasswordWeak.classList.add("show-error-fe");
            validPassword = false;
        }
    };
    confirmPassword.onkeydown = () => {
        let trimedPassword = password.value.trim();
        let trimedConfirmPassword = confirmPassword.value.trim();
        if (trimedPassword != trimedConfirmPassword) {
            pConfirmPassword.classList.remove("hide-error-fe");
            pConfirmPassword.classList.add("show-error-fe");
            validConfirmPassword = false;
        } else {
            pConfirmPassword.classList.replace(
                "show-error-fe",
                "hide-error-fe"
            );
            validConfirmPassword = true;
        }
    };
};
