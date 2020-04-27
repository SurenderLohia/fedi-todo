<script>
  import { fly } from 'svelte/transition';
  let visible = false;

  setTimeout(function() {
    visible = true;
  }, 0);
</script>

<header class="header">
  <div class="wrap">
    {#if visible}
      <h1 class="h1" transition:fly="{{ y: -20, duration: 500 }}">Fedi-Todo</h1>
      <h3 class="h3 secondary-text-color" transition:fly="{{ y: 20, duration: 500 }}">
        Front-end Developer Interview Todo List
      </h3>
    {/if}
  </div>
</header>
