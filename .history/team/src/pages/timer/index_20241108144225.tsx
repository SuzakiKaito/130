import { useState,useEffect,useRef } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  const [time, setTime] = useState(0); // タイマーの経過時間（ミリ秒単位）を保持する状態変数
  const [isRunning, setIsRunning] = useState(false); // タイマーが動作中かどうかを保持する状態変数
  const maxTime = 60000; //30分になるとタイマーが止まる
  
  // 音声ファイルのロード
  // const audio = new Audio('/audio/Clock-Alarm03-01(Mid-Loop).mp3');

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime(prevTime => {
          if (prevTime >= maxTime) {
            setIsRunning(false); // 2分に到達したら停止
            // audio.play(); // タイマーが終了したら音を鳴らす
            return prevTime; // タイマーの時間をそのまま維持
          }
          return prevTime + 10; // 10ミリ秒ごとに経過時間を更新
        });
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [isRunning, maxTime]);

  const minutes = String(Math.floor(time / 60000)).padStart(2, '0'); // 分数を計算し、2桁の文字列に変換
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0'); // 秒数を計算し、2桁の文字列に変換
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0'); // ミリ秒を計算し、2桁の文字列に変換

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

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
          <div className={styles.timerCircle}></div>


        </div>
	      <p className={styles.timerFlex}> <span className={styles.min}>{minutes}</span>.<span className={styles.sec}>{seconds}</span>.<span className={styles.micro}>{milliseconds}</span></p>
        <div className={styles.flex}>
	        <button className={styles.start} onClick={handleStart}> Start </button>
	        <button className={styles.stop} onClick={handleStop}> Stop </button>
          <button className={styles.reset} onClick={handleReset}>Reset</button>
	        {/* <button className={styles.restart}> Restart </button> */}
        </div>
      </div>
    </>
  )
}