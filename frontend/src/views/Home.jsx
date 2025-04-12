import * as React from 'react';
import Box from '@mui/material/Box';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Typography } from '@mui/material';
import Tiles from '../components/UI/Tiles';
import Grid from '@mui/material/Grid2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssistantIcon from '@mui/icons-material/Assistant';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Link from '@mui/material/Link';
import HeaderActions from '../components/HeaderActions';
export default function Home() {
  return (
    <>
      <HeaderActions/>
      <Box sx={{ padding: "30px", width: "80%" }}>
        <Typography variant="h3" component="div" sx={{ fontWeight: "bold", textAlign: "left" }}>
          Hi, Titouan
          What are you starting by today ?
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "center", margin: "20px 30px", boxSizing: "content-box" }}>
        <CTAGrid />
      </Box>
    </>
  )
}


function CTAGrid() {
  return (
    <Box sx={{}}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid size={6}>
          <Link href="/core" underline="none">
            <Tiles>
              <AssistantIcon sx={TileContentStyle.tilesIcon} />
              <Typography sx={TileContentStyle.tilesText}>Ask Dayflow to organize</Typography>
            </Tiles>
          </Link>
        </Grid>
        <Grid size={6}>
            <Tiles>
              <AutoAwesomeMosaicIcon sx={TileContentStyle.tilesIconDisabled} />
              <Typography sx={TileContentStyle.tilesTextDisabled}>Edit your focus preferences</Typography>
            </Tiles>
        </Grid>
        <Grid size={6}>
          <Link href="/import" underline="none">
            <Tiles>
              <DocumentScannerIcon sx={TileContentStyle.tilesIcon} />
              <Typography sx={TileContentStyle.tilesText}>Import your timetabe</Typography>
            </Tiles>
          </Link>
        </Grid>
        <Grid size={6}>
          <Link href="/tasks" underline="none">
            <Tiles>
              <CheckCircleIcon sx={TileContentStyle.tilesIcon} />
              <Typography sx={TileContentStyle.tilesText}>Add your day goals</Typography>
            </Tiles>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

const TileContentStyle = {
  tilesIcon: {
    fontSize: "3em"
  },
  tilesText: {
    fontSize: "1.1em",
    fontWeight: "bold",
    textDecoration: "none",
  },
  tilesIconDisabled: {
    fontSize: "3em",
    color: "#bdbdbd"
  },
  tilesTextDisabled: {
    fontSize: "1.1em",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#bdbdbd"
  }

}
