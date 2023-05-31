import { useState } from "react";
import style from "./Faq.module.css";
import { Icon } from "@iconify/react";

const firstListQuestions = [
  {
    id: 1,
    question: "Por que devo reciclar eletroeletrônicos de forma correta?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },

  {
    id: 2,
    question: "Quais tipos de eletroeletrônicos a EcoSempre coleta?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },

  {
    id: 3,
    question: "Como faço para descartar corretamente esses materiais?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },

  {
    id: 4,
    question: `Como contatar a EcoSempre para destinar adequadamente  
		eletroeletrônicos da minha empresa?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },
];

const secondListQuestions = [
  {
    id: 5,
    question: "O que é Logística Reversa?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },
  {
    id: 6,
    question: "Quais são os benefícios da Logística Reversa?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },
  {
    id: 7,
    question: "Como faço para trabalhar em parceria com a EcoSempre?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },
  {
    id: 8,
    question: `Instituições interessadas em campanha de descarte adequado de 
		eletrônicos. Podemos contar com o apoio da EcoSempre?`,
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Cum, porro assumenda perspiciatis culpa possimus consequatur! 
			Vel quae ipsam nam impedit, repellendus beatae ducimus iste ipsa ad incidunt quo laboriosam tempore!`,
  },
];

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(false);

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
          questions={firstListQuestions}
          activeIndex={activeIndex}
          onShow={showAnswer}
          isLastOne={firstListQuestions.length - 1}
        />

        <ListQuestions
          questions={secondListQuestions}
          activeIndex={activeIndex}
          onShow={showAnswer}
          isLastOne={secondListQuestions.length - 1}
        />
      </div>
    </article>
  );
}

function ListQuestions({ questions, activeIndex, onShow, isLastOne }) {
  return (
    <ul className={style.list_faq}>
      {questions.map((question, index) => {
        const isActive = question.id === activeIndex;
        const classesWrapperBox = `${style.wrapper_box} ${
          isActive && style.show_answer
        } ${isLastOne === index && style.last_question}`;

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
