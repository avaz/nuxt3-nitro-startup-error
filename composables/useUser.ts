import {UseFetchOptions, useRequestHeaders} from '#app';
import {ref} from 'vue';

const state = ref<String>()
export default () => {
  const path = '/api/error';
  function get() {
    try {
      $fetch<String>(path).then(u => state.value = u);
    } catch (e) {
      state.value = null;
    }
    return state;
  }

  return {
    get,
  }
}
