import { Paper } from "@mui/material";
import { FooterItem } from "./FooterItem/FooterItem";


export const Footer: React.FC = () => {
    return (
        <Paper
            sx={
                {
                    width: '100%',
                    height: '30px',
                    borderRadius: '0px'
                }
            }
            elevation={2}
        >
            <FooterItem />
        </Paper>
    );
}