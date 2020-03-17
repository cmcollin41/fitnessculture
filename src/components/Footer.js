import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from '../assets/fc-logo-horizontal-white.svg'
import SubscribeForm from "./SubscribeForm";

export default () => (
  <StaticQuery
    query = {graphql`
      query FooterPrograms {
        men: allSanityProgram(filter: {gender: { eq: "men"}, active: {eq: true}}) {
          nodes {
            id
            title
            subtitle
            gender
            slug {
              current
            }
            colorOne {
              hex
            }
            colorTwo {
              hex
            }
            heroImage {
              asset {
                url
              }
            }
            testimonials {
              quote
              member
              memberImage {
                asset {
                  url
                }
              }
              location
            }
      
          }
        }
        women: allSanityProgram(filter: {gender: { eq: "women"}, active: {eq: true}}) {
          nodes {
            id
            title
            subtitle
            gender
            slug {
              current
            }
            colorOne {
              hex
            }
            colorTwo {
              hex
            }
            heroImage {
              asset {
                url
              }
            }
            testimonials {
              quote
              member
              memberImage {
                asset {
                  url
                }
              }
              location
            }
      
          }
        }
      }
    `}
   
    render = {data => (
      <footer className="w-full footer mt-auto bg-gray-900">
        <div className="container mx-auto px-5 lg:px-auto py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="order-1 w-full lg:w-1/4 pr-10">
                <Link to="/"><img src={ logo } alt="Logo" width={"150px"} /></Link>
                <div className="flex flex-col mt-4">
                  <p className="text-gray-300 text-xs">Fitness Culture is here to provide the members of Fitness Culture world class Training, Nutrition, and Mobility Programs.</p>
                </div>
            </div>
            <div className="order-4 lg:order-3 w-full lg:w-1/4 mt-10 lg:mt-0">
              <h6 className="text-gray-300 uppercase">Pages</h6>
              <div className="flex flex-col pb-2 left-0 right-0">
                <Link to="/" className="block mt-5 lg:inline-block text-gray-300 hover:text-blue-500 mr-4 text-xs">Home</Link>
                <Link to="/about" className="block mt-5 lg:inline-block text-gray-300 hover:text-blue-500 mr-4 text-xs">About</Link>
                <Link to="/blog" className="block mt-5 lg:inline-block text-gray-300 hover:text-blue-500 mr-4 text-xs">Blog</Link>
                <Link to="/contact" className="block mt-5 lg:inline-block text-gray-300 hover:text-blue-500 mr-4 text-xs">Contact</Link>
              </div>
            </div>
            <div className="order-3 lg:order-3 w-full lg:w-1/4 mt-10 lg:mt-auto">
                <h6 className="text-gray-100 uppercase">Programs</h6>
                <div className="flex flex-col pb-2 left-0 right-0">
                  <div className="flex flex-row justify-center mt-5">
                    <div className="w-64 flex flex-col">
                      <div className="text-left">
                        <h6 className="uppercase text-gray-300 text-xs">Men</h6>
                        {data.men.nodes.map((i, count) => (
                          <Link to={"/programs/" + i.gender + "/" + i.slug.current} key={count} className="block mt-4 text-gray-300 text-xs hover:text-blue-500">{ i.title}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-64 flex flex-col">
                      <div className="text-left">
                        <h6 className="uppercase text-gray-300 text-xs">Women</h6>
                        {data.women.nodes.map((i, count) => (
                          <Link to={"/programs/" + i.gender + "/" + i.slug.current} key={count} className="block mt-4 text-gray-300 text-xs hover:text-blue-500">{ i.title}</Link>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="order-2 lg:order-4 w-full lg:w-1/2 mt-10 lg:mt-0">
              <h6 className="text-gray-100 mb-6 uppercase">Join the #FitCult</h6>
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full">
                  <SubscribeForm />
                </div>
              </div>
              <div className="flex flex-row justify-between lg:justify-left">
                <a href="https://www.youtube.com/channel/UC7HQ61sWvpoxA7eK-1P9icg" target="_blank" rel="noopener noreferrer" className="mt-10 px-auto lg:px-2"><img alt="YouTube Icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48ZyBmaWxsPSIjZTBlMGUwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTQ0LjcyLDE3LjJsMTAuMzIsMzAuOTZ2MjAuNjRoNi44OHYtMjAuNjRsMTAuMzIsLTMwLjk2aC02Ljg4bC02Ljg4LDIwLjY0bC02Ljg4LC0yMC42NHpNODIuNTYsMzAuOTZjLTMuNjY4NDQsMCAtNS40NjkwNiwwLjU3NzgxIC03LjcxMzEyLDIuNDE4NzVjLTIuMTUsMS44MTQwNiAtMi43NDEyNSwzLjIxMTU2IC0yLjYwNjg4LDcuOTAxMjV2MTcuMmMwLDMuNDI2NTYgMC41NjQzOCw1LjY4NDA2IDIuNjMzNzUsNy42ODYyNWMyLjE1LDIuMDAyMTkgNC4xNzkwNiwyLjYzMzc1IDcuNjg2MjUsMi42MzM3NWMzLjY2ODQ0LDAgNS42NzA2MywtMC42MzE1NiA3Ljc0LC0yLjYzMzc1YzIuMTUsLTEuOTIxNTYgMi41OCwtNC4yNTk2OSAyLjU4LC03LjY4NjI1di0xNy4yYzAsLTMuMDM2ODcgLTAuNTM3NSwtNS45MTI1IC0yLjYyMDMxLC03LjgzNDA2Yy0yLjE1LC0xLjk3NTMxIC00LjM2NzE5LC0yLjQ4NTk0IC03LjY5OTY5LC0yLjQ4NTk0ek05OS43NiwzMC45NnYzMC45NmMwLDMuMzQ1OTQgMy4zNzI4MSw2Ljg4IDYuODgsNi44OGMzLjUwNzE5LDAgNS4zNjE1NiwtMS43NjAzMSA2Ljg4LC0zLjQ0djMuNDRoNi44OHYtMzcuODRoLTYuODh2MjcuNTJjLTAuMDQwMzEsMi4zNTE1NiAtMi44MDg0NCwzLjQ0IC0zLjQ0LDMuNDRjLTAuNzEyMTksMCAtMy40NCwtMC4xNDc4MSAtMy40NCwtMy40NHYtMjcuNTJ6TTgyLjU2LDM3Ljg0YzEuMDM0NjksMCAzLjQ0LC0wLjAxMzQ0IDMuNDQsMy40NHYxNy4yYzAsMy4zMzI1IC0yLjMyNDY5LDMuNDQgLTMuNDQsMy40NGMtMS4wMzQ2OSwwIC0zLjQ0LC0wLjA0MDMxIC0zLjQ0LC0zLjQ0di0xNy4yYzAsLTIuODA4NDQgMS40OTE1NiwtMy40NCAzLjQ0LC0zLjQ0ek04Ny41NzIxOSw3NS40MTEyNWMtMTcuMzQ3ODEsLTAuMDQwMzEgLTM0LjY4MjE5LDAgLTUyLjAzLDAuMjY4NzVjLTIuMzM4MTIsMC4wNjcxOSAtNC42NzYyNSwwLjQwMzEzIC02LjkwNjg3LDEuMTI4NzVjLTEuODAwNjMsMC42MDQ2OSAtMy41MjA2MywxLjQzNzgxIC01LjA3OTM4LDIuNTI2MjVjLTEuODQwOTQsMS4yOSAtMy40MjY1NiwyLjkxNTk0IC00LjY2MjgxLDQuNzgzNzVjLTAuODczNDQsMS4zMDM0NCAtMS41NzIxOSwyLjcyNzgxIC0yLjA5NjI1LDQuMjA1OTRjLTAuODYsMi4zNzg0NCAtMS4yNDk2OSw0Ljg5MTI1IC0xLjMxNjg4LDcuNDA0MDZjLTAuMTc0NjksMTEuMjg3NSAtMC4xNzQ2OSwyMi41NzUgMCwzMy44NjI1YzAuMDY3MTksMi4xNSAwLjM0OTM4LDQuMjczMTMgMC45MTM3NSw2LjM1NTk0YzEuMDg4NDQsMy45MjM3NSAzLjE3MTI1LDcuNTkyMTkgNi4yMDgxMywxMC4zNDY4OGMwLjg3MzQ0LDAuNzkyODEgMS44MTQwNiwxLjUwNSAyLjgyMTg3LDIuMTIzMTJjMS4yMzYyNSwwLjc2NTk0IDIuNTY2NTYsMS4zOTc1IDMuOTUwNjMsMS44Njc4MWMxLjk4ODc1LDAuNjcxODggNC4wNzE1NiwxLjAwNzgxIDYuMTY3ODEsMS4wNzVjMzQuNzc2MjUsMC42NDUgNjkuNTc5MzgsMC41Mzc1IDEwNC4zNTU2MywwYzIuMzM4MTIsLTAuMDY3MTkgNC42NzYyNSwtMC40MDMxMiA2LjkwNjg3LC0xLjEyODc1YzEuODAwNjMsLTAuNjA0NjkgMy41MjA2MywtMS40Mzc4MSA1LjA3OTM4LC0yLjUyNjI1YzEuODQwOTQsLTEuMjkgMy40MjY1NiwtMi45MTU5NCA0LjY3NjI1LC00Ljc4Mzc1YzAuODYsLTEuMzAzNDQgMS41NTg3NSwtMi43Mjc4MSAyLjA5NjI1LC00LjIwNTk0YzAuODQ2NTYsLTIuMzc4NDQgMS4yMzYyNSwtNC44OTEyNSAxLjMwMzQ0LC03LjQwNDA2YzAuMTc0NjksLTExLjc1NzgxIDAuMDUzNzUsLTIzLjUyOTA2IDAsLTM1LjI3MzQ0Yy0wLjA0MDMxLC0yLjUzOTY5IC0wLjQwMzEyLC01LjA3OTM4IC0xLjIzNjI1LC03LjQ3MTI1Yy0wLjQ5NzE5LC0xLjQ5MTU2IC0xLjE4MjUsLTIuOTI5MzggLTIuMDQyNSwtNC4yNDYyNWMtMS4yMDkzNywtMS44ODEyNSAtMi43ODE1NiwtMy41MzQwNiAtNC41OTU2MiwtNC44Mzc1Yy0xLjYxMjUsLTEuMTY5MDYgLTMuMzk5NjksLTIuMDU1OTQgLTUuMjgwOTQsLTIuNjc0MDZjLTIuMzI0NjksLTAuNzUyNSAtNC43NTY4NywtMS4wODg0NCAtNy4yMDI1LC0xLjEyODc1Yy0xNy4zMzQzNywtMC4wODA2MiAtMzQuNjgyMTksLTAuMjI4NDQgLTUyLjAzLC0wLjI2ODc1ek0xMTMuODQyNSw4Mi4zNDVjOC42NDAzMSwwLjAxMzQ0IDE3LjI4MDYzLDAuMDgwNjMgMjUuOTA3NSwwLjIxNWMxLjM3MDYzLDAuMDQwMzEgMi43NDEyNSwwLjIwMTU2IDQuMDcxNTYsMC41Mzc1YzIuMTM2NTYsMC41NjQzOCA0LjE1MjE5LDEuNjI1OTQgNS42OTc1LDMuMjExNTZjMC41MjQwNiwwLjUzNzUgMC45ODA5NCwxLjExNTMxIDEuMzk3NSwxLjc0Njg3YzAuNTc3ODEsMC45MDAzMSAxLjAzNDY5LDEuODgxMjUgMS4zNTcxOSwyLjkwMjVjMC41Mzc1LDEuNTg1NjMgMC43NTI1LDMuMjUxODggMC44MDYyNSw0LjkzMTU2YzAuMTc0NjksMTEuNzU3ODEgMC4xNzQ2OSwyMy41MTU2MyAwLDM1LjI2Yy0wLjA1Mzc1LDEuNjc5NjkgLTAuMjY4NzUsMy4zNDU5NCAtMC44MDYyNSw0LjkzMTU2Yy0wLjMyMjUsMS4wMjEyNSAtMC43NzkzNywyLjAwMjE5IC0xLjM1NzE5LDIuOTAyNWMtMC40MTY1NiwwLjYzMTU2IC0wLjg3MzQ0LDEuMjA5MzcgLTEuMzk3NSwxLjc0Njg3Yy0xLjU0NTMxLDEuNTg1NjMgLTMuNTYwOTQsMi42NDcxOSAtNS42OTc1LDMuMjExNTZjLTEuMzMwMzEsMC4zMzU5NCAtMi43MDA5NCwwLjQ5NzE5IC00LjA3MTU2LDAuNTM3NWMtMzQuNjAxNTYsMC41Mzc1IC02OS4yMTY1NiwwLjIxNSAtMTAzLjgzMTU2LDBjLTEuNDc4MTIsLTAuMDI2ODcgLTIuOTI5MzcsLTAuMjQxODcgLTQuMzQwMzEsLTAuNzEyMTljLTAuODg2ODgsLTAuMzA5MDYgLTEuNzQ2ODgsLTAuNzEyMTkgLTIuNTM5NjksLTEuMjA5MzhjLTAuNjQ1LC0wLjM4OTY5IC0xLjI2MzEyLC0wLjg0NjU2IC0xLjgxNDA2LC0xLjM1NzE5Yy0yLjEyMzEzLC0xLjkzNSAtMy41MjA2MywtNC41Mjg0NCAtNC4yNDYyNSwtNy4yNjk2OWMtMC4zODk2OSwtMS40NjQ2OSAtMC41NjQzOCwtMi45ODMxMyAtMC42MTgxMywtNC41MDE1NmMtMC4xNzQ2OSwtMTEuMDk5MzcgLTAuMDUzNzUsLTIyLjIxMjE5IDAsLTMzLjMyNWMwLjAyNjg4LC0xLjY5MzEyIDAuMjQxODgsLTMuMzcyODEgMC43NTI1LC00Ljk4NTMxYzAuMzIyNSwtMS4wMzQ2OSAwLjc2NTk0LC0yLjAxNTYyIDEuMzQzNzUsLTIuOTI5MzdjMC40MTY1NiwtMC42NzE4OCAwLjkxMzc1LC0xLjMxNjg4IDEuNDY0NjksLTEuODgxMjVjMS41OTkwNiwtMS42MzkzOCAzLjY2ODQ0LC0yLjcwMDk0IDUuODcyMTksLTMuMjUxODhjMS40MjQzNywtMC4zNDkzNyAyLjg4OTA2LC0wLjQ4Mzc1IDQuMzQwMzEsLTAuNDk3MTljMjUuOTA3NSwwIDUxLjgxNSwtMC4yOTU2MiA3Ny43MDkwNiwtMC4yMTV6TTM3Ljg0LDg5LjQ0djYuODhoNi44OHY0MS4yOGg2Ljg4di00MS4yOGg2Ljg4di02Ljg4ek04OS40NCw4OS40NHY0OC4xNmg2Ljg4di0zLjQ0YzEuMzMwMzEsMS41NDUzMSAzLjI2NTMxLDMuNDgwMzEgNi44OCwzLjQ0YzIuMTM2NTYsLTAuMDI2ODcgMy43ODkzOCwtMS43NDY4NyA0Ljg5MTI1LC0zLjEwNDA2YzEuMTI4NzUsLTEuMzU3MTkgMS45ODg3NSwtMi45NDI4MSAxLjk4ODc1LC01LjQ5NTk0di0yMC42NGMwLC0yLjk2OTY5IC0wLjk0MDYyLC00Ljk4NTMxIC0yLjEzNjU2LC02LjUwMzc1Yy0xLjE5NTk0LC0xLjUwNSAtMi45NDI4MSwtMi4zMTEyNSAtNS4xNzM0NCwtMi4zMTEyNWMtMS4xMjg3NSwwIC0yLjI0NDA2LDAuMzIyNSAtMy4zNDU5NCwwLjg4Njg4Yy0xLjEyODc1LDAuNTUwOTQgLTIuMzExMjUsMS41MzE4NyAtMy4xMDQwNiwyLjc2ODEydi0xMy43NnpNNjEuOTIsOTkuNzZ2MzAuOTZjMCwyLjE1IDAuOTI3MTksMy4yMTE1NiAxLjcyLDQuMjQ2MjVjMC44ODY4OCwxLjEyODc1IDIuNzgxNTYsMi42MzM3NSA0LjQ0NzgxLDIuNjMzNzVjMS4zNDM3NSwwIDIuNzk1LDAuMDUzNzUgNC4yMTkzNywtMC43NTI1YzEuNDM3ODEsLTAuNzEyMTkgMi4wOTYyNSwtMS4xODI1IDMuMzcyODEsLTIuNjg3NXYzLjQ0aDYuODh2LTM3Ljg0aC02Ljg4djI3LjUyYy0wLjYxODEyLDAuODA2MjUgLTAuNjQ1LDMuNDEzMTMgLTMuNDQsMy40NGMtMi41MTI4MSwwLjAyNjg4IC0zLjQ0LC0yLjY0NzE5IC0zLjQ0LC0zLjQ0di0yNy41MnpNMTI0LjUyNTMxLDk5Ljc2Yy0zLjI2NTMxLDAgLTYuMjg4NzUsMC43OTI4MSAtNy45MDEyNSwyLjQ0NTYzYy0yLjAwMjE5LDIuMDU1OTQgLTMuMDkwNjMsNC4zNjcxOSAtMy4wOTA2Myw3LjQ4NDY5djE2LjE5MjE5YzAsMy41MDcxOSAwLjk1NDA2LDYuMjM1IDIuNzgxNTYsOC4yMjM3NWMxLjgyNzUsMS45ODg3NSA0LjM4MDYzLDIuOTU2MjUgNy42NDU5NCwyLjk1NjI1YzMuNTc0MzgsMCA2LjMwMjE5LC0wLjg4Njg3IDguMDQ5MDYsLTIuODA4NDRjMS44NTQzOCwtMS44Mjc1IDIuMTUsLTQuNjIyNSAyLjE1LC04LjM3MTU2di0yLjA0MjVoLTYuODh2MS43MmMwLDIuMDY5MzggLTAuMjAxNTYsMy42Njg0NCAtMC42ODUzMSw0LjIzMjgxYy0wLjQ3MDMxLDAuNjMxNTYgLTEuMzU3MTksMC45MTM3NSAtMi43NTQ2OSwwLjkyNzE5Yy0xLjI2MzEyLDAuMDEzNDQgLTIuMjE3MTksLTAuMzM1OTQgLTIuNjg3NSwtMS4xMjg3NWMtMC40OTcxOSwtMC43MjU2MiAtMC43NTI1LC0xLjk0ODQ0IC0wLjc1MjUsLTMuODd2LTUuMzIxMjVoMTMuNzZ2LTEwLjcwOTY5YzAsLTMuNDQgLTAuNTY0MzcsLTUuNTc2NTYgLTIuMzM4MTIsLTcuNDA0MDZjLTEuNzMzNDQsLTEuODI3NSAtNC4wMzEyNSwtMi41MjYyNSAtNy4yOTY1NiwtMi41MjYyNXpNOTkuNzYsMTA0LjkyYzEuODk0NjksMCAzLjQ0LDEuNzIgMy40NCw1LjE2djE3LjI4MDYzYzAsMS44OTQ2OSAtMS41NDUzMSwzLjM1OTM3IC0zLjQ0LDMuMzU5MzdjLTEuODk0NjksMCAtMy40MTMxMiwtMC43MjU2MiAtMy40NCwtMS43MnYtMjAuNjRjMC4wMjY4OCwtMS43MzM0NCAxLjU0NTMxLC0zLjQ0IDMuNDQsLTMuNDR6TTEyMy44NCwxMDYuNjRjMS44OTQ2OSwwIDMuNDQsMS4zMzAzMSAzLjQ0LDMuNDR2My40NGgtNi44OHYtMy40NGMwLjAyNjg4LC0xLjg0MDk0IDEuNTQ1MzEsLTMuNDQgMy40NCwtMy40NHoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="/></a>
                <a href="https://www.facebook.com/fitcultprogramming" target="_blank" rel="noopener noreferrer" className="mt-10 px-auto lg:px-2"><img alt="Facebook Icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTg2LDYuODhjLTQzLjY1NjAzLDAgLTc5LjEyLDM1LjQ2Mzk3IC03OS4xMiw3OS4xMmMwLDQzLjY1NjAzIDM1LjQ2Mzk3LDc5LjEyIDc5LjEyLDc5LjEyYzQzLjY1NjAzLDAgNzkuMTIsLTM1LjQ2Mzk3IDc5LjEyLC03OS4xMmMwLC00My42NTYwMyAtMzUuNDYzOTcsLTc5LjEyIC03OS4xMiwtNzkuMTJ6TTg2LDEzLjc2YzM5LjkzNzc5LDAgNzIuMjQsMzIuMzAyMjEgNzIuMjQsNzIuMjRjMCwzOS45Mzc3OSAtMzIuMzAyMjEsNzIuMjQgLTcyLjI0LDcyLjI0Yy0zOS45Mzc3OSwwIC03Mi4yNCwtMzIuMzAyMjEgLTcyLjI0LC03Mi4yNGMwLC0zOS45Mzc3OSAzMi4zMDIyMSwtNzIuMjQgNzIuMjQsLTcyLjI0ek05MS40MzU0NywzNC40Yy05LjEyMjM5LDAgLTE2LjA0MDczLDIuOTgzMjMgLTIwLjMwNDA2LDguMjU3MzVjLTQuMjYzMzMsNS4yNzQxMiAtNS43NzE0LDEyLjMxNzQ1IC01Ljc3MTQsMjAuMDQyMDN2Ni4xMDA2M2gtNi44OGMtMS44OTk3OCwwLjAwMDE5IC0zLjQzOTgxLDEuNTQwMjIgLTMuNDQsMy40NHYxNy4yYzAuMDAwMTksMS44OTk3OCAxLjU0MDIyLDMuNDM5ODEgMy40NCwzLjQ0aDYuODh2NDEuMjhjMC4wMDAxOSwxLjg5OTc4IDEuNTQwMjIsMy40Mzk4MSAzLjQ0LDMuNDRoMjAuNjRjMS44OTk3OCwtMC4wMDAxOSAzLjQzOTgxLC0xLjU0MDIyIDMuNDQsLTMuNDR2LTQxLjI4aDEzLjc2YzEuNjQwNDQsLTAuMDAwNTggMy4wNTIyOCwtMS4xNTkzIDMuMzcyODEsLTIuNzY4MTNsMy40NCwtMTcuMmMwLjIwMTAzLC0xLjAxMDA5IC0wLjA2MTA0LC0yLjA1NzExIC0wLjcxNDIsLTIuODUzNGMtMC42NTMxNiwtMC43OTYyOSAtMS42Mjg3MSwtMS4yNTgwNyAtMi42NTg2MSwtMS4yNTg0OGgtMTcuMnYtNy41NDUxNWMwLC0xLjY2ODQ4IDAuMTA3OTEsLTEuNjU0NzMgMC41OTEyNSwtMS45Njg2YzAuNDgzMzUsLTAuMzEzODYgMi4yMzAyMywtMC44MDYyNSA1LjI5NDM4LC0wLjgwNjI1aDExLjMxNDM3YzEuODk5NzgsLTAuMDAwMTkgMy40Mzk4MSwtMS41NDAyMiAzLjQ0LC0zLjQ0di0xMy43NmMtMC4wMDA4LC0xLjQ1MzY5IC0wLjkxNTIsLTIuNzQ5OTkgLTIuMjg0MzcsLTMuMjM4NDRjMCwwIC05LjkwNTgzLC0zLjY0MTU2IC0xOS44MDAxNiwtMy42NDE1NnpNOTEuNDM1NDcsNDEuMjhjNi41MDk5MywwIDEyLjU0NzE0LDEuNzU1OTQgMTUuMjA0NTMsMi41ODY3MnY3LjczMzI4aC03Ljg3NDM3Yy0zLjYwMjU4LDAgLTYuNTI1NTYsMC4yOTA5NiAtOS4wMzY3MiwxLjkyMTU2Yy0yLjUxMTE2LDEuNjMwNiAtMy43Mjg5LDQuNzU0MzIgLTMuNzI4OSw3LjczMzI4djEwLjk4NTE1YzAuMDAwMTksMS44OTk3OCAxLjU0MDIyLDMuNDM5ODEgMy40NCwzLjQ0aDE2LjQ0MDc4bC0yLjA2MjY1LDEwLjMyaC0xNC4zNzgxM2MtMS44OTk3OCwwLjAwMDE5IC0zLjQzOTgxLDEuNTQwMjIgLTMuNDQsMy40NHY0MS4yOGgtMTMuNzZ2LTQxLjI4Yy0wLjAwMDE5LC0xLjg5OTc4IC0xLjU0MDIyLC0zLjQzOTgxIC0zLjQ0LC0zLjQ0aC02Ljg4di0xMC4zMmg2Ljg4YzEuODk5NzgsLTAuMDAwMTkgMy40Mzk4MSwtMS41NDAyMiAzLjQ0LC0zLjQ0di05LjU0MDYzYzAsLTYuODA5NDIgMS4zOTMyNSwtMTIuMTk0MDUgNC4yMzk1MywtMTUuNzE1MTVjMi44NDYyOCwtMy41MjExIDcuMjM5NTMsLTUuNzA0MjIgMTQuOTU1OTQsLTUuNzA0MjJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></a>
                <a href="https://m.me/fitcultprogramming" target="_blank" rel="noopener noreferrer" className="mt-10 px-auto lg:px-2"><img alt="Messenger Icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2UwZTBlMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNODYsNi44OGMtNDMuNTI0MDYsMCAtNzkuMTIsMzMuMDE1OTQgLTc5LjEyLDczLjk2YzAsMjIuMzg2ODggMTAuNzc2ODgsNDIuMjYwOTQgMjcuNTIsNTUuNzkyNXYzMC43NDVsNS4wNTI1LC0yLjY4NzVsMjQuODMyNSwtMTIuOWM2LjkzMzc1LDEuODU0MzggMTQuMTQ5NjksMy4wMSAyMS43MTUsMy4wMWM0My41MjQwNiwwIDc5LjEyLC0zMy4wMTU5NCA3OS4xMiwtNzMuOTZjMCwtNDAuOTQ0MDYgLTM1LjU5NTk0LC03My45NiAtNzkuMTIsLTczLjk2ek04NiwxMy43NmM0MC4wNTcxOSwwIDcyLjI0LDMwLjEyNjg4IDcyLjI0LDY3LjA4YzAsMzYuOTUzMTMgLTMyLjE4MjgxLDY3LjA4IC03Mi4yNCw2Ny4wOGMtNy40NDQzNywwIC0xNC42NDY4NywtMS4wNzUgLTIxLjM5MjUsLTMuMDFsLTEuMjksLTAuMzIyNWwtMS4xODI1LDAuNjQ1bC0yMC44NTUsMTAuODU3NXYtMjIuNTc1bC0xLjI5LC0wLjk2NzVjLTE2LjA0NDM3LC0xMi4zNDkwNiAtMjYuMjMsLTMwLjkzMzEyIC0yNi4yMywtNTEuNzA3NWMwLC0zNi45NTMxMiAzMi4xODI4MSwtNjcuMDggNzIuMjQsLTY3LjA4ek03OC4xNTI1LDYwLjk1MjVsLTQxLjM4NzUsNDMuODZsMzcuMTk1LC0yMC44NTVsMTkuODg3NSwyMS4yODVsNDAuODUsLTQ0LjI5bC0zNi4yMjc1LDIwLjMxNzV6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+"/></a>
                <a href="https://www.instagram.com/fitnessculturetraining" target="_blank" rel="noopener noreferrer" className="mt-10 px-auto lg:px-2"><img alt="Instagram Icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTU1LjA0LDEwLjMyYy0yNC42NTYyNiwwIC00NC43MiwyMC4wNjM3NCAtNDQuNzIsNDQuNzJ2NjEuOTJjMCwyNC42NTYyNiAyMC4wNjM3NCw0NC43MiA0NC43Miw0NC43Mmg2MS45MmMyNC42NTYyNiwwIDQ0LjcyLC0yMC4wNjM3NCA0NC43MiwtNDQuNzJ2LTYxLjkyYzAsLTI0LjY1NjI2IC0yMC4wNjM3NCwtNDQuNzIgLTQ0LjcyLC00NC43MnpNNTUuMDQsMTcuMmg2MS45MmMyMC45Mzc1LDAgMzcuODQsMTYuOTAyNSAzNy44NCwzNy44NHY2MS45MmMwLDIwLjkzNzUgLTE2LjkwMjUsMzcuODQgLTM3Ljg0LDM3Ljg0aC02MS45MmMtMjAuOTM3NSwwIC0zNy44NCwtMTYuOTAyNSAtMzcuODQsLTM3Ljg0di02MS45MmMwLC0yMC45Mzc1IDE2LjkwMjUsLTM3Ljg0IDM3Ljg0LC0zNy44NHpNMTI3LjI4LDM3Ljg0Yy0zLjc5OTcyLDAgLTYuODgsMy4wODAyOCAtNi44OCw2Ljg4YzAsMy43OTk3MiAzLjA4MDI4LDYuODggNi44OCw2Ljg4YzMuNzk5NzIsMCA2Ljg4LC0zLjA4MDI4IDYuODgsLTYuODhjMCwtMy43OTk3MiAtMy4wODAyOCwtNi44OCAtNi44OCwtNi44OHpNODYsNDguMTZjLTIwLjg1NzcxLDAgLTM3Ljg0LDE2Ljk4MjI5IC0zNy44NCwzNy44NGMwLDIwLjg1NzcxIDE2Ljk4MjI5LDM3Ljg0IDM3Ljg0LDM3Ljg0YzIwLjg1NzcxLDAgMzcuODQsLTE2Ljk4MjI5IDM3Ljg0LC0zNy44NGMwLC0yMC44NTc3MSAtMTYuOTgyMjksLTM3Ljg0IC0zNy44NCwtMzcuODR6TTg2LDU1LjA0YzE3LjEzOTQ4LDAgMzAuOTYsMTMuODIwNTIgMzAuOTYsMzAuOTZjMCwxNy4xMzk0OCAtMTMuODIwNTIsMzAuOTYgLTMwLjk2LDMwLjk2Yy0xNy4xMzk0OCwwIC0zMC45NiwtMTMuODIwNTIgLTMwLjk2LC0zMC45NmMwLC0xNy4xMzk0OCAxMy44MjA1MiwtMzAuOTYgMzAuOTYsLTMwLjk2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
                <a href="mailto:support@fitnessculture.com" target="_blank" rel="noopener noreferrer" className="mt-10 px-auto lg:px-2"><img alt="Gmail Icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2UwZTBlMCI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNMTguOTIsMjQuMDhjLTguNDkyNSwwIC0xNS40Mzk2OSw2LjkzMzc1IC0xNS40OCwxNS40MjYyNWMwLDAgMCwwLjAxMzQ0IDAsMC4wMjY4OGMwLDAuMDEzNDQgMCwwLjAxMzQ0IDAsMC4wMjY4N3Y5Mi44OGMwLDguNTA1OTQgNi45NzQwNiwxNS40OCAxNS40OCwxNS40OGgxMzQuMTZjOC41MDU5NCwwIDE1LjQ4LC02Ljk3NDA2IDE1LjQ4LC0xNS40OHYtOTIuODhjMCwtMC4wMTM0NCAwLC0wLjAxMzQ0IDAsLTAuMDI2ODdjMCwtMC4wMTM0NCAwLC0wLjAyNjg4IDAsLTAuMDI2ODhjLTAuMDQwMzEsLTguNDkyNSAtNi45ODc1LC0xNS40MjYyNSAtMTUuNDgsLTE1LjQyNjI1ek0yNy44NjkzOCwzMC45NmgxMTYuMjc0NjlsLTU4LjE0NDA2LDQwLjUyNzV6TTE2LjQyMDYzLDMxLjM2MzEzbDY5LjU3OTM3LDQ4LjUwOTM3bDY5LjU5MjgxLC00OC41MDkzN2MzLjUyMDYyLDEuMDYxNTYgNi4wNjAzMSw0LjI1OTY5IDYuMDg3MTksOC4xNTY1NmMtMC4wMTM0NCwwLjcyNTYzIC0wLjc1MjUsMi4xNzY4OCAtMS44Mjc1LDMuMzQ1OTRjLTEuMDg4NDQsMS4xODI1IC0yLjE1LDEuOTIxNTYgLTIuMTUsMS45MjE1NmwtMC4wMTM0NCwwLjAyNjg4bC03MS42ODkwNiw1MC43NGwtNzEuNjg5MDYsLTUwLjc0bC0wLjAxMzQ0LC0wLjAyNjg4YzAsMCAtMS4wNjE1NiwtMC43MzkwNiAtMi4xNSwtMS45MjE1NmMtMS4wNzUsLTEuMTY5MDYgLTEuODE0MDYsLTIuNjIwMzEgLTEuODI3NSwtMy4zNDU5NGMwLjAyNjg4LC0zLjg5Njg3IDIuNTY2NTYsLTcuMDk1IDYuMTAwNjMsLTguMTU2NTZ6TTEwLjMyLDUwLjQwNDA2bDAuMDI2ODgsMC4wMjY4N2wwLjAyNjg3LDAuMDEzNDR2MC4wMTM0NGwxMC4yNjYyNSw3LjI1NjI1djgzLjMyNTk0aC0xLjcyYy00Ljc4Mzc1LDAgLTguNiwtMy44MTYyNSAtOC42LC04LjZ6TTE2MS42OCw1MC40MDQwNnY4Mi4wMzU5NGMwLDQuNzgzNzUgLTMuODE2MjUsOC42IC04LjYsOC42aC0xLjcydi04My4zMjU5NGwxMC4yNjYyNSwtNy4yNTYyNXYtMC4wMTM0NHpNMjcuNTIsNjIuNTc4NDRsNTguNDgsNDEuMzg3NWw1OC40OCwtNDEuMzg3NXY3OC40NjE1NmgtMTE2Ljk2eiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="/></a>

              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto p-2 flex flex-col lg:flex-row justify-center text-center">
            <span className="text-xs text-gray-500">314 N 3050 E Ste B1, St. George UT, 84790</span> 
            <span className="hidden lg:inline-block mx-5 text-gray-500">|</span>       
            <span className="text-xs text-gray-500">&copy; 2019 Fitness Culture. All Rights Reserved</span>
            <span className="hidden lg:inline-block mx-5 text-gray-500">|</span>
            <span className="text-xs text-gray-500"><a href="https://app.fitnessculture.com/privacy-policy" target="_blank" rel="noopener noreferrer">Terms & Privacy</a></span>
            <span className="hidden lg:inline-block mx-5 text-gray-500">|</span>
            <span className="text-xs text-gray-500"><a href="https://app.fitnessculture.com/returns" target="_blank" rel="noopener noreferrer">Return Policy</a></span>
          </div>
        </div>
      </footer>
    )}
  />
)