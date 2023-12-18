
import { ProfileWrapper, SideRail, WelcomeUser, ProfileMain, ProfileNav, Logout, ContactItem } from '../styles/portalElements';
import ContactInfo from '../components/utils/ContactInfo';
function UserPortal ({currentUser, setCurrentUser}){
    return (
        <ProfileWrapper>
            <SideRail />
            <ProfileMain>
                <ProfileNav>
                    <WelcomeUser>Welcome back, {currentUser.firstname}!</WelcomeUser>
                    {/* WE WANT TO LOGOUT A USER HERE ON CLICK */}
                    <Logout onClick={() => {}}>Logout</Logout>
                </ProfileNav>
                <ContactInfo currentUser={currentUser} />
            </ProfileMain>
        </ProfileWrapper>
    );

}

export default UserPortal;
 





