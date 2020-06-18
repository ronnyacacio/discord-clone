import React from 'react';

import { ServerList, ServerName, ChannelInfo, ChannelList, UserInfo, UserList, ChannelData } from '../../components';

import { Grid } from './styles';

const Home: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Home;
