import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import StoreIcon from '@mui/icons-material/Store';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={ { textDecoration: "none" } }>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={ { textDecoration: "none" } }>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={ { textDecoration: "none" } }>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={ { textDecoration: "none" } }>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={ () => dispatch({ type: "LIGHT" }) }
        ></div>
        <div
          className="colorOption"
          onClick={ () => dispatch({ type: "DARK" }) }
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
