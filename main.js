var app = new Vue({
    el: '#app',
    data: {
        message: 'Spam!',
        spamList: [
            {
                id: 1,
                s: 'a'
            },
            {
                id: 2,
                s: 'b'
            },
            {
                id: 2,
                s: 'c'
            }
        ],
        show: false,
        counter: 0,
        style: {
            backgroundColor: 'black',
            color: 'white'
        },
        radius: 50
    },
    methods: {
        handleClick: function(e) {
            this.show = !this.show
            this.counter += 1
        }
    },
    created: function() {
        console.log('created')
    }
})
