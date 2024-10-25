import React, { useEffect } from 'react';
import { Paper, List } from '@material-ui/core';

import player, { usePlayerState } from '../libs/player';
import { tracks } from './consts';
import Track from './Track';

const Playlist = () => {
  const state = usePlayerState();

  useEffect(() => {
    player.setQueue(tracks);
  }, []);

  return (
    <Paper>
      <List>
        {state.tracks.map((track, index) => (
          <Track index={index} key={track.url} />
        ))}
      </List>
    </Paper>
  );
};

export default Playlist;
