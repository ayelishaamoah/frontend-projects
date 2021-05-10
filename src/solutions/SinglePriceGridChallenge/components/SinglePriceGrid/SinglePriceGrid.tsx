import React from 'react';
import { theme } from '../../../../theme';
import { SinglePriceGridContainer, SinglePriceGridSection,SinglePriceGridSectionBodyText,SinglePriceGridPriceText } from './SinglePriceGrid.styles'
import { Button,H2, H3, P, Overline } from '../index';


export const SinglePriceGrid: React.FC = () =>
 <SinglePriceGridContainer>
    <SinglePriceGridSection width='100%' backgroundColour={theme.colours.neutralOne}>
        <H2>Join our community</H2>
        <H3 fontColour={theme.colours.secondaryOne}>30-day, hassle-free money back guarantee</H3>
        <P fontColour={theme.colours.neutralThree}>Gain acces to our full library of tutorials along with expert code reviews.</P>
        <P fontColour={theme.colours.neutralThree} >Gain acces to our full library of tutorials along with expert code reviews.</P>
    </SinglePriceGridSection>
        <SinglePriceGridSection width='50%' backgroundColour={theme.colours.primaryOne}>
          <H3 fontColour={theme.colours.neutralOne}>Monthly Subscription</H3>
          <SinglePriceGridPriceText fontColour={theme.colours.neutralTwo}>$29<Overline> per month</Overline></SinglePriceGridPriceText>
          <SinglePriceGridSectionBodyText fontColour={theme.colours.neutralTwo}>Full access for less that $1 per day</SinglePriceGridSectionBodyText>
          <Button text="Sign Up" variant='primary'/>
    </SinglePriceGridSection>
        <SinglePriceGridSection width='50%' backgroundColour={theme.colours.primaryTwo}>
            <H3 fontColour={theme.colours.neutralOne}>Why Us</H3>
            <SinglePriceGridSectionBodyText fontColour={theme.colours.neutralTwo}>
                Lorem ipsum dolor sit amet<br/>
                ed do eiusmod tempor <br/>
                Ut enim ad minim veniam et do<br/>
                aliquip ex commodo<br/>
                nisi minim veniam<br/>
                eiusmod tempor incididunt.
            </SinglePriceGridSectionBodyText>
    </SinglePriceGridSection>
    </SinglePriceGridContainer>