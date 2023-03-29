import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/about.module.css';

export default function About() {
    return (
        <div className={styles.mainn}>
         <section className={styles.fullpage}>

         <div className={styles.sectiondiv}>
            <h2><strong>Who am I?</strong></h2>
            <p>
            My name is Satyam Patel and I'm a current Senior at Lehigh University studying Computer Science and Business. I enjoy learning about different technologies and their applications, especially in this age of constant growth. 
            <br></br><br></br>
            My general hobbies/passions include reading, fitness, traveling, and building tools. 
            </p>
         </div>
         <div className={styles.sectiondiv}>
          <h2>A little about me...</h2>
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

         <div className={styles.sectiondiv}>
            <h2><strong>Educational Background</strong></h2>
            <p>Brief list of courses taken:</p>
            <ul>
               <li>Systems Software/Computer Architecture</li>
               <li>Accounting Information Systems</li>
               <li>Theory and Design of Algorithms</li>
               <li>Operating Systems</li>
            </ul>
            <br></br>
            <p>
               My general education is simply in Business and Computer Science
               with a developed interest in application building as well as database
               management using cloud technologies. 
            </p>

         </div>
        </section>

        </div>

    );
}