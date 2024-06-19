const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id:1,
        title: "Motus",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/Motus.webp",
            },
            {
                code: "white",
                img: "./img/Motus 1.webp",
            },
        ],
    },
    {
        id: 2,
        title: "Motion",
        price: 145,
        colors: [
          {
            code: "orange",
            img: "./img/Motion 2.webp",
          },
          {
            code: "white",
            img: "./img/Motion.webp",
          },
        ],
    },
    {
        id: 3,
        title: "Primus",
        price: 135,
        colors: [
          {
            code: "black",
            img: "./img/Primus Lite.webp",
          },
          {
            code: "dark blue",
            img: "./img/Primus Lite 1.webp",
          },
        ],
    },
    {
        id: 4,
        title: "Hydra",
        price: 109,
        colors: [
          {
            code: "neon",
            img: "./img/Hydra 2.webp",
          },
          {
            code: "black",
            img: "./img/Hydra.webp",
          },
        ],
    },
    {
        id: 5,
        title: "Asana",
        price: 124,
        colors: [
          {
            code: "white",
            img: "./img/Asana.webp",
          },
          {
            code: "burgundy",
            img: "./img/Asana 1.webp",
          },
        ],
    }, 
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;

        // change the chosen product
        choosenProduct = products[index];

        // change details of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "€" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });        

        // assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});