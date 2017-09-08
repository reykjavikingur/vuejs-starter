console.log('starting states example');

window.store = new Vuex.Store({

    strict: true,

    state: {
        numbers: []
    },

    mutations: {
        append: function (state, number) {
            state.numbers.push(number);
        },
        dismiss: function (state, index) {
            state.numbers.splice(index, 1);
        }
    }
});

window.listApp = new Vue({

    el: 'main.app-list',

    data: window.store.state,

    methods: {
        dismiss: function (i) {
            window.store.commit('dismiss', i);
        }
    }

});

window.summaryApp = new Vue({

    el: 'main.app-summary',

    data: window.store.state,

    methods: {
        sum: function (ns) {
            let s = 0;
            for (let n of ns) {
                s += n;
            }
            return s;
        }
    }
});


// START RANDOMLY GENERATING NUMBERS

setRandomInterval(() => {
    let number = Math.floor(random(0, 100));
    window.store.commit('append', number);
}, 1000, 4000);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function setRandomTimeout(fn, min, max) {
    setTimeout(fn, random(min, max));
}

function setRandomInterval(fn, min, max) {
    setRandomTimeout(() => {
        var error;
        try {
            fn();
        }
        catch (e) {
            error = e;
        }
        setTimeout(() => setRandomInterval(fn, min, max));
        if (error) {
            throw error;
        }
    }, min, max);
}