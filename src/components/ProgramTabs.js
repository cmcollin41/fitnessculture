import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import training from '../../static/training-phone.png'
import mobility from '../../static/mobility-phone.png'
import nutrition from '../../static/nutrition-phone.png'
import kyle from '../../static/kylewilliford.png'

import "react-tabs/style/react-tabs.css";

export default () => (
  <Tabs selectedTabClassName="active-tab text-black">
    <TabList className="mt-10 flex flex-row justify-center w-full overflow-hidden border-b border-gray-300">
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>Who</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>How</h6></Tab>
      <Tab className="uppercase text-lg lg:text-2xl mx-4 lg:mx-4 cursor-pointer text-center"><h6>What</h6></Tab>
    </TabList>

    <TabPanel>
      <div className="flex flex-col lg:flex-row items-center mt-20">
        <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
          <h2 className="text-xl uppercase text-left">Complete Package</h2>
          <p className="mt-5">Our training programs are customized not only to your individual training style but also based on your strength levels.
          </p>
          <h2 className="text-xl uppercase text-left mt-10">Athletes</h2>
          <p className="mt-5">Our training programs are customized not only to your individual training style but also based on your strength levels.
          </p>
          <div className="mt-10 hidden md:block">
            <Link to="/" className="text-red-500 uppercase font-bold border border-red-500 rounded-full px-4 py-2">Start Program</Link>
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
                <div className="text-black font-bold text-xs mt-2 rustico">
                  Kyle Williford, Fitness Culture Member
                </div>
                <p className="text-gray-700 text-xs">
                  "Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."
                </p>
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
          {/* <div className="block lg:hidden mx-auto w-full flex mt-10">
            <div className="h-auto w-24 flex-none bg-center bg-cover rounded-tl rounded-bl text-center overflow-hidden" style={{backgroundImage: "url(" +  kyle + ")"}} title="Fitness Culture Member">
            </div>
            <div className="border-r border-b border-t border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
              <p className="font-light text-xs"> "Fitness Culture made me realize that nutrition is the most important thing. I heard Steve Cook say in one of his videos that "you can't out train a bad diet" that is 100% true."</p>
              <div className="font-bold text-xs mt-5">Kyle Williford, South Carolina</div>
            </div>
          </div> */}
        </div>
      </div>
    </TabPanel>
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
           <div className="lg:hidden flex w-full lg:max-w-1/2 flex-col items-center shadow-sm">
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
  </Tabs>
);