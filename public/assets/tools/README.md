# Tools Icons
All the tools icons have been merged in a single sprite file: `./sprite.svg` usign `https://svgsprit.es/`.

This is to reduce the number of network requests when you open the tools selector dropdown.

The svgs are created as symbols inside the sprite file, and to use them, we need to reference them as:
```
<svg class="icon">
  <use xlink:href="#{file-name}"></use>
</svg>

eg:

<svg class="icon">
  <use xlink:href="#discussions"></use>
</svg>
```
