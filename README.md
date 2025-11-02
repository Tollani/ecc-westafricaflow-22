# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8e9c0756-7e3c-416e-9ad4-fcd5d4f3a7df

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8e9c0756-7e3c-416e-9ad4-fcd5d4f3a7df) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8e9c0756-7e3c-416e-9ad4-fcd5d4f3a7df) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## How to deploy to cPanel/Traditional Web Hosting

This project is configured for deployment to traditional web hosting services (cPanel, shared hosting) via File Manager upload.

### Prerequisites

- Node.js & npm installed locally
- Access to your hosting cPanel File Manager
- Supabase account (if using backend features)

### Step 1: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials from your [Supabase dashboard](https://supabase.com/dashboard)
3. Never commit the `.env` file to version control

### Step 2: Build the Project

Run the build command locally:

```sh
npm run build
```

This creates a `dist` folder with production-ready files.

### Step 3: Upload to Hosting

1. **Log in to cPanel** and open the File Manager
2. **Navigate to** `public_html` directory (or your domain's root directory)
3. **Delete existing files** in public_html (if any)
4. **Upload all contents** from the `dist` folder:
   - Select all files and folders inside `dist`
   - Upload them directly to `public_html`
   - Do NOT upload the `dist` folder itself, only its contents
5. **Verify .htaccess** file is present (it handles React Router routing)

### Step 4: Verify Deployment

Visit your domain - the application should load and all routes should work correctly.

### Troubleshooting

- **Routes return 404**: Ensure `.htaccess` file is uploaded and mod_rewrite is enabled on your server
- **Blank page**: Check browser console for errors, verify environment variables are set
- **Assets not loading**: Ensure all files from `dist` folder were uploaded to the root of public_html
- **HTTPS issues**: The .htaccess file includes automatic HTTPS redirect rules

### Updating Your Site

To deploy updates:

1. Make changes to your code
2. Run `npm run build` again
3. Upload the new `dist` folder contents to public_html (overwriting existing files)
