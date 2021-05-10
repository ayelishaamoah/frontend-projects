import { ButtonStyle , ButtonStyleProps, ButtonText } from './Button.styles'

type ButtonProps = {
    text: string
} & ButtonStyleProps;

export const Button: React.FC<ButtonProps> = ({text, variant}) => <ButtonStyle variant={variant}><ButtonText variant={variant}>{text}</ButtonText></ButtonStyle>