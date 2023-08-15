import * as THREE from 'three';

// no types avaliable for these addons
// @ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// @ts-ignore
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
// @ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// custom types
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

export class TScene {
	camera: THREE.PerspectiveCamera;
	controls: any; //THREE.OrbitControls;
	container: HTMLElement;
	loader: any; // THREE.GLTFLoader
	renderer: THREE.WebGLRenderer;
	scene: THREE.Scene;

	constructor(container: HTMLElement, orbitControls: Boolean) {
		// get width and height from container
		const width = container.clientWidth;
		const height = container.clientHeight;

		// initialise scene and camera
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

		// initialise renderer
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(width, height);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		// add renderer to given container
		this.container = container;
		this.container.appendChild(this.renderer.domElement);

		// initialise controls
		if (orbitControls) {
			this.controls = new OrbitControls(this.camera, this.renderer.domElement);
			this.controls.update();
		}
	}

	addAmbientLight(hexColor: number, intensity: number) {
		let ambientLight = new THREE.AmbientLight(hexColor, intensity);
		ambientLight.castShadow = true;
		this.scene.add(ambientLight);
		return ambientLight;
	}

	addDirectionalLight(
		hexColor: number,
		intensity: number,
		position: { x: number; y: number; z: number }
	) {
		// add a directional light
		let directionalLight = new THREE.DirectionalLight(hexColor, intensity);
		directionalLight.castShadow = true;
		directionalLight.position.set(position.x, position.y, position.z);
		this.scene.add(directionalLight);
		return directionalLight;
	}

	addHelpers(directionalLight: THREE.DirectionalLight) {
		// add a helper for the directional light
		if (directionalLight) {
			const dlHelper = new THREE.DirectionalLightHelper(directionalLight, 3);
			this.scene.add(dlHelper);
		}

		// add a grid position helper
		this.scene.add(new THREE.GridHelper(10, 10));
	}

	setDRACOLoader(loader: GLTFLoader) {
		// load static draco decompressor
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('./draco/');
		dracoLoader.setDecoderConfig({ type: 'js' });
		loader.setDRACOLoader(dracoLoader);
	}

	loadGLTF(debug: Boolean, path: String) {
		// initialise loader and set decompressor
		this.loader = new GLTFLoader();
		this.setDRACOLoader(this.loader);

		// take scene from class variables
		let scene = this.scene;

		// load chipboy model
		this.loader.load(
			path,
			function (gltf: InitGLTFJSON) {
				let model = gltf.scene;
				scene.add(model);
			},
			(xhr: OnLoadXHR) => {
				debug && console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			(error: Error) => {
				debug && console.log(error);
			}
		);
	}

	render() {
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);
	}

	animate() {
		// to be called every animation frame
		this.controls.update();
		this.render();
	}

	updateResize(width: number, height: number) {
		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
	}
}
