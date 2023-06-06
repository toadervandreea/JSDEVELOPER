const {createApp} = Vue;
let vm = createApp({
    data(){
        return{
            fname:"ion",
            lname:"popescu",
            address:"brasov",
            message:"imi place java",
        }
    },
    methods:{
        myName: function(){
            return`eu ma numesc ${this.fname} ${this.lname} si sunt din ${ this.address}`
        }
    }
}).mount("#app");