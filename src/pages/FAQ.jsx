import { HeaderSection } from "../components/HeaderSection";
import { Faq } from "../components/Home/Faq";
import { firstListQuestions } from "../data";
import styles from "./FAQ.module.css";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "EcoSempre",
    path: "",
  },
  {
    name: "FAQ",
  },
];

export function FAQ() {
  return (
    <main>
      <HeaderSection
        title="FAQ"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <div className={styles.wrapper_faq}>
        <Faq
          isFAQPage={true}
          numberPerList={firstListQuestions.length}
          questionsOverLines={{
            firstList: [4, 5],
            secondList: [10],
          }}
        />
      </div>
    </main>
  );
}
