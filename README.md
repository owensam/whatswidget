## WhatsWidget

**WhatsWidget** is a simple javascript widget that allow your customers to talk to you directly on whatsapp. It's based on [this post](https://blog.jenyay.com/building-javascript-widget/) by Jenyay so if you're interested in building javascript widgets, start there 👍.

### Usage

### Configuration options

|                       | **description**                                                                                                                                          | **required** | **default** |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|
| **message**           | Widget message.                                                                                                                                          | No           |             |
| **phone**             | **Don't forget** to add the prefix of your country, for example, 34666666666 (Spain uses +34 for the prefix, don't use + or parentheses for the number). | No           |             |
| **floatLeft**         | Align the widget to the left.                                                                                                                            | No           | false       |
| **showMessageAlways** | The message is hidden by default on mobile viewports, it is, however, responsive, so just change to true and it will show on smartphones too.            | No           | false       |
| **useCookies**        | Show the message only once per day, change to false to not use cookies and show the message everytime the user visits your site.                         | No           | true        |