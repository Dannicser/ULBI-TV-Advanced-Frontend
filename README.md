## Configuration
**Full configuration** from zero **(Webpack)**. Configured **React**, **Typescript**, **Babel**, **Scss**, **Css modules**, **Prettier** and **testing enviroment** -
**Jest**, **Storybook**, **Loki**. Using a lot of loaders and plugins.

## UI
Library components. 15+ UI components including **modal windows with portals, dropdowns, sidebar, buttons with different themes, skeletons, lazy images, drawer, avatars, etc**.
Made all components accessible and semantic.

## Architecture
Architecture. Modules Decomposition. Business entities. Weak coupling and strong coupling. Reuse. Specific examples

## Optimization

Optimization, using a lot of **memo, useMemo, useCallback**. Bundle size analysis. Using bundle analyzers. **Asynchronous components**. 
**Asynchronous Redux reducers**. Reducer manager and creation of a small library for implementing asynchronous reducers. **Module isolation. Using debouce and throttle**

## Hard Tasks

Filters, search, sorting, infinite scroll, multi-block pages

## Themes and styles

SCSS modules and theming. **Three color themes of the application** (dark, light, orange) and possibility to add new ones for several minutes

## Storybook and screenshot testing

## Unit tests

Test each developed module **(selectors, async thunks, reducers, components)** using React Testing Library and Jest.

## Errors
Using **ErrorBoundary** for catching errors

## Routing

Configured access for pages, by authorization, or by role. **Also to maintain a minimum bundle size**. I moved the pages into separate chunks.

## i18n

Internationalization. Implemented two languages (Russian and English) into the interface. 
I divided the translations into chunks for loading them in portions, **so as not to increase the size of the bundle**.

## Typescript

Configured TS (tsconfig), it works with webpack, **used it with union types, generic components**

## Data Normalization 
Working with Entity Adapter


