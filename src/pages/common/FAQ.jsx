import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { PageTitle } from "../../components/common/PageTitle";
import { ProtectedComponent } from "../../components/ProtectedComponent";

export const FAQ = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/v51/faq")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    // <section className="bg-gray-50 dark:bg-gray-900">
    //     <div className="mx-auto flex w-9/12 flex-col items-center justify-center px-6 py-8 lg:py-0"></div>
    // <section className="relative z-20 overflow-hidden bg-gray-50 dark:bg-gray-900 lg:pb-[90px] lg:pt-[120px]">
    <ProtectedComponent>
      <div className="container mx-auto">
        <PageTitle
          subtitle={"FAQ"}
          title={"Any Questions? Look Here"}
          description={
            "This is a list of the most frequently asked questions. If you have a question that is not listed here, please contact us."
          }
        />

        <div className="mx-10 flex flex-wrap">
          {questions.map((question, index) => (
            <div className="w-full px-2 lg:w-1/2">
              <AccordionItem
                header={question.question}
                text={question.answear}
                description={"Added on " + question.added}
              />
            </div>
          ))}
        </div>
      </div>
    </ProtectedComponent>
    // </section>
  );
};

// export default Accordion;

const AccordionItem = ({ header, text, description }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-5 w-full overflow-hidden rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-800 dark:text-white">
      <button
        className={`flex w-full text-left`}
        onClick={(event) => handleToggle(event)}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-3xl dark:bg-white/5">
          <svg
            className={`rounded-lg fill-current duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed">{text}</p>
        <p className="py-3 text-sm leading-relaxed text-gray-400 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
