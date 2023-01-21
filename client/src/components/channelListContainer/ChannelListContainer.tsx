
import { SetStateAction } from "react";
import { ChannelList, useChatContext } from "stream-chat-react"
import Cookies from "universal-cookie";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "../";

import { TEXT } from '../../constants';

const ChatLogoIcon = require('../../assets/icon.png');
const LogoutIcon = require('../../assets/logout.png');


const Sidebar = () => (
  <div className="channel-list__sidebar">

    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={ChatLogoIcon} alt="Chat Application" width={30}/>
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
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

const ChannelListContainer = () => {
  return (
    <>
      <Sidebar />
      <div className="channel-list__list__wrapper">
        <Header />
        <ChannelSearch />
        <ChannelList
           filters={ {} }
          //  channelRenderFilterFn={ () => {return null} }
           List = {
            (listProps => (
              <TeamChannelList type="team" {...listProps} />
            ))
           }
           Preview = {(previewProps) => (
            <TeamChannelPreview
              setIsCreating={} 
              setIsEditing={} 
              setToggleContainer={} 
              type={"team"} 
              {...previewProps}            />
           )}
        />
        <ChannelList
           filters={ {} }
          //  channelRenderFilterFn={ () => {return null} }
           List = {
            (listProps => (
              <TeamChannelList type="individual" {...listProps} />
            ))
           }
           Preview = {(previewProps) => (
            <TeamChannelPreview
             type={"individual"} {...previewProps}            />
           )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer