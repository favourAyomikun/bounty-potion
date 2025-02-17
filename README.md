Leaderboard Dashboard Project
Overview
This project is a React-based web application designed to display a leaderboard for traders and groups. It includes features such as filtering, searching, and pagination to enhance user experience. The application also integrates a wallet connection modal for restricted actions.

Features
Leaderboard Display: View traders and groups with detailed statistics.

Filtering: Filter data by time frames (Daily, Weekly, Monthly, All-Time).

Search Functionality: Search for specific traders or tokens by name or wallet address.

Pagination: Navigate through large datasets with ease.

Wallet Integration: Connect your wallet to access restricted features.

Responsive Design: Optimized for both desktop and mobile devices.

Components
Header
Logo: Navigates to the home page.

Navigation Links: Access leaderboards, learn more, and view prizes.

Social Media Icons: Links to Twitter and Discord.

Profile Icon: Placeholder for user profile.

HeaderAlert
Connect Alert: Prompts users to connect their X account.

Feature Release Alert: Notifies users of new feature releases.

LeaderboardPage
Tab Navigation: Switch between Traders and Groups.

Time Frame Selection: Filter data by different time frames.

Search Bar: Search for specific entries.

Wallet Modal: Connect your wallet to access restricted features.

LeaderboardDashboard
Profile Section: Displays user profile information.

Trading Stats: Shows detailed trading statistics.

Leaderboard Table: Displays filtered and paginated data.

Traders
Table Display: Shows trader information with pagination.

Wallet Modal: Connect your wallet to access restricted features.

WalletModal
Modal Dialog: Prompts users to connect their wallet.

Connect Button: Initiates wallet connection.

Cancel Button: Closes the modal.

Pagination
Page Navigation: Navigate through pages of data.

Item Count: Displays the range of items currently shown.

TradingStats
Profile Info: Displays user profile and last trade information.

Stats Grid: Shows detailed trading statistics for different time frames.

Data
leaderboardData.js: Contains sample data for the leaderboard.

traders.js: Contains sample data for traders.