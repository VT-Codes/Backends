import { gql } from 'graphql-request';

export const getChannelId = (guildId: string) => {
  return gql`
    {
      user(guildId: "${guildId}") {
        enabled
        channelId
      }
    }
  `;
};
