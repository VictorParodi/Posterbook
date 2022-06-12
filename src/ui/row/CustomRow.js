import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';

const CustomRow = ({row}) => {
	return (
		<TableRow>
			<TableCell>{row.id}</TableCell>
			<TableCell>{row.title}</TableCell>

			<TableCell align="right">
				<VisibilityIcon
					key="view"
					color="primary"
					onClick={() => console.log('View ', row.id)}
				/>
			</TableCell>

			<TableCell align="right">
				<EditIcon
					key="edit"
					color="success"
					onClick={() => console.log('Edit ', row.id)}
				/>
			</TableCell>

			<TableCell align="right">
				<DeleteIcon
					key="del"
					sx={{ color: red[500] }}
					onClick={() => console.log('Delete ', row.id)}
				/>
			</TableCell>
		</TableRow>
	);
}

export default CustomRow;