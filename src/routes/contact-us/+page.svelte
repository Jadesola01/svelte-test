<script>
	import { DocumentText, FaceBook, Inbox, Instagram, StepIndicator } from 'src/lib/assets/vectors';
	import './contact-us.scss';
</script>

<svelte:head>
	<title>THDC Tech - Contact Us</title>
</svelte:head>

<section>
	<div class="content-restrictor pt-8 pb-10">
		<div class="text-content text-gray-6 text-center mb-3 max-w-[64%] mx-auto">
			<h1 class="text-2xl font-medium text-gray-2 leading-tight">Contact Us</h1>
			<p class="font-light text-sm leading-snug mt-2">
				Looking for a trusted agency for your projects? We're here!
			</p>
		</div>
		<div class="socials flex items-center justify-center gap-4">
			<a href="https://facebook.com/thdctech" class="w-[18px]">
				<FaceBook />
			</a>
			<a href="https://instagram.com/thdctech" class="w-[18px]">
				<Instagram />
			</a>
		</div>
	</div>
</section>

<section class="bg-white-1 text-gray-6">
	<div class="content-restrictor pt-8 pb-6">
		<div class="text-content text-center mb-6">
			<h2 class="text-2xl leading-tight text-gray-2 font-medium">What Process to follow?</h2>
			<p class="text-sm leading-[1.3] mt-1 max-w-[53.86667%] mx-auto font-light">
				You are one bold step closer to building your perfect product.
			</p>
		</div>
		<div class="flex items-start justify-start w-[83.46667%] mx-auto">
			<StepIndicator class="h-[195px] w-auto mr-[11px] shrink-0" />
			<div class="shrink-0">
				<div class="mb-6">
					<h3 class="text-gray-2 text-base font-medium leading-tight">What Process to follow?</h3>
					<div class="text-[10px] font-light mt-[6px] leading-[1.3]">
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer.</p>
					</div>
				</div>
				<div class="mb-6">
					<h3 class="text-gray-2 text-base font-medium leading-tight">What Process to follow?</h3>
					<div class="text-[10px] font-light mt-[6px] leading-[1.3]">
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer.</p>
					</div>
				</div>
				<div>
					<h3 class="text-gray-2 text-base font-medium leading-tight">What Process to follow?</h3>
					<div class="text-[10px] font-light mt-[6px] leading-[1.3]">
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer to building your perfect product.</p>
						<p>You are one bold step closer.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="content-restrictor pt-8 pb-16 px-[12.5px]">
		<div class="flex gap-3 items-center py-6 px-4 bg-white-1 rounded-lg mb-6">
			<div class="w-8 bg-purple-1 p-[7.62px] rounded-lg shrink-0">
				<Inbox />
			</div>
			<p class="text-xs font-light leading-tight">
				Write us a few words describing your project and we'll prepare a proposal for you within <span
					class="font-medium">40</span
				> hours.
			</p>
		</div>
		<form class="details-form">
			<input type="text" placeholder="Your Name" />
			<input type="email" placeholder="Your Email" />
			<input type="text" placeholder="Company" />
			<input type="text" placeholder="Budget" />
			<div>
				<p>Optional</p>
				<textarea placeholder="Project details" rows="3" />
				<label for="document">
					<input type="file" id="document" />
					<div>
						<DocumentText />
					</div>
					<span>Attach Document</span>
				</label>
			</div>
			<button type="submit">
				<span>Send Message</span>
			</button>
		</form>
		<p class="text-xs font-light text-center w-3/4 mx-auto">
			You can also send us a mail <a href="mailto:thdctechnologies@gmail.com" class="font-medium"
				>THDCtechnologies@gmail.com</a
			> to talk to us!
		</p>
	</div>
</section>
