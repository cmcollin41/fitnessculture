import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import axios from 'axios'
import '../css/global.css'



const H3pDownload = () => {
  
  const [values, setValues] = useState({name: '', email: '', height: '', weight: '', age: '', bodyfat: '', squat: '', bench: '', deadlift: '', ohpress: '', incline: '', frontsquat: ''})

  const handleInputChange = event => {
    const {name, value} = event.target
    setValues({...values, [name]: value})
  }

  const url = window.location.href

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if(url.indexOf('?code=X345&934') == -1 || getCookie("code") === "X345&934"){
    // insert modal
  }

  // The below numbers are:
  // Name / Email / Height / Weight / Age / Body Fat / Squat / Bench / Deadlift / OHPress / Incline / Front Squat
  

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // fetch(`https://ftserv.herokuapp.com/force/${values.name}/${values.email}/${values.height}/${values.weight}/${values.age}/${values.bodyfat}/${values.squat}/${values.bench}/${values.deadlift}/${values.ohpress}/${values.incline}/${values.frontsquat}`, {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    // })

    // fetch(`https://ftserv.herokuapp.com/force/`, {
    //   headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    //   body: `Chris%20Collinsworth/cmcollin41@gmail.com/73/250/30/11/650/350/650/225/315/405`,
    //   method: 'POST'
    // })

    axios.post("https://ftserv.herokuapp.com/force/Chris%20Collinsworth/cmcollin41@gmail.com/73/250/30/11/650/350/650/225/315/405",{
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

 
  }
  

  
  return (
    <Layout>
      <SEO title="H3P Download" description="Download page for H3P arms ebook."  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="statement mb-10 text-3xl text-center">Last Step... <br /> before you get shredded</h1>
        <div className="flex flex-row justify-center">
          <div className="w-full lg:w-1/2">
      
            <form name="PDF Form"  className="w-full">
  
              <div className="flex flex-row justify-center -mx-3">
                <div className="w-full lg:w-3/4 px-3">
                  <div className="mb-4">
                    <label>
                      Name
                    </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.name}
                        onChange={handleInputChange}
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={values.age}
                        onChange={handleInputChange}
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-row justify-center -mx-3">
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Height
                    </label>
                    <input
                      name="height"
                      placeholder="72"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.height}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Weight
                    </label>
                    <input
                      name="weight"
                      placeholder="228"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.weight}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Body Fat %
                    </label>
                    <input
                      name="bodyfat"
                      placeholder="18%"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.bodyfat}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center -mx-3">
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Squat
                    </label>
                    <input
                      name="squat"
                      placeholder="500"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.squat}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Bench Press
                    </label>
                    <input
                      name="bench"
                      placeholder="305"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.bench}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Deadlift
                    </label>
                    <input
                      name="deadlift"
                      placeholder="415"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.deadlift}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center -mx-3">
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Overhead Press
                    </label>
                    <input
                      name="ohpress"
                      placeholder="250"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.ohpress}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Incline Press
                    </label>
                    <input
                      name="incline"
                      placeholder="205"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.incline}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="w-1/3 px-3">
                  <div className="mb-4">
                    <label>
                      Front Squat
                    </label>
                    <input
                      name="frontsquat"
                      placeholder="150"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={values.frontsquat}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <button className="btn bg-blue-500 rounded text-white shadow" onChange={handleFormSubmit} type="submit">Send me my PDF</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default H3pDownload