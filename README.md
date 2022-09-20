# Presentation WebdriverIO vs Cypress

This is project created for the Belgrade office September presentation with Tamara

# Agenda:

### 1. Basic Introduction (5 minutes)

- Brief setup overview
- Quick glance over technical details

### 2. Spec file overview (15 minutes)

- First spec file tests applying to job on (W&C) site
- Second spec file subscribes to newsletter on (W&C) site
- Third spec file runs accessability test (W&C) site via AXE plugin.

### 3. Conclusion (5 minutes)

- WDIO vs Cypress technical coverage quick snip.
- Provide repo access with code

### 4. Q&A (5 minutes)

- Questions and Answers


# Setup:

* _yarn wdio:head_ to run in headed mode
* _npx wdio_ to run in headless mode by default
* _npx wdio --spec /relative-path-to-spec-file/_ to run single spec file

  Hints:
  - instead of opening url "https://work.co/" for each test case, you can set it up as Before action
  - you can use baseUrl="https://work.co/"
  - you can use page-objects if you want, but if not, no need to use them for this challenge
  - make sure each selector is unique (use data-test-id)
  - use expect for assertion checks (wdio: https://webdriver.io/docs/api/expect-webdriverio/, cy: https://docs.cypress.io/guides/references/assertions#BDD-Assertions)
