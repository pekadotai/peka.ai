import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./Dashboard.css";
import Bronkus from "../assets/icons/bronkus.png";
import Ginjal from "../assets/icons/ginjal.png";
import Lambung from "../assets/icons/lambung.png";
import Leher from "../assets/icons/leher.png";
import Mata from "../assets/icons/mata.png";
import Otak from "../assets/icons/otak.png";
import Rusuk from "../assets/icons/rusuk.png";
import Telinga from "../assets/icons/telinga.png";
import UsusBesar from "../assets/icons/ususbesar.png";
import UsusKecil from "../assets/icons/ususkecil.png";
import Wanita from "../assets/icons/wanita.png";
import BeratBadan from "../assets/icons/beratbadan.png";
import Makan from "../assets/icons/makan.png";
import Olahraga from "../assets/icons/olahraga.png";
import { Chrono } from "react-chrono";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SwipeableViews from "react-swipeable-views";
import Carousel from "nuka-carousel";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

export default class Dashboard extends React.Component {
  componentDidUpdate() {
    console.log("scroll ", window.pageXOffset);
  }

  render() {
    const items = [
      {
        title: "Stadium 0",
        cardTitle: "Stadium 0",
        cardDetailedText:
          "Kanker tidak berkembang lebih jauh dari tempat tumbuhnya di duktus atau lobulus, dan belum menyebar ke jaringan di sekitarnya. Kondisi ini disebut in situ.",
      },
      {
        title: "Stadium 1",
        cardTitle: "Stadium 1A",
        cardDetailedText:
          "Tumor berukuran hingga 20 mm dan belum menyebar ke kelenjar getah bening di ketiak.",
      },
      {
        title: "Stadium 1",
        cardTitle: "Stadium 1B",
        cardDetailedText:
          "Kanker sudah menyebar ke kelenjar getah bening di ketiak, dengan ukuran lebih besar dari 0,2 mm namun kurang dari 2 mm. Sedangkan pada payudara terdapat tumor dengan ukuran tidak lebih dari 20 mm atau bisa tidak nampak tumor.",
      },
      {
        title: "Stadium 2",
        cardTitle: "Stadium 2A",
        cardDetailedText:
          "Kanker sudah menyebar ke kelenjar getah bening di ketiak dengan ukuran 2 mm atau lebih, dengan tumor di payudara tidak lebih dari 20 mm atau tidak tampak tumor di payudara. Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, tetapi belum menyebar ke kelenjar getah bening di ketiak.",
      },
      {
        title: "Stadium 2",
        cardTitle: "Stadium 2B",
        cardDetailedText:
          " Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak. Ukuran tumor lebih besar dari 50 mm, namun tidak menyebar ke kelenjar getah bening.",
      },
      {
        title: "Stadium 3",
        cardTitle: "Stadium 3A",
        cardDetailedText:
          "Kanker sudah menyebar ke 4 hingga 9 kelenjar getah bening di ketiak atau kelenjar getah bening di dalam payudara, dengan ukuran tumor di payudara hingga 50 mm. Bisa juga tidak ada tumor di payudara. Ukuran tumor lebih besar dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah bening di ketiak.",
      },
      {
        title: "Stadium 3",
        cardTitle: "Stadium 3B",
        cardDetailedText: "Tumor sudah menyebar ke kulit dinding payudara.",
      },
      {
        title: "Stadium 3",
        cardTitle: "Stadium 3C",
        cardDetailedText:
          "Ukuran tumor bisa bervariasi, dan telah menyebar hingga ke 10 kelenjar getah bening atau lebih di ketiak, atau sudah menyebar ke kelenjar getah bening di dalam payudara dan leher.",
      },
      {
        title: "Stadium 4",
        cardTitle: "Stadium 4",
        cardDetailedText:
          "Pada stadium ini, ukuran tumor bisa bervariasi, dan telah menyebar jauh ke organ lain, seperti tulang, paru-paru, hati, atau otak.",
      },
    ];
    const settings = {
      dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
    };
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // padding: "20px",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <h1>Welcome to Peka.ai</h1>
        </div>
        <Parallax ref={(ref) => (this.parallax = ref)} pages={7}>
          <ParallaxLayer
            offset={0}
            speed={0}
            style={{
              backgroundImage: "linear-gradient(#FFB6C1, #ff1493)",
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#ff1493, #effd5f)",
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#effd5f, #fffdd0)",
            }}
          />

          <ParallaxLayer
            offset={3}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#fffdd0, #20cb9d)",
            }}
          />

          <ParallaxLayer
            offset={4}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#20cb9d, #059142)",
            }}
          />

          <ParallaxLayer
            offset={5}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#059142, #FFB6C1)",
            }}
          />

          <ParallaxLayer
            offset={6}
            speed={0}
            style={{
              backgroundColor: "#ff1493",
              backgroundImage: "linear-gradient(#FFB6C1, #ff1493)",
            }}
          />

          {/* Slide ke 0 */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "20px",
                borderRadius: "20px",
                width: "60%",
                textAlign: "center",
              }}
            >
              Peka.ai
            </h1>
            <h3
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "20px",
                borderRadius: "20px",
                width: "50%",
              }}
            >
              Peka.ai adalah sebuah web interaktif yang dapat membantu kamu
              dalam mengetahui informasi tentang kanker payudara mulai dari
              penyebab, gejala, diagnosa, hinggu mitos seputar kanker payudara.
            </h3>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              backgroundSize: "cover",
            }}
          />

          {/* Slide ke 1 */}
          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                backgroundColor: "rgba(0,0,0,1)",
                padding: "10px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Seputar Kanker Payudara
            </h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h4
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                className="desc-seputar-kanker"
              >
                Kanker payudara adalah kondisi ketika sel kanker terbentuk di
                jaringan payudara. Kanker bisa terbentuk di kelenjar yang
                menghasilkan susu (lobulus), atau di saluran (duktus) yang
                membawa air susu dari kelenjar ke puting payudara. Kanker juga
                bisa terbentuk di jaringan lemak atau jaringan ikat di dalam
                payudara.
              </h4>
              <h4
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                className="desc-seputar-kanker"
              >
                Kanker payudara terbentuk saat sel-sel di dalam payudara tumbuh
                tidak normal dan tidak terkendali. Sel tersebut umumnya
                membentuk tumor yang terasa seperti benjolan. Meski biasanya
                terjadi pada wanita, kanker payudara juga bisa menyerang pria.
              </h4>
              <h4
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                className="desc-seputar-kanker"
              >
                Pada stadium yang lebih parah, sel-sel abnormal ini dapat
                menyebar melalui kelenjar getah bening ke organ tubuh lainnya.
              </h4>
            </div>
          </ParallaxLayer>

          {/* Slide ke 2 */}
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                marginTop: "5%",
                backgroundColor: "rgba(0,0,0,1)",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Yuk kenali gelaja-gejala kanker payudara
            </h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              zIndex: 99,
            }}
          >
            <div
              style={{
                width: "30%",
              }}
            >
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Adanya benjolan di payudara atau penebalan jaringan yang terasa
                berbeda dari jaringan di sekitarnya
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Perubahan pada bentuk dan ukuran payudara
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Benjolan atau pembengkakan di bawah ketiak
              </h2>
            </div>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                width: "30%",
              }}
            >
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Pengelupasan kulit areola dan kulit payudara
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Nyeri dan pembengkakan pada payudara
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Darah ke luar dari puting payudara
              </h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.2}
            speed={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              zIndex: 0,
            }}
          >
            <img src={Wanita} style={{ width: "60%" }} />
          </ParallaxLayer>

          {/*Slide ke 3 */}
          <ParallaxLayer
            offset={3}
            speed={0}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                marginTop: "50px",
                backgroundColor: "rgba(0,0,0,1)",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Mencegah lebih baik dari mengobati
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.1} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
              }}
              className="desc-mencegah"
            >
              <h2 style={{}}>
                Rutin melakukan pemeriksaan payudara sendiri (SADARI)
              </h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.7} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
              }}
              className="desc-mencegah2"
            >
              <h2 style={{}}>
                Rutin melakukan pemeriksaan payudara klinis (SADANIS)
              </h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.3} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
              className="desc-mencegah3"
            >
              <h2 style={{}}>Olahraga rutin</h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
              className="desc-mencegah4"
            >
              <h2 style={{}}>
                Berhati-hati dalam melakukan terapi pengganti hormon pasca
                menopause.
              </h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.2} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
              className="desc-mencegah5"
            >
              <h2 style={{}}>Pertahankan berat badan ideal.</h2>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.4} style={{}}>
            <div
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
              className="desc-mencegah6"
            >
              <h2 style={{}}>Hentikan konsumsi alkohol.</h2>
            </div>
          </ParallaxLayer>

          {/* Slide ke 4 */}
          <ParallaxLayer
            offset={4}
            speed={0}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                marginTop: "50px",
                backgroundColor: "rgba(0,0,0,1)",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Kanker payudara ada tingkatannya loh
            </h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <Chrono items={items} />
            </div>
          </ParallaxLayer>

          {/* Slide ke 5 */}
          <ParallaxLayer
            offset={5}
            speed={0}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                marginTop: "50px",
                backgroundColor: "rgba(0,0,0,1)",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Terus, ada tipe-tipenya juga!
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={2} style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
              className="desc-jenis-kanker"
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "20%",
                }}
              >
                <h4>Ductal carcinoma in situ</h4>
                <p>
                  Kanker ini tumbuh di duktus, dan tidak menyebar ke jaringan
                  sekitarnya. Jenis kanker ini termasuk kanker stadium awal dan
                  mudah diobati. Namun demikian, kanker ini bisa menyebar ke
                  jaringan sekitarnya jika tidak segera ditangani.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "20%",
                }}
              >
                <h4>Lobular carcinoma in situ</h4>
                <p>
                  Adalah kanker yang tumbuh di lobulus. Sama seperti ductal
                  carcinoma in situ, kanker ini tidak menyebar ke jaringan
                  sekitarnya.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "20%",
                }}
              >
                <h4>Invasive ductal carcinoma</h4>
                <p>
                  Kanker ini tumbuh di duktus dan bisa menyebar ke jaringan
                  sekitarnya, bahkan bisa menyebar ke area tubuh yang lain.
                  Jenis kanker ini terjadi pada 70-80% kasus kanker payudara.
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "20%",
                }}
              >
                <h4>Invasive lobular carcinoma</h4>
                <p>
                  Adalah kanker yang tumbuh di lobulus dan bisa menyebar ke
                  jaringan sekitarnya. Kanker ini terjadi pada 10% kasus kanker
                  payudara.
                </p>
              </div>
            </div>
          </ParallaxLayer>

          {/* Slide ke 6 */}
          <ParallaxLayer
            offset={6}
            speed={0}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                marginTop: "50px",
                backgroundColor: "rgba(0,0,0,1)",
                padding: "20px",
                borderRadius: "20px",
                color: "#fff",
              }}
            >
              Awas, ada mitos tentang kanker payudara!
            </h1>
          </ParallaxLayer>

          <ParallaxLayer offset={6} speed={2} style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
              className="desc-jenis-kanker"
            >
              <div style={{}}>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    // width: "20%",
                  }}
                >
                  <h4>Kanker payudara itu menyakitkan</h4>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                  }}
                >
                  <h4>Hanya wanita saja yang dapat terkena kanker payudara</h4>
                </div>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                    marginBottom: "20px",
                  }}
                >
                  <h4>Kanker payudara selalu berupa benjolan</h4>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                    marginBottom: "20px",
                  }}
                >
                  <h4>
                    Pengobatan untuk kanker payudara adalah dengan mengambil
                    seluruh bagian payudara
                  </h4>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                    marginBottom: "20px",
                  }}
                >
                  <h4>Menderita kanker payudara berarti “vonis mati”</h4>
                </div>
              </div>
              <div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                    marginBottom: "20px",
                  }}
                >
                  <h4>
                    Kanker payudara dapat terjadi jika terlalu sering melakukan
                    mammogram
                  </h4>
                </div>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                    padding: "20px",
                    borderRadius: "20px",
                    // width: "20%",
                  }}
                >
                  <h4>
                    Kanker payudara disebabkan oleh keturunan dari keluarga
                  </h4>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
        <div
          className="float button2"
          style={{
            color: "#000",
            padding: "20px",

            width: "200px",
          }}
        >
          Yuk klik disini buat cobain pendeteksi kanker Peka!
        </div>
      </div>
    );
  }
}
