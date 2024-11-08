import { useState } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  return (
    <>
      <div className={styles.content}>
        <p className={styles.timer}>Timer </p>
	      <p> <span className={styles.min}>00</span>:<span className={styles.sec}>00</span>:<span className={styles.dsec}>00</span></p>
	      <button className={styles.start}> Start </button>
	      <button className={styles.stop}> Stop </button>
	      <button className={styles.restart}> Restart </button>
      </div>
    </>
  )
}