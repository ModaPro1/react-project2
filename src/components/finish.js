import icon from "../assets/images/icon-thank-you.svg"

export default function Finish() {
  return (
    <div className="finish">
      <div className="content">
        <div className="text">
          <img src={icon} alt="" />
          <h2 className="primary-header mt-4">Thank you!</h2>
          <p className="text-black-50 mb-4">Thanks for confirming your subscription! We hope you have fun using our platform.If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </div>
  )
}