import styled from "styled-components";

import Logo from "../assets/hirefy-logo.png";
import CloseIcon from "../assets/close-icon.png";
import SidebarLinks from "./Links";
import home from "../assets/home-icon.png";
import applicant from "../assets/applicant.svg";
import question from "../assets/question.svg";
import category from "../assets/category.svg";
import marketplace from "../assets/marketplace.svg";
import { Divider } from "@mui/material";

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0 10px 10px 0px;
  background-color: #fff;
  width: 280px;
`;

const SidebarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d5287;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 10px 0 0;
`;
const Sidebarlinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const SidebarLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h1 {
    color: #fff;
    font-size: 20px;
  }
`;
const SidebarLogo = styled.img`
  width: 36px;
`;
const SidebarClose = styled.img`
  width: 18px;
`;

const SidebarFooter = styled.footer`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 20px;
  p {
    font-size: 14px;
  }
  div {
    display: flex;
    gap: 8px;
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: #3f769f;
  }
`;

const Sidebar = () => {
  const links = [
    {
      label: "Home",
      img: home,
      url: "/",
    },
    {
      label: "How it works",
      img: question,
      url: "/",
    },
    {
      label: "Marketplace",
      img: marketplace,
      url: "/",
    },
    {
      label: "For Talents",
      img: applicant,
      url: "/",
    },
    {
      label: "Categories",
      img: category,
      nestedLinks: [
        {
          label: "Lorem ipsum",
          url: "/",
        },
        {
          label: "Lorem ipsum",
          url: "/",
        },
        {
          label: "Lorem ipsum",
          nestedLinks: [
            {
              label: "Lorem ipsum",
              url: "/",
            },
          ],
        },
        {
          label: "Lorem ipsum",
          url: "/",
        },
        {
          label: "Lorem ipsum",
          nestedLinks: [
            {
              label: "Lorem ipsum",
              url: "/",
            },
            {
              label: "Lorem ipsum",
              url: "/",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <SidebarContainer>
        <SidebarTop>
          <SidebarLogoContainer>
            <SidebarLogo src={Logo} alt="hirefy logo" />
            <h1>Hirefy</h1>
          </SidebarLogoContainer>
          <SidebarClose src={CloseIcon} />
        </SidebarTop>
        <Sidebarlinks>
          <SidebarLinks links={links} level={0} />
        </Sidebarlinks>

        <SidebarFooter>
          <p>&copy; 2023 Hirefy. LLC.</p>
          <Divider primary />
          <div>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Version</a>
          </div>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
