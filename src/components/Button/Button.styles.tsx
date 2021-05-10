import styled from 'styled-components';
import { theme } from '../../theme';

export type ButtonStyleProps = {
    variant: 'primary',
    width?: 'string'
}

export const ButtonStyle = styled.button`
    background-color: ${(props: ButtonStyleProps) => props.variant === 'primary' && theme.colours.secondaryOne};
    border-radius: 4px;
    border: none;
    box-shadow: 0px 3px 10px #259d9d;
    padding-bottom: 12px;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 12px;
    width: ${(props: ButtonStyleProps) => props?.width || '100%'};
    line-spacing: 1px;
    margin-top: 21px;
    transition: filter 0.5s ease-in-out;
    &:hover {
        filter:  brightness(80%);
    }

`
export const ButtonText = styled.span`
    color:  ${(props: ButtonStyleProps) => props.variant === 'primary' && theme.colours.neutralOne};
    letter-spacing: 0.5px
`
