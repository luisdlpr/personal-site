<script lang="ts">
	import { location } from 'svelte-spa-router';
	import Home from './home/+page.svelte';
	import NavBar from '$lib/navBar/NavBar.svelte';
	import About from './about/+page.svelte';
	import Resume from './resume/+page.svelte';
	import Blog from './blog/+page.svelte';
	import Portfolio from './portfolio/+page.svelte';
	import { onMount } from 'svelte';

	let home: HTMLDivElement;

	onMount(() => {
		location.subscribe((value) => {
			if (value === '/') {
				home.style.display = 'block';
			} else {
				home.style.display = 'none';
			}
		});

        document.body.scrollIntoView();
	});
</script>

<body>
	<div bind:this={home}>
		<Home />
	</div>
	{#if $location != '/'}
		<NavBar />
	{/if}

	{#if $location == '/about' || $location == '/about/'}
		<About />
	{:else if $location == '/resume' || $location == '/resume/'}
		<Resume />
	{:else if $location == '/blog' || $location == '/blog/'}
		<Blog />
	{:else if $location == '/portfolio' || $location == '/portfolio/'}
		<Portfolio />
	{/if}
</body>
