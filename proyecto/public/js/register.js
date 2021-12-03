window.onload = async function () {
    const feedback = document.querySelector(".feedback");
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const userName = document.querySelector("#user_name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");

    let validUserName = false;
    let validEmail = false;
    let validPassword = false;
    let validConfirmPassword = false;

    let pUserName = document.createElement("p");
    let pEmail = document.createElement("p");
    let pPassword = document.createElement("p");
    let pConfirmPassword = document.createElement("p");

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
    document.onchange = () => {
        if (
            validEmail &&
            validPassword &&
            validConfirmPassword &&
            validUserName
        ) {
            buttonSubmit.disabled = false;
        } else {
            buttonSubmit.disabled = true;
        }
    };

    // validacion de userName

    userName.onchange = () => {
        let trimedUserName = userName.value.trim();
        if (trimedUserName.length < 2) {
            feedback.appendChild(pUserName);
            pUserName.textContent =
                "El nombre de usuario debe contener al menos 2 caracteres (FE)";
            pUserName.classList.remove("hide-error-fe");
            pUserName.classList.add("show-error-fe");
            validUserName = false;
        } else {
            validUserName = true;
            pUserName.classList.replace("show-error-fe", "hide-error-fe");
        }
    };

    // validacion de email

    email.onchange = () => {
        if (!ValidateEmail(email)) {
            feedback.appendChild(pEmail);
            pEmail.textContent = "Dirección de email invalida (FE)";
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
            feedback.appendChild(pPassword);
            pPassword.textContent = "Casilla de contraseña vacia (FE)";
            pPassword.classList.remove("hide-error-fe");
            pPassword.classList.add("show-error-fe");
            validPassword = false;
        } else if (strongPassword(trimedPassword)) {
            pPassword.classList.replace("show-error-fe", "hide-error-fe");
            validPassword = true;
        } else {
            feedback.appendChild(pPassword);
            pPassword.textContent =
                "La contraseña debe tener entre 8 y 15 caracteres, conteniendo 1 letra minúscula, 1 letra mayúscula, un número y un carácter especial (!@#$%^&*) (FE)";
            pPassword.classList.remove("hide-error-fe");
            pPassword.classList.add("show-error-fe");
            validPassword = false;
        }
    };
    confirmPassword.onchange = () => {
        let trimedPassword = password.value.trim();
        let trimedConfirmPassword = confirmPassword.value.trim();
        if (trimedPassword !== trimedConfirmPassword) {
            feedback.appendChild(pConfirmPassword);
            pConfirmPassword.textContent =
                "La contraseña de verificación no coincide (FE)";
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
