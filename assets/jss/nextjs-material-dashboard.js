const hexToRgb = (input) => {
  input = input + '';
  input = input.replace('#', '');
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ', ' + parseInt(second, 16) + ', ' + parseInt(last, 16);
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 210;
const drawerWidthSm = 74;
//const drawerWidthSm = 200;

const ShareIco = () => {
  return (
    <svg className="svgIcon" width="14.8" height="16.378" viewBox="0 0 14.8 16.378">
      {' '}
      <path
        id="Path_6894"
        data-name="Path 6894"
        d="M15.333,13.577a2.394,2.394,0,0,0-1.612.633L7.859,10.8a2.692,2.692,0,0,0,.074-.576,2.692,2.692,0,0,0-.074-.576l5.8-3.379a2.461,2.461,0,1,0-.789-1.8,2.692,2.692,0,0,0,.074.576l-5.8,3.379a2.467,2.467,0,1,0,0,3.6L13,15.443a2.32,2.32,0,0,0-.066.534,2.4,2.4,0,1,0,2.4-2.4Z"
        transform="translate(-3 -2)"
      />{' '}
    </svg>
  );
};

const ThreeDIco = () => {
  return (
    <svg className="svgIcon" width="20.979" height="17.788" viewBox="0 0 20.979 17.788">
      {' '}
      <g id="Group_5058" data-name="Group 5058" transform="translate(-869.119 -49.65)">
        {' '}
        <path
          id="Path_2"
          data-name="Path 2"
          d="M292.327,233.886v1.353c1.324.661,2.093,1.48,2.093,2.293,0,1.862-3.746,3.324-7.451,3.632a.614.614,0,0,0,.1,1.225c3.226-.266,8.579-1.657,8.579-4.857C295.649,235.784,293.939,234.581,292.327,233.886Z"
          transform="translate(594.449 -176.248)"
        />{' '}
        <path
          id="Path_3"
          data-name="Path 3"
          d="M6.794,239.077a.615.615,0,0,0-1.039.3l-.272,1.243c-4.068-1.095-6.021-3.45-2.155-5.381v-1.352c-5.072,2.188-4.276,6.3,1.893,7.936l-.244,1.118a.615.615,0,0,0,.828.7l3.072-1.229a.615.615,0,0,0,.21-1Z"
          transform="translate(869.119 -176.248)"
        />{' '}
        <path
          id="Path_4"
          data-name="Path 4"
          d="M131.821,39.019a.614.614,0,0,0-.61,0L126.23,41.9l5.32,3.072,5.322-3.087Z"
          transform="translate(748.062 10.712)"
        />{' '}
        <path
          id="Path_5"
          data-name="Path 5"
          d="M111.235,142.847a.614.614,0,0,0,.307.532l5.014,2.895v-6.106l-5.321-3.072v5.751Z"
          transform="translate(762.442 -83.424)"
        />{' '}
        <path
          id="Path_6"
          data-name="Path 6"
          d="M276.4,142.491v-5.766l-5.321,3.086v6.107l5.014-2.895A.614.614,0,0,0,276.4,142.491Z"
          transform="translate(609.143 -83.068)"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const ARIco = () => {
  return (
    <svg className="svgIcon" width="17.297" height="17.297" viewBox="0 0 17.297 17.297">
      {' '}
      <path id="Path_151" data-name="Path 151" d="M1.014,1.014H3.8V0H0V3.791H1.014Z" />{' '}
      <path
        id="Path_152"
        data-name="Path 152"
        d="M1.014,399.479H0v3.8H3.791v-1.014H1.014Z"
        transform="translate(0 -385.983)"
      />{' '}
      <path
        id="Path_153"
        data-name="Path 153"
        d="M399.479,0V1.014h2.788V3.791h1.014V0Z"
        transform="translate(-385.983)"
      />{' '}
      <path
        id="Path_154"
        data-name="Path 154"
        d="M402.561,402.267h-2.778v1.014h3.791v-3.8h-1.014Z"
        transform="translate(-386.277 -385.983)"
      />{' '}
      <path
        id="Path_155"
        data-name="Path 155"
        d="M104.967,56.7l-5.281,3.033,5.281,3.033,5.281-3.033Z"
        transform="translate(-96.318 -54.786)"
      />{' '}
      <path
        id="Path_156"
        data-name="Path 156"
        d="M276.28,172.48,271,175.513v6.231l5.28-3.033Z"
        transform="translate(-261.845 -166.653)"
      />{' '}
      <path
        id="Path_157"
        data-name="Path 157"
        d="M84.714,178.711l5.28,3.033v-6.231l-5.28-3.033Z"
        transform="translate(-81.852 -166.653)"
      />{' '}
    </svg>
  );
};

const VisualizerIco = () => {
  return (
    <svg className="svgIcon" width="17.297" height="17.297" viewBox="0 0 17.297 17.297">
      {' '}
      <g id="Group_5379" data-name="Group 5379" transform="translate(-1383 -503)">
        {' '}
        <path
          id="Path_151"
          data-name="Path 151"
          d="M1.014,1.014H3.8V0H0V3.791H1.014Z"
          transform="translate(1383 503)"
        />{' '}
        <path
          id="Path_152"
          data-name="Path 152"
          d="M1.014,399.479H0v3.8H3.791v-1.014H1.014Z"
          transform="translate(1383 117.017)"
        />{' '}
        <path
          id="Path_153"
          data-name="Path 153"
          d="M399.479,0V1.014h2.788V3.791h1.014V0Z"
          transform="translate(997.017 503)"
        />{' '}
        <path
          id="Path_154"
          data-name="Path 154"
          d="M402.561,402.267h-2.778v1.014h3.791v-3.8h-1.014Z"
          transform="translate(996.723 117.017)"
        />{' '}
        <g id="Group_5287" data-name="Group 5287" transform="translate(2374 1989)">
          {' '}
          <path id="Polygon_2" data-name="Polygon 2" d="M3.5,0,7,5H0Z" transform="translate(-983 -1481)" />{' '}
          <path id="Polygon_3" data-name="Polygon 3" d="M3,0,6,4H0Z" transform="translate(-988 -1480)" />{' '}
        </g>{' '}
      </g>{' '}
    </svg>
  );
};

const DesignIdeaIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <path
        id="Path_7"
        data-name="Path 7"
        d="M12,3.457a.75.75,0,0,1-.75-.75V.75a.75.75,0,0,1,1.5,0V2.707A.75.75,0,0,1,12,3.457Z"
      />{' '}
      <path
        id="Path_8"
        data-name="Path 8"
        d="M18.571,6.179a.751.751,0,0,1-.53-1.281l1.384-1.384a.75.75,0,0,1,1.061,1.061L19.1,5.959A.752.752,0,0,1,18.571,6.179Z"
      />{' '}
      <path id="Path_9" data-name="Path 9" d="M23.25,12.75H21.293a.75.75,0,1,1,0-1.5H23.25a.75.75,0,0,1,0,1.5Z" />{' '}
      <path
        id="Path_10"
        data-name="Path 10"
        d="M19.955,20.7a.744.744,0,0,1-.53-.22L18.041,19.1A.75.75,0,0,1,19.1,18.04l1.384,1.384a.75.75,0,0,1-.531,1.281Z"
      />{' '}
      <path
        id="Path_11"
        data-name="Path 11"
        d="M4.045,20.7a.751.751,0,0,1-.53-1.281L4.9,18.04A.75.75,0,0,1,5.96,19.1L4.576,20.485A.748.748,0,0,1,4.045,20.7Z"
      />{' '}
      <path id="Path_12" data-name="Path 12" d="M2.707,12.75H.75a.75.75,0,0,1,0-1.5H2.707a.75.75,0,0,1,0,1.5Z" />{' '}
      <path
        id="Path_13"
        data-name="Path 13"
        d="M5.429,6.179a.744.744,0,0,1-.53-.22L3.515,4.575A.75.75,0,0,1,4.576,3.514L5.96,4.9a.75.75,0,0,1-.531,1.281Z"
      />{' '}
      <path
        id="Path_14"
        data-name="Path 14"
        d="M15,21v1.25A1.758,1.758,0,0,1,13.25,24h-2.5A1.823,1.823,0,0,1,9,21.96V21Z"
      />{' '}
      <path
        id="Path_15"
        data-name="Path 15"
        d="M16.41,6.56A7,7,0,1,0,7.79,17.59,3.02,3.02,0,0,1,8.93,19.5v.01A.17.17,0,0,1,9,19.5h6a.09.09,0,0,1,.05.01V19.5a3.336,3.336,0,0,1,1.28-2,7,7,0,0,0,.08-10.94Zm-.66,5.94a.755.755,0,0,1-.75-.75A2.748,2.748,0,0,0,12.25,9a.75.75,0,0,1,0-1.5,4.259,4.259,0,0,1,4.25,4.25A.755.755,0,0,1,15.75,12.5Z"
      />{' '}
      <path id="Path_16" data-name="Path 16" d="M8.93,19.5H9a.17.17,0,0,0-.07.01Z" />{' '}
      <path id="Path_17" data-name="Path 17" d="M15.05,19.5v.01A.09.09,0,0,0,15,19.5Z" />{' '}
    </svg>
  );
};

const WidgetIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <path id="Path_6916" data-name="Path 6916" d="M0,0H24V24H0Z" fill="none" />{' '}
      <path
        id="Path_6917"
        data-name="Path 6917"
        d="M16.66,4.52l2.83,2.83-2.83,2.83L13.83,7.35l2.83-2.83M9,5V9H5V5H9M19,15v4H15V15h4M9,15v4H5V15H9M16.66,1.69,11,7.34,16.66,13l5.66-5.66L16.66,1.69ZM11,3H3v8h8ZM21,13H13v8h8ZM11,13H3v8h8Z"
      />{' '}
    </svg>
  );
};

