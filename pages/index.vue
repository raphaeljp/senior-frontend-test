<template>
	<div class="min-h-screen flex justify-center">
		<div class="container-alert"></div>

		<div class="container-offices mt-40">
			<h1 class="tracking-wide font-light text-center text-accent-blue text-6xl">Offices</h1>

			<button class="w-full flex justify-between px-6 py-5 rounded-lg shadow-lg bg-accent-blue text-white mt-12">
				Add New Location
				<svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
				</svg>
			</button>

			<div class="office-form"></div>

			<div class="office-cards">
				<office-card
					v-for="(item, index) in locations"
					:location-info="item"
					:id="`item-${index}`"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import officeCard from '~/components/officeCard';

export default {
	components: {
		officeCard
	},
	data() {
		return {
			locations: [
				{
					title: 'Headquarters',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
			],
		};
	},
	computed: {},
	methods: {},
};
</script>

<style lang="css" scoped>
	.container-offices {
		width: 318px;
	}
</style>
