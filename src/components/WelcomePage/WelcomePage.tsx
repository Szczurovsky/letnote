import * as React from 'react';
import * as Tags from '../../styles/MainTags'
interface IHandleWelcomePage{
    handleWelcomePage: (a: boolean) => void
    welcomePage: boolean
}
export const WelcomePage = (props:IHandleWelcomePage) => {

    return(
        <Tags.Div>
            <Tags.P>
                Witaj na notatniku dla ludzi specjalnej troski. Stworzony został dla ludzi wymagających czegoś więcej niż tylko zapisywania notatek
            </Tags.P>
            <Tags.Button onClick={()=>props.handleWelcomePage(props.welcomePage)}>Przejdź do strony głównej</Tags.Button>

        </Tags.Div>
    )
}