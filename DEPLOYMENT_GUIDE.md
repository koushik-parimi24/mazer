# Netlify Deployment Guide

## Quick Deploy (Recommended)

### Option 1: Manual Upload
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `dist` folder from your project
4. Wait for deployment to complete
5. Your site will be live at the provided URL

### Option 2: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist folder contains your deployable files
```

## Important Notes

- The `dist` folder contains all your built files
- `index.html` is your main dashboard page
- All assets (CSS, JS, images) are in the `assets` folder
- Your site will be accessible at the Netlify URL provided

## Custom Domain (Optional)

1. Go to your site settings in Netlify
2. Click **"Domain settings"**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables (If needed)

If you need environment variables:
1. Go to Site settings → Environment variables
2. Add any required variables
3. Redeploy your site

## Troubleshooting

- If charts don't load, check that ApexCharts CDN is accessible
- If images don't load, verify the asset paths are correct
- Check the browser console for any JavaScript errors

## Performance Tips

- Enable Netlify's asset optimization
- Use Netlify's CDN for faster global delivery
- Enable gzip compression in site settings 