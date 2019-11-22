import React from "react"

const DripForm = ({block}) => {

  return (
    <>
      <div className="w-full lg:w-1/3 lg:px-10 mx-auto bg-white rounded-sm shadow-lg" id="topForm">
        <div className="flex flex-row justify-center">
          <div className="w-full">
            <form id="campaignForm" className="w-full max-w-lg my-10" data-drip-embedded-form={block.formId} action={`https://www.getdrip.com/forms/${block.formId}/submissions`} method="post">
              <span data-drip-attribute="headline" className="hidden"></span>
              <span data-drip-attribute="description" className="hidden"></span>
              <input type="hidden" name="tags[]" value="your_tag" />
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                    Name
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="First Name" name="fields[first_name]" required />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                    Email
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="youremail@email.com" name="fields[email]" required/>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-checkbox" >
                    <input className="mr-2 leading-tight" type="checkbox" id="grid-checkbox" name="fields[terms_and_condition]" required/>
                    <span className="text-xs">I Agree</span>
                  </label>
                </div>
                <span className="text-xs font-light px-3">
                By submitting this form, you are confirming you have read and agree to our <a href="https://app.fitnessculture.com/privacy-policy" target="_blank" rel="noopener noreferrer">Terms and Privacy Statement</a>. Basically, all the power we gained on this program will keep your information safe.
                </span>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                  <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-sm uppercase" type="submit">
                    {block.cta}
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

export default DripForm;