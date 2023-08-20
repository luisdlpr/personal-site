<script lang="ts">
	import { location } from 'svelte-spa-router';
	import Home from './Home/Home.svelte';
	import NavBar from '$lib/navBar/NavBar.svelte';
	import About from './About/About.svelte';
	import Resume from './Resume/Resume.svelte';
	import Blog from './Blog/Blog.svelte';
	import Portfolio from './Portfolio/Portfolio.svelte';
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
	});
</script>

<body>
	<div bind:this={home}>
		<Home />
	</div>
	{#if $location != '/'}
		<NavBar />
	{/if}

	{#if $location == '/about'}
		<About />
	{:else if $location == '/resume'}
		<Resume />
	{:else if $location == '/blog'}
		<Blog />
	{:else if $location == '/portfolio'}
		<Portfolio />
	{/if}
</body>
