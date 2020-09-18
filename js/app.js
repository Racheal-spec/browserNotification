const chromeButton = document.querySelector('.chromeBtn');

chromeButton.addEventListener('click', getNotified);

function getNotified(event) {

    event.preventDefault();

if(!window.Notification){
    //this is to check if your browser supports notification or not
    console.log('Notification not supported');
}else{
    if (Notification.permission === 'granted'){
        //console.log('Hi Tomisin')...this is just to put you in check.;
        const reminder = new Notification ('Hi Tomisin', {
            body: 'This is your todo reminder',
            icon: 'icon1.svg',
        });
        const news = new Notification ('Hi Tomisin', {
            body: 'You have new releases, check them out',
            icon: 'icon2.svg',
        });
    }else{
        Notification.requestPermission().then((permission) =>{
            
            //This method returns a promise that gets executed depending on the user's choice, either allowed or blocked.
           
            if (permission === 'granted') {
                //console.log('Hi Tomisin');
                const reminder = new Notification ('Hi Tomisin', {
                    body: 'Your todo reminder',
                    icon: 'icon1.svg',
                });
                const news = new Notification ('Hi Tomisin', {
                    body: 'You have new releases, check them out',
                    icon: 'icon2.svg',
                });
            }else{
                console.log('Notification blocked');
            }
        }).catch(err => {
            console.err(err);
        })
            
    }
}

}
 getNotified();
