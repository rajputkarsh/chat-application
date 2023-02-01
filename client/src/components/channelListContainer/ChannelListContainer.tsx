// @ts-nocheck

import { SetStateAction, useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react"
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../";

import { TEXT } from '../../constants';
import { ChannelListContainerProps } from "../../types";

const ChatLogoIcon = require('../../assets/icon.png');
const LogoutIcon = require('../../assets/logout.png');

const cookies = new Cookies();

const Sidebar = ({ logout } : {logout: () => void}) => (
  <div className="channel-list__sidebar">

    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={ChatLogoIcon} alt="Chat Application" width={30}/>
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width={30}/>
      </div>
    </div>

  </div>
);

const Header = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">
      {
        TEXT.APP_NAME
      }
    </p>
  </div>
)

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing }: ChannelListContainerProps) => {

  const logout = () => {
    cookies.remove("token");
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    window.location.reload();    
  }

  const [toggleContainer, setToggleContainer] = useState(false);

  return (
    <>
      <Sidebar logout={logout} />
      <div className="channel-list__list__wrapper">
        <Header />
        <ChannelSearch />
        <ChannelList
           filters={ {} }
          //  channelRenderFilterFn={ () => {return null} }
           List = {
            (listProps => (
              <TeamChannelList 
              type="team" 
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              {...listProps} />
            ))
           }
           Preview = {(previewProps) => (
            <TeamChannelPreview
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing} 
              setToggleContainer={setToggleContainer} 
              type={"team"} 
              {...previewProps}            />
           )}
        />
        <ChannelList
           filters={ {} }
          //  channelRenderFilterFn={ () => {return null} }
           List = {
            (listProps => (
              <TeamChannelList
                {...listProps}
                type="team"
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType} 
                setIsEditing={setIsEditing}
                setToggleContainer={setToggleContainer}
              />
            ))
           }
           Preview = {(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              setIsCreating={setIsCreating}
              setIsEditing={setIsEditing}
              setToggleContainer={setToggleContainer}
              type="team" 
            />
           )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer