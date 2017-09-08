require('./components/greeting');
require('./components/compass');
require('./components/card');

console.log('starting tree example');

const template = `
<div class="app">

<section>
<h3>greeting</h3>
<ix-greeting></ix-greeting>
<ix-greeting recipient="Dave"></ix-greeting>
<ix-greeting v-bind:recipient="username"></ix-greeting>
</section>

<section>
<h3>compass</h3>
<ix-compass v-on:rotate="handleCompassRotate($event)"></ix-compass>
<span>output: {{compassOutput}}</span>
</section>

<section>
<h3>card</h3>
<ix-card>
    <div slot="summary"><img src="assets/images/breakfast.jpeg" /></div>
    <span slot="detail">Our omelettes and griddle favorites are the perfect start to any day. Breakfast is the most important meal after all.</span>
</ix-card>
</section>

</div>
`;

window.app = new Vue({

    el: 'main',

    template: template,

    data: {
        username: '',
        compassOutput: ''
    },

    methods: {
        handleCompassRotate: function(event) {
            console.log('handle compass rotate', event);
            this.compassOutput = event;
        }
    }

});
