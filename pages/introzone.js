
import styles from '../components/intro.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Intro() {
    return (
        <>
            <div className={styles.fullpage}>

                <a href="https://github.com/satpat2590/algorithms">
                    <div className={styles.container}>
                        <h3>Algorithms</h3>
                        <div className={styles.desc}>
                            Check out our GitHub repository with plenty of algorithms
                        </div>
                        <div className={styles.date}>
                            2/27/2023
                        </div>
                    </div>
                </a>
                
                <Link href="/blobs/golang">
                    <div className={styles.container}>
                        <h3>Go Web Scraper</h3>
                        <div className={styles.desc}>
                            Learn how to scrape online APIs using GoLang modules
                        </div>
                        <div className={styles.date}>
                            3/12/2023
                        </div>
                    </div>
                </Link>

                <Link href="/blobs/pythonscrape">
                    <div className={styles.container}>
                        <h3>Python Web Scraper</h3>
                        <div className={styles.desc}>
                                Learn how to scrape Wikipedia and other online APIs using Python
                        </div>
                        <div className={styles.date}>
                                TBD
                        </div>
                    </div>
                </Link>

                <Link href="/blobs/cstructs">
                    <div className={styles.container}>
                        <h3>C Structs</h3>
                        <div className={styles.desc}>
                                Explanation of C Structs as well as examples
                        </div>
                        <div className={styles.date}>
                                3/12/2023
                        </div>
                    </div>
                </Link>

                <Link href='/blobs/npm'>
                    <div className={styles.container}>
                        <h3>NPM/Express Basics</h3>
                        <div className={styles.desc}>
                                Create a node project and use express to send text to a webpage
                        </div>
                        <div className={styles.date}>
                                3/12/2023
                        </div>
                    </div>
                </Link>

                <Link href='/blobs/website'>
                    <div className={styles.container}>
                        <h3>Website Creation</h3>
                        <div className={styles.desc}>
                                Learn how to create this portfolio website using JS, HTML, and CSS 
                        </div>
                        <div className={styles.date}>
                                TBD
                        </div>
                    </div>
                </Link>

            </div>
        </>

    );
}