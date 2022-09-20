# Presentation WebdriverIO vs Cypress

This is project created for the Belgrade office September presentation with Tamara

# Agenda:

### 1. Basic Introduction (5 minutes)

- Brief setup overview
- Quick glance over technical details
- Difference in selector strategies and page objects

### 2. Spec file overview (15 minutes)

- First spec file opens the website and logs in (Saucedemo) site
- First spec file adds specific item to the card and validates it has been added succesfully (Saucedemo) site
- First spec file runs accessability test (Saucedemo) site homepage via AXE plugin.

### 3. Conclusion (5 minutes)

- WDIO vs Cypress technical coverage quick snip.
- Provide repo access with code

### 4. Q&A (5 minutes)

- Questions and Answers


# Setup:

* _yarn wdio:head_ to run in headed mode
* _npx wdio_ to run in headless mode by default
* _npx wdio --spec /relative-path-to-spec-file/_ to run single spec file
