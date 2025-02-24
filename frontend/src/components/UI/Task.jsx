import { Box } from '@mui/material'
import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Typography from '@mui/material/Typography';

export default function Task({ task }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent:"between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <DoneAllIcon />
                <Typography variant="body1" component="div" sx={{ margin: "5px 0" }}>
                    {task.name}
                </Typography>
            </Box>
            <IndeterminateCheckBoxIcon />
        </Box>
    )
}
