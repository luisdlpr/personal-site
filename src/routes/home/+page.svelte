<script lang="ts">
	import ThreejsScene from '$lib/chipboy/ChipBoy.svelte';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import linksJSON from '$lib/links.json';
	import socialsJSON from '$lib/socials.json';
	import { writable } from 'svelte/store';
	import '$lib/global.css';
	import 'animate.css';
	import '@fontsource/roboto';

	let main: HTMLElement;
	let loadingContainer: HTMLDivElement;

	const loadProgress = writable(0);

	const links = linksJSON.links;
	const socials = socialsJSON.links;

	loadProgress.subscribe((value) => {
		if (value >= 100) {
			loadingContainer.style.animation = 'fadeOut';
			loadingContainer.style.animationDuration = '2s';
			setTimeout(() => {
				loadingContainer.style.display = 'none';
				main.style.display = 'block';
			}, 2000);
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
			<div id="subtitle">
				<h2>Software/Web Developer - Sydney NSW</h2>
				{#each socials as link}
					<a href={link.link} style="text-decoration: none;">
						<svg
							class="socialLink"
							xmlns="http://www.w3.org/2000/svg"
							height="2em"
							viewBox="0 0 448 512"><path d={link.logo} /></svg
						>
					</a>
				{/each}
			</div>
		</section>

		<section id="homeContent">
			<div id="mockWindowContainer">
				<MockBrowserWindow>
					<div id="navigationSection" slot="content">
						{#each links as link}
							<a href={link.link}>{link.title}</a>
						{/each}
					</div>
				</MockBrowserWindow>
			</div>
			<div id="chipBoyScene">
				<ThreejsScene --height="50vh" progress={loadProgress} />
			</div>
		</section>
		<section id="homeFooter">
			<span>Powered by Sveltekit.</span>
			<span>
				This work is based on
				<a href="https://sketchfab.com/3d-models/chipboy-f51dd390165c471fb84078b42ccd35ad">
					"ChipBoy"
				</a>
				by
				<a href="https://sketchfab.com/jameshorn">James Horn</a>
				licensed under
				<a href="http://creativecommons.org/licenses/by-nc/4.0/">CC-BY-NC-4.0</a>.
			</span>
		</section>
	</main>
	<div id="loadingContainer" bind:this={loadingContainer}>
		<label for="loadProgress"> Please Wait, Loading Experience </label>
		<progress id="loadProgress" value={$loadProgress} max="100" />
	</div>
</body>

<style>
	.socialLink {
		fill: var(--slate200);
		margin: 1em 0.5em;
	}

	#title {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 5px;
		animation: zoomIn;
		animation-duration: 2s;
		width: 100%;
		margin-bottom: 10px;
	}

	#title > * {
		margin: 5px;
		text-align: center;
	}

	#title > h1 {
		font-size: 5vw;
	}

	#subtitle > h2 {
		font-size: 2vw;
	}

	@media only screen and (max-width: 600px) {
		#title > h1 {
			font-size: 10vw;
		}

		#subtitle > h2 {
			font-size: 5vw;
		}

		#homeContent {
			flex-direction: column-reverse;
			gap: 0px;
		}

		#chipBoyScene {
			width: 100%;
		}
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
		text-align: center;
	}

	#chipBoyScene {
		animation: fadeIn;
		animation-duration: 2s;
		width: 60vh;
		max-width: 100%;
	}

	#mockWindowContainer {
		animation: slideInLeft;
		animation-duration: 2s;
		width: 50vh;
		max-width: 100%;
		margin: 2em;
		margin-top: 0px;
	}

	#homeContent {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2em;
	}

	#navigationSection {
		display: flex;
		margin: 2em;
		flex-direction: column;
		gap: 1em;
	}

	#navigationSection > a {
		font-size: 2em;
		text-align: center;
		text-decoration: none;
		padding: 5px;
		width: 100%;
		border-radius: 10px;
		background-color: var(--slate500);
	}

	#homeFooter {
		font-size: 0.8em;
		width: 100%;
		text-align: center;
		animation: fadeIn;
		animation-duration: 2s;
	}
</style>
