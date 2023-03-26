const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ec189dc1.js","imports":["_app/immutable/entry/start.ec189dc1.js","_app/immutable/chunks/index.13786dfa.js","_app/immutable/chunks/singletons.33849cc3.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d6410176.js","imports":["_app/immutable/entry/app.d6410176.js","_app/immutable/chunks/index.13786dfa.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-b7557e09.js'),
			() => import('./chunks/1-8066c792.js'),
			() => import('./chunks/2-19d80e96.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
