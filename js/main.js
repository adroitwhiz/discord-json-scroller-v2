const elemIds = {
	'renderButton':'render-btn',
	'messageRenderRangeMin':'msg-range-min',
	'messageRenderRangeMax':'msg-range-max',
	'messageJumpNumber':'msg-num',
	'messageJumpContext':'msg-context',
	'jumpButton':'jump-btn',
	'findFilterTextCheckbox':'find-filter-by-text',
	'findFilterText':'find-filter-text',
	'findFilterUsernameCheckbox':'find-filter-by-username',
	'findFilterUsername':'find-filter-username',
	'findButton':'find-btn',
	'JSONFilePicker':'json-file-picker'
};

let server = null;
let activeChannel = null;

const readJSONFromFile = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.addEventListener('load', event => {
			resolve(JSON.parse(event.target.result));
		});

		reader.readAsText(file);
	});
}

// Convert URLs into clickable links via Linkify.
const vueLinkify = (element, binding) => {
	element = linkifyElement(element, binding.value);
}
Vue.directive('linkified', vueLinkify);

document.addEventListener('DOMContentLoaded', event => {
	const channelList = new Vue({
		el: '#channel-list',
		data: {
			channels: [],
			activeChannelId: null
		},
		methods: {
			setChannel: channelId => {
				setActiveChannel(channelId)
			}
		}
	});

	Vue.component('message', {
		props: ['message'],
		data: () => {
			return {}
		},
		template: '#message-template'
	});

	const messageList = new Vue({
		el: '#messages',
		data: {
			messages: []
		}
	})

	window.channelList = channelList;
	window.messageList = messageList;

	// Bind elements to IDs
	const elems = {};
	for (let i in elemIds) {
		if (elemIds.hasOwnProperty(i)) {
			let elem = document.getElementById(elemIds[i]);
			if (elem === null) throw new Error(`Could not find element with ID ${elemIds[i]}`);
			elems[i] = elem;
		}
	}
	
	elems.JSONFilePicker.addEventListener('change', event => {
		const jsonFile = event.target.files[0];
		if (jsonFile) {
			readJSONFromFile(jsonFile).then(reinit);
		}
	});
	
	elems.renderButton.addEventListener('click', event => {
		let messagesToRender = activeChannel.messages.slice(parseInt(elems.messageRenderRangeMin.value), parseInt(elems.messageRenderRangeMax.value));

		renderMessages(messagesToRender);
	});
	
	elems.jumpButton.addEventListener('click', event => {
		let jumpID = elems.messageJumpNumber.value;

		let messageToJumpTo = activeChannel.messages.findIndex(message => message.id === jumpID);
		let messageJumpContext = parseInt(elems.messageJumpContext.value);

		let messagesToRender = activeChannel.messages.slice(Math.max(0, messageToJumpTo-messageJumpContext), messageToJumpTo+messageJumpContext+1);

		renderMessages(messagesToRender);
	});
});

function reinit(serializedServer) {
	console.log(serializedServer);
	const channels = {};
	for (const channel of serializedServer.channels) {
		// Messages are read-only. Freezing them stops Vue from trying to "observe" every single message in every single channel.
		Object.freeze(channel.messages);
		channels[channel.id] = channel;
	}

	const members = {};
	for (const member of serializedServer.members) {
		members[member.user.id] = member.user;
	}

	server = {
		channels: channels,
		members: members
	};

	channelList.channels = server.channels;
}

function setActiveChannel(channelId) {
	activeChannel = server.channels[channelId];
	channelList.activeChannelId = channelId;
}

function renderMessages(messages) {
	messageList.messages = messages.reverse().map(message => {
		return {
			text:message.content,
			attachments:message.attachments,
			username:server.members.hasOwnProperty(message.author) ? server.members[message.author].username : `<@${message.author}>`,
			timestamp:moment(parseInt(message.createdTimestamp)).format('MMM D Y h:mm:ss A'),
			isEdited:message.editedTimestamp !== null,
			index:message.id
		}
	});
}
