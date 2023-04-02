import React from 'react';
import Image from 'next/image';
import FootprintData from '../../components/footprint';
import styles from '../../styles/Home.module.css';


export default function Aimade() {
    return (
        <>
            <div className={styles.aipage}>
                <h1>AI Creations!</h1>
                <p>Below are all creations made from prompting GPT-3.5-Turbo and GPT-4 for React components. I'll go over 
                    the prompting process and what I specifically said to create these components. 
                    <br></br><br></br>
                    The basic format of the prompts is to ask ChatGPT (or any QA generative model which has Codex-like capabilities) 
                    to create a React component. Yes, it's really that simple. A good note to point out is that GPT-4 is able 
                    to provide much more concise code, along with very clearly stated comments. You are able to do this with the 
                    3.5-Turbo, however, your prompts must be much more specific and detailed. 
                    <br></br><br></br>
                </p>
                <h2>Ecological Footprint Data</h2>
                <p>Would you like to pull data from API endpoints? Grabbing data from endpoints never got easier than this!
                    Ask ChatGPT to basically: 
                    <br></br><br></br>
                    "Create a React component that will pull data from the API endpoint: 'https://api.footprintnetwork.org/v1/data/all/2000'
                    and display the data in a table format. The table should have the following columns: 'Country', 'Population', 'GDP', 'HDI'. 
                    Create the table with in-line CSS styling which has the color scheme of [color] and [color]."
                    <br></br><br></br>
                    The component will look something like this (however with some slight tweaks from myself):
                </p>
                <FootprintData/>

            </div>
        </>

    );
};
