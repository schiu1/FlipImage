# FlipImage
 - Uses HTML/CSS/JS

 - The meat of the App is in CSS, due to heavy styling in order to make the flip animation and to create a 2x2 matrix.

 - The HTML has a parent div "container" and four child "section" divs that holds an image and buttons underneath that control the flip direction. The image is actually 2 images with a hidden back. One is rotate 180 degrees and placed in the same spot as the front, designated as the "back" of the card. Encapsulating the image is a "flipper" div that handles the flipping of the card in any direction. This methodology is repeated three more times. 
 
 - When an arrow is pressed, it is highlighted as you need to unflip the card in order to choose another flip direction. How the flip is accomplished is through Javascript bye adding/removing or "toggling" CSS classes for the flipper div. Adding a class applies all the properties of said class immediately, which means a 180 degree rotation will also be applied, causing the card to perform the flip animation. 

 - The last feature of the App is being able to use your own image through a URL! If it is a working URL that leads to an image, it will display in all four images, otherwise it will alert the user if it fails any of these checks. How it checks if it is an image is using a Regular Expression that includes image filetypes. How it checks if it is a valid URL is XMLHttpRequest, which tests to see if the test request status is OK or errornous. 

 This App helped me in:
 - Learning how to make a flip animation and teach me more about general CSS styling
 - Using class toggling to add/remove styles to HTML elements
 - Refreshing my knowledge on regular expressions
 - Learning how to test URLs before applying changes to elements
