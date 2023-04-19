import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="Home" className="main">
      <div className="home">
        <div className="home-item arrivals">
          <center>
            <h2>New Arrivals</h2>
          </center>
          <div>
            <div>The all new AKAI MPK mini is here!</div>
            <img
              src={require(`./../images/4.jpeg`).default}
              alt={4}
              width="300px"
            />
            <br />
            <Link to={"/products"}>
              <div className="btn">Check It Out!</div>
            </Link>
          </div>
          <hr />
          <div>
            <div>The MOTU audio interface just landed!</div>
            <img
              src={require(`./../images/2.jpeg`).default}
              alt={2}
              width="300px"
            />
            <br />
            <Link to={"/products"}>
              <div className="btn">Check It Out!</div>
            </Link>
          </div>
        </div>
        <div className="home-item news">
          <center>
            <h2>News Letter</h2>
          </center>
          <h3>We are sorry...</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <h3>New refunds policy</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <br />
          <h3>Updates to a shopping cart</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <br />
          <h3>Added new payment methods</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <br />
          <h3>Website is up and running!</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <br />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
