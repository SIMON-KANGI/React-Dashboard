import { Box, IconButton } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { ColorModeContext} from "../../../theme";
import { useContext } from "react";

function TopBar() {
  // let theme = useTheme();
  // let colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const toggleColorMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Box display="flex" justifyContent="space-between" class="flex justify-between mt-2 p-5">
      {/*searchbar*/}
      <Box class="flex">
        <input className="text-slate-300 bg-slate-600 p-2" placeholder="search"/>
        <IconButton class="text-slate-200">
          <SearchOutlinedIcon />
        </IconButton>
        
      </Box>
      {/*icons*/}
      <Box display="flex">
        <IconButton class="text-slate-100" onClick={toggleColorMode}>
          {colorMode.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton class='text-gray-100'>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton class="text-slate-100">
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton class="text-neutral-200">
          <Person2OutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopBar;
