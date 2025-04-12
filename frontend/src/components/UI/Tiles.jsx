import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Tiles({children}) {
    return (
        <Card sx={{
            width: "162px",
            height: "162px",
            flexShrink: "0",
            borderRadius: "20px",
            border: "1px solid #EFEFEF",
            background: "#FFF",
            boxShadow: "0px 2px 5.8px 0px rgba(0, 0, 0, 0.10)",
        }}>
            <CardContent sx={{
                width: "100%",
                height: "100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                padding:"10px",
                boxSizing:"border-box"
            }}>
                {children}
            </CardContent>
        </Card>
    );
}
