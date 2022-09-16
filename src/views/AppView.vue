<template>
	<div class="max-w-xl m-auto py-60 px-10" v-if="metaMaskinstall && !wrongchain">
		<div class="text-center space-y-5">
			<div class="mt-1 font-extrabold text-gray-900 sm:text-5xl uppercase">
				<div class="text-4xl py-2">You are Donating (USDT)</div>

				<input type="range" v-model="amount" min="1" max="100" step="1"
					class="w-full h-4 bg-blue-100 appearance-none rounded-full" />

				<div class="text-7xl py-5">
					<span class="px-2 py-1 relative inline-block">
						<svg class="stroke-current bottom-0 absolute text-pink-400 -translate-x-2" viewBox="0 0 410 18"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="11.2" fill="none"
								fill-rule="evenodd" stroke-linecap="round"></path>
						</svg>
						<span class="relative">{{ amount }}.00</span>
						$
					</span>

					<div class="text-2xl py-2">Month</div>
				</div>
			</div>

			<a @click="sub_create"
				class="text-white px-8 py-4 inline-block mt-5 font-medium text-lg bg-gray-900 focus:ring-4 focus:ring-gray-900 focus:ring-offset-2 rounded-xl">
				DONATE </a>
		</div>
	</div>
	<div class="max-w-xl m-auto py-60 px-10" v-if="!metaMaskinstall">
		<div class="text-center space-y-5">
			<div class="mt-1 font-extrabold text-gray-900 sm:text-5xl uppercase">
				<div class="text-4xl py-2">No Crypto Wallet Found !</div>
			</div>
		</div>
	</div>
	<div class="max-w-xl m-auto py-60 px-10" v-if="wrongchain">
		<div class="text-center space-y-5">
			<div class="mt-1 font-extrabold text-gray-900 sm:text-5xl uppercase">
				<div class="text-4xl py-2">Please Switch to Binance Smart Chain</div>
			</div>
		</div>
	</div>
</template>

<script>
const CABI = require('../assets/abi.json');

const TABI = require('../assets/token.json');

import { ethers } from 'ethers';

const MAX_UINT256 = ethers.constants.MaxUint256;

export default {
	props: ['id'],
	data() {
		return {
			contract: '0x0bFBa5AB5dd812433E8C54fcB27A0d99810b61c2',
			token: '0x55d398326f99059ff775485246999027b3197955',
			amount: 3,
			account: '',
			metaMaskinstall: false,
			wrongchain: false,
		};
	},
	methods: {
		async set_amount(var1) {
			this.amount = var1;
		},
		async sub_create() {
			try {
				await window.ethereum.enable();

				const newProvider = new ethers.providers.Web3Provider(window.ethereum);

				const signer = newProvider.getSigner();

				const Yuh = new ethers.Contract(this.token, TABI, signer);

				const tokenDecimals = await Yuh.decimals();

				const amount_x = ethers.utils.parseEther(this.amount.toString(), tokenDecimals);


				const Controller = new ethers.Contract(this.contract, CABI, signer);

				const allowance_live = await Yuh.allowance(this.account, this.contract);


				if (allowance_live < MAX_UINT256 / 2) {
					const txn = await Yuh.approve(this.contract, MAX_UINT256, {
						gasLimit: 300000,
					});

					await txn.wait();

					console.log('txn', txn);
				}

				const wei = await Controller.create(this.token, amount_x);

				await wei.wait();

				location.reload();
			} catch (err) {
				console.log(err);
			}
		},
	},
	async mounted() {
		try {
			if (!window.ethereum) {
				this.metaMaskinstall = false;
				return;
			} else {
				this.metaMaskinstall = true;
			}

			await window.ethereum.enable();

			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});

			await window.ethereum.enable();

			const chainId = await window.ethereum.request({
				method: 'eth_chainId',
			});

			if (parseInt(chainId) !== 56) {
				this.wrongchain = true;
			}

			this.account = accounts[0] || null;
		} catch (e) {
			console.log(e);
		}
	},
};
</script>
