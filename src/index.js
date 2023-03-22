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
const navbaslik = document.querySelectorAll("header nav a");
for (let i = 0; i < navbaslik.length; i++) {
  navbaslik[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  navbaslik[i].classList.add("italic");
}
//logo img
const imgLogo = document.getElementById("logo-img");
imgLogo.src = siteContent.images["logo-img"];
//cta text
const ctaText = document.querySelector(".cta-text");
ctaText.querySelector("h1").textContent = siteContent.cta["h1"];
ctaText.querySelector("button").textContent = siteContent.cta["button"];
//cta logo
const ctaLogo = document.getElementById("cta-img");
ctaLogo.src = siteContent.images["cta-img"];
//top content

const topContent = document.getElementsByClassName("text-content")[0];
topContent.querySelector("h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];
topContent.querySelector("p").textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];

const topContent1 = document.getElementsByClassName("text-content")[1];
topContent1.querySelector("h4").textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];
topContent1.querySelector("p").textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

//mid img

const midImg = document.getElementById("middle-img");
midImg.src = siteContent.images["accent-img"];

//bottom content

const bottomContent = document.getElementsByClassName("text-content")[2];
bottomContent.querySelector("h4").textContent =
  siteContent["ana-içerik"]["servisler-h4"];
bottomContent.querySelector("p").textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];

const bottomContent1 = document.getElementsByClassName("text-content")[3];
bottomContent1.querySelector("h4").textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
bottomContent1.querySelector("p").textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];

const bottomContent2 = document.getElementsByClassName("text-content")[4];
bottomContent2.querySelector("h4").textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
bottomContent2.querySelector("p").textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

//contact
const iletisim = document.getElementsByClassName("contact")[0];
iletisim.querySelector("h4").textContent = siteContent.iletisim["iletişim-h4"];
iletisim.querySelectorAll("p")[0].textContent = siteContent.iletisim.adres;
iletisim.querySelectorAll("p")[1].textContent = siteContent.iletisim.telefon;
iletisim.querySelectorAll("p")[2].textContent = siteContent.iletisim.email;

//footer
const footer = document.querySelector("footer");
footer.querySelector("a").classList.add("bold");
footer.querySelector("a").textContent = siteContent.footer.copyright;
