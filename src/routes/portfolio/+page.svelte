<script lang="ts">
	import { onMount } from 'svelte';

	let toHash: HTMLAnchorElement;

	onMount(() => {
		if (window.location.pathname == '/portfolio/') {
			toHash.click();
		}
	});
</script>

<a style="display: none;" href="/#/portfolio" bind:this={toHash}>to portfolio hash</a>

<h1>Portfolio</h1>
<a href="https://github.com/luisdlpr/personal-site"> See the source code for this site </a>

<section> 
<h1>Reel-Riddle</h1>
</section>
