window.onload = async function () {
    const title = document.querySelector("#title");
    const price = document.querySelector("#price");
    let img = document.querySelector("#img");
    const description = document.querySelector("#description");
    const type_id = document.querySelector("#type_id");
    const buttonSubmit = document.querySelector("#buttonSubmit");
    const feedback = document.querySelector(".feedback");

    const allowedExtension = ["jpeg", "jpg", "png", "gif", "bmp"];
    let result = -1; //para la validacion de la imagen
    let pTitle = document.createElement("p");
    let pImg = document.createElement("p");
    let pType = document.createElement("p");
    let pPrice = document.createElement("p");
    let pDescription = document.createElement("p");

    console.log(price);
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    //validacion de imagen

    img.onchange = () => {
        img = document.querySelector("#img");
        console.log(img);

        for (const extension of allowedExtension) {
            if (result == -1) {
                result = img.value.search(extension);
            }
        }
        if (result == -1) {
            pImg.textContent = "Tipo de imagen invalida (FE)";
            feedback.appendChild(pImg);
            pImg.classList.remove("hide-error-fe");
            pImg.classList.add("show-error-fe");
            buttonSubmit.disabled = true;
        } else {
            pImg.classList.replace("show-error-fe", "hide-error-fe");
            buttonSubmit.disabled = false;
        }
    };

    // validacion del titulo

    title.onchange = () => {
        let titleTrim = title.value.trim();
        if (titleTrim.length < 5) {
            pTitle.textContent =
                "El nombre del producto debe tener como minimo 5 caracteres (FE)";
            feedback.appendChild(pTitle);
            pTitle.classList.remove("hide-error-fe");
            pTitle.classList.add("show-error-fe");
            buttonSubmit.disabled = true;
        } else {
            pTitle.classList.replace("show-error-fe", "hide-error-fe");
            buttonSubmit.disabled = false;
        }
    };

    //validacion de precio

    price.onchange = () => {
        let priceTrim = price.value.trim();

        console.log(priceTrim);
        console.log(priceTrim.length == 0);
        console.log(priceTrim.length);

        let priceEmpty = false;
        if (priceTrim.length == 0) {
            priceEmpty = true;
        }

        let isNotANumber = false;
        if (!isNumber(Number(+price.value))) {
            isNotANumber = true;
        }
        if (priceEmpty || isNotANumber) {
            pPrice.textContent = "Debes incluir el precio (FE)";
            feedback.appendChild(pPrice);
            pPrice.classList.remove("hide-error-fe");
            pPrice.classList.add("show-error-fe");
            buttonSubmit.disabled = true;
            console.log("a");
            console.log(price);
        } else {
            pPrice.classList.replace("show-error-fe", "hide-error-fe");
            buttonSubmit.disabled = false;
        }
    };

    //validacion de descripcion

    description.onchange = () => {
        if (description.value.length < 20) {
            pDescription.textContent =
                "La descripción del producto debe tener como minimo 20 caracteres (FE)";
            feedback.appendChild(pDescription);
            pDescription.classList.remove("hide-error-fe");
            pDescription.classList.add("show-error-fe");
            buttonSubmit.disabled = true;
        } else {
            pDescription.classList.replace("show-error-fe", "hide-error-fe");
            buttonSubmit.disabled = false;
        }
    };
};
