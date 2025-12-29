# Firefly Mentoring

Firefly Mentoring is a goal-setting and accountability mentoring service designed to help individuals build structure, confidence, and sustainable momentum in their personal or professional lives.
This repository contains the source code for the official Firefly Mentoring website, developed as a client-driven, production-ready web application.

## Project Overview

The objective of this project was to design and build a clear, accessible website that communicates the Firefly Mentoring service, presents available mentoring packages, and enables users to complete bookings and payments online.

The project followed a requirements-first approach, translating service goals and user needs into a structured technical solution.

### Key objectives included:

Clear information architecture and navigation

Consistent visual identity aligned with the brand

Low-friction booking and payment flow

Maintainable, scalable frontend codebase

Planning & Requirements Gathering

Initial planning focused on stakeholder discussions to define:

Target users and common use cases

Core service offerings and package structure

Required user actions (learn → select → book → pay)

Technical constraints around hosting, deployment, and payment processing

These discussions informed wireframing, route structure, and component planning before implementation began.


## Technical Challenges & Solutions

Several practical challenges were addressed during development:

* **UI clarity and content hierarchy**
Early iterations revealed usability issues where design elements competed with key information. Layouts and component spacing were refined to prioritise readability and user flow.

* **Payment integration**
The PayPal React SDK required careful handling of environment variables, component loading order, and error states to ensure payments rendered and processed reliably.

* **Client-side routing and deployment**
Deploying a React + Vite application to GitHub Pages introduced routing and base path issues. These were resolved through correct Vite configuration and route handling to prevent broken navigation and blank refresh states.

* **Scope management**
Feature requests were evaluated against delivery timelines, leading to deliberate deferral of non-essential enhancements to maintain project focus and stability.

##  Tech Stack

This project is built using:

* **React + Vite** — fast frontend development
* **Tailwind CSS** — styling and responsive UI
* **React Router** — page navigation
* **PayPal React SDK** — secure payment integration
* **GitHub Pages** — deployment
