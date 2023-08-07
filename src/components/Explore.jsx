import Card from "./Card";
import cardio from "../assets/explore/2.png";
import fat from "../assets/explore/3.png";
import muscle from "../assets/explore/4.png";
import nutrition from "../assets/explore/5.png";
import program from "../assets/explore/program.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Explore = () => {
  const [width, setWidth] = useState();
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div ref={carousel} className="explore">
      <h1>Explore Our Program</h1>
      <img className="program" src={program} />
      <motion.div
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
        className="cards"
      >
        <Card
          icon={fat}
          title="Fat Loss"
          text="Targeted program to burn fat, sculpt the body, and achieve weight loss goals"
        />
        <Card
          icon={cardio}
          title="Cardio Strength"
          text="Blend of cardio and strength training for optimal health and enhanced endurance"
        />
        <Card
          icon={muscle}
          title="Muscle Gain"
          text="Designed to promote muscle growth, increased strength, and a more toned physique"
        />
        <Card
          icon={nutrition}
          title="Nutrition"
          text="Personalized guidance for a balanced diet, supporting your health and fitness goals"
        />
      </motion.div>
    </div>
  );
};

export default Explore;
