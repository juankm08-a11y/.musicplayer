import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      '& > video': {
        width: '100%',
      },
    },
  }),
  { name: 'Video' },
);
