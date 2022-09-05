> _Note:_ Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report issues. This repository is only for the creation of the nuget package.

# MaterialDesignIcons for [MudBlazor](https://github.com/Garderoben/MudBlazor)

This package provides all icons as path data (svg) from [Material Design Icons](https://materialdesignicons.com). The icons are divided into Normal and Outline variants.

## Installation

Just install the NuGet package.

```
dotnet add package MudBlazor.MaterialDesignIcons
```

Add the following using statement in `_Imports.razor`.

```c++
@using MudBlazor.MaterialDesignIcons
```

## Usage

```html
<MudIcon Icon="@MaterialDesignIcons.Normal.Egg" Color="Color.Default" />
<MudIcon Icon="@MaterialDesignIcons.Outline.Egg" Color="Color.Default" />
```

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- React: [MaterialDesign-React](https://github.com/Templarian/MaterialDesign-React)
- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
- Font-Build: [MaterialDesign-Font-Build](https://github.com/Templarian/MaterialDesign-Font-Build)
- Desktop Font: [MaterialDesign-Font](https://github.com/Templarian/MaterialDesign-Font)

## Learn More

- [MaterialDesignIcons.com](https://materialdesignicons.com)
- https://github.com/Templarian/MaterialDesign
