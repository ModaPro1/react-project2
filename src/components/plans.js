import React from "react"
import { useContext } from "react";
import { DataContext } from "../context";
// JQuery
import $ from 'jquery';

export default function Plans () {
  const {index, setIndex, planTime,setPlanTime,yearlyPlans,monthlyPlans,selectedPlan,setSelectedPlan} = useContext(DataContext)
  
  function toggler() {
    $(".monthly").toggleClass("active")
    $(".yearly").toggleClass("active")
    setPlanTime(prev => {
      return prev == "Yearly" ? "Monthly" : "Yearly"
    })
    setSelectedPlan([])
    $(".plan").each(function () {$(this).removeClass("active")})
  }
  function planClick(e, name, price) {
    $(".plan").each(function () {$(this).removeClass("active")})
    $("." + name).addClass("active")
    e.preventDefault()
    setSelectedPlan([name, price])
  }
  return (
    <div className="select-plan">
      <h2 className="primary-header">Select your plan</h2>
      <p className="text-black-50 mb-4">You have the option of monthly or yearly billing.</p>
      <div className="plans d-flex justify-content-between">
        {
          planTime == "Yearly" ? 
          yearlyPlans.map(plan => {
            return (
              <button className={`${plan.name} plan p-4`} key={plan.id} onClick={(e) => planClick(e, plan.name, plan.price,"Yearly")}>
                <img src={plan.img} alt="" className="mb-5"/>
                <h4 className="primary-header">{plan.name}</h4>
                <div className="text-black-50">${plan.price}/yr</div>
                <p className="info">2 months free</p>
              </button>
            )
          }) :
          monthlyPlans.map(plan => {
            return (
              <button className={`${plan.name} plan p-4`} key={plan.id} onClick={(e) => planClick(e, plan.name,plan.price,"Monthly")}>
                <img src={plan.img} alt="" className="mb-5"/>
                <h4 className="primary-header">{plan.name}</h4>
                <div className="text-black-50">${plan.price}/mo</div>
              </button>
            )
          })
        }
      </div>
      <div className="toggler-container"><span className="monthly">Monthly</span><input type="checkbox" defaultChecked className="toggler" onClick={toggler}/><span className="yearly active">Yearly</span></div>
    </div>
  )
}