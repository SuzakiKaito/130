import { useState } from 'react';
// import ress from '@/styles/index/ress.module.css'
import styles  from '@/styles/index/index.module.css';

export default function home(){
  return(
    <>
    <div className={styles.content}>
      {/* <header></header> */}
      <main className={styles.mainContent}>
        <h2>あなたのデータ</h2>
        <div className={styles.dataContent}>
          {/* <div className={styles.rectangle}></div> */}
          <figure>
            <img src="/images/Union.png" alt="" />
          </figure>
          <div className={styles.achievement}>
            <h4>達成度</h4>
            <h3 className={styles.achievementNumber}>70%</h3>
          </div>
          <div className={styles.concentration}>
            <h3>集中力指数</h3>
            <figure>
              <img src="/images/stars.png" alt="" />
            </figure>
          </div>
          <div className={styles.flexBox}>
            <div className={styles.studyTime}>
            </div>
            <div className={styles.flexBox2}>
              <div className={styles.goalTime}>
              </div>
              <button>入力</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}