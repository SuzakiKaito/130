import { useState, useEffect } from "react";
import styles from '@/styles/timer/index.module.css';

export default function Timer(): JSX.Element {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(10);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isOneMinuteCycle, setIsOneMinuteCycle] = useState<boolean>(true);
  const [oneMinuteCount, setOneMinuteCount] = useState<number>(0);
  const [starColor, setStarColor] = useState<string>("gray");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [setCount, setSetCount] = useState<number>(1);

  const totalTime = isOneMinuteCycle ? 10 : 5;
  const timeLeft = minutes * 60 + seconds;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0 && seconds === 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          if (isOneMinuteCycle) {
            setOneMinuteCount((prevCount) => prevCount + 1);
            if (oneMinuteCount + 1 === 2) {
              setStarColor("yellow");
            }
            setMinutes(0);
            setSeconds(5);
          } else {
            setMinutes(0);
            setSeconds(10);
          }
          setIsOneMinuteCycle(!isOneMinuteCycle);
          setSetCount((prevCount) => prevCount + 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, minutes, seconds, isOneMinuteCycle, oneMinuteCount]);

  const handleToggle = (): void => {
    setIsActive(!isActive);
  };

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  // 星の色を決定する関数
  const getStarColors = () => {
    const colors = ['gray', 'gray', 'gray', 'gray', 'gray'];
    if (setCount >= 3) colors[0] = 'yellow';
    if (setCount >= 7) colors[1] = 'yellow';
    if (setCount >= 11) colors[2] = 'yellow';
    if (setCount >= 15) colors[3] = 'yellow';
    if (setCount >= 19) colors[4] = 'yellow';
    return colors;
  };

  return (
    <>
      <div>
        <div className={styles.content}>
          <p className={styles.timer}>タイマー</p>
          <div className={styles.stars}>
            {getStarColors().map((color, index) => (
              <svg
                key={index}
                width="40"
                height="40"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="50,10 61,38 90,38 67,59 76,88 50,70 24,88 33,59 10,38 39,38"
                  fill={color}
                  stroke="#ffffff"
                  strokeWidth="5"
                />
              </svg>
            ))}
          </div>
          <p className={styles.setName}><span>{setCount}</span>セット目</p>
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
            <button className={styles.modal} onClick={toggleModal}>
              <figure className={styles.modalButton}>
                <img src="/images/modalButton.png" alt="モーダル画面に飛ぶボタン" />
              </figure>
            </button>
            {isModalOpen && (
              <div className={styles.modalContent}>
                <div className={styles.modalIcon}>
                  <div className={styles.modalCircle}>
                    <figure>
                      {setCount === 1 && (
                        <img src="/images/drop.png" alt="水滴の画像" />
                      )}
                      {setCount >= 2 && setCount <= 3 && (
                        <img src="/images/star.png" alt="星の画像" />
                      )}
                      {setCount >= 4 && (
                        <img src="/images/heart.png" alt="ハートの画像" />
                      )}
                    </figure>
                  </div>
                </div>
                <h4>
                  {setCount === 1 && "もう少し"}
                  {setCount >= 2 && setCount <= 2 && "その調子!!!"}
                  {setCount >= 3 && "素晴らしい!!!"}
                </h4>
                <div className={styles.messageContent}>
                  <p>
                    今日は目標回数よりも多い回数の12セットも勉強できていて凄いです!
                    <br/>
                    <br/>
                    明日もこの調子で頑張っていきましょう！
                  </p>
                </div>
                <button onClick={toggleModal}>OK</button>
              </div>
            )}
          </div>
          <footer className={styles.footerContent}>
            <div className={styles.footerCircle}></div>
            <div className={styles.footerBox}>
              <div className={styles.footerIcon}>
                <figure className={styles.footerImage}>
                  <a href="/myPage"><img src="/images/homeIcon.png" alt="ホームアイコン" /></a>
                </figure>
                <div className={styles.timerIcon}>
                  <figure className={styles.footerImage}>
                    <img className={styles.timerImg} src="/images/timerIcon_large.png" alt="タイマーアイコン" />
                  </figure>
                  <h4 className={styles.textTimer}>タイマー</h4>
                </div>
                <figure className={styles.footerImage}>
                  <a href="/rank"><img src="/images/crownIcon.png" alt="ランキングアイコン" className={styles.crownIcon} /></a>
                </figure>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
