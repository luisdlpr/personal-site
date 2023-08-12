<script lang="ts">
	// three js scene
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import { onMount } from 'svelte';

	let cont: any;

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

	onMount(() => {
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

				// if (ttscene == null) {
				// 	return;
				// }

				// let width = ttscene.clientWidth;
				// let height = ttscene.clientHeight;
				// console.log(width);
				// console.log(document.body.childNodes[1].childNodes[1]);

				camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
				// camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

				// renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('#tjc') });
				// renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#tjc') });
				renderer = new THREE.WebGLRenderer({ antialias: true });
				// renderer.setSize(ttscene.clientWidth, ttscene?.clientHeight, false);
				// renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.setPixelRatio(window.devicePixelRatio);
				// document.querySelector('#three-js-container')[0].appendChild(document.createElement('p'));
				// document.getElementById('three-js-container').appendChild(renderer.domElement);
				// document.body.replaceChild(renderer.domElement, document.body.childNodes[1].childNodes[1]);
				cont.appendChild(renderer.domElement);
				// camera.aspect = width / height;
				// camera.updateProjectionMatrix();

				// ambient light which is for the whole scene
				ambientLight = new THREE.AmbientLight(0xfff2cc, 0.3);
				ambientLight.castShadow = true;
				scene.add(ambientLight);

				directionalLight = new THREE.DirectionalLight(0xffffff, 3);
				directionalLight.castShadow = true;
				directionalLight.position.set(3, 3, 0);

				scene.add(new THREE.GridHelper(10, 10));

				const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
				scene.add(directionalLight, dlHelper);

				controls = new OrbitControls(camera, renderer.domElement);

				// controls.target = new THREE.Vector3(0, 2, 0); controls.update() must be called after any manual changes to the camera's transform
				controls.update();

				const loader = new GLTFLoader();
				const dracoLoader = new DRACOLoader();
				dracoLoader.setDecoderPath('./draco/');
				dracoLoader.setDecoderConfig({ type: 'js' });
				loader.setDRACOLoader(dracoLoader);

				loader.load(
					'./assets/chipboy/ChipBoy_SF.glb',
					function (gltf: InitGLTFJSON) {
						console.log(gltf);
						model = gltf.scene;
						// model.position.setX(0);
						// model.position.setY(2);
						// model.position.setZ(0);
						scene.add(model);
						// camera.lookAt(model.position);
						// camera.updateProjectionMatrix();
						// controls.target(model.position);
						// controls.update();
					},
					(xhr: OnLoadXHR) => {
						console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
					},
					(error: Error) => {
						console.log(error);
					}
				);
				camera.position.set(3, 1, 2);
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
	});
</script>

<div>
	<div bind:this={cont} />
	<div>hello</div>
</div>
