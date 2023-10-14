<script lang="ts">
	export let clicked = () => {};
	export let show = false;
</script>

{#if show}
	<div
		class="fixed inset-0 z-40 bg-black lg:static opacity-10"
		role="presentation"
		on:click={clicked}
	/>
{/if}
