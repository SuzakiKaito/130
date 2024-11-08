import { useState, useEffect, useRef } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){

  // const [time, setTime] = useState(0); // Store time in milliseconds
  // const [isRunning, setIsRunning] = useState(false); // Track if the timer is running
  // const timerRef = useRef(null);

  // useEffect(() => {
  //   if (isRunning) {
  //     // Start interval when timer is running
  //     timerRef.current = setInterval(() => {
  //       setTime(prevTime => prevTime + 10); // Increment by 10ms
  //     }, 10);
  //   } else if (!isRunning && timerRef.current) {
  //     // Clear interval when timer stops
  //     clearInterval(timerRef.current);
  //     timerRef.current = null;
  //   }

  //   // Cleanup on component unmount
  //   return () => clearInterval(timerRef.current);
  // }, [isRunning]);

  // // Convert time to minutes, seconds, and milliseconds
  // const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
  // const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  // const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');

  // const handleStart = () => setIsRunning(true);
  // const handleStop = () => setIsRunning(false);
  // const handleReset = () => {
  //   setIsRunning(false);
  //   setTime(0);
  // };
  
  return (
    <>
      <div className={styles.content}>
        <p className={styles.timer}>Timer </p>
	      <p className={styles.timerFlex}> <span className={styles.min}>00</span>.<span className={styles.sec}>00</span>.<span className={styles.micro}>00</span></p>
        <div className={styles.flex}>
	        <button className={styles.start} > Start </button>
	        <button className={styles.stop} > Stop </button>
	        {/* <button className={styles.restart}> Restart </button> */}
        </div>
      </div>
    </>
  )
}