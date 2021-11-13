const rroles2 = {
  name: "rroles2",
  description: "Some Command",
  async execute(interaction: any, _functions: any) {
    function end(member: any, action: string, actionn: string, role: string) {
      interaction.reply({
        content: `You have been successfully ${actionn} the <@&${role}> role.`,
        ephemeral: true,
      });
      if (action == "add") {
        return member.roles.add(role).catch(console.error);
      } else if (action == "remove") {
        return member.roles.remove(role).catch(console.error);
      }
    }

    interaction.values.forEach(async (int: any) => {
      let action = "add";

      const member = await interaction.message.guild.members.cache.find(
        (member: any) => member.id === interaction.member.user.id
      );

      if (member.roles.cache.has(int)) action = "remove";

      if (action === "add") {
        return end(await member, action, "added to", int);
      } else if (action === "remove") {
        return end(await member, action, "removed from", int);
      }

    });
  },
};

export = rroles2;
