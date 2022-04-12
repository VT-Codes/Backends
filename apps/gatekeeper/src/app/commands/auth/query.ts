import { gql } from 'graphql-request';

export const enableAuth = ({
  guildId,
  roleId,
}: {
  roleId: string;
  guildId: string;
}) => gql`
  mutation {
    updateAuth(
      guild: { guildId: "${guildId}", roleId: "${roleId}", enabled: true }
    ) {
      enabled
    }
  }
`;

export const removeAuth = ({
  guildId,
  roleId,
}: {
  roleId: string;
  guildId: string;
}) => gql`
  mutation {
    updateAuth(
      guild: { guildId: "${guildId}", roleId: "${roleId}", enabled: false }
    ) {
      enabled
    }
  }
`;
