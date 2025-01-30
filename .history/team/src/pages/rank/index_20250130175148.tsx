import React from "react";
import styles from "@/styles/rank/index.module.css";
// 矢印
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { TbArrowBadgeDownFilled } from "react-icons/tb";
// 星
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
// 時計系
import { CgSandClock } from "react-icons/cg";
import { PiClockCountdownBold } from "react-icons/pi";
// className={styles.}


export default function ranking() {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}></div>
        <p className={styles.title}>志望校内ランキング</p>
        {/* 上の2つの情報 */}
        <div className={styles.information}>
          <div className={styles.numberOfPeople}>人数:4人</div>
          <div className={styles.update}>最終更新:12:00</div>
        </div>
        {/* グラフで成績見れるとこ */}
        <div className={styles.achievementRateContent}>
          <div className={styles.charactersContent}>
            <p className={styles.achievementRate}>平均達成率</p>
            <p className={styles.percentage}>120%</p>
          </div>
          <div className={styles.graph}></div>
          <div className={styles.setContent}>
            <div className={styles.mySet}>
              自分のセット回数 <span>12回</span>
            </div>
            <div className={styles.allSet}>
              みんなの平均セット回数 <span>10回</span>
            </div>
          </div>
        </div>
        {/* ランキング */}
        <div className={styles.rankingContent}>
          {/* 1位 */}
          <div className={styles.order}>
            {/* 順位 */}
            <div className={styles.numberContent}>
              <p className={styles.number}>1</p>
              {/* 順位の矢印 */}
              <div className={styles.arrowContent}>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
              </div>
            </div>
            {/* 星 */}
            <div className={styles.starContent}>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
            </div>
            {/* 詳細 */}
            <div className={styles.detailContent}>
              {/* ↓の詳細を押したらモーダル出てくるのでボタンタグから変更してください */}
              <button className={styles.detail}>詳細</button>
              <div className={styles.timeContent}>
                <p className={styles.time}>14回</p>
                <div className={styles.sandglass}>
                  <CgSandClock />
                </div>
              </div>
            </div>
          </div>
          {/* 2位 */}
          <div className={styles.order}>
            <div className={styles.numberContent}>
              <p className={styles.number}>2</p>
              {/* 順位の矢印 */}
              <div className={styles.arrowContent}>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
                <div className={styles.arrowStay}>
                  <TbArrowBadgeRightFilled />
                </div>
              </div>
            </div>
            {/* 星 */}
            <div className={styles.starContent}>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
            </div>
            {/* 詳細 */}
            <div className={styles.detailContent}>
              <button className={styles.detail}>詳細</button>
              <div className={styles.timeContent}>
                <p className={styles.time}>14回</p>
                <div className={styles.sandglass}>
                  <CgSandClock />
                </div>
              </div>
              <div className={styles.setTimeContent}>
                <p className={styles.time}>6h</p>
                <div className={styles.clock}>
                  <PiClockCountdownBold />
                </div>
              </div>
              {isModalOpen && (
                <div className={styles.modalContent}>
                  <div className={styles.countAverage}>
                    <p>過去1週間の平均セット回数</p>
                    <div className={styles.averageTime}>
                      <div className={styles.averageCount}>
                        <figure>
                          <img src="/images/clock.png" alt="時計アイコン" />
                        </figure>
                        <h3>12回</h3>
                      </div>
                      <div className={styles.averageHour}>
                        <figure>
                          <img src="/images/sandClock.png" alt="砂時計アイコン" />
                        </figure>
                        <h3>6h</h3>
                      </div>
                    </div>
                  </div>
                  <div className={styles.countTotal}>
                    <div className={styles.countFlex}>
                      <p>過去3年の赤本合計点数</p>
                      <div className={styles.deviation}>
                        <p>偏差値</p>
                        <p>63.3</p>
                      </div>
                    </div>
                    <figure className={styles.countGraph}>
                      <img src="/images/graph.png" alt="赤本グラフ" />
                    </figure>
                  </div>
                  <button>OK</button>
                </div>
              )}
            </div>
          </div>
          {/* 3位 */}
          <div className={styles.order}>
            <div className={styles.numberContent}>
              <p className={styles.number}>3</p>
              {/* 順位の矢印 */}
              <div className={styles.arrowContent}>
                <div className={styles.arrowUp}>
                  <TbArrowBadgeUpFilled />
                </div>
                <div className={styles.arrowUp}>
                  <TbArrowBadgeUpFilled />
                </div>
                <div className={styles.arrowUp}>
                  <TbArrowBadgeUpFilled />
                </div>
              </div>
            </div>
            {/* 星 */}
            <div className={styles.starContent}>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaRegStar color="white" />
              </div>
            </div>
            {/* 詳細 */}
            <div className={styles.detailContent}>
              <button className={styles.detail}>詳細</button>
              <div className={styles.timeContent}>
                <p className={styles.time}>14回</p>
                <div className={styles.sandglass}>
                  <CgSandClock />
                </div>
              </div>
            </div>
          </div>
          {/* 4位 */}
          <div className={styles.order}>
            <div className={styles.numberContent}>
              <p className={styles.number}>4</p>
              {/* 順位の矢印 */}
              <div className={styles.arrowContent}>
                <div className={styles.arrowDown}>
                  <TbArrowBadgeDownFilled />
                </div>
                <div className={styles.arrowDown}>
                  <TbArrowBadgeDownFilled />
                </div>
                <div className={styles.arrowDown}>
                  <TbArrowBadgeDownFilled />
                </div>
              </div>
            </div>
            {/* 星 */}
            <div className={styles.starContent}>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaStar />
              </div>
              <div className={styles.star}>
                <FaRegStar color="white" />
              </div>
              <div className={styles.star}>
                <FaRegStar color="white" />
              </div>
            </div>
            {/* 詳細 */}
            <div className={styles.detailContent}>
              <button className={styles.detail}>詳細</button>
              <div className={styles.timeContent}>
                <p className={styles.time}>14回</p>
                <div className={styles.sandglass}>
                  <CgSandClock />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footerContent}>
        <div className={styles.footerCircle}></div>
            <div className={styles.footerBox}>
              <div className={styles.footerIcon}>
                {/* <div className={styles.homeIcon}> */}
                  <figure className={styles.footerImage}>
                    <a href="/myPage"><img src="/images/homeIcon.png" alt="ホームアイコン" /></a>
                  </figure>
                {/* </div> */}
                <figure className={styles.footerImage}>
                  <a href="/timer"><img className={styles.timerImg} src="/images/timerIcon.png" alt="タイマーアイコン" /></a>
                </figure>
                <div className={styles.rankIcon}>
                  <figure className={styles.footerImage}>
                    <a href="/rank"><img src="/images/crownIcon_large.png" alt="ランキングアイコン" className={styles.crownIcon} /></a>
                  </figure>
                  <h4 className={styles.textRank}>ランキング</h4>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </>
  );
}