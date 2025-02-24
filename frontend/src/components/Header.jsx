import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AirIcon from '@mui/icons-material/Air';
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ backgroundColor: "#f7f9fa", boxShadow: "none", color: "#4a5566", borderBottom: "1px solid #f2f3f5" }}>
                <Toolbar sx={{ display: "flex", gap: "10px" }}>
                    <AirIcon/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dayflow assistant
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
