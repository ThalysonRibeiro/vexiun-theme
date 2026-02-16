# Release Workflow (Git Flow)

This document outlines the complete step-by-step process for releasing a new version of the Vexiun Theme. This workflow uses a `develop` branch for new work and a `main` branch for stable, production-ready code.

## Step 1: Development on the `develop` Branch

All new features, bug fixes, and changes should be committed to the `develop` branch.

```bash
# Make sure you are on the develop branch
git checkout develop

# Do your work...
git add .
git commit -m "feat: Add a new feature"
```

## Step 2: Prepare for Release

When you are ready to release a new version, perform these preparation steps on the `develop` branch.

1.  **Update Version Number:**
    Open `package.json` and increment the `version` field (e.g., from `"0.2.5"` to `"0.2.6"`).

2.  **Update Changelog:**
    Open `CHANGELOG.md` and add a new entry for the version you are about to release. Follow the existing format.

3.  **Commit the Preparation:**
    Stage and commit the updated files.

    ```bash
    git add package.json CHANGELOG.md
    git commit -m "chore: Prepare release v0.2.6"
    ```

4.  **Push to `develop`:**
    Push all your changes to the remote `develop` branch.
    ```bash
    git push origin develop
    ```

## Step 3: Merge `develop` into `main` via Pull Request

1.  **Open a Pull Request (PR):**
    - Go to your repository on GitHub.
    - Click on the "Pull requests" tab.
    - Click "New pull request".
    - Set the base branch to `main` and the compare branch to `develop`.
    - Review the changes and click "Create pull request".

2.  **Merge the Pull Request:**
    - After reviewing (and getting approval, if you have collaborators), click "Merge pull request".
    - This officially brings all your new features into the stable `main` branch.

## Step 4: Tag and Publish from `main`

This is the final step that triggers the automated publishing pipeline.

1.  **Switch to the `main` branch locally:**

    ```bash
    git checkout main
    ```

2.  **Pull the latest changes:**
    This ensures your local `main` branch has the merge commit from the pull request.

    ```bash
    git pull origin main
    ```

3.  **Create and Push the Git Tag:**
    Create a new Git tag that **matches the version in `package.json`**. Pushing this tag to GitHub will automatically start the release workflow.

    ```bash
    # Create the tag (e.g., v0.2.6)
    git tag v0.2.6

    # Push the tag to GitHub
    git push origin v0.2.6
    ```

## Step 5: Verify the Release

- Go to the **Actions** tab in your GitHub repository to monitor the pipeline's progress.
- Once it succeeds, a new release will be created in the **Releases** section, and the new version will be published to the VS Code Marketplace.
