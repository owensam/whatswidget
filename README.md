## WhatsWidget

**WhatsWidget** is a simple javascript widget that allow your customers to talk to you directly on whatsapp. It's based on [this post](https://blog.jenyay.com/building-javascript-widget/) by Jenyay so if you're interested in building javascript widgets, start there 👍.

### Usage

```javascript
(function (w,d,s,o,f,js,fjs) {
    w['ww']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) }
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0]
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs)
}(window, document, 'script', 'whatswidget', 'https://mascarell.github.io/whatswidget/js/widget.js'))

whatswidget('config', { 
    message: 'Widget example! ❤',
    showMessageAlways: true,
    useCookies: true
})
```

### Configuration options

|                       | **description**                                                                                                                                          | **required** | **default** |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|
| **message**           | Widget welcome message. If not provided, no message will be shown.                                                                                                                                          | No           |             |
| **phone**             | **Don't forget** to add the prefix of your country, for example, 34666666666 (Spain uses +34 for the prefix, don't use + or parentheses for the number). If no number is provided, the widget will not redirect on click. | No           |             |
| **floatLeft**         | Align the widget to the left. By default it's aligned to the right.                                                                                                                           | No           | false       |
| **showMessageAlways** | The message is hidden by default on mobile viewports, it is, however, responsive, so just change to true and it will show on smartphones too.            | No           | false       |
| **useCookies**        | Show the message only once per day, change to false to not use cookies and show the message everytime the user visits your site.                         | No           | false        |

### Run the project locally

```bash
git clone https://github.com/mascarell/whatswidget.git

# to test locally
cd dev
npm install
npm run start

# to build for release
npm run build-production
```


### TODO

- [ ] Make a simple landing page for the widget.
- [ ] (!) Initialize the widget afther the website has loaded.
- [ ] Add picture to the repo showing an example of the widget.
- [ ] (?) Add an option to use a custom image instead of the whatsapp logo.
- [ ] Uglify the widget css (classes on both css and html are way too big, need to make them smaller to reduce widget size, 11.1kb right now).
- [x] ~~Add explanation of how to run the project locally.~~
- [x] ~~Add option to use cookies (to show the message only once per day).~~