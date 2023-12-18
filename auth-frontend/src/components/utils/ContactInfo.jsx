import { ContactWrapper, ContactSection, ContactDescription, ContactItem, Divider, InfoWrapper, AboutWrapper, AboutHeader, AboutContent } from '../../styles/portalElements'
const ContactInfo = ({ currentUser }) => {
    return (
        <InfoWrapper>
            <ContactWrapper>
                <ContactSection>
                    <ContactItem><ContactDescription>Full Name:</ContactDescription> {currentUser.firstname} {currentUser.lastname}</ContactItem>
                    <ContactItem><ContactDescription>Email:</ContactDescription> {currentUser.email}</ContactItem>
                </ContactSection>
            </ContactWrapper>
            <Divider/>
            <AboutWrapper>
                <AboutHeader>About Me:</AboutHeader>
                <AboutContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum modi cumque sit dolor in sequi molestias quod eaque earum vitae ipsa velit iure nisi voluptatibus commodi iste, debitis tempore!</AboutContent>
            </AboutWrapper>
        </InfoWrapper>
    );
};

export default ContactInfo;