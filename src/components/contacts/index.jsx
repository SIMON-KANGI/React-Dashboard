import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { ContactsTeam } from "../../data/mockData"
import { GridToolbar } from "@mui/x-data-grid"
import { colors } from "@mui/material"
function Contacts() {
  const columns = [
    {field: "id", headerName: "ID", flex: 0.5, cellClassName:"id-column-cell"},
    {field: "registerId", headerName: "Registrar ID", cellClassName:"id-column-cell"},
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell"},
    {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", cellClassName: "name-column-cell"},
    {field: "number", headerName: "Phone Number", cellClassName:"id-column-cell"},
    {field: "email", headerName: "Email", cellClassName:"id-column-cell"},
    {field: "city", headerName: "City", cellClassName:"id-column-cell"},
    {field: "zip", headerName: "ZipCode", cellClassName:"id-column-cell"}
]
  return (
    <div className="overflow-hidden h-4/5">
      <h1 className="text-slate-200 text-4xl ml-3">Contacts</h1>
      <h6 className="text-emerald-500 text-lg ml-3">List of contacts for future references</h6>
      <Box m="10px">
            <Box
            
            m="40px 0 0 0"
            height = "65vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                    fontSize:"12px"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                   
                },
                "& .name-column-cell": {
                    color:"rgb(22,163,74)",
                    fontSize:"12px"
                },
                "& .id-column-cell": {
                    color:"rgb(222,222,222)",
                    fontSize:"12px"
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor:"rgb(48,47,135)",
                    borderBottom: "none",
                    color:"white",
                    fontSize:"12px"
                    
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor:"rgb(18,47,73)",
                    
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: "rgb(48,47,135)",
                    color:"white"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`
                }
            }}
            >
                <DataGrid
                rows={ContactsTeam}
                columns={columns}
                components={{Toolbar: GridToolbar}}
                >

                </DataGrid>
            </Box>
        </Box>
    </div>
  )
}

export default Contacts
