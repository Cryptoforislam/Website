<template>
	<div class="w-full bg-black relative z-20 font-medium text-sm h-10 text-left flex items-center text-white">
		<div class="max-w-2xl mx-auto text-left">
			<span class="md:-ml-10"><span class="md:inline mr-1 hidden">أولئك الذين ينفقون في الصدقة سيكافأون
					بسخاء</span></span>
		</div>
	</div>
	<div class="max-w-6xl xl:px-0 px-10 w-full relative z-20 flex mx-auto justify-between h-20 items-center">
		<div class="relative flex items-center pr-10">
			<router-link to="/" class="flex items-center text-lg font-black">CRYPTOFORISLAM.COM</router-link>
		</div>
		<div class="absolute sm:relative w-full px-10 left-0 sm:mt-0 mt-32"></div>
		<div class="relative flex space-x-5 font-medium hidden md:block">
			<router-link to="/faq" class="leading-none py-2">FAQ</router-link>
			<router-link to="/team" class="leading-none py-2">TEAM</router-link>
			<router-link to="/app" class="font-medium bg-gray-900 text-white rounded-full px-4 py-2 text-sm">DONATE
			</router-link>
		</div>
	</div>
	<router-view />

	<section class="px-6 py-6 text-gray-600 bg-gray-50 lg:px-8 md:py-12">
		<div
			class="py-6 mx-auto mb-12 space-y-6 border-b-2 border-gray-200 max-w-7xl lg:mb-16 md:py-12 lg:pb-20 md:flex md:justify-between md:items-center md:flex-row md:space-x-12">
			<div class="flex-1 max-w-3xl">
				<h4 class="text-2xl font-medium text-gray-700 sm:text-3xl md:text-4xl">The Prophet Muhammad said: “Every
					Muslim has to give in charity.”


				</h4>
				<p class="mt-4 text-base font-medium leading-relaxed text-gray-500 md:text-xl">
					“Charity does not decrease wealth, no one forgives another except that Allah increases his honor,
					and no one humbles himself for the sake of Allah except that Allah raises his status.”
				</p>
			</div>
			<a href="https://y8fsqpcq0pb.typeform.com/to/NnAtKo5W"
				class="inline-block px-5 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8">
				Request Donation</a>
		</div>
		<div class="grid max-w-screen-xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8" v-if="load">
			<div v-for="(post, index) of posts" :key="index">
				<a v-bind:href="post.link" class="block overflow-hidden group rounded-xl">
					<img v-bind:src="post.thumbnail"
						class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
						alt="" />
				</a>
				<div class="relative mt-5">
					<a v-bind:href="post.link" class="block mb-3 hover:underline">
						<h2 class="text-xl">{{ post.title }}</h2>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			posts: [{ title: 'ok' }],
			load: false,
		};
	},

	methods: {
		async fetchdata() {
			try {
				const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cryptoforislam');

				this.posts = response.data.items;
				this.load = true;

				this.posts = this.posts.slice(0, 4);
			} catch (error) {
				console.log(error);
			}
		},
	},
	async mounted() {
		await this.fetchdata();
	},
};
</script>
