import { Paper } from '@material-ui/core';

interface DashboardProps {
  classes: any;
  ProductListIdxData: any;
}

export const ProductListIdxDashboard: React.FC<DashboardProps> = ({
  classes,
  ProductListIdxData,
}) => {
  return (
    <Paper className="dashboardGridBox">
      This is Product Idx List Dashboard
    </Paper>
  );
};
