<script lang="ts">
	// set up three js scene
	import { TScene } from '$lib/ThreejsScene';
	import { onMount } from 'svelte';
	import { resize } from 'svelte-resize-observer-action';
	import type { Writable } from 'svelte/store';

	// binds
	let container: HTMLDivElement;

	// props
	export let progress: Writable<number>;

	// create scene with chipboy and add chipboy specific logic
	function loadChipBoy() {
		let chipBoyScene = new TScene(container, true, progress);
		chipBoyScene.addAmbientLight(0xfff2cc, 0.3);
		chipBoyScene.addDirectionalLight(0xffffff, 3, { x: 3, y: 3, z: 0 });
		chipBoyScene.loadGLTF(false, './assets/chipboy/ChipBoy_SF.glb', 1);
		chipBoyScene.addBackgroundImage('./assets/chipboy/ChipBoyBackground.png');
		chipBoyScene.camera.position.set(4, 2, 3);

		return chipBoyScene;
	}

	// define vars outside of onmount scope
	let chipBoyScene: TScene;
	let debounceTimer: ReturnType<typeof setTimeout>;

	onMount(() => {
		chipBoyScene = loadChipBoy();
		animate();

		function animate() {
			let rotationSpeed = -0.001;

			requestAnimationFrame(animate);
			chipBoyScene.scene.rotateY(rotationSpeed);
			chipBoyScene.animate();
		}
	});

	function onResize(entry: ResizeObserverEntry) {
		let width = entry.contentRect.width;
		let height = entry.contentRect.height;
		if (chipBoyScene) {
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => {
				chipBoyScene.updateResize(width, height);
			}, 100);
		}
	}
</script>

<div class="tContainer">
	<div use:resize={onResize} bind:this={container} />
</div>

<style>
	.tContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--height);
	}

	.tContainer > div {
		height: 100%;
		width: 100%;
	}
</style>
