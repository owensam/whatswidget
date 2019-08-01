import html from './message.html';
import './message.css';

let body
let tmp = document.createElement('div')
tmp.innerHTML = html
let container = tmp.querySelector('.whtsc')

/* TODO 
    * Animation when showing the message
    * Rename all the classes on the css / html so it's shorter and the widget is lighter
*/    

/* Initial configuration for the widget */
export function config(config) {    
    if(config.message) {// Welcome message
        // If we use cookies, check to see if the cookie exists already or check if we don't use cookies
        if(config.useCookies && document.cookie.match(/^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/) == null ) {
            container.querySelector('.whtsm').innerHTML = `${config.message} <span></span>`
            container.querySelector('.whtsm span').addEventListener('click', closeMessage) // Event listener to close the message on the widget
            createCookie('showmessage', 'no', 1) // Create the cookie
        } else if (!config.useCookies) { // Show the message if we're not using cookies always
            container.querySelector('.whtsm').innerHTML = `${config.message} <span></span>`
            container.querySelector('.whtsm span').addEventListener('click', closeMessage) // Event listener to close the message on the widget
        } else // Remove the div that contains the welcome message if we're using the cookie and it already exists
            container.querySelector('.whtsm').remove()
    } else // If there's no welcome message, remove that div
        container.querySelector('.whtsm').remove()
        
    if(config.phone) // Add whatsapp link
        container.querySelector('.whatswidget-button').href = `https://api.whatsapp.com/send?phone=${config.phone}`
    if(config.floatLeft) // Show the widget on the left side of the page
        container.classList.add('left')
    if(config.showMessageAlways) // Show the widget message on mobile devices
        container.classList.add('show-message-always')


    body = document.getElementsByTagName('body')[0]
    body.appendChild(container)
}

/* Close widget welcome message */
export function closeMessage() {
    container.querySelector('.whtsm').style.display = 'none'
}

/* Function to create a cookie to show the message only once each day */
/* Taken from here https://stackoverflow.com/questions/6561687/how-can-i-set-a-cookie-to-expire-after-x-days-with-this-code-i-have */
function createCookie(name, value, days) {
    console.log('creating cookie')
    let date, expires
    if (days) {
        date = new Date()
        date.setTime(date.getTime()+(days*24*60*60*1000))
        expires = "; expires="+date.toGMTString()
    } else 
        expires = ""

    document.cookie = name+"="+value+expires+"; path=/"
}