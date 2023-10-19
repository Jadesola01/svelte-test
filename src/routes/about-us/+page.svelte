<script>
	import { ArrowRight, DigitalOcean, Shopify, StackedImagesAboutUs } from 'src/lib/assets/vectors';
	import AboutUsContents from './about-us.content';
	import './about-us.scss';
</script>

<svelte:head>
	<title>THDC Tech - About Us</title>
</svelte:head>

<section class="about-us-landing">
	<div class="content-restrictor about-us-landing-restrictor">
		<div class="text-content">
			<h1>About Us</h1>
			<div>
				<p>
					Our team of experienced professionals is passionate about helping our clients achieve
					their business goals. We take the time to understand each client's unique needs and
					develop customized solutions that deliver results.
				</p>
				<p>
					We believe that every business has a story to tell, and we are committed to helping our
					clients tell their stories in a way that resonates with their target audience. We are also
					committed to providing our clients with the highest quality of service and support.
				</p>
			</div>
		</div>
		<div class="stacked-images-wrapper">
			<div>
				<div
					class="bg-purple-500 bg-opacity-50 absolute w-[83.60856%] h-[80.68%] bottom-0 right-[16.39144%] rounded-[19px] overflow-hidden"
				>
					<img
						class="absolute top-0 left-0 w-full h-full object-cover object-center"
						src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjB3b3JraW5nJTIwYXQlMjBvZmZpY2UlMjBpbiUyMGZyb250JTIwb2YlMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt=""
					/>
				</div>
				<div
					class="bg-slate-50 absolute w-[50.02446%] h-[45.988%] top-0 left-[49.97554%] rounded-[19px] overflow-hidden"
				>
					<img
						class="absolute top-0 left-0 w-full h-full object-cover object-center"
						src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb3VwJTIwd29ya2luZyUyMGF0JTIwb2ZmaWNlJTIwaW4lMjBmcm9udCUyMG9mJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="wwd-section">
	<div class="content-restrictor wwd-section-restrictor">
		<div class="text-content">
			<h2>What we do?</h2>
		</div>
		<div class="about-us-doings">
			{#each AboutUsContents.doings as doing}
				<div class="doing-wrapper">
					<div>
						<svelte:component this={doing.icon} />
					</div>
					<p>{doing.title}</p>
				</div>
			{/each}
		</div>
		<a href="/see-all-services">
			<span> See all services </span>
		</a>
	</div>
</section>

<section class="our-process-section">
	<div class="content-restrictor our-process-section-restrictor">
		<div class="text-content">
			<h2>Our Process</h2>
		</div>
		<div class="sum-wrapper">
			<div class="happy-clients">
				<h3>Our Happy Clients</h3>
				<p>Just some of the leading brands that trust THDC Technologies</p>
				<div class="clients">
					{#each [DigitalOcean, Shopify, Shopify, DigitalOcean] as client}
						<div>
							<svelte:component this={client} />
						</div>
					{/each}
				</div>
			</div>
			<div class="trusted-partners">
				<h3>Our Trusted Partners</h3>
				<div class="partners">
					{#each [DigitalOcean, Shopify, Shopify, DigitalOcean] as partner}
						<div>
							<svelte:component this={partner} />
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section class="get-quote-section">
	<div class="content-restrictor get-quote-section-restrictor">
		<div class="text-content">
			<h2>Have a Project in Mind?</h2>
		</div>
		<a href="/get-a-quote">
			<span>Get A Quote</span>
			<ArrowRight />
		</a>
	</div>
</section>
