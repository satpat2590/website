import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/photo.module.css';


export default function Photo() {

    return (
        <>
            <div className={styles.gallery}>
                <Image src="/images/coliseum.jpg"
                    height="300"
                    width="300"
                    alt="Roman Coliseum"
                ></Image>
                <Image src="/images/piazzatrevi.jpg"
                    height="300"
                    width="300"
                    alt="Piazza de Trevi"
                ></Image>
                <Image src="/images/nypark2.jpg"
                    height="300"
                    width="300"
                    alt="Letchworth State Park, NY"
                ></Image>
                <Image src="/images/nypark.jpg"
                    height="300"
                    width="300"
                    alt="Letchworth State Park, NY"
                ></Image>
                <Image src="/images/newhamp.jpg"
                    height="300"
                    width="300"
                    alt="White Mountains, NH"
                ></Image>
                <Image src="/images/woods.jpg"
                    height="300"
                    width="300"
                    alt="Hucklebarney State Park"
                ></Image>
                <Image src="/images/pizatower.jpg"
                    height="300"
                    width="300"
                    alt="Tower of Piza"
                ></Image>
            </div>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                background-color: #34a853;
                background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
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