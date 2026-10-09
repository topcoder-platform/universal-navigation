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

## App drawer icons
The app drawer icons are 32x32 tiles: a tinted rounded square (`rx="4"`) with a 24x24 glyph centered on it, colored per drawer group:

| Groups | Tile | Glyph |
| --- | --- | --- |
| Earn, Delivery & Payments | `#DEFBE6` | `#198038` |
| Compete | `#FFF2E8` | `#BA4E00` |
| AI, Insights | `#FFE5EC` | `#C1294F` |
| Learn | `#E5F3FF` | `#2C5771` |
| Connect, Community & Content | `#F6F2FF` | `#8A3FFC` |
| Sales & Customers | `#FCF4D6` | `#8E6A00` |
| Team & Platform | `#D9FBFB` | `#007D79` |

Glyphs come from [Material Symbols Rounded](https://github.com/google/material-design-icons) (weight 600, Apache-2.0), except `copilot-portal`, `mm`, `sales-pipeline` and `discord`, which use [Tabler Icons](https://tabler.io/icons) (MIT).
Each icon also exists as `./{file-name}.svg`; keep its `<symbol>` in `./sprite.svg` in sync, and avoid inner `id`s so symbols don't clash inside the shared sprite.
