import styled from 'styled-components';
import { theme } from '../../theme';


type TypographyProps = {
    fontColour: string
}

export const H2 = styled.h2`
    color: ${theme.colours.primaryOne};
    font-family: ${theme.fontFamily};
    font-size: 1.5em;
    margin-top: 0;
`

export const P = styled.p`
    color: ${(props:TypographyProps) => props.fontColour};
    font-family: ${theme.fontFamily};
    font-size: 1em;
    line-height: 0.9em;
    margin-bottom: 9px;
    margin-top: 0;
`


export const Caption = styled(P)`
    font-size: 0.75em;
`

export const H3 = styled.h3`
    color: ${(props:TypographyProps) => props.fontColour};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeights.normal};
    margin-top: 0;
`

export const Overline = styled.span`
    font-size: 0.45em;
    font-weight: ${theme.fontWeights.light};
`