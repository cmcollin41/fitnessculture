import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import training from '../../static/training-phone.png'
import mobility from '../../static/mobility-phone.png'
import nutrition from '../../static/nutrition-phone.png'
import kyle from '../../static/kylewilliford.png'

import "react-tabs/style/react-tabs.css";

export default () => (
  <Tabs selectedTabClassName="active-tab">
    <TabList className="flex flex-row justify-center w-full overflow-hidden border-b border-gray-200">
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>Training</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>Nutrition</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>Mobility</h6></Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-3xl lg:text-5xl uppercase text-center lg:text-left">Feel Better</h2>
          <p className="mt-5">Our training programs are customized not only to your individual training style but also based on your strength levels. Every exercise comes complete with video tutorials, correct progressions, and weight calculations so you know there’s no guesswork.
          </p>
          <div className="mt-5 hidden md:block">
            <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
          </div>
          <div className="my-10 w-full border-bottom border">
          </div>
          <div className="hidden w-full lg:flex flex-col lg:flex-row items-center">
            <div
              className="h-24 w-24 flex-none bg-cover bg-center rounded-full text-center overflow-hidden"
              style={{
                backgroundImage:
                  "url(" +
                  kyle +
                  ")",
              }}
            ></div>
            <div className="pl-4 flex flex-col justify-between leading-normal">
              <div className="p-2">
                <p className="text-gray-700 text-xs">
                  "Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                  Kyle Williford, Fitness Culture Member
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <img
              src={ training }
              alt="App for Workouts"
              width="100%"
              className="mx-auto"
            />
           <div className="lg:hidden flex w-full lg:max-w-1/2 flex-col items-center">
            <div className="bg-white flex flex-col justify-between leading-normal">
              <div className="mt-4">
                <p className="text-gray-700 text-xs">
                  "Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."
                </p>
                <div className="text-black font-bold text-xs mt-2 rustico">
                  Kyle Williford, Fitness Culture Member
                </div>
              </div>
            </div>
            <div
              className="h-12 w-12 flex-none bg-cover bg-center rounded-full text-center overflow-hidden mt-10"
              style={{
                backgroundImage:
                  "url(" +
                  kyle +
                  ")",
              }}
            ></div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-3xl lg:text-5xl uppercase text-center lg:text-left">Look Better</h2>
          <p className="mt-5">Get a macronutrient plan according to your individual goals. From there, we’ll give you meal plans and teach you exactly how to work the plans into your busy schedule. Weekly check-ins will keep you accountable and help us adjust your body.
          </p>
          <div className="mt-5 hidden md:block">
            <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <img
              src={ nutrition }
              alt="App for Workouts"
              width="100%"
              className="mx-auto"
            />
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="flex flex-col lg:flex-row items-center mt-10">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-3xl lg:text-5xl uppercase text-center lg:text-left">Perform Better</h2>
          <p className="mt-5">We’ll put you through a series of movements to access your mobility. After that, you’ll receive complete routines geared to fix any of your problem areas. Our routines will update every day that way you can stay mobile and prevent injury.
          </p>
          <div className="mt-5 hidden md:block">
            <Link to="/" className="text-red-500 uppercase font-bold">Watch Video</Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-5">
          <img
              src={ mobility }
              alt="App for Workouts"
              width="100%"
              className="mx-auto"
            />
        </div>
      </div>
    </TabPanel>
  </Tabs>
);