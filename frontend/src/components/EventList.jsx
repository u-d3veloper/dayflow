import React from 'react';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function EventList({ events }) {
    const calculateDuration = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const durationMinutes = (endDate - startDate) / (1000 * 60); // Durée en minutes
        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;
        return `${hours} heures ${minutes} minutes`;
      };
    return (
        <Paper sx={{padding:"10px 0", overflowY: 'auto', maxHeight: '80vh', boxShadow:"none" }}>
            <List>
                <Box
                    sx={{
                        margin: "0 30px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "75vh",
                    }}
                >
                    {events.map((event, index) => (
                        <Card key={index} sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3, marginBottom: "10px" }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" component="div">
                              {event.summary}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {new Date(event.start).toLocaleString()}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            Durée: {calculateDuration(event.start, event.end)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.location}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                </Box>
            </List>
        </Paper>
    );
}
