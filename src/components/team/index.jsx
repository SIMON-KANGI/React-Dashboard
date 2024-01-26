import React from "react";
import { Table, TableRow, TableBody, TableCell, TableHead, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { membersTeam } from "../../data/mockData";
import {Button} from "@mui/material";


function Team() {
  return (
    <div className="p-4"> 
    <Typography class="text-slate-200 text-4xl" variant="h3">
      Team
    </Typography>
    <h4  className="text-green-500 pb-3">Managing the Team Members</h4>
      <Box>
        <Table id="table" className="min-w-full bg-sky-950 border border-sky-900">
          <TableHead>
            <TableRow className="bg-blue-800">
              <TableCell class="p-2 text-slate-300 text-sm">ID</TableCell>
              <TableCell class="p-2 text-slate-300 text-sm">Name</TableCell>
              <TableCell class="p-2 text-slate-300 text-sm">Age</TableCell>
              <TableCell class="p-2 text-slate-300 text-sm">Number</TableCell>
              <TableCell class="p-2 text-slate-300 text-sm">Email</TableCell>
              <TableCell class="p-2 text-slate-300 text-sm">Access level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membersTeam.map((member) => (
              <TableRow key={member.id} className="hover:bg-gray-50">
                <TableCell class="p-2  bg-sky-950 text-sm text-slate-100">{member.id}</TableCell>
                <TableCell class="p-2 text-sm  bg-sky-950 text-green-600">{member.name}</TableCell>
                <TableCell class="p-2  bg-sky-950 text-sm text-green-600">{member.age}</TableCell>
                <TableCell class="p-2  bg-sky-950 text-sm text-zinc-100">{member.number}</TableCell>
                <TableCell class="p-2  bg-sky-950 text-sm text-zinc-200">{member.email}</TableCell>
                <TableCell class="p-2  bg-sky-950">
                <Button class="bg-emerald-700 w-full pl-15 pr-15 pt-1 pb-1 text-gray-200 text-sm">
                {React.createElement(member.icon)}
                {member.level}</Button>
                 </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}

export default Team;
