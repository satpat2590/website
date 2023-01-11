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
            <br></br>
            <Link href="/projects/os" className={styles.link}>
                <h2 className={styles.buttonbouncy}>Operating System Design</h2>
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
            <Link href="timeline.html" className={styles.link}>
                <h2 className={styles.buttonbouncy}>World Timeline Project</h2>
            </Link>
            <br></br>
            <p>In an effort to understand the scope of humanity and life within this planet spanning billions of years,
                I've decided to map out historically important and interesting points in a world timeline.
                <br></br>
                My fascination with humanity extends to a mutual interest in philosophy, psychology, literature, and
                politics. My preliminary goals with this project was to map out human evolution and de-evolution
                throughout the ages through a timeline of Human-based events. However, my interests extend to human
                consciousness and psychology, which is shared by all organisms.
                <br></br>
                So, the goal of this project now is to map out the history of our living Earth which will depict the
                story of Humanity as well.
            </p>
        </div>

        <div className={styles.sectiondiv}>
            <Link href="lutron.html" className={styles.link}>
                <h2 className={styles.buttonbouncy}>Lutron Device Diagnostics</h2>
            </Link>
            <br></br>
            <p>
                Through a Lutron sponsored college co-op, I was lucky enough to work on an embedded device to cloud data
                pipeline within a team for roughly 10 months. Our project consisted of using various tools to
                autonomously "collect" device (lights, dimmers, buttons, etc...) diagnostic data, which would then
                signal the rest of the pipeline to handle the data.
                <br></br>
                We sought to use Google's OpenThread libraries to allow communication between the devices and the
                processor. Each node connected to the thread network would represent a specific device, and data would
                be aggregated from each node, eventually leading into a push to the processor or a pull from the
                processor itself.
                <br></br>
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
                <br></br>
                I hope that through these words of mine, you'll also be able to share in my love of artistic literature.
            </p>
            <br></br>
        </div>

    </section>
    </>

    );
}