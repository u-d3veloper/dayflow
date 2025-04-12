import { Box, Link } from '@mui/material'
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import React from 'react'

export default function HeaderActions
    () {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "20px 30px" }}>
            <Link href="/settings" underline="none">
                <img src="/pp.jpeg" alt="random" style={{ width: "60px", borderRadius: "15px 15px 30px 15px" }} />
            </Link>
        </Box>
    )
}
