window.onload = async function () {
    const feedback = document.querySelector(".feedback");
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    let validEmail = false;
    let validPassword = false;

    let pEmail = document.createElement("p");
    let pPassword = document.createElement("p");

    function ValidateEmail(inputText) {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            return true;
        } else {
            return false;
        }
    }

    buttonSubmit.disabled = true;
    document.onchange = () => {
        if (validEmail && validPassword) {
            buttonSubmit.disabled = false;
        } else {
            buttonSubmit.disabled = true;
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
        } else {
            pPassword.classList.replace("show-error-fe", "hide-error-fe");
            validPassword = true;
        }
    };
};
