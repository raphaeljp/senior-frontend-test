<template>
	<div class="office-card mt-6 shadow-lg w-full rounded-lg overflow-hidden">
		<div class="office-card-header cursor-pointer flex justify-between px-6 py-5 bg-white">
			<div class="header-text">
				<h2>{{ locationInfo.title }}</h2>
				<p>{{ locationInfo.address }}</p>
			</div>
			<svg class="w-6 text-accent-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} :d="showDetails ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'" />
			</svg>
		</div>

		<div :class="[ 'office-card-body px-6 py-5', { 'open': showDetails } ]">
			<h3>{{ locationInfo.fullName }}</h3>
			<p>{{ locationInfo.jobPosition }}</p>
			<a :href="`mailto:${locationInfo.email}`">{{ locationInfo.email }}</a>
			<p>{{ locationInfo.phone }}</p>

			<hr>

			<div class="office-card-body-btns flex justify-between">
				<button class="edit-button flex align-center">
					<svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
					</svg>
					EDIT
				</button>

				<button class="delete-button flex align-center">
					<svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
					</svg>
					DELETE
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'officeCard',
	props: [ 'locationInfo' ],
	data() {
		return {
			showDetails: false
		};
	},
	methods: {},
};
</script>
