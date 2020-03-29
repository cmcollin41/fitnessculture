import React, {useState} from "react"
import SEO from "../../components/seo"
import logo from '../../assets/fc-logo-horizontal-black.png'
import SocialProof from "../../components/Sections/SocialProof"
import {Gender, Goal, GymType, LiftStyle, Experience, Result, Schedule, UserInfo, UserName} from "./"


const QuizContainer = () => {

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    height: "",
    weight: "",
    age: "",
    goal: "",
    gender: "",
    gymtype: "",
    days: "",
    style: "",
    experience: "",

  })
  console.log(values)

  const stepCount = 9
  const [step, setStep] = useState(1);

  const handleChange = (event) => {
    const{name, value} = event.target
    setValues({...values, [name]: value})
  }


  const next = () => {
    let currentStep = step
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 9 ? 10 : currentStep + 1
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
      <div className="fixed w-full bg-white">
        <div className="w-full shadow-sm flex justify-between items-center py-4 px-5">
          <img src={logo} width="200px" />
          <div className="flex items-between justify-between">
            <div>
              <h4 className="mb-0">Special Offer</h4>
              <p className="text-sm my-0 pt-0">20% off your first month!</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <progress id="file" max="100" className="w-full" value={step/stepCount * 100}> {step/stepCount * 100} </progress>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-full bg-gray-50" style={{paddingTop: "100px", minHeight: 'calc(100vh - 165px)'}}>
      <div className="w-full">
        <div className="flex items-center justify-center h-full">
          <div className="w-full lg:w-1/2 px-5">
              <GymType handleChange={handleChange} values={values} order={1} step={step} />
              <Experience handleChange={handleChange} values={values} order={2} step={step} />
              <UserName handleChange={handleChange} values={values} order={3} step={step} />
              <UserInfo handleChange={handleChange} values={values} order={4} step={step} />
              <Goal handleChange={handleChange} values={values} order={5} step={step} />
              <Gender handleChange={handleChange} values={values} order={6} step={step} />
              <LiftStyle handleChange={handleChange} values={values} order={7} step={step} />
              <Schedule handleChange={handleChange} values={values} order={8} step={step} />
              <Result handleChange={handleChange} values={values} order={9} step={step} />
              <div className="flex flex-row justify-between">
                {previousButton()}
                {nextButton()}       
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialProof />
    </>
  )
}

export default QuizContainer;