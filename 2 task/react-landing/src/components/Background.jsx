import React from "react";
import styles from "../style/background.module.css";

import red_ball from "../images/background/red_ball.png";
import red_ball_2 from "../images/background/red_ball_2.png";
import red_light from "../images/background/red_light.png";
import purple_ball from "../images/background/purple_ball.png";
import purple_light from "../images/background/purple_light.png";

export default function Background() {
  return (
    <div>
      <img className={styles.red_ball} src={red_ball} alt="red ball" />
      <img className={styles.red_ball_2} src={red_ball_2} alt="red ball 2" />
      <img className={styles.purple_ball} src={purple_ball} alt="purple ball" />
      <img className={styles.purple_light} src={purple_light} alt="purple light" />
      <img className={styles.red_light} src={red_light} alt="red light" />
    </div>
  );
}
