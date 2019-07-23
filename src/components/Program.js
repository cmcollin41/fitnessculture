import React from "react"
import { Link } from "gatsby"

export default props => (
  <div
    id={`card-${props.cardIndex}`}
    className={`order-${props.order} min-w-full md:min-w-1/2 lg:min-w-1/3`}
  >
    <div className="rounded m-5 h-full flex flex-col justify-between items-stretch">
      <div className="flex-1">
        <div
          className="w-full h-48 bg-cover bg-center shadow-lg"
          style={{
            backgroundImage: `url(${props.program.node.data.hero_image.url})`,
          }}
        >
        </div>
  
        <div className="mt-5 py-4">
          <h3 className="font-bold text-xl mb-2 uppercase">
            {props.program.node.data.title.text}
          </h3>
          <p className="text-gray-700 text-base">
            {props.program.node.data.lead.text}
          </p>
        </div>
      
      </div>
      <div className="flex-1"> 
        <div>
          <Link to="/" className="uppercase font-bold text-xs text-black border border-black rounded-full py-2 px-4">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
)
