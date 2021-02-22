<template>
	<div class="bg-white border-t-2 border-accent-blue flex items-center justify-center fixed top-0 left-0 w-full h-20 z-10">
		<svg class="w-6 mr-4 text-accent-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
		</svg>

		<span class="uppercase font-normal text-xs text-dark-blue">The location has been updated.</span>

		<div class="absolute w-3 align right-0 mr-4 cursor-pointer" @click="close()">
			<svg class="text-dark-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'simpleAlert',
	data() {
		return {
		};
	},
	methods: {
		close() {
			this.$store.commit('alert/deactivate');
		}
	}
};
</script>
