import { writable } from 'svelte/store'
export const taskArr = writable(JSON.parse(localStorage.getItem('tasks')) || [])