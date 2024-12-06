import React from "react";
import styles from "@/styles/myPage/index.module.css";
// className={styles.}
export default function myPage() {
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
            <p className={styles.numberOfTime}>12/12回</p>
          </div>
        </div>
        <div className={styles.editContent}>
          <p className={styles.goal}>目標セット回数</p>
          <p className={styles.number}>12回</p>
          <a className={styles.edit}></a>
        </div>
        <div className={styles.weekContent}>
          <p className={styles.description}>※星1=2セット</p>
          <p className={styles.title}>1週間のセット回数表</p>
          <div className={styles.table}>
            <div className={styles.daysContent}>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>月</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>火</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>水</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>木</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>金</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>土</p>
              </div>
              <div className={styles.day}>
                <div className={styles.starContent}>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                  <div className={styles.star}></div>
                </div>
                <p>日</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}