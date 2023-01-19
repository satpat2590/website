
import styles from '../components/intro.module.css';
import React from 'react';

export default function Intro() {
    return (
        <>
            <div className={styles.fullpage}>
                <div className={styles.algo}>
                    <h3>Various Algorithms</h3>
                    <p>
                        Want to learn about different algorithms, or need a refresher? Click here for an
                        entire library full of various data structures and algorithms! 

                        Each algorithm graciously provides you with examples on how to run them,
                        as well as more theoretical explanations such as runtime calculations 
                        and optimization. 

                        <a href="https://github.com/satpat2590/algorithms">
                            Click here for some excitement!
                        </a>
                    </p>
                </div>


                <div className={styles.go}>
                    <h3>General Tips for Go Programming</h3>
                    <p>
                        Golang is a cool language which takes the beauty of C++, and the 
                        Chad-like behavior of JavaScript, and bundles it all together pretty nicely. 

                        In terms of getting started, Golang is also easy and more superior. 
                        Everything for Go is packages, meaning each "main" or main.go file you create 
                        will be within the package you create under name "main". 

                        Why is this easier? By creating an initial package for the program, it becomes 
                        easier to distribute the overall build. 
                        
                        Adding header files in C programs relies on either including it within the other 
                        C program. However, you can't add dependency tracking
                        unless you specify all connected files and shared object files explicitly.

                        Golang automatically tracks all dependencies within the config files, so that it
                        is all maintained neatly. 

                        Thank you, Google.

                    </p>
                </div>


                <div className={styles.py}>
                    <h3>General Tips for Python Programming</h3>
                </div>


                <div className={styles.c}>
                    <h3>General Tips for C Programming</h3>
                </div>


                <div className={styles.website}>
                    <h3>How to Make a Website</h3>
                </div>
            </div>
        
        
        
        
        </>

    );
}