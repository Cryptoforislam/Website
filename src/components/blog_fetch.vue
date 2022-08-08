<template>
	<section class="bg-white py-10">
		<div class="max-w-3xl mx-8 mt-4 lg:mx-auto md:mt-16">
			<h1 class="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Blog Updates</h1>
			<h2 class="inline-block px-2 mb-4 text-base font-semibold leading-normal tracking-wide text-gray-800 bg-yellow-200 sm:text-lg">See our progress</h2>
			<p class="mb-8 text-base font-light leading-relaxed text-gray-700 sm:text-lg">xxxxxxxxxxxxxxxxxxx</p>
		</div>
	</section>

	<section class="bg-white" v-if="load">
		<div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
			<div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
				<div v-for="(post, index) of posts" :key="index">
					<a v-bind:href="post.link" class="block overflow-hidden group rounded-xl">
						<img v-bind:src="post.thumbnail" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="" />
					</a>
					<div class="relative mt-5">
						<a v-bind:href="post.link" class="block mb-3 hover:underline">
							<h2 class="text-xl">{{ post.title }}</h2>
						</a>
					</div>
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
					const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@susanorlean');

					this.posts = response.data.items;
					this.load = true;

					this.posts = this.posts.slice(0, 6);
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
