const template = `
<div class="greeting">
Welcome<span v-if="actualRecipient">, {{actualRecipient}}</span>.
<button v-if="!anonymous" v-on:click="anonymize()">x</button>
</div>
`;

Vue.component('ix-greeting', {

    template: template,

    props: ['recipient'],

    data: function(){
        return {
            anonymous: false
        };
    },

    computed: {
        actualRecipient: function(){
            return this.anonymous ? 'guest' : this.recipient;
        }
    },

    methods: {
        anonymize: function () {
            this.anonymous = true;
        }
    }

});
