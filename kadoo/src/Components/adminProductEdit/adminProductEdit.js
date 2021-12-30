import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import "../../Pages/AdminUser/AdminUser.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  
  export default function User() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit Specialist</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowBottom">
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Anna Becker</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
                <AccountCircleOutlinedIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Anna</span>
              </div>
              <div className="userShowInfo">
                <AccountBoxOutlinedIcon className="userShowIcon" />
                <span className="userShowInfoTitle">Becker</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon" />
                <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }