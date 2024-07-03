import * as React from 'react';
import {
  Box,
  Card,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import {
  AddCircleOutline,
  Update,
  DeleteOutline,
} from '@mui/icons-material'
import { Paragraph } from 'app/components/Typography';
import AlertDialog from 'app/components/dialog/alertDialog';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const CompanyTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 200,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const CompaniesTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;
  const [createAlert, setCreateAlert] = React.useState(false);

  const handleChange = () => {
    setCreateAlert((prevState) => {
      return { createAlert: !prevState.createAlert };
    });
  }

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Companies</Title>
      </CardHeader>

      <Box overflow="auto">
        <CompanyTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={6}>
                Full Address
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {companiesList.map((company, index) => (
              <TableRow key={index} hover>
                <TableCell align="left" colSpan={4}  sx={{ px: 0 }}>
                  {company.name}
                </TableCell>

                <TableCell align="left" colSpan={6} sx={{ px: 0 }}>
                  {company.fulladress}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={3}>
                  <IconButton>
                    <AddCircleOutline color="primary" onClick={handleChange}/>
                  </IconButton>
                  <IconButton>
                    <Update color="secondary" onClick={handleChange}/>
                  </IconButton>
                  <IconButton>
                    <DeleteOutline color="surface" onClick={handleChange}/>
                  </IconButton>
                </TableCell>
                <AlertDialog alertOpen={createAlert} question='Would you like to add a company?' />
              </TableRow>
            ))}
          </TableBody>
        </CompanyTable>
      </Box>
    </Card>
  );
};

const companiesList = [
  {
    name: 'Electronics Solutions Ltd',
    fulladress: "Address	Country 312 Deliver Street, F 234	USA",
    available: 15
  }
];

export default CompaniesTable;
