import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import "react-tabs/style/react-tabs.css";

class HomeTabs extends React.Component {

  render() {
    const { program } = this.props
    return (

  <Tabs selectedTabClassName="active-tabz">
    <TabList className="flex flex-row flex-wrap justify-center w-full overflow-hidden border-b border-gray-300">
      <Tab className="mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5 no-style-ul"><h3 className="statement text-lg lg:text-2xl">Training</h3></Tab>
      <Tab className="mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5 no-style-ul"><h3 className="statement text-lg lg:text-2xl">Nutrition</h3></Tab>
      <Tab className="mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5 no-style-ul"><h3 className="statement text-lg lg:text-2xl">Mobility</h3></Tab>
    </TabList>

    
    {
      program.tabs.map((program,i) => {
        return (
          <TabPanel key={i}>
          <div className="flex flex-col lg:flex-row items-center mt-20">
            <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              <h2 className="text-xl uppercase text-center lg:text-left">{program.title}</h2>
              <p className="mt-5">{program.description}</p>
              <div className="mt-5 hidden md:block">
                <Link to={program.link}>{program.cta}</Link>
              </div>
              <div className="my-10 w-full border-bottom border">
              </div>
              <div className="hidden w-full lg:flex flex-col lg:flex-row items-center">
                <div className="flex flex-col justify-between leading-normal">
                  <div className="py-2">
                    <p className="text-gray-700 text-xs">
                      "{program.testimonials[0].quote}"
                    </p>
                    <div className="flex flex-row items-center mt-6">
                      <Img fixed={ program.testimonials[0].memberImage.asset.fixed} alt="member photo" width="50px" height="50px" className="rounded-full" />
                      <div className="pl-2">
                        <h6 className="uppercase">{ program.testimonials[0].member}</h6>
                        <span className="text-black text-xs">{ program.testimonials[0].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-5">
              <Img
                  fluid={ program.image.asset.fluid}
                  alt="Fitness programming in an app"
                  width="100%"
                  className="mx-auto"
                />
               <div className="lg:hidden flex w-full lg:max-w-1/2 flex-col items-center">
                <div className="bg-white flex flex-col justify-between leading-normal">
                  <div className="mt-10">
                    <p className="text-gray-700 text-xs">
                    "{program.testimonials[0].quote}"
                    </p>
                    <div className="flex flex-row items-center mt-6">
                      <Img fixed={ program.testimonials[0].memberImage.asset.fixed} alt="member photo" width="50px" height="50px" className="rounded-full" />
                      <div className="pl-2">
                        <h6 className="uppercase">{ program.testimonials[0].member}</h6>
                        <span className="text-black text-xs">{ program.testimonials[0].location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        )
      })
    }
   
  
  </Tabs>
)}};

export default HomeTabs;