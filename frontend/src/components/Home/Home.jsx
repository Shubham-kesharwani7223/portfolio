import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";

import java from "./java.png";
import cplus from "./cplus.png";
import git from "./git.png";
import mern from "./mern.png";
import react from "./react.png";
import sql from "./sql.png";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import TimeLine from '../TimeLine/TimeLine';
import YoutubeCard from '../YoutubeCard/YoutubeCard';

import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiHtml5,
  SiCplusplus,
  SiExpress,
  SiThreedotjs,
  SiOpenjdk,
  SiSpring,
  SiDocker,
  SiLinux,
  SiGit,
  SiApachekafka
} from "react-icons/si";

import { MouseOutlined } from '@mui/icons-material';

export const Home = () => {

  const { user } = useSelector((state) => state.user);

  useEffect(() => {

    const textLoader = new THREE.TextureLoader();

    const moonTexture = textLoader.load(moonImage);
    const venusTexture = textLoader.load(venusImage);
    const spaceTexture = textLoader.load(spaceImage);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");

    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);

    const moonMaterial = new THREE.MeshBasicMaterial({
      map: moonTexture,
    });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);

    const venusMaterial = new THREE.MeshBasicMaterial({
      map: venusTexture,
    });

    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);

    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);

    scene.add(venus);

    scene.add(pointLight);

    scene.add(pointLight2);

    scene.background = spaceTexture;

    const constSpeed = 0.01;

    window.addEventListener("mousemove", (e) => {

      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;

        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

    });

    const animate = () => {

      requestAnimationFrame(animate);

      moon.rotation.y += 0.001;

      venus.rotation.y += 0.001;

      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.render(scene, camera);
    };

    animate();

    const handleScroll = () => {

      camera.rotation.z = window.scrollY * 0.001;

      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (skillsBox) {

        if (window.scrollY > 1000) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <div className="home">

      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">

        <Typography variant="h1">

          <p>S</p>
          <p>H</p>
          <p>U</p>
          <p>B</p>
          <p>H</p>
          <p>A</p>
          <p>M</p>

        </Typography>

        <div className="homeCanvasBox">

          <Typography variant="h2">SOFTWARE</Typography>
          <Typography variant="h2">DEVELOPER</Typography>

        </div>

        <Link to="/projects">VIEW WORK</Link>

      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      {/* TIMELINE */}

      <div className="homeContainer">

        <Typography variant='h3'>TIMELINE</Typography>

        <TimeLine timelines={user?.timeline} />

      </div>

      {/* SKILLS */}

      <div className="homeSkills">

        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">

          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={java} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={cplus} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={git} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={mern} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={react} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={sql} alt="Face6" />
          </div>

        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">

          <SiOpenjdk />
          <SiSpring />
          <SiApachekafka />
          <SiDocker />
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiThreedotjs />
          <SiHtml5 />
          <SiGit />
          <SiLinux />

        </div>

      </div>

      {/* YOUTUBE */}

      <div className="homeYoutube">

        <Typography variant="h3">
          YOUTUBE VIDEOS
        </Typography>

        <div className="homeYoutubeWrapper">

          {
            user &&
            user.youtube &&
            user.youtube.map((item) => (
              <YoutubeCard
                key={item._id}
                url={item.url}
                title={item.title}
                image={item.image?.url}
              />
            ))
          }

        </div>

      </div>

    </div>

  );
};

export default Home;