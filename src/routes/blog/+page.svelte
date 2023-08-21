<script lang="ts">
	import blog from '$lib/blog.json';
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
</script>

<h1>Dev Blog</h1>

{#each blog.posts as post}
	<section class="blogPostContainer">
		<MockBrowserWindow>
			<div class="blogPost" slot="content">
				<h2><i>({post.date})</i> <strong>{post.title}</strong></h2>
				<p>{post.post}</p>
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
	}
</style>
