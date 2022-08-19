import React, { useState } from "react";
import "./App.css";

function App() {
  // const [showjumphost, setShowjumphost] = useState("hidden");
  // const [showVtest, setShowVtest] = useState("hidden");
  const [showOptions, setShowOptions] = useState("");

  const handleshowhide = (event) => {
    const responseID = event.target.value;
    console.log(responseID);
    setShowOptions(responseID);

    // if (responseID == "jumphost") {
    //   setShowjumphost("show");
    //   setShowVtest("hidden");
    //   console.log(showjumphost);
    // } else if (responseID == "vtest") {
    //   setShowVtest("show");
    //   setShowjumphost("hidden");
    //   console.log(showVtest);
    // }
  };

  return (
    <div className="App">
      <>
        <div className="container">
          <form id="contForm" action="" method="">
            <h3>Choose Your Actions.</h3>
            <fieldset>
              <select
                name="action-jv"
                id="action-jv"
                className="action-jv"
                onChange={(e) => {
                  handleshowhide(e);
                }}
              >
                <option value="" selected>
                  -Select-
                </option>
                <option value="jumphost">Jumphost Deployment</option>
                <option value="vtest">vtest-tools dev setup</option>
              </select>
            </fieldset>

            {showOptions === "jumphost" && (
              <div className="show" id="jumphost-Details">
                {/* <!-- Login-IP --> */}
                <fieldset>
                  <input
                    type="text"
                    name="login-ip"
                    required
                    placeholder="Login IP"
                  />
                </fieldset>
                {/* <!-- UserName --> */}
                <fieldset>
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="User Name"
                  />
                </fieldset>
                {/* <!-- Password --> */}
                <fieldset>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </fieldset>
                <fieldset>
                  <div className="radio-container">
                    <input type="radio" id="DMZ" name="DMZ" />
                    <label htmlFor="DMZ">DMZ</label>
                    <input type="radio" id="NON-DMZ" name="NON-DMZ" />
                    <label htmlFor="NON-DMZ">NON-DMZ</label>
                  </div>
                </fieldset>
                <fieldset>
                  <button
                    name="executeCommand"
                    type="submit"
                    id="contact-submit"
                  >
                    Execute Command
                  </button>
                </fieldset>
                {/* <h2>Command: bla bla vla....</h2> */}
                {/* <br> */}
              </div>
            )}

            {showOptions === "vtest" && (
              <div
                className="show"
                id="vtest-Details"
                onChange={(e) => {
                  handleshowhide(e);
                }}
              >
                {/* <!-- Login-IP --> */}
                <fieldset>
                  <input
                    type="text"
                    name="EXSI-login-ip"
                    required
                    placeholder="EXSI Login IP"
                  />
                </fieldset>
                {/* <!-- UserName --> */}
                <fieldset>
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="User Name"
                  />
                </fieldset>
                {/* <!-- Password --> */}
                <fieldset>
                  <input
                    type="text"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </fieldset>
                {/* <!-- Host Ip/Subnet --> */}
                <fieldset>
                  <input
                    type="text"
                    name="hostIp-Subnet"
                    required
                    placeholder="Host IP/Subnet"
                  />
                </fieldset>
                {/* <!-- Default GateWay --> */}
                <fieldset>
                  <input
                    type="text"
                    name="gateway"
                    required
                    placeholder="Default Gateway"
                  />
                </fieldset>
              </div>
            )}

            <fieldset>
              <button name="submit" type="submit" id="contact-submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </>
    </div>
  );
}

export default App;
