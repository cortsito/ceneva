import { theme_preference_storage_key } from "./theme-preference";

/**
 * generates the inline script executed with `beforeInteractive`. it duplicates
 * `is_theme_preference`/`resolve_theme`'s logic as raw js because it must run
 * before any application bundle loads, to set `data-theme` on `<html>` before
 * first paint. `theme-boot-script.test.ts` runs this exact string against the
 * same cases as `theme-preference.test.ts` to keep both in sync.
 */
export function create_theme_boot_script(): string {
  const storage_key = JSON.stringify(theme_preference_storage_key);

  return (
    "(function(){" +
    "try{" +
    `var stored=window.localStorage.getItem(${storage_key});` +
    'var preference=stored==="light"||stored==="dark"||stored==="system"?stored:"system";' +
    "var prefers_dark=Boolean(" +
    'window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches' +
    ");" +
    'var is_dark=preference==="dark"||(preference==="system"&&prefers_dark);' +
    'document.documentElement.setAttribute("data-theme",is_dark?"dark":"light");' +
    "}catch(e){}" +
    "})();"
  );
}
