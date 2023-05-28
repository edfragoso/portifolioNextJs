"use client";
import { useEffect, useState } from "react";
import Style from "./repository.module.css";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
}

export function Repository() {
  const [repository, setRepository] = useState<Repository[]>([]);
  const [totalItemsJS, setTotalItemsJS] = useState<number>(0);
  const [totalItemsTS, setTotalItemsTS] = useState<number>(0);
  const [totHtml, setTotHtml] = useState<number>(0);
  const [totEJS, setTotEJS] = useState<number>(0);
  const [totCss, setTotCss] = useState<number>(0);

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
          const repositoryCss = data.filter(
            (repo: Repository) => repo.language === "CSS"
          );

          setRepository(data);
          setTotalItemsJS(repositoriesJS.length);
          setTotalItemsTS(repositoriesTS.length);
          setTotHtml(repositoryHtml.length);
          setTotEJS(repostoryEJS.length);
          setTotCss(repositoryCss.length);
        }
      });
  }, []);

  const totRepository = repository.length;

  const calculatePercentage = (value: number): string => {
    const percentage = (value / totRepository) * 100;
    
    return percentage.toFixed(2);
  };

  return (
    <div className={Style.content}>
      <h2>Linguagens mais utilizadas</h2>

      <p>
        JavaScript <span>{calculatePercentage(totalItemsJS)}%</span>
      </p>
      <div className={Style.progressWrapper}>
        <div
          className={Style.progressContainer}
          style={{ width: `${calculatePercentage(totalItemsJS)}%` }}
        ></div>
      </div>

      <p>
        TypeScript <span>{calculatePercentage(totalItemsTS)}%</span>
      </p>
      <div className={Style.progressWrapper}>
        <div
          className={Style.progressContainer}
          style={{
            width: `${calculatePercentage(totalItemsTS)}%`,
            backgroundColor: "#1B7DF7",
          }}
        ></div>
      </div>  

     <div className={Style.dataContent}>
        <h3>Aplicações</h3>
        <p>
          Javascript <span>{`${totalItemsJS}`}</span>
        </p>
        <p>
          Typescript <span>{`${totalItemsTS}`}</span>
        </p>
        
      </div> 
    </div>
  );
}
