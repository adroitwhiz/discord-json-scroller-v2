import Vue from 'vue';
import * as linkifyElement from 'linkifyjs/element';

import deserializeArchive from './deserialization/deserialization';

import Message from './components/Message';

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
	const app = new Vue({
		el:'#app',
		data:{
			server: {channels: [], members: []},
			messages: [],
			foundMessages: [],
			activeChannelId: null,
			navigationData: {
				renderRangeMin: 1,
				renderRangeMax: 10,
				messageJumpId: '',
				messageJumpContextAmount: 1,
			},
			searchFilterData: {
				filterByText: false,
				filterByUser: false,
				filterByChannel: false,
				textFilter: '',
				userFilter: '',
				channelFilter: ''
			},
			findPanelVisible: false
		},
		methods: {
			setChannel (channelId) {
				this.activeChannelId = channelId;
			},
			displayMessages (messages) {
				this.messages = messages;
			},
			renderMessages () {
				const currentChannel = this.server.channels.get(this.activeChannelId);
				const messagesToRender = currentChannel.messages.slice(
					currentChannel.messages.length - (parseInt(this.navigationData.renderRangeMax) - 1),
					currentChannel.messages.length - (parseInt(this.navigationData.renderRangeMin) - 1)
				);

				this.displayMessages(messagesToRender);
			},
			jumpMessages () {
				const jumpID = this.navigationData.messageJumpId;

				let messageIndex;
				let messageChannel;
				for (const [id, channel] of this.server.channels) {
					messageIndex = channel.messages.findIndex(message => message.id === jumpID);
					if (messageIndex !== -1) {
						messageChannel = channel;
						break;
					}
				}
		
				if (messageIndex === -1) return;
		
				let messageJumpContext = this.navigationData.messageJumpContextAmount;
				let messagesToRender = messageChannel.messages.slice(Math.max(0, messageIndex-messageJumpContext), messageIndex+messageJumpContext+1);

				this.setChannel(messageChannel.id);
				this.displayMessages(messagesToRender);
			},
			searchMessages () {
				const MAX_MESSAGES = 10000;
				let allMessages = [];
				for (const [id, channel] of this.server.channels) {
					if (channel.type !== 'text' || (this.searchFilterData.filterByChannel && this.searchFilterData.channelFilter !== channel.id)) continue;
					let messages = channel.messages;

					if (this.searchFilterData.filterByText) {
						const matchText = this.searchFilterData.textFilter.toLowerCase();
						messages = messages.filter(message => message.content.toLowerCase().includes(matchText));
					}
	
					if (this.searchFilterData.filterByUser) {
						messages = messages.filter(message => message.author === userFilter || this.server.members[message.author].username === userFilter);
					}

					allMessages = allMessages.concat(messages);
				}

				if (allMessages.length > MAX_MESSAGES) {
					alert(`More than ${MAX_MESSAGES} messages found. Not displaying results.`);
					return;
				}

				this.foundMessages = allMessages.sort((a, b) => a.createdTimestamp - b.createdTimestamp);
			},
			loadJSONFromFile (event) {
				const jsonFile = event.target.files[0];
				if (jsonFile) {
					readJSONFromFile(jsonFile).then(this.loadServer);
				}
			},
			loadServer (serializedServer) {
				const deserialized = deserializeArchive(serializedServer);

				//console.log(deserialized);

				this.server = deserialized;
			}
		},

		components: {Message}
	});
});
