<template>
	<div class="min-h-screen flex justify-center">
		<transition name="fade">
			<simple-alert v-if="alertActive" />
		</transition>

		<div class="container-offices mt-40">
			<h1 class="tracking-wide font-light text-center text-accent-blue text-6xl">
				Offices
			</h1>

			<transition name="fade">
				<button class="w-full flex justify-between px-6 py-5 rounded-lg shadow-lg bg-accent-blue text-white mt-12 focus:outline-none"
						@click="openLocationForm(true)" v-show="!isAddingLocation">
					Add New Location
					<svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
					</svg>
				</button>
			</transition>

			<transition name="fade">
				<office-form
					v-if="formActive"
					:is-adding-location="isAddingLocation"
					:location-info="editingLocationData"
					@close="clearForm()"
					@add="addLocation($event)"
					@edit="editLocation($event)"
				/>
			</transition>

			<office-card
				v-for="(item, index) in locations"
				v-show="editingLocationData.id !== index"
				:key="index"
				:location-info="item"
				:card-id="index"
				@editCard="openEditLocationForm($event)"
				@deleteCard="deleteLocation($event)"
			/>

			<div class="mt-6 text-center">
				<p class="text-base text-dark-gray">
					This project is for test purpose only.
				</p>
				<a class="text-sm text-accent-blue uppercase mt-2" href="https://www.dogandponystudios.com" target="_blank">
					www.dogandponystudios.com
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import OfficeForm from '@/components/officeForm';
import officeCard from '@/components/officeCard';
import SimpleAlert from '@/components/simpleAlert';

export default {
	components: {
		SimpleAlert,
		OfficeForm,
		officeCard
	},
	data() {
		return {
			formActive: false,
			isAddingLocation: false,
			activeCard: null,
			editingLocationData: {},
			locations: [
				{
					title: 'Headquarters 1',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters 2',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters 3',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
				{
					title: 'Headquarters 4',
					address: '3763 W. Dallas St.',
					fullName: 'Hellena John',
					jobPosition: 'Software Tester',
					email: 'georgia.young@example.com',
					phone: '(808) 555-0111'
				},
			],
		};
	},
	computed: {
		alertActive() {
			return this.$store.state.alert.alertActive;
		}
	},
	methods: {
		openLocationForm(isNew) {
			this.formActive = true;
			this.isAddingLocation = isNew;
		},
		openEditLocationForm(id) {
			this.editingLocationData = {
				id,
				data: this.locations[id]
			};

			this.openLocationForm(false);

			setTimeout(() => {
				document.getElementById('office-form-box').scrollIntoView();
			}, 100)
		},
		addLocation(location) {
			this.locations.push(location);
			this.clearForm();
			this.$store.dispatch('alert/setActive');
		},
		editLocation(location) {
			this.locations[location.id] = location.data;
			this.clearForm();
			this.$store.dispatch('alert/setActive');
		},
		deleteLocation(id) {
			this.locations.splice(id, 1);
			this.$store.dispatch('alert/setActive');
		},
		clearForm() {
			this.formActive = false;
			this.isAddingLocation = false;
			this.editingLocationData = {};
		}
	},
};
</script>

<style lang="css" scoped>
	.container-offices {
		width: 318px;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity .3s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>
