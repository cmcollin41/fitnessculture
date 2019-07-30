import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import training from '../../static/training-phone.png'
import mobility from '../../static/mobility-phone.png'
import nutrition from '../../static/nutrition-phone.png'

import "react-tabs/style/react-tabs.css";

class HomeTabs extends React.Component {

  render() {
    const { program } = this.props
    return (

  <Tabs selectedTabClassName="active-tabz">
    <TabList className="flex flex-row flex-wrap justify-center w-full overflow-hidden border-b border-gray-300">
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5"><h6>Training</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5"><h6>Nutrition</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center p-2 w-full lg:w-1/5"><h6>Mobility</h6></Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-xl uppercase text-center lg:text-left">{program.trainingTitle}</h2>
          <p className="mt-5">{program.trainingDescription}</p>
          <div className="mt-5 hidden md:block">
            <Link to="/" >Select Program</Link>
          </div>
          <div className="my-10 w-full border-bottom border">
          </div>
          <div className="hidden w-full lg:flex flex-col lg:flex-row items-center">
            <div
              className="h-24 w-24 flex-none bg-cover bg-center rounded-full text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(" +
                  program.testimonials[0].memberImage.asset.url +
                  ")",
              }}
            ></div>
            <div className="pl-4 flex flex-col justify-between leading-normal">
              <div className="p-2">
                <p className="text-gray-700 text-xs">
                  "{program.testimonials[0].quote}"
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                  {program.testimonials[0].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <Img
              fluid={ program.trainingImage.asset.fluid}
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
                <div className="text-black font-bold text-xs mt-2 rustico">
                {program.testimonials[0].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-xl uppercase text-center lg:text-left">{program.nutritionTitle}</h2>
          <p className="mt-5">{program.nutritionDescription}</p>
          <div className="mt-5 hidden md:block">
            <Link to="/">Watch Video</Link>
          </div>
          <div className="my-10 w-full border-bottom border">
          </div>
          <div className="hidden w-full lg:flex flex-col lg:flex-row items-center">
            <div
              className="h-24 w-24 flex-none bg-cover bg-center rounded-full text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(" +
                  program.testimonials[1].memberImage.asset.url +
                  ")",
              }}
            ></div>
            <div className="pl-4 flex flex-col justify-between leading-normal">
              <div className="p-2">
                <p className="text-gray-700 text-xs">
                  "{program.testimonials[1].quote}"
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                  {program.testimonials[1].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <Img
              fluid={ program.nutritionImage.asset.fluid}
              alt="Meal plans and macros"
              width="100%"
              className="mx-auto"
            />
           <div className="lg:hidden flex w-full lg:max-w-1/2 flex-col items-center">
            <div className="bg-white flex flex-col justify-between leading-normal">
              <div className="mt-10">
                <p className="text-gray-700 text-xs">
                "{program.testimonials[1].quote}"
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                {program.testimonials[1].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
        <h2 className="text-xl uppercase text-center lg:text-left">{program.mobilityTitle}</h2>
          <p className="mt-5">{program.mobilityDescription}</p>
          <div className="mt-5 hidden md:block">
            <Link to="/">Watch Video</Link>
          </div>
          <div className="my-10 w-full border-bottom border">
          </div>
          <div className="hidden w-full lg:flex flex-col lg:flex-row items-center">
            <div
              className="h-24 w-24 flex-none bg-cover bg-center rounded-full text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(" +
                  program.testimonials[2].memberImage.asset.url +
                  ")",
              }}
            ></div>
            <div className="pl-4 flex flex-col justify-between leading-normal">
              <div className="p-2">
                <p className="text-gray-700 text-xs">
                  "{program.testimonials[2].quote}"
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                  {program.testimonials[2].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <Img
              fluid={ program.mobilityImage.asset.fluid}
              alt="Mobility exercises"
              width="100%"
              className="mx-auto"
            />
           <div className="lg:hidden flex w-full lg:max-w-1/2 flex-col items-center">
            <div className="bg-white flex flex-col justify-between leading-normal">
              <div className="mt-10">
                <p className="text-gray-700 text-xs">
                "{program.testimonials[2].quote}"
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                {program.testimonials[2].member}, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
)}};

export default HomeTabs;