import React from "react";



const Faq = ({section}) => {
  return (
    <div className="py-20 px-5">
      <div className="container mx-auto">
        <h3 className="statement text-center text-3xl mb-10">
          Questions and <span className="rustico">Answers</span>
        </h3>
        {section.faqs.map((question, i) => (
        <div className="flex flex-col lg:flex-row justify-center"  key={i}>
          <div className="w-full lg:w-3/4 border-b border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
            <div className="py-6">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {question.question}
              </div>
              <p className="text-gray-700 text-base">
                {question.answer}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Faq;