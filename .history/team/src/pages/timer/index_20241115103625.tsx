import { useState,useEffect } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){

  // タイマーの初期時間を30分とし、minutesに30をセット
  const [minutes, setMinutes] = useState(1);
  // 秒を0にセット
  const [seconds, setSeconds] = useState(0);
  // タイマーが作動中かどうかを判別するisActiveを定義（初期状態は停止中）
  const [isActive, setIsActive] = useState(false);
  const [isOneMinuteCycle, setIsOneMinuteCycle] = useState(true); // trueなら1分、falseなら30秒
  const [oneMinuteCycleCount, setOneMinuteCycleCount] = useState(0);
  const [starsColor, setStarsColor] = useState("gray"); // 星の色を変更するための状態
  
  
  // タイマーの動作処理を定義するuseEffectフック
  useEffect(() => {
    // タイマーがアクティブな場合
    if (isActive) {
      // 1秒ごとに実行されるインターバルを設定
      const intervalId = setInterval(() => {
        // 秒が0より大きい場合、1秒減らす
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } 
        // 分が0より大きく秒が0の場合、分を1減らし、秒を59にリセット
        else if (minutes > 0 && seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } 
        else {
          // タイマーが0になったとき
          if (isOneMinuteCycle) {
            setOneMinuteCycleCount(prevCount => prevCount + 1); // 1分サイクルが終わるごとにカウント増加
            setMinutes(0);
            setSeconds(30);
          } else {
            setMinutes(1);
            setSeconds(0);
          }
          setIsOneMinuteCycle(!isOneMinuteCycle); // 次のサイクルに切り替え
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, minutes, seconds, isOneMinuteCycle]);

  // oneMinuteCycleCount の値が変わるたびに色をチェックする
  useEffect(() => {
    if (oneMinuteCycleCount > 0 && oneMinuteCycleCount % 2 === 0) {
      setStarsColor("yellow"); // 2回目の1分終了ごとに黄色に変更
    }
  }, [oneMinuteCycleCount]);

  const handleStart = () => {
    setIsActive(true);
  };
  const handleStop = () => {
    setIsActive(false);
  };


  return (
    <>
      <div>
        <div className={styles.content}>
          <p className={styles.timer}>タイマー </p>
          <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
              <figure key={index}>
                <img
                  src="/images/star.svg"
                  alt="星"
                  style={{ filter: starsColor === "yellow" ? "hue-rotate(40deg) brightness(1.2)" : "none" }}
                />
              </figure>
            ))}
          </div>
          <p className={styles.setName}><span>3</span>セット目</p>
          <div className={styles.timerContent} >
            <div className={styles.timerCircle}>
              <p className={styles.studyTime}>勉強時間</p>
              <p className={styles.rest}>残り</p>
              <p className={styles.timerFlex}> <span className={styles.min}>{String(minutes).padStart(2, '0')}</span><span className={styles.colon}>:</span><span className={styles.sec}>{String(seconds).padStart(2, '0')}</span></p>
            </div>
          </div>
          <div className={styles.buttonFlex}>
            <button className={styles.start} onClick={handleStart}> Start </button>
            <button className={styles.stop} onClick={handleStop}> Stop </button>
            {/* <button className={styles.restart}> Restart </button> */}
          </div>

          {/* カウントを表示するためのUI */}
          <p className={styles.cycleCount}>1分タイマー終了回数: {oneMinuteCycleCount}</p>

        <footer className={styles.footerContent}>
          <div className={styles.iconContent}>
            <figure className={styles.timeIcon}><img src="/images/timeIcon.png" alt="タイマーアイコン" /></figure>
            <figure className={styles.homeIcon}><img src="/images/homeIcon.png" alt="ホームアイコン" /></figure>
            <figure className={styles.crownIcon}><img src="/images/crownIcon.png" alt="ランキングアイコン" /></figure>
          </div>
        </footer>
        </div>
      </div>
    </>
  )
}