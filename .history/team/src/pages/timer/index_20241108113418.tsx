import { useState,useEffect,useRef } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  const [time, setTime] = useState(0); // タイマーの経過時間（ミリ秒単位）を保持する状態変数
  const [isRunning, setIsRunning] = useState(false); // タイマーが動作中かどうかを保持する状態変数
  const maxTime = 120000; 

  useEffect(() => {
    if (isRunning) {
      // タイマーが動作中ならintervalを開始
      const intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10); // 10ミリ秒ごとに経過時間を更新
      }, 10);

      // タイマー停止またはコンポーネントのアンマウント時にintervalをクリア
      return () => clearInterval(intervalId);
    }
  }, [isRunning]); // isRunningが変化するたびにuseEffectが実行される

  const minutes = String(Math.floor(time / 60000)).padStart(2, '0'); // 分数を計算し、2桁の文字列に変換
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0'); // 秒数を計算し、2桁の文字列に変換
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0'); // ミリ秒を計算し、2桁の文字列に変換

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <>
      <div className={styles.content}>
        <p className={styles.timer}>Timer </p>
	      <p className={styles.timerFlex}> <span className={styles.min}>{minutes}</span>.<span className={styles.sec}>{seconds}</span>.<span className={styles.micro}>{milliseconds}</span></p>
        <div className={styles.flex}>
	        <button className={styles.start} onClick={handleStart}> Start </button>
	        <button className={styles.stop} onClick={handleStop}> Stop </button>
	        {/* <button className={styles.restart}> Restart </button> */}
        </div>
      </div>
    </>
  )
}