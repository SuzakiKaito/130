import { useState,useEffect,useRef } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){
  const [time, setTime] = useState(0); // タイマーの経過時間（ミリ秒単位）を保持する状態変数
  const [isRunning, setIsRunning] = useState(false); // タイマーが動作中かどうかを保持する状態変数
  const timerRef = useRef(null); // タイマーIDを保持するための参照を作成（リセットや停止で使う）

  useEffect(() => {
    if (isRunning) {
      // タイマーが動作中なら新しいintervalを開始する
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // 10ミリ秒ごとに経過時間を10ミリ秒増加させる
      }, 10); // 10ミリ秒間隔で更新
    } else if (!isRunning && timerRef.current) {
      // タイマーが停止していて、既にintervalが存在する場合、そのintervalをクリアする
      clearInterval(timerRef.current); // 現在のタイマーを停止
      timerRef.current = null; // タイマーIDをnullにリセット
    }

  return (
    <>
      <div className={styles.content}>
        <p className={styles.timer}>Timer </p>
	      <p className={styles.timerFlex}> <span className={styles.min}>00</span>.<span className={styles.sec}>00</span>.<span className={styles.micro}>00</span></p>
        <div className={styles.flex}>
	        <button className={styles.start}> Start </button>
	        <button className={styles.stop}> Stop </button>
	        {/* <button className={styles.restart}> Restart </button> */}
        </div>
      </div>
    </>
  )
}