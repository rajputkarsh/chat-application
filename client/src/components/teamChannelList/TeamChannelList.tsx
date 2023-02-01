import { AddChannel } from '../../assets/AddNewChannel';
import { ERROR, TEXT } from '../../constants';
import { TeamChannelType } from '../../types';

function TeamChannelList({children, error=false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer} : TeamChannelType) {

  if(error){
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          {
            ERROR.TEAM_CHANNEL_LIST_ERROR
          }
        </p>
      </div>
    ) : null;
  }


  if(loading){
    <div className="team-channel-list">
      <p className="team-channel-list__message__loading">
        {
          TEXT.LOADING
        }
      </p>
    </div>
  }  

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>        
        <AddChannel 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType} 
          setIsEditing={setIsEditing}
          type={type === 'team' ? 'team' : 'individual'}
          setToggleContainer={setToggleContainer}
        />        
      </div>
      {
        children
      }
    </div>
   )
}

export default TeamChannelList