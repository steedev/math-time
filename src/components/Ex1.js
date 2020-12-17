import React, { useState, useCallback } from 'react'
import MathJax from 'react-mathjax-preview'
import styles from './Ex1.module.scss'

const Ex1 = () => {
  const [isHide, setIsHide] = useState(1)

  const handleIncrement = useCallback(() => {
    setIsHide(isHide + 1)
  }, [isHide])

  const handleFull = useCallback(() => {
    setIsHide(10)
  }, [isHide])

  return (
    <>
      <h1>Zadanie 1</h1>
      <button className={styles.Mbtn} onClick={() => handleFull()}>
        Zobacz całe zadanie
      </button>

      <p>
        Znadź współrzędne obrazu punktu C = (20, 25) w symetrii osiowej względem prostej
        przechodządzej przez punkty A = (6, 2) i B = (3, -4)
      </p>

      <div style={{ textAlign: 'center', marginTop: '70px', marginBottom: '70px' }}>
        <iframe
          scrolling='no'
          src='https://www.geogebra.org/material/iframe/id/bpvfhsxg/width/500/height/500/border/888888/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false'
          width='500px'
          height='500px'
        />
      </div>

      {isHide == 1 ? (
        <button className={styles.btn} onClick={() => handleIncrement()}>
          Dalej
        </button>
      ) : null}
      {isHide > 1 ? (
        <>
          <div>
            <h2 className={styles.header2}>1. Znalezienie równania prostej AB</h2>
            <p>
              Równanie prostej przechodzącej przez 2 punkty możemy wyznaczyć na kilka sposobów. Ja
              przedstawię Wam 2, które uważam za najlepsze
            </p>
          </div>

          <h3 className={styles.header3}>Sposób 1</h3>
          <p>Wyznaczamy je ze wzoru:</p>
          <div className={styles.math}>
            <MathJax
              math={String.raw`$$\color{#1E90FF} {\bf(y-y_A)(x_B-x_A)-(y_B-y_A)(x-x_A)=0}$$`}
            />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$(y-2)(3-6)-(-4-2)(x-6)=0$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$-3y+6+6x-36=0$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$y=2x-10$$`} />
          </div>

          <h3 className={styles.header3}>Sposób 2</h3>
          <p>Poprzez rozwiązanie układu równań:</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf y=ax+b}$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{2=6a+b\cr-4=3a+b}$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{6=3a\cr b=2-6a}$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{a=2\cr b=-10}$$`} />
          </div>

          <div className={styles.math}>
            <MathJax math={String.raw`$$y=2x-10$$`} />
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
          <h2 className={styles.header2}>
            2. Znalezienie prostej prostopadłej do prostej AB przechodzącej przez punktu C = (20,
            25)
          </h2>

          <p>
            Korzystając z równianie 2 prostych prostopadłych najpierw obliczymy wyznaczymy równanie
            ogólne, a następnie podstawiając jeden z punktów zawierających się w równaniu prostej
            obliczymy jest postać całościową
          </p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf a_1a_2=-1}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$a_2=-{1 \over 2}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$y=-{1 \over 2}x+b$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$25=-10+b$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$b=35$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$y=-{1 \over 2}+35$$`} />
          </div>
        </>
      ) : null}

      {isHide == 3 ? (
        <button className={styles.btn} onClick={() => handleIncrement()}>
          Dalej
        </button>
      ) : null}
      {isHide > 3 ? (
        <>
          <h2 className={styles.header2}>3. Znalezienie punktu przecięcia się prostych</h2>

          <p>
            Rozwiązując układ równań 2 prostych wyznaczymy punkt P, który będzie ich przecięciem
          </p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{y=2x-10\cr y=-{1 \over 2}x+35}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$2x-10 =-{1 \over 2}x+35$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$4x-20=-x+70$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$x=18$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$y=2x-10$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$y=26$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$P=(18, 26)$$`} />
          </div>
        </>
      ) : null}

      {isHide == 4 ? (
        <button className={styles.btn} onClick={() => handleIncrement()}>
          Dalej
        </button>
      ) : null}
      {isHide > 4 ? (
        <>
          <h2 className={styles.header2}>4. Obraz punktu C względem punktu P</h2>

          <p>Korzystając z przesunięcia o wektor możemy wyznaczyć punkt C`</p>

          <p>Wyznaczamy wektor CP [ C = (20, 25) P = (18, 26) ]</p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf\vec{CP}=[P_x-C_x, P_y-C_y]}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\vec{CP}=[18-20, 26-25]$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\vec{CP}=[-2, 1]$$`} />
          </div>

          <p>Obliczamy przesunięcie o wektor</p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$C^I=P+\vec{CP}=(18, 26)+[-2, 1]=(16, 27)$$`} />
          </div>

          <h2 className={styles.header2}>Odpowiedź:</h2>
          <div className={styles.math}>
            <MathJax math={String.raw`$$C^I=(16, 27)$$`} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default Ex1
