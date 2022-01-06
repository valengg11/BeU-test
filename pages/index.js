import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BeU Test</title>
        <meta name="description" content="Frontend code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    </div>
  )
}
