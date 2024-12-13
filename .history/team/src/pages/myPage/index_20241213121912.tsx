import React,{useState} from "react";
import styles from "@/styles/myPage/index.module.css";
import { CountProvider } from "@/contexts/CountContext";

// フォント
import { LuPencil } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
// クラス名
// className={styles.}
export default function myPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalCount, setGoalCount] = useState(12); // 目標セット回数

  // モーダルを開く
  const openModal = () => setIsModalOpen(true);

  // モーダルを閉じる
  const closeModal = () => setIsModalOpen(false);

  const increaseGoal = () => setGoalCount((prev) => prev + 1);
  const decreaseGoal = () => setGoalCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}></div>
        <p className={styles.myPage}>マイページ</p>
        <div className={styles.graph}>
          <div className={styles.circleGg}></div>
          <div className={styles.circleLine}></div>
          <div className={styles.circleTop}></div>
          <div className={styles.data}>
            <p className={styles.set}>今日のセット回数</p>
            <p className={styles.numberOfTime}>{`${goalCount}/${goalCount}回`}</p>
          </div>
        </div>
        <div className={styles.editContent}>
          <p className={styles.goal}>目標セット回数</p>
          <p className={styles.number}>{goalCount}</p>
          <a className={styles.edit} onClick={openModal}>
            <LuPencil color="white" size="12" />
          </a>
        </div>
        {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className={styles.meterContent}>
              <p>目標セット回数</p>
              <div className={styles.meter}>
              <button
                    className={styles.decreaseButton}
                    onClick={decreaseGoal}
                  >
                    -
                  </button>
                  <span className={styles.goalNumber}>{goalCount}</span>
                  <button
                    className={styles.increaseButton}
                    onClick={increaseGoal}
                  >
                    +
                  </button>
              </div>
            </div>
            <div className={styles.buttonContent}>
              <button >
                CANCEL
              </button>
              <button className={styles.closeButton} onClick={closeModal}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
        <div className={styles.weekContent}>
          <p className={styles.description}>※星1=2セット</p>
          <p className={styles.title}>1週間のセット回数表</p>
          <a className={styles.table}>
            <div className={styles.daysContent}>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaRegStar color="white" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaRegStar color="white" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>月</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaRegStar color="white" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>火</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaRegStar color="white" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>水</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>木</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>金</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>土</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}>
                    <FaRegStar color="white" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                  <div className={styles.star}>
                    <FaStar color="#FFEA00" size="30" />
                  </div>
                </div>
                <p>日</p>
              </div>
            </div>
          </a>
        </div>
        <footer className={styles.footerContent}>
            <div className={styles.footerCircle}></div>
            <div className={styles.footerBox}>
              <div className={styles.footerIcon}>
                <div className={styles.homeIcon}>
                  <figure className={styles.footerImage}>
                    <a href="/myPage"><img src="/images/homeIcon_large.png" alt="ホームアイコン" /></a>
                  </figure>
                  <h4 className={styles.textTimer}>ホーム</h4>
                </div>
                <figure className={styles.footerImage}>
                  <img className={styles.timerImg} src="/images/timerIcon_large.png" alt="タイマーアイコン" />
                </figure>
                <figure className={styles.footerImage}>
                  <img src="/images/crownIcon.png" alt="ランキングアイコン" className={styles.crownIcon} />
                </figure>
              </div>
            </div>
          </footer>
      </div>
    </>
  );
}