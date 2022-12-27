import React from "react"
import { useContext } from "react";
import { DataContext } from "../context";
// JQuery
import $ from 'jquery';

export default function Addons () {
  const {planTime, yearlyAddons, monthlyAddons, selectedAddons, setSelectedAddons} = useContext(DataContext)

  function addonClick(e, id, className, name, price, description) {
    $("." + className).toggleClass("active")
    e.preventDefault()
    var boolVar = selectedAddons.some(addon => {
      // if the name of any addon in the session storage equals the selected addon return true
      return addon.name == name
    })
    if(!boolVar) { // Addon Doesnt Exist
      setSelectedAddons(prev => {
        return [
          ...prev,
          {
            id: id,
            name: name,
            price: price,
            description: description,
          }
        ]
      })
    }else { // Addon Exist (Remove it)
      let newArr = selectedAddons.filter(addon => addon.name != name) // return the addons that its name not equal the selected addon
      setSelectedAddons(newArr)
    }
  }
  return (
    <div className="addons">
      <h2 className="primary-header">Pick add-ons</h2>
      <p className="text-black-50 mb-4">Add-ons help enhance your gaming experience.</p>
      <div className="addons-boxes">
        {
          planTime == "Yearly" ?
          yearlyAddons.map(addon => {
            return (
            <button key={addon.id} onClick={(e) => addonClick(e, addon.id, addon.className, addon.name, addon.price, addon.description)} className={`${addon.className} addon-box addon-box-1 mb-3 d-flex justify-content-between align-items-center`}>
              <div className="d-flex align-items-center">
                <div className="ms-4">
                  <h5 className="primary-header mb-1">{addon.name}</h5> {/**Proplem Here */}
                  <p className="text-black-50 m-0">{addon.description}</p>
                </div>
              </div>
              <div className="info">+${addon.price}/yr</div>
            </button>
            )
          }) :
          monthlyAddons.map(addon => {
            return (
            <button key={addon.id} onClick={(e) => addonClick(e, addon.id, addon.className, addon.name, addon.price, addon.description)} className={`${addon.className} addon-box addon-box-1 mb-3 d-flex justify-content-between align-items-center`}>
              <div className="d-flex align-items-center">
                <div className="ms-4">
                  <h5 className="primary-header mb-1">{addon.name}</h5>
                  <p className="text-black-50 m-0">{addon.description}</p>
                </div>
              </div>
              <div className="info">+${addon.price}/mo</div>
            </button>
            )
          })
        }
      </div>
    </div>
  )
}