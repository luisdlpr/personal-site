<script lang="ts">
	import ThreejsScene from '$lib/ThreejsScene.svelte';
	// import Tscene from '$lib/ThreejsScene';
	// let tjc;
	// let tscene = new Tscene(tjc);
</script>

<svelte:head>
	<title>SvelteKit + ThreeJS</title>
</svelte:head>

<!-- <div id="three-js-container" bind:this={tjc} /> -->

<ThreejsScene />

<section>Hello World.</section>

<style>
</style>
