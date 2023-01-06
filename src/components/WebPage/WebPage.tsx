import * as React from 'react';
import styled from 'styled-components';
import {WelcomePage} from '../WelcomePage/WelcomePage'
import {MainPage} from '../MainPage/MainPage'

import {Div,Button} from '../../styles/MainTags'

export const WebPage = () => {
    const [welcomePage, useWelcomePage] = React.useState<boolean>(true);
    const HandleWelcomePage = (a: boolean) =>{
        useWelcomePage(!a)}
    return(
        <Div>
            {
                !welcomePage ? 
                    <MainPage />: 
                    <WelcomePage handleWelcomePage={HandleWelcomePage} welcomePage={welcomePage}/>
            }
        </Div>
    )
}