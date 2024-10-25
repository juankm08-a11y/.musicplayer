import React from 'react';
import { CssBaseline, Container, Box } from '@material-ui/core';

import Playlist from '../Playlist';
import Player from '../Player';
import { useStyles } from './styles';

const Root = () => {
  useStyles();

  return (
    <Box my={4}>
      <CssBaseline />

      <Container maxWidth="xs">
        <Playlist />
        <Player />
      </Container>
    </Box>
  );
};

export default Root;
