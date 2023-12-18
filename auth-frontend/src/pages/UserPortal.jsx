
import { ProfileWrapper, SideRail, WelcomeUser, ProfileMain, ProfileNav, Logout, ContactItem } from '../styles/portalElements';
import ContactInfo from '../components/utils/ContactInfo';
function UserPortal ({currentUser, setCurrentUser}){
    return (
        <ProfileWrapper>
            <SideRail />
            <ProfileMain>
                <ProfileNav>
                    <WelcomeUser>Welcome back, {currentUser.firstname}!</WelcomeUser>
                    <Logout onClick={() => setCurrentUser(null) }>Logout</Logout>
                </ProfileNav>
                <ContactInfo currentUser={currentUser} />
            </ProfileMain>
        </ProfileWrapper>
    );

}

export default UserPortal;
 





