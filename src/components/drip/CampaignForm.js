import React, {useState} from "react"

const CampaignForm = () => {
  const [inputs, setInputs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var campaignForm = document.getElementById('campaignForm')
    var data = {"subscribers": [inputs]}
    console.log(JSON.stringify(data))
    fetch("https://api.getdrip.com/v2/9536059/subscribers", {
      method: "POST",
      Host: "api.getdrip.com",
      headers: {
        "Authorization": "Basic Mjc5ZWYwMmY2NDg1NDZkNTBlMDkxMjFmODZjOTQzYzk6",
        "Content-Type": "application/json",
        "User-Agent": "Fitness Culture (www.fitnessculture.com)",
      },
      body: JSON.stringify(data),
    }).then(function(response) {
      console.log(response)
      if (response.ok){
        campaignForm.reset()
      }
    }, function(error) {
      console.log(error)
    })
  } 


  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return (
    <>
      <div className="my-20 px-5 bg-white rounded" id="topForm">
        <div className="flex flex-row justify-center">
          <div className="w-full">
            <form id="campaignForm" className="w-full max-w-lg my-10" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                    Name
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="First Name" name="first_name" value={inputs.first_name || ""} onChange={handleInputChange} />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                    Email
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="youremail@email.com" name="email" value={inputs.email || ""} onChange={handleInputChange} />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-checkbox" >
                    <input className="mr-2 leading-tight" type="checkbox" id="grid-checkbox" name="checkbox" value={inputs.checkbox || ""} onSubmit={handleInputChange} />
                    <span className="text-xs">I Agree</span>
                  </label>
                </div>
                <span className="text-xs font-light px-3">
                By submitting this form, you are confirming you have read and agree to our <a href="https://app.fitnessculture.com/privacy-policy" target="_blank" rel="noopener noreferrer">Terms and Privacy Statement</a>. Basically, all the power we gained on this program will keep your information safe.
                </span>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                  <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full uppercase" type="submit">
                    Download My PDF
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampaignForm
