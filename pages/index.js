import Head from 'next/head';
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
      <main>
      <div className={styles.fullpage}>
      <div className={styles.container}> 

        <div className={styles.portfolio}>
        <h3 className={styles.title}>
          Welcome to my website!<br></br><br></br> I've put together a collection of personal projects and interests for 
          people to check out as well as for my own benefit. 
        </h3>

          <h3>Here are links to my external portfolio:</h3>
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
            <li>My passion for computers started when I was in High School, primarily to play PC games</li>
              <ul>
                <li>I built my first computer in my Senior year of High School</li>
                <li>My first real programming language was Scratch, which I used to build an "actions" based game in my senior year of High School</li>
              </ul>
            <li>I love traveling and learning about new cultures</li>
            <li>My curiosity extends to any field! I'm particularly intrigued by History and the Arts</li>
          </ul>
        </div>

        <div className={styles.vertical}></div>

        <div className={styles.lifeprojects}>
          <h3 className={styles.lifetitle}>Life Projects</h3>


          <div className={styles.phototry}>
            <button className={styles.button89} role="button"><Image src="/photo.svg"
                alt="Book image"
                height="100"
                width="100"
              ></Image><h3>Photography</h3></button>
          </div>
          <div className={styles.phototry2}>
            <Link href="/projects/poetry">
          <button className={styles.button89} role="button">              <Image src="/book.svg"
                alt="Book image"
                height="100"
                width="100"
              ></Image><h3>Poetry</h3></button>
            </Link>
          </div>
        </div>
  
      </div>

        <div className={styles.grid}>

          <Link href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>More information on me, my academics, and my overall life journey!</p>
          </Link>
<hr></hr>

          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Take a look at some of the projects I've worked on or are currently in the progress of working on</p>
          </Link>

          <Link href="/introzone" className={styles.card}>
            <h3>CS Beginner/Refresh Zone &rarr;</h3>
            <p>Discover some small projects with extensive documentation meant to entice learning and also refreshing concepts</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>
              Have any questions or wish to send me a message? Click here to do so! 
            </p>
          </Link>
        </div>
        </div>
      </main>
  );
}
