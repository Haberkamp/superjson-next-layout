# Issue

It is not possible to use next.js layouts with the superjson babel plugin. Once the a page exports a `getServerSideProps` variable for next.js to load data on the server the layout won't be created.

When the `getServerSideProps` variable gets commented out the layout will appear again.
