// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
// @ts-ignore
import adapterMulti from '@macfja/svelte-multi-adapter';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterMulti([
			adapterStatic({ pages: 'build-static', assets: 'build-static', precompress: false }),
			adapterNode({ out: 'build-node', precompress: false }),
			// adapter()
		]),
		alias: {
			$assets: "src/lib/assets",
			$img: "src/lib/assets/images",
		},
	},
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/style/styles.scss';`
		}
	})
}; 

export default config;

