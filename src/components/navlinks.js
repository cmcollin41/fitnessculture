import React from "react"
import { Link } from "gatsby"
import { linkStyles } from "../css/NavbarStyles"

export default () => (
    <ul>
        <li>
            <Link to="/" style={linkStyles}>
                Home
            </Link>
        </li>
        <li>
            <Link to="/" style={linkStyles}>
                About
            </Link>
        </li>
        <li>
            <Link to="/" style={linkStyles}>
                Services
            </Link>
        </li>
        <li>
            <Link to="/" style={linkStyles}>
                Works
            </Link>
        </li>
        <li>
            <Link to="/" style={linkStyles}>
                Contacts
            </Link>
        </li>
    </ul>
)
