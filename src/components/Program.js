import React from "react"
import { Link } from "gatsby"

// const Program = ({ program }) => {
export default props => (
  <div className="w-full lg:w-1/3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-5 h-full flex flex-col justify-between">
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          //   backgroundImage: `url(${props.program.node.data.hero_image.url})`,
          backgroundImage: `url(${props.program.node.data.hero_image.url})`,
        }}
      ></div>
      <div>
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">
            {props.program.node.data.title.text}
            {/* {props.program.node.data.title.text} */}
          </h3>
          <p className="text-gray-700 text-base">
            {props.program.node.data.lead.text}
          </p>
        </div>
        <div className="px-6 py-10">
          <Link to="/" className="btn-lg btn-red shadow-md">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
)
