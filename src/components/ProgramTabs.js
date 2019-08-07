import React from "react"
import Img from 'gatsby-image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactTooltip from 'react-tooltip'


import "react-tabs/style/react-tabs.css";



class ProgramTabs extends React.Component {


  render() {
    const { program } = this.props
    return (

      <Tabs selectedTabClassName="active-tab">
        <TabList className="arrow-steps lg:flex lg:flex-row lg:justify-center lg:mx-auto sticky top-59 lg:relative lg:top-auto z-40">
          <Tab className="step uppercase font-light w-full lg:w-1/3 text-left lg:text-center text-white">1. Who is it for?</Tab>
          <Tab className="step uppercase font-light w-full lg:w-1/3 text-left lg:text-center text-white">2. How does it work?</Tab>
          <Tab className="step uppercase font-light w-full lg:w-1/3 text-left lg:text-center text-white">3. What should I expect?</Tab>
        </TabList>
        <TabPanel>
          <div className="flex flex-col lg:flex-row items-center mt-10" >
            <div className="w-full md:w-1/2 lg:w-1/2" id="who">
              <div className="flex flex-row flex-wrap justify-center w-full xl:w-2/3 mx-auto">
                {program.benefits.map((i, count) => (
                  <div key={count}>
                    <div data-tip data-for={i.title + count} className="w-32 shadow-lg bg-gray-100 border border-gray-100 px-4 py-6 text-center cursor-pointer m-3">
                      <Img width="25px" className="mx-auto" alt={i.title} fixed={i.icon.asset.fixed} />
                      <h6 className="text-xs uppercase mt-3">{i.title}</h6>
                    </div>
                    <ReactTooltip id={i.title + count} className='w-32' aria-haspopup='true' role='example' effect='solid'>
                      <span>{i.description}</span>
                    </ReactTooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.personas.map((i, count) => (
                <div key={count} className="personas">
                  <div className="relative">
                    <h2 className="text-l uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}

              <div className="my-10 w-full border-b border-black mx-auto">
              </div>
      
              <div className="mt-10 block">
                <a href={program.premiumCta}  className="uppercase font-bold border bg-white rounded-full px-4 py-2" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Start {program.title}</a>
              </div>
            </div>
          </div>

        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row items-center mt-10" >
            <div className="w-full md:w-1/2 lg:w-1/2" id="how">

              <div className="flex flex-row flex-wrap justify-center w-full xl:w-2/3 mx-auto">
                {program.exercises.map((i, count) => (
                  <div key={count}>
                    <div data-tip data-for={i.title + count} className="w-32 shadow-lg bg-gray-100 border border-gray-100 px-4 py-6 text-center cursor-pointer m-3">
                      <Img width="25px" className="mx-auto" alt={i.title} fixed={i.icon.asset.fixed} />
                      <h6 className="text-xs uppercase mt-3">{i.title}</h6>
                    </div>
                    <ReactTooltip id={i.title + count} className='w-32' aria-haspopup='true' role='example' effect='solid'>
                      <span>{i.description}</span>
                    </ReactTooltip>
                  </div>
                ))}
              </div>
              
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.techniques.map((i, count) => (
                <div key={count} className="personas">
                  <div className="relative">
                    <h2 className="text-l uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}

              <div className="my-10 w-full border-b border-black mx-auto">
              </div>
      
              <div className="mt-10 block">
                <a href={program.premiumCta} className="uppercase font-bold border bg-white rounded-full px-4 py-2" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Start {program.title}</a>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row items-center mt-10">
            <div className="w-full md:w-1/2 lg:w-1/2" id="what">

            <div className="flex flex-row flex-wrap justify-center w-full xl:w-2/3 mx-auto">
              {program.attributes.map((i, count) => (
                <div key={count}>
                  <div data-tip data-for={i.title + count} className="w-32 shadow-lg bg-gray-100 border border-gray-100 px-4 py-6 text-center cursor-pointer m-3">
                    <Img width="25px" className="mx-auto" alt={i.title} fixed={i.icon.asset.fixed} />
                    <h6 className="text-xs uppercase mt-3">{i.title}</h6>
                  </div>
                  <ReactTooltip id={i.title + count} className='w-32' aria-haspopup='true' role='example' effect='solid'>
                    <span>{i.description}</span>
                  </ReactTooltip>
                </div>
              ))}
              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 px-5 lg:px-20 mx-auto">
              {program.features.map((i, count) => (
                <div key={count} className="personas">
                  <div className="relative">
                    {/* <img className="hidden lg:block absolute w-12" style={{left: "-64px", top: "-20px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxMjggMTI4IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPiAgICA8cGF0aCBkPSJNIDY0IDMxIEMgMzcuNSAzMSAxNiA1Mi41IDE2IDc5IEMgMTYgODguMSAxOC42IDk2LjYwMDM5MSAyMyAxMDMuOTAwMzkgQyAyMy4xIDEwNC4xMDAzOSAyMy4yMDAzOTEgMTA0LjMwMDM5IDIzLjQwMDM5MSAxMDQuNDAwMzkgQyAyNy43MDAzOTEgMTExLjMwMDM5IDMzLjcwMDM5MSAxMTcuMDAwMzkgNDAuOTAwMzkxIDEyMC45MDAzOSBMIDI5IDEyMC45MDAzOSBDIDI3LjMgMTIwLjkwMDM5IDI2IDEyMi4yMDAzOSAyNiAxMjMuOTAwMzkgQyAyNiAxMjUuNjAwMzkgMjcuMyAxMjYuOTAwMzkgMjkgMTI2LjkwMDM5IEwgMTA5IDEyNi45MDAzOSBDIDExMC43IDEyNi45MDAzOSAxMTIgMTI1LjYwMDM5IDExMiAxMjMuOTAwMzkgQyAxMTIgMTIyLjIwMDM5IDExMC43IDEyMC45MDAzOSAxMDkgMTIwLjkwMDM5IEwgODcuMTk5MjE5IDEyMC45MDAzOSBDIDEwMS45OTkyMiAxMTIuODAwMzkgMTEyIDk3LjEgMTEyIDc5IEMgMTEyIDUyLjUgOTAuNSAzMSA2NCAzMSB6IE0gNjQgMzcgQyA3NS4xIDM3IDg1LjE5OTIxOSA0MS4zMDAzOTEgOTIuNjk5MjE5IDQ4LjQwMDM5MSBDIDg3LjE5OTIxOSA1MS43MDAzOTEgODIuOTAwNzgxIDU2LjYwMDM5MSA4MC4zMDA3ODEgNjIuNDAwMzkxIEMgNzUuOTAwNzgxIDYxLjYwMDM5MSA3MS41IDYxLjEgNjcgNjEgTCA2NyA0NSBDIDY3IDQzLjMgNjUuNyA0MiA2NCA0MiBDIDYyLjMgNDIgNjEgNDMuMyA2MSA0NSBMIDYxIDYxIEMgNTYuNSA2MS4xIDUyLjA5OTIxOSA2MS42MDAzOTEgNDcuNjk5MjE5IDYyLjQwMDM5MSBDIDQ2LjE5OTIxOSA1OS4xMDAzOTEgNDQuMjk5MjE5IDU2LjEgNDEuNjk5MjE5IDUzLjUgQyA0MC41OTkyMTkgNTIuMyAzOC43IDUyLjMwMDM5MSAzNy41IDUzLjQwMDM5MSBDIDM2LjMgNTQuNTAwMzkxIDM2LjMwMDM5MSA1Ni4zOTk2MDkgMzcuNDAwMzkxIDU3LjU5OTYwOSBDIDM5LjEwMDM5MSA1OS4zOTk2MDkgNDAuNTk5MjE5IDYxLjM5OTYwOSA0MS42OTkyMTkgNjMuNTk5NjA5IEMgMzUuMTk5MjE5IDY1LjE5OTYwOSAyOC45MDAzOTEgNjcuNSAyMi45MDAzOTEgNzAuNSBDIDI2LjgwMDM5MSA1MS40IDQzLjcgMzcgNjQgMzcgeiBNIDk2LjkwMDM5MSA1Mi45MDAzOTEgQyAxMDAuOTAwMzkgNTguMDAwMzkxIDEwMy43OTkyMiA2My45OTk2MDkgMTA1LjE5OTIyIDcwLjU5OTYwOSBDIDk5LjE5OTIxOSA2Ny41OTk2MDkgOTIuOTAwMzkxIDY1LjI5OTIxOSA4Ni40MDAzOTEgNjMuNjk5MjE5IEMgODguNzAwMzkxIDU5LjA5OTIxOSA5Mi40MDAzOTEgNTUuNDAwMzkxIDk2LjkwMDM5MSA1Mi45MDAzOTEgeiBNIDYxIDY3IEwgNjEgMTIwLjkwMDM5IEMgNDguNCAxMjAuMDAwMzkgMzcuNDAwNzgxIDExMy42IDMwLjMwMDc4MSAxMDQgQyAzNy44MDA3ODEgMTAxLjIgNDMuODAwNzgxIDk1LjcgNDcuMzAwNzgxIDg4LjUgQyA1MC40MDA3ODEgODIuMSA1MS4xOTk2MDkgNzQuOTk5MjE5IDQ5LjU5OTYwOSA2OC4xOTkyMTkgQyA1My4zOTk2MDkgNjcuNTk5MjE5IDU3LjIgNjcuMiA2MSA2NyB6IE0gNjcgNjcuMDk5NjA5IEMgNzAuOCA2Ny4xOTk2MDkgNzQuNzAwMzkxIDY3LjYwMDc4MSA3OC40MDAzOTEgNjguMzAwNzgxIEMgNzYuOTAwMzkxIDc1LjEwMDc4MSA3Ny41OTkyMTkgODIuMTk5NjA5IDgwLjY5OTIxOSA4OC41OTk2MDkgQyA4NC4xOTkyMTkgOTUuNzk5NjA5IDkwLjE5OTIxOSAxMDEuMjk5NjEgOTcuNjk5MjE5IDEwNC4wOTk2MSBDIDkwLjU5OTIxOSAxMTMuNTk5NjEgNzkuNiAxMjAuMDAwMzkgNjcgMTIwLjkwMDM5IEwgNjcgNjcuMDk5NjA5IHogTSA0My42OTkyMTkgNjkuNDAwMzkxIEMgNDQuOTk5MjE5IDc0LjkwMDM5MSA0NC4zMDA3ODEgODAuNzAwMzkxIDQxLjgwMDc4MSA4NS45MDAzOTEgQyAzOC45MDA3ODEgOTEuOTAwMzkxIDMzLjggOTYuMzk5NjA5IDI3LjUgOTguNTk5NjA5IEMgMjcuNCA5OC42OTk2MDkgMjcuMiA5OC44MDA3ODEgMjcgOTguODAwNzgxIEMgMjMuOCA5Mi45MDA3ODEgMjIgODYuMSAyMiA3OSBMIDIyIDc3LjgwMDc4MSBDIDI4LjggNzQuMDAwNzgxIDM2LjA5OTIxOSA3MS4yMDAzOTEgNDMuNjk5MjE5IDY5LjQwMDM5MSB6IE0gODQuMzAwNzgxIDY5LjQwMDM5MSBDIDkxLjkwMDc4MSA3MS4yMDAzOTEgOTkuMiA3NC4wMDA3ODEgMTA2IDc3LjgwMDc4MSBMIDEwNiA3OSBDIDEwNiA4Ni4yIDEwNC4yIDkzLjAwMDM5MSAxMDEgOTguOTAwMzkxIEwgMTAwLjQwMDM5IDk4LjU5OTYwOSBDIDk0LjEwMDM5MSA5Ni4zOTk2MDkgODguOTk5NjA5IDkxLjkwMDM5MSA4Ni4wOTk2MDkgODUuOTAwMzkxIEMgODMuNTk5NjA5IDgwLjcwMDM5MSA4My4wMDA3ODEgNzUuMDAwMzkxIDg0LjMwMDc4MSA2OS40MDAzOTEgeiBNIDEyNCAxMjEgQSAzIDMgMCAwIDAgMTIxIDEyNCBBIDMgMyAwIDAgMCAxMjQgMTI3IEEgMyAzIDAgMCAwIDEyNyAxMjQgQSAzIDMgMCAwIDAgMTI0IDEyMSB6Ij48L3BhdGg+PC9zdmc+" /> */}
                    <h2 className="text-l uppercase text-left">{i.title}</h2>
                  </div>
                  <p className="mt-5">{i.description}</p>
                </div>
              ))}

              <div className="my-10 w-full border-b border-black mx-auto">
              </div>
      
              <div className="mt-10 block">
                <a href={program.premiumCta} className="uppercase font-bold border bg-white rounded-full px-4 py-2" style={{borderColor: program.colorOne.hex, color: program.colorOne.hex }}>Start {program.title}</a>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    )
  }
}

export default ProgramTabs;