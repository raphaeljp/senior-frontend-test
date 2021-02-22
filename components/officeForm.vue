<template>
	<div id="office-form-box" :class="['bg-white rounded-lg py-4 px-6 shadow-lg', { 'mt-6': !isAddingLocation }]">
		<div class="flex justify-between mb-10">
			<span class="text-dark-blue text-base font-bold">
				{{ isAddingLocation ? 'New Location' : 'Edit Location' }}
			</span>
			<svg class="w-4 text-dark-gray cursor-pointer" xmlns="http://www.w3.org/2000/svg"
				 fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="closeForm()">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>

		<form id="office-form" @submit.prevent.stop="checkForm()">
			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="title">
					Title <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.title.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="text" name="title" id="title"
						   v-model.lazy="$v.form.title.$model"
						   @blur="$v.form.title.$touch()"
					/>

					<div v-if="$v.form.title.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.title.$error" class="text-accent-red text-xs font-normal mt-1">
					This field cannot be empty
				</small>
			</div>

			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="address">
					Enter the address <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.address.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="text" name="address" id="address"
						   v-model.lazy="$v.form.address.$model"
						   @blur="$v.form.address.$touch()"
					/>

					<div v-if="$v.form.address.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.address.$error" class="text-accent-red text-xs font-normal mt-1">
					This field cannot be empty
				</small>
			</div>

			<small class="text-accent-blue text-xs font-normal uppercase">
				contact information
			</small>

			<hr class="text-light-gray mt-4 mb-6">

			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="fullName">
					Full name <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.fullName.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="text" name="fullName" id="fullName"
						   v-model.lazy="$v.form.fullName.$model"
						   @blur="$v.form.fullName.$touch()"
					/>

					<div v-if="$v.form.fullName.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.fullName.$error" class="text-accent-red text-xs font-normal mt-1">
					This field cannot be empty
				</small>
			</div>

			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="jobPosition">
					Job Position <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.jobPosition.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="text" name="jobPosition" id="jobPosition"
						   v-model.lazy="$v.form.jobPosition.$model"
						   @blur="$v.form.jobPosition.$touch()"
					/>

					<div v-if="$v.form.jobPosition.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.jobPosition.$error" class="text-accent-red text-xs font-normal mt-1">
					This field cannot be empty
				</small>
			</div>

			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="email">
					Email address <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.email.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="email" name="email" id="email"
						   v-model.lazy="$v.form.email.$model"
						   @blur="$v.form.email.$touch()"
					/>

					<div v-if="$v.form.email.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.email.$error" class="text-accent-red text-xs font-normal mt-1">
					{{ !$v.form.email.email ? 'This field should contain an e-mail address' : 'This field cannot be empty' }}
				</small>
			</div>

			<div class="flex flex-col mb-6">
				<label class="mb-1 text-dark-blue text-base font-normal" for="phone">
					Phone <span class="text-dark-gray text-base font-normal ml-1">*</span>
				</label>

				<div :class="[
						'ipt-group flex flex-wrap py-2 px-3 items-stretch w-full relative bg-white items-center rounded-lg border border-dark-gray',
						{ 'border-accent-red': $v.form.phone.$error }
					]"
				>
					<input class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 relative self-center outline-none text-dark-blue appearance-none"
						   type="text" name="phone" id="phone" v-mask="'(###) ###-####'"
						   v-model.lazy="$v.form.phone.$model"
						   @blur="$v.form.phone.$touch()"
					/>

					<div v-if="$v.form.phone.$error" class="w-6 flex justify-center content-center">
						<svg class="text-accent-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
						</svg>
					</div>
				</div>

				<small v-if="$v.form.phone.$error" class="text-accent-red text-xs font-normal mt-1">
					This field cannot be empty
				</small>
			</div>

			<button :class="[
						'rounded py-2 px-4 text-white text-base font-normal',
						$v.form.$invalid ? 'bg-light-gray' : 'bg-accent-blue'
					]"
					:disabled="$v.form.$invalid">
				Save
			</button>
		</form>

	</div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
	name: 'officeForm',
	props: {
		locationInfo: {
			required: false,
			type: Object
		},
		isAddingLocation: {
			required: true,
			type: Boolean
		}
	},
	data() {
		return {
			form: {
				title: '',
				address: '',
				fullName: '',
				jobPosition: '',
				email: '',
				phone: ''
			}
		};
	},
	validations: {
		form: {
			title: {
				required
			},
			address: {
				required
			},
			fullName: {
				required
			},
			jobPosition: {
				required
			},
			email: {
				required,
				email
			},
			phone: {
				required
			},
		}
	},
	beforeMount() {
		if (!this.isAddingLocation) {
			this.form = {
				title: this.locationInfo.data.title,
				address: this.locationInfo.data.address,
				fullName: this.locationInfo.data.fullName,
				jobPosition: this.locationInfo.data.jobPosition,
				email: this.locationInfo.data.email,
				phone: this.locationInfo.data.phone
			}
		}
	},
	methods: {
		closeForm() {
			this.$emit('close');
		},
		checkForm() {
			return this.isAddingLocation
				? this.$emit('add', this.form)
				: this.$emit('edit', { id: this.locationInfo.id, data: this.form});
		}
	},
};
</script>

<style lang="css" scoped>
	.ipt-group:focus-within {
		border-color: #33A6BA;
	}
</style>
