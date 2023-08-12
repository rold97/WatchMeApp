import React, { useState } from "react";
import classes from "./Questions.module.css";
import { ImCross } from "react-icons/im";
import { TbMessage2Question } from "react-icons/tb";

const Questions = () => {
  const questions = [
    {
      question: "What is WatchMe App?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rem dolores dolore. Perferendis aut nulla illum, sint qui ea vero aperiam corrupti vitae non beatae voluptates vel necessitatibus tenetur totam!",
      id: "q1",
    },
    {
      question: "Where can I watch?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam error minima recusandae ullam totam sequi quae tenetur architecto adipisci ad voluptatibus laborum, alias qui necessitatibus nulla provident possimus assumenda.",
      id: "q2",
    },
    {
      question: "How do I cancel?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio ea praesentium, tempore fugit quos libero totam aliquid, omnis ab, ut quod voluptatibus? Voluptatum possimus repellendus cupiditate officia voluptas reprehenderit",
      id: "q3",
    },
    {
      question: "What can I watch on WatchMe?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus perferendis corrupti doloremque, quaerat nam hic libero consectetur provident est fugiat, non quam alias aliquid molestiae! Fuga iusto dicta non alias.",
      id: "q4",
    },
    {
      question: "Is WatchMe suitable for kids?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illum eos",
      id: "q5",
    },
  ];

  const [openAnswer, setOpenAnswer] = useState(false);

  const openAnswerHandler = () => {
    setOpenAnswer(!openAnswer);
  };

  return (
    <div className={classes.questionFragment}>
      <div className={classes.questions}>
        <h2 className={classes.title}>Frequently asked questions</h2>
        {questions.map((question) => {
          return (
            <div className={classes.question} key={question.id}>
              <div className={classes.questionTitle}>
                <h2>{question.question}</h2>
                <ImCross
                  className={classes.crossIcon}
                  onClick={openAnswerHandler}
                />
              </div>
              {openAnswer ? <p>{question.answer}</p> : ""}
            </div>
          );
        })}
      </div>
      <div className={classes.questionMarkPlace}>
        <TbMessage2Question className={classes.questionMark} size={"250px"} />
      </div>
    </div>
  );
};

export default Questions;
