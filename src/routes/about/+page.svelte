<script lang="ts">
	import MockBrowserWindow from '$lib/mockBrowserWindow/MockBrowserWindow.svelte';
	import { onMount } from 'svelte';

	let toHash: HTMLAnchorElement;

	onMount(() => {
		if (window.location.pathname == '/about/') {
			toHash.click();
		}

        document.body.scrollIntoView();
	});
</script>

<a style="display: none;" href="/#/about" bind:this={toHash}>to about hash</a>

<h1>Hello World!</h1>

<section id="intro" style="flex-direction: column-reverse;">
	<p>
		My name is Luis and I am a recent graduate from UNSW Sydney. I graduated with a Dual Bachelor
		Degree in Mechanical Engineering and Computer Science. This website is a place for me to share
		my interests and software projects. I am extremely excited to get to work on producing some
		personal projects, continue learning, and contributing to the space.
	</p>
	<div class="browserMargins" style="width: 50%">
		<MockBrowserWindow>
			<img
				id="meJPG"
				slot="content"
				alt="Luis"
				src="/assets/photos/me.jpg"
				width="828px"
				height="1078px"
			/>
		</MockBrowserWindow>
	</div>
</section>

<section id="keyboards">
	<div>
		<p>
			One of my hobbies is Mechanical Keyboards. If I'm going to be typing all day, might as well
			make it even more fun exploring the artistry of custom mechanical keyboards! Right now, I'm
			loving the idea of compact keyboards and I'm primarily using the Idobao ID42 (40% staggered
			layout) with MoonDrop LunaLight switches. It's very likely I might post some keyboard related
			stuff here at some point! Some of the other keyboards I own are:
		</p>
		<ul>
			<li>Keychron K6</li>
			<li>Keychron Q2</li>
			<li>Tofu65</li>
			<li>BM40 (Planck Clone)</li>
			<li>HHKB Pro 2 Type-S</li>
		</ul>
	</div>
	<div class="browserMargins">
		<MockBrowserWindow>
			<div slot="content" style="display: flex; justify-content: center;">
				<img alt="BM40" src="/assets/photos/keeb1.jpg" width="40%" />
				<img alt="HHKB and ID42" src="/assets/photos/keeb2.JPG" width="40%" />
			</div>
		</MockBrowserWindow>
	</div>
</section>

<section id="lifting">
	<p>
		I like to try and keep my fitness up aswell! I have dabbled in amateur powerlifting and hope to
		compete in some professional competitions some day. I also do a bit of bouldering casually, and
		I hope to explore the hobby more now that I have finished uni.
	</p>
	<div class="browserMargins">
		<MockBrowserWindow>
			<div slot="content" style="display: flex; flex-direction: column; align-items: center;">
				<img alt="Climbing" src="/assets/photos/climb.png" width="80%" />
				<img alt="Powerlifting" src="/assets/photos/comp.jpg" width="80%" />
			</div>
		</MockBrowserWindow>
	</div>
</section>

<section id="pets">
	<p>
		Lastly, I would like to introduce you to my coding buddies! My cat's name is Ramen. He came from
		a litter of unusual names (like Udon and Soba) but when we adopted him from the shelter we
		thought it was perfect! My gecko's name is Gandalf. He is an Australian Barking Gecko and as the
		name suggests he can be heard yelling from time to time.
	</p>
	<div class="browserMargins">
		<MockBrowserWindow>
			<div slot="content" style="display: flex; flex-direction: column; align-items: center;">
				<img alt="ramen" src="/assets/photos/ramen.jpg" width="80%" />
				<img alt="gandalf" src="/assets/photos/gandalf.jpg" width="80%" />
			</div>
		</MockBrowserWindow>
	</div>
</section>

<section id="conclusion">
	<p>
		Thanks for taking the time to learn a bit more about me! Feel free to reach out on my socials. I
		would love the chance to work on any exciting projects!
	</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0em 2em;
		animation: slideInUp;
		animation-duration: 2s;
	}

	img {
		margin: 1em;
		border-radius: 10px;
	}

	h1 {
		text-align: center;
		animation: slideInUp;
		animation-duration: 2s;
	}

	.browserMargins {
		margin: 1em;
	}

	#meJPG {
		object-fit: cover;
		width: auto;
		height: auto;
	}
</style>
