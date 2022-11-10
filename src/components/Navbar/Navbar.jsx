import "./navbar.scss";
import {
  ChatBubbleOutlineOutlined, DarkModeOutlined,
  FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined,
  SearchOutlined
} from '@mui/icons-material'
import React from 'react'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">

            <img alt="Image avatar"
              className='avatar'
              src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
