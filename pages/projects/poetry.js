import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Poetcard from '../../components/poetcard';

export default function Poetry() {
    return (
        <div>
            <Head>
                <title></title> 

            </Head>
            <Poetcard/>

        </div>

    );
}