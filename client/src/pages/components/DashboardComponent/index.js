import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../store/actions/authActions";

import DashboardLayout from "./components/DashboardLayout";
import HomeComponent from "./components/HomeComponent";
import MyFarmsComponent from "./components/MyFarmsComponent";

function Dashboard(props) {
  const { user, isAuthenticated, logout } = props;
  const [active, setActive] = React.useState("My Farms");

  return (
    <>
      <DashboardLayout
        isAuthenticated={isAuthenticated}
        user={user}
        active={active}
        setActive={setActive}
        logout={logout}
      >
        {active === "Home" && <HomeComponent user={user} />}
        {active === "My Farms" && <MyFarmsComponent user={user} />}
      </DashboardLayout>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
