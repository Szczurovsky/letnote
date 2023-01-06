import * as React from 'react'
import * as Tags from '../../styles/MainTags'
import styled from 'styled-components';
interface INotatki{
    title:string;
    description:string;
    x:number;
    y:number;
    
}
interface Props{
    x:number,
    y:number
}
type Notatka = {
    title:string;
    description:string;
    x:number;
    y:number;
}
const Page = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    align-items: center;
    align-self: center;
`
const OneNoteSmall = styled.div<Props>`
    display:block;
    height: 100px;
    background-color: #fff;
    position:fixed;
    
    left:${p => p.x}px;
    top:${p => p.y}px;
`

export const MainPage = () => {
    const [notatki, setNotatki] = React.useState<Notatka[]>([]);

    const [notatka, setNotatka] = React.useState<INotatki>({
        title:'',
        description:'',
        x:notatki.length == 0 ? 
        0:notatki[notatki.length-1].x+80 ,
        y:0,
    });
    return(
    <Page>
    {notatki != null && notatki?.map(n=>(
        <OneNoteSmall x={n.x} y={n.y}>
            <p>{n.title}</p>
            <p>{n.description}</p>
        </OneNoteSmall>
    ))}
        <Tags.DivNote>
            <Tags.P>
            Przeszedłeś do strony głównej. Aby dodać notatkę kliknij przycisk Dodaj <br />
            <p>Tytuł:<br/> <input value={notatka.title} onChange={e => setNotatka({...notatka, title:e.target.value})} /></p>
            <p>Opis:<br/> <textarea value={notatka.description} onChange={e => setNotatka({...notatka, description:e.target.value})} /></p>
        </Tags.P >
        <Tags.Button onClick={(x)=>
                {    
                    debugger;
                    setNotatki(prev=> [...prev, notatka]);
                    setNotatka({title:'',
                    description:'',
                    x:notatki.length == 0 ? 
                    0:notatki[notatki.length-1].x+80 ,
                    y:0,})
                    
                    
                }
            }>Dodaj!</Tags.Button>
    </Tags.DivNote>
    </Page>
    
    )
}
// setNotatka({...notatka, x:notatki == null ? 0:notatki[notatki.length-1].x, y:notatki == null ? 0:notatki[notatki.length-1].y})