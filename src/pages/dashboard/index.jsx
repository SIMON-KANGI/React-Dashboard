import { Box, Typography, Button, IconButton } from "@mui/material"
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
function Home (){
return(
<>
<Box display="flex"
class="pt-8 pl-5 pr-5 justify-between flex"
style={{ width:"100%", justifyContent:"space-between"}}
>
<Box>
<Typography
    variant="h5"
    style={{fontWeight:"bolder",color:"white"}}>
    
        DASHBOARD
    </Typography>
    <Typography
    variant="p"
    style={{color:"lightgreen"}}
    >
        Welcome to Dashboard
    </Typography>
    </Box>
    
    <Button 
    class="bg-sky-700 h-8"
    style={{color:"white"}}
    ><DownloadOutlinedIcon/> DownLoad Reports</Button>
</Box>
<Box display="flex">
<Box 
 class="bg-sky-950 text-green-600"
style={{border:"solid 0px", display:"flex", justifyContent:"space-between", width:"23rem",margin:"1rem",
padding:"3.5rem"
}}>
<div>
<MarkEmailReadOutlinedIcon/>
    <h4 style={{color:"green", fontWeight:"bold", fontSize:"1rem"}}>Emails Sent <span className="text-green-700 text-sm">+40%</span></h4>
    </div>
    
    <h5 style={{color:"white", fontWeight:"bold", fontSize:"1.5rem"}}>348438</h5>
    
</Box>
<Box class="text-green-600 bg-sky-950"
style={{border:"solid 0px", display:"flex", justifyContent:"space-between", width:"23rem",margin:"1rem",
padding:"3.5rem"}}
>
<div> 
<PointOfSaleOutlinedIcon/>
    <h4>Sales Obtained <span className="text-green-700 text-sm">+25%</span></h4>
    </div>
    <h5 className="text-slate-200 text-2xl font-bold">50034889</h5>
   
</Box>
<Box class="text-green-600 bg-sky-950"
style={{border:"solid 0px", display:"flex", justifyContent:"space-between", width:"23rem",margin:"1rem",
padding:"3.5rem"}}
>
<div> 
<PersonAddOutlinedIcon/>
    <h4>New User <span className="text-green-700 text-sm">+30%</span></h4>
    </div>
    <h5 className="text-slate-200 text-2xl font-bold">548700</h5>
   
</Box>
<Box class="text-green-600 bg-sky-950"
style={{border:"solid 0px", display:"flex", justifyContent:"space-between", width:"23rem",margin:"1rem",
padding:"3.5rem"}}
>
<div> 
<TrafficOutlinedIcon/>
    <h4>Traffic Received <span className="text-green-700 text-sm">+38%</span></h4>
    </div>
    <h5 className="text-slate-200 font-bold text-2xl">70039</h5>
   
</Box>
</Box>
<Box class="flex w-100 justify-between">
    <Box class="p-5 bg-sky-950 m-3 w-3/4 h-60">
    <div className="flex justify-between"> 
    <Typography variant="p" class="text-slate-200">
            Revenue Generated 
            <h5 className=" text-emerald-400 font-extrabold">$644736848</h5>
        </Typography>
       
<IconButton class="text-emerald-500">
<DownloadOutlinedIcon/>
</IconButton>
</div>
       
        <div className="w-75 h-60 m-2">
            <img src="https://www.mydsomanager.com/img/help/news20230322-2.png" width="900px" className="h-1/2"/>
        </div>
        
    </Box>
    <Box class="p-5 mr-2 overflow-y-scroll h-60 w-1/3 position-fixed scroll-">
        <div className="bg-cyan-950 text-center justify-center flex h-20 align-middle">
        <Typography variant="p" class="text-slate-100 p-5  w-100">
            Recent Transactions
        </Typography>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle p-4 justify-between w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
        <div className="flex mt-2 align-middle justify-between p-4 w-100 bg-sky-950">
            <div className=" p-2 align-middle">
            <h5 className="text-green-500 font-extrabold">009ur47</h5>
            <h6 className="text-slate-200">JohnDoe</h6>
            </div>
            <div className="m-3 text-slate-200">
            <h6 className="text-zinc-300 text-sm">3873785</h6>
            </div>
            <div className="m-3 text-slate-200">
            <Button class="bg-teal-500 text-slate-200 p-1 w-100 border-r-2">$45.90</Button>
            </div>
        </div>
    </Box>
</Box>

</>
)




}
export default Home