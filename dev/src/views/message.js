import html from './message.html';
import './message.css';

let body;
let tmp = document.createElement('div');
tmp.innerHTML = html;
let container = tmp.querySelector('.whtsc');

/* Initial configuration for the widget */
export function config(config) {    
	// Add animations if the option is enabled
	if(config.useAnimations) {
		container.querySelector('.whtsm').classList.add('slide');
		container.querySelector('.whatswidget-button').classList.add('zoomIn');
	}
	
	// Welcome message
    if(config.message) {
        // If we use cookies, check to see if the cookie exists already
        if(config.useCookies && document.cookie.match(/^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/) == null ) {
			container.querySelector('.whtsm').innerHTML = `${config.message} <span></span>`;
			// Event listener to close the message on the widget
			container.querySelector('.whtsm span').addEventListener('click', closeMessage);
			// Create the cookie
			createCookie('showmessage', 'no', 1);
		// Show the message if we're not using cookies
        } else if (!config.useCookies) {
			container.querySelector('.whtsm').innerHTML = `${config.message} <span></span>`;
			// Event listener to close the message on the widget
			container.querySelector('.whtsm span').addEventListener('click', closeMessage);
		// Remove the div that contains the welcome message if we're using the cookie and it already exists
        } else {
            container.querySelector('.whtsm').remove();
		}
	// If there's no welcome message, remove that div
    } else {
        container.querySelector('.whtsm').remove();
	}
		
	// Add whatsapp link
    if(config.phone) {
		try {
			let randomPhone = config.phone[Math.floor(Math.random() * config.phone.length)];
			
			container.querySelector('.whatswidget-button').href = `https://api.whatsapp.com/send?phone=${randomPhone}`;
		} catch (error) {
			console.error('whatswidget -> cannot select phone number');
		}
	}

	// Show the widget on the left side of the page
    if(config.floatLeft) {
        container.classList.add('left');
	}

	// Show the widget message on mobile devices
    if(config.showMessageAlways) {
        container.classList.add('show-message-always');
	}

	// Add the widget to the body of your page
    body = document.getElementsByTagName('body')[0];
    body.appendChild(container);
}

/* Close widget welcome message */
export function closeMessage() {
    container.querySelector('.whtsm').style.display = 'none'
}

/* Function to create a cookie to show the message only once every day */
/* Taken from here https://stackoverflow.com/questions/6561687/how-can-i-set-a-cookie-to-expire-after-x-days-with-this-code-i-have */
function createCookie(name, value, days) {
	console.log('creating cookie');
	
	let date;
	let expires;

    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
	}

    document.cookie = name+"="+value+expires+"; path=/";
}