<script lang="ts">
	import ThreejsScene from '$lib/chipboy/ChipBoy.svelte';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import { writable } from 'svelte/store';
	import '$lib/global.css';
	import 'animate.css';
	import '@fontsource/roboto';

	let main: HTMLElement;
	let loadingContainer: HTMLDivElement;

	const loadProgress = writable(0);

	const links = [
		{ title: 'About', link: '/#/about' },
		{ title: 'Resume', link: '/#/resume' },
		{ title: 'Blog', link: '/#/blog' },
		{ title: 'Portfolio', link: '/#/portfolio' }
	];

	const socials = [
		{
			logo: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/luisvdlpreyes/'
		},
		{
			logo: 'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z',
			title: 'GitHub',
			link: 'https://github.com/luisdlpr'
		},
		{
			logo: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z',
			title: 'Contact',
			link: '/#/resume'
		}
	];

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
