// import React, { useState } from "react";
// import "./style.scss";
// import { Start } from "../../molecules";
// import { Redirect } from "react-router-dom";

// function Welcome() {
//   const [login, setLogin] = useState(true);
//   const token = localStorage.getItem("token");
//   if (token == null) {
//     setLogin(false);
//   }

//   if (login === false) {
//     return <Redirect to="/" />;
//   }
//   return (
//     <div className="welcome position">
//       <Start />
//     </div>
//   );
// }

// export default Welcome;

import React, { Component } from "react";
import "./style.scss";
import { Start } from "../../molecules";
import { Redirect } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");

    let logIn = true;
    if (token == null) {
      logIn = false;
    }
    this.state = {
      logIn,
    };
  }
  render() {
    if (this.state.logIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="welcome position">
        <Start />
      </div>
    );
  }
}

export default Welcome;
