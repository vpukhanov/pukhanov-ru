# pukhanov.ru

Personal website made with [Next.js](https://nextjs.org/), [@next/mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx). I am using [Tailwind CSS](https://tailwindcss.com/) in this version as an experiment.

## Running

```
npm install
cp .env.example .env
npm run dev
```

## Configuration

This website is configured using build-time environment variables. They are documented in the [.env.example](.env.example) file.

## Fonts

Inter is used as the sans and is automatically downloaded from Google Fonts.

ITC Charter is used as the serif. Put your woff2 font files in `src/components/fonts` or configure a different serif font.

## Licensing

Note that the MIT License, located in the root of the repository, applies to the entire repo except for subfolders that have their own license file. In such cases, the license file in the subfolder takes precedence. Notably, the contents of the (prose) folder are covered by an "All Rights Reserved" clause and cannot be used without restriction.
