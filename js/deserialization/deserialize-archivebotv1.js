import * as Prims from './primitives.js';

const deserializeArchiveBotV1 = json => {
	const server = new Prims.Server();

	server.id = json.id;
	server.name = json.name;
	server.iconURL = json.iconURL;

	// Parse roles
	const serverRoles = server.roles;
	for (const role of json.roles) {
		const parsedRole = new Prims.Role();

		parsedRole.id = role.id;
		parsedRole.name = role.name;
		parsedRole.color = role.color;
		parsedRole.permissions = role.permissions;
		parsedRole.position = role.position;

		serverRoles.set(parsedRole.id, parsedRole);
	}

	// Parse members
	const serverMembers = server.members;
	for (const member of json.members) {
		const parsedMember = new Prims.Member();

		parsedMember.id = member.id;
		parsedMember.nickname = member.nickname; // explicitly null in serialized format if unset
		
		for (const role of member.roles) {
			parsedMember.roles.push(serverRoles.get(role.id));
		}

		// perhaps store users somewhere else?
		const parsedUser = new Prims.User();

		parsedUser.id = member.user.id;
		parsedUser.avatarURL = member.user.avatarURL;
		parsedUser.username = member.user.username;
		parsedUser.tag = member.user.tag;

		parsedMember.user = parsedUser;

		serverMembers.set(parsedMember.id, parsedMember);
	}

	// Parse emojis
	const serverEmojis = server.emojis;
	for (const emoji of json.emojis) {
		const parsedEmoji = new Prims.Emoji();
		
		parsedEmoji.id = emoji.id;
		parsedEmoji.name = emoji.name;
		parsedEmoji.url = emoji.url; // explicitly null in serialized format if unset

		serverEmojis.set(parsedEmoji.id, parsedEmoji);
	}

	// Parse channels
	const serverChannels = server.channels;
	for (const channel of json.channels) {
		const parsedChannel = new Prims.Channel();

		parsedChannel.id = channel.id;
		parsedChannel.name = channel.name || channel.id; // Earlier versions of ArchiveBot do not save channel names
		parsedChannel.nsfw = channel.nsfw === true; // sometimes is null, so explicitly cast to boolean
		parsedChannel.topic = channel.topic;
		parsedChannel.position = channel.position;
		parsedChannel.type = channel.type;

		if (channel.type === 'text') {
			const channelMessages = parsedChannel.messages;
			// possible tight loop?
			for (let i = 0; i < channel.messages.length; i++) {
				let message = channel.messages[i];
	
				const parsedMessage = new Prims.Message();
	
				parsedMessage.id = message.id;
				parsedMessage.author = server.members.get(message.author);
				parsedMessage.content = message.content;
				parsedMessage.createdTimestamp = message.createdTimestamp;
				parsedMessage.editedTimestamp = message.editedTimestamp; // explicitly null in serialized format if unset
				parsedMessage.type = message.type || 'DEFAULT'; // may be unnecessary to set 'DEFAULT'
	
				if (message.attachments.length > 0) {
					for (const attachment of message.attachments) {
						const parsedAttachment = new Prims.Attachment();
	
						parsedAttachment.id = attachment.id;
						parsedAttachment.name = attachment.name;
						parsedAttachment.size = attachment.size;
						parsedAttachment.url = attachment.url;
	
						parsedMessage.attachments.push(parsedAttachment);
					}
				}
	
				channelMessages.push(parsedMessage);
			}
		}

		serverChannels.set(parsedChannel.id, parsedChannel);
	}
	
	return server;
};

export default deserializeArchiveBotV1;