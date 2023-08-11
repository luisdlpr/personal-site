<script lang="ts">
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

	type OnLoadXHR = {
		[key: string]: any;
		loaded: any;
		total: any;
	};

	type InitGLTFJSON = {
		[key: string]: any;
		asset: any;
		animations: any;
		cameras: any;
		scene: any;
		scenes: any;
	};

	if (browser) {
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let ambientLight: THREE.AmbientLight;
		let directionalLight: THREE.DirectionalLight;
		let controls: THREE.OrbitControls;
		let model: any;

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			document.body.appendChild(renderer.domElement);

			// ambient light which is for the whole scene
			ambientLight = new THREE.AmbientLight(0xfff2cc, 0.3);
			ambientLight.castShadow = true;
			scene.add(ambientLight);

			directionalLight = new THREE.DirectionalLight(0xffffff, 3);
			directionalLight.castShadow = true;
			directionalLight.position.set(3, 3, 0);

			const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
			scene.add(directionalLight, dlHelper);

			controls = new OrbitControls(camera, renderer.domElement);

			//controls.update() must be called after any manual changes to the camera's transform
			controls.update();

			const loader = new GLTFLoader();
			const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
			dracoLoader.setDecoderConfig({ type: 'js' });
			loader.setDRACOLoader(dracoLoader);

			loader.load(
				'./assets/chipboy/ChipBoy_SF.glb',
				function (gltf: InitGLTFJSON) {
					console.log(gltf);
					model = gltf.scene;
					scene.add(model);
				},
				(xhr: OnLoadXHR) => {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
				},
				(error: Error) => {
					console.log(error);
				}
			);

			camera.position.z = 5;
		};

		const render = () => {
			renderer.clear();
			renderer.render(scene, camera);
		};

		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();

			render();
		};

		init();
		animate();
	}
</script>

<svelte:head>
	<title>SvelteKit + ThreeJS</title>
</svelte:head>

<section>Hello World.</section>
