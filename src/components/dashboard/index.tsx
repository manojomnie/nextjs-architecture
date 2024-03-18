
import {makeStyles} from '@material-ui/core/styles/';
import {Box, Grid} from '@material-ui/core';
import {blackColor, grayColor, transition, whiteColor, oceanColor} from '@assets/jss/nextjs-material-dashboard';
import { ProfileDashboard } from '@components/dashboard/ProfileDashboard';
import { ProductListDashboard } from '@components/dashboard/ProductListDashboard';
import { ProductListIdxDashboard } from '@components/dashboard/ProductListIdxDashboard';
import { theme } from '@styles/theme';


const useStyle = makeStyles((theme) => ({
    dashboardContainer: {
      padding: '4px 2px',
      // background: (props: any) => themes?.primaryColor,
    },
    dashboardCard: {
      background: 'transparent',
    },
    card: {
      padding: theme.spacing(2.5),
      borderRadius: '8px',
      background: grayColor[3],
      color: '#000',
      height: '100%',
      width: '100%',
      border: `1px solid ${grayColor[3]}`,
      ...transition,
      position: 'relative',
      '& img': {
        maxWidth: '100%',
      },
      /*"&:hover": {
        borderColor: grayColor[2],
        background: whiteColor,
        "& .title": {
          color: primaryColor[0],
        },
      },*/
      '& [data-center="true"]': {
        justifyContent: 'center',
  
        '& .MuiBreadcrumbs-ol': {
          justifyContent: 'center',
        },
      },
    },
    cardTitle: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '0px',
      '& .title': {
        color: blackColor,
        ...transition,
      },
    },
    titleBox: {
      paddingBottom: '32px',
      '&.noGap': {
        paddingBottom: '0px',
      },
      '& .links': {
        fontSize: '12px !important',
      },
    },
    iconBox: {
      marginRight: '4px',
      '& .icon, & .svgIcon': {
        fill: (themes: any) => themes?.dashboardIcons,
        '& path, & line': {
          stroke: (themes: any) => themes?.dashboardIcons,
        },
      },
      '&.colView': {
        display: 'flex',
        flexDirection: 'column',
        '& button + button': {
          marginTop: '8px',
        },
      },
    },
    cardButton: {
      fontSize: '12px',
      textTransform: 'none',
      color: (themes: any) => themes?.secondaryBtn,
      border: (themes: any) => `1px solid ${themes?.secondaryBtn}`,
      padding: '2px 12px !important',
      margin: '4px 8px',
      ...transition,
      '& svg': {
        width: '16px',
        height: '16px',
        marginRight: '0px',
        color: (themes: any) => themes?.secondaryBtn,
        ...transition,
      },
      '& .svgIcon': {
        fill: (themes: any) => themes?.secondaryBtn,
        '& path, & line, & rect': {
          stroke: 'transparent !important',
        },
      },
      '&:hover': {
        background: (themes: any) => themes?.secondaryBtn,
        border: (themes: any) => `1px solid ${themes?.secondaryBtn}`,
        color: '#fff',
        '& svg': {
          color: '#fff',
        },
        '& .svgIcon': {
          fill: '#fff',
        },
      },
    },
    cardValue: {
      '&.hasColRight': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
      '&.manageAll': {
        '& .listItem': {
          padding: '4px',
  
          '& .listLabel': {
            fontSize: '12px',
            marginBottom: '4px',
          },
          '& .listValue': {
            fontSize: '24px',
          },
        },
      },
    },
    cardValueList: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 0,
  
      '& .listItem': {
        flexDirection: 'column',
        width: 'auto',
        alignItems: 'flex-start',
        padding: 0,
        '& span': {
          display: 'block',
          lineHeight: '1',
        },
        '& .listLabel': {
          color: grayColor[7],
          fontSize: '18px',
          fontWeight: 400,
        },
        '&.new': {
          minWidth: 35,
          textAlign: 'center',
  
          '& .listLabel': {
            color: (themes: any) => themes?.primaryColor,
            fontWeight: 600,
            width: '100%',
            cursor: 'pointer',
  
            '& a': {
              color: 'inherit',
              textDecoration: 'none',
            },
          },
  
          '& .listValue': {
            width: 35,
            height: 35,
            lineHeight: '33px',
            fontSize: '20px !important',
            border: (themes: any) => `1px dashed ${themes?.primaryColor}`,
            color: (themes: any) => themes?.primaryColor,
            borderRadius: '50%',
            textAlign: 'center',
            cursor: 'pointer',
            '& a': {
              color: 'inherit',
              textDecoration: 'none',
            },
          },
        },
      },
      '&:not(.constantList)': {
        '& .listItem + .listItem': {
          padding: '4px',
          marginLeft: '15px',
  
          '@media screen and (max-width: 1300px)': {
            marginLeft: '10px',
          },
  
          '& .listLabel': {
            fontSize: '12px',
            marginBottom: '4px',
          },
          '& .listValue': {
            fontSize: '24px',
          },
        },
      },
      '& .listItem + .listItem': {
        marginLeft: '15px',
  
        '@media screen and (max-width: 1300px)': {
          marginLeft: '10px',
        },
      },
    },
    dashboardGridCard: {
      background: '#F5F5F5',
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '8px',
      '& .gridCard': {
        padding: '0',
        borderRadius: '0px',
        background: 'rgba(209,209,209,0.5)',
        color: '#000',
        height: '100%',
        width: '100%',
        border: 'none',
        transition: 'all 0.3s ease-in-out',
        minHeight: '150px',
      },
      '& .dashboardGridBox': {
        '&>.gridItem': {
          '&:first-child': {
            '& button': {
              margin: 0,
            },
            '& .gridCard': {
              background: '#F5F5F5',
              padding: '12px',
            },
          },
        },
        '&.col4GridBox': {
          '&>.gridItem': {
            '& .gridCard': {
              backgroundColor: 'transparent',
            },
            '&:nth-child(1)': {
              '& .MuiCardMedia-root': {
                borderTopLeftRadius: '8px',
              },
            },
            '&:nth-child(2)': {
              '& .MuiCardMedia-root': {
                borderTopRightRadius: '8px',
              },
              '& .gridCard': {
                height: 'calc(100% + 24px)',
              },
            },
            '&:nth-child(3)': {
              '& .MuiCardMedia-root': {
                borderBottomLeftRadius: '8px',
              },
              '& .gridCard': {
                marginTop: '-48px',
                height: 'calc(100% + 48px)',
              },
            },
            '&:nth-child(4)': {
              '& .MuiCardMedia-root': {
                borderBottomRightRadius: '8px',
              },
              '& .gridCard': {
                marginTop: '24px',
                height: 'calc(100% - 24px)',
              },
            },
          },
        },
      },
    },
    barChart: {
      '& figure': {
        margin: 0,
        '&.hasBtn': {
          position: 'relative',
          '& button': {
            display: 'block',
            marginLeft: 'auto',
            marginTop: 'auto',
          },
        },
      },
    },
    mediaBox: {
      height: '100%',
      backgroundColor: whiteColor,
      '&.product': {
        backgroundSize: 'contain',
      },
    },
    agentCountBox: {
      border: `1px solid ${grayColor[1]}`,
      borderRadius: 30,
      padding: 7,
      fontWeight: 400,
      lineHeight: '16px',
  
      '& .divider': {
        borderLeft: '1px solid rgba(255,255,255,0.7)',
      },
  
      '& > div': {
        '& strong': {
          fontSize: 20,
          margin: '0 5px',
        },
        '&:first-child': {
          padding: '0 7px',
  
          '& strong': {
            fontSize: 34,
          },
        },
        '& + div': {
          background: oceanColor,
          color: '#fff',
          padding: '10px 23px',
          borderRadius: 30,
        },
      },
    },
  }));
  
interface DashboardProps {
    settingData: any;
}
  
export const Dashboard: React.FC<DashboardProps> = ({settingData}) => {
  const themes = theme;
  const classes = useStyle(themes);

    return (
          // <Box className={classes.dashboardContainer}>
            <Grid container spacing={3} className={classes.dashboardCard}>
              <Grid item xs={4}>
                    <ProfileDashboard classes={classes} UserData="" />
              </Grid>
              <Grid item xs={4}>
                    <ProductListDashboard classes={classes} ProductListData="" />                  
              </Grid>
              <Grid item xs={4}>
                    <ProductListIdxDashboard classes={classes} ProductListIdxData="" />                  
              </Grid>
            </Grid>
          // </Box>
      );
};