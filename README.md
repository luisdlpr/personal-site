# Luis Reyes Personal Website

## Dev Log

### 11/08/23

- Use sveltekit to generate a static site -> for a personal portfolio website such as this, reactivity etc is not as important, for speed, network optimization, server and client load it would be much bettet to generate a static site. sveltekit has really good options for this
- ThreeJS to add some WOW factor to the site. Will host these as static assets but should be wary of asset size. Use Draco to compress the 3D models

### 17/08/23

- abstract away alot of 3js logic to a class to make it easy to add more / change models
- add rotation animations to make it clear it is a 3d model, kept orbit controls in as it still looks okay after playing with camera view
- chose tailwind slate for background color
- used svelte stores to keep track of model loading progress and used css transitions to create a loading screen before homepage

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

Use `npx serve build` to better emulate static deployment

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
