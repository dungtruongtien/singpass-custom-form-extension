import {
  require_db
} from "/build/_shared/chunk-DXZPNPAJ.js";
import {
  require_QRCode
} from "/build/_shared/chunk-3EYAZZDZ.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Bleed,
  Button,
  Card,
  ChoiceList,
  Divider,
  EmptyState,
  HorizontalStack,
  InlineError,
  Layout,
  Page,
  PageActions,
  SvgImageMajor,
  Text,
  TextField,
  Thumbnail,
  VerticalStack
} from "/build/_shared/chunk-7OKZO5D7.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-GKDIEDO4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-EF6FZ7HG.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.qrcodes.$id.jsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
var import_db = __toESM(require_db());
var import_QRCode = __toESM(require_QRCode());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.qrcodes.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.qrcodes.$id.jsx"
  );
  import.meta.hot.lastModified = "1692175413558.9727";
}
function QRCodeForm() {
  var _a;
  _s();
  const errors = ((_a = useActionData()) == null ? void 0 : _a.errors) || {};
  const QRCode = useLoaderData();
  const [formState, setFormState] = (0, import_react.useState)(QRCode);
  const [cleanFormState, setCleanFormState] = (0, import_react.useState)(QRCode);
  const isDirty = JSON.stringify(formState) !== JSON.stringify(cleanFormState);
  const nav = useNavigation();
  const isSaving = nav.state === "submitting" && nav.formMethod === "POST";
  const isDeleting = nav.state === "submitting" && nav.formMethod === "DELETE";
  const navigate = useNavigate();
  async function selectProduct() {
    var _a2, _b;
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select"
      // customized action verb, either 'select' or 'add',
    });
    if (products) {
      const {
        images,
        id,
        variants,
        title,
        handle
      } = products[0];
      console.log("products-----", JSON.stringify(products));
      setFormState({
        ...formState,
        productId: id,
        productVariantId: variants[0].id,
        productTitle: title,
        productHandle: handle,
        productAlt: (_a2 = images[0]) == null ? void 0 : _a2.altText,
        productImage: (_b = images[0]) == null ? void 0 : _b.originalSrc
      });
    }
  }
  const submit = useSubmit();
  function handleSave() {
    const data = {
      title: formState.title,
      productId: formState.productId || "",
      productVariantId: formState.productVariantId || "",
      productHandle: formState.productHandle || "",
      destination: formState.destination
    };
    console.log("data------", data);
    setCleanFormState({
      ...formState
    });
    submit(data, {
      method: "post"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ui-title-bar", { title: QRCode.id ? "Edit QR code" : "Create new QR code", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { variant: "breadcrumb", onClick: () => navigate("/app"), children: "QR codes" }, void 0, false, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "Title" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { id: "title", helpText: "Only store staff can see this title", label: "title", labelHidden: true, autoComplete: "off", value: formState.title, onChange: (title) => setFormState({
            ...formState,
            title
          }), error: errors.title }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 153,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { align: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "Product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { plain: true, onClick: selectProduct, children: "Change product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 169,
              columnNumber: 42
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          formState.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { blockAlign: "center", gap: "5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { source: formState.productImage || SvgImageMajor, alt: formState.productAlt }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 174,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", variant: "headingMd", fontWeight: "semibold", children: formState.productTitle }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 175,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 173,
            columnNumber: 40
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: selectProduct, id: "select-product", children: "Select product" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            errors.productId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { message: errors.productId, fieldID: "myFieldID" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 182,
              columnNumber: 41
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 178,
            columnNumber: 40
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bleed, { marginInline: "20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 185,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 184,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HorizontalStack, { gap: "5", align: "space-between", blockAlign: "start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChoiceList, { title: "Scan destination", choices: [{
              label: "Link to product page",
              value: "product"
            }, {
              label: "Link to checkout page with product in the cart",
              value: "cart"
            }], selected: [formState.destination], onChange: (destination) => setFormState({
              ...formState,
              destination: destination[0]
            }), error: errors.destination }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 188,
              columnNumber: 19
            }, this),
            QRCode.destinationUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { plain: true, url: QRCode.destinationUrl, external: true, children: "Go to destination URL" }, void 0, false, {
              fileName: "app/routes/app.qrcodes.$id.jsx",
              lineNumber: 198,
              columnNumber: 44
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 187,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 164,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 163,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 151,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { secondary: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "h2", variant: "headingLg", children: "QR code" }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        QRCode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { image: QRCode.image, imageContained: true }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 211,
          columnNumber: 23
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, { image: "", children: "Your QR code will appear here after you save" }, void 0, false, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 211,
          columnNumber: 83
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerticalStack, { gap: "3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !(QRCode == null ? void 0 : QRCode.image), url: QRCode == null ? void 0 : QRCode.image, download: true, primary: true, children: "Download" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 215,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !QRCode.id, url: `/qrcodes/${QRCode.id}`, external: true, children: "Go to public URL" }, void 0, false, {
            fileName: "app/routes/app.qrcodes.$id.jsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.qrcodes.$id.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 207,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageActions, { secondaryActions: [{
        content: "Delete",
        loading: isDeleting,
        disabled: !QRCode.id || !QRCode || isSaving || isDeleting,
        destructive: true,
        outline: true,
        onAction: () => submit({}, {
          method: "delete"
        })
      }], primaryAction: {
        content: "Save",
        loading: isSaving,
        disabled: !isDirty || isSaving || isDeleting,
        onAction: handleSave
      } }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 225,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.qrcodes.$id.jsx",
        lineNumber: 224,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.qrcodes.$id.jsx",
      lineNumber: 149,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.qrcodes.$id.jsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
}
_s(QRCodeForm, "963hAalA8gMxyj49mNASN4nH5RQ=", false, function() {
  return [useActionData, useLoaderData, useNavigation, useNavigate, useSubmit];
});
_c = QRCodeForm;
var _c;
$RefreshReg$(_c, "QRCodeForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  QRCodeForm as default
};
//# sourceMappingURL=/build/routes/app.qrcodes.$id-FS4RGXZJ.js.map
