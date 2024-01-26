
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import { Box, Typography ,useTheme} from "@mui/material";
import {Link} from "react-router-dom"
import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import { tokens } from "../../../theme";
const Item=({title,to,icon,selected,setSelected})=>{
  let theme=useTheme()
  let colors = tokens(theme.palette.mode);
  
return(
  <Link to={to}>  
  <MenuItem
  active={selected===title}
  onClick={()=>setSelected(title)}
  style={{color:colors.grey[100]}}
  icon={icon}
  >
    <Typography color="black">{title}</Typography> 
    
  </MenuItem></Link>
   
 
  
)
 
}
function SideBar() {
 let [isCollapsed, setIsCollapse]=useState(false)
  let [selected, setSelected]=useState("Dashboard")
  return (
    <div className="bg-sky-950">
      {/*sidebar*/} 
      <Box class="bg-sky-950" >
      <Sidebar collapsed={isCollapsed} class="bg-sky-950">
        <Menu iconShape="square">
        <MenuItem
        class="text-slate-600"
        onClick={()=>setIsCollapse(!isCollapsed)}
        icon={isCollapsed?<MenuIcon/>:undefined }
        style={{margin:"10px 0"}}
        >
        {!isCollapsed &&(
<Box>
<Typography>
  Simon
</Typography>

</Box>


        )}

        </MenuItem>
        </Menu>
        <Menu>
{!isCollapsed &&(
<Box>

  <Typography
  variant="h6">
    image
  </Typography>
</Box>
)}
{/*Menuitems*/}
<Box paddingLeft={!isCollapsed? undefined: "10%"}>
<Item
title="Dashboard"
to="/"
selected={selected}
setSelected={setSelected}
icon={<CottageIcon/>}

/>
<Typography
variant="h6">
  Data
</Typography>
<Item
title="Manage Team"
to="/Team"
selected={selected}
setSelected={setSelected}
icon={<GroupIcon/>}
/>
<Item
title="Contact Information"
to="/Contacts"
selected={selected}
setSelected={setSelected}
icon={<ContactPageIcon/>}
/>
<Item
title="Invoices Balance"
to="/Invoices"
selected={selected}
setSelected={setSelected}
icon={<ReceiptIcon/>}

/>
<Typography
variant="h6">
  Pages
</Typography>
<Item
title="Profile Form"
to="/Profile"
selected={selected}
setSelected={setSelected}
icon={<AccountBoxIcon/>}
/>
<Item
title="Calendar"
to="/Calendar"
selected={selected}
setSelected={setSelected}
icon={<CalendarMonthOutlinedIcon/>}
/>
<Item
title="Faq"
to="/Faq"
selected={selected}
setSelected={setSelected}
icon={<QuizOutlinedIcon/>}
/>
<Typography
variant="h6"
>
 Charts
</Typography>
<Item
icon={<BarChartOutlinedIcon/>}
title="Bar Chart"
to="/Bar"
/>
<Item
icon={<PieChartOutlineOutlinedIcon/>}
title="Pie Chart"
to="/Pie"
/>
<Item
icon={<SsidChartOutlinedIcon/>}
title="Line Chart"
to="/line"
/>
<Item
icon={<TerrainOutlinedIcon/>}
title="Geographical Chart"
to="/geography"

/>
</Box>

        </Menu>

      </Sidebar>
      </Box>
      
    </div>
  )
}

export default SideBar
