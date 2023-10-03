<script lang="ts">
	import Hero from '$lib/background-assets/hero.svg?component';
	import ArrowRight from '$lib/vectors/icons/arrowRight.svg?component';
	import ChevronRight from '$lib/vectors/icons/chevronRight.svg?component';
	import Envelope from '$lib/vectors/icons/envelope.svg?component';
	import ThinkingWoman from '$lib/vectors/illustrations/thinkingWoman.svg?component';
	import DigitalOcean from '$lib/vectors/logos/digitalOcean.svg?component';
	import Shopify from '$lib/vectors/logos/shopify.svg?component';
	import { onMount } from 'svelte';

	let isMobile = false;

	onMount(() => {
		if (typeof window !== 'undefined') {
			const { innerWidth: screenSize } = window;
			isMobile = screenSize <= 768;
		}
	});

	interface partner {
		icon: any;
		href: string;
		label: string;
	}

	const partnerslist: partner[] = [];
	const partners: partner[] = [
		{ icon: Shopify, href: 'https://shopify.com', label: 'Go to Shopify.com' },
		{
			icon: DigitalOcean,
			href: 'https://digitalocean.com',
			label: 'Go to DigitalOcean.com'
		}
	];

	for (let i = 0; i < 6; i++) {
		const partner = partners[i % 2];
		partnerslist.push(partner);
	}

	interface doing {
		icon: any;
		title: string;
		description: string;
	}

	const doings: doing[] = [];

	for (let i = 0; i < 3; i++) {
		doings.push({
			icon: Envelope as any,
			title: "It's more than an agency.",
			description:
				"It's more than just an agency. It's a community of like-minded individuals who are all working towards the same goal: success."
		});
	}

	interface work {
		flip?: boolean | undefined;
		imgSrc: string;
		imgAlt: string;
		title: string;
		description: string;
		btnText: string;
	}

	const works: work[] = [];

	for (let i = 0; i < 3; i++) {
		const element: work = {
			imgSrc:
				'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
			imgAlt: 'A woman and a man sitting in front of a monitor',
			title: 'Share love',
			description:
				'We are a creative and innovative design agency that is passionate about helping our clients achieve their goals. We are also committed to providing excellent customer service. You get access to a team of experienced and talented experts  that are really good at what they do.',
			btnText: isMobile ? 'Read More' : 'Join the waitlist'
		};
		if (i % 2) element.flip = true;
		works.push(element);
	}

	interface testimonial {
		comment: string;
		avatarSrc: string;
		author: string;
		title: string;
		company: string;
		rating: number;
	}

	const testimonials: testimonial[] = [];

	for (let i = 0; i < 4; i++) {
		testimonials.push({
			comment:
				'I am so grateful for the work that [agency name] has done for me. I highly recommend them to anyone looking for a talented and reliable design agency.',
			avatarSrc:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
			author: 'Johnson B. Steven',
			title: 'CEO',
			company: 'Stripe',
			rating: 4
		});
	}

	function transformScroll(e: WheelEvent) {
		if (!e.deltaY) return;
		const target = e.currentTarget as HTMLElement;
		target.scrollLeft += e.deltaY + e.deltaX;
		e.preventDefault();
	}
</script>

<svelte:head>
	<title>THDC Tech</title>
</svelte:head>

