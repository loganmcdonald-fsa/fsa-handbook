---
layout: post
title: Content Management with Netlify CMS
section: getting-started
date: 2024-01-12
description: Learn how non-technical content managers can easily create and edit content using Netlify CMS.
---

## What is Netlify CMS?

Netlify CMS is a content management system that provides a user-friendly interface for editing content stored in Git. It allows content managers to update the site without writing code or using the command line.

### Key Features

- **Intuitive editor** with rich text formatting
- **Media library** for managing images
- **Live preview** of changes before publishing
- **Version control** through Git
- **No database required** - all content stored as files

## Accessing the CMS

Once your site is deployed with authentication configured, you can access the CMS at:

```
Once deployed to your hosting platform, navigate to `https://yoursite.com/admin/` to access the CMS.

## Creating New Content

### Step 1: Navigate to Collections

After logging in, you'll see the available content collections:
- **About** - Posts for the About section
- **Getting Started** - Guides and tutorials

### Step 2: Create a New Post

Click "New About" or "New Getting Started" to create a post:

1. **Enter a title** - This appears as the page heading
2. **Write your content** - Use the rich text editor
3. **Add images** - Upload via the media library
4. **Set metadata** - Date, description, and section are auto-filled
5. **Preview** - Check how it looks before publishing

## Working with the Editor

The Netlify CMS editor provides several formatting options:

**Text Formatting**
- Bold, italic, and strikethrough
- Headings (H1-H6)
- Bulleted and numbered lists
- Blockquotes

**Adding Images**

Click the image icon to upload files from your computer. Images are automatically optimized and stored in the `/src/images/` folder.

**Code Blocks**

For technical documentation, you can insert code snippets:

1. Click the code block icon
2. Select the language (JavaScript, HTML, CSS, etc.)
3. Paste your code
4. The syntax highlighting is applied automatically

Example workflow:

```markdown
1. Write your content in the editor
2. Add images from the media library
3. Preview your changes
4. Save and publish
```

## Publishing Workflow

Netlify CMS supports different publishing workflows:

**Editorial Workflow** (Recommended for Teams)
- **Draft** - Work in progress
- **In Review** - Ready for review by others
- **Ready** - Approved and ready to publish

**Simple Workflow** (For Individual Content Managers)
- Changes publish immediately upon saving

## Best Practices

### For Content Managers

- **Save frequently** - Your work is auto-saved, but manual saves are instant
- **Use descriptive titles** - Helps users and search engines understand content
- **Add alt text** to images for accessibility
- **Preview before publishing** - Catch any formatting issues early

### Image Guidelines

- **Optimal dimensions**: 1200x630px for featured images
- **File size**: Keep under 500KB for fast loading
- **Formats**: Use JPG for photos, PNG for graphics with transparency
- **Naming**: Use descriptive filenames (e.g., `team-meeting.jpg` not `IMG_1234.jpg`)

## Getting Help

If you encounter any issues:

1. Check the preview - many problems are visible before publishing
2. Consult this documentation
3. Contact your site administrator
4. Review the [Netlify CMS documentation](https://www.netlifycms.org/docs/)

The goal is to make content management as simple as possible while maintaining the site's quality and accessibility standards.
