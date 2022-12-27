import { useContext } from "react";
import { DataContext } from "../context";

export default function Summary () {
  const {setIndex, planTime,selectedPlan,selectedAddons,teleportPrev} = useContext(DataContext)
  let totalPrice = selectedPlan[1]
  let selectedAddonsOutput = selectedAddons.map(addon => {
    totalPrice += addon.price
    return (
      <div key={addon.id} className="info d-flex justify-content-between mb-3">
        <p className="text-black-50 m-0">{addon.name}</p>
        <p className="m-0 services">+${addon.price}/{planTime == "Yearly"? "yr":"mo"}</p>
      </div>
    )
  })
  function change() {
    teleportPrev(".summary", ".select-plan")
    setIndex(2)
  }
  return (
    <div className="summary">
      <h2 className="primary-header">Finishing up</h2>
      <p className="text-black-50 mb-4">Double-check everything looks OK before confirming.</p>
      <div className="summary-box">
        <div className="header d-flex justify-content-between align-items-center pb-4 border-bottom">
          <div>
            <h5 className="primary-header plan mb-1 plan-type">{`${planTime} (${selectedPlan[0]})`}</h5>
            <a className="text-black-50 m-0 ch-btn" onClick={change}>Change</a>
          </div>
          <h5 className="primary-header plan-price">${selectedPlan[1]}/{planTime == "Yearly"? "yr":"mo"}</h5>
        </div>
        <div className="infos mt-4">
          {selectedAddonsOutput}
        </div>
      </div>
      <div className="total d-flex justify-content-between mt-3">
        <p className="text-black-50 m-0 total-text">Total (per {planTime == "Yearly"? "year":"month"})</p>
        <div className="total-num">${totalPrice}/{planTime == "Yearly"? "yr":"mo"}</div>
      </div>
    </div>
  )
}