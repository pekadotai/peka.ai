import React, { useState } from "react";
import Wanita from "../assets/icons/wanita.png";
import Circle from "../assets/icons/circleee.png";
import "./Home.css";
import { CardGrid, Card } from "@kata-kit/card";
import { Chrono } from "react-chrono";
import Gejala from "../assets/icons/symptom.png";
import Ask from "../assets/icons/ask.png";
import Cegah from "../assets/icons/cegah.png";
import Diagnosa from "../assets/icons/diagnosa.png";
import Warning from "../assets/icons/warning.png";
import Tipe from "../assets/icons/tipe.png";
import Myth from "../assets/icons/myth.png";
import FAQs from "../assets/icons/faqs.png";
import Icon1 from "../assets/icons/icon1.png";
import Icon2 from "../assets/icons/icon2.png";
import Icon3 from "../assets/icons/icon3.png";
import Icon4 from "../assets/icons/icon4.png";
import Icon5 from "../assets/icons/icon5.png";
import Icon6 from "../assets/icons/icon6.png";
import Icon7 from "../assets/icons/icon7.png";
import Icon8 from "../assets/icons/icon8.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {
  const [tentangPeka, setTentangPeka] = useState(false);
  const [gejala, setGejala] = useState(false);
  const [diagnosa, setDiagnosa] = useState(false);
  const [tingkatan, setTingkatan] = useState(false);
  const [tipe, setTipe] = useState(false);
  const [mitos, setMitos] = useState(false);
  const [faqs, setFaqs] = useState(false);
  const [pencegahan, setPencegahan] = useState(false);
  const [cek, setCek] = useState(false);
  const items = [
    {
      title: "Stadium 0",
      cardTitle: "Stadium 0",
      cardSubtitle:
        "Kanker tidak berkembang lebih jauh dari tempat tumbuhnya di duktus atau lobulus, dan belum menyebar ke jaringan di sekitarnya. Kondisi ini disebut in situ.",
    },
    {
      title: "Stadium 1",
      cardTitle: "Stadium 1A",
      cardSubtitle:
        "Tumor berukuran hingga 20 mm dan belum menyebar ke kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 1",
      cardTitle: "Stadium 1B",
      cardSubtitle:
        "Kanker sudah menyebar ke kelenjar getah bening di ketiak, dengan ukuran lebih besar dari 0,2 mm namun kurang dari 2 mm. Sedangkan pada payudara terdapat tumor dengan ukuran tidak lebih dari 20 mm atau bisa tidak nampak tumor.",
    },
    {
      title: "Stadium 2",
      cardTitle: "Stadium 2A",
      cardSubtitle:
        "Kanker sudah menyebar ke kelenjar getah bening di ketiak dengan ukuran 2 mm atau lebih, dengan tumor di payudara tidak lebih dari 20 mm atau tidak tampak tumor di payudara. Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, tetapi belum menyebar ke kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 2",
      cardTitle: "Stadium 2B",
      cardSubtitle:
        "Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak. Ukuran tumor lebih besar dari 50 mm, namun tidak menyebar ke kelenjar getah bening.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3A",
      cardSubtitle:
        "Kanker sudah menyebar ke 4 hingga 9 kelenjar getah bening di ketiak atau kelenjar getah bening di dalam payudara, dengan ukuran tumor di payudara hingga 50 mm. Bisa juga tidak ada tumor di payudara. Ukuran tumor lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3B",
      cardSubtitle: "Tumor sudah menyebar ke kulit dinding payudara.",
    },
    {
      title: "Stadium 3",
      cardTitle: "Stadium 3C",
      cardSubtitle:
        "Ukuran tumor bisa bervariasi, dan telah menyebar hingga ke 10 kelenjar getah bening atau lebih di ketiak, atau sudah menyebar ke kelenjar getah bening di dalam payudara dan leher.",
    },
    {
      title: "Stadium 4",
      cardTitle: "Stadium 4",
      cardSubtitle:
        "Pada stadium ini, ukuran tumor bisa bervariasi, dan telah menyebar jauh ke organ lain, seperti tulang, paru-paru, hati, atau otak.",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{}}
        className={`icon-wanita wanita ${
          tentangPeka ||
          pencegahan ||
          gejala ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs
            ? "wanita-fade"
            : ""
        }`}
      >
        <img src={Wanita} width="700px" />
      </div>
      {/* 1 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${tentangPeka ? "icon-move" : "icon1"} ${
          pencegahan || diagnosa || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon"}`}
        onClick={() => {
          setTentangPeka(!tentangPeka);
        }}
      >
        <p style={{ color: "#fff" }}>
          <b>Tentang Peka.ai</b>
        </p>
      </div>
      {/* 2 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${gejala ? "icon-move" : "icon2"} ${
          tentangPeka ||
          pencegahan ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs
            ? "hide-icon"
            : ""
        }  `}
        onClick={() => {
          setGejala(!gejala);
        }}
      >
        <p style={{ color: "#fff" }}>
          <b>Gejala</b>
        </p>
      </div>
      {/* 3 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${pencegahan ? "icon-move" : "icon3"} ${
          tentangPeka || diagnosa || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon"}`}
        onClick={() => setPencegahan(!pencegahan)}
      >
        <p style={{ color: "#fff" }}>
          <b>Pencegahan</b>
        </p>
      </div>
      {/* 4 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${diagnosa ? "icon-move" : "icon4"} ${
          tentangPeka || pencegahan || tingkatan || tipe || mitos || faqs
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon"}`}
        onClick={() => setDiagnosa(!diagnosa)}
      >
        <p style={{ color: "#fff" }}>
          <b>Diagnosa</b>
        </p>
      </div>
      {/* 5 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${tingkatan ? "icon-move-right" : "icon5"} ${
          tentangPeka || pencegahan || diagnosa || tipe || mitos || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-right"}`}
        onClick={() => setTingkatan(!tingkatan)}
      >
        <p style={{ color: "#fff" }}>
          <b>Tingkatan</b>
        </p>
      </div>
      {/* 6 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${tipe ? "icon-move-right" : "icon6"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || mitos || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-right"}`}
        onClick={() => setTipe(!tipe)}
      >
        <p style={{ color: "#fff" }}>
          <b>Tipe-tipe</b>
        </p>
      </div>
      {/* 7 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
          textAlign: "center",
        }}
        className={`icon ${mitos ? "icon-move-right" : "icon7"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || tipe || faqs
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-right"}`}
        onClick={() => setMitos(!mitos)}
      >
        <div>
          <p style={{ color: "#fff", textAlign: "center" }}>
            <b>Mitos</b>
          </p>
        </div>
      </div>
      {/* 8 */}
      <div
        style={{
          position: "fixed",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#ff1493",
          border: "3px solid #000",
        }}
        className={`icon ${faqs ? "icon-move-right" : "icon8"} ${
          tentangPeka || pencegahan || diagnosa || tingkatan || tipe || mitos
            ? "hide-icon-right"
            : ""
        } ${gejala && "hide-icon-right"}`}
        onClick={() => setFaqs(!faqs)}
      >
        <h3 style={{ color: "#fff" }}>FAQs</h3>
      </div>
      <div
        style={{
          position: "fixed",
        }}
        className={`${cek ? "icon-move" : "icon0"} ${
          pencegahan ||
          diagnosa ||
          tingkatan ||
          tipe ||
          mitos ||
          faqs ||
          tentangPeka
            ? "hide-icon"
            : ""
        } ${gejala && "hide-icon-gejala"}`}
        onClick={() => {}}
      >
        <button
          data-hover="Peka Bot"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>
            <b>Cek potensi kanker payudaramu disini!</b>
          </div>
        </button>
      </div>

      {/* Slide 1 */}
      <div style={{}} className={`center fade ${tentangPeka && "down"}`}>
        <Card title="Apa itu Peka.ai" style={{}} className="apa-itu-peka">
          <p
            style={{
              color: "#000",
            }}
            className="line-height"
          >
            <b style={{ color: "#ff1493" }}>Peka.ai</b> adalah sebuah web
            interaktif yang dapat membantu kamu dalam mengetahui informasi
            tentang kanker payudara mulai dari penyebab, gejala, diagnosa,
            hinggu mitos seputar kanker payudara.
          </p>
        </Card>
        <Card
          title="Dan apa itu kanker payudara?"
          style={
            {
              // backgroundColor: "rgba(255,255,255,0.3)",
              // padding: "10px 0px",
              // color: "#ff1493",
              // width: "700px",
            }
          }
          className="apa-itu-kanker"
        >
          <p
            style={{
              color: "#000",
            }}
            className="line-height"
          >
            <b style={{ color: "#ff1493" }}>Kanker payudara</b> adalah kondisi
            ketika sel kanker terbentuk di jaringan payudara. Kanker bisa
            terbentuk di kelenjar yang menghasilkan susu (lobulus), atau di
            saluran (duktus) yang membawa air susu dari kelenjar ke puting
            payudara. Kanker juga bisa terbentuk di jaringan lemak atau jaringan
            ikat di dalam payudara. <br />(
            <i>
              <a
                href="https://www.alodokter.com/kanker-payudara"
                target="_blank"
                style={{
                  textDecorationLine: "underline",
                  textDecorationColor: "#ff1493",
                  color: "#ff1493",
                }}
              >
                https://www.alodokter.com/kanker-payudara
              </a>
            </i>
            )
          </p>
        </Card>
      </div>
      <div
        style={{}}
        className={`bottom-right-hide ${tentangPeka && "bottom-right-bottom"}`}
      >
        <img src={Icon1} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 2 */}
      <div style={{}} className={`center fade ${gejala && "down"}`}>
        <div style={{}}>
          <Card
            title="Apa aja sih gejala kanker payudara?"
            style={{
              backgroundColor: "rgba(255,255,255,1)",
              color: "#ff1493",
            }}
            className="gejala-title font-title"
          ></Card>
        </div>
      </div>
      <div style={{}} className={`left gejala ${gejala && "right"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Adanya benjolan di sekitar payudara.</p>
        </div>
      </div>
      <div style={{}} className={`from-right gejala ${gejala && "to-left"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Perubahan pada bentuk dan ukuran payudara</p>
        </div>
      </div>
      <div style={{}} className={`left2 gejala ${gejala && "right2"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Benjolan atau pembengkakan di bawah ketiak</p>
        </div>
      </div>
      <div style={{}} className={`from-right2 gejala ${gejala && "to-left2"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Pengelupasan kulit areola dan kulit payudara</p>
        </div>
      </div>
      <div style={{}} className={`left3 gejala ${gejala && "right3"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Nyeri dan pembengkakan pada payudara</p>
        </div>
      </div>
      <div style={{}} className={`from-right3 gejala ${gejala && "to-left3"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Darah ke luar dari puting payudara</p>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-right-hide ${gejala && "bottom-right-bottom"}`}
      >
        <img src={Icon2} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 3 */}
      <div style={{}} className={`center fade ${pencegahan && "down"}`}>
        <div>
          <Card
            title="Ini cara mencegah kanker payudara!"
            style={{
              // width: "800px",
              color: "#ff1493",
            }}
            className="gejala-title font-title"
          ></Card>
        </div>
      </div>
      <div className={`left gejala ${pencegahan && "right"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Rutin melakukan pemeriksaan payudara sendiri (SADARI)</p>
        </div>
      </div>
      <div className={`from-right gejala ${pencegahan && "to-left"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Rutin melakukan pemeriksaan payudara klinis (SADANIS)</p>
        </div>
      </div>
      <div className={`left2-cegah gejala ${pencegahan && "right2-cegah"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Pertahankan berat badan ideal</p>
        </div>
      </div>
      <div className={`from-right2 gejala ${pencegahan && "to-left2"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Olahraga rutin</p>
        </div>
      </div>
      <div className={`left3 gejala ${pencegahan && "right3"}`}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p>Hentikan konsumsi alkohol.</p>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-right-hide ${pencegahan && "bottom-right-bottom"}`}
      >
        <img src={Icon3} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 4 */}
      <div style={{}} className={`center fade ${diagnosa && "down"}`}>
        <div style={{}}>
          <Card
            title="Ayo diagnosa kanker payudara!"
            style={{
              textAlign: "justify",
              color: "#ff1493",
            }}
            className="pencegahan-title font-title"
          >
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Tes mammografi</b> adalah tes yang
              biasa dilakukan untuk mendiagnosis kanker payudara, khususnya pada
              stadium awal. Meski umumnya tes ini bisa mendeteksi benjolan pada
              payudara ganas atau tidak, namun tetap bisa terjadi kesalahan 10
              hingga 15 persen, karena mammografi bukan merupakan tes untuk
              memastikan kanker payudara. Tes lain yang umum dijalankan untuk
              kanker payudara adalah USG mammae. Pada tes ini, gelombang suara
              akan menghasilkan gambaran di dalam payudara, sehingga diketahui
              apakah benjolan yang muncul berupa struktur padat atau kista yang
              berisi cairan. Jika diperlukan, tes MRI bisa dilakukan untuk
              memberi gambaran yang lebih jelas daripada hasil yang didapatkan
              dari tes mammografi atau USG. Untuk mengetahui secara pasti apakah
              pasien menderita kanker payudara, dokter akan melakukan biopsi
              yaitu, yaitu dengan memeriksa sampel jaringan di laboratorium.
              Sampel akan diteliti untuk mengetahui jenis sel yang menyebabkan
              benjolan atau kanker, tingkat agresifitas kanker, dan apakah sel
              tersebut mengandung reseptor hormon atau protein (<i>ER</i>,{" "}
              <i>PR</i>, dan <i>HER2</i>).
            </p>
          </Card>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-right-hide ${diagnosa && "bottom-right-bottom"}`}
      >
        <img src={Icon4} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 5 */}
      <div style={{}} className={`center fade ${tingkatan && "down"}`}>
        <div style={{ overflowY: "scroll" }} className="tingkatan-height">
          <Card
            title="Ini dia tingkatan kanker payudara"
            style={{
              textAlign: "justify",
              color: "#ff1493",
            }}
            className="pencegahan-title font-title"
          >
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 0 </b> <br /> Kanker tidak
              berkembang lebih jauh dari tempat tumbuhnya di duktus atau
              lobulus, dan belum menyebar ke jaringan di sekitarnya. Kondisi ini
              disebut in situ.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 1A </b> <br /> Tumor
              berukuran hingga 20 mm dan belum menyebar ke kelenjar getah bening
              di ketiak.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 1B</b> <br /> Tumor Kanker
              sudah menyebar ke kelenjar getah bening di ketiak, dengan ukuran
              lebih besar dari 0,2 mm namun kurang dari 2 mm. Sedangkan pada
              payudara terdapat tumor dengan ukuran tidak lebih dari 20 mm atau
              bisa tidak nampak tumor.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 2A</b> <br /> Kanker sudah
              menyebar ke kelenjar getah bening di ketiak dengan ukuran 2 mm
              atau lebih, dengan tumor di payudara tidak lebih dari 20 mm atau
              tidak tampak tumor di payudara. Ukuran tumor lebih besar dari 20
              mm, namun tidak lebih besar dari 50 mm, tetapi belum menyebar ke
              kelenjar getah bening di ketiak.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 2B</b> <br />
              Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari
              50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di
              ketiak. Ukuran tumor lebih besar dari 50 mm, namun tidak menyebar
              ke kelenjar getah bening.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 3A</b> <br /> Kanker sudah
              menyebar ke 4 hingga 9 kelenjar getah bening di ketiak atau
              kelenjar getah bening di dalam payudara, dengan ukuran tumor di
              payudara hingga 50 mm. Bisa juga tidak ada tumor di payudara.
              Ukuran tumor lebih besar dari 50 mm, dan sudah menyebar ke 1
              hingga 3 kelenjar getah bening di ketiak.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 3B</b> <br /> Tumor sudah
              menyebar ke kulit dinding payudara.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 3C</b> <br /> Ukuran tumor
              bisa bervariasi, dan telah menyebar hingga ke 10 kelenjar getah
              bening atau lebih di ketiak, atau sudah menyebar ke kelenjar getah
              bening di dalam payudara dan leher.
            </p>
            <br />
            <p style={{ color: "#000" }} className="line-height">
              <b style={{ color: "#ff1493" }}>Stadium 4</b> <br /> Pada stadium
              ini, ukuran tumor bisa bervariasi, dan telah menyebar jauh ke
              organ lain, seperti tulang, paru-paru, hati, atau otak.
            </p>
          </Card>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-left-hide ${tingkatan && "bottom-left-bottom"}`}
      >
        <img src={Icon5} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 6 */}
      <div style={{}} className={`center fade ${tipe && "down"}`}>
        <div style={{}}>
          <Card
            title="Yuk kenali juga tipe-tipe kanker payudara"
            style={{
              color: "#ff1493",
            }}
            className="font-title tipe-title"
          ></Card>
        </div>
      </div>
      <div className={`fade-center ${tipe && "fade-center-aktif"}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{}} className="tipe-desc-column">
            <div style={{}}>
              <Card
                title="Ductal carcinoma in situ"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  margin: "5px",
                  color: "#ff1493",
                  textAlign: "justify",
                }}
                className="tipe-desc font-title tipe-padding"
              >
                <p
                  style={{ color: "#000", lineHeight: "150%" }}
                  // className="font-desc"
                >
                  Jenis kanker ini termasuk kanker stadium awal dan mudah
                  diobati. Namun demikian, kanker ini bisa menyebar ke jaringan
                  sekitarnya jika tidak segera ditangani.
                </p>
              </Card>
            </div>
            <div style={{}}>
              <Card
                title="Lobular carcinoma in situ"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  margin: "5px",
                  color: "#ff1493",
                  textAlign: "justify",
                }}
                className="tipe-desc font-title tipe-padding"
              >
                <p
                  style={{ color: "#000", lineHeight: "150%" }}
                  // className="font-desc"
                >
                  Adalah kanker yang tumbuh di lobulus. Sama seperti ductal
                  carcinoma in situ, kanker ini tidak menyebar ke jaringan
                  sekitarnya.
                </p>
              </Card>
            </div>
          </div>
          <div style={{}} className="tipe-desc-column">
            <div>
              <Card
                title="Invasive ductal carcinoma"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  margin: "5px",
                  color: "#ff1493",
                  textAlign: "justify",
                }}
                className="tipe-desc font-title tipe-padding"
              >
                <p
                  style={{ color: "#000", lineHeight: "150%" }}
                  // className="font-desc"
                >
                  Kanker ini tumbuh di duktus dan bisa menyebar ke jaringan
                  sekitarnya, bahkan bisa menyebar ke area tubuh yang lain.
                  Jenis kanker ini terjadi pada 70-80% kasus kanker payudara.
                </p>
              </Card>
            </div>
            <div>
              <Card
                title="Invasive lobular carcinoma"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  margin: "5px",
                  color: "#ff1493",
                  textAlign: "justify",
                }}
                className="tipe-desc font-title tipe-padding"
              >
                <p
                  style={{ color: "#000", lineHeight: "150%" }}
                  // className="font-desc"
                >
                  Adalah kanker yang tumbuh di lobulus dan bisa menyebar ke
                  jaringan sekitarnya. Kanker ini terjadi pada 10% kasus kanker
                  payudara.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-left-hide ${tipe && "bottom-left-bottom"}`}
      >
        <img src={Icon6} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 7 */}
      <div style={{}} className={`center fade ${mitos && "down"}`}>
        <div style={{}}>
          <Card
            title="Hati-hati dengan mitos kanker payudara!"
            style={{
              color: "#ff1493",
            }}
            className="mitos-title font-title"
          ></Card>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom1 ${mitos && "to-top1"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Kanker payudara itu menyakitkan?</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom3 ${mitos && "to-top3"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.9)",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Hanya wanita saja yang dapat terkena kanker payudara</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom4 ${mitos && "to-top4"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Memakai Bra Terus-Menerus Bisa Menyebabkan Kanker Payudara</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom5 ${mitos && "to-top5"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>
              Pengobatan untuk kanker payudara adalah dengan mengambil seluruh
              bagian payudara
            </b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom6 ${mitos && "to-top6"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.9)",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Menderita kanker payudara berarti “vonis mati”</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom7 ${mitos && "to-top7"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>
              Kanker payudara dapat terjadi jika terlalu sering melakukan
              mammogram
            </b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom8 ${mitos && "to-top8"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "#fff",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.9)",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Kanker payudara disebabkan oleh keturunan dari keluarga</b>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={`from-bottom2 ${mitos && "to-top2"}`}
      >
        <div
          style={{
            // color: "#ff1493",
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: "10px",
            textAlign: "center",
            width: "350px",
          }}
          className="mitos-padding"
        >
          <p>
            <b>Kanker payudara selalu berupa benjolan</b>
          </p>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-left-hide ${mitos && "bottom-left-bottom"}`}
      >
        <img src={Icon7} width="400px" style={{ opacity: 1 }} />
      </div>

      {/* Slide 8 */}
      <div style={{}} className={`center fade ${faqs && "down"}`}>
        <div style={{}}>
          <Card
            title="Pertanyaan seputar kanker payudara"
            style={{
              color: "#ff1493",
            }}
            className="faq-title font-title"
          ></Card>
        </div>
      </div>
      <div className={`fade-center ${faqs && "fade-center-aktif-faqs"}`}>
        <div style={{ flex: 1, padding: "50px" }}>
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                margin: "10px 0px",
              }}
            >
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>Apa saja faktor resikonya?</h3>
                Usia. Mayoritas kasus kanker payudara terjadi pada perempuan di
                atas 50 tahun. Tetapi ada juga pada usia 40-49 tahun dan bahkan
                usia 18 tahun. Lalu faktor genetik, yakni memiliki anggota
                keluarga yang mengalami kanker payudara. Selain itu, memakai
                kontrasepsi oral dalam jangka waktu lama, menstruasi pertama di
                bawah usia 12 tahun dan riwayat tumor jinak--lebih berisiko
                mengalami kanker payudara. Faktor lainnya, melahirkan anak
                pertama di atas usia 35 tahun, mengalami menopause di atas usia
                52 tahun, pola hidup tak sehat yang menyebabkan kelebihan berat
                badan, jarang berolahraga, merokok.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Mengapa berat badan berlebih beresiko kena kanker payudara?
                </h3>
                Jaringan lemak meningkatkan produksi estrogen. Estrogen yang
                berlebihan sering dikaitakn dengan pemicu kanker payudara.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Menyusui bisa turunkan resiko?
                </h3>
                Menyusui minimal empat bulan membuat sel payudara matang. Selain
                itu, hormon prolaktin bisa menekan estrogen (sehingga tidak
                berlebihan). Estrogen yang berlebihan sering dikaitan dengan
                pemicu kanker payudara. Ibu-ibu muda yang belum berpengalaman,
                yang ambang nyerinya rendah, sakit sedikit tidak mau menyusui,
                lama-lama ASI nya berkurang.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Ukuran payudara berpengaruh pada risiko terkena kanker?
                </h3>
                Ukuran yang besar lebih tinggi risikonya, karena jaringan (di
                payudaranya) lebih banyak.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Kondisi payudara yang perlu dicermati?
                </h3>
                Ada benjolan keras pada payudara atau daerah sekitar ketiak.
                Biasanya kondisi ini tidak menimbulkan rasa sakit. Kondisi
                lainnya, ada perubahan ukuran atau bentuk payudara, seperti
                pembengkakan dan munculnya lekukan pada kulit payudara. Selain
                itu, ada perubahan pada permukaan payudara, seperti kulit yang
                mengeras, kulit mengelupas, berwarna kemerahan atau seperti
                kulit jeruk. Terakhir, ada perubahan pada puting, misalnya
                puting tertarik ke dalam atau keluar cairan dari puting.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Perlu biopsi untuk deteksi kanker?
                </h3>
                Biopsi dilakukan kalau ada kecurigaan ke arah keganasan. Dulu,
                biopsi dilakukan di kamar operasi dengan pembiusan umum, diambil
                sampel. Sekarang, biopsi bisa dilakukan di poliklinik, namanya
                core biopsy. Pasien tidak perlu dipuasakan.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Yang bisa dilakukan untuk cegah kena kanker?
                </h3>
                Aktif berolahraga, dewasa minimal 75-150 menit dalam seminggu,
                sementara anak-anak 3 kali seminggu. Pilih olahraga yang
                intensitasnya sedang hingga tinggi. Kurangi konsumsi daging
                merah dan daging olahan, perbanyak konsumsi sayur dan buah.
                Pilih, makanan yang tergolong while grain atau produk makanan
                yang menggunakan biji-bijian serelia utuh seperti gandum, jagung
                dan quinoa. Selain itu, hindari konsumsi alkohol.
              </p>
            </div>
            <div style={{ display: "flex", margin: "10px 0px" }}>
              <p className="line-height">
                <h3 style={{ color: "#ff1493" }}>
                  Bila terdeteksi kanker, payudara pasti diangkat? Lalu apa
                  pilihan terapinya?
                </h3>
                Ada beberapa pilihan terapi, salah satunya pembedahan. Dulu,
                dilakukan pengangkatan payudara yang terkena kanker. Sekarang,
                bisa mempertahankan payudara. Bahkan setelah diangkat pun bisa
                dibuat payudara baru (breast conserving surgery). Selain itu ada
                kemoterapi, yakni pemberian obat untuk memperkecil ukuran sel
                tumor. Efeknya, bisa bekerja ke semua sel, tidak hanya sel
                ganas. Bisa ke folikel rambut, mukosa mulut, makanya rambut
                pasien rontok, atau pasien sering sariawan. Terapi lainnya
                adalah radioterapi atau pemberian sinar berkekuatan tinggi
                seperti sinar x dan sinar gama untuk menghancurkan sel kanker.
                Terapi ini biasanya dilakukan setelah pembedahan untuk
                membersihkan sisa-sisa sel kanker atau sebelum pembedahan
                disertai kemoterapi, untuk memperkecil ukuran sel kanker.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{}}
        className={`bottom-left-hide ${faqs && "bottom-left-bottom"}`}
      >
        <img src={Icon8} width="400px" style={{ opacity: 1 }} />
      </div>
    </div>
  );
}
