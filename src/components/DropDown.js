import React, { useState } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const DdWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export const DdToggle = styled.div`
    border: 1px solid black;
    display: flex;
    color: black;
    width: 80px;
    padding: 10px;
    margin: auto;
`;

export const DdSelected = styled.div`
    margin-right: 5px;
    color: black;
    margin: auto;
`;

export const DdMenu = styled.ul`
    z-index: 10;
    background: white;
    border: 1px solid black;
    position: absolute;
    color: black;
    overflow:hidden;
    padding: 0;
    width: 80px;
    padding: 10px;
    margin-top: 5px;
    list-style-type: none;
`;

export const DdMenuItem = styled.li`
    width: 100%;
    line-height: 1.6rem;
    padding-top: 3px;
    padding-bottom: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
`;

export const DropDown = ({choices}) => {

    const [listOpen, setListOpen] = useState(false);

    const toggleList = () => {
        setListOpen(!listOpen);
    }

    return (<DdWrapper aria-label="Main Navigation" onClick={toggleList}>
        <DdToggle aria-expanded={listOpen ? true:false}>
            <DdSelected>Tags</DdSelected>
            <FontAwesomeIcon style={{  margin: "auto", marginTop: "2px" }} color="red" size="1x"
                             icon={listOpen ? faChevronUp : faChevronDown}/>
        </DdToggle>
        {listOpen && <DdMenu>
            {choices.map((item) => (
                <DdMenuItem key={item}>{item}</DdMenuItem>
            ))}
        </DdMenu>}</DdWrapper>);
}
export default DropDown;