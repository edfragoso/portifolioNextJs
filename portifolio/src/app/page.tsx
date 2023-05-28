import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Languages } from "@/components/Languages";
import { Repository } from "../api/Repository";
import Link from "next/link";
import iconGithub from '../../public/placa-do-github.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Desenvolvedor web full stack</h1>
      </div>
      <Header />
      <div className={styles.card}>
        <h2>Ferramentas</h2>
        <p>NodeJs</p>
        <p>Next.js</p>
        <p>Prisma</p>
        <p>React</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image src={iconGithub} alt={"iconGithub"} />
          <Repository />
          {/* <Link href={"https://github.com/edfragoso"}>github</Link> */}
        </div>
        <div className={styles.card}>
          <h2>Card2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis error tempore nostrum dolorum placeat ex quos molestiae
            dicta accusantium odio impedit consectetur quasi, unde rem tempora
            illo libero delectus.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Card3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            blanditiis error tempore nostrum dolorum placeat ex quos molestiae
            dicta accusantium odio impedit consectetur quasi, unde rem tempora
            illo libero delectus.
          </p>
        </div>
      </div>
    </main>
  );
}
