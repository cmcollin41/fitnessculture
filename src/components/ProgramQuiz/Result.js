import React from "react"



export const Result = ({step, order, values, handleChange}) => {

  if (step === order) {
    console.log(values)

    if (values.gymtype === "home_body") {
      return(
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
          </div>
          <div>
            At Home, Bodyweight
          </div>
        </div>
      )
    } else if (values.gymtype === "home_equip"){
      return(
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="w-full flex justify-center">
            <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
          </div>
          <div>
            At Home, Equipment
          </div>
        </div>
      )
    } else {
      switch(values.gender) {
        case "male":
          switch(values.goal){
            case "build_muscle":
              switch(values.style) {
                case "body_building":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Swole
                    </div>
                  </div>
                  )
                case "dont_know":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Swole
                    </div>
                  </div>
                  )
                case "power_lifting":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Power
                    </div>
                  </div>
                  )
                }
            case "get_lean":
              switch(values.style) {
                case "hiit":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Lean
                    </div>
                  </div>
                  )
                case "dont_know":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Lean
                    </div>
                  </div>
                  )
                case "functional":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Mens Functional
                    </div>
                  </div>
                  )
                }
            case "athleticism":
              return(
                <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="w-full flex justify-center">
                  <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                </div>
                <div>
                  Mens Athleticism
                </div>
              </div>
              )
            default:
              return(
                <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="w-full flex justify-center">
                  <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                </div>
                <div>
                  Mens Lean
                </div>
              </div>
              )
          }
        case "female":
          switch(values.goal){
            case "build_muscle":        
              return(
                <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="w-full flex justify-center">
                  <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                </div>
                <div>
                  Womens Power
                </div>
              </div>
              )
            case "bikini_body":
              switch(values.days) {
                case "5_days":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Womens Bikini
                    </div>
                  </div>
                  )
                case "3_days":
                  return(
                    <div className="flex flex-row flex-wrap justify-center items-center">
                    <div className="w-full flex justify-center">
                      <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                    </div>
                    <div>
                      Womens Tone
                    </div>
                  </div>
                  )
                }
            case "athleticism":
              return(
                <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="w-full flex justify-center">
                  <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                </div>
                <div>
                  Womens Athlete
                </div>
              </div>
              )
            default:
              return(
                <div className="flex flex-row flex-wrap justify-center items-center">
                <div className="w-full flex justify-center">
                  <h2 className="mb-6 text-xl">{values.first_name}, you're going to love the program we've got for you!</h2>
                </div>
                <div>
                  Womens Tone
                </div>
              </div>
              )
          }
      }
    }
  } else {
    return null
  }
} 

