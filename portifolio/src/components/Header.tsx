import Image from "next/image";
import styles from "./styles/header.module.css";
import eu from "../../public/eu.png";
import js from "../../public/javascript_original_logo_icon_146455.png";
import ts from "../../public/typescript_original_logo_icon_146317.png";
import html from "../../public/html_original_wordmark_logo_icon_146478.png";
import css from "../../public/css_original_wordmark_logo_icon_146576.png";
import nodejs from "../../public/nodejs_original_wordmark_logo_icon_146412 (1).png";
import next from "../../public/nextjs_icon_213852.png";
import prisma from "../../public/prisma_icon_132076.png";
import react from "../../public/brand_react_icon_158742.png";
import git from "../../public/git.png";
import nestLogo from "../../public/nestjs_icon.png"

export default function Header() {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <Image className={styles.img} src={eu} alt={""} priority />
        <p>Bem vindo ao meu Portifolio, sou o Ednilson Fragoso.</p>
      </div>
      <div className={styles.right}>
        <h2>Skills</h2>
        <div className={styles.rightFigure}>
          <div className={styles.rightFigureItem}>
            <Image src={js} alt={"javascript"} title="JavaScript" />
            <p>Javascript</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={ts} alt={"typescript"} title="Typescript" />
            <p>Typescript</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={html} alt={"html"} title="HML5" />
            <p>HTML5</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={css} alt={"css"} title="CSS3" />
            <p>CSS3</p>
          </div>
        </div>
        <h2>Tools</h2>
        <div className={styles.rightFigure}>
          <div className={styles.rightFigureItem}>
            <Image src={git} alt={"gitIcon"} title="git" />
            <p>Git</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={nodejs} alt={"NodeJs"} title="NodeJs" />
            <p>NodeJs</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={next} alt={"NextJs"} title="NextJs" />
            <p>Nextjs</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={react} alt={"react"} title="Reactjs" />
            <p>React</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={prisma} alt={"prisma"} title="prismaORM" />
            <p>Prisma</p>
          </div>

          <div className={styles.rightFigureItem}>
            <Image src={nestLogo} alt={"nest"} title="NestJs" />
            <p>NestJs</p>
          </div>

        </div>
      </div>
    </div>
  );
}
