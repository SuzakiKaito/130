import { useState, useEffect } from "react";
import styles from '@/styles/timer/index.module.css'

export default function Timer(): JSX.Element {
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOneMinuteCycle, setIsOneMinuteCycle] = useState<boolean>(true);
  const [oneMinuteCount, setOneMinuteCount] = useState<number>(0);
  const [starColor, setStarColor] = useState<string>("gray");

  const totalTime = isOneMinuteCycle ? 60 : 30;
  const timeLeft = minutes * 60 + seconds;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(prev => prev - 1);
        } else if (minutes > 0 && seconds === 0) {
          setMinutes(prev => prev - 1);
          setSeconds(59);
        } else {
          if (isOneMinuteCycle) {
            setOneMinuteCount(prevCount => prevCount + 1);
            if (oneMinuteCount + 1 === 2) {
              setStarColor("yellow");
            }
            setMinutes(0);
            setSeconds(30);
          } else {
            setMinutes(1);
            setSeconds(0);
          }
          setIsOneMinuteCycle(!isOneMinuteCycle);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, minutes, seconds, isOneMinuteCycle, oneMinuteCount]);

  const handleToggle = (): void => {
    setIsActive(!isActive); // 状態を切り替える
  };

  return (
    <>
      <div>
        <div className={styles.content}>
          <p className={styles.timer}>タイマー</p>
          <div className={styles.stars}>
            <figure><img src="/images/star.svg" alt="星" /></figure>
            <figure><img src="/images/star.svg" alt="星" /></figure>
            <figure><img src="/images/star.svg" alt="星" /></figure>
            <figure><img src="/images/star.svg" alt="星" /></figure>
            <figure><img src="/images/star.svg" alt="星" /></figure>
          </div>
          <p className={styles.setName}><span>3</span>セット目</p>
          <div className={styles.timerContent}>
            <div
              className={styles.backgroundLayer}
              style={{
                background: `conic-gradient(#01EAFE ${progress}%, transparent 0)`,
              }}
            ></div>
            <div className={styles.timerBox}>
              <div className={styles.timerCircle}>
                <p className={styles.studyTime}>勉強時間</p>
                <p className={styles.rest}>残り</p>
                <p className={styles.timerFlex}>
                  <span className={styles.min}>{String(minutes).padStart(2, '0')}</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.sec}>{String(seconds).padStart(2, '0')}</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonFlex}>
            <button className={styles.start} onClick={handleToggle}>
              <figure className={styles.timerButton}>
                <img 
                  src={isActive ? "/images/stopButton.png" : "/images/startButton.png"} 
                  alt={isActive ? "タイマーストップボタン" : "タイマースタートボタン"} 
                />
              </figure>
            </button>
            <button className={styles.modal}>
              <figure className={styles.modalButton}>
                <img src="/images/modalButton.png" alt="モーダル画面に飛ぶボタン" />
              </figure>
            </button>
            <div className={styles.modalContent}></div>
          </div>
          <footer className={styles.footerContent}>
            <div className={styles.footerCircle}></div>
            <div className={styles.footerBox}>
              <div className={styles.footerIcon}>
                <figure className={styles.footerImage}>
                  <img src="/images/homeIcon.png" alt="ホームアイコン" />
                </figure>
                <figure className={styles.footerImage}>
                  <img src="/images/timerIcon.png" alt="タイマーアイコン" />
                </figure>
                <div className={styles.crownIcon}>
                  <figure className={styles.footerImage}>
                    <img src="/images/crownIcon.png" alt="ランキングアイコン" className={styles.crownIcon}/>
                  </figure>
                  <h4 className={styles.textRank}>ランキング</h4>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
