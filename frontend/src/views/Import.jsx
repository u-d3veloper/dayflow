import React from "react";
import Navigation from "../components/Navigation";
import HeaderActions from "../components/HeaderActions";
import { Box, Button, Typography } from "@mui/material";
import { retrieveDayCalendar } from "../services/Calendar";
import EventList from "../components/EventList";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Import() {
  const [file, setFile] = React.useState(null);
  const [dayEvents, setDayEvents] = React.useState([]);
  const [date, setDate] = React.useState(null);
  const inputRef = React.useRef(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileUpload = (fileContent) => {
    console.log(date.toISOString());
    const today = retrieveDayCalendar(fileContent, date);
    console.log(today);
    if (today.length === 0) {
      alert("Aucun événement trouvé pour cette date.");
      return;
    }
    setDayEvents(today);
    localStorage.setItem("events", JSON.stringify(today));
    alert("Événements importés avec succès !");
  };

  const handleImportClick = () => {
    if (!file) {
      alert("Veuillez sélectionner un fichier avant de continuer.");
      return;
    }
    if (!file.type.includes("text/calendar")) {
      alert("Le fichier sélectionné n'est pas au format .ics");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;
      handleFileUpload(fileContent);
    };
    reader.onerror = function () {
      alert("Erreur lors de la lecture du fichier.");
    };
    reader.readAsText(file);
  };

  return (
    <>
      <HeaderActions />
      {dayEvents.length === 0 ? (
        <Box
          sx={{
            margin: "20px 30px",
            display: "flex",
            flexDirection: "column",
            height: "75vh",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              Importer un calendrier
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              Choisissez la date à récupérer puis sélectionnez un fichier .ics
              pour importer vos événements.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "20px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date cible"
                  value={date}
                  onChange={(newValue) => {setDate(newValue); console.log(newValue.toISOString())}}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Button
            onClick={handleButtonClick}
            sx={{
              border: "1px dashed rgb(200, 198, 198)",
              borderRadius: "20px",
              padding: "20px",
              backgroundColor: "rgb(248, 248, 248)",
              color: "black",
              "&:hover": {
                backgroundColor: "rgb(220, 220, 220)",
              },
            }}
          >
            {file == null ? (
              <Typography sx={{ color: "gray" }}>
                Sélectionner un fichier
              </Typography>
            ) : (
              <Typography variant="body1">
                Fichier sélectionné : {file.name}
              </Typography>
            )}
          </Button>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              borderRadius: "10px",
              backgroundColor: "#111114",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              "&:hover": {
                backgroundColor: "rgba(47, 44, 44, 0.1)",
              },
            }}
            onClick={handleImportClick}
          >
            Importer
          </Button>
          <Typography variant="body2" sx={{ marginTop: "20px", color: "gray" }}>
            Formats acceptés : .ics
          </Typography>
        </Box>
      ) : (
        <EventList events={dayEvents} />
      )}
      <Navigation />
    </>
  );
}
