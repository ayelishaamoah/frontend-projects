import styled from 'styled-components';
import { theme } from '../../theme';
import { P } from '../Typography/Typography';

export const SinglePriceGridContainer = styled.article`
    border-radius: 9px;
    box-shadow: 0px 0px 9px 3px #e5e5e5;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: 600px;
    @media only screen and (max-width : 480px){
        width: 100%;
    }
`;

type SinglePriceGridSectionProps = {
    backgroundColour: string,
    width: string
}

export const SinglePriceGridSection= styled.section`
    background-color: ${(props:SinglePriceGridSectionProps) => props.backgroundColour};
    box-sizing: border-box;
    padding: 36px;
    width: ${(props:SinglePriceGridSectionProps) => props.width}; 
    @media only screen and (max-width : 480px){
        width: 100%;
    }
`;

export const SinglePriceGridSectionBodyText = styled(P)`
    font-size: 0.8rem;
    line-height: 1.25rem;
    font-weight: ${theme.fontWeights.light};
`

export const SinglePriceGridPriceText = styled(P)`
    color: ${theme.colours.neutralOne};
    font-size: 1.6rem;
    line-height: 1.3rem;
    font-weight:  ${theme.fontWeights.normal};
`