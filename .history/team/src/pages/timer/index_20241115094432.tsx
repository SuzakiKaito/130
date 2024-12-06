import { useState,useEffect } from "react";
import styles from '@/styles/timer/index.module.css'

export default function timer(){

  // タイマーの初期時間を30分とし、minutesに30をセット
  const [minutes, setMinutes] = useState(30);
  // 秒を0にセット
  const [seconds, setSeconds] = useState(0);
  // タイマーが作動中かどうかを判別するisActiveを定義（初期状態は停止中）
  const [isActive, setIsActive] = useState(false);
  const [completionCount, setCompletionCount] = useState(0);
  const [highlightedStars, setHighlightedStars] = useState([]);
  
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
        // 分も秒も0になったらタイマーを停止
        else {
          setIsActive(false);
          setCompletionCount((prevCount) => prevCount + 1);
        }
      }, 1000);

      // クリーンアップ関数を返し、インターバルをクリアする
      return () => clearInterval(intervalId);
    }
  }, [isActive, minutes, seconds]); // isActive, minutes, secondsが変わるたびに実行

  useEffect(() => {
    if (completionCount > 0 && completionCount % 2 === 0) {
      setHighlightedStars((prevStars) => {
        const newStars = [...prevStars, prevStars.length];
        return newStars.slice(0, 5); // ハイライトする星を5つまでに制限
      });
    }
  }, [completionCount]);

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
          {[...Array(5)].map((_, index) => (
            <figure key={index}>
              <img
                src="/images/star.svg"
                alt="星"
                style={{
                  filter: highlightedStars.includes(index) ? 'brightness(1.5) sepia(1) saturate(5) hue-rotate(40deg)' : 'none',
                }}
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