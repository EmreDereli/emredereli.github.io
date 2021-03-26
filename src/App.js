import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/Button";
import Bar from "./components/bar/Bar";
import { useRef } from "react";
import {
  FaStackOverflow,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaReact,
  FaAndroid,
  FaSwift,
  FaJs,
} from "react-icons/fa";
import ProfileItem from "./components/profile/ProfileItem";
import WorkCard from "./components/works/WorkCard";

function App() {
  const myWorks = [
    {
      title: "Pakodemy",
      linkAppStore:
        "https://apps.apple.com/tr/app/pakodemy-yks-tyt-ayt/id1481710296",
      link: "https://play.google.com/store/apps/details?id=com.pakodemy&hl=tr",
      img:
        "https://play-lh.googleusercontent.com/mfXnAzoleDsfLvZu1s6tJLYdFLrjNmof2vPwGs6fkQwpOFYPBtS-Oi83qbTBwnEcCO8=s360-rw",
    },
    {
      title: "Tabuu! - Internetsiz Oyna",
      link:
        "https://play.google.com/store/apps/details?id=com.rookieslab.tabu&hl=tr",
      img:
        "https://play-lh.googleusercontent.com/eSCbbeAkCEtA8zHXM6Pozn9hexAB18v_fUdIoUDghqJ-y9qhid630l_UrTkbETH1tDCy=s360-rw",
    },
    {
      title: "Harf Alayım!",
      link:
        "https://play.google.com/store/apps/details?id=com.rookieslab.harfalayim&hl=tr",
      img:
        "https://play-lh.googleusercontent.com/vTi-jBJQa384-wZnlYnxGi6JFc_--rkk7DfjSPvK6MT8S8dW32IvTbhxD2shL3i_7w=s360-rw",
    },
    {
      title: "CrossWord",
      link:
        "https://play.google.com/store/apps/details?id=com.rookieslab.crossword&hl=tr",
      img:
        "https://play-lh.googleusercontent.com/OaY2FTp4qF_OcZ_R_PO0FWKNTjOHGPZjRXH_S1IDbwtYzq7Hg9Y0nkj-8UeOnFfmXV7E=s360-rw",
    },
  ];
  const myRef = useRef();

  const executeScroll = () => myRef.current.scrollIntoView();
  const styles = {
    container: {
      backgroundColor: "black",
      display: "flex",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    },
    container2: {
      display: "flex",
      flex: 1,
      backgroundColor: "#ffffff",
      flexDirection: "column",
    },
    container3: {
      display: "flex",
      flex: 1,

      flexDirection: "column",
    },
  };
  return (
    <div className="App">
      <div className="container" style={styles.container}>
        <div style={{ height: 60 }}></div>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="name">Emre Dereli</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <div className="title">React Native Developer</div>
            <div
              style={{ width: 1, height: 20, backgroundColor: "white" }}
            ></div>
            <div className="title">Mobile Developer</div>
          </div>

          <Button onClick={executeScroll}></Button>
        </div>
        <div
          style={{
            margin: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={() => window.open("https://www.github.com/EmreDereli")}
            style={{ color: "white", margin: 15 }}
          >
            <FaGithub></FaGithub>
          </div>
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/dereliemre")
            }
            style={{ color: "white", margin: 15 }}
          >
            <FaLinkedin></FaLinkedin>
          </div>
          <div
            onClick={() =>
              window.open("https://stackoverflow.com/users/10139076/emre-d")
            }
            style={{ color: "white", margin: 15 }}
          >
            <FaStackOverflow></FaStackOverflow>
          </div>
        </div>
      </div>
      <div ref={myRef} className="container" style={styles.container2}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <h2>About</h2>
          <div
            style={{
              paddingLeft: "15%",
              paddingRight: "15%",
              color: "#888888",
            }}
          >
            I'm an iOS developer in SwiftUI, I have the passion for coding since
            I was a child and I tried all the technologies like HTML, CSS, JAVA,
            PHP. Since a few years i'm developing apps in SwiftUI for iOS, and I
            learnt it for it's versatility.
          </div>
          <div>
            <FaReact
              style={{ fontSize: 70, color: "#7ec0e4", margin: 20 }}
            ></FaReact>

            <FaAndroid
              style={{ fontSize: 70, color: "#2aaf74", margin: 20 }}
            ></FaAndroid>

            <FaJs style={{ fontSize: 70, color: "#e9ec82", margin: 20 }}></FaJs>
            <FaSwift
              style={{ fontSize: 70, color: "#ff7a5a", margin: 20 }}
            ></FaSwift>
          </div>
        </div>
        <div className="down">
          <div className="left">
            <h2>Profile</h2>
            <ProfileItem title="Fullname" value="Emre Dereli"></ProfileItem>
            <ProfileItem
              title="Birthdate"
              value="11 February 1997"
            ></ProfileItem>
            <ProfileItem
              title="Current Position"
              value="Mobile Developer @TOSAnalytics"
            ></ProfileItem>
          </div>

          <div className="right">
            <h2>Skills</h2>
            <Bar title="React Native" value={60}></Bar>
            <Bar title="JavaScript" value={40}></Bar>
            <Bar title="Android" value={10}></Bar>
            <Bar title="Swift" value={10}></Bar>
          </div>
        </div>
      </div>
      <div className="container" style={styles.container3}>
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 30 }}
        >
          <h2>My Works</h2>
          <div
            style={{
              paddingLeft: "15%",
              paddingRight: "15%",
              color: "#888888",
            }}
          >
            Check out my apps on Google Play Store and AppStore
          </div>
        </div>

        <div className="workCardWrapper">
          {myWorks.map((work) => {
            return (
              <WorkCard
                title={work.title}
                img={work.img}
                link={work.link}
                linkAppStore={work.linkAppStore ? work.linkAppStore : null}
              ></WorkCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
