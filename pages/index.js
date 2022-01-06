import Head from "next/head";
import Image from "next/image";
import Button1 from "../components/buttons/Button1";
import Button2 from "../components/buttons/Button2";
import Button3 from "../components/buttons/Button3";
import Button4 from "../components/buttons/Button4";
import DarkBackBtn from "../components/buttons/LightBackBtn";
import LightBackBtn from "../components/buttons/LightBackBtn";
import TitleH1 from "../components/typography/TitleH1";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BeU Test</title>
        <meta name="description" content="Frontend code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TitleH1 title="Hola" />
        <Button1 text="Botoncito" />
        <Button2 text="Boton" />
        <Button3 text="Boton" />
        <Button4 text="Boton" />
        <br/>
        <LightBackBtn/>
        <DarkBackBtn/>
      </div>
    </div>
  );
}
