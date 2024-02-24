<script>
    import "../app.css";
    import Navbar from "../lib/Navbar.svelte";
</script>

<div class="w-screen max-w-screen max-h-screen h-screen">
    <Navbar />
    <slot />
</div>