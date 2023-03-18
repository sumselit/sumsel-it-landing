## Sumsel IT Landing Page

- Build with SvelteKit
- Node JS v16.16.x
- NPM v8.11.0

## svelte references

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

### SaSS

Sass folder will be placed in the /src/style/ directory. SaSS will only have base, components, layout and vendors, to add a new vendor please add to vendors directory with \*\_ prefix. and register (@forward) in /src/style/vendors/\_index.scss. (Just follow the current configuration for bootstrap css plugin).

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
