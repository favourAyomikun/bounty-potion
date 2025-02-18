```markdown
# Bounty Potion

A web application deployed on Vercel: [Bounty Potion](https://bounty-potion-l962.vercel.app/).

## 🎨 Design Decisions

- **React.js with Vite**: Chosen for its fast development environment and optimized production builds, ensuring a smooth developer experience and great performance.
- **Tailwind CSS**: Used for styling to maintain a consistent and scalable design system.
- **Component-Based Architecture**: Ensures reusability and maintainability of UI elements.
- **Vercel Deployment**: Provides seamless CI/CD integration with GitHub, ensuring quick updates and rollbacks.

## 🔍 Assumptions

- Users will access the application from modern web browsers.
- The project requires minimal backend interactions, focusing on a frontend-driven approach.
- The deployment process should be simple and automated using Vercel.

## 🛠️ Testing the Functionality

To test the functionality locally:

```bash
# Clone the repository
git clone https://github.com/your-repo/bounty-potion.git

# Navigate into the project directory
cd bounty-potion

# Install dependencies
npm install

# Run the development server
npm run dev
```

- Open `http://localhost:5173/` in a browser.
- Verify UI responsiveness and interaction.
- Check console logs for any errors.

## 🚀 Deployment Guide

### Staging Environment

1. Push changes to the `staging` branch.
2. Connect the repository to Vercel.
3. Configure a separate staging environment in Vercel settings.
4. Deploy automatically via Vercel.
5. Access the staging environment via the generated Vercel URL.

### Production Environment

1. Merge `staging` into `main`.
2. Vercel will automatically trigger a production deployment.
3. Verify the deployment at `https://bounty-potion-l962.vercel.app/`.
