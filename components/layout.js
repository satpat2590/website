import Header from './header';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Script from 'next/script';
import Header2 from '../components/header2';

export default function Layout ( { children }) {

    return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
      <Header />

        <main>
          <div className='pageload'>
            {children}
          </div>
        </main>

      <footer>
        <div className={styles.footerfull}>
          <a
            href='https://github.com/satpat2590' 
            className={styles.logo}
          >
            <img src="/github-mark.svg" alt="Sat's Logo" className={styles.logo}/>
          </a>
          <a
            href='https://www.linkedin.com/in/satyampatel56/'  
            className={styles.logo}
          >
            <img src="/linkedin.svg" alt="Sat's Logo" className={styles.logo}/>
          </a>
          <a
            href='https://www.instagram.com/satpat_/'  
            className={styles.logo}
          >
            <img src="/instagram.svg" alt="Sat's Logo" className={styles.logo}/>
          </a>
        </div>
      </footer>


    <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid black;
          background-color: rgba(52, 168, 83, 0.2);
        }
        
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .pageload {
          margin: 2rem 2rem;
          background-color: rgba(245,245,220,0.5);
          background-size: cover;
        }

        main {
          background-color: rgba(245,245,220,0.5);
          background-size: cover;
          margin: 0;
          border-top: 1px solid black;
          position: relative;
          z-index: 1;

        }
    `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: rgba(245,245,220,0.7);
          background-size: cover;
        }
    `}</style>
        </>
    );
}
