import styles from './poetcard.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Poetcard( {children} ) {
    return (
       <>
        <div className={styles.highlights}>
            <Link href="./poems/darkness" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Darkness (2020)</h2>
                        <p>There is no shame in being found within it</p>
                        <Image src="/images/poem-icons/darkness.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/deteriorating" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Deteriorating (2019)</h2>
                        <p>Who wins in a race between our ambitions <br></br>and our consciousness?</p>
                        <Image src="/images/poem-icons/deteriorating.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/philosophy" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Philosophy I (2021)</h2>
                        <p>First poem about learnings in my <br></br>personal philosophy</p>
                        <Image src="/images/poem-icons/philosophy.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/unattainable" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Unattainable (2018)</h2>
                        <p>How will you know if you don't try?</p>
                        <Image src="/images/poem-icons/unattainable.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/split" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Split (2020)</h2>
                        <p>How can we let ambition grow our <br></br>personal selves?</p>
                        <Image src="/images/poem-icons/split.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/definition" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Definition (2017)</h2>
                        <p>Depiction of a classroom and the value of words</p>
                        <Image src="/images/poem-icons/definition.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/philosophy2" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Philosophy II (2021)</h2>
                        <p>Second poem about learnings in my <br></br>personal philosophy</p>
                        <Image src="/images/poem-icons/philosophy.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/narcissism" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Narcissism (2021)</h2>
                        <p>Can you truly define success in a <br></br>general sense?</p>
                        <Image src="/images/poem-icons/narcissism.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

            <Link href="./poems/obscurity" className={styles.biglink}>
                <div className={styles.card}>
                    <div className={styles.cardinfo}>
                        <h2>Obscurity (2021)</h2>
                        <p>Do your senses deceive you or is it a calling?</p>
                        <Image src="/images/poem-icons/obscurity.svg"
                        height="50"
                        width="50"
                        alt="Darkness"
                        ></Image>
                    </div>
                </div>
            </Link>

        </div>
        </>

    );
}