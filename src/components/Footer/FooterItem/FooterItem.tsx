import { FooterCounter } from "./FooterCounter/FooterCounter"
import { FooterNavBar } from "./FooterNavBar/FooterNavBar"



export const FooterItem:React.FC = () => {
    return(
        <>
            <FooterCounter/>
            <FooterNavBar/>
        </>
    );
}