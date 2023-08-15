<script lang="ts">
	// set up three js scene
	import { TScene } from '$lib/ThreejsScene';
	import { onMount } from 'svelte';
	import { resize } from 'svelte-resize-observer-action';

	let container: HTMLDivElement;

	function loadChipBoy() {
		let chipBoyScene = new TScene(container, true);
		chipBoyScene.addAmbientLight(0xfff2cc, 0.3);
		chipBoyScene.addDirectionalLight(0xffffff, 3, { x: 3, y: 3, z: 0 });
		chipBoyScene.loadGLTF(false, './assets/chipboy/ChipBoy_SF.glb');
		chipBoyScene.camera.position.set(3, 1, 2);

		return chipBoyScene;
	}

	let chipBoyScene: TScene;
	let debounceTimer: ReturnType<typeof setTimeout>;

	onMount(() => {
		chipBoyScene = loadChipBoy();
		animate();

		function animate() {
			requestAnimationFrame(animate);
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

<div style="display: flex; height: 500px; align-items: center; justify-content: center;">
	<div use:resize={onResize} bind:this={container} style="height: 100%; width: 100%" />
</div>
