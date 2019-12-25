<script>
	import ListContainer from './components/listContainer.svelte'
	import { setContext } from 'svelte'
	setContext('items', (JSON.parse(localStorage.getItem('items')) || []))
</script>

<style>
	:global(:root){
		--background-color: #E0EEE0
	}
</style>

<svelte:head>
  <style>
	body{
		overflow: hidden;
		font-family: 'Inconsolata', monospace;
	}
  </style>
</svelte:head>
<ListContainer />