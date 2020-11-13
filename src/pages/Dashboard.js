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
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <h1>Welcome to Peka.ai</h1>
        </div>
        <Parallax ref={(ref) => (this.parallax = ref)} pages={6}>
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
              backgroundImage: "linear-gradient(#059142, #0c71e0)",
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
            }}
          >
            <h1
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "50px",
                borderRadius: "20px",
              }}
            >
              Yuk, Peka sedari dini akan pentingnya pengetahuan tentang kanker.
            </h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url("stars", true),
              // backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
            }}
          />

          {/* Slide ke 1 */}
          <ParallaxLayer
            offset={1}
            speed={1}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
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
              Breast Cancer
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} style={{ opacity: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "100px",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "30%",
                }}
              >
                Kanker payudara adalah kondisi ketika sel kanker terbentuk di
                jaringan payudara. Kanker bisa terbentuk di kelenjar yang
                menghasilkan susu (lobulus), atau di saluran (duktus) yang
                membawa air susu dari kelenjar ke puting payudara. Kanker juga
                bisa terbentuk di jaringan lemak atau jaringan ikat di dalam
                payudara.
              </p>
              <p
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "30%",
                }}
              >
                Kanker payudara terbentuk saat sel-sel di dalam payudara tumbuh
                tidak normal dan tidak terkendali. Sel tersebut umumnya
                membentuk tumor yang terasa seperti benjolan. Meski biasanya
                terjadi pada wanita, kanker payudara juga bisa menyerang pria.
              </p>
              <p
                style={{
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  width: "30%",

                  textAlign: "center",
                }}
              >
                Pada stadium yang lebih parah, sel-sel abnormal ini dapat
                menyebar melalui kelenjar getah bening ke organ tubuh lainnya.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              marginTop: "20%",
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
              Jenis Breast Cancer
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2} style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "25%",
              }}
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
              Facts Breast Cancer
            </h1>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={-0.3}
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
                Kanker payudara adalah kanker yang paling umum di kalangan
                wanita.
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Banyak benjolan payudara yang tidak bersifat kanker, tetapi
                wanita mana pun yang menemukan benjolan atau perubahan pada
                payudara harus mengunjungi dokter.
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
                Gejalanya meliputi benjolan atau penebalan payudara, dan
                perubahan pada kulit atau puting.
              </h2>
              <h2
                style={{
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  margin: "20px 0px",
                }}
              >
                Faktor risiko dapat bersifat genetik, tetapi beberapa faktor
                gaya hidup, seperti asupan alkohol, membuatnya lebih mungkin
                terjadi.
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
              pointerEvents: "none",
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
                marginLeft: "3%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Menjaga berat badan tetap ideal</h2>
              <p>
                Berat badan erat kaitannya dengan risiko kanker payudara. Wanita
                yang mengalami obesitas setelah masa menopause memiliki risiko
                terkena kanker payudara 20 - 40 persen lebih tinggi dibanding
                dengan yang mempunyai berat badan Perubahan berat badan dan
                waktu terjadinya kenaikan berat badan ini diduga berkaitan
                dengan keadaan hormon estrogen dan insulin di dalam tubuh.
                Melihat risiko ini, menjaga berat badan tetap ideal adalah salah
                satu cara mencegah kanker payudara yang dapat Anda lakukan.
              </p>
            </div>
            <img style={{ marginLeft: "5%", zIndex: 0 }} src={BeratBadan} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} style={{}}>
            <div
              style={{
                marginLeft: "35%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Mengatur pola makan</h2>
              <p>
                Utamakan makanan Pola makan sehat dengan mengutamakan asupan
                buah, sayuran, kacang-kacangan termasuk kacang kedelai, minyak
                sehat, dan antioksidan yang tinggi, dapat membantu mengurangi
                risiko kanker payudara. Wanita yang sudah terkena kanker
                payudara pun hidupnya dapat lebih berkualitas, jika menghindari
                makanan berlemak. Daging berlemak, sosis, krim, margarin,
                mentega, dan minyak adalah berbagai jenis makanan yang harus
                dihindari sebagai usaha pencegahan kanker payudara.
              </p>
            </div>
            <img style={{ marginLeft: "40%", zIndex: 0 }} src={Makan} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1} style={{}}>
            <div
              style={{
                marginLeft: "70%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Olahraga</h2>
              <p>
                Luangkan waktu untuk kktif secara fisik dapat menurunkan risiko
                kanker payudara. Sebaliknya, risiko kanker payudara meningkat
                pada wanita yang sudah bertahun-tahun tidak pernah mengolah
                fisiknya lagi. Standar untuk melakukan olahraga intensitas
                sedang (seperti bersepeda dan jalan cepat) adalah selama 2 jam
                30 menit per minggu.
              </p>
            </div>
            <img
              style={{ marginLeft: "70%", zIndex: 0, marginTop: "50px" }}
              src={Olahraga}
            />
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
              Stadium Kanker
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.1} style={{}}>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 0</h2>
              <p>
                Kanker tidak berkembang lebih jauh dari tempat tumbuhnya di
                duktus atau lobulus, dan belum menyebar ke jaringan di
                sekitarnya. Kondisi ini disebut in situ.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.2} style={{}}>
            <div
              style={{
                marginLeft: "35%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 1a</h2>
              <p>
                Tumor berukuran hingga 20 mm dan belum menyebar ke kelenjar
                getah bening di ketiak.
              </p>
            </div>
            <div
              style={{
                marginLeft: "35%",
                marginTop: "1%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 1b</h2>
              <p>
                Kanker sudah menyebar ke kelenjar getah bening di ketiak, dengan
                ukuran lebih besar dari 0,2 mm namun kurang dari 2 mm. Sedangkan
                pada payudara terdapat tumor dengan ukuran tidak lebih dari 20
                mm atau bisa tidak nampak tumor.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.3} style={{}}>
            <div
              style={{
                marginLeft: "70%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 2a</h2>
              <p>
                Kanker sudah menyebar ke kelenjar getah bening di ketiak dengan
                ukuran 2 mm atau lebih, dengan tumor di payudara tidak lebih
                dari 20 mm atau tidak tampak tumor di payudara. Ukuran tumor
                lebih besar dari 20 mm, namun tidak lebih besar dari 50 mm,
                tetapi belum menyebar ke kelenjar getah bening di ketiak.
              </p>
            </div>
            <div
              style={{
                marginLeft: "70%",
                marginTop: "1%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 2a</h2>
              <p>
                Ukuran tumor lebih besar dari 20 mm, namun tidak lebih besar
                dari 50 mm, dan sudah menyebar ke 1 hingga 3 kelenjar getah
                bening di ketiak. Ukuran tumor lebih besar dari 50 mm, namun
                tidak menyebar ke kelenjar getah bening.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.4} style={{}}>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "21%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 3a</h2>
              <p>
                Kanker sudah menyebar ke 4 hingga 9 kelenjar getah bening di
                ketiak atau kelenjar getah bening di dalam payudara, dengan
                ukuran tumor di payudara hingga 50 mm. Bisa juga tidak ada tumor
                di payudara. Ukuran tumor lebih besar dari 50 mm, dan sudah
                menyebar ke 1 hingga 3 kelenjar getah bening di ketiak.
              </p>
            </div>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "1%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 3b</h2>
              <p>Tumor sudah menyebar ke kulit dinding payudara.</p>
            </div>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "1%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 3c</h2>
              <p>
                Ukuran tumor bisa bervariasi, dan telah menyebar hingga ke 10
                kelenjar getah bening atau lebih di ketiak, atau sudah menyebar
                ke kelenjar getah bening di dalam payudara dan leher.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.6} style={{}}>
            <div
              style={{
                marginLeft: "35%",
                marginTop: "30%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Stadium 4</h2>
              <p>
                Pada stadium ini, ukuran tumor bisa bervariasi, dan telah
                menyebar jauh ke organ lain, seperti tulang, paru-paru, hati,
                atau otak.
              </p>
            </div>
          </ParallaxLayer>

          {/* Slide ke 4 */}
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
              Pengobatan
            </h1>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.1} style={{}}>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}> Bedah Lumpektomi</h2>
              <p>
                Bedah lumpektomi dilakukan untuk mengangkat tumor yang tidak
                terlalu besar beserta sebagian kecil jaringan sehat di
                sekitarnya. Prosedur ini umumnya diikuti radioterapi untuk
                mematikan sel kanker yang mungkin tertinggal di jaringan
                payudara. Pasien dengan tumor yang besar bisa menjalani
                kemoterapi terlebih dahulu untuk menyusutkan ukuran tumor,
                sehingga tumor bisa dihilangkan dengan lumpektomi.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.2} style={{}}>
            <div
              style={{
                marginLeft: "35%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}> Bedah Mastektomi</h2>
              <p>
                Pilihan prosedur bedah yang lain adalah mastektomi, yaitu bedah
                yang dilakukan oleh dokter bedah onkologi untuk mengangkat
                seluruh jaringan di payudara. Mastektomi dilakukan jika pasien
                tidak bisa ditangani dengan lumpektomi. Ada beberapa tipe bedah
                mastektomi, yaitu:
              </p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginLeft: "35%",
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                  marginRight: "2%",
                }}
              >
                <h4 style={{}}>Simple/total mastectomy </h4>
                <p>
                  Dokter mengangkat seluruh payudara, termasuk putting, areola,
                  dan kulit yang menutupi Pada beberapa kondisi, beberapa
                  kelenjar getah bening bisa ikut diangkat.
                </p>
              </div>
              <div
                style={{
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                }}
              >
                <h4 style={{}}>Skin-sparing mastectomy </h4>
                <p>
                  Dokter hanya mengangkat kelenjar payudara, putting, dan
                  areola. Jaringan dari bagian tubuh lain akan digunakan untuk
                  merekonstruksi ulang payudara.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginLeft: "35%",
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                  marginRight: "2%",
                }}
              >
                <h4 style={{}}>Nipple-sparing mastectomy </h4>
                <p>
                  Jaringan payudara diangkat, tanpa menyertakan kulit payudara
                  dan puting. Namun jika ditemukan kanker pada jaringan di bawah
                  puting dan areola, maka puting payudara juga akan diangkat.
                </p>
              </div>
              <div
                style={{
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                }}
              >
                <h4 style={{}}>Modified radical mastectomy </h4>
                <p>
                  Prosedur ini mengombinasikan simple mastectomy dan
                  pengangkatan seluruh kelenjar getah bening di ketiak.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginLeft: "35%",
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                  marginRight: "2%",
                }}
              >
                <h4 style={{}}>Radical mastectomy</h4>
                <p>
                  Dokter mengangkat seluruh payudara, kelenjar getah bening di
                  ketiak, dan otot dada (pectoral).
                </p>
              </div>
              <div
                style={{
                  marginTop: "1%",
                  width: "14%",
                  padding: "20px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255,255,255,1)",
                  zIndex: 2,
                }}
              >
                <h4 style={{}}>Double mastectomy </h4>
                <p>
                  Prosedur ini dilakukan sebagai pencegahan pada wanita yang
                  berisiko tinggi terserang kanker payudara dengan mengangkat
                  kedua payudara.
                </p>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.3} style={{}}>
            <div
              style={{
                marginLeft: "70%",
                marginTop: "10%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Bedah Pengangkatan Kelenjar Getah Bening</h2>
              <p>
                Dokter akan melakukan pemeriksaan untuk mengetahui apakah kanker
                sudah tersebar ke kelenjar getah bening di ketiak. Pemeriksaan
                ini juga untuk menentukan stadium kanker yang dialami pasien.
                Pengangkatan kelenjar getah bening dapat dilakukan bersamaan
                dengan operasi pengangkatan tumor di payudara, atau dilakukan
                secara terpisah.
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.4} style={{}}>
            <div
              style={{
                marginLeft: "3%",
                marginTop: "30%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Radioterapi</h2>
              <p>
                Pilihan pengobatan lain bagi pasien kanker payudara adalah
                radioterapi atau terapi radiasi dengan menggunakan sinar
                berkekuatan tinggi, seperti sinar-X dan proton. Radioterapi bisa
                dilakukan dengan menembakkan sinar ke tubuh pasien menggunakan
                mesin (radioterapi eksternal), atau dengan menempatkan material
                radioaktif ke dalam tubuh pasien
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.6} style={{}}>
            <div
              style={{
                marginLeft: "70%",
                marginTop: "30%",
                width: "30%",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,1)",
                zIndex: 2,
              }}
            >
              <h2 style={{}}>Terapi Hormon</h2>
              <p>
                Pada kasus kanker yang dipengaruhi hormon estrogen dan
                progesteron, dokter bisa menyarankan pasien menggunakan
                penghambat estrogen, seperti tamoxifen. Obat ini bisa diberikan
                pada pasien selama 5 tahun. Sedangkan obat penghambat aromatase,
                seperti anastrozole, letrozole, dan exemestane, diresepkan
                dokter untuk menghambat produksi hormon estrogen pada wanita
                yang telah melewati masa menopause.
              </p>
            </div>
          </ParallaxLayer>
        </Parallax>
        <div
          className="float button2"
          style={{ color: "#000", padding: "20px" }}
        >
          Cek kanker
        </div>
      </div>
    );
  }
}