const UploadIco = () => {
  return (
    <svg
      className="svgIcon"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
      </g>
    </svg>
  );
};

const DownloadIco = () => {
  return (
    <svg className="svgIcon" width="12.185" height="20.954" viewBox="0 0 12.185 20.954">
      {' '}
      <path
        id="Path_1428"
        data-name="Path 1428"
        d="M11.567,7.432l3.572,3.645H1v2.031H15.139l-3.582,3.645,1.417,1.432,5.987-6.093L12.974,6ZM19.958,6V18.185h2V6Z"
        transform="translate(18.185 -1) rotate(90)"
      />{' '}
    </svg>
  );
};

const DashboardIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <rect id="Rectangle_712" data-name="Rectangle 712" width="24" height="24" fill="none" />{' '}
      <path
        id="Path_6844"
        data-name="Path 6844"
        d="M19,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM5,19V5h6V19Zm14,0H13V12h6Zm0-9H13V5h6Z"
      />{' '}
    </svg>
  );
};

const AppointmentsIco = () => {
  return (
    <svg className="svgIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"></path>
    </svg>
  );
};

const PartnersIco = () => {
  return (
    <svg className="svgIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path>
    </svg>
  );
};

const CustomerIco = () => {
  return (
    <svg className="svgIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path>
    </svg>
  );
};

const CatalogIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <g id="Group_5911" data-name="Group 5911" transform="translate(-4977 -464)">
        {' '}
        <path
          id="Path_6848"
          data-name="Path 6848"
          d="M11.3,14.287H7V12.83h4.3Zm1.843-2.915H7V9.915h6.143Zm0-2.915H7V7h6.143Z"
          transform="translate(4980 467)"
        />{' '}
        <path id="Path_6947" data-name="Path 6947" d="M0,0H24V24H0Z" transform="translate(4977 464)" fill="none" />{' '}
        <path
          id="Path_6948"
          data-name="Path 6948"
          d="M16,1H4A2.006,2.006,0,0,0,2,3V17H4V3H16Zm3,4H8A2.006,2.006,0,0,0,6,7V21a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V7A2.006,2.006,0,0,0,19,5Zm0,16H8V7H19Z"
          transform="translate(4977 464)"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const FormIco = () => {
  return (
    <svg className="svgIcon" width="12.185" height="20.954" viewBox="0 0 12.185 20.954">
      {' '}
      <path
        id="Path_1428"
        data-name="Path 1428"
        d="M11.567,7.432l3.572,3.645H1v2.031H15.139l-3.582,3.645,1.417,1.432,5.987-6.093L12.974,6ZM19.958,6V18.185h2V6Z"
        transform="translate(18.185 -1) rotate(90)"
      />{' '}
    </svg>
  );
};

const LeadIco = ({colors = ''}) => {
  return (
    <svg fill={colors} className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <g id="Group_4222" data-name="Group 4222" transform="translate(83 -508)">
        {' '}
        <path
          id="Path_6833"
          data-name="Path 6833"
          d="M9,12A3.5,3.5,0,1,0,5.5,8.5,3.5,3.5,0,0,0,9,12ZM9,7A1.5,1.5,0,1,1,7.5,8.5,1.5,1.5,0,0,1,9,7Z"
          transform="translate(-80 505)"
        />{' '}
        <path id="Path_6862" data-name="Path 6862" d="M0,0H24V24H0Z" transform="translate(-83 508)" fill="none" />{' '}
        <path
          id="Path_6863"
          data-name="Path 6863"
          d="M15.23,12.47l-.91.79.27,1.18.56,2.41-2.12-1.28L12,14.93l-1.03.62L8.85,16.83l.56-2.41.27-1.18-.91-.79M2,10.24l5.46,3.73L5.82,21,12,17.27,18.18,21l-1.64-7.03L22,10.24Z"
          transform="translate(-83 508)"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const ReportIco = () => {
  return (
    <svg className="svgIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
    </svg>
  );
};

const NotificationIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <path id="Path_6834" data-name="Path 6834" d="M0,0H24V24H0Z" fill="none" />{' '}
      <path
        id="Path_6835"
        data-name="Path 6835"
        d="M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z"
      />{' '}
    </svg>
  );
};

const AppMgmtIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <path id="Path_6935" data-name="Path 6935" d="M0,0H24V24H0Z" fill="none" />{' '}
      <path
        id="Path_6936"
        data-name="Path 6936"
        d="M17,1.01,7,1A2.006,2.006,0,0,0,5,3V21a2.006,2.006,0,0,0,2,2H17a2.006,2.006,0,0,0,2-2V3A2,2,0,0,0,17,1.01ZM17,19H7V5H17Z"
      />{' '}
    </svg>
  );
};

const UtilitiesIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <g id="Group_5912" data-name="Group 5912">
        {' '}
        <rect id="Rectangle_2311" data-name="Rectangle 2311" width="24" height="24" fill="none" />{' '}
      </g>{' '}
      <g id="Group_5913" data-name="Group 5913">
        {' '}
        <path
          id="Path_6951"
          data-name="Path 6951"
          d="M4,7H20V9H4Zm0,6H20V11H4Zm0,4h7V15H4Zm0,4h7V19H4Zm11.41-2.83L14,16.75l-1.41,1.41L15.41,21,20,16.42,18.58,15ZM4,3V5H20V3Z"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const ProfileImageIco = () => {
  return (
    <svg className="svgIcon" width="42.75" height="48" viewBox="0 0 42.75 48">
      {' '}
      <g id="Group_4216" data-name="Group 4216" transform="translate(-312.39 -339)">
        {' '}
        <path
          id="Path_6884"
          data-name="Path 6884"
          d="M1927.875,1181.655c.063-.253,1.895-8.905,1.895-8.905h1.705l2.274,8.526-2.653,2.526Z"
          transform="translate(-1597.05 -800.529)"
          fill="none"
        />{' '}
        <g id="noun_salesman_1594925" transform="translate(312.39 339)">
          {' '}
          <path
            id="Path_6881"
            data-name="Path 6881"
            d="M49.54,36.006c-.5-7.867-10.843-9.52-10.843-9.52a5.481,5.481,0,0,1-4.143-4.207A20.394,20.394,0,0,0,38.789,14.2a12.766,12.766,0,0,0,.46-3.363,10.691,10.691,0,0,0-.174-1.885A7.754,7.754,0,0,0,39.693,3.1a.8.8,0,0,0-.824-.537,1.158,1.158,0,0,0-.118.006,4.306,4.306,0,0,1-.445.021c-2.36,0-6.262-1.567-6.262-1.567A11.7,11.7,0,0,0,27.7.007V0h-.428V0a9.26,9.26,0,0,0-7.1,3.629c-2.379.8-2.781,3.86-2.64,6.543-.014.22-.025.441-.025.665a18.834,18.834,0,0,0,4.383,11.706c.078.089.159.175.24.26a5.268,5.268,0,0,1-3.971,3.679S7.813,28.139,7.309,36.006a39.309,39.309,0,0,0-.1,9.015A3.457,3.457,0,0,0,10.583,48H46.266a3.381,3.381,0,0,0,3.313-2.986A55.246,55.246,0,0,0,49.54,36.006ZM34.676,26.075l.549.607.132.145.165.107.482.312L32.3,32.54l-1.584-2.568a.556.556,0,0,1-.03-.57ZM29.315,32.25H27.508l-.543-.959.215-.353a1.857,1.857,0,0,0,.318-.562h1.754a1.857,1.857,0,0,0,.318.563l.244.4Zm1.307,9.5a.458.458,0,0,1-.129.352L28.7,43.47a.286.286,0,0,1-.254,0l-1.793-1.364a.517.517,0,0,1-.149-.4l1.649-7.96h.479Zm-1.016-13.4a1.839,1.839,0,0,0-.318.522H27.463a1.84,1.84,0,0,0-.318-.522L22.86,24.778a8.69,8.69,0,0,0,.46-.917,8.367,8.367,0,0,0,4.908,1.64,7.411,7.411,0,0,0,4.753-1.7c.131-.108.259-.222.387-.335a8.957,8.957,0,0,0,.59,1.258Zm-8.964-23.3a1.525,1.525,0,0,0,.756-.568A7.694,7.694,0,0,1,27.451,1.5V1.486h0V1.5a10.161,10.161,0,0,1,4,.9l.034.014a23.205,23.205,0,0,0,6.821,1.675h.073c.372,2,.156,5.016-3.792,6.6A12.579,12.579,0,0,1,30.5,11.4a7.6,7.6,0,0,1-5.466-2.023,1.618,1.618,0,0,0-1.116-.434c-.443,0-1,.1-2.9,1.3l-.024.015a6.438,6.438,0,0,0-1.8,1.664C18.8,9.141,18.836,5.661,20.642,5.056Zm-1.058,9.858a5.475,5.475,0,0,1,.394-1.342,4.5,4.5,0,0,1,1.816-2.043,8.821,8.821,0,0,1,2.12-1.086.125.125,0,0,1,.087.026A9.133,9.133,0,0,0,30.5,12.9a13.918,13.918,0,0,0,4.642-.816,9.05,9.05,0,0,0,2.6-1.539c0,.1.012.2.012.3a11.232,11.232,0,0,1-.407,2.967,17.566,17.566,0,0,1-5.315,8.832,5.916,5.916,0,0,1-3.8,1.36,6.978,6.978,0,0,1-5.217-2.442A17.126,17.126,0,0,1,19.583,14.914Zm1.644,12.021.165-.107.132-.145.549-.607L26.061,29.4a.556.556,0,0,1-.03.57L24.447,32.54l-3.7-5.294ZM48.085,44.877A1.9,1.9,0,0,1,46.266,46.5H10.583A1.962,1.962,0,0,1,8.7,44.862a38.2,38.2,0,0,1,.092-8.632l.01-.064,0-.065c.421-6.563,9.493-8.12,9.583-8.134l.014,0,.014,0a6.738,6.738,0,0,0,.85-.214l4.217,6.03a1.076,1.076,0,0,0,.941.721,1.174,1.174,0,0,0,.877-.478l.77-1.265.553.977L25.037,41.4a1.972,1.972,0,0,0,.707,1.9l1.793,1.365a1.761,1.761,0,0,0,2.071,0L31.4,43.3a1.933,1.933,0,0,0,.674-1.916l-1.9-7.633H30.2l.511-.933.734,1.206a1.174,1.174,0,0,0,.877.478,1.076,1.076,0,0,0,.941-.721L37.5,27.724a6.641,6.641,0,0,0,.932.239l.014,0,.014,0c.092.015,9.159,1.54,9.583,8.134v.024l0,.024A54,54,0,0,1,48.085,44.877Z"
            transform="translate(-7)"
          />{' '}
        </g>{' '}
        <rect
          id="Rectangle_2014"
          data-name="Rectangle 2014"
          width="3"
          height="2"
          transform="translate(332.141 369)"
          fill="none"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const NotificationImageIco = () => {
  return (
    <svg className="svgIcon" width="27.259" height="33.5" viewBox="0 0 27.259 33.5">
      {' '}
      <path
        id="noun_Alert_89398"
        d="M45.612,39.381h0c-2.751-4.944-2.794-12.08-2.794-12.166v-.086A10.046,10.046,0,0,0,37.057,18.1V15.822A2.605,2.605,0,0,0,34.435,13.2H31.468a2.605,2.605,0,0,0-2.622,2.622v2.106a10.093,10.093,0,0,0-6.19,9.329c0,.086-.043,7.222-2.794,12.166a1.888,1.888,0,0,0-.086,1.72,1.853,1.853,0,0,0,1.548.731h7.738V42a3.7,3.7,0,1,0,7.394,0v-.129h7.738a1.776,1.776,0,0,0,1.5-.731A1.978,1.978,0,0,0,45.612,39.381ZM29.362,15.822a2.11,2.11,0,0,1,2.106-2.106h2.966a2.11,2.11,0,0,1,2.106,2.106v2.063A10.537,10.537,0,0,0,33.7,17.2h-.043a6.965,6.965,0,0,0-.946-.043,4.673,4.673,0,0,0-.774.043h-.086c-.258.043-.516.043-.817.086h0a10.126,10.126,0,0,0-1.634.43V15.822ZM35.9,41.96a3.181,3.181,0,1,1-6.362,0v-.129h6.319A.158.158,0,0,1,35.9,41.96Zm9.329-1.118c-.215.344-.774.43-1.075.473H21.323a1.38,1.38,0,0,1-1.118-.473,1.444,1.444,0,0,1,.086-1.247c2.794-4.987,2.88-12.295,2.88-12.381a9.587,9.587,0,0,1,6.019-8.9h0a9.507,9.507,0,0,1,7.437.172h0a9.61,9.61,0,0,1,5.632,8.727V27.3c0,.774.215,7.566,2.837,12.295h0C45.354,40.154,45.4,40.584,45.225,40.842Zm-14.917-18.7a.225.225,0,0,1-.086.344,6.872,6.872,0,0,0-2.708,5.589,31.472,31.472,0,0,1-.559,6.233.272.272,0,0,1-.258.215h-.043a.323.323,0,0,1-.215-.3A30.44,30.44,0,0,0,27,28.074a7.451,7.451,0,0,1,2.966-6.062A.306.306,0,0,1,30.308,22.142Zm-4.3,14.917a.326.326,0,0,1,.086.172.223.223,0,0,1-.086.172.326.326,0,0,1-.172.086.223.223,0,0,1-.172-.086.215.215,0,0,1,0-.344A.262.262,0,0,1,26.009,37.059Z"
        transform="translate(-19.11 -12.7)"
        stroke="#000"
        strokeWidth="1"
      />{' '}
    </svg>
  );
};

const PromotionsImageIco = () => {
  return (
    <svg className="svgIcon" width="38.179" height="40.87" viewBox="0 0 38.179 40.87">
      {' '}
      <g id="Group_5242" data-name="Group 5242" transform="translate(-980.298 -175.798) rotate(-30)">
        {' '}
        <path
          id="Path_6878"
          data-name="Path 6878"
          d="M1.924,0A1.948,1.948,0,0,0,0,1.924,1.948,1.948,0,0,0,1.924,3.849,1.948,1.948,0,0,0,3.849,1.924,1.948,1.948,0,0,0,1.924,0Zm0,2.749A.846.846,0,0,1,1.1,1.924.846.846,0,0,1,1.924,1.1a.846.846,0,0,1,.825.825A.846.846,0,0,1,1.924,2.749Z"
          transform="translate(767.492 671.524) rotate(-22)"
        />{' '}
        <path
          id="Path_6879"
          data-name="Path 6879"
          d="M7.532.935,2.144,6.323l-.77.77-.44.44a.531.531,0,0,1-.77,0,.531.531,0,0,1,0-.77h0l.44-.44.77-.77L6.762.165a.531.531,0,0,1,.77,0A.531.531,0,0,1,7.532.935Z"
          transform="translate(761.823 669.102) rotate(-22)"
        />{' '}
        <path
          id="Path_6880"
          data-name="Path 6880"
          d="M1.924,0A1.948,1.948,0,0,0,0,1.924,1.948,1.948,0,0,0,1.924,3.849,1.948,1.948,0,0,0,3.849,1.924,1.948,1.948,0,0,0,1.924,0Zm0,2.749A.846.846,0,0,1,1.1,1.924.846.846,0,0,1,1.924,1.1a.846.846,0,0,1,.825.825A.846.846,0,0,1,1.924,2.749Z"
          transform="translate(761.158 668.831) rotate(-22)"
        />{' '}
        <path
          id="Path_6925"
          data-name="Path 6925"
          d="M16.328.777a11.721,11.721,0,0,1,7.429,11.014V29.17a2.373,2.373,0,0,1-2.376,2.37H2.376A2.373,2.373,0,0,1,0,29.17V11.791A11.934,11.934,0,0,1,7.827.648"
          transform="translate(755.5 653.652)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="1.5"
        />{' '}
        <rect
          id="Rectangle_2183"
          data-name="Rectangle 2183"
          width="3.719"
          height="9.917"
          rx="1.859"
          transform="translate(765.394 648.598)"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const ReportsImageIco = () => {
  return (
    <svg className="svgIcon" width="25.12" height="34" viewBox="0 0 25.12 34">
      {' '}
      <g id="Group_5241" data-name="Group 5241" transform="translate(0.5 0.5)">
        {' '}
        <path
          id="noun_Document_89366"
          d="M45.12,19.152h0a.215.215,0,0,0-.083-.165h0L35.951,9.941h0a.152.152,0,0,0-.124-.041H22.693A1.675,1.675,0,0,0,21,11.593V41.207A1.675,1.675,0,0,0,22.693,42.9H43.427a1.7,1.7,0,0,0,1.693-1.693V19.152Zm-.867-.248H36.034V10.726Zm.372,22.262a1.2,1.2,0,0,1-1.2,1.2H22.693a1.2,1.2,0,0,1-1.2-1.2V11.552a1.2,1.2,0,0,1,1.2-1.2H35.538v8.8a.266.266,0,0,0,.248.248h8.839Zm-4.543-7.93a.266.266,0,0,1-.248.248H26.121a.248.248,0,1,1,0-.5H39.834C39.957,32.946,40.081,33.07,40.081,33.235Zm0,4.543a.266.266,0,0,1-.248.248H26.121a.248.248,0,0,1,0-.5H39.834A.266.266,0,0,1,40.081,37.779Zm0-9.045a.266.266,0,0,1-.248.248H26.121a.248.248,0,1,1,0-.5H39.834C39.957,28.444,40.081,28.568,40.081,28.734ZM25.874,15.187a.266.266,0,0,1,.248-.248h4.75a.248.248,0,1,1,0,.5h-4.75C26,15.476,25.874,15.352,25.874,15.187Z"
          transform="translate(-21 -9.9)"
          stroke="#000"
          strokeWidth="1"
        />{' '}
        <path
          id="Path_6923"
          data-name="Path 6923"
          d="M778.978,651.508l3.574-2.822,1.5,2.069,4.138-3.386"
          transform="translate(-774.18 -635.797)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />{' '}
        <path
          id="Path_6924"
          data-name="Path 6924"
          d="M701.063,722.9l1.712.329-.263,1.712"
          transform="translate(-688.645 -711.652)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="1.5"
        />{' '}
        <line
          id="Line_424"
          data-name="Line 424"
          x2="4.813"
          transform="translate(5.156 8.224)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="1.5"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const StoreIco = () => {
  return (
    <svg className="svgIcon" width="16" height="16" viewBox="0 0 16 16">
      {' '}
      <g id="Group_6132" data-name="Group 6132" transform="translate(12248 9675)">
        {' '}
        <g id="add_business_black_24dp" transform="translate(-12248 -9675)">
          {' '}
          <g id="Group_6129" data-name="Group 6129">
            {' '}
            <rect id="Rectangle_2394" data-name="Rectangle 2394" width="16" height="16" fill="none" />{' '}
          </g>{' '}
          <g id="Group_6131" data-name="Group 6131" transform="translate(0.666 2.662)">
            {' '}
            <g id="Group_6130" data-name="Group 6130">
              {' '}
              <rect
                id="Rectangle_2395"
                data-name="Rectangle 2395"
                width="10"
                height="1"
                transform="translate(0.334 0.338)"
              />{' '}
              <path
                id="Path_6960"
                data-name="Path 6960"
                d="M10.318,13.656h1.331v-2h.666V10.328L11.649,7H1.666L1,10.328v1.331h.666v3.993h5.99V11.659h2.662Zm-3.993.666H3V11.659H6.325ZM2.358,10.328l.4-2h7.8l.4,2Z"
                transform="translate(-1 -5.003)"
              />{' '}
              <path
                id="Path_6961"
                data-name="Path 6961"
                d="M20.325,17h-2V15H17v2H15v1.331h2v2h1.331v-2h2Z"
                transform="translate(-5.682 -7.679)"
              />{' '}
            </g>{' '}
          </g>{' '}
        </g>{' '}
      </g>{' '}
    </svg>
  );
};

const AddBusinessIco = () => {
  return (
    <svg
      className="svgIcon"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <rect height="2" width="15" x="2" y="4" />
          <path d="M15,17h2v-3h1v-2l-1-5H2l-1,5v2h1v6h9v-6h4V17z M9,18H4v-4h5V18z M3.04,12l0.6-3h11.72l0.6,3H3.04z" />
          <polygon points="23,18 20,18 20,15 18,15 18,18 15,18 15,20 18,20 18,23 20,23 20,20 23,20" />
        </g>
      </g>
    </svg>
  );
};

const UserApprovedIco = () => {
  return (
    <svg
      className="svgIcon"
      id="how_to_reg_black_24dp_1_"
      data-name="how_to_reg_black_24dp (1)"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {' '}
      <path id="Path_6992" data-name="Path 6992" d="M0,0H24V24H0Z" fill="none" />{' '}
      <path
        id="Path_6993"
        data-name="Path 6993"
        d="M11,12A4,4,0,1,0,7,8,4,4,0,0,0,11,12Zm0-6A2,2,0,1,1,9,8,2.006,2.006,0,0,1,11,6ZM5,18c.2-.63,2.57-1.68,4.96-1.94l2.04-2A9.341,9.341,0,0,0,11,14c-2.67,0-8,1.34-8,4v2h9l-2-2Zm15.6-5.5-5.13,5.17L13.4,15.59,12,17l3.47,3.5L22,13.91Z"
      />{' '}
    </svg>
  );
};

const DBIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      {' '}
      <g id="Group_6594" data-name="Group 6594" transform="translate(-1140 -518)">
        {' '}
        <g id="noun_database_307888" transform="translate(1144 506.523)">
          {' '}
          <g id="Group_6593" data-name="Group 6593" transform="translate(0 15.477)">
            {' '}
            <path
              id="Path_6985"
              data-name="Path 6985"
              d="M8,15.477c-3.878,0-8,.928-8,2.649v9.733c0,1.721,4.122,2.65,8,2.65A21.3,21.3,0,0,0,12.9,29.98,3.973,3.973,0,0,0,16,26.089V18.126C16,16.406,11.878,15.477,8,15.477ZM.569,22.421l.278.184c1.321.874,4.062,1.416,7.153,1.416l.582,0-.133.263a3.954,3.954,0,0,0-.433,1.81c0,.139.007.275.021.41l.02.2h-.2a18.986,18.986,0,0,1-5.23-.679c-1.269-.39-2.058-.926-2.058-1.4V22.421Zm9.344,7.445c-.62.049-1.264.074-1.913.074a19.135,19.135,0,0,1-5.372-.68c-1.269-.39-2.058-.926-2.058-1.4V25.666l.278.183c1.321.873,4.062,1.416,7.153,1.416h.128l.1.121a4,4,0,0,0,1.758,2.148l.491.288Zm4.516-1.357a3.421,3.421,0,1,1,1-2.42A3.4,3.4,0,0,1,14.428,28.509Zm1-4.536-.318-.394a3.991,3.991,0,0,0-6.034-.2l-.05.054-.074,0c-.314.012-.633.019-.955.019a19.131,19.131,0,0,1-5.372-.68c-1.269-.389-2.058-.925-2.058-1.4V19.178l.278.183c1.321.873,4.062,1.415,7.153,1.415s5.833-.542,7.154-1.415l.278-.183v4.8h0Zm-.489-5.157a5.51,5.51,0,0,1-1.569.711A19.146,19.146,0,0,1,8,20.207a19.136,19.136,0,0,1-5.372-.68c-1.27-.389-2.058-.926-2.058-1.4a.962.962,0,0,1,.489-.69,5.57,5.57,0,0,1,1.57-.71A19.129,19.129,0,0,1,8,16.046a19.138,19.138,0,0,1,5.373.679c1.27.39,2.059.926,2.059,1.4A.958.958,0,0,1,14.942,18.816Z"
              transform="translate(0 -15.477)"
              stroke="#000"
              strokeWidth="0.4"
            />{' '}
            <path
              id="Path_6986"
              data-name="Path 6986"
              d="M346.06,314.71a.282.282,0,0,0-.083-.2.291.291,0,0,0-.4,0l-.787.787-.786-.787a.291.291,0,0,0-.4,0,.283.283,0,0,0,0,.4l.786.787-.786.787a.282.282,0,0,0,0,.4.29.29,0,0,0,.4,0l.786-.787.787.786a.29.29,0,0,0,.4,0,.284.284,0,0,0,0-.4l-.787-.788.787-.787A.281.281,0,0,0,346.06,314.71Z"
              transform="translate(-332.78 -305.086)"
              stroke="#000"
              strokeWidth="0.4"
            />{' '}
          </g>{' '}
        </g>{' '}
        <rect
          id="Rectangle_2535"
          data-name="Rectangle 2535"
          width="24"
          height="24"
          transform="translate(1140 518)"
          fill="none"
        />{' '}
      </g>{' '}
    </svg>
  );
};

const FacebookIco = () => {
  return (
    <svg className="svgIcon" width="24" height="24" viewBox="0 0 24 24">
      <path
        className="cls-1"
        d="M53.68,38.26v15.1H37.11V72H53.68v42H73.29V72H90l2-18.63H73.29V38.26c0-2.67,2.11-4,3-4.82,1.57-1.34,9.15-1.55,9.15-1.55h7.43V15a93.26,93.26,0,0,0-11.68-1C53.11,14,53.68,38.26,53.68,38.26Z"
      />
    </svg>
  );
};

const UserListIco = () => {
  return (
    <svg className="svgIcon" height="24" width="24">
      <path d="M0 18v-1.575q0-1.1 1.113-1.763Q2.225 14 4 14q.325 0 .625.012.3.013.575.063-.35.5-.525 1.075-.175.575-.175 1.225V18Zm6 0v-1.625q0-1.625 1.663-2.625 1.662-1 4.337-1 2.7 0 4.35 1 1.65 1 1.65 2.625V18Zm13.5 0v-1.625q0-.65-.163-1.225-.162-.575-.487-1.075.275-.05.563-.063Q19.7 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V18ZM12 14.75q-1.425 0-2.55.375-1.125.375-1.325.875H15.9q-.225-.5-1.338-.875Q13.45 14.75 12 14.75ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11q0-.85.588-1.425Q3.175 9 4 9q.85 0 1.425.575Q6 10.15 6 11q0 .825-.575 1.412Q4.85 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11q0-.85.587-1.425Q19.175 9 20 9q.85 0 1.425.575Q22 10.15 22 11q0 .825-.575 1.412Q20.85 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138Q10.75 6 12 6q1.275 0 2.137.862Q15 7.725 15 9q0 1.25-.863 2.125Q13.275 12 12 12Zm0-4q-.425 0-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10t.713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8Zm0 8Zm0-7Z" />
    </svg>
  );
};

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const cardInRight = {
  //background: 'green',

  '& .details': {
    left: 'auto',
    right: '100%',
    padding: '0 15px 0 0',

    '& .inner': {
      '&:after, &:before': {
        left: 'auto',
        right: '-15px',
        transform: 'scaleX(-1)',
      },
      '&:after': {
        right: '-12px',
      },
    },
  },
};

const cardInBottom = {
  '& .details': {
    top: 'auto',
    bottom: '0',

    '& .inner': {
      '&:after, &:before': {
        top: 'auto',
        bottom: 'calc(50% - 60px)',
      },
    },
  },
};

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const primaryColor = ['#E95D08', '#C44D06', '#C44D06', '#C44D06'];
//const primaryColor = ["#FF7A5A", "#f24d25", "#C44D06", "#C44D06"];
const warningColor = ['#ff9800', '#ffa726', '#fb8c00', '#ffa21a'];
const dangerColor = ['#f44336', '#ef5350', '#e53935', '#f55a4e'];
const successColor = ['#4caf50', '#66bb6a', '#43a047', '#5cb860'];
const infoColor = ['#00acc1', '#26c6da', '#00acc1', '#00d3ee'];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573'];
const grayColor = [
  '#999',
  '#707070',
  '#CCCCCC',
  '#F5F5F5',
  '#D2D2D2',
  '#DDD',
  '#b4b4b4',
  '#555555',
  '#333',
  '#a9afbb',
  '#eee',
  '#e7e7e7',
  '#212121',
  '#263238',
];
const blueColor = ['#3984be', '#165788'];
const primaryBtn = '#e95d08';
const blackColor = '#000';
const whiteColor = '#FFF';
const tableHeadBg = '#707070';
const oceanColor = '#4FB3B5';

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(' +
    hexToRgb(blackColor) +
    ', 0.42), 0 4px 25px 0px rgba(' +
    hexToRgb(blackColor) +
    ', 0.12), 0 8px 10px -5px rgba(' +
    hexToRgb(blackColor) +
    ', 0.2)',
};

const primaryBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(primaryColor[0]) + ',.4)',
};
const infoBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(infoColor[0]) + ',.4)',
};
const successBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(successColor[0]) + ',.4)',
};
const warningBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(warningColor[0]) + ',.4)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(dangerColor[0]) + ',.4)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(roseColor[0]) + ',.4)',
};

const darkBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' + hexToRgb(blackColor) + ',.14), 0 7px 10px -5px rgba(' + hexToRgb(grayColor[12]) + ',.4)',
};

const warningCardHeader = {
  background: 'linear-gradient(60deg, ' + warningColor[1] + ', ' + warningColor[2] + ')',
  ...warningBoxShadow,
};
const successCardHeader = {
  background: 'linear-gradient(60deg, ' + successColor[1] + ', ' + successColor[2] + ')',
  ...successBoxShadow,
};
const dangerCardHeader = {
  background: 'linear-gradient(60deg, ' + dangerColor[1] + ', ' + dangerColor[2] + ')',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background: 'linear-gradient(60deg, ' + infoColor[1] + ', ' + infoColor[2] + ')',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background: 'linear-gradient(60deg, ' + primaryColor[1] + ', ' + primaryColor[2] + ')',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background: 'linear-gradient(60deg, ' + roseColor[1] + ', ' + roseColor[2] + ')',
  ...roseBoxShadow,
};
const darkCardHeader = {
  background: 'linear-gradient(60deg, ' + grayColor[13] + ', ' + grayColor[12] + ')',
  ...darkBoxShadow,
};

const cardActions = {
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid ' + grayColor[10],
  height: 'auto',
  ...defaultFont,
};

