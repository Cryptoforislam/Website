<template>
	<div class="max-w-xl m-auto py-60 px-10 text-center uppercase">
		<div class="text-4xl py-2">Treasury Balance (USDT)</div>
		<div class="py-5 text-9xl">
			<span class="px-2 py-1 relative inline-block">
				<svg class="stroke-current bottom-0 absolute text-pink-400 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="11.2" fill="none" fill-rule="evenodd" stroke-linecap="round"></path>
				</svg>
				<span class="relative">{{ amount }}</span>
				$
			</span>
		</div>
		<a
			href="https://debank.com/profile/0xe2e2703fefb70d019e3bb1b8f0bf6414f1f10f3d"
			class="text-white px-8 py-4 inline-block mt-5 font-medium text-lg bg-gray-900 focus:ring-4 focus:ring-gray-900 focus:ring-offset-2 rounded-xl"
		>
			VIEW
		</a>
	</div>

	<section class="container mx-auto py-10 md:py-20 antialiased">
		<section class="grid lg:grid-cols-4 grid-cols-1 gap-8">
			<div v-for="(item, index) in dataTxns" v-bind:key="index">
				<article class="m-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
					<a :href="'https://bscscan.com/tx/' + item.txn">
						<div class="py-10">
							<h2 v-if="item.donation" class="mb-10 text-center text-2xl font-bold min-h-18 text-gray-600">RECEIVED</h2>
							<h2 v-if="!item.donation" class="mb-10 text-center text-2xl font-bold min-h-18 text-gray-600">DONATED</h2>

							<h2 v-if="item.donation" class="text-center text-7xl font-bold min-h-18 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-green-400">$ {{ item.amount.toFixed(0) }}</h2>
							<h2 v-if="!item.donation" class="text-center text-7xl font-bold min-h-18 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-red-400">$ {{ item.amount.toFixed(0) }}</h2>
						</div>
					</a>
				</article>
			</div>
		</section>
	</section>
</template>

<script>
	const TABI = require('../assets/token.json');
	const axios = require('axios');

	import { ethers } from 'ethers';

	export default {
		data() {
			return {
				token: '0x55d398326f99059ff775485246999027b3197955',
				amount: '......',
				dataTxns: [],
			};
		},

		async mounted() {
			try {
				const newProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed2.binance.org');

				const Yuh = new ethers.Contract(this.token, TABI, newProvider);

				const amount = await Yuh.balanceOf('0xe2e2703fefb70d019e3bb1b8f0bf6414f1f10f3d');

				const amount2 = ethers.utils.formatEther(amount.toString(), 18);

				this.amount = parseInt(amount2).toFixed(2);

				const data = await axios.get('https://raw.githubusercontent.com/Cryptoforislam/Donations-Data/data/data.json');

				this.dataTxns = data.data.slice(0, 16);
			} catch (e) {
				console.log(e);
			}
		},
	};
</script>
