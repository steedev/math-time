import React, { useState, useCallback } from 'react'
import MathJax from 'react-mathjax-preview'
import styles from './Ex1.module.scss'

const Ex3 = () => {
  const [isHide, setIsHide] = useState(1)

  const handleIncrement = useCallback(() => {
    setIsHide(isHide + 1)
  }, [isHide])

  const handleFull = useCallback(() => {
    setIsHide(10)
  }, [isHide])

  return (
    <>
      <h1>Zadanie 3</h1>
      <button className={styles.Mbtn} onClick={() => handleFull()}>
        Zobacz całe zadanie
      </button>

      <p>
        Dane są punkty A = (-1, -8) oraz B = (5, 4). Znajdź taki punkt C, że
        <div className={styles.math}>
          <MathJax math={String.raw`$$\vec{AC}=5\vec{CB}$$`} />
        </div>
      </p>

      {isHide == 1 ? (
        <button className={styles.btn} onClick={() => handleIncrement()}>
          Dalej
        </button>
      ) : null}
      {isHide > 1 ? (
        <>
          <h2 className={styles.header2}>1. Zapisanie współrzędnych wektorów AC i CB</h2>
          <div className={styles.math}>
            <MathJax
              math={String.raw`$$\vec{AC}=[\color{tomato}x+\color{#1E90FF}1, \color{tomato}y+\color{#1E90FF}8]$$`}
            />
          </div>
          <div className={styles.math}>
            <MathJax
              math={String.raw`$$\vec{CB}=[\color{seagreen}5-\color{tomato}x, \color{seagreen}4-\color{tomato}y]$$`}
            />
          </div>
        </>
      ) : null}

      {isHide == 2 ? (
        <button className={styles.btn} onClick={() => handleIncrement()}>
          Dalej
        </button>
      ) : null}
      {isHide > 2 ? (
        <>
          <h2 className={styles.header2}>2. Sporządzenie układu równań wektorów</h2>
          <p>Równość z treści zadania możemy podzielić na 2 części i zapisać jako układ równań</p>
          <div className={styles.math}>
            <MathJax
              math={String.raw`$$\cases{x+1=\color{#1E90FF}5(5-x)\cr y+8=\color{#1E90FF}5(4-y)}$$`}
            />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{x+1=25-5x\cr y+8=20-5y}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{6x=24\cr 6y=12}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{x=4\cr y=2}$$`} />
          </div>

          <h2 className={styles.header2}>Odpowiedź:</h2>

          <div className={styles.math}>
            <MathJax math={String.raw`$$C=(4, 2)$$`} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default Ex3
