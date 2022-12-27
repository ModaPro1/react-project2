export default function SideBar() {
  return (
    <aside className="sidebar col-lg-4 pt-4 px-4">
      <div className="step mb-3">
        <div className="number number1 active">1</div>
        <div className="info">
          <div className="muted">STEP 1</div>
          <h3>YOUR INFO</h3>
        </div>
      </div>
      <div className="step mb-3">
        <div className="number number2">2</div>
        <div className="info">
          <div className="muted">STEP 2</div>
          <h3>SELECT PLAN</h3>
        </div>
      </div>
      <div className="step mb-3">
        <div className="number number3">3</div>
        <div className="info">
          <div className="muted">STEP 3</div>
          <h3>ADD-ONS</h3>
        </div>
      </div>
      <div className="step">
        <div className="number number4 number5">4</div>
        <div className="info">
          <div className="muted">STEP 4</div>
          <h3>SUMMARY</h3>
        </div>
      </div>
    </aside>
  )
}