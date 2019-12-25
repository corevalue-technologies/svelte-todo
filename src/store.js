import { writable, get } from 'svelte/store'
export const itemArr = writable(JSON.parse(localStorage.getItem('items')) || [])