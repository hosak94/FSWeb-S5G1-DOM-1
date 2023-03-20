const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
//navbar
let navbaslik = document.querySelectorAll("header nav a");
for (let i = 0; i < navbaslik.length; i++) {
  navbaslik[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navbaslik[i].classList.add("italic");
}
var logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
//cta
const ctaText = document.querySelector(".cta-text");
ctaText.querySelector("h1").textContent = "Bu DOM Mükemmel";
ctaText.querySelector("button").textContent = "Başlayın";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");

//ana içerik top content
const topContent = document.querySelectorAll(".top-content .text-content");
for (let i = 0; i < 2; i++) {
  topContent[i].querySelector("h4").textContent =
    siteContent["ana-içerik"][`${i === 0 ? "özellikler-h4" : "hakkımızda-h4"}`];
  topContent[i].querySelector("p").textContent =
    siteContent["ana-içerik"][
      `${i === 0 ? "özellikler-içerik" : "hakkımızda-içerik"}`
    ];
}
const midImg = document.querySelector(".middle-img");
midImg.setAttribute("src", "http://localhost:9000/img/accent.png");

//bottom content
const bottomContent = document.querySelector(".bottom-content");

for (let i = 2; i < 5; i++) {
  const textContent = document.createElement("div");
  textContent.classList.add("text-content");

  const h4 = document.createElement("h4");
  h4.textContent =
    siteContent["ana-içerik"][
      `${Object.keys(siteContent["ana-içerik"])[i * 2]}`
    ];

  const p = document.createElement("p");
  p.textContent =
    siteContent["ana-içerik"][
      `${Object.keys(siteContent["ana-içerik"])[i * 2 + 1]}`
    ];

  textContent.appendChild(h4);
  textContent.appendChild(p);
  bottomContent.appendChild(textContent);
}
//contact
