const listaProductos = [
    {
        id: 1,
        title: "Ryzen 5 3600",
        tipe: "Procesador",
        desc: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",
        price: "$37.999",
        img: "/images/Rysen5-3600.jfif",
    },
    {
        id: 2,
        title: "MSI GeForce RTX 3060 Ti",
        tipe: "Tarjeta Gráfica",
        desc: "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Velocidad en cada lectura, cuenta con 4864 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos. Calidad de imagen, criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.",
        price: "$204.000",
        img: "/images/MSI-Ventus-GeForce-RTX-3060-Ti.jpg",
    },
    {
        id: 3,
        title: "Samsung F24T35",
        tipe: "Monitor",
        desc: "Este monitor led de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
        price: "$25.999",
        img: "/images/Samsung-F24T35-led-24.jpg",
    },
    {
        id: 4,
        title: "Redragon Kumara K552",
        tipe: "Teclado Mecanico",
        desc: "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",
        price: "$6.439",
        img: "/images/Redragon-Kumara-K552.jpg",
    },
];

const controller = {
    creat: (req, res) => {
        res.render("products/productCreat");
    },
    edit: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productEdit", { producto: producto });
    },
    detail: (req, res) => {
        const producto = listaProductos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("products/productDetail", { producto: producto });
    },
};

module.exports = controller;
