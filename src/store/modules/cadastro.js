import axios from 'axios'
import { Message } from 'element-ui';
import { notificationMessage } from  '../store'


export const CadastroModule = {
  namespaced: true,
  state() {
    return {
      cadastros: [],
    }
  },
  getters: {
    cadastroData: (state) => state.cadastros,
    cadastroLength: (state) => state.cadastros.length,
    cadastros: (state) => state.cadastros,
    content(state, getters, rootState) {
 
    },
    cadastroSliced: (state,page) => (page) => { 
      const slice = 30;
      let max = 0;
      if(state.cadastros.length > page * 30)
        max = page * 30;
      else 
        max = state.cadastros.length
      const min = page - 1;
      return state.cadastros.slice(min * 30, max);
    }
  },
  mutations: {
    setCadastros(state, cadastros) {
      // cadastros.forEach(cadastro => {
      //   cadastro = _processEditableFields(cadastro)
      // });
      state.cadastros = cadastros;
    },
    addNewCadastro(state, newCadastro) {
      let shiftValue = state.shifts.find(d => parseFloat(d.name) === newCadastro.dateShift.shiftId);
      newCadastro.shift = shiftValue.plantName;
      newCadastro = _processEditableFields(newCadastro);
      let lastCadastro = _getLastItem(state.cadastros);
      newCadastro.initialTonnes = lastCadastro.finalTonnes.original;
      newCadastro.tonnes = _calcTonnes(newCadastro);
      console.log(newCadastro);
      newCadastro.dryTonnes = _calcDryTonnes(newCadastro);
      state.cadastros.push(newCadastro);
    },
    updateCadastro(state, updatedCadastro) {
      updatedCadastro.finalTonnes.original = parseFloat(updatedCadastro.finalTonnes.edited);
      updatedCadastro.tonnes = updatedCadastro.finalTonnes.original - updatedCadastro.initialTonnes;
      updatedCadastro.moisture.original = parseFloat(updatedCadastro.moisture.edited);
      updatedCadastro.maintenanceDowntime.original = parseFloat(updatedCadastro.maintenanceDowntime.edited);
      updatedCadastro.operationalDowntime.original = parseFloat(updatedCadastro.operationalDowntime.edited);
      updatedCadastro.dryTonnes = _calcDryTonnes(updatedCadastro);
      let updatedIndex = state.cadastros.findIndex(load => load.id === updatedCadastro.id);
      let nextLoad = state.cadastros[updatedIndex + 1];
      if (nextLoad) {
        nextLoad.initialTonnes = updatedCadastro.finalTonnes.original;
        nextLoad.tonnes = _calcTonnes(nextLoad);
      }
      const originalCadastro = state.cadastros.find(load => load.id === updatedCadastro.id);
      Object.assign(originalCadastro, updatedCadastro);
    },
  },
  actions: {
    getCadastros({ commit, rootState }) {
      axios.get(rootState.baseUrl + 'cadastro')
        .then(response => {
          commit('setCadastros', response.data);
        })
    },
    updateCadastro({ state, commit, rootState }, cadastroIndex) {
      let updatedCadastro = state.cadastros[cadastroIndex];
      if (_hasBeenEdited(updatedCadastro)) {
        axios.put(rootState.baseUrl + 'cadastro', {
          id: updatedCadastro.id,
          finalTonnes: updatedCadastro.finalTonnes.edited,
          moisture: updatedCadastro.moisture.edited,
          maintenanceDowntime: updatedCadastro.maintenanceDowntime.edited,
          operationalDowntime: updatedCadastro.operationalDowntime.edited
        })
        .then(response => {
          commit('updateCadastro', updatedCadastro)
          Message.success({
            message: 'Cadastro updated!'
          })
        })
      }
    },
    postNewCadastro({ state, commit, rootState }, newCadastroForm) {
      axios.post(rootState.baseUrl + 'cadastro', newCadastroForm)
        .then(response => {
          commit('addNewCadastro', response.data);
          this.newCadastroForm = {finalTonnes: '', moisture: '', maintenanceDowntime: '', operationalDowntime: ''};
          Message.success({
            message: 'Cadastro added successfully!'
          });
        })
    }
  }
}

function _hasBeenEdited(cadastro) {
  return parseFloat(cadastro.finalTonnes.edited) !== cadastro.finalTonnes.original ||
         parseFloat(cadastro.moisture.edited) !== cadastro.moisture.original ||
         parseFloat(cadastro.maintenanceDowntime.edited) !== cadastro.maintenanceDowntime.original ||
         parseFloat(cadastro.operationalDowntime.edited) !== cadastro.operationalDowntime.original;
}