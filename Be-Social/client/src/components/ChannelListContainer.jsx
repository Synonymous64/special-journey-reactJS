import React from 'react'
import { SlSocialBehance } from "react-icons/sl";
import { BiLogOut } from 'react-icons/bi'
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie';
import HostpitalIcon from '../assets/hospital.png'
import LogOutIcon from '../assets/logout.png'
let cookies = new Cookies();
const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                {/* <img src={HostpitalIcon} alt="socialIcon" width="30" /> */}
                <SlSocialBehance />
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                {/* <img src={LogOutIcon} alt="socialIcon" width="30" /> */}
                <BiLogOut onClick={logout} />
            </div>
        </div>
    </div>
)
const CompanyHeader = () => (
    <div className='channel-list__header'>
        <p className='channel-list__header__text'>BE-SOCIAL</p>
    </div>
)
const ChannelListContainer = () => {
    const logout = () => {
        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
        window.location.reload();
    }
    return (
        <>
            <SideBar logout={logout} />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='team'
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filters={{}}
                    channelRenderFilterFn={() => { }}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type='messaging'
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer
