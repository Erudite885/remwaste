# Skip Selection Redesign - React Coding Challenge

## Overview
This project focuses on redesigning the Skip Selection page for WeWantWaste. The goal is to improve the user experience (UI/UX) while ensuring the page remains functional, responsive, and accessible across both mobile and desktop devices. 

The target page was designed to allow users to select a skip size based on their location and waste type. I’ve enhanced the page by focusing on clean, maintainable React code, improved UI design, and responsiveness.

## Features
- **Skip Selection**: Users can select a skip size based on their waste type and location.
- **Responsiveness**: The page is fully responsive for both mobile and desktop web browsers.
- **UI/UX Improvements**: Updated layout, improved card styles, better accessibility, and interactive feedback.
- **Dynamic Data**: Skip options are dynamically populated by fetching data from the API: `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- **VAT Calculation**: Prices are calculated with VAT included, ensuring transparency in cost breakdowns.

## Approach

### 1. **Data Fetching**
I’ve used the `fetchSkips()` function to retrieve data from the provided API endpoint. The fetched data is used to dynamically display skip options with relevant details, such as skip size, price, and whether the skip allows heavy waste.

### 2. **UI Components**
The page layout was broken into the following components:
- **SelectSkipStep**: The main page that displays the skip options and handles navigation (next/back).
- **CardList**: Displays all available skips in a responsive grid layout, where each skip is represented as a card.
- **SingleCard**: A card component that displays the skip's details, including its size, price, and availability for heavy waste. This component is interactive, allowing users to select a skip.
- **Popup**: Displays a detailed summary of the selected skip with the price calculation, including VAT.

### 3. **State Management**
- **React useState**: I used `useState` for managing the state of selected skips, loading state, and error handling.
- **React useEffect**: Used to fetch data from the API when the component mounts and update the state accordingly.
  
### 4. **Card Interactivity**
Each skip card has an interactive feature where users can select or deselect a skip. On selection, a popup is triggered to show a detailed price breakdown, including VAT.

### 5. **Styling & Responsiveness**
The layout uses **Material UI** for styling and responsiveness. The grid system automatically adapts for different screen sizes (mobile, tablet, desktop). Additional styles were added to ensure that the page looks polished and modern on all devices.

### 6. **Error Handling**
- If data fetching fails, an error message is displayed to the user.
- A loading indicator is shown while the data is being fetched from the API.

## File Structure

```
/src
  /components
    /selectSkipStep
      - SelectSkipStep.jsx
      - SelectSkipStepStyles.js
    /cardList
      - CardList.jsx
      - CardListStyles.js
    /singleCard
      - SingleCard.jsx
      - SingleCardStyles.js
    /popup
      - Popup.jsx
      - PopupStyles.js
    /backButton
      - BackButton.jsx
    /continueButton
      - ContinueButton.jsx
  /utils
    - api.js
  /config
    - strings.js
  - App.jsx
  - index.js
  - styles.css
```

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/skip-selection-redesign.git
   cd skip-selection-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the project.

## Technologies Used
- **React**: For building the user interface.
- **Material UI**: For components and styling.
- **Vite**: For fast development and optimized builds.
- **JavaScript (ES6)**: For the core application logic.

## Improvements Made
- **UI/UX Overhaul**: Cleaned up the card design, improved interaction patterns, and added dynamic feedback when selecting skips.
- **Responsiveness**: Ensured the layout adjusts properly across different devices.
- **Code Quality**: Clean, maintainable React code with hooks for managing state and lifecycle events.

## Future Enhancements
- **Form Validation**: Add validation for input fields (e.g., postcode).
- **Search & Filter**: Implement a search and filter feature to make it easier for users to find skips based on size and cost.
- **Accessibility Improvements**: Further improve accessibility (e.g., adding ARIA labels, keyboard navigation).

## Demo

You can view the live demo of the project here: [Insert Sandbox Link]

## Conclusion
This project was a fun and challenging opportunity to showcase my front-end development skills, particularly in React, UI/UX design, and responsiveness.
