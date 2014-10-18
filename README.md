moodee - emotional insight into your email
======

Office 365 App Developers of the World Unite! (Crickets...)

Moodee is an example Office 365 app created by Alek and Jon for a GoDaddy hack day in October 2014. So, it turns out that O365 apps are really just javascript / html / css single page apps. While the project is a little rough around the edges, moodee demonstrates how to create weird soap headers to read mail messages through the Office 365 Javascript API and pipe them to an external sentiment analysis api for further examination. Big ups to Rob for some guidance navigating the oddity that is makeEwsRequestAsync and Josh at Lymbix.com, the provider of the backend sentiment analysis tool. Thanks!

If you're looking to test this in your Office 365 account, you'll need developer access and whatnot. From there, take a look at the MailReadTest.xml manifest... you'll note that this example is hosted at https://moodee.azurewebsites.net, but that might not be true in the future. (This is only a demo...) If our server isn't up anymore, you'll need to host the assets somewhere that supports SSL and make the appropriate change to the manifest.
