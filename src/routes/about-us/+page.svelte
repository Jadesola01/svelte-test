<script>
	import { StackedImagesAboutUs } from 'src/lib/assets/vectors';
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
			<p>
				Our team of experienced professionals is passionate about helping our clients achieve their
				business goals. We take the time to understand each client's unique needs and develop
				customized solutions that deliver results. We believe that every business has a story to
				tell, and we are committed to helping our clients tell their stories in a way that resonates
				with their target audience. We are also committed to providing our clients with the highest
				quality of service and support.
			</p>
		</div>
		<div class="stacked-images-wrapper">
			<StackedImagesAboutUs />
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

<section>
	<div class="content-restrictor">
		<h2>Our Process</h2>
		<h3>Our Happy Clients</h3>
		<h3>Our Trusted Partners</h3>
	</div>
</section>

<section>
	<div class="content-restrictor">
		<h2>Have a Project in Mind?</h2>
		<a href="/get-a-quote">
			<span>Get A Quote</span>
		</a>
	</div>
</section>
