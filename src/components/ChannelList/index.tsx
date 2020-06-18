import React from 'react';

import { ChannelButton } from '..';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="pid" />
      <ChannelButton channelName="ufc" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="pubg" />
      <ChannelButton channelName="minecraft" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
};

export default ChannelList;
