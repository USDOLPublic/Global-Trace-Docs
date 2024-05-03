# usdol-docs



## Convert Confluence pages into HTML

We put docs in a Confluence space named Global Trace docs.

- Go to space Global Trace docs -> Space settings -> Manage space -> Export space
- Choose Export Format: HTML
- Select Export HTML Options: Custom Export. Then choose pages to export

## Backend code documentation

Generate backend code documentation of [usdol-backend](https://gitlab.com/diginexhk/usdol/usdol-backend) using Compodoc.

```
npx @compodoc/compodoc -p tsconfig.json -s -n Global Trace BE documentation'
```

> [!WARNING]
> If you export Confluence pages, copy confluence/Global-Trace-Documentation_NUMBER.html to index.html and add "confluence/" to src paths and href of links
> Remove the part of who owns / modified each page
> Replace page title, breadcrumb to Global Trace docs
