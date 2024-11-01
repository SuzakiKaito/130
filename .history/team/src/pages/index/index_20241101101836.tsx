import { useState } from 'react';
import styles  from '@/styles/index/index.module.css';

export default function home(){
  return(
    <>
    <div className={styles.content}>
      {/* <header></header> */}
      <main className={styles.main}>
      <h2>あなたのデータ</h2>
      </main>
    </div>
    </>
  )
}