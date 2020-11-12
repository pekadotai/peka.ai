import React from "react";
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
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={4}>
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
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            // backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none", opacity: 0.5 }}
        >
          <img src={Bronkus} style={{ width: "15%", marginLeft: "10%" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={Ginjal}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={Lambung}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={Leher}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={Mata}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={Otak}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={Rusuk}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={Telinga}
            style={{ display: "block", width: "20%", marginLeft: "50%" }}
          />
          <img
            src={UsusBesar}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={UsusKecil}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={Bronkus}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={Wanita} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
              Kanker payudara adalah kanker yang paling umum di kalangan wanita.
            </h2>
            <h2
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.5)",
                margin: "20px 0px",
              }}
            >
              Banyak benjolan payudara yang tidak bersifat kanker, tetapi wanita
              mana pun yang menemukan benjolan atau perubahan pada payudara
              harus mengunjungi dokter.
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
              Gejalanya meliputi benjolan atau penebalan payudara, dan perubahan
              pada kulit atau puting.
            </h2>
            <h2
              style={{
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.5)",
                margin: "20px 0px",
              }}
            >
              Faktor risiko dapat bersifat genetik, tetapi beberapa faktor gaya
              hidup, seperti asupan alkohol, membuatnya lebih mungkin terjadi.
            </h2>
          </div>
        </ParallaxLayer>

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
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              backgroundColor: "rgba(0,0,0,1)",
              padding: "50px",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            Breast Cancer
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{ opacity: 1 }}>
          <h2
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              padding: "20px",
              borderRadius: "20px",
              width: "30%",
              marginTop: "10%",
              marginLeft: "30px",
            }}
          >
            Kanker payudara merupakan suatu jenis tumor ganas yang berkembang
            pada sel-sel payudara.
          </h2>
          <h2
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              padding: "20px",
              borderRadius: "20px",
              width: "30%",
              marginTop: "5%",
              marginLeft: "35%",
            }}
          >
            Kanker ini dapat tumbuh jika terjadi pertumbuhan yang abnormal dari
            sel-sel pada payudara. Sel-sel tersebut membelah diri lebih cepat
            dari sel normal dan berakumulasi, yang kemudian membentuk benjolan
            atau massa.
          </h2>

          <h2
            style={{
              backgroundColor: "rgba(255,255,255,0.5)",
              padding: "20px",
              borderRadius: "20px",
              width: "30%",
              marginTop: "5%",
              marginLeft: "68%",

              textAlign: "center",
            }}
          >
            Pada stadium yang lebih parah, sel-sel abnormal ini dapat menyebar
            melalui kelenjar getah bening ke organ tubuh lainnya.
          </h2>
        </ParallaxLayer>

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
              padding: "50px",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            Facts Breast Cancer
          </h1>
        </ParallaxLayer>

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
              marginTop: "5%",
              backgroundColor: "rgba(0,0,0,1)",
              padding: "50px",
              borderRadius: "20px",
              color: "#fff",
            }}
          >
            Let's take quick test Breast Cancer
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
            className="button2"
          >
            <h3>Quick test</h3>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
  }
}
