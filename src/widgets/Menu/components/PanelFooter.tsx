import React from "react";
import styled from "styled-components";
import * as IconModule from "../icons";
import { SvgProps } from "../../../components/Svg";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { MenuEntry, PanelProps, PushedProps } from "../types";
// import CakePrice from "./CakePrice";
// import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import Accordion from "./Accordion";
import { LinkLabel, MenuEntry as MenuEntryComponent } from "./MenuEntry";
import MenuLink from "./MenuLink";

interface Props extends PanelProps, PushedProps {
  addictionals: MenuEntry[];
  isMobile: boolean;
}

const Container = styled.div<{ isPushed: boolean }>`
  flex: none;
  background-color: ${({ theme }) => theme.nav.background};
  padding: ${({ isPushed }) => (isPushed ? "8px 16px" : "0 0 0 4px")};
`;

const AddictionalContainer = styled.div`
  padding-bottom: 16px;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  margin-top: 8px;
  padding: 0 8px;
`;

// const SocialEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: ${MENU_ENTRY_HEIGHT}px;
//   padding: 0 16px;
//   margin-top: 16px;
// `;

const LebelSection = styled.div`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.textSubtle};
  padding-bottom: 16px;
  font-size: 14px;
`;

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  addictionals,
  isMobile,
}) => {
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  if (!isPushed) {
    return (
      <Container isPushed={isPushed}>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container isPushed={isPushed}>
      <LebelSection>INFO</LebelSection>
      <AddictionalContainer>
        {addictionals.map((entry) => {
          const Icon = Icons[entry.icon];
          const iconElement = <Icon width="24px" mr="8px" />;
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
            const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

            return (
              <Accordion
                key={entry.label}
                isPushed={isPushed}
                pushNav={pushNav}
                icon={iconElement}
                label={entry.label}
                initialOpenState={initialOpenState}
                className={calloutClass}
              >
                {isPushed &&
                  entry.items.map((item) => (
                    <MenuEntryComponent
                      key={item.href}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                    >
                      <MenuLink href={item.href} target={item.external ? "_blank" : "_self"}>
                        {item.label}
                      </MenuLink>
                    </MenuEntryComponent>
                  ))}
              </Accordion>
            );
          }
          return (
            <MenuEntryComponent key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href} target={entry.external ? "_blank" : "_self"} onClick={handleClick}>
                {iconElement}
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              </MenuLink>
            </MenuEntryComponent>
          );
        })}
      </AddictionalContainer>

      {/* <SocialEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
      </SocialEntry> */}
      <SettingsEntry>
        <SocialLinks />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
