export default function PersonalInfo() {
  return (
    <div className="personal-info">
      <h2 className="primary-header">Personal Info</h2>
      <p className="text-black-50 mb-4">Please provide your name, email address and phone number.</p>
        <div className="mb-3 position-relative">
          <label htmlFor="name" className="label-control">Name</label>
          <span className="error err-name"></span>
          <input type="text" data-err="err-name" placeholder="e.g. Mahmoud Ahmed" className="form-control" id="name"/>
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="email" className="label-control">Email Adress</label>
          <span className="error err-email"></span>
          <input type="email" data-err="err-email" placeholder="e.g. mahmoud@lorem.com" className="form-control" id="email"/>
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="phone" className="label-control">Phone Number</label>
          <span className="error err-phone"></span>
          <input type="text" data-err="err-phone" placeholder="e.g. +1 234 567 890" className="form-control" id="phone"/>
        </div>
    </div>
  )
}