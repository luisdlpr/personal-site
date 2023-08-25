<script lang="ts">
	import blog from '$lib/blog.json';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import { onMount } from 'svelte';

	let toHash: HTMLAnchorElement;

	onMount(() => {
		if (window.location.pathname == '/blog/') {
			toHash.click();
		}
	});
</script>

<a style="display: none;" href="/#/blog" bind:this={toHash}>to blog hash</a>

<h1>Dev Blog</h1>

{#each blog.posts as post}
	<section class="blogPostContainer">
		<MockBrowserWindow>
			<div class="blogPost" slot="content">
				<h2><i>({post.date})</i> <strong>{post.title}</strong></h2>
				<p>{post.post}</p>
				{#if post.img}
					<img src={post.img} alt={post.title} class="center" />
				{/if}
			</div>
		</MockBrowserWindow>
	</section>
{/each}

<style>
	strong {
		font-weight: 400;
	}

	h1 {
		animation: slideInUp;
		animation-duration: 2s;
	}

	h2 {
		margin-top: 0.5em;
	}

	.blogPost {
		margin: 1em;
	}

	.blogPostContainer {
		animation: slideInUp;
		animation-duration: 2s;
		margin: 1em;
	}

	.center {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
</style>
