# Kumachi Coffee and Pastries Website
This is a dynamic website we created for a selected local business using HTML, CSS, and JavaScript as a group final project requirement for the WEBPUB course. Its main goal is to enhance the company's marketing strategy by providing a platform for visitors to be informed and have interaction with what the business offers. The website consists of five (5) pages, namely the Landing page, Products page, Feature page, Contact page, and Admin page. Key features include responsive web design, an add-to-cart system, gallery view, rating system, search feature, filtering options, form submission, email/social media marketing mockups, and admin-exclusive pages via login.

## Starting the Web Application
1. After downloading the files, go to the folder where those files are stored and open VSCode.

   ![Screenshot of Kumachi Folder in VSCode](public/images/screenshots/01.png)
   
2. Initially, the node_modules folder is not included. Ensure that all dependencies are installed by opening the terminal in VSCode and run the following command:
   ```
   npm install
   ```
3. To run the website, type this command in the same terminal: Run the website by typing node index.js in the terminal. 
   ```
   node index.js
   ```
   The server would be listening on port 3000.
4. Visit the website by typing the following on the search bar of your preferred browser:
   ```
   localhost:3000
   ```
5. You are all set! Enjoy everything that Kumachi has to offer.

## Navigating Kumachi
### A. Sitewide Features
On every page of Kumachi’s website, except for the Admin page, the following features are present:

1. The Nav Bar

