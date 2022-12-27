import React from "react";
// JQuery
import $ from 'jquery';
// CSS
import './style.css'
// Components
import SideBar from "./components/sideBar";
import PersonalInfo from "./components/personalInfo";
import Plans from "./components/plans";
import Addons from "./components/addons";
import Summary from "./components/summary";
import Finish from "./components/finish";
// Images
import arcadeImg from "./assets/images/icon-arcade.svg"
import advancedImg from "./assets/images/icon-advanced.svg"
import ProImg from "./assets/images/icon-pro.svg"
// Context
import { DataContext } from "./context";

export default function App() {
  function teleportNext(from, to) {
    $(from).fadeOut("400", () => {
      $(to).fadeIn("400")
    })
  }
  function teleportPrev(from, to) {
    $(from).fadeOut("400", () => {
      $(to).fadeIn("400")
    })
  }
  // Main States
  const [index, setIndex] = React.useState(1)
  const [planTime, setPlanTime] = React.useState("Yearly")
  const [yearlyPlans, setYearlyPlans] = React.useState(
    [
      {
        id: 0,
        name: "Arcade",
        img: arcadeImg,
        price: 90,
      },
      {
        id: 1,
        name: "Advanced",
        img: advancedImg,
        price: 120,
      },
      {
        id: 2,
        name: "Pro",
        img: ProImg,
        price: 150,
      }
    ]
  )
  const [monthlyPlans, setMonthlyPlans] = React.useState(
    [
      {
        id: 0,
        name: "Arcade",
        img: arcadeImg,
        price: 9,
      },
      {
        id: 1,
        name: "Advanced",
        img: advancedImg,
        price: 12,
      },
      {
        id: 2,
        name: "Pro",
        img: ProImg,
        price: 15,
      }
    ]
  )
  const [selectedPlan, setSelectedPlan] = React.useState([])
  const [yearlyAddons, setYearlyAddons] = React.useState([
    {
      id: 0,
      name: "Online Services",
      className: "online-services",
      description: "Access to multiplayer games",
      price: 10
    },
    {
      id: 1,
      name: "Larger Storage",
      className: "larger-storage",
      description: "Extra 1TB of cloud save",
      price: 10
    },
    {
      id: 2,
      name: "Customizable Profile",
      className: "customizable-profile",
      description: "Custom theme on your profile",
      price: 20
    },
  ])
  const [monthlyAddons, setMonthlyAddons] = React.useState([
    {
      id: 0,
      name: "Online Services",
      className: "online-services",
      description: "Access to multiplayer games",
      price: 1
    },
    {
      id: 1,
      name: "Larger Storage",
      className: "larger-storage",
      description: "Extra 1TB of cloud save",
      price: 1
    },
    {
      id: 2,
      name: "Customizable Profile",
      className: "customizable-profile",
      description: "Custom theme on your profile",
      price: 2
    },
  ])
  const [selectedAddons, setSelectedAddons] = React.useState([])
  // Check if the index Changes

  // Check For Numbers in SideBar
  $(".number").each(function() {$(this).removeClass("active")}) // Remove Active From All
  $(".number" + index).addClass("active")
  // Click Function
  function handleNext(e) {
    e.preventDefault()
    if(index == 1) {
      // Validation
      $(".personal-info .form-control").each(function(){
        if($(this).val() == "") {
          $(this).css("border", "1px solid var(--bs-danger)")
          $("." + $(this).attr("data-err")).text("This field is required").fadeIn("150") // Ex: $(".err-name").text().fadeIn()
        }else {
          $(this).css("border", "1px solid hsl(243, 100%, 62%)")
          $("." + $(this).attr("data-err")).fadeOut("150", function() {
            $(this).remove()
          })
        }
      })
      // if everything is correct
      if(!$("#name").val() == "" && !$("#email").val() == "" && !$("#phone").val() == "") {
        setIndex(prev => prev+1)
        teleportNext(".personal-info", ".select-plan")
      }
    }else if (index == 2) {
      if(!selectedPlan.length == 0) {
        setIndex(prev => prev+1)
        teleportNext(".select-plan", ".addons")
      }
    }else if(index == 3) {
      if(!selectedAddons.length == 0) {
        setIndex(prev => prev+1)
        teleportNext(".addons", ".summary")
      }
    }else if(index == 4) {
      setIndex(5)
      teleportNext(".summary", ".finish")
    }
  }
  // Prev Btn Function
  function handlePrev(e) {
    e.preventDefault()
    if(index == 2) {
      setIndex(prev => prev-1)
      teleportPrev(".select-plan", ".personal-info")
    }else if(index == 3) {
      setIndex(prev => prev-1)
      teleportPrev(".addons", ".select-plan")
    }else if(index == 4) {
      setIndex(prev => prev-1)
      teleportPrev(".summary", ".addons")
    }
  }
  // Check For the prev Btn
  if(index == 2) {
    $(".prev").fadeIn()
  }else if(index == 5) {
    $(".prev").fadeOut()
    $(".next").fadeOut()
  }
  return (
    <div className="box bg-white">
      <div className="row justify-content-between h-100 w-100 m-0">
        {<SideBar/>}
        <form action="" className="col-lg-7 mt-3 position-relative">
          <DataContext.Provider value={{index, setIndex, planTime,setPlanTime,yearlyPlans,monthlyPlans,selectedPlan,setSelectedPlan, yearlyAddons, monthlyAddons, selectedAddons, setSelectedAddons,teleportPrev}}>
            <PersonalInfo/>
            <Plans/>
            <Addons/>
            <Summary/>
            <Finish/>
          </DataContext.Provider>
          <button className="prev" onClick={(e) => handlePrev(e)}>Go Back</button>
          <button className="next" onClick={(e) => handleNext(e)}>Next Step</button>
        </form>
      </div>
    </div>
  )
}