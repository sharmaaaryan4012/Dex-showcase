// Executes before Next.js client hydration and dev-overlay global error listeners.
// Prevents third-party browser extension injections (such as bis_skin_checked attributes
// and chrome-extension:// unhandled rejections) from polluting hydration or dev telemetry.

if (typeof window !== "undefined") {
  const win = window as Window & { __dexExtGuardInstalled?: boolean };

  if (!win.__dexExtGuardInstalled) {
    win.__dexExtGuardInstalled = true;

    const isExtensionOrigin = (text: string): boolean =>
      text.includes("chrome-extension://") ||
      text.includes("moz-extension://") ||
      text.includes("safari-extension://");

    const stripExtensionAttrs = (el: Element): void => {
      if (el.hasAttribute("bis_skin_checked")) {
        el.removeAttribute("bis_skin_checked");
      }
      if (el.hasAttribute("bis_size")) {
        el.removeAttribute("bis_size");
      }
    };

    try {
      const origSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function (
        name: string,
        value: string
      ): void {
        if (name === "bis_skin_checked" || name === "bis_size") {
          return;
        }
        return origSetAttribute.call(this, name, value);
      };

      const observer = new MutationObserver((mutations) => {
        for (let i = 0; i < mutations.length; i++) {
          const target = mutations[i].target;
          if (target instanceof Element) {
            stripExtensionAttrs(target);
          }
        }
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["bis_skin_checked", "bis_size"],
        subtree: true,
      });

      window.addEventListener(
        "unhandledrejection",
        (event: PromiseRejectionEvent) => {
          const reason = event.reason as
            | { stack?: unknown; message?: unknown }
            | string
            | undefined;
          const stack =
            typeof reason === "object" && reason !== null && reason.stack
              ? String(reason.stack)
              : "";
          const text =
            typeof reason === "string"
              ? reason
              : typeof reason === "object" && reason !== null && reason.message
                ? String(reason.message)
                : String(reason ?? "");

          if (isExtensionOrigin(stack) || isExtensionOrigin(text)) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        },
        true
      );

      window.addEventListener(
        "error",
        (event: ErrorEvent) => {
          const filename = event.filename ? String(event.filename) : "";
          const stack =
            event.error &&
            typeof event.error === "object" &&
            "stack" in event.error
              ? String((event.error as { stack?: unknown }).stack ?? "")
              : "";

          if (isExtensionOrigin(filename) || isExtensionOrigin(stack)) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        },
        true
      );
    } catch {
      // Never interfere with app initialization
    }
  }
}
