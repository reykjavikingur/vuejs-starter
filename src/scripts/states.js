console.log('starting states example');

var source = {
    numbers: []
};

window.listApp = new Vue({

    el: 'main.app-list',

    data: source,

    methods: {
        dismiss: function(i) {
            console.log('dismissing', i);
            this.numbers.splice(i, 1);
        }
    }

});

window.summaryApp = new Vue({

    el: 'main.app-summary',

    data: source,

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
    source.numbers.push(number);
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