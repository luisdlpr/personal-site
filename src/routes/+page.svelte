<script lang="ts">
	import ThreejsScene from '$lib/ChipBoy.svelte';
	import { writable } from 'svelte/store';
	import '$lib/global.css';
	import '@fontsource/roboto';

	let main;
	let loadingContainer;
	let loading;

	const progress = writable(0);

	const setLoadingComplete = () => {
		loadingContainer.style.display = 'none';
		main.style.display = 'block';
	};

	progress.subscribe((value) => {
		if (value >= 100) {
			setLoadingComplete();
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
			<ThreejsScene --height="500px" progress={(newProgress) => ($progress = newProgress)} />
		</section>
	</main>
	<div bind:this={loadingContainer}>
		<progress value={$progress} max="100" />
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
</style>
