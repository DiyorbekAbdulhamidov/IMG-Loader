"use strict";
const images = document.querySelectorAll("img");
const btn = document.querySelector("button");
const section = document.querySelector("section");
const loaders = document.querySelectorAll(".spinner");
let loadedImages = 0;
images.forEach((img) => {
    img.classList.add("hide");
    img.addEventListener("load", () => {
        loadedImages++;
        if (loadedImages == 4) {
            images.forEach((img) => {
                loaders.forEach((loader) => {
                    loader?.classList.add("hide");
                });
                img.classList.remove("hide");
            });
        }
    });
});
btn?.addEventListener("click", () => {
    location.reload();
});
// PROMISE AWAIT;
// const rasmImg = document.querySelectorAll('.rasm');
// const btn = document.querySelector('button')
// const section = document.querySelector('section');
// function anitmateRasm() {
//     rasmImg.forEach(function (img) {
//         img.innerHTML = 
//             `
//             <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
//             `
//         img.className = 'lds-roller'
//     });
// }
// anitmateRasm();
// function randomImg() {
//     return `https://picsum.photos/5000/5000?random=${Math.floor(Math.random() * 1)}`;
// }
// function finishAnitmateRasm() {
//     rasmImg.forEach(function (img) {
//         img.innerHTML = `
//         <div class="rasm"><img src='${randomImg()}' alt=""></div>
//         `
//         img.className = 'rasm';
//     });
// }
// async function downloadImg(silka: string) {
//     const img = new Image();
//     img.src = silka;
//     return new Promise((resolve, reject) => {
//         img.onload = () => resolve(finishAnitmateRasm());
//         img.onerror = () => reject(new Error(`Rasm yuklanmadi: ${silka}`));
//     });
// }
// async function downloadAllImages() {
//     const results = await Promise.all([
//         downloadImg(randomImg()),
//         downloadImg(randomImg()),
//         downloadImg(randomImg()),
//         downloadImg(randomImg())
//     ]);
//     console.log(results);
// }
// downloadAllImages();
// btn?.addEventListener("click", () =>{
//     location.reload();
// //     let imgs = document.createElement('div');
// //     imgs.className = "imgs";
// //     for(let i = 0; i < 4; i++){
// //         let div = document.createElement('div');
// //         div.className = 'rasm';
// //         anitmateRasm();
// //         div.innerHTML = `<div class="rasm"><img src='${randomImg()}' alt=""></div>`;
// //         imgs.appendChild(div);
// //     }
// //     let newBtn = document.createElement('button');
// //     newBtn.textContent = "MORE";
// //     newBtn.addEventListener("click", () =>{
// //         downloadAllImages();
// //     });
// //     section?.appendChild(imgs);
// //     section?.appendChild(newBtn);
// });
