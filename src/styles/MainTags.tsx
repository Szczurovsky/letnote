import react from 'react'
import {COLORS,SIZES} from './stale'
import styled from 'styled-components'

export const Div = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
`
export const DivNote = styled.div`
    display:flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background-color: ${COLORS.noteColor};
    padding:5px;
    border-radius: 20px;
`
export const Button = styled.button`
    display: block;
    background-color: transparent;
    align-items: center;
    color:${COLORS.text};
    font-size: ${SIZES.large};
    border:none;
    cursor:pointer;
`
export const P = styled.p`
    font-size: ${SIZES.small};
    word-wrap: break-word;
`
