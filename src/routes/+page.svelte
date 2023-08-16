<script lang="ts">
	import ThreejsScene from '$lib/ChipBoy.svelte';
	import '@fontsource/roboto';
</script>

<svelte:head>
	<title>Luis Vicente Reyes</title>
</svelte:head>

<body>
	<section id="title">
		<h1>Luis Vicente Reyes</h1>
		<h2>Software/Web Developer - Sydney NSW</h2>
	</section>

	<section>
		<ThreejsScene --height="500px" />
	</section>
</body>

<style>
	:global(*) {
		color: #e5e7eb;
		font-family: sans-serif;
		font-weight: 100;
	}

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
