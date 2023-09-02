console.log("francoview3 JS log")

const app = Vue.createApp({
    data: function () {
        return {
            text: 'Hello World',
            nickname: 'Woodhead',
            myname: 0,
            person: {
                givename: 'peter',
                myimage: 'https://s.yimg.com/cv/apiv2/hkfrontpage/logo/Yahoo-HK-desktop-FP@2x.png',
                cash: 1000, 
                gender: 'M'
            },
            people: [
                {
                    name: 'Peter',
                    gender: 'M'
                },
                {
                    name: 'Mary',
                    gender: 'F'
                }
            ]
        };
    }     
});

app.mount("#app")