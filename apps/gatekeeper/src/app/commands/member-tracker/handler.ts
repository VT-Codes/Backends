import { CommandInteraction, Permissions } from 'discord.js';
import { Command } from '../../models/command';

export default class implements Command {
  name = 'member';
  description = 'tracks members';

  run = async (interaction: CommandInteraction) => {
    const members = await interaction.guild.members.fetch();
    const channel = await interaction.guild.channels.create(
      'Members: ' + members.size,
      {
        type: 'GUILD_VOICE',
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone.id,
            deny: [Permissions.ALL],
            allow: [Permissions.FLAGS.VIEW_CHANNEL],
          },
        ],
      }
    );
  };
}
