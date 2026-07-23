Storybird Grove™

Crechè Story Garden Edition

A private, offline-first storytelling garden for preschool and early-elementary learners.

Storybird Grove™ helps young children build imaginative stories by choosing a character, a place, an action, and—when using Growing Story mode—a feeling and an ending. The app combines curated vocabulary, gentle story templates, local narration, printable story pages, and a private Story Nest that remains on the learner’s device.

Khaemenes Academy · Verve N Veda · Crechè PreSchool

Overview

Storybird Grove™ is a self-contained educational web application built with HTML, CSS, and vanilla JavaScript. It runs directly in a modern browser and does not require an account, subscription, external library, advertising network, analytics service, or online story generator.

The application is designed to support:

Oral language and vocabulary development

Imaginative storytelling

Story sequencing

Feelings and social-emotional learning

Beginning, middle, and ending awareness

Listening and read-aloud participation

Early writing readiness

Parent-guided and classroom storytelling

All story ingredients are selected from curated local content included inside the HTML file.

Main Story Modes

Little Story

Little Story mode creates a short, child-friendly story starter from three choices:

Character

Place

Action

This mode is intended for quick imaginative play, oral storytelling, and preschool participation.

Growing Story

Growing Story mode expands the activity into a simple three-part story using:

Character

Place

Action

Feeling

Ending

The resulting story includes a beginning, a middle development, and a gentle conclusion. A parent, teacher, or child can use it as a read-aloud story, writing prompt, dramatic-play idea, or illustration prompt.

Child-Friendly Features

Surprise Me chooses a playful combination of story ingredients.

Magic Story tries several local combinations and selects a strong result using a randomized scoring system.

Make My Story builds a story from the child’s selected cards.

Large character, place, action, feeling, and ending cards

Colorful local story illustrations

Automatically generated story titles

Ten gentle story moods

Read-aloud narration

Pause, resume, and stop narration controls

Copy and print controls

Private story saving

Favorite stories

Gentle status messages and encouragement

Mobile, tablet, mouse, touch, and keyboard support

Magic Story is a local randomized selection feature. It does not contact an artificial-intelligence service or send the child’s choices outside the device.

Story Moods

The story mood changes the style and emotional tone of the generated story.

Gentle

Adventure

Mystery

Funny

Poetic

Magical

Discovery

Friendship

Cozy

Tiny Challenge

The vocabulary and templates remain curated and age-appropriate.

84 Garden Paths

The app includes 84 Garden Paths. Each path provides a repeatable collection of story choices and a themed learning focus.

Garden Paths are designed to encourage exploration of topics such as:

Kindness

Feelings

Friendship

Helping

Nature

Weather

Curiosity

Sharing

Courage

Problem solving

Imagination

New beginnings

Each Garden Path keeps its own local choice progression so children can revisit a path without losing the sequence used elsewhere.

The Story Nest

Completed stories can be saved to the private Story Nest.

The Story Nest supports:

Loading a saved story

Reading a saved story aloud

Marking and filtering favorites

Preventing accidental duplicate saves

Printing saved stories

Exporting individual stories

Exporting a complete local backup

Importing a valid Storybird Grove backup

Merging an imported Nest with existing stories

Replacing the current Nest after confirmation

Deleting individual stories through Grown-Up Tools

Clearing the entire Nest through a protected confirmation step

The application stores text and settings rather than large image files, helping conserve browser storage.

Grown-Up & Teacher Tools

Advanced controls are placed inside a separate expandable section so the main activity remains approachable for young children.

Available controls include:

Garden Path selection

Story pronoun selection: they, she, or he

Story mood selection

Magic Story trial strength

Narration speed

Animation on/off

Simple-layout mode

Larger-text mode

High-contrast mode

Story Nest export

Story Nest import

Story Nest printing

Story Nest clearing

Destructive actions use an in-app confirmation panel rather than a browser alert.

Accessibility

Storybird Grove™ includes several accessibility-minded features:

Large touch targets

Visible keyboard focus indicators

Descriptive labels

aria-pressed states for selectable controls

Live status announcements

Reduced-motion support

Optional animation disabling

Larger-text mode

High-contrast mode

Simplified layout option

Keyboard-compatible controls

Device-based speech synthesis

Print-safe dark-text formatting

Responsive layouts for phones, tablets, laptops, and desktops

Narration voices vary by browser, operating system, and device because the app uses locally available browser speech voices.

Privacy and Sovereign Design

Storybird Grove™ is designed as a local-first learning tool.

No accounts

No advertising

No analytics

No tracking pixels

No external JavaScript libraries

No external AI service

No cloud database

No required registration

No student information transmitted to outside services

No required internet connection after the file has been downloaded

Stories, favorites, drafts, and preferences remain in the browser’s local storage

The app may be used as a standalone local file or hosted as a static page.

Local Data

The app stores the following information locally in the browser:

Saved stories

Favorite status

