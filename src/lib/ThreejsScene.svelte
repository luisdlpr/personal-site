<script lang="ts">
	// set up three js scene
	import { TScene } from '$lib/ThreejsScene';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	function loadChipBoy() {
		let chipBoyScene = new TScene(container, true);
		chipBoyScene.addAmbientLight(0xfff2cc, 0.3);
		chipBoyScene.addDirectionalLight(0xffffff, 3, { x: 3, y: 3, z: 0 });
		chipBoyScene.loadGLTF(false, './assets/chipboy/ChipBoy_SF.glb');
		chipBoyScene.camera.position.set(3, 1, 2);

		return chipBoyScene;
	}

	onMount(() => {
		let chipBoyScene = loadChipBoy();
		animate();

		function animate() {
			requestAnimationFrame(animate);
			chipBoyScene.animate();
		}
	});
</script>

<div>
	<div bind:this={container} style="width:100vw; height:500px;" />
	<div>hello</div>
</div>
