import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import { colors } from "./global"

export const StyledNav = styled.nav`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-auto-flow: column;
    padding-top: ${rhythm(2)};
    ul {
        list-style: none;
        padding-inline-start: 0px;
        margin: 0;
        li {
            display: inline;
        }
    }
`

export const Dropdown = styled.div`
    width: 100%;
    transition: all 0.3s ease-out;
    margin-top: ${rhythm(1)};
    background: white;
    overflow: hidden;
    height: auto;
    max-height: 500px;
    ul {
        margin: 0;
        li {
            display: block;
        }
        @media (min-width: 768px) {
            opacity: 0;
        }
        a {
            padding-left: 0 !important;
        }
    }
`

export const NavButton = styled.button`
    border: none;
    background: white;
    padding: 3px;
    display: block;
    position: relative;
    @media (min-width: 768px) {
        display: none;
    }
`

export const LargeScreenNav = styled.div`
    ul {
        list-style: none;
        padding-inline-start: 0px;
        margin: 0;
        li {
            display: inline;
        }
    }
    display: none;
    @media (min-width: 768px) {
        display: block;
    }
`

export const linkStyles = {
    color: `${colors.primary}`,
    backgroundImage: "none",
    padding: rhythm(1 / 2),
    textTransform: "uppercase",
    fontSize: rhythm(1 / 2),
}

export const activeStyles = {
    borderBottom: `1px solid ${colors.primary}`,
}
