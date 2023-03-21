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
const logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
//cta
const ctaText = document.querySelector(".cta-text");
ctaText.querySelector("h1").textContent = "Bu DOM Mükemmel";
ctaText.querySelector("button").textContent = "Başlayın";

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");

//top Content
// özellikler h4 ve içeriği p elementi
const featuresHeading = document.querySelector(
  ".top-content .text-content:first-of-type h4"
);
featuresHeading.textContent = siteContent["ana-içerik"]["özellikler-h4"];

const featuresContent = document.querySelector(
  ".top-content .text-content:first-of-type p"
);
featuresContent.textContent = siteContent["ana-içerik"]["özellikler-içerik"];

// hakkımızda h4 ve içeriği p elementi
const aboutHeading = document.querySelector(
  ".top-content .text-content:last-of-type h4"
);
aboutHeading.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const aboutContent = document.querySelector(
  ".top-content .text-content:last-of-type p"
);
aboutContent.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

//mid İmg
const midImg = document.querySelector(".middle-img");
midImg.setAttribute("src", "http://localhost:9000/img/accent.png");

//bottom Content
// bottom-content sınıfının altındaki h4 ve p etiketlerine siteContent objesinden verileri yerleştirir
// Servisler
const servislerH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(1) h4"
);
const servislerP = document.querySelector(
  ".bottom-content .text-content:nth-child(1) p"
);
servislerH4.textContent = siteContent["ana-içerik"]["servisler-h4"];
servislerP.textContent = siteContent["ana-içerik"]["servisler-içeriği"];

// Ürünler
const ürünlerH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
const ürünlerP = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
ürünlerH4.textContent = siteContent["ana-içerik"]["ürünler-h4"];
ürünlerP.textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

// Vizyon
const vizyonH4 = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
const vizyonP = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
vizyonH4.textContent = siteContent["ana-içerik"]["vizyon-h4"];
vizyonP.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//contact
const iletisimsection = document.querySelector(".contact");
const h4 = document.createElement("h4");
h4.textContent = siteContent.iletisim["iletişim-h4"];
iletisimsection.appendChild(h4);

const adresP = document.createElement("p");
const adresText = document.createTextNode(siteContent.iletisim.adres);
adresP.appendChild(adresText);

const telefonP = document.createElement("p");
const telefonText = document.createTextNode(siteContent.iletisim.telefon);
telefonP.appendChild(telefonText);

const emailP = document.createElement("p");
const emailText = document.createTextNode(siteContent.iletisim.email);
emailP.appendChild(emailText);

iletisimsection.appendChild(adresP);
iletisimsection.appendChild(telefonP);
iletisimsection.appendChild(emailP);

//footer
const footer = document.querySelector("footer a");
footer.classList.add("bold");
footer.textContent = siteContent.footer.copyright;
