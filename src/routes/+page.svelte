<script lang="ts">
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
		let spotLight: THREE.SpotLight;
		let controls: THREE.OrbitControls;
		let model: any;
		// let cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			// ambient light which is for the whole scene
			ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
			ambientLight.castShadow = true;
			scene.add(ambientLight);

			directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
			directionalLight.castShadow = true;
			directionalLight.position.set(0, 3, 0);

			const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
			scene.add(directionalLight, dlHelper);

			spotLight = new THREE.SpotLight(0x00f00, 1, 8, Math.PI / 8, 0);
			spotLight.castShadow = true;
			spotLight.position.set(0, 3, 0);
			const slHelper = new THREE.SpotLightHelper(spotLight, 3);
			scene.add(spotLight, slHelper);

			controls = new OrbitControls(camera, renderer.domElement);

			//controls.update() must be called after any manual changes to the camera's transform
			controls.update();

			ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
			ambientLight.castShadow = true;
			scene.add(ambientLight);

			const loader = new GLTFLoader();
			loader.load(
				'src/assets/scene.gltf',
				function (gltf: InitGLTFJSON) {
					console.log(gltf);
					model = gltf.scene;
					model.castShadow = true;
					scene.add(model);
				},
				(xhr: OnLoadXHR) => {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
				},
				(error: Error) => {
					console.log(error);
				}
			);

			// const geometry = new THREE.BoxGeometry(1, 1, 1);
			// const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
			// cube = new THREE.Mesh(geometry, material);
			// scene.add(cube);

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
