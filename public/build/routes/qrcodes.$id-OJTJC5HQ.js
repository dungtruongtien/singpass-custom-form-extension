import {
  require_db
} from "/build/_shared/chunk-DXZPNPAJ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData
} from "/build/_shared/chunk-GKDIEDO4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-EF6FZ7HG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/QRCode.server
var require_QRCode = __commonJS({
  "empty-module:~/models/QRCode.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/qrcodes.$id.jsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_QRCode = __toESM(require_QRCode());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/qrcodes.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/qrcodes.$id.jsx"
  );
  import.meta.hot.lastModified = "1692092683308.337";
}
function QRCode() {
  _s();
  const {
    image,
    title
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: title }, void 0, false, {
      fileName: "app/routes/qrcodes.$id.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: `QR Code for product` }, void 0, false, {
      fileName: "app/routes/qrcodes.$id.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/qrcodes.$id.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(QRCode, "Pc8wZ1cmzE22SL/cn0plXIeKhfA=", false, function() {
  return [useLoaderData];
});
_c = QRCode;
var _c;
$RefreshReg$(_c, "QRCode");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  QRCode as default
};
//# sourceMappingURL=/build/routes/qrcodes.$id-OJTJC5HQ.js.map
