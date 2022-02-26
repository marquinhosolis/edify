import React from 'react';
import './Button.scss';

export default function Button(props) {
	return <div className={`btn ${props.styleName}`}>{props.label}</div>;
}
