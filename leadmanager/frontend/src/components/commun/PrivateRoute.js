// import React from "react";
// import { Route, Redirect, Navigate, Routes } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//   <Routes>
//     <Route
//       {...rest}
//       render={(props) => {
//         if (auth.isLoading) {
//           return <h2>Loading...</h2>;
//         } else if (!auth.isAuthenticated) {
//           return <Navigate to="/login" />;
//         } else {
//           return <Component {...props} />;
//         }
//       }}
//     />
//   </Routes>
// );

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
// import React from "react";
// import { Route, Navigate, Outlet } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

// const PrivateRoute = () => {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
