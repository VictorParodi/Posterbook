import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CustomRow from '../ui/row/CustomRow';

const columns = [
	{
		label: 'Post ID',
	},
	{
		label: 'Post title',
	},
	{
		label: 'View',
		align: 'right'
	},
	{
		label: 'Edit',
		align: 'right'
	},
	{
		label: 'Delete',
		align: 'right'
	}
];

const getRows = (row) => {
	return <CustomRow key={row.id} row={row} />
};

const getColumns = () => {
	return (
		<TableRow>
			{
				columns.map(({label, align}) => (
					<TableCell
						key={label}
						align={align}
					>
						{label}
					</TableCell>
				))
			}
		</TableRow>
	);
}

export { getColumns, getRows };