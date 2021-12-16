window.onload = async function () {
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    let img = document.querySelector("#img");
    const description = document.querySelector("#description");
    const type_id = document.querySelector("#type_id");
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const feedback = document.querySelector(".feedback");

    const allowedExtension = ["jpeg", "jpg", "png", "gif", "bmp"];

    let pTitle = document.querySelector("#title_error");
    let pImg = document.querySelector("#img_error");
    let pPrice = document.querySelector("#price_error");
    let pDescription = document.querySelector("#description_error");
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    let validTitle = true;
    let validPrice = true;
    let validImage = true;
    let validDescription = true;

    // validacion del titulo

    title.onkeydown = () => {
        let titleTrim = title.value.trim();
        if (titleTrim.length < 5) {
            pTitle.classList.remove("hide-error-fe");
            pTitle.classList.add("show-error-fe");
            validTitle = false;
        } else {
            pTitle.classList.replace("show-error-fe", "hide-error-fe");
            validTitle = true;
        }
    };

    //validacion de precio

    price.onkeydown = () => {
        let priceTrim = price.value.trim();
        let priceEmpty = false;
        let isNotANumber = false;

        if (priceTrim.length == 0) {
            priceEmpty = true;
        }

        if (!isNumber(Number(+price.value))) {
            isNotANumber = true;
        }
        if (priceEmpty || isNotANumber) {
            pPrice.classList.remove("hide-error-fe");
            pPrice.classList.add("show-error-fe");
            validPrice = false;
        } else {
            pPrice.classList.replace("show-error-fe", "hide-error-fe");
            validPrice = true;
        }
    };

    //validacion de imagen

    img.onchange = () => {
        img = document.querySelector("#img");
        let result = -1;

        for (const extension of allowedExtension) {
            if (result == -1) {
                result = img.value.search(extension);
            }
        }
        if (result == -1) {
            pImg.classList.remove("hide-error-fe");
            pImg.classList.add("show-error-fe");
            validImage = false;
        } else {
            pImg.classList.replace("show-error-fe", "hide-error-fe");
            validImage = true;
        }
    };

    //validacion de descripcion

    description.onkeydown = () => {
        if (description.value.length < 20) {
            pDescription.textContent = "";
            feedback.appendChild(pDescription);
            pDescription.classList.remove("hide-error-fe");
            pDescription.classList.add("show-error-fe");
            validDescription = false;
        } else {
            pDescription.classList.replace("show-error-fe", "hide-error-fe");
            validDescription = true;
        }
    };

    buttonSubmit.disabled = false;
    buttonSubmit.classList.replace("button-form", "button-form-disable");
    document.onchange = () => {
        if (validTitle && validPrice && validImage && validDescription) {
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
};
