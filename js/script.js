

const { createApp } = Vue ;

createApp({
    data() {
        return{
            activeItem: 0,
            myInterval: "",
            hover: false,
            slides:{
                images:[
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp'
                ],
                titles: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    'Marvel\'s Avengers'
                ],
                texts: [
                    'Experience the rise of Miles Morales as the new hero masters incredible and explosive powers to become his own Spider-Man',
                    'Go dimension-hopping with Ratchet and Clank as they take on an ev evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting,crafting, shootouts and chaos.",
                    "Lost, injured and alone, a stray cat must untangle an anancient mystery to escape a long-forgotten city",
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
                ]  
            } 
        }
    },
    methods: 
    {
        next(){       
            this.activeItem++    
            if(this.activeItem >= this.slides.images.length){
                this.activeItem = 0
            }
        },
        prev(){          
            if(this.activeItem === 0){
                this.activeItem = this.slides.images.length
            }
            this.activeItem--
        },
        // event on thumbs 
        activeByThumb(num){
            this.activeItem = num 
        },  
        // timeout interval 
        autoPlay() {
            this.myInterval = setInterval(this.next,3000)      
        },
        stopPlayer(){
            clearInterval(this.myInterval)
        },
        hoverT(){
            this.stopPlayer()
        },
        hoverF(){
            this.autoPlay()
        }
        
        
    },
    mounted() {
            this.autoPlay()      
    },

    
}).mount("#app") 

