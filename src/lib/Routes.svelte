<script>
    import Router from 'svelte-spa-router';
    import Home from './routes/Home.svelte';
    import Game from './routes/Game.svelte';

    const routes = {
        '/': Home,
        '/game': Game
    };
</script>

<Router {routes} />