import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import training from '../../static/training-phone.png'
import mobility from '../../static/mobility-phone.png'
import nutrition from '../../static/nutrition-phone.png'
import kyle from '../../static/kylewilliford.png'

import "react-tabs/style/react-tabs.css";



class ProgramTabs extends React.Component {

  render() {
    const { program } = this.props
    return (

      <Tabs selectedTabClassName="active-tab">
        <TabList className="arrow-steps flex flex-col lg:flex-row justify-center">
          <Tab className="step uppercase font-light w-full lg:w-1/4 text-left lg:text-center">1. Choose Your Program</Tab>
          <Tab className="step uppercase font-light w-full lg:w-1/4 text-left lg:text-center">2. Get to work</Tab>
          <Tab className="step uppercase font-light w-full lg:w-1/4 text-left lg:text-center">3. See your results</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col lg:flex-row items-center mt-10">
            <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.personas.map((i, count) => (
                <div key={count} className="mt-10">
                  <div className="relative">
                    <img className="hidden lg:block absolute w-12" style={{left: "-64px", top: "-20px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDY0IDMxIEMgMzcuNSAzMSAxNiA1Mi41IDE2IDc5IEMgMTYgODguMSAxOC42IDk2LjYwMDM5MSAyMyAxMDMuOTAwMzkgQyAyMy4xIDEwNC4xMDAzOSAyMy4yMDAzOTEgMTA0LjMwMDM5IDIzLjQwMDM5MSAxMDQuNDAwMzkgQyAyNy43MDAzOTEgMTExLjMwMDM5IDMzLjcwMDM5MSAxMTcuMDAwMzkgNDAuOTAwMzkxIDEyMC45MDAzOSBMIDI5IDEyMC45MDAzOSBDIDI3LjMgMTIwLjkwMDM5IDI2IDEyMi4yMDAzOSAyNiAxMjMuOTAwMzkgQyAyNiAxMjUuNjAwMzkgMjcuMyAxMjYuOTAwMzkgMjkgMTI2LjkwMDM5IEwgMTA5IDEyNi45MDAzOSBDIDExMC43IDEyNi45MDAzOSAxMTIgMTI1LjYwMDM5IDExMiAxMjMuOTAwMzkgQyAxMTIgMTIyLjIwMDM5IDExMC43IDEyMC45MDAzOSAxMDkgMTIwLjkwMDM5IEwgODcuMTk5MjE5IDEyMC45MDAzOSBDIDEwMS45OTkyMiAxMTIuODAwMzkgMTEyIDk3LjEgMTEyIDc5IEMgMTEyIDUyLjUgOTAuNSAzMSA2NCAzMSB6IE0gNjQgMzcgQyA3NS4xIDM3IDg1LjE5OTIxOSA0MS4zMDAzOTEgOTIuNjk5MjE5IDQ4LjQwMDM5MSBDIDg3LjE5OTIxOSA1MS43MDAzOTEgODIuOTAwNzgxIDU2LjYwMDM5MSA4MC4zMDA3ODEgNjIuNDAwMzkxIEMgNzUuOTAwNzgxIDYxLjYwMDM5MSA3MS41IDYxLjEgNjcgNjEgTCA2NyA0NSBDIDY3IDQzLjMgNjUuNyA0MiA2NCA0MiBDIDYyLjMgNDIgNjEgNDMuMyA2MSA0NSBMIDYxIDYxIEMgNTYuNSA2MS4xIDUyLjA5OTIxOSA2MS42MDAzOTEgNDcuNjk5MjE5IDYyLjQwMDM5MSBDIDQ2LjE5OTIxOSA1OS4xMDAzOTEgNDQuMjk5MjE5IDU2LjEgNDEuNjk5MjE5IDUzLjUgQyA0MC41OTkyMTkgNTIuMyAzOC43IDUyLjMwMDM5MSAzNy41IDUzLjQwMDM5MSBDIDM2LjMgNTQuNTAwMzkxIDM2LjMwMDM5MSA1Ni4zOTk2MDkgMzcuNDAwMzkxIDU3LjU5OTYwOSBDIDM5LjEwMDM5MSA1OS4zOTk2MDkgNDAuNTk5MjE5IDYxLjM5OTYwOSA0MS42OTkyMTkgNjMuNTk5NjA5IEMgMzUuMTk5MjE5IDY1LjE5OTYwOSAyOC45MDAzOTEgNjcuNSAyMi45MDAzOTEgNzAuNSBDIDI2LjgwMDM5MSA1MS40IDQzLjcgMzcgNjQgMzcgeiBNIDk2LjkwMDM5MSA1Mi45MDAzOTEgQyAxMDAuOTAwMzkgNTguMDAwMzkxIDEwMy43OTkyMiA2My45OTk2MDkgMTA1LjE5OTIyIDcwLjU5OTYwOSBDIDk5LjE5OTIxOSA2Ny41OTk2MDkgOTIuOTAwMzkxIDY1LjI5OTIxOSA4Ni40MDAzOTEgNjMuNjk5MjE5IEMgODguNzAwMzkxIDU5LjA5OTIxOSA5Mi40MDAzOTEgNTUuNDAwMzkxIDk2LjkwMDM5MSA1Mi45MDAzOTEgeiBNIDYxIDY3IEwgNjEgMTIwLjkwMDM5IEMgNDguNCAxMjAuMDAwMzkgMzcuNDAwNzgxIDExMy42IDMwLjMwMDc4MSAxMDQgQyAzNy44MDA3ODEgMTAxLjIgNDMuODAwNzgxIDk1LjcgNDcuMzAwNzgxIDg4LjUgQyA1MC40MDA3ODEgODIuMSA1MS4xOTk2MDkgNzQuOTk5MjE5IDQ5LjU5OTYwOSA2OC4xOTkyMTkgQyA1My4zOTk2MDkgNjcuNTk5MjE5IDU3LjIgNjcuMiA2MSA2NyB6IE0gNjcgNjcuMDk5NjA5IEMgNzAuOCA2Ny4xOTk2MDkgNzQuNzAwMzkxIDY3LjYwMDc4MSA3OC40MDAzOTEgNjguMzAwNzgxIEMgNzYuOTAwMzkxIDc1LjEwMDc4MSA3Ny41OTkyMTkgODIuMTk5NjA5IDgwLjY5OTIxOSA4OC41OTk2MDkgQyA4NC4xOTkyMTkgOTUuNzk5NjA5IDkwLjE5OTIxOSAxMDEuMjk5NjEgOTcuNjk5MjE5IDEwNC4wOTk2MSBDIDkwLjU5OTIxOSAxMTMuNTk5NjEgNzkuNiAxMjAuMDAwMzkgNjcgMTIwLjkwMDM5IEwgNjcgNjcuMDk5NjA5IHogTSA0My42OTkyMTkgNjkuNDAwMzkxIEMgNDQuOTk5MjE5IDc0LjkwMDM5MSA0NC4zMDA3ODEgODAuNzAwMzkxIDQxLjgwMDc4MSA4NS45MDAzOTEgQyAzOC45MDA3ODEgOTEuOTAwMzkxIDMzLjggOTYuMzk5NjA5IDI3LjUgOTguNTk5NjA5IEMgMjcuNCA5OC42OTk2MDkgMjcuMiA5OC44MDA3ODEgMjcgOTguODAwNzgxIEMgMjMuOCA5Mi45MDA3ODEgMjIgODYuMSAyMiA3OSBMIDIyIDc3LjgwMDc4MSBDIDI4LjggNzQuMDAwNzgxIDM2LjA5OTIxOSA3MS4yMDAzOTEgNDMuNjk5MjE5IDY5LjQwMDM5MSB6IE0gODQuMzAwNzgxIDY5LjQwMDM5MSBDIDkxLjkwMDc4MSA3MS4yMDAzOTEgOTkuMiA3NC4wMDA3ODEgMTA2IDc3LjgwMDc4MSBMIDEwNiA3OSBDIDEwNiA4Ni4yIDEwNC4yIDkzLjAwMDM5MSAxMDEgOTguOTAwMzkxIEwgMTAwLjQwMDM5IDk4LjU5OTYwOSBDIDk0LjEwMDM5MSA5Ni4zOTk2MDkgODguOTk5NjA5IDkxLjkwMDM5MSA4Ni4wOTk2MDkgODUuOTAwMzkxIEMgODMuNTk5NjA5IDgwLjcwMDM5MSA4My4wMDA3ODEgNzUuMDAwMzkxIDg0LjMwMDc4MSA2OS40MDAzOTEgeiBNIDEyNCAxMjEgQSAzIDMgMCAwIDAgMTIxIDEyNCBBIDMgMyAwIDAgMCAxMjQgMTI3IEEgMyAzIDAgMCAwIDEyNyAxMjQgQSAzIDMgMCAwIDAgMTI0IDEyMSB6Ij48L3BhdGg+PC9zdmc+" />
                    <h2 className="text-xl uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}
      
              <div className="mt-10 hidden md:block">
                <Link to="/" className="text-red-500 uppercase font-bold border border-red-500 bg-white rounded-full px-4 py-2">Start Program</Link>
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
        <div className="flex flex-col lg:flex-row items-center mt-10">
          <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.features.map((i, count) => (
                <div key={count} className="mt-10">
                  <div className="relative">
                    <img className="hidden lg:block absolute w-12" style={{left: "-64px", top: "-20px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDY0IDMxIEMgMzcuNSAzMSAxNiA1Mi41IDE2IDc5IEMgMTYgODguMSAxOC42IDk2LjYwMDM5MSAyMyAxMDMuOTAwMzkgQyAyMy4xIDEwNC4xMDAzOSAyMy4yMDAzOTEgMTA0LjMwMDM5IDIzLjQwMDM5MSAxMDQuNDAwMzkgQyAyNy43MDAzOTEgMTExLjMwMDM5IDMzLjcwMDM5MSAxMTcuMDAwMzkgNDAuOTAwMzkxIDEyMC45MDAzOSBMIDI5IDEyMC45MDAzOSBDIDI3LjMgMTIwLjkwMDM5IDI2IDEyMi4yMDAzOSAyNiAxMjMuOTAwMzkgQyAyNiAxMjUuNjAwMzkgMjcuMyAxMjYuOTAwMzkgMjkgMTI2LjkwMDM5IEwgMTA5IDEyNi45MDAzOSBDIDExMC43IDEyNi45MDAzOSAxMTIgMTI1LjYwMDM5IDExMiAxMjMuOTAwMzkgQyAxMTIgMTIyLjIwMDM5IDExMC43IDEyMC45MDAzOSAxMDkgMTIwLjkwMDM5IEwgODcuMTk5MjE5IDEyMC45MDAzOSBDIDEwMS45OTkyMiAxMTIuODAwMzkgMTEyIDk3LjEgMTEyIDc5IEMgMTEyIDUyLjUgOTAuNSAzMSA2NCAzMSB6IE0gNjQgMzcgQyA3NS4xIDM3IDg1LjE5OTIxOSA0MS4zMDAzOTEgOTIuNjk5MjE5IDQ4LjQwMDM5MSBDIDg3LjE5OTIxOSA1MS43MDAzOTEgODIuOTAwNzgxIDU2LjYwMDM5MSA4MC4zMDA3ODEgNjIuNDAwMzkxIEMgNzUuOTAwNzgxIDYxLjYwMDM5MSA3MS41IDYxLjEgNjcgNjEgTCA2NyA0NSBDIDY3IDQzLjMgNjUuNyA0MiA2NCA0MiBDIDYyLjMgNDIgNjEgNDMuMyA2MSA0NSBMIDYxIDYxIEMgNTYuNSA2MS4xIDUyLjA5OTIxOSA2MS42MDAzOTEgNDcuNjk5MjE5IDYyLjQwMDM5MSBDIDQ2LjE5OTIxOSA1OS4xMDAzOTEgNDQuMjk5MjE5IDU2LjEgNDEuNjk5MjE5IDUzLjUgQyA0MC41OTkyMTkgNTIuMyAzOC43IDUyLjMwMDM5MSAzNy41IDUzLjQwMDM5MSBDIDM2LjMgNTQuNTAwMzkxIDM2LjMwMDM5MSA1Ni4zOTk2MDkgMzcuNDAwMzkxIDU3LjU5OTYwOSBDIDM5LjEwMDM5MSA1OS4zOTk2MDkgNDAuNTk5MjE5IDYxLjM5OTYwOSA0MS42OTkyMTkgNjMuNTk5NjA5IEMgMzUuMTk5MjE5IDY1LjE5OTYwOSAyOC45MDAzOTEgNjcuNSAyMi45MDAzOTEgNzAuNSBDIDI2LjgwMDM5MSA1MS40IDQzLjcgMzcgNjQgMzcgeiBNIDk2LjkwMDM5MSA1Mi45MDAzOTEgQyAxMDAuOTAwMzkgNTguMDAwMzkxIDEwMy43OTkyMiA2My45OTk2MDkgMTA1LjE5OTIyIDcwLjU5OTYwOSBDIDk5LjE5OTIxOSA2Ny41OTk2MDkgOTIuOTAwMzkxIDY1LjI5OTIxOSA4Ni40MDAzOTEgNjMuNjk5MjE5IEMgODguNzAwMzkxIDU5LjA5OTIxOSA5Mi40MDAzOTEgNTUuNDAwMzkxIDk2LjkwMDM5MSA1Mi45MDAzOTEgeiBNIDYxIDY3IEwgNjEgMTIwLjkwMDM5IEMgNDguNCAxMjAuMDAwMzkgMzcuNDAwNzgxIDExMy42IDMwLjMwMDc4MSAxMDQgQyAzNy44MDA3ODEgMTAxLjIgNDMuODAwNzgxIDk1LjcgNDcuMzAwNzgxIDg4LjUgQyA1MC40MDA3ODEgODIuMSA1MS4xOTk2MDkgNzQuOTk5MjE5IDQ5LjU5OTYwOSA2OC4xOTkyMTkgQyA1My4zOTk2MDkgNjcuNTk5MjE5IDU3LjIgNjcuMiA2MSA2NyB6IE0gNjcgNjcuMDk5NjA5IEMgNzAuOCA2Ny4xOTk2MDkgNzQuNzAwMzkxIDY3LjYwMDc4MSA3OC40MDAzOTEgNjguMzAwNzgxIEMgNzYuOTAwMzkxIDc1LjEwMDc4MSA3Ny41OTkyMTkgODIuMTk5NjA5IDgwLjY5OTIxOSA4OC41OTk2MDkgQyA4NC4xOTkyMTkgOTUuNzk5NjA5IDkwLjE5OTIxOSAxMDEuMjk5NjEgOTcuNjk5MjE5IDEwNC4wOTk2MSBDIDkwLjU5OTIxOSAxMTMuNTk5NjEgNzkuNiAxMjAuMDAwMzkgNjcgMTIwLjkwMDM5IEwgNjcgNjcuMDk5NjA5IHogTSA0My42OTkyMTkgNjkuNDAwMzkxIEMgNDQuOTk5MjE5IDc0LjkwMDM5MSA0NC4zMDA3ODEgODAuNzAwMzkxIDQxLjgwMDc4MSA4NS45MDAzOTEgQyAzOC45MDA3ODEgOTEuOTAwMzkxIDMzLjggOTYuMzk5NjA5IDI3LjUgOTguNTk5NjA5IEMgMjcuNCA5OC42OTk2MDkgMjcuMiA5OC44MDA3ODEgMjcgOTguODAwNzgxIEMgMjMuOCA5Mi45MDA3ODEgMjIgODYuMSAyMiA3OSBMIDIyIDc3LjgwMDc4MSBDIDI4LjggNzQuMDAwNzgxIDM2LjA5OTIxOSA3MS4yMDAzOTEgNDMuNjk5MjE5IDY5LjQwMDM5MSB6IE0gODQuMzAwNzgxIDY5LjQwMDM5MSBDIDkxLjkwMDc4MSA3MS4yMDAzOTEgOTkuMiA3NC4wMDA3ODEgMTA2IDc3LjgwMDc4MSBMIDEwNiA3OSBDIDEwNiA4Ni4yIDEwNC4yIDkzLjAwMDM5MSAxMDEgOTguOTAwMzkxIEwgMTAwLjQwMDM5IDk4LjU5OTYwOSBDIDk0LjEwMDM5MSA5Ni4zOTk2MDkgODguOTk5NjA5IDkxLjkwMDM5MSA4Ni4wOTk2MDkgODUuOTAwMzkxIEMgODMuNTk5NjA5IDgwLjcwMDM5MSA4My4wMDA3ODEgNzUuMDAwMzkxIDg0LjMwMDc4MSA2OS40MDAzOTEgeiBNIDEyNCAxMjEgQSAzIDMgMCAwIDAgMTIxIDEyNCBBIDMgMyAwIDAgMCAxMjQgMTI3IEEgMyAzIDAgMCAwIDEyNyAxMjQgQSAzIDMgMCAwIDAgMTI0IDEyMSB6Ij48L3BhdGg+PC9zdmc+" />
                    <h2 className="text-xl uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}
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
        <div className="flex flex-col lg:flex-row items-center mt-10">
          <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.benefits.map((i, count) => (
                <div key={count} className="mt-10">
                  <div className="relative">
                    <img className="hidden lg:block absolute w-12" style={{left: "-64px", top: "-20px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDY0IDMxIEMgMzcuNSAzMSAxNiA1Mi41IDE2IDc5IEMgMTYgODguMSAxOC42IDk2LjYwMDM5MSAyMyAxMDMuOTAwMzkgQyAyMy4xIDEwNC4xMDAzOSAyMy4yMDAzOTEgMTA0LjMwMDM5IDIzLjQwMDM5MSAxMDQuNDAwMzkgQyAyNy43MDAzOTEgMTExLjMwMDM5IDMzLjcwMDM5MSAxMTcuMDAwMzkgNDAuOTAwMzkxIDEyMC45MDAzOSBMIDI5IDEyMC45MDAzOSBDIDI3LjMgMTIwLjkwMDM5IDI2IDEyMi4yMDAzOSAyNiAxMjMuOTAwMzkgQyAyNiAxMjUuNjAwMzkgMjcuMyAxMjYuOTAwMzkgMjkgMTI2LjkwMDM5IEwgMTA5IDEyNi45MDAzOSBDIDExMC43IDEyNi45MDAzOSAxMTIgMTI1LjYwMDM5IDExMiAxMjMuOTAwMzkgQyAxMTIgMTIyLjIwMDM5IDExMC43IDEyMC45MDAzOSAxMDkgMTIwLjkwMDM5IEwgODcuMTk5MjE5IDEyMC45MDAzOSBDIDEwMS45OTkyMiAxMTIuODAwMzkgMTEyIDk3LjEgMTEyIDc5IEMgMTEyIDUyLjUgOTAuNSAzMSA2NCAzMSB6IE0gNjQgMzcgQyA3NS4xIDM3IDg1LjE5OTIxOSA0MS4zMDAzOTEgOTIuNjk5MjE5IDQ4LjQwMDM5MSBDIDg3LjE5OTIxOSA1MS43MDAzOTEgODIuOTAwNzgxIDU2LjYwMDM5MSA4MC4zMDA3ODEgNjIuNDAwMzkxIEMgNzUuOTAwNzgxIDYxLjYwMDM5MSA3MS41IDYxLjEgNjcgNjEgTCA2NyA0NSBDIDY3IDQzLjMgNjUuNyA0MiA2NCA0MiBDIDYyLjMgNDIgNjEgNDMuMyA2MSA0NSBMIDYxIDYxIEMgNTYuNSA2MS4xIDUyLjA5OTIxOSA2MS42MDAzOTEgNDcuNjk5MjE5IDYyLjQwMDM5MSBDIDQ2LjE5OTIxOSA1OS4xMDAzOTEgNDQuMjk5MjE5IDU2LjEgNDEuNjk5MjE5IDUzLjUgQyA0MC41OTkyMTkgNTIuMyAzOC43IDUyLjMwMDM5MSAzNy41IDUzLjQwMDM5MSBDIDM2LjMgNTQuNTAwMzkxIDM2LjMwMDM5MSA1Ni4zOTk2MDkgMzcuNDAwMzkxIDU3LjU5OTYwOSBDIDM5LjEwMDM5MSA1OS4zOTk2MDkgNDAuNTk5MjE5IDYxLjM5OTYwOSA0MS42OTkyMTkgNjMuNTk5NjA5IEMgMzUuMTk5MjE5IDY1LjE5OTYwOSAyOC45MDAzOTEgNjcuNSAyMi45MDAzOTEgNzAuNSBDIDI2LjgwMDM5MSA1MS40IDQzLjcgMzcgNjQgMzcgeiBNIDk2LjkwMDM5MSA1Mi45MDAzOTEgQyAxMDAuOTAwMzkgNTguMDAwMzkxIDEwMy43OTkyMiA2My45OTk2MDkgMTA1LjE5OTIyIDcwLjU5OTYwOSBDIDk5LjE5OTIxOSA2Ny41OTk2MDkgOTIuOTAwMzkxIDY1LjI5OTIxOSA4Ni40MDAzOTEgNjMuNjk5MjE5IEMgODguNzAwMzkxIDU5LjA5OTIxOSA5Mi40MDAzOTEgNTUuNDAwMzkxIDk2LjkwMDM5MSA1Mi45MDAzOTEgeiBNIDYxIDY3IEwgNjEgMTIwLjkwMDM5IEMgNDguNCAxMjAuMDAwMzkgMzcuNDAwNzgxIDExMy42IDMwLjMwMDc4MSAxMDQgQyAzNy44MDA3ODEgMTAxLjIgNDMuODAwNzgxIDk1LjcgNDcuMzAwNzgxIDg4LjUgQyA1MC40MDA3ODEgODIuMSA1MS4xOTk2MDkgNzQuOTk5MjE5IDQ5LjU5OTYwOSA2OC4xOTkyMTkgQyA1My4zOTk2MDkgNjcuNTk5MjE5IDU3LjIgNjcuMiA2MSA2NyB6IE0gNjcgNjcuMDk5NjA5IEMgNzAuOCA2Ny4xOTk2MDkgNzQuNzAwMzkxIDY3LjYwMDc4MSA3OC40MDAzOTEgNjguMzAwNzgxIEMgNzYuOTAwMzkxIDc1LjEwMDc4MSA3Ny41OTkyMTkgODIuMTk5NjA5IDgwLjY5OTIxOSA4OC41OTk2MDkgQyA4NC4xOTkyMTkgOTUuNzk5NjA5IDkwLjE5OTIxOSAxMDEuMjk5NjEgOTcuNjk5MjE5IDEwNC4wOTk2MSBDIDkwLjU5OTIxOSAxMTMuNTk5NjEgNzkuNiAxMjAuMDAwMzkgNjcgMTIwLjkwMDM5IEwgNjcgNjcuMDk5NjA5IHogTSA0My42OTkyMTkgNjkuNDAwMzkxIEMgNDQuOTk5MjE5IDc0LjkwMDM5MSA0NC4zMDA3ODEgODAuNzAwMzkxIDQxLjgwMDc4MSA4NS45MDAzOTEgQyAzOC45MDA3ODEgOTEuOTAwMzkxIDMzLjggOTYuMzk5NjA5IDI3LjUgOTguNTk5NjA5IEMgMjcuNCA5OC42OTk2MDkgMjcuMiA5OC44MDA3ODEgMjcgOTguODAwNzgxIEMgMjMuOCA5Mi45MDA3ODEgMjIgODYuMSAyMiA3OSBMIDIyIDc3LjgwMDc4MSBDIDI4LjggNzQuMDAwNzgxIDM2LjA5OTIxOSA3MS4yMDAzOTEgNDMuNjk5MjE5IDY5LjQwMDM5MSB6IE0gODQuMzAwNzgxIDY5LjQwMDM5MSBDIDkxLjkwMDc4MSA3MS4yMDAzOTEgOTkuMiA3NC4wMDA3ODEgMTA2IDc3LjgwMDc4MSBMIDEwNiA3OSBDIDEwNiA4Ni4yIDEwNC4yIDkzLjAwMDM5MSAxMDEgOTguOTAwMzkxIEwgMTAwLjQwMDM5IDk4LjU5OTYwOSBDIDk0LjEwMDM5MSA5Ni4zOTk2MDkgODguOTk5NjA5IDkxLjkwMDM5MSA4Ni4wOTk2MDkgODUuOTAwMzkxIEMgODMuNTk5NjA5IDgwLjcwMDM5MSA4My4wMDA3ODEgNzUuMDAwMzkxIDg0LjMwMDc4MSA2OS40MDAzOTEgeiBNIDEyNCAxMjEgQSAzIDMgMCAwIDAgMTIxIDEyNCBBIDMgMyAwIDAgMCAxMjQgMTI3IEEgMyAzIDAgMCAwIDEyNyAxMjQgQSAzIDMgMCAwIDAgMTI0IDEyMSB6Ij48L3BhdGg+PC9zdmc+" />
                    <h2 className="text-xl uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}
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
    )
  }
}

export default ProgramTabs;