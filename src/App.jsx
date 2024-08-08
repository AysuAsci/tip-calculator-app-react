import './App.css'

function App() {

  return (
    <>

      <div class="container">
        <İmgcontainer />
        <Selectsection />
        <Resetsection />
      </div>
    </>
  )
}

function İmgcontainer() {
  return(
    <div class="img_container">
        <img src="images/splitter_logo.png" alt=""/>
    </div>

  )
}
function Selectsection() {
  return(
    <div className="select_section">
                <h3>Bill</h3>
            <input className="bill" type="number" placeholder="142.55"/>

            <h3>Select Tip %</h3>
            <div className="select_buttons">
                <button className="select_tip">5%</button>
                <button className="select_tip">10%</button>
                <button className="select_tip">15%</button>
                <button className="select_tip">25%</button>
                <button className="select_tip">50%</button>
                <input className="custom_tip" type="number" placeholder="Custom"/>
            </div>

            <div className="select_section_texts">
                <h3>Number of People</h3>
                <h3 className="people_error"></h3>
            </div>

            <input className="people" type="number" required placeholder="5"/>

        </div>

  )
}

function Resetsection() {
  return(
    <div class="reset_section">

            <div class="tips">
                <div class="reset_texts">
                    <h2>Tip Amount</h2>
                    <h3>/ person</h3>
                </div>
                <h1 class="tip_amount">$4.27</h1>
            </div>

            <div class="tips">
                <div class="reset_texts">
                    <h2>Total</h2>
                    <h3>/ person</h3>
                </div>
                <h1 class="total">$32.79</h1>
            </div>

            <button class="reset">RESET</button>
        </div>

  )
}
    


export default App
