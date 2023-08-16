<script lang="ts">
	// set up three js scene
	import { TScene } from '$lib/ThreejsScene';
	import { onMount } from 'svelte';
	import { resize } from 'svelte-resize-observer-action';
	import CircularProgressBar from './CircularProgressBar.svelte';

	// binds
	let container: HTMLDivElement;
	let loadingContainer: HTMLDivElement;
	let loadingIndicator: HTMLProgressElement;

	function loadChipBoy() {
		let chipBoyScene = new TScene(container, loadingIndicator, loadingContainer, true);
		chipBoyScene.addAmbientLight(0xfff2cc, 0.3);
		chipBoyScene.addDirectionalLight(0xffffff, 3, { x: 3, y: 3, z: 0 });
		chipBoyScene.loadGLTF(false, './assets/chipboy/ChipBoy_SF.glb', 1);
		chipBoyScene.addBackgroundImage('./assets/chipboy/ChipBoyBackground.png');
		chipBoyScene.camera.position.set(4, 2, 3);

		return chipBoyScene;
	}

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
	<div
		use:resize={onResize}
		bind:this={container}
		style="height: 100%; width: 100%; display: none;"
	/>
	<div
		class="loading-bar-container"
		bind:this={loadingContainer}
		style="height: 100%; width: 100%; display: flex; flex-direction: column-reverse; gap: 10px; align-items: center; justify-content: center;"
	>
		<label for="loading-bar">Loading</label>
		<progress id="loading-bar" bind:this={loadingIndicator} value="0" max="100" />
	</div>
</div>

<style>
	.tContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--height);
	}
</style>
