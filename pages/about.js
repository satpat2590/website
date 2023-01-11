import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../components/about.module.css';

export default function About() {
    return (
        <div>
            <Head>
                <title>General About Page!</title> 

            </Head>

         <section className={styles.fullpage}>

            <div className={styles.sectiondiv}>
            <h2><strong>Who am I?</strong></h2>
            <br></br>
            <p>
            My name is Satyam Patel and I'm a current Senior at Lehigh University studying Computer Science and Business. I enjoy learning about different technologies and their applications, especially in this age of constant growth. 
            <br></br><br></br>
            My general hobbies/passions include reading, fitness, traveling, and building tools. 
            </p>
         </div>

         <div className={styles.sectiondiv}>
            <h2><strong>Educational Background</strong></h2>
            <br></br>
            <h4>Courses Taken:</h4>
            <ul>
               <li>Design & Analysis of Algorithms</li>
               <li>Operating Systems & Design</li>
               <li>Programming Languages</li>
               <li>Foundations of Robotics</li>
               <li>Software Engineering</li>
               <li>Financial & Managerial Accounting</li>
               <li>Microeconomics</li>
               <li>Supply Chain Management</li>
            </ul>
            <br></br>
            <h4>Languages:</h4>
            <ul>
               <li>C/C++ (Intermediate)</li>
               <li>JavaScript (Intermediate)</li>
               <li>Python (Intermediate)</li>
               <li>SQL (Intermediate)</li>
               <li>HTML/CSS (Intermediate)</li>
               <li>Linux/Bash (Intermediate)</li>
               <li>Rust (Beginner)</li>
            </ul>
            <br></br>
            <h4>Tools/Frameworks:</h4>
            <ul>
               <li>AWS (Intermediate)</li>
               <li>ReTool (Intermediate)</li>
               <li>OpenThread (Beginner)</li>
               <li>React (Beginner)</li>
            </ul>

         </div>
        </section>

        </div>

    );
}