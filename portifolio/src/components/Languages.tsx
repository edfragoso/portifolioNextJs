"use client";
import { useEffect, useState } from "react";
import styles from "./styles/header.module.css";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

export function Languages() {
  const [repository, setRepository] = useState<Repository[]>([]);
  const [totalItemsJS, setTotalItemsJS] = useState<number>(0);
  const [totalItemsTS, setTotalItemsTS] = useState<number>(0);
  const [totHtml, setTotHtml] = useState<number>(0);
  const [totEJS, setTotEJS] = useState<number>(0);

  const accessToken = "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";

  useEffect(() => {
    fetch("https://api.github.com/users/edfragoso/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const repositoriesJS = data.filter(
            (repo: Repository) => repo.language === "JavaScript"
          );
          const repositoriesTS = data.filter(
            (repo: Repository) => repo.language === "TypeScript"
          );
          const repositoryHtml = data.filter(
            (repo: Repository) => repo.language === "HTML"
          );
          const repostoryEJS = data.filter(
            (repo: Repository) => repo.language === "EJS"
          );

          setRepository(data);
          setTotalItemsJS(repositoriesJS.length);
          setTotalItemsTS(repositoriesTS.length);
          setTotHtml(repositoryHtml.length);
          setTotEJS(repostoryEJS.length);
        }
      });
  }, []);

  const totRepository = repository.length;

  const calculatePercentage = (value: number): string => {
    const percentage = (value / totRepository) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div>
      <p>Total de repositórios: {totRepository}</p>
      <div className={styles.container}>
        <div
          className={styles.bar}
          style={{ width: `${calculatePercentage(totalItemsJS)}%` }}
        >
          <div
            className={styles.barfill}
            style={{
              backgroundColor: "#F2EB0C",
              width: `${calculatePercentage(totalItemsJS)}%`,
            }}
          ></div>
        </div>
        <p>
          JavaScript: {totalItemsJS} ({calculatePercentage(totalItemsJS)}%)
        </p>
      </div>
      <div className={styles.container}>
        <div
          className={styles.bar}
          style={{ width: `${calculatePercentage(totalItemsTS)}%` }}
        >
          <div
            className={styles.barfill}
            style={{
              backgroundColor: "#4E9FDB",
              width: `${calculatePercentage(totalItemsTS)}%`,
            }}
          ></div>
        </div>
        <p>
          TypeScript: {totalItemsTS} ({calculatePercentage(totalItemsTS)}%)
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.bar}>
          <div
            className={styles.barfill}
            style={{
              backgroundColor: "#DB1405",
              width: `${calculatePercentage(totHtml)}%`,
            }}
          ></div>
        </div>
        <p>
          HTML: {totHtml} ({calculatePercentage(totHtml)}%)
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.bar}>
          <div
            className={styles.barfill}
            style={{
              backgroundColor: "#DC8135",
              width: `${calculatePercentage(totEJS)}%`,
            }}
          ></div>
        </div>
        <p>
          EJS: {totEJS} ({calculatePercentage(totEJS)}%)
        </p>
      </div>
    </div>
  );
}
