import { GuildMember } from 'discord.js';
import { request } from '../../helpers';
import { getChannelId } from './query';

export default async function (member: GuildMember) {
  const { user } = await request(getChannelId(member.guild.id));
  if (!user.enabled) return;
  const channel = await member.guild.channels.fetch(user.channelId);
  channel.setName('Members: ' + member.guild.members.cache.size);
}
