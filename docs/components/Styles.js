import React from 'react';
import styled from '@emotion/styled';

export const ModernCard = styled.div`
    font-family: sans-serif;
    font-size: 14px;
    cursor: grab;
    user-select: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-wrap: break-word;
    border-radius: 3px;
    box-shadow: rgba(23, 43, 77, 0.2) 0px 1px 1px, rgba(23, 43, 77, 0.2) 0px 0px 1px;
    transition: background-color 140ms ease-in-out 0s, color 140ms ease-in-out 0s;
    background-color: rgb(255, 255, 255);
    color: rgb(23, 43, 77);
    &:hover {
    ${props => props.noHover ? '' : 'background-color: #f7f7f7'};
    --display: initial;
    }
    margin-bottom: 4px;
    padding: 10px 12px;
    max-width: 200px;
    width: 199px;
    ${props => props.fade ? 'opacity: 0.5;' : ''}
    ${props => props.border ? `border-left: 7px solid ${props.border}` : ''};
    ${props => props.borderBottom ? `border-bottom: 7px solid ${props.borderBottom}` : ''};
`;