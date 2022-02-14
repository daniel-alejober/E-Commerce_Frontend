import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import {
  ContainerFlex,
  Left,
  Right,
  InfoContainer,
  SocialIcon,
  ContactItem,
} from "../styles/containers";
import { Logo, TitleH3, DescFooter, ListItem, List } from "../styles/text";
import { Payment } from "../styles/images";

const Footer = () => {
  return (
    <ContainerFlex>
      <Left>
        <Logo>E-Commerce</Logo>
        <DescFooter>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          laudantium beatae obcaecati facere, suscipit molestiae natus veniam,
          ratione ipsa qui optio ducimus illum a officia nesciunt! Ad
          repudiandae reiciendis nobis.
        </DescFooter>
        <ContainerFlex>
          <SocialIcon color="3b5999">
            <Facebook style={{ fontSize: 25 }} />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram style={{ fontSize: 25 }} />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter style={{ fontSize: 25 }} />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest style={{ fontSize: 25 }} />
          </SocialIcon>
        </ContainerFlex>
      </Left>
      <InfoContainer>
        <TitleH3>Useful Links </TitleH3>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </InfoContainer>
      <Right>
        <TitleH3>Contact</TitleH3>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 742 Av. Siempre Viva
          Springfield
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +52 5512345678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          correofake@correofake.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </ContainerFlex>
  );
};

export default Footer;
