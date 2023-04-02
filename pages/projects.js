import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../components/project.module.css'

export default function Projects() {
    return (
        <>
            
        <section className={styles.fullpage}>
        <div className={styles.sectiondiv}>
            <Link href="/projects/os" className={styles.link}>
                <h2 className={styles.buttonbouncy}>OS Design</h2>
            </Link>
            <br></br>

            <p>
                Operating Systems are different configurations of your computer which enable communication between the
                user and the actual system. Operating System design must include these 5 features:
            </p>
            <ul>
                <li>Concurrency</li>
                <li>Persistence</li>
                <li>Resource Management</li>
                <li>Virtualization</li>
                <li>Security</li>
            </ul>
            <p>
                Through this project of mine assigned by my college class (Operating Systems and Design), I was able to
                implement each of these 5 features within a client/server social media application.
                <br></br>
                Each phase will delve into the importance of the feature in reference.
            </p>
        </div>

        <div className={styles.sectiondiv}>
            <Link href="/projects/timeline" className={styles.link}>
                <h2 className={styles.buttonbouncy}>World Timeline Project</h2>
            </Link>
            <br></br>
            <p>In an effort to understand the scope of humanity and life within this planet spanning billions of years,
                I've decided to map out historically important and interesting points in a world timeline.
                <br></br><br></br>
                My fascination with humanity extends to a mutual interest in philosophy, psychology, literature, and
                politics. My preliminary goals with this project was to map out human evolution and de-evolution
                throughout the ages through a timeline of Human-based events. However, my interests extend to human
                consciousness and psychology, which is shared by all organisms.
                <br></br><br></br>
                So, the goal of this project now is to map out the history of our living Earth which will depict the
                story of Humanity as well.
            </p>
        </div>

        <div className={styles.sectiondiv}>
            <Link href="/projects/aimade" className={styles.link}>
                <h2 className={styles.buttonbouncy}>AI Creations!</h2>
            </Link>
            <br></br>
            <p>
                With the advent of AI, creating new and interesting things has become much easier. I've decided to 
                use ChatGPT to create various JavaScript functions that can be displayed on this website, and also 
                the prompts used to do so. 
                <br></br><br></br>
                This website is currently written in React JS, so it incorporates a different understanding of JavaScript
                capabilities. For example, simply asking ChatGPT to create a JS function that manipulates certain HTML 
                elements within your website won't work because React JS is a framework that uses JSX, which is a variant 
                of HTML/JS. 
                <br></br><br></br>
                Hopefully these prompts and functions will be able to help you in your own projects, both in upgrading
                pre-existing designs or to start a new design completely! 
            </p>
        </div>

        <div className={styles.sectiondiv}>
            <Link href="projects/poetry" className={styles.link}>
                <h2 className={styles.buttonbouncy}>Personal Poetry</h2>
            </Link>
            <br></br>
            <p>
                As a Sophomore in High School, I began to use my collection of experiences and emotions to create
                various works of poetry.
                <br></br><br></br>
                I hope that through these words of mine, you'll also be able to share in my love of artistic literature.
            </p>
            <br></br>
        </div>

    </section>
    </>

    );
}