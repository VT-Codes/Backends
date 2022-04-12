import { CommandInteraction } from 'discord.js';
import { request } from '../../helpers';
import { Command } from '../../models/command';
import { enableAuth } from './query';

export default class implements Command {
  name = 'auth';
  description = 'Authenticate with the bot';
  roleOptions?: { name: string; description: string; required: boolean }[] = [
    {
      name: 'role',
      description: 'description',
      required: true,
    },
  ];

  run = (interaction: CommandInteraction) => {
    const { id: roleId } = interaction.options.getRole('role');

    request(enableAuth({ guildId: interaction.guildId, roleId }));
    interaction.reply("I've enabled authentication for this server.");
  };
}
