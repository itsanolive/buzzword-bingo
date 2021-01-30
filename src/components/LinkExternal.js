// import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon'

// * from https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline/61472427#61472427
const LinkExternal = (props) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.href}
            aria-label={props.label} className="flex">
            {props.icon ?
                <Icon name={props.icon} className={props.iconClassName} />
            :
            props.children ? props.children : null}
        </a>
    )
};

export default LinkExternal;
