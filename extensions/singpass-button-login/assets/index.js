// ------------ TODO LIST ------------
// - Split into smaller module if possible.
// - Split CSS, not use inline CSS anymore if possible.


// ------------ CONSTANT ------------

const CONFIRMATION_PAGE_SELECTOR = "body > div.confirmation-page > div > div > div > div";
const CLEAR_SINGPASS_SESSION_BTN_SELECTOR = "clear-singpass-session-btn";
const CLEAR_SINGPASS_SESSION_BTN_ORIGIN_SELECTOR  = "clear-singpass-session-btn-origin";
const SINGPASS_VERIFY_CUSTOM_FORM_SELECTOR = "singpass-verify-custom-form";
const SINGPASS_VERIFY_CUSTOM_FORM_ORIGIN_SELECTOR = "singpass-verify-custom-form-origin";
const CUSTOME_FORM_BACK_BUTTON_SELECTOR = "#custom-form-back-button";
const FORERIGNER_PROCESS_FORM_BTN_SELECTOR = "#foreigner-process-form-btn";
const APPOINTMENT_BLOCK = ".appointment-block";
const BOOKTHATAPP_FORM_IFRAME_SELECTOR = 'iframe[title="widget_xcomponent"]';
const BOOKTHATAPP_FORM_PRICE_CONTAINER_SELECTOR = 'p.price-container';
const SINGPASS_VERIFY_BUTTON_SELECTOR = 'singpass-verify-button';
const BOOKTHATAPP_FORM_DRIVER_FULL_NAME_SELECTOR = 'input[name="driver_full_name_per_nric/fin/passport"]';
const BOOKTHATAPP_FORM_DRIVER_LICENSE_SELECTOR = 'input[name="driver_license_number_local_or_foreign_license_number"]';
const BOOKTHATAPP_FORM_DRIVER_EMAIL_SELECTOR = 'input[name="driver_email"]';
const SINGPASS_COOKIE_NAME = 'singpass_cookie';
const SINGPASS_CALLBACK_ERROR_COOKIE_NAME = 'singpass_callback_error_cookie';
const SINGPASS_VALIDATE_ERROR_COOKIE_NAME = 'singpass_validate_error_cookie';
const SINGPASS_VERIFY_URL = 'https://api.uat.lylo.tech/csm/auth/web/verify';
const GET_DOM_ELEMENT_SELECT_TYPE = {
  BY_ID: "byID",
  BY_CLASS_NAME: "byClassName",
  QUERY_SELECTOR: "querySelector",
}

// ------------ CONSTANT ------------

// ------------ UTILS ------------

const popupCenter = ({ url, title, w, h }) => {
  // Fixes dual-screen position
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop
  return window.open(url, title,
    `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `
  )
}

function getDomElement(selectorName, selectType) {
  let queryType = "";
  switch (selectType) {
    case GET_DOM_ELEMENT_SELECT_TYPE.BY_ID:
      queryType = "getElementById";
      break;
    case GET_DOM_ELEMENT_SELECT_TYPE.BY_CLASS_NAME:
      queryType = "getElementsByClassName";
      break;
    case GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR:
      queryType = "querySelector";
      break;
    default:
      return null;
  }
  const iframe = document.querySelector(BOOKTHATAPP_FORM_IFRAME_SELECTOR);
  if (iframe) {
    const iframeContentWindow = iframe.contentWindow.document;
    const element = iframeContentWindow[queryType](selectorName);
    if (element) {
      return element;
    }
  }
  return document[queryType](selectorName);
}

