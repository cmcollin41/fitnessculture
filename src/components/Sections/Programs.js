import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Programs =({section}) => {
  const programRow = React.createRef();
  const programDiv = React.createRef();

  const clickLeft = () => {
    programRow.current.scrollLeft -= programDiv.current.offsetWidth;
  }

  const clickRight = () => {
    programRow.current.scrollLeft += programDiv.current.offsetWidth;
  }


  return (
    <div className="py-20 bg-gray-100">
      <div className="container lg:mx-auto px-5">
        <h3 className="statement text-3xl pb-5 lg:pb-10">
          Our Programs
        </h3>
      </div>
      <div className="scroll-btns relative h-full">
        <div ref={programRow} className="flex flex-row flex-nowrap items-stretch h-full overflow-x-scroll lg:overflow-x-hidden scroll-x-mandatory">

          {
            section.programs.map((program,i) => {
              return (
                <div ref={programDiv} key={i} className="w-full md:w-1/2 lg:w-1/4 mx-3 rounded-sm bg-gray-900 mt-10 flex flex-col items-stretch snap-align-center" style={{minWidth: "300px"}}>
                  <Img
                      className="block h-64 w-full bg-cover bg-center rounded-t-sm text-center overflow-hidden"
                      fluid={program.heroImage.asset.fluid}
                    
                  />
                  <div className="flex flex-col justify-between items-stretch flex-grow">
                    <div className="p-5">
                      <h4 style={{ color: program.colorTwo.hex }}>{program.title}</h4>
                      <p className="text-white text-sm">{program.subtitle}</p>
                    </div>
                    <div className="p-5">
                      <Link to={"/programs/" + program.gender + "/" + program.slug.current} className="uppercase font-bold text-xs text-white border border-white rounded-sm py-2 px-4">See {program.title}</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      <button className="hidden lg:block absolute scroll-btn scroll-left shadow-lg" onClick={clickLeft}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface1"><path d="M110.55031,10.535c-0.90031,0 -1.74688,0.36281 -2.39188,0.99438l-72.52219,71.94437c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l71.94437,72.53562c1.34375,1.34375 3.52063,1.35719 4.86438,0.01344l20.72062,-20.54594c1.35719,-1.34375 1.37063,-3.52062 0.02688,-4.87781l-48.96625,-49.35594l49.36937,-48.96625c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.86437l-20.54594,-20.72063c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
      <button className="hidden lg:block absolute scroll-btn scroll-right shadow-lg" onClick={clickRight}><svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 172 172" style={{fill: "#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#666666"><g id="surface2"><path d="M62.39031,10.32c-0.90031,0.01344 -1.74688,0.36281 -2.39188,0.99438l-20.72062,20.55937c-1.34375,1.34375 -1.35719,3.52063 -0.02688,4.86438l48.96625,49.36937l-49.35594,48.96625c-1.35719,1.34375 -1.37062,3.52063 -0.02687,4.86438l20.55937,20.72062c1.34375,1.35719 3.52063,1.37063 4.86438,0.02688l72.53562,-71.94438c1.34375,-1.34375 1.35719,-3.52062 0.01344,-4.87781l-71.93094,-72.52219c-0.65844,-0.67187 -1.55875,-1.03469 -2.48594,-1.02125z"></path></g></g></g></svg></button>
      </div>
    </div>
  )
}

export default Programs;