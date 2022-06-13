import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';

const CustomRow = ({row}) => {
	const navigate = useNavigate();

	const handleView = () => {
		navigate(`/post/${row.id}`);
	}

	const styles = {
		icons: { cursor: 'pointer' }
	}

	return (
		<TableRow>
			<TableCell>{row.id}</TableCell>
			<TableCell>{row.title}</TableCell>

			<TableCell align="right">
				<VisibilityIcon
					style={styles.icons}
					key="view"
					color="primary"
					onClick={ handleView }
				/>
			</TableCell>

			<TableCell align="right">
				<EditIcon
					style={styles.icons}
					key="edit"
					color="success"
					onClick={() => console.log('Edit ', row.id)}
				/>
			</TableCell>

			<TableCell align="right">
				<DeleteIcon
					style={styles.icons}
					key="del"
					sx={{ color: red[500] }}
					onClick={() => console.log('Delete ', row.id)}
				/>
			</TableCell>
		</TableRow>
	);
}

export default CustomRow;