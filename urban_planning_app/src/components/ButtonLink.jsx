import React from 'react'
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function ButtonLink() {
    function buttonLink({ to, children }) {
        return <Link to={to}><Button>{children}</Button></Link>;
    }

    return (
        <>
            <buttonLink to="./UrbanGame.jsx">Play</buttonLink>
        </>
    )

}

export default ButtonLink;