import React from "react"
import { Link } from "gatsby"

import {
  StyledCollapsedMenu,
  StyledPlaceholder,
  StyledX,
  StyledLi,
} from "../../styledElements/Menu"

import SocialIcons from "../SocialIcons"

const CollapsedMenu = ({ show, close }) => {
  return (
    <StyledCollapsedMenu show={show}>
      <StyledPlaceholder />
      <StyledX onClick={close} />

      <ul>
        <StyledLi>
          <Link to="/">Work</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/">About</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/">Contact</Link>
        </StyledLi>
      </ul>

      <SocialIcons />
    </StyledCollapsedMenu>
  )
}

export default CollapsedMenu