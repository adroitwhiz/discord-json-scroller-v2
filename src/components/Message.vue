<template>
	<div class="message">
		<div class="message-data">
			<div class="username">{{this.getUsername()}}</div>
			<div class="timestamp">{{this.formatTimestamp(message.createdTimestamp)}}</div>
			<div class="index">{{message.id}}</div>
		</div>
		<div class="message-content">
			<div class="message-text" v-linkified>{{message.content}}</div>
			<div class="message-attachments" v-if="message.attachments">
				<img :src="attachment.url" class="attachment" v-for="attachment in message.attachments" v-bind:key="attachment.id" />
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'Message',
	props: ['message', 'server'],
	data: () => {
		return {}
	},
	methods: {
		getUsername: function() {
			const member = this.server.members.get(this.message.authorID);

			if (!member) return `<@${this.message.authorID}>`;
			if (member.nickname !== null) return member.nickname;
			return member.user.username;
		},

		formatTimestamp: timestamp => {
			return moment(parseInt(timestamp)).format('MMM D Y h:mm:ss A');
		}
	}
}
</script>
