# GitHub Pages Setup Guide (15 minutes)

Follow these steps to make your Void Visualizer live on the web!

## Step 1: Push Your Code to GitHub

If you haven't already:

```bash
git add .
git commit -m "Initial commit: Void Visualizer"
git push origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/TheOmegaFett/void-visualizer

2. Click **Settings** (top navigation bar)

3. Scroll down in the left sidebar and click **Pages**

4. Under "Source":
   - **Branch**: Select `main` (or `master` if that's your default)
   - **Folder**: Select `/ (root)`
   - Click **Save**

5. Wait 1-2 minutes for GitHub to build your site

6. Refresh the page - you'll see a green box with:
   > ✅ Your site is live at https://theomegafett.github.io/void-visualizer/

## Step 3: Test Your Live Site

1. Click the URL or visit: https://theomegafett.github.io/void-visualizer/

2. You should see the Void Visualizer load instantly!

3. **Click anywhere** to unlock audio and spawn flow nodes

4. Share the link with friends! 🎉

## Step 4: Create Your "Good First Issues"

Now that the site is live, create beginner-friendly issues:

1. Go to your repo's **Issues** tab

2. Click **New Issue**

3. You'll see templates for:
   - Add Mute/Unmute Toggle
   - Add Particle Count Slider  
   - Add Mobile Touch Support
   - Add Record Animation Button
   - Improve README Quickstart

4. Click each template and **Submit** to create the issues

5. GitHub will auto-apply labels: `good first issue`, `help wanted`

## Troubleshooting

**Problem**: Page shows 404 error  
**Solution**: 
- Make sure you selected the correct branch (`main` or `master`)
- Check that `index.html` is in the root folder, not a subdirectory
- Wait 2-3 minutes - GitHub Pages can take time to deploy

**Problem**: Page loads but shows blank screen  
**Solution**:
- Open browser console (F12) to check for errors
- Verify p5.js CDN is loading (check Network tab)
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Problem**: Console shows "p5.js not defined"  
**Solution**:
- Check your internet connection (p5.js loads from CDN)
- Verify `index.html` has the correct script tags
- Consider downloading p5.js locally if CDN is blocked

## Next Steps

1. ✅ Update README.md with your live GitHub Pages URL
2. ✅ Test on mobile devices
3. ✅ Share the link on social media
4. ✅ Invite contributors to tackle your "good first issues"

## Custom Domain (Optional - Advanced)

Want a custom URL like `voidvisualizer.com` instead of the GitHub subdomain?

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. In GitHub Pages settings, enter your custom domain
3. In your domain registrar, add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: theomegafett.github.io
   ```
4. Wait 24-48 hours for DNS propagation
5. Enable "Enforce HTTPS" in GitHub Pages settings

---

**You're done!** 🚀 Your Void Visualizer is now live for the world to see.