<section class="bg-[center_21px] bg-no-repeat bg-contain section-hero bg-dots lg:bg-dots-lg">
	<div class="w-full max-w-[1440px] mx-auto min-w-[375px] lg:flex lg:flex-col relative">
		<div class="lg:flex lg:min-h-screen">
			<div class="lg:ml-[120px] lg:my-auto z-10">
				<div class="pt-8 text-center lg:text-left px-[37px] lg:p-0">
					<h1
						class="font-satoshi text-[31px] leading-snug font-bold mb-4 lg:text-[70px] lg:max-w-lg lg:leading-tight"
					>
						Design that tells your story.
					</h1>
					<p class="mb-6 text-[13px] font-light text-black lg:text-base lg:max-w-xl lg:pr-4">
						It's more than just an agency. It's a community of like-minded individuals who are all
						working towards the same goal: success.
					</p>
				</div>
				<button
					class="flex lg:inline-flex items-center justify-center gap-1 py-3 mx-auto text-xs md:text-sm md:leading-[1.3] md:gap-3 font-medium border-0 rounded-md px-7 bg-[#101010] text-[#eeecff] outline-none mb-6 md:p-[10px]"
					type="button"
				>
					<span class="md:my-[6px] md:ml-[27.5px]">Get A Quote</span>
					<ChevronRight class="md:text-xl md:mr-[27.5px]" />
				</button>
			</div>
			<div class="lg:absolute lg:top-[52px] lg:left-[44.30556%] lg:w-[48.125%] z-0 mx-6 lg:mx-0">
				<div
					class="relative mx-auto lg:w-full pb-[calc((315/327)*100%)] lg:pb-[calc((680/693)*100%)] overflow-hidden rounded-xl lg:rounded-full"
				>
					<Hero class="absolute top-0 left-0 z-0 object-cover object-center w-full h-full" />
				</div>
			</div>
		</div>
		<ul
			class="flex items-center justify-center gap-6 p-0 mt-10 mb-12 -ml-6 overflow-hidden lg:justify-center lg:ml-0 lg:gap-[62px] lg:mt-[83.44px] lg:mb-[91.56px]"
		>
			{#each partnerslist as { icon, href, label }, i}
				<li class={`contents last:hidden lg:last:contents`}>
					<a
						class={`${i % 2 ? 'md:w-[193px] min-w-[121px]' : 'md:w-[127px] min-w-[71px]'}`}
						{href}
						aria-label={label}
					>
						<svelte:component this={icon} class="w-full h-auto" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class=" bg-[#f7f6ff]">
	<div
		class="w-full max-w-[1440px] min-w-[375px] mx-auto lg:pt-[88px] lg:px-[120px] lg:pb-[114px] px-10 py-8"
	>
		<div class="text-center">
			<h2 class="text-xl font-bold leading-tight about-text md:text-5xl md:leading-tight">
				It's more than an agency
			</h2>
			<p
				class="mt-[10px] mb-6 text-[11px] mx-4 font-light md:text-base md:max-w-xl md:mx-auto md:px-4 md:mb-[69px]"
			>
				It's more than just an agency. It's a community of like-minded individuals who are all
				working towards the same goal: success.
			</p>
		</div>
		<ul class="flex flex-col gap-6 lg:flex-row lg:gap-5">
			{#each doings as { icon, title, description }}
				<li class="contents">
					<div class="px-5 text-black py-[30px] bg-[#eeecff] rounded-xl text-center lg:text-left">
						<div
							class="text-[#6e5de7] text-2xl md:text-[32.5px] md:px-[17.1px] md:p-[15px] inline-block py-[13px] px-[11.56px] bg-[#dcd9f8] rounded-xl mb-[25px]"
						>
							<svelte:component this={icon} class="md:my-[3.75px] md:mx=[2.08334px]" />
						</div>
						<h3 class="mb-2 text-lg font-medium md:text-2xl md:leading-tight md:mb-[15px]">
							{title}
						</h3>
						<p class="text-[10px] mx-[1em] md:mx-0 font-light md:text-base">{description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class=" bg-[#fff2f6]">
	<div
		class="w-full max-w-[1440px] min-w-[375px] mx-auto py-8 px-6 md:pt-[72px] md:px-[120px] md:pb-[112px]"
	>
		<div class="text-center">
			<h2 class="text-xl font-bold leading-tight md:text-5xl md:leading-tight">
				It's more than an agency.
			</h2>
			<p
				class="mt-[10px] mb-8 mx-8 text-[11px] font-light md:text-base md:mb-[72px] md:max-w-xl md:mx-auto md:px-4"
			>
				It's more than just an agency. It's a community of like-minded individuals who are all
				working towards the same goal: success.
			</p>
		</div>
		<ul class="flex flex-col gap-10 lg:gap-[130px]">
			{#each works as { flip, imgSrc, imgAlt, title, description, btnText }}
				<li class="contents">
					<article
						class={`work${flip ? ' reversed' : ''} lg:flex lg:items-center ${
							flip ? 'lg:flex-row-reverse' : ''
						}`}
					>
						<div class="w-full lg:min-w-[57.66667%]">
							<div class="relative w-full pb-[calc((490/692)*100%)]">
								<img
									class="absolute top-0 left-0 object-cover object-center w-full h-full"
									src={imgSrc}
									alt={imgAlt}
								/>
							</div>
						</div>
						<div
							class={`text-black bg-[#fffbfb] relative z-10 py-8 px-6 mx-7 lg:min-w-[57.66667%] -mt-8 lg:mt-0 ${
								flip
									? 'lg:-mr-[calc(57.66667%-(100%-(57.66667%)))]'
									: 'lg:-ml-[calc(57.66667%-(100%-(57.66667%)))]'
							} md:py-[63px] md:px-12`}
						>
							<h3 class="text-lg font-medium leading-tight md:text-2xl md:leading-tight">
								{title}
							</h3>
							<p class="my-4 text-[10px] font-light md:text-base">{description}</p>
							<button
								class="font-bold text-[13px] rounded-md border-0 text-white bg-[#6e5de7] py-3 px-8 outline-none md:text-base md:py-5 md:tracking-[-0.0175em] md:px-[34px]"
								type="button"
							>
								<span>{btnText}</span>
							</button>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="text-[#353535] bg-faq-dots bg-no-repeat bg-contain lg:bg-none">
	<div
		class="w-full max-w-[1440px] min-w-[375px] mx-auto text-center lg:pb-12 pb-[18px] lg:pt-[120px] pt-6"
	>
		<div
			class="w-full max-w-[1252px] mx-auto lg:bg-[#EEECFF] lg:flex lg:justify-evenly lg:flex-row-reverse lg:overflow-hidden lg:rounded-[33px]"
		>
			<div class="w-[232px] mx-auto lg:mx-0 lg:min-w-[25.71885%] lg:mt-[54px] mb-6 lg:mb-0">
				<ThinkingWoman />
			</div>
			<div class="md:self-center">
				<p class="mb-4 text-[15px] font-light leading-5 lg:leading-tight md:text-[22px] md:mb-6">
					Have more questions to ask about us?
				</p>
				<button
					type="button"
					class="border-0 rounded-md text-[#eeecff] bg-[#6e5de7] font-[Satoshi] text-sm font-medium inline-flex items-center justify-center gap-2 md:gap-4 p-[10px] outline-none md:text-[23px] md:leading-[1.35]"
				>
					<span class="my-1 ml-4 md:my-[10.5px] md:ml-20">Get A Quote</span>
					<ArrowRight class="mr-4 text-base md:text-[22px] md:mr-20" />
				</button>
			</div>
		</div>
	</div>
</section>

<section class="bg-center bg-no-repeat bg-cover bg-grey-lines md:bg-grey-lines-lg">
	<div class="w-full max-w-[1440px] min-w-[375px] mx-auto pt-14 md:pt-24 md:pb-[125px] pb-8">
		<div class="text-center">
			<h2 class="text-xl font-bold leading-tight md:text-5xl md:leading-tight">
				Our Happy Clients
			</h2>
			<p
				class="mt-[10px] md:mt-3 mb-8 md:mb-14 md:text-base md:max-w-xl md:mx-auto text-[11px] mx-14 font-light"
			>
				It's more than just an agency. It's a community of like-minded individuals who are all
				working towards the same goal: success.
			</p>
		</div>
		<ul
			class="flex items-center w-full gap-2 p-0 overflow-x-auto overflow-y-hidden md:gap-9"
			on:wheel={transformScroll}
		>
			{#each testimonials as { comment, avatarSrc, author, title, company, rating }}
				<li class="contents last:hidden md:last:contents">
					<div
						class="min-w-[47.2%] lg:min-w-[34.79167%] bg-[#f7f6ff] md:pt-[70px] md:pl-[75px] md:pr-[50px] md:pb-[29px] relative pt-[19px] pr-4 pb-[5px] pl-[25px] before:content-['“'] before:text-4xl before:leading-normal md:before:text-[121px] before:font-charm before:absolute before:top-0 before:left-2 md:before:left-6 md:before:text-[#575757]"
					>
						<p
							class="text-[8px] font-light bg-[#fdfdff] md:text-base md:leading-tight md:py-[10px]"
						>
							<span class="inline-block md:mx-6 md:my-[16.5px]">{comment}</span>
						</p>
						<div class="flex items-center md:gap-4 md:mt-4">
							<div class="relative w-[38px] md:w-20 overflow-hidden rounded-full aspect-square">
								<img
									class="absolute inset-0 object-cover object-center"
									src={avatarSrc}
									alt={`A portrait of ${author}`}
								/>
							</div>
							<div
								class="text-[9px] md:text-base md:leading-tight leading-tight px-2 md:px-[13px] md:py-[10px] py-[10px] font-light"
							>
								<h3 class="text-[1em] font-medium">{author}</h3>
								<p class="my-[2px] md:my-1">{title}, {company}</p>
								<ul class="h-[1em] bg-yellow-300">
									<!-- star SVG out of 5 depending on the `rating` value e.gc., if `rating` is 3, 3 FilledStar SVG and 2 Star SVG are rendered -->
								</ul>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section
	class=" bg-[#101010] text-[#fefeff] bg-pink-lines bg-no-repeat bg-bottom md:bg-pink-lines-lg bg-contain md:bg-[0%_100%] md:relative md:before:content-confetti md:after:content-confetti md:before:top-4 md:before:left-4 md:after:right-4 md:before:absolute md:after:absolute md:after:top-4"
>
	<div class="w-full max-w-[1440px] min-w-[375px] mx-auto pt-10 pb-12 md:pt-[112px] md:pb-[167px]">
		<div class="text-center mx-[54px] md:max-w-2xl md:mx-auto">
			<h2 class="mb-[10px] text-xl font-bold leading-tight md:text-5xl md:leading-tight md:mb-3">
				Be among those that hear from us first.
			</h2>
			<p class="mb-6 md:mb-10 text-[11px] font-light leading-normal md:text-base md:px-[3em]">
				It's more than just an agency. It's a community of like-minded individuals who are all
				working towards the same goal: success.
			</p>
		</div>
		<form class="flex max-w-lg mx-9 md:mx-auto">
			<label
				class="w-full flex items-center md:justify-between gap-7 text-[#575757] bg-white text-[10px] md:text-base leading-none rounded-lg overflow-hidden py-[10px] md:font-aeonik md:leading-tight"
				for="email"
			>
				<div class="flex items-center ml-[14px] md:ml-[26px]">
					<Envelope class="hidden md:block text-xl my-[2px] md:mx-[0.805px] " />
					<input
						type="email"
						id="email"
						placeholder="Add your email address"
						autocomplete="off"
						class="p-3 bg-transparent border-0 outline-none placeholder:text-inherit"
					/>
				</div>
				<button
					type="submit"
					class="leading-tight text-white bg-[#101010] border-0 rounded-lg flex items-center gap-2 py-[10px] md:p-[10px] mr-[26px] md:text-sm md:leading-tight md:mr-[26px]"
				>
					<span class="ml-[15px] md:ml-[13.5px]">Subscribe</span>
					<ArrowRight class="text-xl mr-[15px] md:text-2xl md:my-[2px] md:mr-[13.5px]" />
				</button>
			</label>
		</form>
	</div>
</section>
