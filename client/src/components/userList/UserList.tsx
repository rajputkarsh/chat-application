import React, { Dispatch, useEffect, useState } from 'react';
import { UserResponse } from 'stream-chat';
import { Avatar, useChatContext } from 'stream-chat-react';

import { InviteIcon } from '../../assets/InviteIcon';

const ListContainer = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="user-list__container">
            <div className="user-list__header">
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = ({ index, user, setSelectedUsers }: { index: number, user: UserResponse, setSelectedUsers: Dispatch<React.SetStateAction<string[]>> }) => {
    const [selected, setSelected] = useState(false)

    const handleSelect = () => {
        if(selected) {
            setSelectedUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser !== user.id))
        } else {
            setSelectedUsers((prevUsers) => [...prevUsers, user.id])
        }

        setSelected((prevSelected) => !prevSelected)
    }

    return (
        <div className="user-item__wrapper" onClick={handleSelect}>
            <div className="user-item__name-wrapper">
                <Avatar image={user.image as string} name={(user.fullName || user.id) as string} size={32} />
                <p className="user-item__name" >{(user.fullName || user.id) as string}</p>
            </div>
            {selected ? <InviteIcon /> : <div className="user-item__invite-empty" />}
        </div>
    )
}


const UserList = ({ setSelectedUsers }: {setSelectedUsers: Dispatch<React.SetStateAction<string[]>>}) => {
    const { client } = useChatContext();
    const [users, setUsers]: [ Array<UserResponse>, Dispatch<React.SetStateAction<Array<UserResponse>>>] = useState(new Array());
    const [loading, setLoading] = useState(false);
    const [listEmpty, setListEmpty] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            if(loading) return;

            setLoading(true);
            
            try {
                const { users }: { users: Array<UserResponse> } = await client.queryUsers(
                    { id: { $ne: client.userID as string } },
                    { id: 1 },
                    { limit: 8 } 
                );

                if(users.length) {
                    setUsers(users);
                } else {
                    setListEmpty(true);
                }
            } catch (error) {
               setError(true);
            }
            setLoading(false);
        }

        if(client) getUsers()
    }, []);

    if(error) {
        return (
            <ListContainer>
                <div className="user-list__message">
                    Error loading, please refresh and try again.
                </div>
            </ListContainer>
        )
    }

    if(listEmpty) {
        return (
            <ListContainer>
                <div className="user-list__message">
                    No users found.
                </div>
            </ListContainer>
        )
    }

    return (
        <ListContainer>
            {loading ? <div className="user-list__message">
                Loading users...
            </div> : (
                users?.map((user: UserResponse, i: number) => (
                  <UserItem index={i} key={user.id} user={user} setSelectedUsers={setSelectedUsers} />  
                ))
            )}
        </ListContainer>
    )
}

export default UserList;