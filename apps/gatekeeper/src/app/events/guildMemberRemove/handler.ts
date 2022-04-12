import { GuildMember } from 'discord.js';
import { Event } from '../../models/event';
import EventHandler from '../../commands/member-tracker/event-handler';

export default class extends Event {
  event = 'guildMemberRemove';

  run = async (member: GuildMember) => {
    EventHandler(member);
  };
}
