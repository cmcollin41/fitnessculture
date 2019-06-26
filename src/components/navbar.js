import React from "react"
import Navlinks from "./navlinks"
import {
    StyledNav,
    Dropdown,
    NavButton,
    LargeScreenNav,
} from "../css/NavbarStyles"
import { colors } from "../css/global"
import "../css/global.css"

class Navbar extends React.Component {
    state = {
        dropdownStatus: 0,
        height: "0px",
        openDisplay: 1,
        closeDisplay: 0,
    }

    changeDropdown = () => {
        const dropdownStatus = this.state.dropdownStatus === 0 ? 1 : 0
        const height = this.state.height === "0px" ? "500px" : "0px"
        const openDisplay = this.state.openDisplay === 0 ? 1 : 0
        const closeDisplay = this.state.closeDisplay === 0 ? 1 : 0
        this.setState({
            dropdownStatus,
            height,
            openDisplay,
            closeDisplay,
        })
    }

    render() {
        return (
            <React.Fragment>
                <StyledNav>
                    <ul>
                        <li className="logo">USRC</li>
                    </ul>
                    <NavButton onClick={this.changeDropdown}>
                        {/* hamburger svg */}
                        <svg
                            style={{ opacity: `${this.state.openDisplay}` }}
                            width="20"
                            viewBox="0 0 20 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                y1="0.5"
                                x2="20"
                                y2="0.5"
                                stroke={colors.primary}
                            />
                            <line
                                y1="7.5"
                                x2="20"
                                y2="7.5"
                                stroke={colors.primary}
                            />
                            <line
                                y1="14.5"
                                x2="20"
                                y2="14.5"
                                stroke={colors.primary}
                            />
                        </svg>
                        {/* close svg */}
                        <svg
                            style={{ opacity: `${this.state.closeDisplay}` }}
                            width="20"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="1.28226"
                                y1="0.575158"
                                x2="15.4244"
                                y2="14.7173"
                                stroke={colors.primary}
                            />
                            <line
                                x1="0.575158"
                                y1="14.7177"
                                x2="14.7173"
                                y2="0.5756"
                                stroke={colors.primary}
                            />
                        </svg>
                    </NavButton>

                    <LargeScreenNav>
                        <Navlinks />
                    </LargeScreenNav>
                </StyledNav>
                <Dropdown
                    style={{
                        opacity: `${this.state.dropdownStatus}`,
                        maxHeight: `${this.state.height}`,
                    }}
                >
                    <Navlinks />
                </Dropdown>
            </React.Fragment>
        )
    }
}

export default Navbar
