var app = new Vue({
    el: '#app',
    data: {
        message: 'Spam!',
        aList: [],
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
                id: 3,
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
            this.spamList.push({
                id: 3 + this.counter,
                s: 'test'
            })
        }
    },
    created: function() {
        console.log('created')
        axios.get('list.json').then(function(response) {
            this.aList = response.data
        }.bind(this)).catch(function(e) {
            console.error(e)
        })
    },
    mounted: function() {
        console.log(this.$el)
        console.log(this.$refs.hello)
    }
})
