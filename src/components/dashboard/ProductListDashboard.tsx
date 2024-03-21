import { Paper } from '@material-ui/core';

interface DashboardProps {
  classes: any;
  ProductListData: any;
}

export const ProductListDashboard: React.FC<DashboardProps> = ({
  classes,
  ProductListData,
}) => {
  return (
    <Paper className="dashboardGridBox">This is Product List Dashboard</Paper>
  );
};
