NewsHub is a Next.js-based news web application that allows users to stay informed with the latest headlines and articles. 
It leverages MongoDB with Mongoose for data storage, and NextAuth.js for authentication. 
The app supports Farsi language in this version.

## Features
- Each user has two roles: USER and ADMIN.
- The default role is USER, but you can manually change this in the database.
- NextAuth.js provides secure authentication for user sign-in and sign-up.
- After logging in, ADMIN users gain access to the admin page.
- Admins can insert news articles and manage existing ones.
- News articles include a title, content, and an image selected from the local assets folder.
- All users can access the news page to view articles.
- Clicking on a specific news item leads to its dedicated page.
