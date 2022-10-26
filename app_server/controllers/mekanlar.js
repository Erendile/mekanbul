var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "MekanBul",
      slogan: "Civardaki Mekanları Keşfet!",
    },
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Modernevler",
        puan: "3",
        imkanlar: ["Kahve", "Çay", "Kek"],
        mesafe: "10km",
      },
      {
        ad: "Starbucks",
        adres: "Modernevler",
        puan: "3",
        imkanlar: ["Kahve", "Çay", "Kek"],
        mesafe: "10km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res) {
  res.render("mekanbilgisi", {
    baslik: "Mekan Bilgisi",
    mekanBaslik: "Starbucks",
    mekanDetay: {
      ad: "Starbucks",
      adres: "Modernevler",
      puan: "4",
      imkanlar: ["Kahve", "Çay", "Kek"],
      koordinatlar: {
        enlem: "37.7",
        boylam: "30.5",
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "9:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi-Pazar",
          acilis: "10:00",
          kapanis: "22:00",
          kapali: false,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Eren Dile",
          puan: "4",
          tarih: "29 Ekim 2022",
          yorumMetni: ":')",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Sayfası" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
