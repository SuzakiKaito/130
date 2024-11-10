import { useState,useEffect,useRef } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){


  return (
    <>
      <div className={styles.content}>
        <p className={styles.timer}>タイマー </p>
        <div className={styles.stars}>
          <figure><img src="/images/star.svg" alt="星" /></figure>
          <figure><img src="/images/star.svg" alt="星" /></figure>
          <figure><img src="/images/star.svg" alt="星" /></figure>
          <figure><img src="/images/star.svg" alt="星" /></figure>
          <figure><img src="/images/star.svg" alt="星" /></figure>
        </div>
        <p className={styles.setName}><span>3</span>セット目</p>
        <div className={styles.timerContent}>
          <div className={styles.timerCircle}>
            <p className={styles.studyTime}>勉強時間</p>
            <p className={styles.rest}>残り</p>
	          <p className={styles.timerFlex}> <span className={styles.min}>00</span><span className={styles.colon}>:</span><span className={styles.sec}>00</span></p>
          </div>
        </div>
        <div className={styles.buttonFlex}>
	        <button className={styles.start} > Start </button>
	        <button className={styles.stop} > Stop </button>
	        {/* <button className={styles.restart}> Restart </button> */}
        </div>
      </div>
    </>
  )
}