const cardHeader = {
  margin: '-20px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(' + hexToRgb(blackColor) + ', 0.14)',
  borderRadius: '3px',
  color: 'rgba(' + hexToRgb(blackColor) + ', 0.87)',
  background: whiteColor,
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(' +
    hexToRgb(blackColor) +
    ', 0.42), 0 3px 20px 0px rgba(' +
    hexToRgb(blackColor) +
    ', 0.12), 0 8px 10px -5px rgba(' +
    hexToRgb(blackColor) +
    ', 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const title = {
  color: grayColor[2],
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    color: grayColor[1],
    fontWeight: '400',
    lineHeight: '1',
  },
};

const cardTitle = {
  ...title,
  marginTop: '0',
  marginBottom: '3px',
  minHeight: 'auto',
  '& a': {
    ...title,
    marginTop: '.625rem',
    marginBottom: '0.75rem',
    minHeight: 'auto',
  },
};

const cardSubtitle = {
  marginTop: '-.375rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

export {
  hexToRgb,
  //variables
  drawerWidth,
  drawerWidthSm,
  transition,
  container,
  boxShadow,
  card,
  cardInRight,
  cardInBottom,
  defaultFont,
  primaryBtn,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  blueColor,
  tableHeadBg,
  oceanColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  darkBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  darkCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
  ShareIco,
  ThreeDIco,
  ARIco,
  VisualizerIco,
  DesignIdeaIco,
  WidgetIco,
  UploadIco,
  DownloadIco,
  DashboardIco,
  AppointmentsIco,
  PartnersIco,
  CustomerIco,
  CatalogIco,
  FormIco,
  LeadIco,
  ReportIco,
  NotificationIco,
  AppMgmtIco,
  UtilitiesIco,
  ProfileImageIco,
  NotificationImageIco,
  PromotionsImageIco,
  ReportsImageIco,
  StoreIco,
  AddBusinessIco,
  UserApprovedIco,
  DBIco,
  FacebookIco,
  UserListIco,
};
