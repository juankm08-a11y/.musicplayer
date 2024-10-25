import React, { useState } from 'react';
import { PlayArrow, Pause, OndemandVideo } from '@material-ui/icons';
import { IconButton, Typography, Box } from '@material-ui/core';

import player, { usePlayerState } from '../libs/player';
import Progress from './Progress';
import Video from './Video';

const Player = () => {
  const { currentTrack, playing } = usePlayerState();
  const [isShowVideo, setIsShowVideo] = useState(false);

  if (!currentTrack) {
    return null;
  }

  const handlePlay = () => {
    if (playing) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <Box mt={4}>
      <Progress />

      <Box display="flex" alignItems="center">
        <Box clone flexGrow={1} mr={2}>
          <Typography>{currentTrack.title}</Typography>
        </Box>

        {/.mp4$/.test(currentTrack.url) && (
          <IconButton
            color={isShowVideo ? 'primary' : 'default'}
            onClick={() => setIsShowVideo(!isShowVideo)}
          >
            <OndemandVideo />
          </IconButton>
        )}

        <IconButton color="primary" onClick={handlePlay}>
          {playing ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Box>

      {isShowVideo && (
        <Box mt={2}>
          <Video />
        </Box>
      )}
    </Box>
  );
};

export default Player;
