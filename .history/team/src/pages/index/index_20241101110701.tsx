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
          <div className={styles.Achievement}>

          </div>
        </div>
      </main>
    </div>
    </>
  )
}