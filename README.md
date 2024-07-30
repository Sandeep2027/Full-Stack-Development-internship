EdTech Product

This project is a simple EdTech product built with React and Tailwind CSS for the front-end, Firebase for the back-end, and integrated payment systems using PayPal and Stripe. The project also includes Google Analytics for tracking.

1) Project Structure

edtech-product
│   README.md
│   package.json
│   tailwind.config.js
│   postcss.config.js
│   .gitignore
│   vercel.json (if deploying with Vercel)
│
├───public
│       index.html
│       favicon.ico
│
└───src
    │   index.js
    │   App.js
    │   analytics.js
    │   firebase.js
    │
    ├───components
    │       LandingPage.js
    │       SignUpLoginModal.js
    │       PaymentSection.js
    │       CheckoutForm.js
    │
    └───styles
            tailwind.css


2)Features

- Landing page with a clear value proposition
- Sign-up/login functionality
- Payment section with PayPal and Stripe integration
- Coupon code functionality
- Google Analytics setup

3)Prerequisites

- Node.js
- npm or yarn
- Firebase account
- PayPal and Stripe accounts
- Google Analytics account

4)Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/edtech-product.git
    cd edtech-product
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable Authentication and Firestore in your Firebase project.
    - Add a web app to your Firebase project and copy the configuration.
    - Replace the Firebase configuration in `src/firebase.js` with your own.

4. Configure PayPal and Stripe:
    - Replace `YOUR_PAYPAL_CLIENT_ID` and `YOUR_STRIPE_PUBLIC_KEY` in `src/components/PaymentSection.js` with your own keys.

5. Set up Google Analytics:
    - Create a Google Analytics account and get your tracking ID.
    - Replace `YOUR_GOOGLE_ANALYTICS_TRACKING_ID` in `src/analytics.js` with your own tracking ID.

5) Running the Project

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).

6) Deploying the Project

You can deploy your React application using a service like Vercel or Netlify.

## Deploy with Vercel

1. Install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```

2. Deploy your application:
    ```bash
    vercel
    ```

### Deploy with Netlify

1. Create a new site from Git in Netlify.
2. Link your GitHub repository and follow the prompts to deploy.

6)Submission

- Figma Design Files : 
- GitHub Repository:

