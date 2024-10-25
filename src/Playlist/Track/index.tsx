import React, { FC } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { PlayArrow, Pause } from '@material-ui/icons';

import player, { usePlayerState } from '../../libs/player';

type Props = {
  index: number;
};

const Track: FC<Props> = ({ index }) => {
  const state = usePlayerState();
  const track = state.tracks[index];

  const handlePlay = () => {
    if (state.currentTrackIndex === index) {
      if (state.playing) {
        player.pause();
      } else {
        player.play();
      }
    } else {
      player.playTrack(index);
    }
  };

  return (
    <ListItem>
      <ListItemText primary={track.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" color="primary" onClick={() => handlePlay()}>
          {state.currentTrackIndex === index && state.playing ? (
            <Pause />
          ) : (
            <PlayArrow />
          )}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Track;
