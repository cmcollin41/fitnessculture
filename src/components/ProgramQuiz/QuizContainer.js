import React, {useState} from "react"
import SEO from "../../components/seo"

import Name from "./UserName"
import Info from "./UserInfo"
import Goal from "./Goal"
import Schedule from "./Schedule"
import LiftStyle from "./LiftStyle"

const QuizContainer = () => {

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
    goal: "",
    days: "",
    style: "",
    experience: "",

  })

  const stepCount = 5
  const [step, setStep] = useState(1);

  const handleChange = (event) => {
    const{name, value} = event.target
    setValues({...values, [name]: value})
  }


  const next = () => {
    let currentStep = step
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 7 ? 8 : currentStep + 1
    setStep(currentStep)
  }
    
  const prev = () => {
    let currentStep = step
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    setStep(currentStep)
  }


  // The "next" and "previous" button functions
const previousButton =() =>{
  let currentStep = step;
  // If the current step is not 1, then render the "previous" button
  if(currentStep !== 1){
    return (
      <button 
      className="mt-10 px-10 py-4 text-black rounded"
        type="button" onClick={prev}>
      Previous
      </button>
    )
  }
  // ...else return nothing
  return null
}

const nextButton = () => {
  let currentStep = step;
  // If the current step is not 3, then render the "next" button
  if(currentStep < stepCount && currentStep > 0){
    return (
      <div className="flex justify-end w-full">
        <button 
          className="mt-10 px-10 py-4 bg-blue-500 text-white rounded-sm" 
          type="button" onClick={next}>
          Next
        </button>        
      </div>
    )
  } else if(currentStep === stepCount) {
    return (
      <div className="flex justify-end w-full">
        <button 
          className=" mt-10 px-10 py-4 bg-green-500 text-white rounded-sm" 
          type="button" >
          Submit
        </button>  
      </div>
    )
  }
  // ...else render nothing
  return null;
}



  return (
    <>
      <SEO title="Get Started" />
      <div className="flex flex-row flex-wrap w-full min-h-screen bg-gray-100">
      <div className="w-full lg:w-2/3">
        <div className="flex items-center justify-center h-full">
          <div className="w-full lg:w-1/2 px-5">
            <div className="w-full flex items-center justify-center py-10">
              <progress id="file" max="100" className="w-full" value={step/stepCount * 100}> {step/stepCount * 100} </progress>
            </div>
            <div className="bg-white p-5 rounded shadow">
              <Name handleChange={handleChange} values={values} step={step} />
              <Info handleChange={handleChange} values={values} step={step} />
              <Goal handleChange={handleChange} values={values} step={step} />
              <Schedule handleChange={handleChange} values={values} step={step} />
              <LiftStyle handleChange={handleChange} values={values} step={step} />
              <div className="flex flex-row justify-between">
                {previousButton()}
                {nextButton()}       
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3 bg-black flex flex-col items-center px-5">
        <p className="text-white">{values.first_name} {values.last_name}</p>
        <p className="text-white">{values.height}</p>
        <p className="text-white">{values.weight}</p>
        <p className="text-white">{values.age}</p>
        <p className="text-white">{values.goal}</p>
        <p className="text-white">{values.days}</p>
        <p className="text-white">{values.style}</p>
      </div>
    </div>

     

    </>
  )
}

export default QuizContainer;