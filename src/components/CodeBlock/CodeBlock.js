import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import applyResize from "../Common/applyResize";
import '../index.scss';

const CodeBlock = (props) =>{
    return (
        <pre className={
            applyClasses(props) +
            applyResize(props)
        }>
            <code>{props.children}</code>
        </pre>
    )
};

const applyClasses = (props) => {
    return classNames(" ")
};

CodeBlock.propTypes = {

    /** Pass children elements to this element */
    children: PropTypes.node,
};

CodeBlock.defaultProps = {

    children: undefined
};

export default CodeBlock;