Last visited Garden Path

Per-path choice progression

Display preferences

Narration preferences

Current unfinished selections

Current unfinished story draft

Clearing browser site data, using private browsing, changing devices, or changing browsers can remove this information. Use Export Backup periodically to preserve the Story Nest.

No learner name is required.

Import and Export Safety

The import system accepts complete Storybird Grove backup files only.

Before importing, the app:

Checks the file size

Confirms the file identifies itself as a Storybird Grove backup

Validates the presence of a Story Nest

Sanitizes imported story records and settings

Limits imported data to safe local boundaries

Offers Merge, Replace, or Cancel

A single-story export cannot silently replace the complete Story Nest.

How to Use

Open index.html in a modern browser.

Choose Little Story or Growing Story.

Choose one card from each visible garden bed.

Select a story mood.

Press Make My Story.

Use Read, Pause, Resume, or Stop for narration.

Print, copy, favorite, or save the finished story.

Open Grown-Up & Teacher Tools for backups, accessibility settings, narration speed, and Garden Path controls.

Children can also press Surprise Me or Magic Story when they do not want to choose every card manually.

Installation

No build process is required.

Local Use

Download index.html.

Open it in Chrome, Edge, Firefox, Safari, or another modern browser.

Keep the file on the device for offline use.

Some browsers limit clipboard, download, or speech functions when an HTML file is opened directly. Hosting the file through HTTPS usually provides the most dependable experience.

GitHub Pages

Place index.html in the root of the Crechè PreSchool repository.

Commit and push the file.

Open the repository’s Settings.

Select Pages.

Choose the publishing branch and root folder.

Save the Pages configuration.

The app requires no package installation, framework, server, API key, or database.

Suggested Repository Structure

/
├── index.html
├── README.md
├── LICENSE.md
├── SECURITY.md
└── THIRD_PARTY_NOTICES.md

Browser Compatibility

Recommended current browsers:

Google Chrome

Microsoft Edge

Mozilla Firefox

Safari

Modern Android browsers

Modern iPhone and iPad browsers

Functionality may vary by browser:

Speech voices depend on the device.

Clipboard access may require HTTPS.

File downloads may use different prompts on mobile devices.

LocalStorage may be temporary or unavailable in private-browsing modes.

Printed appearance can vary slightly by printer and browser.

Educational Use Ideas

Storybird Grove™ can be used for:

Morning-circle storytelling

Homeschool language arts

Preschool oral-language practice

Beginning creative writing

Social-emotional discussions

Story sequencing

Dramatic play

Illustration activities

Parent-child storytime

Classroom story starters

Speech and vocabulary practice

Printable story collections

A teacher or parent can extend a generated story by asking:

What happened before this?

What might happen next?

How did the character feel?

What helped solve the problem?

Can you draw the setting?

Can you act out the story?

Can you tell the same story with a different ending?

Technical Design

Single-file HTML application

Semantic HTML

Responsive CSS

Vanilla JavaScript

Browser localStorage

Browser Speech Synthesis API

Local SVG illustration generation

JSON import and export

Browser printing

No external dependencies

The internal Story Nest backup format is currently version 2 and includes migration support for compatible stories from the earlier Storybird Grove storage format.

Development Principles

Future changes should preserve the project’s central qualities:

Gentle rather than overstimulating

Playful without becoming confusing

Educational without feeling punitive

Private and local by default

Easy for young children to explore

Useful to families, homeschoolers, and classrooms

Supportive of imagination and oral language

Transparent about how story generation works

Functional as one downloadable HTML file

Free from advertising and outside-service dependencies

Launch Checklist

Before publishing a new release:

Test Little Story and Growing Story modes.

Test every story mood.

Test Surprise Me, Magic Story, and Make My Story.

Test saving, loading, favoriting, and deleting stories.

Confirm duplicate-save protection.

Export a backup and import it with Merge.

Import a backup with Replace and confirm the warning appears.

Confirm an unrelated JSON file is rejected.

Test Read, Pause, Resume, and Stop.

Test story and Story Nest printing.

Test phone, tablet, and desktop layouts.

Test larger text, simple layout, high contrast, and reduced motion.

Test with keyboard navigation.

Test after refreshing the page to confirm local draft restoration.

Ownership

© 2026 Jennifer Kay Pearl, Verve N Veda, and Khaemenes Academy.

All Rights Reserved.

Storybird Grove™, its curriculum, writing, story banks, templates, design, structure, concepts, artwork system, interface, and source code are protected intellectual property.

No permission is granted to reproduce, redistribute, republish, modify, commercialize, train systems on, extract datasets from, or create derivative works from this project without prior written authorization from the owner.

Review LICENSE.md for the repository’s complete licensing terms.

Project Identity

Storybird Grove™ — Crechè Story Garden EditionVerve N Veda · Khaemenes Academy · Crechè PreSchoolCreated by Jennifer Kay Pearl
