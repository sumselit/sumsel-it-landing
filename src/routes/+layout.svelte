<script>
	import Navbar from '$lib/layouts/Navbar.svelte';
	import Footer from '$lib/layouts/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />

<style lang="scss" global>
	@import '../src/style/styles.scss';
</style>
