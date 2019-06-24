const TimerSetupStyles = {
  button: {
    width: '100%',
    height: '100px',
    backgroundColor: '#FFFFFF',
    fontSize: '1.2em',
    padding: '0',
    cursor: 'pointer',
  },

  settings: {
    width: '75vw',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    fontSize: '1em',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  // Children Component Styles
  container: {
    paddingTop: '5%',
    paddingBottom: '5%',
  },

  icon: {
    fontSize: '1.7em',
  },

  buttonIcon: {
    cursor: 'pointer',
  },

  options: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-around',
  },

  dataItem: {
    width: '240px',
  }
};

export default TimerSetupStyles;
