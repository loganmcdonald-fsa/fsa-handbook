---
layout: post
title: Installation and Setup
section: getting-started
date: 2024-01-10
description: A step-by-step guide to installing and running this site locally on your machine.
---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

You can verify your installations by running:

```bash
node --version
npm --version
git --version
```

## Installation Steps

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-org/uswds-starter-site.git
cd uswds-starter-site
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install Eleventy, USWDS, and all other necessary dependencies defined in `package.json`.

### 3. Run the Development Server

Start the local development server:

```bash
npm start
```

The site will be available at `http://localhost:8080`. The server includes hot-reloading, so changes you make to files will automatically refresh in your browser.

## Project Structure

Understanding the project layout will help you navigate and modify the site:

```
uswds-starter-site/
├── src/                    # Source files
│   ├── _layouts/           # Page templates
│   ├── _includes/          # Reusable components
│   ├── about/              # About section posts
│   ├── getting-started/    # Getting Started posts
│   ├── assets/             # Custom CSS and assets
│   ├── images/             # Content images
│   └── index.njk           # Homepage
├── admin/                  # Netlify CMS configuration
├── .eleventy.js            # Eleventy configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

## Making Changes

To create new content:

1. **Add a new post**: Create a Markdown file in the appropriate section folder
2. **Include front matter**: Specify layout, title, section, date, and description
3. **Write content**: Use Markdown for formatting
4. **Preview**: Changes appear immediately in your browser

Example front matter:

```yaml
---
layout: post
title: Your Post Title
section: about
date: 2024-01-15
description: A brief description of your post
---
```

## Next Steps

Once you're comfortable with local development, you can:

- Learn about deploying to static hosting platforms
- Explore [content management with Netlify CMS](#)
- Customize the design and styling
