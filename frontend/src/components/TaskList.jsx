import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, List, ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Task from './UI/Task';

export default function TaskCard() {
    const [data, setData] = React.useState([
        {name: "Task 1", duration: 30, location:"Home"},
    ]);

    return (
        <>
            <Card sx={{ margin: "10px", borderRadius: 2, boxShadow: "none", border: "1px solid #f2f3f5", backgroundColor: "" }}>
                <Box sx={{ padding: "10px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <CheckCircleIcon />
                        <Typography variant="h6" component="div" sx={{ margin: "5px 0" }}>
                            Your tasks
                        </Typography>
                    </Box>
                    <Typography variant="body2" component="div" sx={{ margin: "5px 0" }}>
                        Add some tasks to your flow to help your assistant generate a better schedule for you.
                    </Typography>
                </Box>
                <Divider variant='fullWidth' />
                <Box sx={{ padding: "10px" }}>
                    <TaskList data={data} setData={setData} />
                </Box>
            </Card>
        </>

    );
}

function TaskList({ data }) {
    return (
        <List>
            {data.map((task, index) => {
                return (
                    <ListItem key={index}>
                        <Task task={task} />
                    </ListItem>
                )
            })}
        </List>
    )
}
