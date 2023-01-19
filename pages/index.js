import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

/*
  Initial loadup page will take the main website information...

  General overview of the projects, who I am, and what I'm interested in. 

  Links to my GitHub, GitLab, and social media are linked within my website. 

*/

export default function Home() {
  return (
    <>
    <div className={styles.fullpage}>
      <div className={styles.container}> 
        <div className={styles.portfolio}>
          <h3 className={styles.title}>
            Welcome to my website!
          </h3>
          <br></br>
          <p>
            I've put together a collection of personal projects and interests for 
            people to check out as well as for my own benefit. 
          </p>

          <p><strong>Here are links to my external portfolio:</strong></p>
          <ul>
            <li><a href="https://github.com/satpat2590" className={styles.undaline}><p>Github</p></a></li>
            <li><a href="linkedin.com/satpat2590" className={styles.undaline}><p>LinkedIn</p></a></li>
            <li><a href="gitlab.com/satpat2590" className={styles.undaline}><p>Gitlab</p></a></li>
          </ul>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.generaldesc}>
          <h3>A little about me...</h3>
          <ul>
            <li>I love traveling and learning about new cultures</li>
            <li>My curiosity extends to any field! I'm particularly intrigued by History and the Arts</li>
            <li>My passion for computers started when I was in High School, primarily to play PC games</li>
              <ul>
                <li>I loved consoles as well, I started off with a Gameboy Advance!</li>
                <li>My first real programming language was Scratch, which I used to build an "actions" based game in my senior year of High School</li>
              </ul>
          </ul>
        </div>
      </div>

      <div className={styles.lifecolumn}>
          <h3 className={styles.lifetitle}>Get to know me!</h3>
          <div className={styles.lifeprojects}>
            <div className={styles.phototry}>
              <button className={styles.button89} role="button">
                <Image src="/photo.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Photos</h3></button>
            </div>
            <div className={styles.phototry}>
              <Link href="/projects/poetry">
              <button className={styles.button89} role="button"> 
                <Image src="/book.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Poetry</h3></button>
              </Link>
            </div>
          
          <div className={styles.phototry}>
              <Link href="/projects">
              <button className={styles.button89} role="button"> 
                <Image src="/images/github.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>Projects</h3></button>
              </Link>
            </div>
            <div className={styles.phototry}>
              <Link href="/introzone">
              <button className={styles.button89} role="button"> 
                <Image src="/images/github.svg"
                  alt="Book image"
                  height="100"
                  width="100"
                ></Image><h3>CS Blobs</h3></button>
              </Link>
            </div>
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
