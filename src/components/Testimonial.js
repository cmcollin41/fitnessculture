import React from "react"
import { Link } from "gatsby"

export default props => (
  <div
    id={`card-${props.cardIndex}`}
    className={`order-${props.order} min-w-full md:min-w-1/2 lg:min-w-1/3`}
  >
    <div className="rounded m-5 h-full flex flex-col justify-between">
      <div>
        <div
          className="w-full h-48 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `url(${props.testimonial.node.data.image.url})`
          }}
        >
        </div>
  
        <div className="mt-5 py-4">
          <h3 className="font-bold text-xl mb-2 uppercase">
            {props.testimonial.node.data.title.text}
          </h3>
          <p className="text-gray-700 text-base">
            {props.testimonial.node.data.lead.text}
          </p>
        </div>
      
      </div>
    </div>
  </div>
)
