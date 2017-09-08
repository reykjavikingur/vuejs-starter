console.log('starting routing example');

const NotFound = {
    template: `
<div class="not-found">
not found
</div>
`
};

const Home = {
    template: `
<div class="home">
<p>Welcome to the routing example app.</p>
home | <a href="#/about">about</a>
</div>
`
};

const About = {
    template: `
<div class="about">
<p>This is an example app demonstrating basic routing capabilities.</p>
<a href="#/">home</a> | about
</div>
`
};

const routes = {
    '/': Home,
    '/about': About
};


window.app = new Vue({

    el: 'main',

    data: function () {
        return {
            currentRoute: window.location.hash
        };
    },

    computed: {
        ViewComponent: function () {
            return routes[this.currentRoute.replace(/^#/, '')] || NotFound;
        }
    },

    render: function (h) {
        return h(this.ViewComponent);
    },

    mounted: function () {
        window.onpopstate = event => {
            this.currentRoute = window.location.hash;
        };
    }
});
