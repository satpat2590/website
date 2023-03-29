import React from 'react';
import Image from 'next/image';
import App from '../../components/footprintnetworkdata';
import FootprintData from '../../components/footprint';
import styles from '../../components/os.module.css'


export default function Lutron() {
    return (
        <>
        <div className={styles.introduction}>
            <h1>Footprint Network Data</h1>
        </div>
        <FootprintData />
        </>

    );


};
