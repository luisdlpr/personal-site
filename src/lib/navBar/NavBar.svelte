<script lang="ts">
	import linksJSON from '$lib/links.json';
	import socialsJSON from '$lib/socials.json';

	let screenSize: number;
	let nav: boolean = false;
	let smallLinksDropDown: HTMLDivElement;
	let barIcon: SVGElement;

	const links = linksJSON.links;
	const socials = socialsJSON.links;

	const toggleNav = () => {
		if (nav) {
			smallLinksDropDown.style.paddingLeft = '0em';
			smallLinksDropDown.style.paddingRight = '0em';
			smallLinksDropDown.style.width = '0';
			smallLinksDropDown.style.borderWidth = '0px';
			barIcon.style.opacity = '0.3';
			nav = !nav;
		} else {
			smallLinksDropDown.style.paddingLeft = '1em';
			smallLinksDropDown.style.paddingRight = '1em';
			smallLinksDropDown.style.width = '30vw';
			smallLinksDropDown.style.borderWidth = '1px';
			barIcon.style.opacity = '1';
			nav = !nav;
		}
	};
</script>

<svelte:window bind:innerWidth={screenSize} />
<nav>
	<a id="title" href="/#/"> Luis Reyes </a>
	{#if screenSize >= 700}
		<div id="links">
			{#each links as link}
				<a class="pageLink" href={link.link}> {link.title} </a>
			{/each}
		</div>
		<div id="socialLinks">
			{#each socials as link}
				<a href={link.link}>
					<svg
						class="socialLink"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 448 512"><path d={link.logo} /></svg
					>
				</a>
			{/each}
		</div>
	{:else}
		<div id="smallLinks">
			<button on:click={toggleNav}>
				<svg
					id="barIcon"
					bind:this={barIcon}
					xmlns="http://www.w3.org/2000/svg"
					height="2em"
					viewBox="0 0 448 512"
					aria-label="navigation links"
				>
					<style>
						#barIcon {
							fill: #e2e8f0;
							opacity: 0.3;
						}
					</style><path
						d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
					/></svg
				>
			</button>
		</div>
	{/if}
</nav>
<div
	id="smallLinksDropdown"
	bind:this={smallLinksDropDown}
	class="smallLinksDropdownClosed"
	style="top: 80px;"
>
	{#each links as link}
		<a class="pageLink" href={link.link}> {link.title} </a>
	{/each}
	<hr style="width: 100%;" />
	{#each socials as link}
		<a class="pageLink" href={link.link}> {link.title} </a>
	{/each}
</div>
<div id="navbarOffset" style="height: 30px;" />

<style>
	button {
		background-color: var(--slate800);
		border: none;
	}

	.pageLink {
		font-size: 1em;
	}

	#smallLinksDropdown {
		z-index: 100;
		position: fixed;
		right: 0px;
		background-color: var(--slate800);
		border: 0px solid var(--slate200);
		padding-top: 1em;
		padding-bottom: 1em;
		border-radius: 10px;
		margin: 1em;
		display: flex;
		flex-direction: column;
		gap: 1em;
		overflow-x: hidden;
		padding-left: 0em;
		padding-right: 0em;
		width: 0px;
		transition: width 1s, padding 1s;
	}

	a {
		font-size: 2em;
		text-decoration: none;
	}

	nav {
		position: sticky;
		z-index: 100;
		top: 1em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1em 2em;
		border-radius: 10px;
		background-color: var(--slate800);
		border: 1px solid var(--slate200);
		animation: fadeInDown;
		animation-duration: 1s;
	}

	#links {
		display: flex;
		gap: 1em;
		align-items: center;
	}

	.socialLink {
		fill: var(--slate200);
		margin: 0em 0.2em;
	}
</style>
