moodee
======

Office 365 App Developers of the world unite! (Crickets...)

Moodee is an example Office 365 App created for a GoDaddy hack day in October 2014. While the project is a little rough around the edges, it demonstrates how to create weird soap headers to read messages through the Office 365 javascript API. Big ups to Rob for some guidance navigating the oddity that is makeEwsRequestAsync and Josh at Lymbix.com, the provider of the backend sentiment analysis tool. Thanks!

If you're looking to test this in your Office 365 account, you'll need developer access and whatnot. From there, take a look at the MailReadTest.xml manifest... you'll note that this example is hosted at https://moodee.azurewebsites.net, but that might not be true in the future. (This is only a demo...) If our server isn't up anymore, you'll need to host the index.html somewhere that supports SSL. 
