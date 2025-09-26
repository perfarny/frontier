# Frontier Admin Control

A mock-up of the Frontier Admin Control for Microsoft Admin Center.

## Overview

This control allows M365 Admins to configure Frontier features across different application types:
- **Web Apps**: Configure Frontier features for web-based applications
- **Office win32**: Configure Frontier features for Office desktop applications

Each group provides three mutually exclusive access levels:
- **No access**: Frontier features are disabled
- **All users**: Enable Frontier features for all users
- **Specific user groups**: Enable Frontier features for selected user groups only

## Features

- Modern, responsive design following Microsoft Fluent Design System
- Interactive radio button groups with hover and selection states
- Settings persistence using localStorage
- Save/Cancel functionality with status feedback
- Mobile-responsive layout

## Usage

1. Open `index.html` in a web browser
2. Select access levels for Web Apps and Office win32
3. Click "Save" to persist settings or "Cancel" to revert changes
4. Settings are automatically saved to localStorage for demonstration

## Files

- `index.html` - Main HTML structure
- `styles.css` - Microsoft Admin Center-inspired styling
- `script.js` - Interactive functionality and settings management

## Technical Implementation

The control is built using vanilla HTML, CSS, and JavaScript to ensure broad compatibility. It includes:

- Semantic HTML structure with proper accessibility attributes
- CSS Grid and Flexbox for responsive layout
- Modern JavaScript with ES6+ features
- Local storage for settings persistence
- Console logging for debugging and demonstration

## Demo

To see the control in action, simply open `index.html` in any modern web browser.
