<template>
	<div class="mx-auto max-w-6xl">
		<div
			class="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto lg:flex-row xl:px-0 py-40">
			<div
				class="z-30 flex flex-col items-center w-full max-w-xl text-center lg:items-start lg:w-1/2 lg:pt-24 lg:text-left">
				<h1 class="relative mb-4 text-3xl font-black leading-tight text-gray-900 lg:pr-16 sm:text-6xl lg:mb-8">
					CRYPTO FOR ISLAM</h1>
				<p class="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
					Our courageous team and partners across the globe dedicate their lives to fulfill our mission to
					support <span class="font-bold">Muslims.</span>
				</p>

				<div
					class="w-full flex sm:flex-row flex-col sm:justify-center lg:justify-start font-medium sm:space-x-5 space-y-4 sm:space-y-0 uppercase">
					<router-link to="app"
						class="px-7 py-4 bg-gray-900 text-white border-2 border-gray-900 hover:bg-white hover:text-gray-900 transition-all ease-out duration-150 rounded-xl flex items-center justify-center text-lg">
						Donate
					</router-link>

					<a href="https://y8fsqpcq0pb.typeform.com/to/NnAtKo5W"
						class="px-7 flex items-center py-4 bg-gray-100 border-2 border-gray-100 hover:border-gray-900 justify-center hover:bg-white transition-all ease-out duration-150 text-gray-900 rounded-xl text-lg">
						<span>Request Donation</span>
					</a>
				</div>

				<div class="flex-col mt-12 sm:flex lg:mt-12">
					<div class="flex">
						<a href="https://instagram.com/cryptoforislam">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
								viewBox="0 0 50 50"
								class="h-12 mr-1 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600">
								<path
									d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z">
								</path>
							</svg></a>

						<a href="https://t.me/cryptoforislam">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
								viewBox="0 0 50 50"
								class="h-12 mr-1 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600">
								<path
									d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z">
								</path>
							</svg></a>

						<a href="https://twitter.com/CryptoforIslam">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
								viewBox="0 0 50 50"
								class="h-12 mr-1 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600">
								<path
									d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z">
								</path>
							</svg></a>
					</div>
				</div>
			</div>
			<div class="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 lg:pl-10">
				<div class="container relative left-0 w-full max-w-4xl lg:absolute lg:w-screen">
					<img src="img/book.jpg"
						class="w-full h-auto mt-20 mb-20 ml-0 shadow-2xl rounded-xl lg:mb-0 lg:h-full xl:-ml-12" />
				</div>
			</div>
		</div>

		<section class="box-border relative block py-40 overflow-hidden leading-6 text-left bg-white">
			<div class="px-16 mx-auto container leading-6 text-left xl:px-12">
				<div class="box-border flex flex-col flex-wrap items-start mx-0 uppercase">
					<div class="pb-4 text-sm font-bold text-left text-gray-700">BRINGING HOPE TO LIFE</div>
					<h3
						class="relative w-full px-0 pb-2 m-0 font-sans text-4xl font-bold text-left xl:flex-grow-0 xl:flex-shrink-0 md:flex-grow-0 md:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
						What We Do
					</h3>
				</div>
				<div class="grid grid-cols-3 gap-5 md:grid-cols-6">
					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Water</div>
								<div class="box-border text-base leading-normal text-gray-700">
									An ever-flowing charity, Sadaqah Jariyah provides clean water so communities can
									thrive. Everyone has the right to water, everyone has the right to life.
								</div>
							</div>
						</div>
					</div>

					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Education</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Education is the key to a brighter future for so many vulnerable children across the
									world. Your donation can inspire hope through education.
								</div>
							</div>
						</div>
					</div>
					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Food Security</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Delivering urgent food in Ramadan & year round to relieve starvation. We provide
									millions of life-saving, nutritious meals to the poor and needy.
								</div>
							</div>
						</div>
					</div>
					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Emergency Relief</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Helping victims of disaster & violent conflict. Help to build Schools, Hospitals,
									Infrastructure & Provide Humanitarian Aid.
								</div>
							</div>
						</div>
					</div>
					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Orphan Care</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Caring for those who can't care for themselves. Your support provides access to
									education, shelter, nutritious meals and the chance to build a secure future
								</div>
							</div>
						</div>
					</div>
					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Health & Wellbeing</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Donate your Zakat and Sadaqah to the Health Fund. We carry out health programs
									across the globe, providing healthcare services.
								</div>
							</div>
						</div>
					</div>

					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Refugee Empowerment</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Alleviating the needs of vulnerable families & children. Help us in our fight,
									protect themselves and their families.
								</div>
							</div>
						</div>
					</div>

					<div class="relative w-full col-span-3 px-4 leading-6 text-left">
						<div class="box-border flex items-center justify-start pt-12">
							<img src="img/icon.svg" class="leading-6 text-left align-middle border-none w-14 h-14" />
							<div class="pl-8 leading-6 text-left">
								<div class="box-border pb-1 text-xl font-bold uppercase">Livelihoods</div>
								<div class="box-border text-base leading-normal text-gray-700">
									Lifting people out of poverty & ensuring their self-reliance. Leading critical
									projects to heal bodies, minds, & souls.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="w-full px-8 py-16 bg-white xl:px-0">
			<div class="flex flex-col max-w-6xl mx-auto md:flex-row">
				<div class="w-full pr-5 md:w-3/12 xl:pr-12">
					<h3 class="text-2xl font-bold leading-7">What is Zakat?</h3>
				</div>

				<div class="w-full mt-5 md:mt-0 md:w-4/5 md:pl-2">
					<p class="text-base font-normal leading-none text-gray-700 md:text-lg">
						An obligatory annual payment, Zakat is paid by qualifying adult Muslims whose wealth exceeds the
						Nisab value for one Islamic (lunar) year. This donation pleases Allah (SWT). Payments are
						made to support those most in need both domestically and around the world.
					</p>
				</div>
			</div>
		</section>

		<section class="w-full px-8 py-16 bg-white xl:px-0">
			<div class="flex flex-col max-w-6xl mx-auto md:flex-row">
				<div class="w-full pr-5 md:w-3/12 xl:pr-12">
					<h3 class="text-2xl font-bold leading-7">When Should I Pay Zakat?</h3>
				</div>

				<div class="w-full mt-5 md:mt-0 md:w-4/5 md:pl-2">
					<p class="text-base font-normal leading-none text-gray-700 md:text-lg">
						You should pay your Zakat when your wealth has exceeded the Nisab threshold for one full Islamic
						year from the point your wealth first exceeded the threshold. The amount of Zakat you owe
						should be calculated on the day you make your payment. This means that regardless of by how much
						your wealth was above the Nisab threshold during the year, it is how your wealth stands at
						that moment from which your Zakat is calculated.
					</p>
				</div>
			</div>
		</section>

		<section class="w-full py-8 bg-white sm:py-12 md:py-20" v-if="load">
			<div class="px-10 mx-auto max-w-7xl">
				<div class="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
					<h2 class="text-3xl font-bold text-gray-800">RECENT UPDATES</h2>
					<a href="https://medium.com/@cryptoforislam"
						class="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
						<span>View More Posts</span>
						<svg class="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
							</path>
						</svg>
					</a>
				</div>

				<div class="grid grid-cols-12 gap-6">
					<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
						<a v-bind:href="posts[0].link" class="relative block w-full h-64 overflow-hidden rounded">
							<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
								v-bind:src="posts[0].thumbnail" />
						</a>
						<a v-bind:href="posts[0].link"
							class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">{{
							posts[0].title }}</a>
					</div>

					<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
						<a v-bind:href="posts[1].link" class="relative block w-full h-64 overflow-hidden rounded">
							<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
								v-bind:src="posts[1].thumbnail" />
						</a>
						<a v-bind:href="posts[1].link"
							class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">{{
							posts[1].title }}</a>
					</div>

					<div class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
						<a v-bind:href="posts[2].link" class="relative block w-full h-64 overflow-hidden rounded">
							<img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105"
								v-bind:src="posts[2].thumbnail" />
						</a>
						<a v-bind:href="posts[2].link"
							class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">{{
							posts[2].title }}</a>
					</div>
				</div>
			</div>
		</section>

		<section class="relative bg-white h-full pb-40 px-10">
			<div class="max-w-6xl px-10 md:px-20 lg:px-10 bg-gray-100 pt-5 rounded-3xl mx-auto">
				<div class="flex flex-wrap items-center">
					<div class="relative w-full lg:w-5/12 px-4 order-last lg:order-first">
						<img class="mx-auto mt-10 lg:mt-0 h-full w-full lg:max-w-none md:max-w-md max-w-sm lg:-ml-20 object-cover"
							src="/img/bow.jpg" />
					</div>
					<div class="w-full lg:w-7/12 px-4 pb-6 pt-10 md:pt-20 lg:pt-0">
						<div class="max-w-xl lg:ml-auto">
							<svg class="w-12 h-12 mb-6 fill-current text-red-400" viewBox="0 0 48 48" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M26 29.45C26 19.3858 33.4577 8.86747 45.2297 6.16443C45.6793 6.0612 46.1364 6.29467 46.3301 6.71327L47.5161 9.27572C47.7602 9.80299 47.5031 10.4238 46.9877 10.692C43.3044 12.608 40.1644 17.1966 39.3647 20.8059C39.2493 21.3268 39.6241 21.8042 40.1413 21.9351C44.6581 23.0784 48 27.1681 48 32.042C48 38.406 42.832 42 37.602 42C31.572 42 26 37.39 26 29.45ZM0 29.45C0 19.3858 7.45772 8.86747 19.2297 6.16443C19.6793 6.0612 20.1364 6.29467 20.3301 6.71327L21.5161 9.27572C21.7602 9.80299 21.5031 10.4238 20.9877 10.692C17.3044 12.608 14.1644 17.1966 13.3647 20.8059C13.2493 21.3268 13.6241 21.8042 14.1413 21.9351C18.6581 23.0784 22 27.1681 22 32.042C22 38.406 16.832 42 11.602 42C5.572 42 0 37.39 0 29.45Z">
								</path>
							</svg>
							<h2 class="mb-7 text-3xl md:text-4xl font-bold leading-tight">#CRYPTOFORISLAM</h2>
							<p class="mb-10 text-lg md:text-xl text-gray-500">
								A non-profit organization is a group organized for purposes other than generating profit
								and in which no part of the organization's income is distributed to its members,
								directors, or
								officers
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			posts: [
				{ title: '', link: '', thumbnail: '' },
				{ title: '', link: '', thumbnail: '' },
				{ title: '', link: '', thumbnail: '' },
				{ title: '', link: '', thumbnail: '' },
				{ title: '', link: '', thumbnail: '' },
				{ title: '', link: '', thumbnail: '' },
			],
			load: false,
		};
	},

	methods: {
		async fetchdata() {
			try {
				const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cryptoforislam');

				this.posts = response.data.items;

				this.load = true;

				this.posts = this.posts.slice(0, 5);
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
