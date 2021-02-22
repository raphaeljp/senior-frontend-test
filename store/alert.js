export const state = () => ({
	alertActive: false
})

export const mutations = {
	activate(state) {
		state.alertActive = true;
	},
	deactivate(state) {
		state.alertActive = false;
	}
}

export const actions = {
	setActive({ commit }) {
		commit('activate');
		setTimeout(() => commit('deactivate'), 4000);
	}
}
