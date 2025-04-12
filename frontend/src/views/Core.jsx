import React, { useState, useEffect } from "react";
import HeaderActions from "../components/HeaderActions";
import { Box, Button, CircularProgress, Card, CardContent, Typography } from "@mui/material";
import AssistantIcon from "@mui/icons-material/Assistant";
import getDayOptimization from "../services/Api";

export default function Core() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getDayOptimization(localStorage.getItem("events"), localStorage.getItem("tasks"));
      setEvents(response);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (events.length > 0) {
      console.log(events);
    }
  }, [events]);

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const durationMinutes = (endDate - startDate) / (1000 * 60); // Durée en minutes
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    return `${hours} heures ${minutes} minutes`;
  };

  console.log(typeof(localStorage.getItem("events")) + localStorage.getItem("events"));
  console.log(typeof(localStorage.getItem("tasks")) + localStorage.getItem("tasks"));
  return (
    <>
      <HeaderActions />
      <Box sx={{ margin: "20px 30px" }}>
        <GenerateAction handleClick={handleClick} />
        <Box sx={{ marginTop: "20px", marginBottom: "80px" }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <p>Error loading events. Please try again.</p>
          ) : (
            events.map((event, index) => (
              <Card key={index} sx={{ minWidth: 275, borderRadius: 2, boxShadow: 3, marginBottom: "10px" }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="div">
                      {event.Name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(event.Start).toLocaleString()}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Durée: {calculateDuration(event.Start, event.End)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.Location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.Description}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      </Box>
    </>
  );
}

function GenerateAction({ handleClick }) {
  return (
    <Box
      sx={{
        borderRadius: "17px",
        border: "1px solid #d1dae0",
        background: "#f5f7fa",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleClick}
        sx={{
          color: "black",
          textTransform: "none",
          fontSize: "14px",
          fontWeight: "normal",
        }}
        variant="text"
      >
        Ask Dayflow to organize your day
      </Button>
      <AssistantIcon />
    </Box>
  );
}
