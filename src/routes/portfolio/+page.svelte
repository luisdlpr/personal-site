<script lang="ts">
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import { onMount } from 'svelte';

	let toHash: HTMLAnchorElement;

	onMount(() => {
		if (window.location.pathname == '/portfolio/') {
			toHash.click();
		}
	});
</script>

<a style="display: none;" href="/#/portfolio" bind:this={toHash}>to portfolio hash</a>

<h1 id="page-title">Portfolio</h1>

<main>
	<section class="port-item">
		<MockBrowserWindow>
			<div
				slot="content"
				style="display: flex; flex-direction: column; align-items: center; justify-content: center; align-items: center;"
				class="port-item-content"
			>
				<h1 style="font-family: 'Bungee'; margin-bottom: 0.5em;">Reel-Riddle</h1>
				<a href="https://luisdlpr.xyz/reel-riddle/"> Check out the app </a>
				<a href="https://github.com/luisdlpr/reel-riddle/"> Check out the source code </a>
				<div style="text-align: center;">
					A daily movie title guessing game/puzzle based on the most popular movies in TMDB.
					Developed using NextJS and Prisma. Has functionality for a leaderboard system when
					creating and using an account, and extra hints (cast, production company) with score
					penalties.
				</div>
				<img src="https://i.imgur.com/hZD5Qze.png" alt="reel-riddle screenshots" width="90%" />
			</div>
		</MockBrowserWindow>
	</section>

	<a style="text-align: center;" href="https://github.com/luisdlpr/personal-site">
		See the source code for this portfolio website
	</a>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bungee&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap');

	.port-item-content > div,
	a,
	img {
		margin: 0.5em;
	}

	.port-item-content > img {
		border-radius: 10px;
	}

	.port-item {
		margin: 1em;
	}

	#page-title {
		animation: slideInUp;
		animation-duration: 2s;
	}

	main {
		animation: slideInUp;
		animation-duration: 2s;
		display: flex;
		flex-direction: column;
	}
</style>
