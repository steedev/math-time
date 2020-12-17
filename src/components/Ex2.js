import React, { useState, useCallback } from 'react'
import MathJax from 'react-mathjax-preview'
import styles from './Ex1.module.scss'

const Ex2 = () => {
  const [isHide, setIsHide] = useState(1)

  const handleIncrement = useCallback(() => {
    setIsHide(isHide + 1)
  }, [isHide])

  const handleFull = useCallback(() => {
    setIsHide(10)
  }, [isHide])

  return (
    <>
      <h1>Zadanie 2</h1>
      <button className={styles.Mbtn} onClick={() => handleFull()}>
        Zobacz całe zadanie
      </button>

      <p>
        Znajdź równanie stycznej l do okręgu C o równaniu
        <div className={styles.math}>
          <MathJax math={String.raw`$$x^2+y^2-4x+6y-12=0$$`} />
        </div>
        w punkcie A(6, 0). Napisz równanie okręgu symetrycznego do okręgu C względem prostej l
      </p>

      <div style={{ textAlign: 'center', marginTop: '70px', marginBottom: '70px' }}>
        <iframe
          scrolling='no'
          src='https://www.geogebra.org/material/iframe/id/p4kjzxpd/width/500/height/500/border/888888/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false'
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
          <h2 className={styles.header2}>1. Sprowadzenie równania okręgu do postaci kanonicznej</h2>
          <p>
            Aby szybko odczyć współrzędne środka okręgu oraz jego promień, równanie postaci ogólnej
            musimy sprowadzić do postaci kanonicznej
          </p>

          <h3 className={styles.header3}>Postać ogólna</h3>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf x^2+y^2-2ax-2by+c}$$`} />
          </div>

          <h3 className={styles.header3}>Postać kanoniczna</h3>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{tomato} {\bf (x-a)^2+(y-b)^2=r^2}$$`} />
          </div>

          <p>Obliczmy współczynniki</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\cases{-2a=-4\cr -2b=6 \cr c=-12} => $$`} />
            <MathJax math={String.raw`$$\cases{a=2\cr b=-3 \cr c=-12}$$`} />
          </div>

          <p>Czas na środek okręgu</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf S=(a, b)}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$S=(2, -3)$$`} />
          </div>

          <p>Aby obliczyć promień podstawiamy do wzoru</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf r^2=a^2+b^2-c>0}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$r^2=4+9+12>0$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$r=5$$`} />
          </div>

          <p>Łącząc wszystko w jedną całość otrzymujemy</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$(x-2)^2+(y+3)^2=25$$`} />
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
            2. Wyznaczenie równania stycznej do okręgu o środku S w punkcie A
          </h2>

          <p>
            Obliczając wektor SA będziemy mogli wyznaczyć ogólne równanie stycznej l, następnie
            podstawiając jedenj z punktów do niej należących obliczymy równanie całościowe
          </p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$\vec{SA}=[4,3]$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{#1E90FF} {\bf ax+by+c=0}$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$\color{tomato}4x+\color{tomato}3y+c=0$$`} />
          </div>

          <p>Punkt A(6, 0) należy do tej prostej, dlatego też dzięki niemu dokończymy równanie</p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$4*\color{tomato}6+3*\color{tomato}0=-c$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$c=-12$$`} />
          </div>

          <p>Prosta l ma zatem równanie</p>
          <div className={styles.math}>
            <MathJax math={String.raw`$$l: 4x+3y-24=0$$`} />
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
          <h2 className={styles.header2}>3. Napisanie równania okręgu symetrycznego</h2>

          <p>
            Jesteśmy już blisko końca. Wiedza o wektorach z pierwszego zadania pozwoli nam sprawnie
            obliczyć środek nowego okręgu. Promienia nie musimy obliczać, ponieważ okręgi są
            symetryczne względem siebie. Oznacza to, że w obu przypadkach promień jest taki sam
          </p>

          <div className={styles.math}>
            <MathJax math={String.raw`$$S^I=P+\vec{SA}=(6, 0)+[4, 3]=(10, 3)$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$(x-10)^2+(y-3)^2=25$$`} />
          </div>

          <h2 className={styles.header2}>Odpowiedź:</h2>

          <div className={styles.math}>
            <MathJax math={String.raw`$$l: 4x+3y-24=0$$`} />
          </div>
          <div className={styles.math}>
            <MathJax math={String.raw`$$(x-10)^2+(y-3)^2=25$$`} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default Ex2
