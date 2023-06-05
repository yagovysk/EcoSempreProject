import { useState } from "react";
import { Icon } from "@iconify/react";
import { firstListQuestions, secondListQuestions } from "../../data";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";
import style from "./Faq.module.css";

export function Faq({ numberPerList, isFAQPage, questionsOverLines }) {
  const [activeIndex, setActiveIndex] = useState(false);
  const firstListQuestionsSliced = firstListQuestions.slice(0, numberPerList);
  const secondListQuestionsSliced = secondListQuestions.slice(0, numberPerList);

  function showAnswer(index) {
    if (activeIndex === index) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <article className={`${style.idFaq} container`}>
      <section className={`textsContainer ${style.texts}`}>
        <span className="small-text">Nosso FAQ</span>
        <h2 className="title">Confira as Dúvidas Mais Frequentes</h2>
      </section>

      <div className={style.container_faq}>
        <ListQuestions
          questions={firstListQuestionsSliced}
          activeIndex={activeIndex}
          onShow={showAnswer}
          questionsOverLines={
            questionsOverLines && questionsOverLines.firstList
          }
        />

        <ListQuestions
          questions={secondListQuestionsSliced}
          activeIndex={activeIndex}
          onShow={showAnswer}
          questionsOverLines={
            questionsOverLines && questionsOverLines.secondList
          }
        />
      </div>

      {!isFAQPage && (
        <Link
          to="/faq"
          onClick={scrollToTop}
          className={`link_more ${style.link_more_faq}`}
        >
          Clique aqui para acessar todas as dúvidas {">>"}
        </Link>
      )}
    </article>
  );
}

function ListQuestions({ questions, activeIndex, onShow, questionsOverLines }) {
  return (
    <ul className={style.list_faq}>
      {questions.map((question) => {
        const isActive = question.id === activeIndex;
        const isQuestionWith2Lines =
          questionsOverLines &&
          questionsOverLines.some((id) => id === question.id);

        const classesWrapperBox = `${style.wrapper_box} ${
          isActive && style.show_answer
        } ${isQuestionWith2Lines && style.last_question}`;

        return (
          <li key={question.id}>
            <div
              className={classesWrapperBox}
              onClick={() => onShow(question.id)}
            >
              <section className={style.question_wrapper}>
                <h3 className={style.question_title}>{question.question}</h3>
                {isActive ? (
                  <Icon
                    className={style.icon_minus}
                    icon="zondicons:minus-solid"
                  />
                ) : (
                  <Icon className={style.icon_plus} icon="ic:round-plus" />
                )}
              </section>
              <p className={`${style.answer}`}>{question.answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
