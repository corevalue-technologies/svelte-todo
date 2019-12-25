<script>
	import ListContainer from './components/listContainer.svelte'
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