import axios from 'axios'
import { Message } from 'element-ui';
import { notificationMessage } from  '../store'


export const RatingModule = {
  namespaced: true,
  state() {
    return {
      ratings: [],
    }
  },
  getters: {
    ratingData: (state) => state.ratings,
    ratingLength: (state) => state.ratings.length,
    ratings: (state) => state.ratings,
    content(state, getters, rootState) {
 
    },
    ratingSliced: (state,page) => (page) => { 
      const slice = 30;
      let max = 0;
      if(state.ratings.length > page * 30)
        max = page * 30;
      else 
        max = state.ratings.length
      const min = page - 1;
      return state.ratings.slice(min * 30, max);
    }
  },
  mutations: {
    setRatings(state, ratings) {
      // ratings.forEach(rating => {
      //   rating = _processEditableFields(rating)
      // });
      state.ratings = ratings;
    },
    addNewRating(state, newRating) {
      let shiftValue = state.shifts.find(d => parseFloat(d.name) === newRating.dateShift.shiftId);
      newRating.shift = shiftValue.plantName;
      newRating = _processEditableFields(newRating);
      let lastRating = _getLastItem(state.ratings);
      newRating.initialTonnes = lastRating.finalTonnes.original;
      newRating.tonnes = _calcTonnes(newRating);
      console.log(newRating);
      newRating.dryTonnes = _calcDryTonnes(newRating);
      state.ratings.push(newRating);
    },
    updateRating(state, updatedRating) {
      updatedRating.finalTonnes.original = parseFloat(updatedRating.finalTonnes.edited);
      updatedRating.tonnes = updatedRating.finalTonnes.original - updatedRating.initialTonnes;
      updatedRating.moisture.original = parseFloat(updatedRating.moisture.edited);
      updatedRating.maintenanceDowntime.original = parseFloat(updatedRating.maintenanceDowntime.edited);
      updatedRating.operationalDowntime.original = parseFloat(updatedRating.operationalDowntime.edited);
      updatedRating.dryTonnes = _calcDryTonnes(updatedRating);
      let updatedIndex = state.ratings.findIndex(load => load.id === updatedRating.id);
      let nextLoad = state.ratings[updatedIndex + 1];
      if (nextLoad) {
        nextLoad.initialTonnes = updatedRating.finalTonnes.original;
        nextLoad.tonnes = _calcTonnes(nextLoad);
      }
      const originalRating = state.ratings.find(load => load.id === updatedRating.id);
      Object.assign(originalRating, updatedRating);
    },
  },
  actions: {
    getRatings({ commit, rootState }) {
      axios.get(rootState.baseUrl + 'Avaliacoes')
        .then(response => {
          commit('setRatings', response.data);
        })
    },
    updateRating({ state, commit, rootState }, ratingIndex) {
      let updatedRating = state.ratings[ratingIndex];
      if (_hasBeenEdited(updatedRating)) {
        axios.put(rootState.baseUrl + 'rating', {
          id: updatedRating.id,
          finalTonnes: updatedRating.finalTonnes.edited,
          moisture: updatedRating.moisture.edited,
          maintenanceDowntime: updatedRating.maintenanceDowntime.edited,
          operationalDowntime: updatedRating.operationalDowntime.edited
        })
        .then(response => {
          commit('updateRating', updatedRating)
          Message.success({
            message: 'Rating updated!'
          })
        })
      }
    },
    postNewRating({ state, commit, rootState }, newRatingForm) {
      axios.post(rootState.baseUrl + 'rating', newRatingForm)
        .then(response => {
          commit('addNewRating', response.data);
          this.newRatingForm = {finalTonnes: '', moisture: '', maintenanceDowntime: '', operationalDowntime: ''};
          Message.success({
            message: 'Rating added successfully!'
          });
        })
    }
  }
}

function _hasBeenEdited(rating) {
  return parseFloat(rating.finalTonnes.edited) !== rating.finalTonnes.original ||
         parseFloat(rating.moisture.edited) !== rating.moisture.original ||
         parseFloat(rating.maintenanceDowntime.edited) !== rating.maintenanceDowntime.original ||
         parseFloat(rating.operationalDowntime.edited) !== rating.operationalDowntime.original;
}