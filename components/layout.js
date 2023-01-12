import Header from './header';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function Layout ( {children }) {

    return (
        <>
      <Header />

        <main>{children}</main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/logo.png" alt="Sat's Logo" className={styles.logo} />
        </a>
      </footer>


    <style jsx>{`
        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
    `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
    `}</style>
        </>
    );
}
