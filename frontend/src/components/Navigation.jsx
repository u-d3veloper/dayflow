import React, { useEffect } from 'react';
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AssistantIcon from '@mui/icons-material/Assistant';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from "react-router-dom";
import { colors } from '@mui/material';

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/core':
                setValue(1);
                break;
            case '/settings':
                setValue(2);
                break;
            default:
                setValue(0);
        }
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/core');
                break;
            case 2:
                navigate('/settings');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                sx={{
                    height: "70px",
                    borderTop: "1px solid #EFEFEF",
                    backgroundColor:"#FFF",
                    borderRadius:'30px 30px 0 0'
                }}
            >
                <BottomNavigationAction icon={<HomeIcon sx={ActionStyle}/>} />
                <BottomNavigationAction icon={<AssistantIcon sx={ActionStyle}/>} />
                <BottomNavigationAction icon={<SettingsIcon sx={ActionStyle}/>} />
            </BottomNavigation>
        </Box>
    );
}

const ActionStyle = {
    fontSize:"30px"
}