![Screenshot of Kumachi's Nav Bar](public/images/screenshots/02.png)

Users have the ability to move from one page to another with ease by using this nav bar which is present at the top of the screen. The five (5) pages users can go to are: The Homepage, The Products Page, The Featured Page, The Contact Page, and The Admin Page. Additionally, users can also click on Kumachi’s logo on the left side of the nav bar if they want an alternative mode of going back to the homepage. On the right side of the nav bar, there is a “GET A COFFEE” button, which transports users to the Products page, immediately starting the webpage where the products are located. Next to that button is the user’s cart, which can be used to check, edit, delete, and finalize everything the user has selected and wants to buy from the Products page (learn more about this feature in the Products Page segment of this README).

2. The Call to Action Button

![Screenshot of Kumachi's Call to Action Button](public/images/screenshots/03.png)

This call to action button prompts users to order from Kumachi’s fine selection of drinks and pastries by redirecting them to the Products page, where all of the products are located. Of course, the goal of the business is to increase customer orders, which is why this button is prevalent in every webpage.

3. The Footer

![Screenshot of Kumachi's Footer](public/images/screenshots/04.png)

At the end of each webpage, after the call to action button is the website’s footer. Important details about the business, such as its location, opening hours, and social media handles are found here. Additionally, players can also use this footer as a means to navigate to other pages, without needing the nav bar. In the “Coffee” column are the pages available, and the “Shop” column allows users to once again go to the Products page when they are now in the mood to place an order.

### B. Homepage
The homepage, otherwise known as the landing page greets users whenever they visit the website. The website starts with a hero image, containing text and a call to action button that works the same as the nav bar’s “GET A COFFEE” button, and the “GRAB A COFFEE” button before the footer.

![Screenshot of the Homepage's Hero Image](public/images/screenshots/05.png)

After the hero image, users can learn more about Kumachi in the “WHO WE ARE” section of the page. Clicking the “LEARN MORE” button here will redirect users to the Featured page.

![Screenshot of the “WHO WE ARE” Section](public/images/screenshots/06.png)

Still not convinced on trying out Kumachi? Below the “WHO WE ARE” section, there are three (3) things that highlights Kumachi: Ambiance, Quality, and Affordability.

![Screenshot of the “Of all coffee shops, why choose us?” Section](public/images/screenshots/07.png)

Finally, users are greeted with a carousel gallery that automatically slides to the left to feature a new image after every few seconds. Additionally, users have the option to press the left or right buttons, if they want to manually control the gallery.

![Screenshot of the Carousel Gallery](public/images/screenshots/08.png)

### C. Products Page

![Screenshot of the Products Page's Hero Image](public/images/screenshots/09.png)

The products page allows users to browse Kumachi’s fine selection of drinks and pastries.

![Screenshot of Kumachi's Products](public/images/screenshots/10.png)

On the uppermost part of the screenshot above are the search and filtering options. Users can look for a specific product in mind using Kumachi’s built-in search bar. Additionally, users can also filter which type of product they would like to see. By default all products are shown, but users can opt to just check out only Kumachi’s drinks, or only their pastries.

![Screenshot of Using the Search Bar](public/images/screenshots/11.png)

![Screenshot of Filtering Drinks](public/images/screenshots/12.png)

![Screenshot of Filtering Pastries](public/images/screenshots/13.png)

For each product shown, users can click on a product’s image to show the product’s modal, which displays additional information about the selected product.

![Screenshot of Matcha Cookies' Product Modal](public/images/screenshots/14.png)

Once you find something that you want to try out, add the product(s) to your cart by clicking on the “ADD TO CART” button. This will update the cart icon on the right side of the nav bar. A number on the upper-right corner of the cart icon will display the total number of items you have on your cart.

![Screenshot of Cart with Product Inside](public/images/screenshots/15.png)

Clicking on the cart icon will display every product you have added to your cart so far, including each product’s subtotal price and the overall total of your entire cart.

![Screenshot of Checking the Cart](public/images/screenshots/16.png)

Users can add or subtract each item’s quantity in their cart with the plus (+) and minus (-) buttons under each product’s name. If you click on the minus (-) button and the item quantity reaches zero (0), the product will be removed from the cart. Clicking on the “CLEAR CART” button will show a confirmation message, which requires users to confirm if they truly want to clear everything in their cart or not. The “CHECKOUT” button finalizes the user’s order. However, this feature is not yet implemented and clicking on this button would not redirect you to an order confirmation page.

![Screenshot of the “CLEAR CART” confirmation message](public/images/screenshots/17.png)

Lastly, once users have tried out a certain product, they have the ability to rate it using the “GOOD” or “BAD” buttons at the very bottom of the selected product. This will update the product’s rating on top of the “ADD TO CART” button and inside the product’s modal.

![Screenshot of Product Ratings](public/images/screenshots/18.png)

![Screenshot of Product Ratings inside the Product Modal](public/images/screenshots/19.png)

### D. Featured Page

![Screenshot of the Featured Page's Hero Image](public/images/screenshots/20.png)

The featured page showcases various videos, images, and additional information regarding Kumachi. This page is a great way for users to familiarize themselves about the business’s overall theme and purpose.

The videos in this webpage automatically play and loop. Users can pause, mute/unmute, and watch the video in fullscreen with the controls at the bottom part of each video. Additionally, the three (3) dots at the rightmost part of the controls allows users to: download the video, change playback speed, and enter picture-in-picture mode.

![Screenshot of the Available Video Controls](public/images/screenshots/21.png)

Kumachi’s matcha drink video:
![Screenshot of the Available Video Controls](public/images/screenshots/22.png)

Kumachi’s “WHO WE ARE” section with a gallery of its products:
![Screenshot of Kumachi’s “WHO WE ARE” section with a gallery of its products](public/images/screenshots/23.png)

Kumachi’s “Did you know?” section (facts and trivia):
![Screenshot of Kumachi’s “Did you know?” section](public/images/screenshots/24.png)

Kumachi’s “Cold and Hot Brew” and “Cakes and Pastries” sections (about their drinks and pastries):
![Screenshot of Kumachi’s “Cold and Hot Brew” and “Cakes and Pastries” sections](public/images/screenshots/25.png)

Created infographic for the featured page:
![Screenshot of the Created infographic for the featured page](public/images/screenshots/26.png)

Kumachi’s matcha cookies video:
![Screenshot of Kumachi’s matcha cookies video](public/images/screenshots/27.png)

Kumachi’s “WHAT SETS US DIFFERENT?” section (what makes the business unique from its competition):
![Screenshot of Kumachi’s “WHAT SETS US DIFFERENT?” section](public/images/screenshots/28.png)

### E. Contact Page

![Screenshot of the Contact Page's Hero Image](public/images/screenshots/29.png)

In the contact page, users can get in touch with the people working on Kumachi by checking out their location with the map provided, reaching out through phone or social media, and by filling out the “Send a Message” form.

![Screenshot of The contact page’s main content](public/images/screenshots/30.png)

If users opt to fill out the form, they are required to answer every field. Failing to do so will not submit the form. After submitting the form, users are redirected to a page depending on their preferred promotional marketing method. If the user chooses email, he/she will see a mockup of promotional email marketing if Kumachi actually starts sending emails to users who are subscribed to their newsletter. On the other hand, if the user chooses social media, he/she will see three (3) mockups of promotional social media marketing if Kumachi decides to promote their brand using Facebook, Instagram, and YouTube as their social media platforms.

Example submitted forms:

![Screenshot of submitted form example 1](public/images/screenshots/31.png)

![Screenshot of submitted form example 2](public/images/screenshots/32.png)

Social media marketing mockups:

![Screenshot of Social media marketing mockups](public/images/screenshots/33.png)

Email marketing mockup:

![Screenshot of email marketing mockups](public/images/screenshots/34.png)

### F. Admin Page
Once a user has filled out and submitted the form in the contact page, his/her message and user information will be accessible via the admin page. However, you will first be greeted with a login screen, which would require a username and password before you can proceed.

Username: **hanni**
Password: **abc123**

The login screen:

![Screenshot of the admin login screen](public/images/screenshots/35.png)

The admin homepage:

![Screenshot of the admin login screen](public/images/screenshots/36.png)

Clicking on the “CUSTOMER LIST” button will display all user information of the customers who have submitted the form in the contact page.

Example customer list:

![Screenshot of Example customer list](public/images/screenshots/37.png)

Additionally, the admin can search for a specific customer using an ID number or the customer’s name.

Searching for a customer using an ID number:

![Screenshot of ID number search](public/images/screenshots/38.png)

Searching for a customer using the customer’s name:

![Screenshot of customer name search](public/images/screenshots/39.png)

On the rightmost side of the customer’s information, the admin can click on the “VIEW MESSAGE” button to see the customer’s message that he/she submitted through the form. Alternatively, back at the admin homepage, the admin may also choose to click on the “CUSTOMER MESSAGES” button, to also display a customer’s message.

Example of a customer's message:

![Screenshot of customer message example](public/images/screenshots/40.png)

## Key Features
- **Responsive web design** for a seamless experience across all devices, whether mobile, tablet, or desktop.
- **Add-to-cart system** that allows users to easily select, review, and manage their chosen items before checkout.
- **Gallery view** for a visual showcase of products.
- **Rating system** to enable customers to provide feedback on products, helping improve offerings through user insights.
- **Search** and **filtering options** to help users find specific items quickly.
- **Form submission** which allows users to send meaningful messages and feedback.
- **Email/social media marketing mockups** for possible promotions and brand development.
- **Admin-exclusive pages** to allow admins to learn more about their customers and strategize the business’s growth.


## About the Business
The website is designed for **Kumachi**, a coffee and pastry shop located in Pandacaqui, Mexico, Pampanga. The shop offers a cozy, inviting, and comfortable atmosphere inspired by Japanese culture. It operates from 12 nn to 12 am every day except Wednesday. Kumachi initially ran online for 6 months and has now transitioned to a physical store, which has been open for the past two months.

## Team
- [Cayanan](https://github.com/lmcay)
- [David](https://github.com/K8Dvd)
- [Natividad](https://github.com/itsjayceee)
- [Tayag](https://github.com/CJT22)
- [Valdez](https://github.com/jimvdz)

Copyright &copy; 2024 by Kumachi Coffee and Pastries, Cayanan, David, Natividad, Tayag, and Valdez. All rights reserved.
