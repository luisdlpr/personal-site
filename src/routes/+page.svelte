<script lang="ts">
	import ThreejsScene from '$lib/ChipBoy.svelte';
	import { writable } from 'svelte/store';
	import '$lib/global.css';
	import '@fontsource/roboto';

	let main: HTMLElement;
	let loadingContainer: HTMLDivElement;

	const loadProgress = writable(0);

	loadProgress.subscribe((value) => {
		if (value >= 100) {
			loadingContainer.style.display = 'none';
			main.style.display = 'block';
		}
	});
</script>

<svelte:head>
	<title>Luis Vicente Reyes</title>
</svelte:head>

<body>
	<main style="display: none;" bind:this={main}>
		<section id="title">
			<h1>Luis Vicente Reyes</h1>
			<h2>Software/Web Developer - Sydney NSW</h2>
		</section>

		<section>
			<ThreejsScene --height="50vh" progress={loadProgress} />
		</section>
	</main>
	<div id="loadingContainer" bind:this={loadingContainer}>
		<label for="loadProgress"> Please Wait, Loading Experience </label>
		<progress id="loadProgress" value={$loadProgress} max="100" />
	</div>
</body>

<style>
	#title {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2px;
	}

	#title > * {
		margin: 5px;
	}

	#title > h1 {
		font-size: 5em;
	}

	#loadingContainer {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
</style>
