import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

// How to include new icons:

// If it's a new icon:
// 1. Open https://cdn.jsdelivr.net/npm/@fluentui/svg-sprites/sprites/<snake_cased_icon_id>_16_<filled | regular>.sprite.svg
// 2. Inspect the page and copy the <symbols> content
// 3. Paste into `/static/img/sprite.svg` make sure to keep the `id` consistent.
// 4. Add a `fill="currentColor"` attribute to the <symbow> in order for us to use the `text-${color-name}` twind class
// 5. Repeat steps #1, #2 and #3 and #4 for the other variant, so we always have both regular and filled icons
// 6. Update the FluentUIIcon list of options with the new icon id

export type AvailableFluentIcon =
  | "receipt_sparkles"
  | "clock"
  | "inprivate_account";

export interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/img/sprites.svg`.
   *
   * Example: <FluentIcon id="receipt_sparkles" variant="filled" size={40} />
   */
  id: AvailableFluentIcon;
  variant?: "regular" | "filled";
  size?: number;
}

export default function ({
  id = "receipt_sparkles",
  variant = "regular",
  size = 60,
  ...otherProps
}: Props) {
  const strokeWidth = 16;
  const assetId = `${id}_${strokeWidth}_${variant}`;
  return (
    <svg
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      {...otherProps}
    >
      <use href={asset(`/img/sprites.svg#${assetId}`)} />
    </svg>
  );
}
