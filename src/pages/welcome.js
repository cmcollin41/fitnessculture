import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import '../css/global.css'

import aSets from '../assets/welcome/aSets.png'
import bSets from '../assets/welcome/bSets.png'
import cSets from '../assets/welcome/cSets.png'
import autoFill from '../assets/welcome/autoFill.png'
import mealBuildrOne from '../assets/welcome/mealBuildrOne.png'
import mobility from '../assets/welcome/mobility.png'
import nutrition from '../assets/welcome/nutrition.png'
import startingOne from '../assets/welcome/startingOne.png'
import startingTwo from '../assets/welcome/startingTwo.png'
import startingThree from '../assets/welcome/startingThree.png'
import startingFour from '../assets/welcome/startingFour.png'
import time from '../assets/welcome/time.png'
import video from '../assets/welcome/video.png'





const Welcome = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  }
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  }

  return (
    <Layout>
      <SEO title="Welcome" description="Welcome to Fitness Culture"  />

      <div className="container mx-auto py-20 px-5">
        <h1 className="uppercase text-3xl text-center">App Walkthrough</h1>
        <p className="text-center text-xl font-light">Get up-to-speed on all our app has to offer.</p>
        <div className="shadow rounded-full w-full bg-grey-light my-10">
          <div className="bg-blue-500 rounded-full text-xs leading-none py-1 text-center text-white" style={{width: (currentStep * 11) + "%"}}>{currentStep * 11}%</div>
        </div>

        <div className={"mt-10 " + (currentStep === 1 ? "block" : "hidden")}>
          <h2 className="uppercase text-xl my-4">Welcome to Fitness Culture</h2>
          <p>At Fitness Culture we are much more than just an app. We want you to treat us like your personal coaching service. All of the features in our app will be your daily guide, but nothing is as value as being able to reach out to a coach for feedback on technique, nutritional changes, and help to work around and fix injuries.</p>
          <p>Make sure to join our Facebook community. We field all your questions and we have a super knowledgeable community of people ready to help you reach your goals.</p>
          <p>If you need help with anything you can email <a href="mailto:support@fitnessculture.com">support@fitnessculture.com.</a></p>
          <h2 className="uppercase text-xl mt-10 mb-4">Getting Started with the App.</h2>
          <p>The app has 3 core sections:</p>
          <ul className="my-6">
            <li>1. Workouts</li>
            <li>2. Nutrition</li>
            <li>3. Mobility</li>
          </ul>
          <p>To make it easy, we've broken it up by the features included in every section. We are going to go through everything step by step you make sure you get started on the right foot. If you ever have a question on any of the features, you can just reference this page for the answer!</p>
        </div>

        {/* <div className={"mt-10 " + (currentStep === 2 ? "block" : "hidden")}>					
						<div className="card kill-border">
							<div className="card-body">
								<h2 className="text-xl uppercase">Setting Up Your Programming</h2>
								<p className="card-text">
									To get your workouts to display within the app you will need to log into <a href="https://app.fitnessculture.com" target="_blank" rel="noopener noreferrer">app.fitnessculture.com</a>.
								</p>
							</div>
						</div>

            <div className="w-full w-1/3 my-10">
							<iframe src="https://youtube.com/embed/1JA8MPVT4Co?controls=1&showinfo=0&rel=0" title="Setting Up Programming" height="500" frameborder="0" allowfullscreen className="mx-auto w-full"></iframe>
						</div>
						
						<div className="card kill-border">
							<div className="card-body">
								
								<div className="flex flex-col lg:flex-row justify-center">
									
									<div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Login</h2>
										<img src={startingOne} alt="A Sets" class="w-full"/>
									</div>
									
									
									<div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Click Programs Tab</h2>
										<img src={startingTwo} alt="B Sets" class="w-full" />
									</div>

                  <div className="w-full lg:w-1/4 p-5">
									<h2 className="uppercase my-6">Find Your Package</h2>
										<img src={startingThree} alt="C Sets" class="w-full" />
									</div>
									
									
									<div className="w-full lg:w-1/4 p-5">
                  <h2 className="uppercase my-6">Choose Start Date</h2>
										<img src={startingFour} alt="Video" class="w-full" />
									</div>
								</div>
								
							</div>
						</div>
								
        </div> */}
  

        <div className={"mt-10 " + (currentStep === 2 ? "block" : "hidden")}>
						<div className="card kill-border">
							<div className="card-body">
								<h2 className="text-xl uppercase">Navigating Your Workouts</h2>
								<p className="text">
									Every exercise is displayed in order for the day. Most days start with a warm up and are followed by a series of letters. The letters indicate the next exercise or grouping of exercise to complete for the day. If the letter has multiple exercises listed, you will complete every set of those exercises before moving on to the next letter for the day.
								</p>
							</div>
						</div>

            <div className="w-full my-10">
              <iframe src="https://youtube.com/embed/-zI7Z4w-VTw?controls=1&showinfo=0&rel=0" title="Navigating Your Workouts" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
            </div>
						
						<div className="card kill-border">
							<div className="card-body">
								
								<div className="flex flex-col lg:flex-row justify-center">
									
									<div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Sets</h2>
										<img src={aSets} alt="A Sets" class="w-full"/>
										<p className="text-base mt-6">
											If there is only one exercise in the set. You will complete a set, followed by the rest period, then right back to that same exercise until you’ve completed every set of that exercise. Once every set is completed you will move onto the next letter and begin the exercises under that grouping. 
										</p>
									</div>
									
									<div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Supersets</h2>
										<img src={bSets} alt="B Sets" class="w-full" />
										<p className="text-base mt-6">
											Two exercises under a lettered grouping indicates a superset. In a superset you will complete a set of each exercise back-to-back before beginning the rest period. After the rest period you will start again with the first exercise in the letter grouping. Once every set is completed you will move onto the next letter and begin the exercises under that grouping.
										</p>
									</div>

                  <div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Tri-Sets</h2>
										<img src={cSets} alt="C Sets" class="w-full" />
										<p className="text-base mt-6">
											A tri-set will be executed exactly the same as a superset but with one more exercise completed before the rest period.
										</p>
									</div>
									
									<div className="w-full lg:w-1/4 p-5">
										<h2 className="uppercase my-6">Instructions &amp; Demos</h2>
										<img src={video} alt="Video" class="w-full" />
										<p className="text-base mt-6">
											The green plus sign will reveal instructions and load to use during the exercise.  The video icon will give you a detailed demostation of the movement.
										</p>
									</div>
								</div>
								
							</div>
						</div>			
        </div>


        <div className={"mt-10 " + (currentStep === 3 ? "block" : "hidden")}>					
          <div className="card kill-border">
            <div className="card-body">
              <h2 className="text-xl uppercase">Tracking your weights and workout history</h2>
              <p className="card-text">
              Tracking your weights in the app is an important step to recording your progress over time. Click the + icon next to the exercise. Enter the weight you completed and the number of reps for each set and click the Save button. Click the history icon to can see your history of this exercise.
              </p>

              <div className="w-full my-10">
                <iframe src="https://www.youtube.com/embed/zLAlXH-RHyc?controls=1&showinfo=0&rel=0" title="Tracking Your Workouts" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
              </div>
            </div>
          </div>	
        </div>

      <div className={"mt-10 " + (currentStep === 4 ? "block" : "hidden")}>	
        <div className="card kill-border">
          <div className="card-body">
            <h2 className="text-xl uppercase">Adjusting Workouts If Short On Time</h2>

            <div className="w-full my-10">
              <iframe src="https://youtube.com/embed/H7MbvgbG04g?controls=1&showinfo=0&rel=0" title="Adjusting Workout Time" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
            </div>

            <p className="card-text">
              If you find yourself short on time, something is always better than nothing. You can always adjust the duration of the workout by clicking the time button on the top right side of your screen. 
            </p>
            <img src={time} alt="Time Change" width="350" class="w-full lg:w-1/4 p-5" />
          </div>
        </div>

      </div>

      <div className={"mt-10 " + (currentStep === 5 ? "block" : "hidden")}>	
        <div className="card kill-border">
          <div className="card-body">
            <h2 className="text-xl uppercase">Entering Your Maxes</h2>
            <p className="card-text">
              Some of our programs require a testing week when you sign up. During the testing week we will have you go through a series of max lifts so we can guide your progress properly throughout the programming. Once you have performed a max, you will need to login to app.fitnessculture.com to record your maxes under the <span class="fc-tip-inline">MAX LIFTS</span> tab. 
            </p>

            <div className="w-full my-10">
              <iframe src="https://www.youtube.com/embed/9E9ZWjANWSM?controls=1&showinfo=0&rel=0" title="Maxes Video" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
            </div>


          </div>
        </div>
      </div>

      <div className={"mt-10 " + (currentStep === 6 ? "block" : "hidden")}>	
        <div className="card kill-border">
          <div className="card-body">
            
            <div className="row">
              <div className="col-xs-12">
                <h2 className="text-xl uppercase">Flexible Dieting</h2>
                <p className="card-text">
                  First things first, if you aren’t familiar with flexible dieting we highly recommend logging on to <a href="https://app.fitnessculture.com" target="_blank" rel="noopener noreferrer">app.fitnessculture.com</a> and reading through the information provided under the nutrition tab. It will teach everything you need to know about flexible dieting. 
                </p>
                <div className="w-full my-10">
                  <iframe src="https://youtube.com/embed/7rnTAD7r_yk?controls=1&showinfo=0&rel=0" title="Flexible Dieting" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
                </div>
                <img src={nutrition} alt="Nutrition" width="350" class="w-full lg:w-1/4" />
              </div>
              <div className="col-xs-12">
                <h2 className="card-title">Nutrition Setup</h2>
                <p className="card-text">
                  Setting up your nutrition is pretty simple. When you select the macros tab in the app you will go through a series of questions to set up your macronutrient profile.  
                </p>
                <p className="card-text">
                  You are going to have the opportunity to pick between carb cycling and flexible dieting. In all reality, <span class="fc-tip-inline">Carb Cycling</span> is still a form of <span class="fc-tip-inline">Flexible Dieting</span>, but you’re just positioning your macros differently around your training schedule.
                </p>
                <p className="card-text">
                  With both the <span class="fc-tip-inline">Flexible Dieting</span> plan and the <span class="fc-tip-inline">Carb Cycling</span> plan we are basing your macros off a weekly total. So, with either one you choose, you will still be eating the same number of total calories for the week.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="card kill-border">
          <div className="card-body">
            
            <div className="row">
              <div className="col-xs-12">
                <h2 className="card-title">Eating Style Based Off Goals &amp; Personality</h2>
              </div>
              
              <div className="col-md-6">
                <p className="card-text">
                  <b>Cutting (weight loss):</b>

                  <i>Small Appetite</i> - Go with <span class="fc-tip-inline">Flexible Dieting.</span> In our experience people with small appetites have amazing success with the consistency of flexible dieting.
                  
                  <i>Large Appetite</i> - Go with <span class="fc-tip-inline">Carb Cycling.</span> If you have a large appetite, it’s hard to stay in a caloric deficit every day for 8-12 weeks during a cut. Carb cycling allows you the freedom to eat without restrictions a couple days of the week. This can be extremely beneficial over the long haul.
                </p>
              </div>
              
              <div className="col-md-6">
                <p className="card-text">
                  <b>Maintaining:</b> For maintenance, we usually recommend going with <span class="fc-tip-inline">Flexible Dieting.</span> It’s easy to keep consistent and dial in your macros this way. 
                </p>
                <p className="card-text">
                  <b>Weight Gain:</b> If your goal is to gain weight then you will want to go with <span class="fc-tip-inline">Flexible Dieting.</span> If you were to carb cycle - the high carb days would be an uncomfortable amount of food!
                </p>
              </div>
              
              <div className="col-xs-12">
                <p className="card-text fc-tip">
                  <b>#TIP</b> If you choose carb cycling you will be given 4 low carb days, 2 high carb days, and 1 moderate carb day. It doesn’t matter where you decide to place the days during the week but most of our clients like to place their high carb days on leg days. It gives them a mental boost to attack the most intense workouts of the week. Another way to approach it is to place your high carb days the day before your leg days. This will ensure that your glycogen stores are full and ready for the next day. 
                </p>
              </div>
              <div className="col-xs-12">
                <p className="card-text">
                  Once a week you will have the opportunity to check in to make adjustments to your macros. We only recommend adjusting if you have gotten within 95% of your macronutrient goals for the week.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className={"mt-10 " + (currentStep === 7 ? "block" : "hidden")}>	
        <div className="card kill-border">
          <div className="card-body">
            <h2 className="text-xl uppercase">Using MealBuildr</h2>
            <p>
              The MealBuildr is a tool we developed for our clients new to macro counting. Once you’ve set your macros in the app you can use the meal builder to create meal plans that auto populate the exact serving size you need to hit your macros. The MealBuildr works great for whole food, simple meal plans. 
            </p>
            <div className="w-full my-10">
              <iframe src="https://youtube.com/embed/CBJ9_XgTu68?controls=1&showinfo=0&rel=0" title="Using the MealBuildr" height="500" frameborder="0" allowfullscreen className="w-full mx-auto"></iframe>
            </div>
            <p>
              You can use the <span className="fc-tip-inline">Auto Generate Button</span> in the app to get a basic meal plan. The Auto Generate tool is still in Beta and will sometimes put undesirable foods for certain meals of the day. EX: tuna fish for breakfast. 
            </p>
            <p>
              The best way to use the MealBuidr is on desktop. It’s very user friendly on desktop and will allow you to quickly make custom meal plans. 
            </p>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-1/2 p-5">
            <h2 className="uppercase my-6">Adding Foods</h2>
            <img src={autoFill} alt="AutoFill" className="w-full" />
          </div>

          <div className="w-full lg:w-1/2 p-5">
            <h2 className="uppercase my-6">Starting Meal Plan</h2>
            <img src={mealBuildrOne} alt="MealBuildr One" class="w-full"/>
          </div>
        </div>

      </div>

      <div className={"mt-10 " + (currentStep === 8 ? "block" : "hidden")}>	            
        <h2 className="text-xl uppercase">Mobility</h2>
        <p>
          Staying diligent on your mobility plan is going to keep you injury free, extend your career, improve your form, and all this of this is great. BUT, immobility impacts much more than just your performance in the weight room. It will lead to small aches and pains that are going to build up over the course of the day and the week. This is draining on your energy and can cause a decrease in the motivation to workout. This is why we stress mobility, it’s going to help you stay motivated to workout every day.
        </p>
        <p>
          We’ve set up the to help attack your weak points. To make sure it’s customized to your weaknesses take the mobility screen. When you click the mobility tab you will be prompted to take the mobility screen. There will be a series of videos showing you how to test certain areas of your body. Once you’ve performed the tests, just mark pass or fail and we will tailor your plan to attack your weaknesses. 
        </p>

        <div className="w-full my-10">
        <iframe src="https://youtube.com/embed/dltLnQEgPjM?controls=1&showinfo=0&rel=0" title="Mobility Video" height="500" frameborder="0" allowfullscreen class="w-full mx-auto"></iframe>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="w-full lg:w-1/4 p-5">
            <img src={mobility} alt="Mobility" class="w-full" />
          </div>
        </div>
      </div>
					
					


        <div className="flex flex-row justify-between items-center mt-10">
          <button onClick={previousStep} className={(currentStep === 1 ? "opacity-0" : "opacity-100")}>
            Back
          </button>
          <button onClick={nextStep} className={"px-4 py-2 bg-green-500 hover:bg-green-400 text-white shadow rounded " + (currentStep === 9 ? "hidden" : "block")}>
            Next Step
          </button>
        </div>
      </div>

    </Layout>
)}

export default Welcome