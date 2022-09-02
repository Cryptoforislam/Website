<template>
	<div>
		<section class="w-full px-8 text-gray-700 bg-white">
			<div class="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row max-w-7xl">
				<div class="relative flex flex-col md:flex-row">
					<router-link to="/" class="flex items-center mb-5 lg:w-auto lg:items-center lg:justify-center md:mb-0">
						<img src="icon.svg" alt="Logo" class="w-12 h-12" />
					</router-link>
				</div>

				<div class="inline-flex flex-col items-center sm:flex-row sm:ml-5 lg:justify-end">
					<nav class="flex flex-wrap items-center space-x-4 font-semibold tracking-wide uppercase sm:space-x-6">
						<router-link to="/faq" class="leading-none py-2">FAQ</router-link>
						<router-link to="/team" class="leading-none py-2">TEAM</router-link>
						<router-link to="/treasury" class="leading-none py-2"> TREASURY </router-link>
					</nav>
				</div>
			</div>
		</section>

		<router-view />
	</div>
</template>
