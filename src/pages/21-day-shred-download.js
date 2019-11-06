import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from '../components/seo'

import '../css/global.css'



const Download = ({data}) => {

  const program = data.sanityProduct

  const [values, setValues] = useState({name: '', email: '', height: '', weight: '', age: '', bodyfat: '', squat: '', bench: '', deadlift: '', ohpress: '', incline: '', frontsquat: ''})
  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false)
  const [code, setCode] = useState({password: ''})
  const [denied, setDenied] = useState(false);

  let form = React.createRef();

  function validate() {
    return form.current.reportValidity();
  }
   
  useEffect(() => {

    function getUrlVars() {
      var vars = {};
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
    }

    function getUrlParam(parameter, defaultvalue){
      var urlparameter = defaultvalue;
      if(window.location.href.indexOf(parameter) > -1){
          urlparameter = getUrlVars()[parameter];
          }
      return urlparameter;
    }

    if(getUrlParam('code', '') === `${program.password}` || getCookie("code") === `${program.password}`){
      // insert modal
      setDenied(false)
      setAccess(true)
    }
  },[handleCodeSubmit])

  const handleInputChange = event => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }

  const handleCodeChange = event => {
    const {name, value} = event.target
    setCode({...code, [name]: value})
    setDenied(false)
  }


  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  
  

  // The below numbers are:
  // Name / Email / Height / Weight / Age / Body Fat / Squat / Bench / Deadlift / OHPress / Incline / Front Squat


  async function handleFormSubmit(e) {
    e.preventDefault();
    if (validate()){
      setSubmitting(true);
      try {
        const URL = `https://ftserv.herokuapp.com/force/${values.name}/${values.email}/${values.height}/${values.weight}/${values.age}/${values.bodyfat}/${values.squat}/${values.bench}/${values.deadlift}/${values.ohpress}/${values.incline}/${values.frontsquat}`;
        const fetchResult = fetch(URL,{method: "POST"})
        const response = await fetchResult;
        const data = await response;
        if (data) {setSubmitting(false)};
        
      } catch(err) {
        alert("Hmmm. Something went wrong. Try again.")
      }
    }
  }

  function handleCodeSubmit(e) {
    e.preventDefault();
    if (code.password === `${program.password}`) {
      setCookie("code",code.password, 30)
      setCode(code.password)
    } else {
      setDenied(true)
    }
  }
  
  

  if (access) {
    return (
      <Layout>
        <SEO title="H3P Download" description="Download page for H3P arms ebook."  />
        <div className="container mx-auto py-20 px-5">
          <h1 className="statement mb-10 text-3xl text-center">Last Step... <br /> before you get shredded</h1>
          <div className="flex flex-row justify-center">
            <div className="w-full lg:w-1/2">

              <form name="PDF Form" ref={form}className="w-full">

                <div className="flex flex-row flex-wrap justify-center -mx-3">
                  <div className="w-full lg:w-3/4 px-3">
                    <div className="mb-4">
                      <label>
                        Name
                      </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={values.name}
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/4 px-3">
                    <div className="mb-4">
                      <label>
                        Age
                      </label>
                        <input
                          type="text"
                          name="age"
                          placeholder="29"
                          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={values.age}
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-row flex-wrap justify-center -mx-3">
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Height
                      </label>
                      <input
                        name="height"
                        placeholder="72"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.height}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Weight
                      </label>
                      <input
                        name="weight"
                        placeholder="228"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.weight}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Body Fat %
                      </label>
                      <input
                        name="bodyfat"
                        placeholder="18%"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.bodyfat}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Squat
                      </label>
                      <input
                        name="squat"
                        placeholder="500"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.squat}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Bench Press
                      </label>
                      <input
                        name="bench"
                        placeholder="305"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.bench}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Deadlift
                      </label>
                      <input
                        name="deadlift"
                        placeholder="415"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.deadlift}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Overhead Press
                      </label>
                      <input
                        name="ohpress"
                        placeholder="250"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.ohpress}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Incline Press
                      </label>
                      <input
                        name="incline"
                        placeholder="205"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.incline}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-1/3 px-3">
                    <div className="mb-4">
                      <label>
                        Front Squat
                      </label>
                      <input
                        name="frontsquat"
                        placeholder="150"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.frontsquat}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <button className={"btn rounded-sm shadow " + ( submitting ? "bg-gray-500 cursor-not-allowed text-black" : "bg-blue-500 text-white")} onClick={handleFormSubmit}>{submitting ? "Sending Your PDF..." : "Send My PDF"}</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="h-screen bg-gray-100">
          <div className="container mx-auto h-full px-5">
            <div className="flex flex-wrap justify-center items-center h-full w-full">
              <div>
                <div className="w-full text-center">
                  <h1>Enter Your 21 Day Shred Password</h1>
                </div>
                {denied && 
                  <div className="bg-red-400 text-black text-sm text-center px-4 py-2 my-4">
                    Sorry, your code is invalid.
                  </div>
                }
                <form className="flex w-full">
                  <div className="w-full">
                    <div className="mt-2">
                      <input
                        name="password"
                        placeholder="Code"
                        className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={code.password}
                        onChange={handleCodeChange}
                      />
                      <button className={"btn rounded-sm shadow bg-blue-500 text-white w-full mt-2"} onClick={handleCodeSubmit}>Submit Password</button>
                    </div>
                  </div> 
                </form>
              </div>
            </div>
          </div>
        </div>  
      </Layout>
    )
  }
}

export default Download


export const pageQuery = graphql`
  query{
    sanityProduct(shopifyId: {eq: "4337398775889"}) {
      password
    }
  }
`