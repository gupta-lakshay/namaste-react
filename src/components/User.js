import React from "react";
import UserContext from "../utils/UserContext";
// const User = () => {
//   return (
//     <div className="userCard">
//       <h2> Name: Lakshay</h2>
//       <h2> Location: Hyd</h2>
//       <h2> Contact: @guptalakshay</h2>
//     </div>
//   );
// };
// export default User;

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  // called after constructor -> render
  componentDidMount() {
    // console.log("comp did mount");
    // const data = await fetch("");
    // const json = await data.json();
    // this.setState({ userInfo: json});
    this.timer = setInterval(() => {
      console.log("Namaste React OP ");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // we can destructure the state variables like
    // const { count, str } = this.state;
    return (
      <div className="userCard">
        <h2> Name: {this.state.userInfo.name}</h2>
        <h2>
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </h2>
        <h2> Location: Hyd</h2>
        <h2> Contact: @guptalakshay</h2>
      </div>
    );
  }
}

export default User;
