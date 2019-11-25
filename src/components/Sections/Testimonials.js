import React from "react"
import Img from "gatsby-image"

const Testimonials = ({section}) => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container px-5 lg:mx-auto">
        <h3 className="text-white pb-5 lg:pb-10">{section.title}</h3>
      </div>
      <div className="flex flex-row overflow-scroll lg:overflow-hidden scroll-x-mandatory">
        {section.testimonials.map((testimonial, i) => (
          <div key={i} className="flex flex-col justify-between rounded-sm p-5 w-64 mx-3 bg-gray-600 snap-align-center" style={{minWidth: "275px"}}>
            <p className="text-white text-xs italic">"{testimonial.quote}"</p>
            <div className="flex flex-row items-center mt-6">
              <Img fixed={testimonial.memberImage.asset.fixed} alt={testimonial.member} width="50px" height="50px" className="rounded-full" />
              <div className="pl-2">
                <h6 className="uppercase">{testimonial.member}</h6>
                <span className="text-black text-xs">{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="container mx-auto mt-10 text-center">
        <a href={page.premiumCta} className="statement font-bold text-white border border-white rounded-sm py-2 px-4">Join the Family</a>
      </div> */}
    </div>
  )
}

export default Testimonials;