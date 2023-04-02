import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Calender from '../components/calender';
import NameDescription from '../components/NameDescription';

export default function Home() {
  return (
    <>
    <div className={styles.fullpage}>
      <div className={styles.introduction}>
          <div className={styles.image}>
            <Image src="/personalsitting.jpg"
              alt="Image of me!"
              height="300"
              width="200"
            ></Image>
          </div>
          <div className={styles.personal}>
            <p>Satyam Patel</p>
            <p className={styles.title}>Developer, Poet, and Lifelong Student</p>
          </div>
        <div className={styles.calender}>
          <Calender/>
        </div>
      </div>

          <div className={styles.lifeprojects}>
            <div className={styles.cards}>
              <Link href="/photo">
              <button className={styles.button89} role="button">
                <Image src="/photo.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Photos</h3></button>
              </Link>
            </div>
            <div className={styles.cards}>
              <Link href="/projects/poetry">
              <button className={styles.button89} role="button"> 
                <Image src="/book.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Poetry</h3></button>
              </Link>
            </div>
          
          <div className={styles.cards}>
              <Link href="/projects">
              <button className={styles.button89} role="button"> 
                <Image src="/images/github.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Projects</h3></button>
              </Link>
            </div>
            <div className={styles.cards}>
              <Link href="/introzone">
              <button className={styles.button89} role="button"> 
                <Image src="/images/code.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>CS Blobs</h3></button>
              </Link>
            </div>
            </div>
    </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        @media (max-width: 700px) {
          html,
          body {
            padding: 0; 
            margin: 0;
            overflow-x: hidden;
          }
        }
    `}</style>
    </>
  );
}
