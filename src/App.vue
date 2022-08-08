<template>
	<header>
		<div class="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row">
			<a href="#_" class="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
				<span class="text-xl font-black leading-none text-gray-900 select-none logo">CRYPTOFORISLAM<span class="text-indigo-500">.</span>COM</span>
			</a>
			<nav class="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
				<a href="#_" class="mr-5 hover:text-gray-900">TEAM</a>
				<a href="#_" class="mr-5 hover:text-gray-900">TREASURY</a>
			</nav>

			<button class="mr-5 inline-flex items-center px-3 py-2 mt-4 text-sm font-bold text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
				DONATE
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</button>
		</div>
	</header>

	<head_sk />
	<donation_meter />
	<donation_cause />
	<blog_fetch />
	<join_us />
</template>

<script>
	import head_sk from './components/head_sk.vue';
	import blog_fetch from './components/blog_fetch.vue';
	import donation_meter from './components/donation_meter.vue';
	import donation_cause from './components/donation_cause.vue';
	import join_us from './components/join_us.vue';

	export default {
		name: 'App',
		components: {
			blog_fetch,
			donation_meter,
			head_sk,
			donation_cause,
			join_us,
		},
	};
</script>
