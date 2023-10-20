<script lang="ts">
	import { page } from '$app/stores';
	import { Close, Menu, THDCTechLogo } from '$lib/assets/vectors';
	import { Backdrop, NavLink } from 'src/lib/components';
	import LayoutContents from 'src/routes/layout.content';
	import 'src/routes/layout.scss';
	import '../app.scss';

	const { routes, footerSection } = LayoutContents;

	let menuVisible = false;

	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
		if (typeof window !== 'undefined') {
			const {
				document: {
					body: { classList: bodyClasses }
				}
			} = window;
			menuVisible ? bodyClasses.add('restrict') : bodyClasses.remove('restrict');
		}
	}
</script>

<header class="header">
	<div class="header-restrictor">
		<a href="/" title="Go to home page">
			<THDCTechLogo />
		</a>
		<button
			type="button"
			class="mobile-navbar-toggler"
			aria-label="Show nav"
			on:click={toggleMenuVisibility}
			aria-controls="navmenu"
			aria-expanded={menuVisible}
		>
			<svelte:component this={menuVisible ? Close : Menu} />
		</button>
		<nav class={`${menuVisible ? 'flex' : 'hidden'}`} id="navmenu">
			{#each routes as { href, label }}
				<NavLink
					className={`${
						$page.url.pathname.split(/\//gu)[1] === href.split(/\//gu)[1] ? 'active' : ''
					}`}
					{href}
				>
					<span>{label}</span>
				</NavLink>
			{/each}
		</nav>
		<a href="/get-a-quote" class="header-get-quote-link">Get A Quote</a>
	</div>
</header>

<main>
	<slot />
</main>

<footer class="footer">
	<div class="content-restrictor footer-restrictor">
		<a href="/" title="Go to home page">
			<THDCTechLogo />
		</a>
		<p class="footer-paragraph">{footerSection.paragraph}</p>
		<div class="socials-wrapper">
			<p>FOLLOW US</p>
			<div>
				{#each footerSection.socials as { href, label, icon }}
					<a {href} aria-label={label}>
						<svelte:component this={icon} />
					</a>
				{/each}
			</div>
		</div>
		<hr />
		<div class="terms-and-privacy">
			<a href="/t&s">Terms and Service</a>|<a href="/pp">Privacy Policy</a>
		</div>
	</div>
</footer>

<Backdrop clicked={toggleMenuVisibility} show={menuVisible} />
