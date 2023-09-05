import {
  require_QRCode
} from "/build/_shared/chunk-3EYAZZDZ.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Card,
  EmptyState,
  HorizontalStack,
  Icon,
  IndexTable,
  Layout,
  Page,
  SvgDiamondAlertMajor,
  SvgImageMajor,
  Text,
  Thumbnail,
  Tooltip
} from "/build/_shared/chunk-7OKZO5D7.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData,
  useNavigate
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
var import_QRCode = __toESM(require_QRCode());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.jsx"
  );
  import.meta.hot.lastModified = "1692173753995.6719";
}
function Index() {
  _s();
  const {
    QRCodes
  } = useLoaderData();
  const navigate = useNavigate();
  function truncate(str) {
    const n = 25;
    return str.length > n ? str.substr(0, n - 1) + "\u2026" : str;
  }
  const emptyMarkup = QRCodes.length ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { heading: "Create unique QR codes for your product", action: {
    content: "Create QR code",
    onAction: () => navigate("qrcodes/new")
  }, image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Allow customers to scan codes and buy products using their phones." }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 51,
    columnNumber: 47
  }, this);
  const qrCodesMarkup = QRCodes.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable, { resourceName: {
    singular: "QR code",
    plural: "QR codes"
  }, itemCount: QRCodes.length, headings: [{
    title: "Thumbnail",
    hidden: true
  }, {
    title: "Title"
  }, {
    title: "Product"
  }, {
    title: "Date created"
  }, {
    title: "Scans"
  }], selectable: false, children: QRCodes.map(({
    id,
    title,
    productImage,
    productTitle,
    productDeleted,
    createdAt,
    scans
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Row, { id, position: id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: productImage || SvgImageMajor, alt: "product image or placeholder", size: "small" }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 83,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `qrcodes/${id}`, children: truncate(title) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 86,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: productDeleted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "start", gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { content: "product has been deleted", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          width: "20px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgDiamondAlertMajor, color: "critical" }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 91,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: productDeleted && "critical", as: "span", children: truncate(productTitle) }, void 0, false, {
          fileName: "app/routes/app._index.jsx",
          lineNumber: 97,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 89,
        columnNumber: 35
      }, this) : truncate(productTitle) }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 88,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: new Date(createdAt).toDateString() }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 102,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IndexTable.Cell, { children: scans }, void 0, false, {
        fileName: "app/routes/app._index.jsx",
        lineNumber: 105,
        columnNumber: 15
      }, this)
    ] }, id, true, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 81,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 57,
    columnNumber: 42
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: "QR codes", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "primary", onClick: () => navigate("/app/qrcodes/new"), children: "Create QR code" }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { padding: "0", children: [
      emptyMarkup,
      qrCodesMarkup
    ] }, void 0, true, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 117,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app._index.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Index, "iw+6t4EJAkg7VyPW12/kKhDvJjE=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-UYI2VNFN.js.map
