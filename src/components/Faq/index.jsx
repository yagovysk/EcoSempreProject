import { useId, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { firstListQuestions, secondListQuestions } from "../../data";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";
import style from "./Faq.module.css";
import { ScrollReveal } from "../ScrollReveal";

export function Faq({
  numberPerList,
  isFAQPage,
  immediatelyStartReveal = false,
}) {
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
        <ScrollReveal origin="bottom" immediately={immediatelyStartReveal}>
          <span className="small-text">Nosso FAQ</span>
          <h2 className="title">Confira as Dúvidas Mais Frequentes</h2>
        </ScrollReveal>
      </section>

      <div className={style.container_faq}>
        <ScrollReveal origin="left" immediately={immediatelyStartReveal}>
          <ListQuestions
            questions={firstListQuestionsSliced}
            activeIndex={activeIndex}
            onShow={showAnswer}
          />
        </ScrollReveal>

        <ScrollReveal origin="right" immediately={immediatelyStartReveal}>
          <ListQuestions
            questions={secondListQuestionsSliced}
            activeIndex={activeIndex}
            onShow={showAnswer}
          />
        </ScrollReveal>
      </div>

      {!isFAQPage && (
        <ScrollReveal origin="top">
          <Link
            to="/faq"
            onClick={scrollToTop}
            className={`link_more ${style.link_more_faq}`}
          >
            Clique aqui para acessar todas as dúvidas {">>"}
          </Link>
        </ScrollReveal>
      )}
    </article>
  );
}

function ListQuestions({ questions, activeIndex, onShow }) {
  const answersRef = useRef(null);

  function getHeightRef(id) {
    const map = getMap();
    const node = map.get(id);
    if (node) {
      return node.scrollHeight;
    }
  }
  function getMap() {
    if (!answersRef.current) {
      answersRef.current = new Map();
    }
    return answersRef.current;
  }

  function handleShowAnswer(e, id) {
    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click") {
      onShow(id);
    }
  }

  return (
    <div className={style.list_faq}>
      {questions.map((question) => {
        const isActive = question.id === activeIndex;
        const classesWrapperBox = `${style.wrapper_box} ${
          isActive && style.show_answer
        }`;
        const heightAnswer = answersRef.current
          ? getHeightRef(question.id)
          : "0";
        const questionId = useId();

        return (
          <div
            role="button"
            key={question.id}
            tabIndex={0}
            className={classesWrapperBox}
            onClick={(e) => handleShowAnswer(e, question.id)}
            onKeyDown={(e) => handleShowAnswer(e, question.id)}
            aria-labelledby={`${questionId}-${question.id}`}
            aria-expanded={isActive && true}
          >
            <section className={style.question_wrapper}>
              <h3
                id={`${questionId}-${question.id}`}
                className={style.question_title}
              >
                {question.question}
              </h3>
              {isActive ? (
                <Icon
                  className={style.icon_minus}
                  icon="zondicons:minus-solid"
                />
              ) : (
                <Icon className={style.icon_plus} icon="ic:round-plus" />
              )}
            </section>

            <div
              className={style.panel}
              style={
                heightAnswer && {
                  "--height": `${heightAnswer}px`,
                }
              }
            >
              <p
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(question.id, node);
                  } else {
                    map.delete(question.id);
                  }
                }}
                className={`${style.answer}`}
              >
                {question.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