function deleteCookie(name, path = '/') {
  document.cookie = name + `=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};`
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function disableOrEnableSingpassField(actionType) {
  var driverFullNameField = getDomElement(BOOKTHATAPP_FORM_DRIVER_FULL_NAME_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  var driverLicenseField = getDomElement(BOOKTHATAPP_FORM_DRIVER_LICENSE_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  var driverEmailField = getDomElement(BOOKTHATAPP_FORM_DRIVER_EMAIL_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  if (!driverFullNameField || !driverLicenseField || !driverEmailField) {
    return;
  }
  switch (actionType) {
    case "enable":
      driverFullNameField.removeAttribute('disabled');
      driverFullNameField.style.backgroundColor = "rgb(255, 255, 255)";

      driverLicenseField.removeAttribute('disabled');
      driverLicenseField.style.backgroundColor = "rgb(255, 255, 255)";

      driverEmailField.removeAttribute('disabled');
      driverEmailField.style.backgroundColor = "rgb(255, 255, 255)";
      return;
    case "disable":
      driverFullNameField.setAttribute('disabled', '');
      driverFullNameField.setAttribute('isvaluefromsingpass', 'true');
      driverFullNameField.style.backgroundColor = "rgb(232 232 232)";

      driverLicenseField.setAttribute('disabled', '');
      driverLicenseField.setAttribute('isvaluefromsingpass', 'true');
      driverLicenseField.style.backgroundColor = "rgb(232 232 232)";

      driverEmailField.setAttribute('disabled', '');
      driverEmailField.setAttribute('isvaluefromsingpass', 'true');
      driverEmailField.style.backgroundColor = "rgb(232 232 232)";
      return;
    default:
      return;
  }
}

function autoFillSingpassField(config) {
  const { selectorName, value, htmlPrototype } = config;
  var singpassField = getDomElement(selectorName, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  if (!singpassField) {
    return;
  }
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(htmlPrototype, "value").set;
  nativeInputValueSetter.call(singpassField, value);
  var ev1 = new Event('input', { bubbles: true });
  singpassField.dispatchEvent(ev1);
}

// ------------ UTILS ------------


// ------------ HANDLE EVENT ------------
function onBtnRetrieveMyInfoClick() {
  if (!window.focus) return true;
  const windowname = 'Singpass Verify';
  const singpasVerifyPopup = popupCenter({ url: SINGPASS_VERIFY_URL, title: windowname, w: 500, h: 600 });
  intervalPopupClosedCallback(singpasVerifyPopup);
}

function onBtnBackClick() {
  const originalBtnBack = getDomElement("btn-back-title", GET_DOM_ELEMENT_SELECT_TYPE.BY_CLASS_NAME);
  if (originalBtnBack && originalBtnBack[0]) {
    originalBtnBack[0].click();
  }
}

function onBtnClearSingpassSessionClick() {
  deleteCookie(SINGPASS_COOKIE_NAME, '/');
}

function onBtnForeignerProcessFormBtnClick() {
  const eligibleErrorMsg = getDomElement("#singpass-verify-custom-form #error-msg-unqualified-user", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  if (eligibleErrorMsg) {
    eligibleErrorMsg.style.display = "none";
  }
  const confirmationPage = getDomElement("body > div.confirmation-page > div > div > div > div", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  const confirmationPageWrapper = getDomElement("body > div.confirmation-page > div > div > div", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  const singpassCustomForm = getDomElement(SINGPASS_VERIFY_CUSTOM_FORM_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
  if (!confirmationPage || !singpassCustomForm || !confirmationPageWrapper) {
    console.warn('Cannot find confirmationPage or singpassCustomForm or confirmationPageWrapper');
    return;
  }
  // Set dom location for custom form
  singpassCustomForm.style.display = "none";
  confirmationPage.style.display = "block";
  confirmationPageWrapper.style.height = '100px';
}
// ------------ HANDLE EVENT ------------

// ------------ INTERVAL CALLBACK ------------

function autoFillAndDisableWithSingpass(singpassData) {
  // Singpass Fields: 
  //  + Full Name
  //  + Driver License
  //  + Email


  // Driver Full Name 
  const driverFullNameConfig = {
    value: `${singpassData['fullName']} (from Singpass)`,
    htmlPrototype: window.HTMLInputElement.prototype,
    selectorName: BOOKTHATAPP_FORM_DRIVER_FULL_NAME_SELECTOR
  }
  autoFillSingpassField(driverFullNameConfig)

  // Driver License
  const driverLicenseConfig = {
    value: `${singpassData['licenseNo']} (from Singpass)`,
    htmlPrototype: window.HTMLInputElement.prototype,
    selectorName: BOOKTHATAPP_FORM_DRIVER_LICENSE_SELECTOR
  }
  autoFillSingpassField(driverLicenseConfig)

  // Driver Email
  const driverEmailConfig = {
    value: `${singpassData['email']} (from Singpass)`,
    htmlPrototype: window.HTMLInputElement.prototype,
    selectorName: BOOKTHATAPP_FORM_DRIVER_EMAIL_SELECTOR
  }
  autoFillSingpassField(driverEmailConfig)

  // Disable and Change background color with Singpass Field
  disableOrEnableSingpassField("disable");
}

function handlePopupClosedCallback(singpasVerifyPopup, popupTick) {
  if (!singpasVerifyPopup.closed) {
    return;
  }
  const singpassCookie = getCookie(SINGPASS_COOKIE_NAME);
  const singpassCallbackErrorCookie = getCookie(SINGPASS_CALLBACK_ERROR_COOKIE_NAME);
  const singpassValidateErrorCookie = getCookie(SINGPASS_VALIDATE_ERROR_COOKIE_NAME);
  const foreignerProcessFormBtn = getDomElement("#singpass-verify-custom-form #foreigner-process-form-btn", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  const eligibleErrorMsg = getDomElement("#singpass-verify-custom-form #error-msg-unqualified-user", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  if (!foreignerProcessFormBtn || !eligibleErrorMsg) {
    return;
  }
  if (singpassValidateErrorCookie) {
    const singpassValidateErrorData = JSON.parse(singpassValidateErrorCookie);
    if (singpassValidateErrorData) {
      eligibleErrorMsg.style.display = "block";
      eligibleErrorMsg.innerText = singpassValidateErrorData.message;
      foreignerProcessFormBtn.setAttribute("disabled", "");
      foreignerProcessFormBtn.style.cursor = "not-allowed";
    }
    deleteCookie(SINGPASS_VALIDATE_ERROR_COOKIE_NAME, '/');
  }
  if (singpassCallbackErrorCookie) {
    const singpassCallbackErrorErrorData = JSON.parse(singpassCallbackErrorCookie);
    if (singpassCallbackErrorErrorData) {
      eligibleErrorMsg.style.display = "block";
      eligibleErrorMsg.innerText = singpassCallbackErrorErrorData.message;
      foreignerProcessFormBtn.setAttribute("disabled", "");
      foreignerProcessFormBtn.style.cursor = "not-allowed";
    }
    deleteCookie(SINGPASS_CALLBACK_ERROR_COOKIE_NAME, '/');
  }
  if (singpassCookie) {
    const foreignerProcessFormBtn = getDomElement("#singpass-verify-custom-form #foreigner-process-form-btn", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
    const eligibleErrorMsg = getDomElement("#singpass-verify-custom-form #error-msg-unqualified-user", GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
    if (!foreignerProcessFormBtn || !eligibleErrorMsg) {
      return;
    }
    foreignerProcessFormBtn.removeAttribute("disabled");
    foreignerProcessFormBtn.style.cursor = "pointer";
    eligibleErrorMsg.style.display = "none";
    foreignerProcessFormBtn.click();
  }
  clearInterval(popupTick);
}

function removeAutoFillValueAndenableSingpassField() {
  // Singpass Fields: 
  //  + Full Name
  //  + Driver License
  //  + Email
  var driverFullNameField = getDomElement(BOOKTHATAPP_FORM_DRIVER_FULL_NAME_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  var driverLicenseField = getDomElement(BOOKTHATAPP_FORM_DRIVER_LICENSE_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  var driverEmailField = getDomElement(BOOKTHATAPP_FORM_DRIVER_EMAIL_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
  if(!driverFullNameField || !driverLicenseField || !driverEmailField) {
    return;
  }

  const isDriverFullNameFromSingpass = driverFullNameField.getAttribute('isvaluefromsingpass');
  const isDriverLicenseFromSingpass = driverLicenseField.getAttribute('isvaluefromsingpass');
  const isDriverEmailFromSingpass = driverEmailField.getAttribute('isvaluefromsingpass');

  if (isDriverFullNameFromSingpass) {
    // Driver Full Name 
    const driverFullNameConfig = {
      value: "",
      htmlPrototype: window.HTMLInputElement.prototype,
      selectorName: BOOKTHATAPP_FORM_DRIVER_FULL_NAME_SELECTOR
    };
    autoFillSingpassField(driverFullNameConfig);
    driverFullNameField.removeAttribute('isvaluefromsingpass');
  }

  if (isDriverLicenseFromSingpass) {
    // Driver License
    const driverLicenseConfig = {
      value: "",
      htmlPrototype: window.HTMLInputElement.prototype,
      selectorName: BOOKTHATAPP_FORM_DRIVER_LICENSE_SELECTOR
    };
    autoFillSingpassField(driverLicenseConfig);
    driverLicenseField.removeAttribute('isvaluefromsingpass');
  }

  if (isDriverEmailFromSingpass) {
    // Driver Email
    const driverEmailConfig = {
      value: "",
      htmlPrototype: window.HTMLInputElement.prototype,
      selectorName: BOOKTHATAPP_FORM_DRIVER_EMAIL_SELECTOR
    };
    autoFillSingpassField(driverEmailConfig);
    driverEmailField.removeAttribute('isvaluefromsingpass');
  }

  // Disable and Change background color with Singpass Field
  disableOrEnableSingpassField("enable");
}

function appendClearSingpassButtonUI() {
  const singpassCookie = getCookie(SINGPASS_COOKIE_NAME)
  if (singpassCookie) {
    let clearSingpassSessionBtnCloned = getDomElement(CLEAR_SINGPASS_SESSION_BTN_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
    if (clearSingpassSessionBtnCloned) {
      return true;
    }
    const confirmationPage = getDomElement(CONFIRMATION_PAGE_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
    const clearSingpassSessionBtnOrigin = getDomElement(CLEAR_SINGPASS_SESSION_BTN_ORIGIN_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
    if (!confirmationPage || !clearSingpassSessionBtnOrigin) {
      return false;
    }
    clearSingpassSessionBtnCloned = clearSingpassSessionBtnOrigin.cloneNode(true);
    clearSingpassSessionBtnCloned.setAttribute('id', CLEAR_SINGPASS_SESSION_BTN_SELECTOR);
    const appointmentBlock = confirmationPage.querySelector(APPOINTMENT_BLOCK);
    if (!appointmentBlock) {
      return false;
    }
    appointmentBlock.parentNode.insertBefore(clearSingpassSessionBtnCloned, appointmentBlock.nextSibling);
    clearSingpassSessionBtnCloned.style.display = 'block';
    clearSingpassSessionBtnCloned.addEventListener('click', onBtnClearSingpassSessionClick)
  }
  return true;
}

function addCustomeSingpassFormUI() {
  const singpassCookie = getCookie(SINGPASS_COOKIE_NAME)
  if (!singpassCookie) {
    // Detect Additional Page showed (1)
    const singpassCustomForm = getDomElement(SINGPASS_VERIFY_CUSTOM_FORM_ORIGIN_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
    let singpassCustomFormCloned = getDomElement(SINGPASS_VERIFY_CUSTOM_FORM_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
    if (singpassCustomFormCloned) {
      return;
    }
    singpassCustomFormCloned = singpassCustomForm.cloneNode(true);
    singpassCustomFormCloned.setAttribute('id', SINGPASS_VERIFY_CUSTOM_FORM_SELECTOR);

    const confirmationPage = getDomElement(CONFIRMATION_PAGE_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.QUERY_SELECTOR);
    const backBtn = singpassCustomFormCloned.querySelector(CUSTOME_FORM_BACK_BUTTON_SELECTOR);
    const foreignerProcessFormBtn = singpassCustomFormCloned.querySelector(FORERIGNER_PROCESS_FORM_BTN_SELECTOR);
    if (!confirmationPage || !singpassCustomFormCloned || !backBtn || !foreignerProcessFormBtn) {
      return;
    }
    confirmationPage.style.display = "none";
    backBtn.addEventListener('click', onBtnBackClick);
    foreignerProcessFormBtn.addEventListener('click', onBtnForeignerProcessFormBtnClick);

    confirmationPage.parentNode.insertBefore(singpassCustomFormCloned, confirmationPage.nextSibling);

    // Set style for custom form
    singpassCustomFormCloned.style.display = 'block';

    // Set style for custom singpass verify button
    let singpassVerifyButton = getDomElement(SINGPASS_VERIFY_BUTTON_SELECTOR, GET_DOM_ELEMENT_SELECT_TYPE.BY_ID);
    singpassVerifyButton.addEventListener("click", onBtnRetrieveMyInfoClick);
  }
}
// ------------ INTERVAL CALLBACK ------------

// ------------ INTERVAL ACTION ------------

// Refresh to update UI
function refresh() {
  setInterval(() => {
    const singpassCookie = getCookie(SINGPASS_COOKIE_NAME);
    if (singpassCookie) {
      const singpassData = JSON.parse(singpassCookie);
      autoFillAndDisableWithSingpass(singpassData);
      return;
    }
    removeAutoFillValueAndenableSingpassField();
    return;
  }, 1000);
}
refresh();

// Add Custom Singpass Form
function intervalToAddCustomSingpassForm() {
  const intervalTimer = setInterval(() => {
    try {
      addCustomeSingpassFormUI();
    } catch (err) {
      console.log('err-------', err);
    }
  }, 500);
}
intervalToAddCustomSingpassForm();

function intervalToAppendClearSingpassSessionButton() {
  const intervalTimer = setInterval(() => {
    try {
      appendClearSingpassButtonUI();
    } catch (err) {
      console.log('err-------', err);
    }
  }, 500);
}
intervalToAppendClearSingpassSessionButton();

function intervalPopupClosedCallback(singpasVerifyPopup) {
  var popupTick = setInterval(function () {
    handlePopupClosedCallback(singpasVerifyPopup, popupTick);
  }, 1000);
} 

// ------------ INTERVAL ACTION ------------