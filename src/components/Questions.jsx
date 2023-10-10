import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { ImCross, ImArrowDown } from "react-icons/im";
import { TbMessage2Question } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

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

  const [openAnswer, setOpenAnswer] = useState(-1);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (openAnswer === index) {
      setOpenAnswer(-1);
    } else {
      setOpenAnswer(index);
    }
    if (open === index) {
      setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div className="mx-[150px] mt-[150px] pb-[100px] flex border-b-[1px] border-solid border-[#414141]">
      <div className="border-b-2 border-solid border-[#414141] w-[55%]">
        <h2 className="text-white text-2xl font-bold">
          Frequently asked questions
        </h2>
        {questions.map((question, index) => {
          return (
            <div
              className="border-b-2 border-solid border-[#414141]"
              key={question.id}
              id={question.id}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-white font-sans text-xl mt-[30px] mb-3">
                  {question.question}
                </h2>
                {openAnswer === index ? (
                  <ImCross className="text-white mt-4 cursor-pointer" />
                ) : (
                  <ImArrowDown className="text-white mt-4 cursor-pointer" />
                )}
              </div>

              {openAnswer === index ? (
                <p className="text-[#CCCCCC] mb-[15px] text-base">
                  {question.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className="w-[45%] flex justify-center items-center rotate-[5deg]">
        <TbMessage2Question className="text-[#DC276A]" size={"250px"} />
      </div>
    </div>
  );
};

export default Questions;
