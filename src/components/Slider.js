import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Program from './Program'

const Slider = () => {
  const data = useStaticQuery(graphql`
    query SliderQuery {
      programs: allPrismicProgram {
        edges {
          node {
            uid
            data {
              title {
                text
              }
              hero_image{
                url
              }
              lead {
                text
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Slider>
      <div className="flex flex-col lg:flex-row justify-center items-stretch mt-10">
        {data.programs.edges.map(program => (
          <Program program={ program } />
        ))}
      </div>
    </ Slider>
  )
}

export default Slider



