<template>
	<div class="max-w-xl m-auto py-40 px-10 text-center uppercase">
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
	</div>
</template>

<script>
	const TABI = require('../assets/token.json');

	import { ethers } from 'ethers';

	export default {
		data() {
			return {
				token: '0x55d398326f99059ff775485246999027b3197955',
				amount: '......',
			};
		},

		async mounted() {
			try {
				const newProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed2.binance.org');

				const Yuh = new ethers.Contract(this.token, TABI, newProvider);

				const amount = await Yuh.balanceOf('0xe2e2703fefb70d019e3bb1b8f0bf6414f1f10f3d');

				const amount2 = ethers.utils.formatEther(amount.toString(), 18);

				this.amount = parseInt(amount2).toFixed(2);
			} catch (e) {
				console.log(e);
			}
		},
	};
</script>
