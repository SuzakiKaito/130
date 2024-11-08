import { useState } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  return (
    <>
      <div className={styles.content}>
    <span className={styles.timer}>JS Timer </span>
	<p> <span id="min">00</span>:<span id="sec">00</span>:<span id="msec">00</span></p>
	<button id="start"> Start </button>
	<button id="stop"> Stop </button>
	<button id="restart"> Restart </button>
</div>
          

      </div>
    </>
  )
}