#Random Quote Generator
Overview
The Random Quote Generator is a web-based project that dynamically displays random quotes to the user. It also includes features to read the quote aloud and copy the quote to the clipboard. The project utilizes HTML, CSS, and JavaScript to create an interactive and visually appealing user experience.

Technologies Used
HTML: Provides the basic structure of the web page.
CSS: Adds styling to the web page to enhance its appearance.
JavaScript: Implements the functionality to fetch and display random quotes, read quotes aloud, and copy quotes to the clipboard.
Files and Their Roles
HTML (index.html):

Defines the structure of the web page.
Includes a container for displaying the quote and author.
Contains buttons for generating a new quote, reading the quote aloud, and copying the quote.
Links to external FontAwesome icons for aesthetic enhancement.
CSS (styles.css):

Styles the web page, ensuring a visually pleasing layout.
Uses Google Fonts for custom typography.
Provides responsive design to center the content and make the buttons interactive with hover and active states.
JavaScript (script.js):

Adds interactivity to the web page.
Fetches random quotes from the Quotable API.
Uses the Web Speech API to read quotes aloud.
Copies the displayed quote to the clipboard.
How It Works
HTML Structure:

The web page is structured with a main container (Container_box) that holds the header, quote area, and buttons.
The quote area displays the quote and author inside styled containers.
CSS Styling:

The Container_box is styled to appear as a centered card with rounded corners and padding.
Typography is customized using Google Fonts, and colors are chosen to enhance readability and aesthetics.
Buttons and icons are styled with hover and active states to provide visual feedback.
JavaScript Functionality:

Fetching Quotes: When the "New Quote" button is clicked, a request is made to the Quotable API to fetch a random quote. The quote and author are then displayed in the designated areas.
Reading Quotes Aloud: When the volume icon is clicked, the Web Speech API reads the quote and author aloud using a selected female voice if available.
Copying Quotes: When the copy icon is clicked, the displayed quote is copied to the clipboard.
Features
Random Quote Generation:

The application fetches a new random quote each time the "New Quote" button is clicked, ensuring a fresh and diverse set of quotes for the user.
Text-to-Speech:

Users can listen to the quote being read aloud, enhancing accessibility and user engagement.
Clipboard Copying:

Users can easily copy the quote to their clipboard by clicking the copy icon, allowing for quick sharing and saving of quotes.
This project effectively combines web development technologies to create an engaging and interactive application for displaying and interacting with quotes.
