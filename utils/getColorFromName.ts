import twindConfig from "../twind.config.ts";
import { Color } from "./types.ts";

export default function (colorName: Color) {
  return twindConfig.theme.extend.colors[colorName];
}
