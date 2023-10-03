<script lang="ts">
	import { page } from '$app/stores';
	import { Backdrop, NavLink } from '$lib/components';
	import Close from '$lib/vectors/icons/close.svg?component';
	import Instagram from '$lib/vectors/icons/instagram.svg?component';
	import LinkedIn from '$lib/vectors/icons/linkedIn.svg?component';
	import Menu from '$lib/vectors/icons/menu.svg?component';
	import Twitter from '$lib/vectors/icons/twitter.svg?component';
	import YouTube from '$lib/vectors/icons/youtube.svg?component';
	import THDCTech from '$lib/vectors/logos/thdcTech.svg?component';
	import '../app.css';

	const navlinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about-us', label: 'About Us' },
		{ href: '/contact-us', label: 'Contact Us' },
		{ href: '/products', label: 'Products' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/faqs', label: 'FAQs' }
	];

	const socials = [
		{
			href: 'https://twitter.com/thdctech',
			label: 'Check out our Twitter',
			icon: Twitter
		},
		{
			href: 'https://instagram.com/thdctech',
			label: 'Check out our Instagram',
			icon: Instagram
		},
		{
			href: 'https://linkedin.com/thdctech',
			label: 'Check out our LinkedIn',
			icon: LinkedIn
		},
		{
			href: 'https://youTube.com/thdctech',
			label: 'Check out our YouTube',
			icon: YouTube
		}
	];

	let menuVisible = false;

	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
		if (typeof window !== 'undefined') {
			const {
				document: {
					body: { classList: bodyClassList }
				}
			} = window;
			menuVisible ? bodyClassList.add('restrict') : bodyClassList.remove('restrict');
		}
	}
</script>

<header class={`bg-[#f7f6ff] relative z-50`}>
	<div
		class="py-6 px-8 font-cera-pro flex items-center justify-between w-full max-w-screen-2xl min-w-[375px] mx-auto lg:py-10 lg:px-[105.5px]"
	>
		<a href="/" aria-label="THDC Technologies" class="w-[72px] md:w-36">
			<THDCTech />
		</a>
		<button
			type="button"
			class="p-0 text-2xl bg-transparent border-0 outline-none lg:hidden"
			aria-label="Show nav"
			on:click={toggleMenuVisibility}
			aria-controls="navmenu"
			aria-expanded={menuVisible}
		>
			<svelte:component this={menuVisible ? Close : Menu} />
		</button>
		<nav
			class={`absolute ${
				menuVisible ? 'flex' : 'hidden'
			} flex-col items-stretch justify-start py-3 bg-[#F7F6FF] top-20 left-0 w-full z-50 lg:flex-row lg:static lg:w-auto lg:gap-[17px]`}
			id="navmenu"
		>
			<ul role="menu" class="contents">
				{#each navlinks as { href, label }}
					<li role="menuitem" class="contents">
						<NavLink
							className={`font-light text-inherit text-sm leading-[1.3] py-3 px-6 lg:p-[10px] text-center border border-transparent ${
								$page.url.pathname.split(/\//gu)[1] === href.split(/\//gu)[1]
									? 'border-b-[slateblue]'
									: ''
							}`}
							{href}
						>
							<span>{label}</span>
						</NavLink>
					</li>
				{/each}
			</ul>
		</nav>
		<button
			type="button"
			class="hidden rounded-md lg:inline-block p-[10px] font-bold text-[#eeecff] bg-[#101010] text-sm leading-[1.3]"
		>
			<span class="inline-block my-[6px] mx-[39px]">Get A Quote </span>
		</button>
	</div>
</header>

<main class={`font-cera-pro h-full`}>
	<slot />
</main>

<footer class="font-cera-pro text-[#909090] bg-[#f7f6ff]">
	<div
		class="w-full max-w-[1440px] min-w-[375px] mx-auto text-[10px] leading-tight font-light py-8 px-5 flex flex-col gap-6 items-stretch md:pt-20 md:pb-16 md:text-[21px]"
	>
		<a href="/" class="mx-auto w-[74px] md:w-[184px]">
			<THDCTech />
		</a>
		<p class="leading-snug text-center lg:my-6 mx-7 lg:max-w-5xl lg:mx-auto">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod proin turpis
			malesuada montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit mi, euismod
			proin turpis malesuada montes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
			mi, euismod pro
		</p>
		<div class="flex items-center justify-center gap-4 md:gap-8">
			<p class="font-medium">FOLLOW US</p>
			<ul class="flex items-center gap-6 p-0 list-none md:gap-12">
				{#each socials as { href, label, icon }}
					<li class="contents last:hidden lg:last:contents">
						<a class="text-2xl md:text-[33.5px]" {href} aria-label={label}>
							<svelte:component this={icon} class="md:m-[3.25px]" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<hr class="h-[1px] bg-[#6e5de7] border-0 md:my-[14px] lg:mx-40" />
		<div class="flex items-center justify-center gap-1">
			<a href="/t&s" class=" text-inherit">Terms and Service</a>|<a href="/pp" class=" text-inherit"
				>Privacy Policy</a
			>
		</div>
	</div>
</footer>

<Backdrop clicked={toggleMenuVisibility} show={menuVisible} />

<style lang="postcss">
	@media (min-width: 1024px) {
		nav {
			display: flex;
		}
	}
</style>
