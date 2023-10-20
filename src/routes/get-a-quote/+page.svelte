<script>
	import { ArrowRight } from '$lib/assets/vectors';
</script>

<svelte:head>
	<title>THDC Tech - Get A Quote</title>
</svelte:head>

<section class="">
	<div class="content-restrictor pt-8 px-5 pb-[72px]">
		<div>
			<div class="text-center">
				<h1 class="font-medium text-xl text-gray-2 leading-tight mb-6">Get A Quote</h1>
				<p class="font-light text-gray-6 text-xs leading-tight mx-2">
					We're excited to help you achieve your business goals. To get started, simply fill out the
					form below and we'll be in touch to discuss your needs and provide you with a personalized
					quote.
				</p>
			</div>
			<div class="my-8 mx-6">
				<div class="w-full relative overflow-hidden rounded-t-full pb-[calc((454/288)*100%)]">
					<img
						class="absolute top-0 left-0 w-full h-full object-cover object-center"
						src="https://images.unsplash.com/photo-1697035125497-6a5b1dfd7423?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</div>
			</div>
		</div>
		<form class="text-center mx-[3px]">
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="First Name"
			/>
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="Last Name"
			/>
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="Email"
			/>
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="Phone Number"
			/>
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="Company"
			/>
			<input
				class="mb-4 block w-full rounded-lg p-4 text-[10px] leading-[1.3] text-gray-6 bg-white-1 font-light placeholder:text-inherit"
				type="text"
				placeholder="Service(s) of Interest"
			/>
			<textarea
				placeholder="Additional Information"
				class="block w-full mb-4 rounded-lg resize-none bg-white-1 placeholder:text-inherit font-light text-gray-6 text-[10px] leading-[1.3] p-4"
			/>
			<button
				type="submit"
				class="inline-flex items-center justify-center gap-2 font-medium bg-purple-1 text-white rounded-lg text-xs leading-tight px-[18.5px] py-4"
			>
				<span>Submit Message</span>
				<div class="w-4">
					<ArrowRight />
				</div>
			</button>
		</form>
	</div>
</section>
