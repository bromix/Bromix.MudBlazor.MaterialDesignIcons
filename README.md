![Nuget](https://img.shields.io/nuget/v/Bromix.MudBlazor.MaterialDesignIcons) ![Nuget](https://img.shields.io/nuget/dt/Bromix.MudBlazor.MaterialDesignIcons) ![GitHub](https://img.shields.io/github/license/bromix/Bromix.MudBlazor.MaterialDesignIcons)

> _Note:_ Please use the main [MaterialDesign](https://github.com/Templarian/MaterialDesign/issues) repo to report
> issues. This repository is only for the creation and deployment of the package.

# MaterialDesignIcons for [MudBlazor](https://github.com/Garderoben/MudBlazor)

This package provides all icons as path data (svg) from [Material Design Icons](https://materialdesignicons.com). The
icons are divided into Normal and Outline variants.

## Installation

Just install the NuGet package.

```
dotnet add package Bromix.MudBlazor.MaterialDesignIcons
```

Add the following using statement in `_Imports.razor`.

```razor
@using Bromix.MudBlazor.MaterialDesignIcons
```

If your're using a `GlobalUsings.cs`, you can also add:

```c#
using Bromix.MudBlazor.MaterialDesignIcons;
```

## Usage

```razor
<MudIcon Icon="@MaterialDesignIcons.Normal.Egg" Color="Color.Default" />
<MudIcon Icon="@MaterialDesignIcons.Outline.Egg" Color="Color.Default" />
```

## How does the package creation work?

Using npm and the @mdi/svg module, the latest icons are downloaded as SVG. The meta.json is read in so that we have the
names of the SVG files and the authors. The authors are mentioned for each icon in the comments (documentation). For
each icon variant we create a separate partial class (e.g. MaterialDesignIcons.Normal.cs and
MaterialDesignIcons.Outline.cs).

## Related Packages

[NPM @MDI Organization](https://npmjs.com/org/mdi)

- React: [MaterialDesign-React](https://github.com/Templarian/MaterialDesign-React)
- SVG: [MaterialDesign-SVG](https://github.com/Templarian/MaterialDesign-SVG)
- Webfont: [MaterialDesign-Webfont](https://github.com/Templarian/MaterialDesign-Webfont)
- Font-Build: [MaterialDesign-Font-Build](https://github.com/Templarian/MaterialDesign-Font-Build)
- Desktop Font: [MaterialDesign-Font](https://github.com/Templarian/MaterialDesign-Font)

## Learn More

- [MudBlazor](https://github.com/Garderoben/MudBlazor)
- [MaterialDesignIcons.com](https://materialdesignicons.com)
- https://github.com/Templarian/MaterialDesign
