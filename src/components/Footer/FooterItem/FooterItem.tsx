import { FooterCounter } from "./FooterCounter/FooterCounter"
import { FooterNavBar } from "./FooterNavBar/FooterNavBar"
import { Box } from '@mui/material'



export const FooterItem: React.FC = () => {




    return (
        <Box sx={
            {
                width: '100%',
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }
        }
        >
            <FooterCounter />
            <FooterNavBar />
        </Box>
    );
}