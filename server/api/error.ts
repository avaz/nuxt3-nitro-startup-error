import {defineEventHandler} from 'h3';
import {useApi} from '~/composables/useApi';

export default defineEventHandler(async (event) => {
  return await useApi('status/500');
})
