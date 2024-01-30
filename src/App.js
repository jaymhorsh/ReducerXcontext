import React, { Fragment, useContext} from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const authCtn = useContext(AuthContext)

  return (
    <Fragment>
      <MainHeader  />
      <main>
        {!authCtn.isLoggedIn && <Login  />}
        {authCtn.isLoggedIn && <Home  />}
      </main>
    </Fragment>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import AuthContext from "./store/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedUserLoggedIn = localStorage.getItem("isLoggedIn");
//     if (storedUserLoggedIn === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//     // console.log(email,password)
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ 
//       isLoggedIn: isLoggedIn }
//     }>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>

//     </AuthContext.Provider>
//   );
// }

// export default App;
