import { Box, Typography } from '@mui/material'
import React from 'react'
import Tiles from '../components/UI/Tiles'
import Grid from '@mui/material/Grid2'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import Link from '@mui/material/Link'

export default function Settings() {
  return (
    <>
      <Box sx={{
        margin: "20px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Typography variant='h3' fontWeight={"bold"}>Hi, Titouan</Typography>
        <img src="/pp.jpeg" alt="" style={{width:"70px", borderRadius:"70px"}}/>
      </Box>
      <Box sx={{
        margin: "20px 30px",
      }}>
        <Typography variant='body1'>Edit your app configurations here</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: "center", margin: "20px 30px", boxSizing: "content-box" }}>
        <CTAGrid />
      </Box>
      <Box sx={{
        margin:"20px 30px"
      }}>
        <Typography variant='body1' sx={{textDecoration:"underline"}}>
          Read our terms and conditions
        </Typography>
        <Typography variant='body1'>
        Property of ENSC - Bordeaux INP. This application don’t use your data in any way. None of the used informations are saved in order to improve the app. If you want to give us a feedback, contact us at <br/>
        <span style={{
          color:"#1E86FC"
        }}>
        tauterioux@ensc.fr
        </span>
        </Typography>
      </Box>
    </>
  )
}

function CTAGrid() {
  return (
    <Box sx={{}}>
      <Grid container rowSpacing={1} columnSpacing={1}>
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
  }
}
