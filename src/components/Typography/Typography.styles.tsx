import styled from 'styled-components';
import { theme } from '../../theme';


type TypographyProps = {
    fontColour: string
}

export const H2 = styled.h2`
    color: ${theme.colours.primaryOne};
    font-family: ${theme.fontFamily};
    font-size: 1.5rem;
    font-weight: ${theme.fontWeights.normal};    
    margin-top: 0;
    letter-spacing: 1px;
`

export const P = styled.p`
    color: ${(props:TypographyProps) => props.fontColour};
    font-family: ${theme.fontFamily};
    font-size: 0.9rem;
    line-height: 1rem;
    margin-bottom: 9px;
    margin-top: 0;
    letter-spacing: 0.5px;
    font-weight: 300;
`


export const Caption = styled(P)`
    font-size: 0.75rem;
`

export const H3 = styled.h3`
    color: ${(props:TypographyProps) => props.fontColour};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.fontWeights.normal};
    margin-top: 0;
    letter-spacing: 1px;
`

export const Overline = styled.span`
    font-size: 0.8rem;
    font-weight: ${theme.fontWeights.light};
    vertical-align: bottom;
    filter: opacity(0.6);
    margin-left: 4px;
`