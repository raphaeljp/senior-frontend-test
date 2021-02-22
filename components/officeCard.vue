<template>
	<div :class="['office-card mt-6 shadow-lg w-full rounded-lg overflow-hidden', { 'office-card-active': showDetails }]">
		<div :class="['office-card-header cursor-pointer flex justify-between px-6 py-5 transition duration-500 ease-in-out', showDetails ? 'bg-dark-gray' : 'bg-white']"
			 @click="openCard()"
		>
			<div class="header-text">
				<h2 :class="['text-2xl font-bold transition duration-500 ease-in-out', showDetails ? 'text-white' : 'text-dark-blue']">
					{{ locationInfo.title }}
				</h2>
				<p :class="['text-base font-normal transition duration-500 ease-in-out', showDetails ? 'text-white' : 'text-dark-gray']">
					{{ locationInfo.address }}
				</p>
			</div>
			<svg :class="['w-6 transition duration-500 ease-in-out transform', showDetails ? 'text-white rotate-180' : 'text-accent-blue']"
				 xmlns="http://www.w3.org/2000/svg"
				 fill="none"
				 viewBox="0 0 24 24"
				 stroke="currentColor" >
				<path strokeLinecap="round"
					  strokeLinejoin="round"
					  strokeWidth={2}
					  d="M19 9l-7 7-7-7" />
			</svg>
		</div>

		<div :class="['bg-white relative overflow-hidden transition-all h-0 duration-200 px-6']"
			 :ref="`detail-card-${cardId}`"
			 :style="showDetails ? 'height: ' + ($refs[`detail-card-${cardId}`].scrollHeight) + 'px' : ''"
		>
			<h3 class="text-xl text-dark-blue font-bold mb-2 mt-5">
				{{ locationInfo.fullName }}
			</h3>

			<p class="text-lg text-dark-blue font-normal mb-2">
				{{ locationInfo.jobPosition }}
			</p>

			<a class="text-lg text-accent-blue font-normal"
			   :href="`mailto:${locationInfo.email}`">
				{{ locationInfo.email }}
			</a>

			<p class="text-lg text-dark-blue font-normal mt-2">
				{{ locationInfo.phone }}
			</p>

			<hr class="text-light-gray my-4">

			<div class="mb-5 flex justify-between">
				<button class="flex items-center text-dark-gray focus:outline-none"
						@click="editCard()">
					<svg class="w-6"
						 xmlns="http://www.w3.org/2000/svg"
						 fill="none"
						 viewBox="0 0 24 24"
						 stroke="currentColor">
						<path strokeLinecap="round"
							  strokeLinejoin="round"
							  strokeWidth={3}
							  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
					</svg>
					<span class="text-xs font-normal ml-2">EDIT</span>
				</button>

				<button class="flex items-center text-accent-red focus:outline-none"
						@click.prevent.stop="deleteCard()">
					<svg class="w-6"
						 xmlns="http://www.w3.org/2000/svg"
						 fill="none"
						 viewBox="0 0 24 24"
						 stroke="currentColor">
						<path strokeLinecap="round"
							  strokeLinejoin="round"
							  strokeWidth={3}
							  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
					</svg>
					<span class="text-xs font-normal ml-2">DELETE</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'officeCard',
	props: ['locationInfo', 'cardId'],
	data() {
		return {
			showDetails: false
		};
	},
	methods: {
		openCard() {
			this.showDetails = !this.showDetails;
		},
		editCard() {
			this.showDetails = false;
			this.$emit('editCard', this.cardId)
		},
		deleteCard() {
			this.showDetails = !this.showDetails;
			this.$emit('deleteCard', this.cardId)
		}
	},
};
</script>
