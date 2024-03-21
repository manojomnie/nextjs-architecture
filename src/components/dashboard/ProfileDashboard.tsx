import { Paper } from '@material-ui/core';

interface DashboardProps {
  classes: any;
  UserData: any;
}

export const ProfileDashboard: React.FC<DashboardProps> = ({
  classes,
  UserData,
}) => {
  return <Paper>This is Profile Dashboard</Paper>;
};
