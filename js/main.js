var app = new Vue (
    {
    el: '#app',
    data: {
        sendMessage: {
            date: "now",
            text: "",
            status: "sent",
        },
        user: {
            userName: 'Carlo Carli',
            avatar: 'img/avatar_1.jpg',
            visible: true,
        },
        search:"",
        activeContact: 0,
        contacts: [
            {
                userName: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {   
                        date:   '10/01/2020   15:30:55',   
                        text:   'Hai   portato   a   spasso   il   cane?',   
                        status:   'sent'   
                    },   
                    {   
                        date:   '10/01/2020   15:50:00',   
                        text:   'Ricordati   di   dargli   da   mangiare',   
                        status:   'sent'   
                    },   
                    {   
                        date:   '10/01/2020   16:15:22',   
                        text:   'Tutto   fatto!',   
                        status:   'received'   
                    }  
                ]
            },
            {   
                userName:   'Fabio',   
                avatar:   'img/avatar_2.jpg',   
                visible:   false,
                messages:   [   
                    {   
                        date:   '20/03/2020   16:30:00',   
                        text:   'Ciao   come   stai?',   
                        status:   'sent'   
                    },   
                    {   
                        date:   '20/03/2020   16:30:55',   
                        text:   'Bene   grazie!   Stasera   ci   vediamo?',   
                        status:   'received'   
                    },   
                    {   
                        date:   '20/03/2020   16:35:00',   
                        text:   'Mi   piacerebbe   ma   devo   andare   a   fare   la   spesa.',   
                        status:   'sent'   
                    }   
                ],   
            },  
            {   
                userName:   'Samuele',   
                avatar:   'img/avatar_3.jpg',   
                visible:   false,
                messages:   [   
                    {   
                        date:   '28/03/2020   10:10:40',   
                        text:   'La   Marianna   va   in   campagna',   
                        status:   'received'   
                    },   
                    {   
                        date:   '28/03/2020   10:20:10',   
                        text:   'Sicuro   di   non   aver   sbagliato   chat?',   
                        status:   'sent'   
                    },   
                    {   
                        date:   '28/03/2020   16:15:22',   
                        text:   'Ah   scusa!',   
                        status:   'received'    
                    }   
                ],   
            },   
            {   
                userName:   'Luisa',   
                avatar:   'img/avatar_4.jpg',   
                visible:   false, 
                messages:   [   
                    {   
                        date:   '10/01/2020   15:30:55',   
                        text:   'Lo   sai   che   ha   aperto   una   nuova   pizzeria?',   
                        status:   'sent'   
                    },   
                    {   
                        date:   '10/01/2020   15:50:00',   
                        text:   'Si,   ma   preferirei   andare   al   cinema',   
                        status:   'received'   
                    } 
                ],   
            }, 
        ]
        
        
    },
    
    methods: {
        chatSwap: function (x) {
            this.activeContact = x;
        },
        addNewMessage(y){
            if(this.sendMessage.text !== ""){
               this.contacts[y].messages.push(this.sendMessage);
               this.sendMessage = {
                   date: "now",
                   text: "",
                   status: 'sent'
                }; 
            };
            setTimeout(() => {
                let reply =  {   
                    date:'now',   
                    text:'ok',   
                    status:'received'  
                };
                this.contacts[this.activeContact].messages.push(reply);
                    
            }, 1000);
            
        },
        

    },
    
    
});