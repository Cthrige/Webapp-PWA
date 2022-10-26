import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ pb: 8}} >
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
    <BottomNavigation 
      sx={{ width: '100%', position: 'sticky'}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      style={{ backgroundColor: "#FDF6A5"}}
      >
      <Link to="/"><BottomNavigationAction label='Hjem' icon={<HomeIcon />} /></Link>
      <Link to="/statistics"><BottomNavigationAction label='Statistik' icon={<DonutSmallIcon />} /></Link>
      <Link to="/settings"><BottomNavigationAction label='Indstillinger' icon={<SettingsIcon />} /></Link>
    </BottomNavigation>
    </Paper>
    </Box>
  )
}
