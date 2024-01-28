import { DataGrid } from "@mui/x-data-grid"
import { mockDataInvoices } from "../../data/mockData";
import { Box, Typography } from "@mui/material";
function Invoices() {
  const Columns=[
  {field: "id", headerName: "ID", flex: 0.5, cellClassName:"id-column-cell"},
      {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell"},
      {field: "phone", headerName: "Phone Number", cellClassName:"id-column-cell"},
      {field: "email", headerName: "Email", cellClassName:"id-column-cell"},
      {field: "cost", headerName: "Cost", cellClassName:"name-column-cell"},
      {field: "date", headerName: "Date", cellClassName:"id-column-cell"}
  ];
  
  return (
    <Box>
    <Typography class="text-slate-100">
      INVOICES
    </Typography>
    <Box
height="65vh"
backgroundColor="rgb(18,47,73)"
border="solid 0.3px rgb(40,20,20)"
sx={{
"& .id-column-cell":{
border:"solid 0.3px rgb(40,20,20)",
backgroundColor:"rgb(18,47,73)",
color:"white",
padding:"1rem",
fontSize:"12px"

},
"& .name-column-cell":{
border:"solid 0.3px rgb(40,20,20)",
backgroundColor:"rgb(18,47,73)",
color:"rgb(1,220,190)",
fontSize:"12px"

},
"& .MuiDataGrid-columnHeaders": {
                    backgroundColor:"rgb(48,47,135)",
                    borderBottom: "none",
                    color:"white",
                    fontSize:"12px"
                    
  },
  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: "rgb(48,47,135)",
                    color:"white"
                },

    "& .PrivateSwitchBase-input": {
      backgroundColor:"rgb(1,220,190)",
      border:"solid 0.3px rgb(40,20,20)"
                },   
}}


    >
      <DataGrid
columns={Columns}
rows={mockDataInvoices}
initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection

      />
       </Box>

  
    </Box>
  )
}

export default Invoices
