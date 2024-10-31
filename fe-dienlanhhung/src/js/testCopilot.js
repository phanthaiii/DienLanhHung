var isIEBrowser = /MSIE|Trident|Edge\//.test(window.navigator.userAgent);

$(document).ready(function () {
    removeEditButtonForReadonlyMode();
    JLInitializeUIControls();
    JLInitializeVueHelper();
    $(".modal").on("show.bs.modal hide.bs.modal", function (e) {
        $(".tooltip").remove();
        blurAllButtons();
    });

    $("body").on(
        "click",
        'button, a, [class*="jl-button"], [class*="jl-icon"]',
        function () {
            $(".tooltip").remove();
        }
    );

    applySearchTermLimit(SEARCH_TERM_INPUT_CHARACTER_LIMIT);

    // Allows a multi level dropdown
    $('body').on('click', ".dropdown-submenu a.multi-dropdown" , function (e) {
        $(".dropdown-submenu a.multi-dropdown").each((index, element) => {
            if ($(element).is($(this)) === false) {
                $(element).next().hide();
            } else {
                $(element).next("ul").toggle();
            }
        });
        e.stopPropagation();
        e.preventDefault();
    });

    $('body').on('click', ".dropdown-toggle" , () => {
        $(this)
            .find("a.multi-dropdown")
            .each((index, element) => {
                $(element).next("ul").hide();
            });
    });

    $(document).on("keyup", 'input.form-control[type="number"]', function (e) {
        var $self = this;
        var detectedBrowser =
            navigator.userAgent.indexOf("Firefox") != -1 || isIEBrowser
                ? true
                : false;
        const isNotDecimalKeyboard = e.key !== '.' && e.which !== 190;
        const isNotBackspaceKeyboard = e.key !== 'Backspace' && e.which !== 8;
        if (detectedBrowser) {
            if (isNotDecimalKeyboard && isNotBackspaceKeyboard) {
                return ($self.value = $self.value);
            } else {
                if ($self.valueAsNumber === "") {
                    return ($self.value = null);
                }
            }
        }
    });



    $(document).on("touchend", ".k-nodata .jl-button-green", function (e) {
        var isIOSTouch =
            isMobile.iOS &&
            navigator.platform === "MacIntel" &&
            navigator.maxTouchPoints > 1;
        isIOSTouch && $(this).trigger("click");
    });

    window.onhashchange = () => {
        if (
            $("#modalSwitchContainer").find(".jlSwitchModalContent").length > 0
        ) {
            hideSwitchModal();
        }
    };
    $(document).on("focusout", ':input', function () {
        const val = $(this).val();
        const type = $(this).attr('type')
        if(typeof val === "string" && type !== 'file'){
            $(this).val(val.trim());
        }
    });
    switchTwoWays();
    overrideTextArea();
    regionHrefBreadcrumb();
    addNewWhiteListValues();
});

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
function switchTwoWays() {
    $(".jl-switch-2ways").on("change", 'input[type="checkbox"]', function () {
        let $parent = $(this).parent().parent().parent();
        $parent.find(".switch-right").toggleClass("active");
        $parent.find(".switch-left").toggleClass("active");
    });
}

function JLInitializeUIControls($parentNode) {
    if ($parentNode == null) {
        $parentNode = $("body");
    }

    $parentNode.find("input").attr("autocomplete", "off");
    $parentNode.find('[data-tooltip="tooltip"]').length &&
        $parentNode.find('[data-tooltip="tooltip"]').tooltip({
            trigger: "hover",
            animate: true,
            container: "body",
        });
}

function JLInitializeVueHelper() {
    whenAvailable("VeeValidate", function () {
        var veeConfig =
            typeof veeValidateConfigLocale != "undefined"
                ? veeValidateConfigLocale
                : {};
        Vue.use(VeeValidate, veeConfig);
        VeeValidate.Validator.extend("dangerousHtml", {
            getMessage: (field) =>
                t(`* '#0#' contains non-permitted characters; please remove these characters`, {0: field}),
            validate: (value) => !isPotentiallyDangerousHtml(value),
        });
    });
}

function JLIntializeSlider() {
    var toggler = document.querySelector(".toggle-switch");

    toggler.onclick = function () {
        let _this = $(this);
        toggler.classList.toggle("active");
        _this
            .find("input[type=hidden]")
            .val(_this.hasClass("active") ? true : false);
    };
}

function formatVueSelectData(data, name, code, boolVueJsSelect = true) {
    if (!data.length > 0) return [];
    return data.map((item) => {
        return {
            label:
                item[name].length > vueJsSelectlength && boolVueJsSelect
                    ? `${item[name].substring(0, vueJsSelectlength)}...`
                    : item[name],
            code: item[code],
        };
    });
}
function formatVueWithoutSubString(data, name, code) {
    if (!data.length > 0) return [];
    return data.map((item) => {
        return { label: item[name], code: item[code] };
    });
}

$(function () {
    $("body").on("click", ".summary-title-wrapper button", function () {
        var summaryBox = $(this).closest(".summary-box");
        summaryBox.toggleClass("expanded");
        summaryBox.find(".summary-details").slideToggle(300);
    });

    submitFormWhenInputBlur();
});

// We only submit a search page request 'n' seconds after the user has stopped changing the filters
// This stops us from submitting every time they change each individual filter
var autoSubmitTimeout; // Stores the timeout callback
var autoSubmitTimeoutLength = 2000; // 2000 milliseconds = 2 seconds
$(document).on("change dp.change", ".autoSubmitInput", function () {
    clearTimeout(autoSubmitTimeout);

    var $form = $(this).closest("form");

    // Trigger submit form immediately
    if ($(this).hasClass("immediately")) {
        autoSubmitTimeoutLength = 0;
    }

    autoSubmitTimeout = setTimeout(function () {
        $form.trigger("submit");
    }, autoSubmitTimeoutLength);

    // If type is a date picker
    if ($(this).hasClass("joblogic_datepicker")) {
        $(this).on("dragstart", function (e) {
            e.preventDefault();
        });
    }

    // Clear the timeout again once the form submits
    // This means, if the user changes a filter then presses 'Search' or 'Reset Filter'
    // We will still only submit the form once
    $form.on("submit", function () {
        clearTimeout(autoSubmitTimeout);
    });
});

function bindAutoSubmit(formId, callback) {
    if (isEmpty(formId)) return;

    clearTimeout(autoSubmitTimeout);

    var $form = $("#" + formId);

    autoSubmitTimeout = setTimeout(function () {
        $form.trigger("submit");
    }, autoSubmitTimeoutLength);

    $form.on("submit", function () {
        if (isFunction(callback)) {
            callback();
        }
        clearTimeout(autoSubmitTimeout);
    });
}

function availableMapType(mapType, callback) {
    let mapVM;
    switch (mapType) {
        case "customer":
            $("#TagIds").val(getKendoMultiSelectValue("#Tags"));
            mapVM = customerMapViewVM;
            break;
        case "quote":
            var form = $("#QuoteSearch_Form");
            form.find("#OwnerIds").val(
                getKendoMultiSelectValue("#quoteowners", form)
            );
            form.find("#StatusIds").val(
                getKendoMultiSelectValue("#quotestatuses", form)
            );
            form.find("#ChanceOfSale").val(
                getKendoMultiSelectValue("#salesstatuses", form)
            );
            form.find("#Quote_TagIds").val(
                getKendoMultiSelectValue("#Quote_Tags", form)
            );
            mapVM = quoteMapViewVM;
            break;
        case "site":
            $("#Site_TagIds_Search").val(
                getKendoMultiSelectValue("#Site_Tags")
            );
            mapVM = sitePageVM;
            break;
        default:
            $("#CategoryIds").val(getKendoMultiSelectValue("#categories"));
            $("#TypeIds").val(getKendoMultiSelectValue("#types"));
            $("#PriorityIds").val(getKendoMultiSelectValue("#priorities"));
            $("#OwnerIds").val(getKendoMultiSelectValue("#owners"));
            $("#AreaIds").val(getKendoMultiSelectValue("#areas"));
            $("#TradeIds").val(getKendoMultiSelectValue("#trades"));
            $("#StatusIds").val(getKendoMultiSelectValue("#statuses"));
            $("#Job_TagIds").val(getKendoMultiSelectValue("#Job_Tags"));
            $("#Job_ExcludeTagIds").val(
                getKendoMultiSelectValue("#Job_ExcludeTags")
            );
            mapVM = jobMapViewVM;
            break;
    }
    if (isFunction(callback)) {
        callback(mapVM);
    }
}

$(document).on("change dp.change", ".autoRenderMap", function () {
    var $self = $(this);
    clearTimeout(autoSubmitTimeout);
    var $form = $(this).closest("form");
    autoSubmitTimeout = setTimeout(function () {
        availableMapType(
            $self
                .closest("form")
                .find(".jl-search-map-toggle")
                .attr("data-maptype"),
            function (mapVM) {
                if (!$form.hasClass("preventAutoRenderMap")) {
                    mapVM.renderMapModel($form.serialize(), autoSubmitTimeout);
                } else {
                    $form.removeClass("preventAutoRenderMap");
                    clearTimeout(autoSubmitTimeout);
                }
            }
        );
    }, autoSubmitTimeoutLength);
});

function applySearchTermLimit(searchTermInputCharacterLimit) {
    $("input.jl-searchterm").attr("maxlength", searchTermInputCharacterLimit);
}

$(document).on("keydown", "input:text", function (e) {
    preventDangerousCharacter(e);
});

$(document).on("input", "input:text", function () {
    // doesn't work in IE!
    $(this).val($(this).val().replace(/[<>]/g, ""));

    if ($(this).hasClass("has-vm")) {
        this.dispatchEvent(new Event("input"));
    }
});

function preventDangerousCharacter(e) {
    var dangerousCharacters = ["<", ">"];

    if (dangerousCharacters.includes(e.key)) e.preventDefault();
}

// Returns a new array of objects countries made up by Locale Culture.
var reformatListCountries = function () {
    if (typeof window.intlTelInputGlobals === undefined) return [];
    let _countries = window.intlTelInputGlobals.getCountryData();
    let result = [];
    if (!_countries.length > 0) return [];
    _countries.map(function (country) {
        if (country.iso2) {
            // create a new object to store code , name.
            var newObj = {};
            newObj["code"] = String(country.dialCode);
            newObj["name"] = `${country.name} (+${newObj["code"]})`;
            newObj["country"] = String(country.iso2);
            // return our new object.
            result.push(newObj);
        }
    });
    return result;
};

function checkCompanyCallingCode() {
    return company_CallingCode !== ""
        ? company_CallingCode
        : DEFAULT_COUNTRY_CODE_UK_CALLING_CODE;
}

var convertUserLocaleToIntl = (el) => {
    return el.slice(-2).toLowerCase();
};

var listCulturesAllow = () => {
    return cultures.map(function (culture) {
        return convertUserLocaleToIntl(culture.Value);
    });
};

function getInititalCountry() {
    return company_CountryCallingCode
        ? company_CountryCallingCode
        : DEFAULT_COUNTRY_CODE_UK;
}

var _intlTelInput = (element, inputName, dropdownContainer =
    null) => {
    whenAvailable(
        "intlTelInputGlobals",
        () => {
            jQuery(element).intlTelInput({
                autoPlaceholder: "on",
                utilsScript: intlTelInputUtilsLocation,
                initialCountry: getInititalCountry(),
                allowDropdown: true,
                separateDialCode: false,
                nationalMode: true,
                hiddenInput: "Full" + inputName,
                dropdownContainer: dropdownContainer
            })
        }
    );
};

var _intlTelInputSetNumber = (element) => {
    var telElem = jQuery(element);
    if (telElem) telElem.intlTelInput("setNumber", telElem.val());
};

var _intlTelInputGetNumber = (element) => {
    var telElem = jQuery(element);
    if (telElem) return telElem.intlTelInput("getNumber");
};

function forceError(element, errorMessage) {
    $(element).rules("add", {
        forceerror: true,
        messages: {
            forceerror: function () {
                return errorMessage;
            },
        },
    });
    var isForced = false;
    if (errorMessage) {
        isForced = true;
    }
    $(element)[0].dataset.isForced = isForced;
    $(element).valid();
}

$.validator.addMethod("forceerror", function (value, element) {
    return $(element)[0].dataset.isForced !== "true";
});

async function safelyValidatePhoneNumberMVC(
    oldPhoneNumber,
    elementId,
    valmsgSpanId,
    formId
) {
    if (oldPhoneNumber !== _intlTelInputGetNumber(`#${elementId}`)) {
        return await validatePhoneNumberMVC(elementId, valmsgSpanId, formId);
    } else {
        forceError($("#" + elementId), "", formId);
        return true;
    }
}

function registerTelValidationSubmitMVC(fieldName, submitButton, callback) {
    var elem = $(`#${fieldName}`).closest("form").find(submitButton);
    if (elem) {
        $(elem).on("click", async (e) => {
            e.preventDefault();
            await callback(e);
        });
    }
}
async function applyTelValidationSubmitMVC(
    oldPhoneNumber,
    fieldName,
    inputName,
    valmsgSpanId
) {
    if (safelyValidatePhoneNumberMVC) {
        var result = await safelyValidatePhoneNumberMVC(
            oldPhoneNumber,
            fieldName,
            valmsgSpanId
        );
        forceSetHiddenTelValue(fieldName, inputName);
        var hasError = result && result.errors && result.errors.length > 0;
        return hasError;
    }
}

function forceSetHiddenTelValue(fieldName, inputName) {
    var hiddenElem = $(`#${fieldName}`)
        .closest("form")
        .find(`input[name ="Full${inputName}"]`);
    if (hiddenElem) hiddenElem.val(_intlTelInputGetNumber(`#${fieldName}`));
}

async function validatePhoneNumberMVC(elementId, valmsgSpanId, formId) {
    var response = await validatePhoneNumber(elementId);
    toggleSpinnerModal(false);
    if (!response) {
        forceError($("#" + elementId), "Invalid Phone Number", formId);
        if (valmsgSpanId) {
            $('span[data-valmsg-for="' + valmsgSpanId + '"]').css(
                "display",
                "block"
            );
        }
    }
    if (!response.success) {
        forceError($("#" + elementId), t(response.errors[0]), formId);
        if (valmsgSpanId) {
            $('span[data-valmsg-for="' + valmsgSpanId + '"]').css(
                "display",
                "block"
            );
        }
    } else {
        forceError($("#" + elementId), "", formId);
    }

    return response;
}
async function validatePhoneNumber(element, showErr) {
    var selectedCountryData = $("#" + element).intlTelInput(
        "getSelectedCountryData"
    ).iso2;
    var phoneNumber = $("#" + element).val();
    if (!phoneNumber) return { success: true}; // return true if phone number is empty

    var param = { phoneNumber: phoneNumber, code: selectedCountryData };
    var pUrl = canonicalize("/Layout/ValidatePhoneNumberByTwilio");
    var response;
    toggleSpinnerModal(true);
    await JL_SERVICES.post({
        url: pUrl,
        params: param,
        options: { isShowErrorMessage: showErr },
        success: (data) => (response = data),
    });
    return response;
}
var _intlTelInputSetCountry = () => {
    let _o = jQuery(".mobile-intl");
    if (_o.length > 0) _o.intlTelInput("setCountry", getInititalCountry());
};
var _resetTelInputSetCountry = (isoCode, classCountry) => {
    let _o = $(classCountry);
    if (_o.length > 0) _o.intlTelInput("setCountry", isoCode);
};
var _intlTelInputGetCountryCode = (element) => {
    var telElem = $(element);
    if (telElem) return telElem.intlTelInput("getSelectedCountryData").dialCode;
};

function isBlank(str) {
    return (
        str == undefined ||
        str == null ||
        !str ||
        0 === str.length ||
        /^\s*$/.test(str)
    );
}

function isEmptyGUID(str) {
    return str === EMPTY_GUID;
}

function isNullOrUndefined(str) {
    return typeof str == "undefined" || str == null;
}

const isNumeric = (num) =>
    (typeof num === "number" ||
        (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num);

function convertNaNToZero(number) {
    if (Object.is(number, NaN) || number == "") {
        return 0;
    }
    return number;
}
function axaParseFloat(number) {
    return convertNaNToZero(parseFloat(number));
}

if (typeof toastr !== "undefined") {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-bottom-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "6000",
        timeOut: "8000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
}
function AddNotificationMessage(message, title = null, enableLocalize = null, fromSignalR = false) {
    if (fromSignalR) {
        message = enableLocalize ? handleLocalizeRequestMessage(enableLocalize) : message;
    } else {
        message = handleLocalizeRequestMessage(message);
    }
    whenAvailable("toastr", function () {
        if (message) {
            toastr.info(message, title);
        }
    });
}
function AddWarningMessage(message, title = null) {
    message = handleLocalizeRequestMessage(message);
    whenAvailable("toastr", function () {
        if (message) {
            toastr.warning(message, title);
        }
    });
}
function AddSuccessMessage(message, title = null) {
    message = handleLocalizeRequestMessage(message);
    whenAvailable("toastr", function () {
        if (message) {
            toastr.success(message, title);
        }
    });
}
function AddErrorMessage(message, title = null) {
    message = handleLocalizeRequestMessage(message);
    whenAvailable("toastr", function () {
        if (message) {
            toastr.error(message, title);
        }
    });
}
function ClearMessage() {
    whenAvailable("toastr", function () {
        toastr.clear();
    });
}

function ValidationErrorHandler(data) {
    $(".errorHandler").remove();

    data.forEach(function (element) {
        var targetUniqName = $("[name=" + element.Key + "]");

        targetUniqName.addClass("invalid");

        if (targetUniqName.parent().is(".datetimepicker__wrapper"))
            targetUniqName = $(
                targetUniqName.parent(".datetimepicker__wrapper")
            );

        // Create ul.errorHandler element after the form-control that has error
        targetUniqName.after($('<ul class="errorHandler"></ul>'));

        var ul = targetUniqName.next("ul");
        // Add list of errors founded for that base name
        element.Message.forEach(function (msg) {
            var li = $("<li></li>").text(msg);
            li.appendTo(ul);
        });
    });
}

//This replaces all the circular references with a reference value.
JSON.stringifyOnce = function (obj, replacer, space) {
    var cache = [];
    var json = JSON.stringify(
        obj,
        function (key, value) {
            if (typeof value === "object" && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // circular reference found, discard key
                    return;
                }
                // store value in our collection
                cache.push(value);
            }
            return replacer ? replacer(key, value) : value;
        },
        space
    );
    cache = null;
    return json;
};

function getStreamText(url) {
    return getStreamWithAntiforgery(url, "text");
}

function getStreamJson(url) {
    return getStreamWithAntiforgery(url, "json");
}

function getStreamBlob(url) {
    return getStreamWithAntiforgery(url, "blob");
}

function getStreamWithAntiforgery(url, responseType) {
    var deferred = $.Deferred();
    var xhr = new XMLHttpRequest();
    xhr.responseType = responseType ? responseType : "blob";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                deferred.resolve(xhr.response);
            } else if (xhr.status === 404) {
                AddErrorMessage("File not found.");
                deferred.reject(xhr);
            } else {
                deferred.reject(xhr);
            }
        }
    };
    xhr.onerror = function (progressEvent) {
        deferred.reject(xhr);
    };

    xhr.open("GET", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    var result = addGlobalForgeryToken(null);
    if (result) {
        $.each(result, (key, value) => {
            xhr.setRequestHeader(key, value);
        });
    }
    xhr.send();

    return deferred.promise();
}

function postStreamText(url, param) {
    return postStreamWithAntiforgery(url, param, "text");
}

function postStreamJson(url, param) {
    return postStreamWithAntiforgery(url, param, "json");
}

function postStreamBlob(url, param) {
    return postStreamWithAntiforgery(url, param, "blob");
}

function postStreamWithAntiforgery(url, param, responseType) {
    var deferred = $.Deferred();
    var xhr = new XMLHttpRequest();
    xhr.responseType = responseType ? responseType : "blob";
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                deferred.resolve(xhr.response);
            } else if (xhr.status === 404) {
                AddErrorMessage("File not found.");
                deferred.reject(xhr);
            } else {
                deferred.reject(xhr);
            }
        }
    };
    xhr.onerror = function (progressEvent) {
        deferred.reject(xhr);
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Content-Type", "application/json");
    var result = addGlobalForgeryToken(null);
    if (result) {
        $.each(result, (key, value) => {
            xhr.setRequestHeader(key, value);
        });
    }
    xhr.send(JSON.stringify(param));

    return deferred.promise();
}

function onSuccessPostObjectDataWithAntiforgery(data, callback, headers) {
    var ct = headers["content-type"] || "";
    if (ct.indexOf("html") > -1) {
        if (isFunction(callback)) {
            callback(data);
        }
    } else if (ct.indexOf("json") > -1) {
        onAjaxFormPostWithCallback(data, callback);
    }
    toggleSpinnerModal(false);
}

function onErrorPostObjectDataWithAntiforgery(Error401 = false) {
    const message = Error401
        ? t("You do not have permission to execute this function.")
        : t("A communication error has occured");
    AddErrorMessage(message);
    $(".disableSubmitButton").prop("disabled", false);
    toggleSpinnerModal(false);
}

function postJsonObjectDataWithAntiforgery(pUrl, pdata, callback) {
    const url = canonicalize(pUrl);
    JL_SERVICES.post({
        url: url,
        params: pdata,
        options: {
            isBodyData: true,
            isPostObjectDataWithAntiforgery: true,
        },
        success: function (data) {
            if (isFunction(callback)) {
                callback(data);
            }
        },
    });
}

function restoreForm(form, formData) {
    if (typeof formData === "object") {
        for (var key of formData.keys()) {
            var selector = `input[name="${key}"], textarea[name="${key}"]`;
            var input = $(form).find(selector);
            var newVal = formData.get(key);
            input.val(newVal);
        }
    }
}

function deleteButtonAfterSuccess(data, button) {
    if (!isEmpty(data) && data.success) {
        $(button).remove();
    }
}

function buttonPostWithAntiForgery(url, callback, pdata, button, deleteButton) {
    toggleSpinnerModal(true);
    JL_SERVICES.post({
        url: canonicalize(url),
        params: isBlank(pdata) ? {} : pdata,
        options: {
            isBodyData: true,
            isJsonToFormData: true,
            isPostObjectDataWithAntiforgery: true,
        },
        success: function (data) {
            if (typeof callback === "function") {
                callback(data);
            } else {
                onAjaxFormPost(data);
            }
            if (!isEmpty(button) && deleteButton !== false) {
                deleteButtonAfterSuccess(data, button);
            }
        },
    });
}

function postWithAntiForgency(url, callback, pdata) {
    toggleSpinnerModal(true);

    JL_SERVICES.post({
        url: url,
        params: isBlank(pdata) ? {} : pdata,
        options: {
            isBodyData: true,
            isJsonToFormData: true,
            isAjaxFormPostWithCallback: true,
        },
        success: function (data) {
            if (isFunction(callback)) {
                callback(data);
            }
            toggleSpinnerModal(false);
        },
    });
}

function buttonGetWithAntiForgery(url, callback) {
    toggleSpinnerModal(true);
    JL_SERVICES.get({
        url: canonicalize(url),
        params: {},
        success: (data) => {
            if (typeof callback === "function") {
                callback(data);
            } else {
                toggleSpinnerModal(false);
            }
        },
    });
}

function arrangeJobLifeCycle(_object) {
    if (_object) {
        let _events = _object;
        let _eventsArrange = [];
        JOB_LIFE_CYCLE.forEach((el) =>
            _eventsArrange.push(_events.find((e) => e.EventName === el))
        );
        _object = _eventsArrange;
    }
    return _object;
}

function onAjaxFormPost(data) {
    onAjaxFormPostWithCallback(data, null);
}

function onAjaxFormPostWithCallback(
    data,
    callback,
    errorCallback,
    allowToDropErrMsg = true
) {
    $(".errorHandler").remove();

    if ($(".joblogic_datetimepicker.invalid"))
        $(".joblogic_datetimepicker.invalid").removeClass("invalid");

    if (typeof data === "undefined") return;

    if (data.success) {
        if (data.Message != null) {
            if (!(data.AdditionalData && data.AdditionalData.Warning == true)) {
                AddSuccessMessage(data.Message);
            }
            $(".disableSubmitButton").prop("disabled", false);
        }

        if (data.WarningMessage != null) {
            AddWarningMessage(data.WarningMessage);
            $(".disableSubmitButton").prop("disabled", false);
        }

        if (callback != null) {
            callback(data);
            $(".disableSubmitButton").prop("disabled", false);
        }
    }

    if (typeof data.success === "undefined" && isFunction(callback)) {
        callback(data);
        toggleSpinnerModal(false);
    }

    //check if there is outstanding pages on redirect and instead open in new tab.
    if (data.redirectUrl != null) {
        if (data.Message != null || data.WarningMessage != null) {
            setTimeout(function () {
                //Delay a bit so user can see the message
            }, 3000);
        }
        if (window.onbeforeunload != null) {
            openUrlInNewTab(data.redirectUrl);
        } else {
            window.location.href = canonicalize(data.redirectUrl);
        }
    }

    if (data.success === false) {
        if (
            data.errors != null &&
            data.errors.length > 0 &&
            allowToDropErrMsg
        ) {
            AddErrorMessage(data.errors.length > 1 ? data.errors : data.errors.toString());
        }
        $(".disableSubmitButton").prop("disabled", false);

        toggleSpinnerModal(false);
        if (errorCallback != null) errorCallback(data);
    }
}

function toggleSpinnerModal(show, forInsideModal) {
    if (show === true) {
        $(
            forInsideModal === true
                ? ".jlSwitchModal .modal-content"
                : ".jl-content-wrap"
        ).addClass("loading");
    } else {
        $(".jl-content-wrap, .jlSwitchModal .modal-content").removeClass(
            "loading"
        );
        regionHrefBreadcrumb();
    }
}
function addFormValidation(content, showSpinnerWhenSubmit) {
    var forms = content.find("form");
    if (forms.length > 0) {
        for (var i = 0; i < forms.length; i++) {
            var form = $(forms[i]);
            form.removeData("validator").removeData("unobtrusiveValidation");
            $.validator.unobtrusive.parse(form);

            if (
                form.hasClass("KendoFormValidation") &&
                typeof form.data("kendoValidator") === "undefined"
            ) {
                form.kendoValidator();
            }
            if (showSpinnerWhenSubmit === true) {
                form.submit(function () {
                    if (form.valid()) {
                        toggleSpinnerModal(true, true);
                    }
                });
            }
        }
    }
}

function SoftDeleteConfirmCallback(data) {
    onAjaxFormPostWithCallback(data);
}

function ReactivateConfirmCallback(data) {
    onAjaxFormPostWithCallback(data);
}

//move to cost utils
function calculateSell(cost, uplift) {
    // Divide to turn back to float
    return ((cost + (cost / 100) * uplift) / 100).toFixed(2);
}

function calculateUplift(cost, sell) {
    if (cost != 0) {
        return (((sell - cost) / cost) * 100).toFixed(2);
    }
    return 0;
}

function buildMaterialCostDescriptionUsing(part) {
    // Likely not a Part object
    if (
        isBlank(part) ||
        (!part.hasOwnProperty("Description") && !part.hasOwnProperty("Number"))
    )
        return null;

    var partDescription = isBlank(part.OriginalDescription) ? part.Description : part.OriginalDescription;

    if (!isBlank(part.PartDisplayNumber) && show_PartNumber) {
        return partDescription + " [" + part.PartDisplayNumber + "]";
    } else {
        return partDescription;
    }
}

function parseMoney(moneyValue) {
    // Multiply all money by 100 to get integral currency value, useful for more accurate arithmetic
    return parseFloat(moneyValue) * 100;
}

function parseQuantity(stringWithCommas){
    if(typeof stringWithCommas !== "string") return stringWithCommas;
    const numberWithoutCommas = parseFloat(stringWithCommas.replace(/,/g, ""));
    return numberWithoutCommas;
}

function formattedNumbericToString(numericValue){
    if(typeof numericValue !== "number") return;
    return numericValue.toLocaleString('en-US',  {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
        2
    );
}

function calculateVatIncrease(value, vatRate) {
    var result = 0;

    // No value, Total = 0
    if (isNaN(value)) result = 0;

    // No VAT, Total = Value
    if (isNaN(vatRate)) result = value;

    // Value and VAT, calculate increase
    if (!isNaN(value) && !isNaN(vatRate)) {
        var vatAmount = value * (vatRate / 100);
        result = value + vatAmount;
    }

    return result.toFixed(2);
}

function formatDecimalElement($element, floatingPointPrecision) {
    var value = 0;
    try {
        value = parseFloat($element.val());
    } catch (ex) {}
    return formatDecimalValue(value, floatingPointPrecision);
}

function formatDecimalValue(value, floatingPointPrecision) {
    if (!floatingPointPrecision) {
        floatingPointPrecision = 2;
    }
    if (isBlank(value)) {
        value = 0;
    }
    return value.toFixed(floatingPointPrecision);
}

//utils
function getCookie(name) {
    return Cookies && Cookies.get(name);
}

function createCookie(name, value, dayExpires = 365) {
    if (Cookies) {
        Cookies.set(name, JSON.stringify(value), { expires: dayExpires })
    }
}


function eraseCookies() {
    let _allCookies = document.cookie
        .split(";")
        .reduce(
            (ac, cv, i) =>
                Object.assign(ac, { [cv.split("=")[0]]: cv.split("=")[1] }),
            {}
        );
    let _filteredAllCookies = Object.keys(_allCookies).filter((key) =>
        key.includes("Filters")
    );

    $.each(_filteredAllCookies, function (i, name) {
        var pathBits = location.pathname.split("/");
        var pathCurrent = " path=";

        // do a simple pathless delete first.
        document.cookie = name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

        for (var i = 0; i < pathBits.length; i++) {
            pathCurrent +=
                (pathCurrent.substr(-1) != "/" ? "/" : "") + pathBits[i];
            document.cookie =
                name +
                "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;" +
                pathCurrent +
                ";";
        }
    });
}

/*  removeStorage: removes a key from localStorage and its sibling expiracy key
   params:
	   key <string>     : localStorage key to remove
   returns:
	   <boolean> : telling if operation succeeded
*/
function removeStorage(name) {
    try {
        localStorage.removeItem(name);
        localStorage.removeItem(name + "_expiresIn");
    } catch (e) {
        return false;
    }
    return true;
}
/*  getStorage: retrieves a key from localStorage previously set with setStorage().
	params:
		key <string> : localStorage key
	returns:
		<string> : value of localStorage key
		null : in case of expired key or failure
 */
function getStorage(key) {
    var now = Date.now();
    // set expiration for storage
    var expiresIn = localStorage.getItem(key + "_expiresIn");
    if (expiresIn === undefined || expiresIn === null) {
        expiresIn = 0;
    }

    const isHasUserId = key?.includes(user_Guidid);

    if (expiresIn < now || !isHasUserId) {
        // Expired
        removeStorage(key);
        return null;
    } else {
        try {
            var value = localStorage.getItem(key);
            return value;
        } catch (e) {
            return null;
        }
    }
}
/*  setStorage: writes a key into localStorage setting a expire time
	params:
		key <string>     : localStorage key
		value <string>   : localStorage value
		expires <number> : number of seconds from now to expire the key
	returns:
		<boolean> : telling if operation succeeded
 */
function setStorage(key, value, expires) {
    if (expires === undefined || expires === null) {
        expires = 365 * (24 * 60 * 60);
    } else {
        expires = Math.abs(expires);
    }

    var now = Date.now();
    var schedule = now + expires * 1000;
    try {
        const parseValue = checkStrIsJSON(value) ? JSON.parse(value) : undefined;
        if(parseValue) {
            parseValue.jlFilterDateFormat = parseValue.jlFilterDateFormat || user_DateFormat;
            parseValue.jlFilterDateTimeFormat = parseValue.jlFilterDateTimeFormat || user_DateTimeFormat;
            localStorage.setItem(key, JSON.stringify(parseValue));
            localStorage.setItem(key + "_expiresIn", schedule);
            return;
        }
        localStorage.setItem(key, value);
        localStorage.setItem(key + "_expiresIn", schedule);
    } catch (e) {
        return false;
    }
    return true;
}

function replaceLineBreaks(valueToBeReplaced) {
    var formattedString;
    if (!isBlank(valueToBeReplaced)) {
        formattedString = valueToBeReplaced.replace(/\n/g, "");
        formattedString = valueToBeReplaced.replace(/(\r\n|\n|\r)/gm, " ");
    } else {
        formattedString = valueToBeReplaced;
    }
    return formattedString;
}

function cloneObject(original) {
    return typeof original != "undefined"
        ? JSON.parse(JSON.stringify(original))
        : null;
}

// Modal Confirm
function modalConfirm(
    confirmMessage,
    htmlAttributes,
    confirmYesCallback,
    confirmYesButtonClass,
    closeSwitchModal,
    confirmHasNewModal,
    confirmNoCallback,
    keepLoadingCallback = null,
    modalTitle = "",
    isLoading = false,
    buttonText = { Submit: "Confirm", Cancel: t("Cancel") },
    hasCancelButton = true,
    extraButton = null,
    modalSize = null
) {
    confirmMessage = t(confirmMessage);
    modalTitle = t(modalTitle);
    var modal = $("#deleteConfirmationModal");
    if (modalTitle) modal.find(".modal-title").html(modalTitle);
    modal.find("#modalConfirmMessage").html(confirmMessage);
    modal.find("#modalConfirmYes").remove();

    if (extraButton) {
        var { confirmExtraButtonClass, confirmExtraButtonText, confirmExtraIconButtonClass, confirmExtraCallback } = extraButton;
        modal.find("#modalConfirmExtra").remove();
        modal
            .find(".modal-footer")
            .append(
                `<button type="button" class="jl-custom-btn jl-button-skyblue ml12 ${confirmExtraButtonClass}" id="modalConfirmExtra"><i class="jli ${confirmExtraIconButtonClass}"></i><span class="jl-localization">${confirmExtraButtonText}</span></button>`
            );
    }

    modal
        .find(".modal-footer")
        .append(
            '<button type="button" class="jl-custom-btn jl-button-skyblue ml12 ' +
                confirmYesButtonClass +
                '" id="modalConfirmYes" ' +
                htmlAttributes +
                `><span class="jl-localization">Confirm</span></button>`
        );
    modal.find("#modalConfirmYes span").text(buttonText.Submit);
    modal.find("#modalConfirmNo span").text(buttonText.Cancel);
    if(!hasCancelButton) {
        modal.find("#modalConfirmNo").hide();
    } else {
        modal.find("#modalConfirmNo").show();
    }
    GetSwitchModalDiv("deleteConfirmationModal", function (newModalContent) {
        newModalContent.find("#modalConfirmYes").on("click", function (e) {
            toggleSpinnerModal(true);
            if (isFunction(confirmYesCallback)) {
                confirmYesCallback(e);
            }
            if (closeSwitchModal !== false) {
                closeSwitchModal = true;
            }
            if (!confirmHasNewModal)
                setTimeout(function () {
                    SwitchModalOnSuccess(
                        closeSwitchModal,
                        keepLoadingCallback,
                        isLoading
                    );
                }, 200);
        });

        newModalContent.find("#modalConfirmNo").on("click", function (e) {
            if (isFunction(confirmNoCallback)) {
                confirmNoCallback(e);
            }
        });

        if (extraButton) {
            newModalContent.find("#modalConfirmExtra").on("click", function (e) {
                if (isFunction(confirmExtraCallback)) {
                    confirmExtraCallback(e);
                }
            });
        }

        $(document).mouseup(function (e) {
            var modalSwitchContainer = $("#modalSwitchContainer");
            var closeModal = $("#closeModal");
            // if the target of the click is the container
            if (modalSwitchContainer.is(e.target) || closeModal.is(e.target)) {
                if (e.button === 0) {
                    //Left mouse button
                    if (isFunction(confirmNoCallback)) {
                        confirmNoCallback(e);
                    }
                }
            }
        });
    }, modalSize);
}

function saveModalConfirm(
    confirmMessage,
    htmlAttributes,
    confirmYesCallback,
    modalTitle,
    confirmYesButtonClass,
    confirmYesButtonIcon = "jl-content-save",
    confirmYesButtonText = t("Save"),
    closeSwitchModal,
    confirmHasNewModal,
    confirmNoCallback,
    keepLoadingCallback = null
) {
    var modal = $("#saveConfirmationModal");
    if (modalTitle) modal.find(".modal-title").html(modalTitle);
    modal.find("#modalConfirmMessage").html(confirmMessage);
    modal.find("#modalConfirmYes").remove();
    modal
        .find(".modal-footer")
        .append(
            `<button type="button" class="jl-custom-btn jl-button-green ml12 ${confirmYesButtonClass}" id="modalConfirmYes" ${htmlAttributes}>
                ${confirmYesButtonText}
            </button>`
        );

    GetSwitchModalDiv("saveConfirmationModal", function (newModalContent) {
        newModalContent.find("#modalConfirmYes").on("click", function (e) {
            toggleSpinnerModal(true);
            if (isFunction(confirmYesCallback)) {
                confirmYesCallback(e);
            }
            if (closeSwitchModal !== false) {
                closeSwitchModal = true;
            }
            if (!confirmHasNewModal)
                setTimeout(function () {
                    SwitchModalOnSuccess(closeSwitchModal, keepLoadingCallback);
                }, 200);
        });
        newModalContent.find("#modalConfirmNo").on("click", function (e) {
            if (isFunction(confirmNoCallback)) {
                confirmNoCallback(e);
            }
        });

        $(document).mouseup(function (e) {
            var modalSwitchContainer = $("#modalSwitchContainer");
            var closeModal = $("#saveCloseModal");
            // if the target of the click is the container
            if (modalSwitchContainer.is(e.target) || closeModal.is(e.target)) {
                if (e.button === 0) {
                    //Left mouse button
                    if (isFunction(confirmNoCallback)) {
                        confirmNoCallback(e);
                    }
                }
            }
        });
    });
}

function deleteModalConfirm(
    htmlAttributes,
    confirmYesCallback,
    confirmYesButtonClass,
    closeSwitchModal,
    confirmHasNewModal,
    confirmNoCallback,
    keepLoadingCallback = null,
    messageDelete = null,
    messageClass
) {
    var modal = $("#undeployConfirmationModal");
    modal.find("#modalConfirmYes").remove();
    modal
        .find(".modal-footer")
        .append(
            '<button type="button" disabled="disabled" class="jl-custom-btn jl-button-red ml12 ' +
                confirmYesButtonClass +
                '" id="modalConfirmYes" ' +
                htmlAttributes +
                '><span class="jl-localization">Delete</span></button>'
        );
    if (messageDelete)
        modal
            .find(".modal-body .color-red .delete-message")
            .contents()
            .last()
            .replaceWith(messageDelete);
    if (messageClass)
        modal.find(".modal-body .color-red").addClass(messageClass);

    GetSwitchModalDiv("undeployConfirmationModal", function (newModalContent) {
        newModalContent.find("#modalConfirmYes").on("click", function (e) {
            toggleSpinnerModal(true);
            if (isFunction(confirmYesCallback)) {
                confirmYesCallback(e);
            }
            if (closeSwitchModal !== false) {
                closeSwitchModal = true;
            }
            if (!confirmHasNewModal)
                setTimeout(function () {
                    SwitchModalOnSuccess(closeSwitchModal, keepLoadingCallback);
                }, 200);
        });
        newModalContent.find("#modalConfirmNo").on("click", function (e) {
            if (isFunction(confirmNoCallback)) {
                confirmNoCallback(e);
            }
        });
    });

    var agreeCheckbox = $("#agreeCheckbox"),
        btnSave = $("#modalConfirmYes");
    agreeCheckbox.on("change", function () {
        if (agreeCheckbox.is(":checked")) {
            btnSave.attr("disabled", false);
        } else {
            btnSave.attr("disabled", true);
        }
    });
}

function ensureModalConfirm(options = {
    confirmYesCallback,
    confirmYesButtonClass,
    closeSwitchModal,
    confirmHasNewModal,
    confirmNoCallback,
    keepLoadingCallback: null,
    modalTitle: 'Confirm',
    messageClass,
    htmlAttributes,
    confirmMessBody,
    buttonText,
    ensureMessage
}) {
    let {
        confirmYesCallback,
        confirmYesButtonClass,
        closeSwitchModal,
        confirmHasNewModal,
        confirmNoCallback,
        keepLoadingCallback,
        modalTitle,
        messageClass,
        htmlAttributes,
        confirmMessBody,
        buttonText,
        ensureMessage
    } = options;
    let modal = $("#ensureConfirmationModal");

    modal.find("#modalConfirmYes").remove();
    if (modalTitle) modal.find(".modal-title").html(modalTitle);

    modal
        .find(".modal-body #confirmMessBody")
        .replaceWith(confirmMessBody);

    modal
        .find(".modal-footer")
        .append(
            '<button type="button" disabled="disabled" class="jl-custom-btn jl-button-skyblue ml12 ' +
                confirmYesButtonClass +
                '" id="modalConfirmYes" ' +
                htmlAttributes +
                '><span class="jl-localization">Confirm</span></button>'
        );
    if(buttonText){
        modal.find("#modalConfirmYes span").text(buttonText.Submit);
        modal.find("#modalConfirmNo span").text(buttonText.Cancel);
    }
    if(ensureMessage){
        modal
        .find(".modal-footer .ensure-message")
        .text(ensureMessage);
    }
    if (messageClass)
        modal.find(".modal-body .color-red").addClass(messageClass);

    GetSwitchModalDiv("ensureConfirmationModal", function (newModalContent) {
        newModalContent.find("#modalConfirmYes").on("click", function (e) {
            toggleSpinnerModal(true);
            if (isFunction(confirmYesCallback)) {
                confirmYesCallback(e);
            }
            if (closeSwitchModal !== false) {
                closeSwitchModal = true;
            }
            if (!confirmHasNewModal)
                setTimeout(function () {
                    SwitchModalOnSuccess(closeSwitchModal, keepLoadingCallback);
                }, 200);
        });
        newModalContent.find("#modalConfirmNo").on("click", function (e) {
            if (isFunction(confirmNoCallback)) {
                confirmNoCallback(e);
            }
        });
    });

    let agreeCheckbox = $("#ensureAgreeCheckbox"),
        btnSave = $("#modalConfirmYes");
    agreeCheckbox.on("change", function () {
        if (agreeCheckbox.is(":checked")) {
            btnSave.attr("disabled", false);
        } else {
            btnSave.attr("disabled", true);
        }
    });
}

function isFunction(value) {
    return (
        !(value === undefined || value === null) && typeof value === "function"
    );
}

// *** Responsive Menu
var oldWindowWidth = $(window).width();
var newWindowWidth = $(window).width();
var itemToMove;
var additionalMenu = {
    minRemainSpace: 150,
    additionalMenuWidth: function () {
        return $(".additional-menu-wrapper").width();
    },
    additionalMenuItemsWidth: function () {
        return $(".additional-menu-wrapper > nav").width();
    },
    titleWidth: function () {
        return $(".additional-menu-wrapper h3").width();
    },
    remainingSpace: function () {
        return (
            this.additionalMenuWidth() -
            this.additionalMenuItemsWidth() -
            this.titleWidth()
        );
    },
    resizeBigToSmall: function () {
        return oldWindowWidth >= newWindowWidth;
    },
    bindMoveItemToResponsive: function (className) {
        $($(className).get().reverse()).each(function () {
            additionalMenu.remainingSpace();

            if (additionalMenu.remainingSpace() >= 50) {
                return false;
            }

            if ($(this).hasClass("share-button") === false) {
                $(this).prependTo(".responsive-menu > .dropdown-menu");
            }
        });
    },
    bindMoveAllToResponsive: function (className) {
        $($(className).get().reverse()).each(function () {
            if ($(this).hasClass("share-button") === false) {
                $(this).prependTo(".responsive-menu > .dropdown-menu");
            }
        });
    },
    moveItemToResponsive: function () {
        this.bindMoveItemToResponsive(".additional-menu > li:not(.ignorable)");
        this.bindMoveItemToResponsive(".additional-menu > li.ignorable");
    },
    moveAllToResponsive: function () {
        this.bindMoveAllToResponsive(".additional-menu > li:not(.ignorable)");
        this.bindMoveAllToResponsive(".additional-menu > li.ignorable");
    },
    moveItemToAdditional: function () {
        $(".responsive-menu > .dropdown-menu > li").each(function () {
            if (
                additionalMenu.remainingSpace() <
                    additionalMenu.minRemainSpace ||
                $(this).hasClass("menu-separator")
            ) {
                return false;
            }
            $(this).prependTo(".additional-menu");
        });
        if (additionalMenu.remainingSpace() < additionalMenu.minRemainSpace) {
            additionalMenu.moveItemToResponsive();
        }
    },
    drawAdditionalMenu: function () {
        $(".additional-menu").css({ opacity: 0 });
        newWindowWidth = $(window).width();
        if (newWindowWidth <= 768) {
            additionalMenu.moveAllToResponsive();
        } else {
            if (additionalMenu.resizeBigToSmall()) {
                additionalMenu.moveItemToResponsive();
            } else {
                additionalMenu.moveItemToAdditional();
            }
        }
        $(".additional-menu").css({ opacity: 1 });
        if ($(".responsive-menu .dropdown-menu > li").length > 1) {
            $(".responsive-menu").show();
        } else {
            $(".responsive-menu").hide();
        }

        oldWindowWidth = $(window).width();
    },
};

$(function () {

    if (
        $("body").hasClass("jl-sidebar-collapse") &&
        $(".additional-menu").length
    ) {
        $("body").one(
            "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (e) {
                additionalMenu.drawAdditionalMenu();
            }
        );
    } else if ($(".additional-menu").length) {
        additionalMenu.drawAdditionalMenu();
    }

    $(window).resize(function () {
        additionalMenu.drawAdditionalMenu();
    });

    $(".jl-sidebar-toggle").click(function () {
        if ($(".additional-menu").length) {
            $("body").one(
                "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function (e) {
                    if ($("body").hasClass("jl-sidebar-collapse")) {
                        additionalMenu.moveItemToAdditional();
                    } else {
                        additionalMenu.moveItemToResponsive();
                    }
                }
            );
        }
    });
});

$(window).on("resize", function () {
    if ($(".additional-menu").length) {
        additionalMenu.drawAdditionalMenu();
    }
});
// Responsive Menu ***

$(document).on("click", ":submit", function (event) {
    function handleInvalidForm(item, form, comboBox, event) {
        comboBox.text("");
        item.val("");
        if (!isBlank(item.attr("data-val-required"))) {
            //This field is required
            form.find(".disableSubmitButton").prop("disabled", false);
            event.preventDefault();
            return false;
        }
        return true;
    }
    var button = $(this);
    var form = button.closest("form");
    var isValid = true;
    form.find("[data-role]").each(function () {
        if (isValid) {
            var item = $(this);
            var elType = item.attr("data-role");
            try {
                if (elType === "combobox") {
                    var comboBox = item.getKendoComboBox();
                    if (!isBlank(comboBox)) {
                        var selectedItem = comboBox.dataItem();
                        if (isBlank(selectedItem)) {
                            if (
                                comboBox.text() === comboBox.value() ||
                                isBlank(comboBox.value())
                            ) {
                                //This is user type in value
                                isValid = handleInvalidForm(
                                    item,
                                    form,
                                    comboBox,
                                    event
                                );
                            }
                        } else if (
                            selectedItem[comboBox.options.dataValueField] ===
                            globalComboxModalTemporaryItemId
                        ) {
                            //Temporary item when create on fly
                            clearKendoComboboxItem(
                                comboBox,
                                selectedItem[comboBox.options.dataValueField]
                            );
                            isValid = handleInvalidForm(
                                item,
                                form,
                                comboBox,
                                event
                            );
                        }
                    }
                }
            } catch (exception) {}
        }
    });

    // The following code will re-initialize the validation and reset all the previously configured custom rules and messages.
    // https://www.telerik.com/forums/can't-find-validator-object-for-custom-validator#tsUiQWrumEu3v6CCPkz9Lw
    // var validator = form.kendoValidator().data("kendoValidator");
    var validator =
        form.data("kendoValidator") ||
        (form.hasClass("KendoFormValidation")
            ? form.kendoValidator().data("kendoValidator")
            : undefined);
    return validator ? validator.validate() && isValid : isValid; //Show error message
});

// JL Switch 2 Ways (left - right toggle);
$(document).on(
    "click",
    ".jl-switch-2ways .switch-left, .jl-switch-2ways .switch-right",
    function () {
        var element = $(this);
        if (element.is("[disabled]")) return;

        var switchInput = element
            .closest(".jl-switch-2ways")
            .find("input:checkbox");
        if (element.hasClass("switch-left")) {
            switchInput.prop("checked", false);
        } else if (element.hasClass("switch-right")) {
            switchInput.prop("checked", true);
        }
        if (
            switchInput.attr("id") == "ViewModeId" ||
            switchInput.attr("id") == "multiSectionQuoteToggle"
        ) {
            switchInput.change();
        }
        element
            .closest(".jl-switch-2ways")
            .find(".toggleTotalOption")
            .trigger("change");
    }
);

//Prevent wrong length calculate for max length field
$.validator.methods.maxlength = function (value, element, param) {
    if (param > 0) {
        var newValue = value
            .replace(/\r\n/g, "\n") // reduce all \r\n to \n
            .replace(/\r/g, "\n") // reduce all \r to \n
            .replace(/\n/g, "\r\n"); // expand all \n to \r\n
        if (param < newValue.length) {
            element.value = newValue;
            return false;
        }
    }
    return true;
};

function addSubmenuInto(menuId, value, itemId = "") {
    whenAvailable("jlSidebarVM", function () {
        var menuItem = $(menuId).append(
            "<li class='active'><a href='#' id='" +
                itemId +
                "'>" +
                value +
                " </a></li>"
        );
        $(menuItem).toggleClass("active");
        $(menuItem).closest("ul.jl-submenu").toggleClass("menu-open");
        $(menuItem).closest("ul.jl-submenu").css("display", "block");
        $(menuItem).closest("li.jl-has-submenu").toggleClass("open");
    });
}

//Prevent white space for required field
$(document).on(
    "blur",
    "input[aria-required], input[required], textarea[data-val-required], textarea[aria-required], textarea[required]",
    function () {
        var item = $(this);
        if (item.val().length > 0 && $.trim(item.val()).length == 0) {
            item.val("").blur();
        }
        return true;
    }
);

// *** TableResponsive
var mb = 560;
var xs = 768;
var sm = 992;
var md = 1200;
var lg = 1440;

onResizeResponsiveList();
drawListNavTabs();

function onResizeResponsiveList() {
    $(window).resize(function () {
        var width = $(window).width();
        if (width < xs) {
            addResponsiveList("xs");
        } else if (width < sm) {
            addResponsiveList("sm");
        } else if (width < md) {
            addResponsiveList("md");
        } else {
            addResponsiveList("lg");
        }

        drawListNavTabs();
    });
}

function addResponsiveList(size) {
    $(".listing-body").each(function () {
        var itemToAdd = $(this).find(
            ".list-item > .list-item-top > .hidden-" + size
        );

        itemToAdd.each(function () {
            $(this).addClass("responsive-mode");
            $(this).prependTo(
                $(this).closest(".list-item").find(".list-item-bottom")
            );
        });

        var itemToRemove = $(this)
            .find(".list-item > .list-item-bottom > .responsive-mode")
            .not(".hidden-" + size);
        itemToRemove.each(function () {
            $(this).removeClass("responsive-mode");
            $(this).appendTo(
                $(this).closest(".list-item").find(".list-item-top")
            );
        });
    });
}

function drawListNavTabs() {
    $(".jl-table-old-tabs-wrapper").each(function () {
        var tabsWidth = $(this).find(".nav").width();
        var totalItemsWidth = 0;

        $(this)
            .find(".nav > li")
            .each(function (index) {
                totalItemsWidth += $(this).width();
            });

        if (tabsWidth >= totalItemsWidth) {
            $(this).removeClass("multi-row");
        } else {
            $(this).addClass("multi-row");
        }
    });
}

// TableResponsive ***

// *** Custom Selects UI
$(document).ready(function () {
    drawCustomSelectUI();
    enableScrollToValidation();
});

function drawCustomSelectUI() {
    $("select").each(function () {
        if (!$(this).parent().hasClass("md-select")) {
            if ($(this).closest(".k-multiselect").length) {
                $(this).closest(".k-multiselect").addClass("jl-select-custom");
                if ($(this).prop("disabled") == true) {
                    $(this).closest(".k-multiselect").addClass("jl-disabled");
                }
            } else {
                if ($(this).parent().hasClass("jl-select-custom")) {
                    return;
                }
                if ($(this).prop("disabled") == true) {
                    $(this).wrap(
                        '<div class="jl-select-custom jl-disabled"></div>'
                    );
                } else {
                    $(this).wrap('<div class="jl-select-custom"></div>');
                }
            }
        }
    });

    $(".modal").on("show.bs.modal", function (e) {
        $(".modal select")
            .closest(".k-multiselect")
            .addClass("jl-select-custom");
    });
}

// Custom Selects UI ***

var UndefinedValueKey = "undefined";
function convertStringToBoolean(stringValue) {
    if (stringValue !== UndefinedValueKey && stringValue != null) {
        return stringValue.toLowerCase() === "true";
    }

    return false;
}

/*Lazy load for tabs*/
var getLazyLoadAction = function (tabElement, attrName) {
    var attrValue = tabElement.attr(attrName);
    if (typeof attrValue != "undefined" && attrValue != "") {
        return { Action: attrValue, Element: tabElement };
    } else {
        var matchingElements = tabElement.find("[" + attrName + "]");
        if (matchingElements.length > 0) {
            return {
                Action: matchingElements.attr(attrName),
                Element: matchingElements,
            };
        }
    }
    return null;
};

function handleLazyLoadTabAction(lazyLoadAction, tabElement, hash){
    lazyLoadAction.Element.load(lazyLoadAction.Action, function () {
        toggleSpinnerModal(false);
        setTimeout(function () {
            JLInitializeUIControls(tabElement);
            if (typeof initDateTimePickers === "function") {
                initDateTimePickers(tabElement);
            }
            drawCustomSelectUI();
            typeof addAdditionalTabButtons === 'function' && addAdditionalTabButtons();
            applySearchTermLimit(SEARCH_TERM_INPUT_CHARACTER_LIMIT);
            onLoadFocusSearchTerm(hash);
        });
    });
}


function lazyLoadTabContent() {
    var tabElement = $(window.location.hash);
    if (tabElement.length > 0) {
        var hasLazyLoaded = tabElement.data("has-lazy-loaded");
        if (hasLazyLoaded !== true) {
            var lazyLoadAction = getLazyLoadAction(
                tabElement,
                "data-lazy-load-action"
            );
            if (lazyLoadAction) {
                toggleSpinnerModal(true);
                lazyLoadAction.Element.load(lazyLoadAction.Action, function () {
                    toggleSpinnerModal(false);
                    setTimeout(function () {
                        JLInitializeUIControls(tabElement);
                        if (typeof initDateTimePickers === "function") {
                            initDateTimePickers(tabElement);
                        }
                        drawCustomSelectUI();
                        typeof addAdditionalTabButtons === 'function' && addAdditionalTabButtons();
                        applySearchTermLimit(SEARCH_TERM_INPUT_CHARACTER_LIMIT);
                        if (typeof onLoadFocusSearchTerm === 'function') onLoadFocusSearchTerm(hash);
                    });
                });
            } else {
                var lazyLoadFunction = getLazyLoadAction(
                    tabElement,
                    "data-lazy-load-function"
                );

                if (lazyLoadFunction) {
                    toggleSpinnerModal(true);
                    const LAZYLOAD_FNC = new Function(lazyLoadFunction.Action + "()");
                    LAZYLOAD_FNC();
                }
            }

            tabElement.data("has-lazy-loaded", true);
        }
    }
}

function triggerCurrentTabLoad() {
    var tabElement = $(window.location.hash);
    var lazyLoadAction = getLazyLoadAction(tabElement, "data-lazy-load-action");
    toggleSpinnerModal(true);
    lazyLoadAction.Element.load(lazyLoadAction.Action, function () {
        toggleSpinnerModal(false);
        setTimeout(function () {
            JLInitializeUIControls(tabElement);
            if (typeof initDateTimePickers === "function") {
                initDateTimePickers(tabElement);
            }
            drawCustomSelectUI();
            typeof addAdditionalTabButtons === 'function' && addAdditionalTabButtons();
            applySearchTermLimit(SEARCH_TERM_INPUT_CHARACTER_LIMIT);
            if (typeof onLoadFocusSearchTerm === 'function') onLoadFocusSearchTerm(hash);
        });
    });
}

$(function () {
    lazyLoadTabContent();
    $(window).on("hashchange", function () {
        lazyLoadTabContent();
    });
});

//Find duplicate in array
function doesArrayContainDuplicates(a, key) {
    var counts = [];
    for (var i = 0; i < a.length; i++) {
        var duplicateKey;
        if (key) {
            duplicateKey = a[i][key];
        } else {
            duplicateKey = a[i];
        }
        if (counts[duplicateKey] === undefined) {
            counts[duplicateKey] = 1;
        } else {
            return true;
        }
    }
    return false;
}

//Serialize form to Object
function serializeForm(form) {
    var data = {};

    $.each(form.serializeArray(), function (_, kv) {
        // in case there is more than 1 value for a particular key (property name)
        // that values should be groupped in an array
        // so that multiple values could be submitted to server not only one
        if (data[kv.name]) {
            if (Array.isArray(data[kv.name])) {
                data[kv.name].push(kv.value);
            } else {
                data[kv.name] = Object.assign([], [data[kv.name], kv.value]);
            }
        } else {
            data[kv.name] = kv.value;
        }
    });
    //Razor render two input elements for checkbox, so the serializeArray method does not work, we have to reset the value
    form.find('input[type="checkbox"]').each(function () {
        data[this.name] = $(this).is(":checked");
    });
    return data;
}

var buttonSelectors =
    "a[class*='jl-button-'], a[class*='jl-icon'], li[class*='jl-button-'] a, button";

$(document).on("click", buttonSelectors, function (e) {
    $(this).blur();
});

function blurAllButtons() {
    $(buttonSelectors).each(function () {
        $(this).blur();
    });
}

function findForm(element, lookUp) {
    var form = $(element);
    if (form.prop("tagName") !== "FORM") {
        if (lookUp === true) {
            form = form.closest("form");
        } else {
            form = form.find("form");
        }
    }
    return form;
}

function jlRadioNav() {
    let jlNav = $(".jl-radio-nav");
    if (jlNav.length) {
        $(".jl-radio-nav .nav-item").on("click", function (e) {
            if ($(this).attr("disabled") === "disabled") {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            $(this)
                .closest(".jl-radio")
                .find('[type="radio"]')
                .prop("checked", true);
        });
    }
}

function jlKendoSwitch() {
    let kSwitch = $(".kendo-switch");

    if (kSwitch.length) {
        kSwitch.each(function () {
            let messYes = $(this).attr("data-message-yes") || "Yes",
                messNo = $(this).attr("data-message-no") || "No",
                enabled = $(this).attr("data-enable") || false;

            $(this).kendoSwitch({
                checked: enabled,
                messages: {
                    checked: messYes,
                    unchecked: messNo,
                },
            });
        });
    }
}

$(document).ready(function (e) {
    jlRadioNav();
});

// *** Switch Password Visibility
$(document).on("click", ".jl-form-group .toggle-password-view", function () {
    $(this).toggleClass("jl-eye-outline jl-eye-off");
    if ($(this).hasClass("jl-eye-outline"))
        $(this)
            .closest(".jl-form-group")
            .find("input")
            .attr("type", "password");
    else $(this).closest(".jl-form-group").find("input").attr("type", "text");
});
// Switch Password Visibility ***

// *** New Input Styles
$(function () {
    $(".jl-form-control").focusin(function () {
        if (!$(this).hasClass("hilight-label"))
            $(this).addClass("hilight-label");
    });

    $(".jl-form-control").focusout(function () {
        if (!$(this).val()) $(this).removeClass("hilight-label");
    });

    $(".jl-form-control").each(function (index) {
        if ($(this).val()) $(this).addClass("hilight-label");
    });

    $(".jl-form-control").change(function () {
        if (!$(this).val()) $(this).removeClass("hilight-label");
        else $(this).addClass("hilight-label");
    });
});
// New Input Styles ***

function isPotentiallyDangerousHtml(str) {
    var scriptRegex = new RegExp(
        "^(?!(.|\n)*<[a-z!/?])(?!(.|\n)*&#)(.|\n)*$",
        "i"
    );
    return !scriptRegex.test(str);
}

$(document).on("click", ".print-page", function () {
    window.print();
});

function ScrollToTop() {
    window.scroll(0, 0);
}

(function ($) {
    $(document).ajaxError(function (e, jqxhr, settings, exception) {
        e.stopPropagation();
        if (!jqxhr) return;

        var status = jqxhr.status;

        if (!jqxhr.responseText) return;
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(jqxhr.responseText);
        } catch (ex) {}

        if (status == 413 || status == 403) {
            var msg =
                "Your request is rejected, Please contact support team if you need help.";
            if (jsonResponse) {
                if (jsonResponse.redirectUrl) {
                    window.location.href = canonicalize(jsonResponse.redirectUrl);
                    return;
                }

                if (jsonResponse.message) {
                    msg = jsonResponse.message;
                }
            }

            AddErrorMessage(msg);
        } else {
            if (jsonResponse) {
                //check if there is outstanding pages on redirect and instead open in new tab.
                if (
                    window.onbeforeunload != null &&
                    jsonResponse.redirectUrl != null
                ) {
                    openUrlInNewTab(jsonResponse.redirectUrl);
                } else if (jsonResponse.redirectUrl) {
                    window.location.href = canonicalize(jsonResponse.redirectUrl);
                }

                if (jsonResponse.message) {
                    var message = jsonResponse.message;
                    AddErrorMessage(message);
                    $(".disableSubmitButton").prop("disabled", false);
                    toggleSpinnerModal(false);
                }
            }
        }
    });
})(jQuery);

// COPY TO CLIPBOARD ***

// Need to apply class .jl-toggle-enable to 'Copy' button
// and have it inside of a div with class .form - group

$(document).on(
    "click",
    "div.form-group button.jl-modal-copy",
    function (event) {
        var $copyButton = $(event.target);

        var $uberLinkTextBox = $copyButton
            .closest("div.form-group")
            .find("input");

        $uberLinkTextBox.select();

        document.execCommand("copy");
        AddNotificationMessage("Copied to clipboard");
    }
);

// COPY TO CLIPBOARD ***
var alreadyGotTemplates = false;

function getDocumentTemplates(getTemplateUrl, isModal) {
    if (alreadyGotTemplates && !isModal) return;
    var uls = $(".template-containers");
    if (isModal) uls = $(".template-containers-modal");
    if (uls.children().length === 0) {
        uls.append('<span class="loading"></span>'); // Start the loading of the items
        JL_SERVICES.get({
            url: canonicalize(getTemplateUrl),
            success: (data) => {
                if (data.success) {
                    const hasQuoteText = (element) =>
                        element.Title.toLowerCase().includes("quote");
                    const isQuoteTemplate =
                        data.AdditionalData.some(hasQuoteText);
                    if (
                        (user_locale === "en-US" || user_locale === "en-CA") &&
                        isQuoteTemplate
                    ) {
                        data.AdditionalData.map((item) => {
                            if (item.IsDefaultSystemTemplate) {
                                item.Title = item.Title;
                            }
                        });
                    }
                    uls.children(".loading").remove();
                    uls.each(function (index, ul) {
                        var $ul = $(ul);
                        if ($ul.children().length > 0) return;

                        var href = $ul.data("href");
                        var click = $ul.data("click");
                        var templateType = $ul.data("type");
                        var callBack = $ul.data("callback");
                        var templateCount =
                            (data.AdditionalData &&
                                data.AdditionalData.length) ||
                            0;
                        var defaultTooltip = t("This is your Default Template");
                        var defaultStar = `<i class="jli jl-star" data-toggle="tooltip" data-placement="top" data-original-title="${defaultTooltip}"></i>`;
                        var divider = `<li class="dropdown-divider"></li>`;
                        var newTemplate =
                            '&nbsp;<span class="label label-unsuccess jl-localization">New</span>';
                        if (isBlank(callBack)) callBack = "null";

                        for (var i = 0; i < templateCount; i++) {
                            var template = data.AdditionalData[i];
                            var titleTempl = t("Template Settings");
                            var openSettingTooltip = t(
                                "Open template settings"
                            );
                            var urlTemplateSetting = canonicalize(
                                `/Template#${templateType}`
                            );
                            var templateSettings = `<li>
                            <a href="${urlTemplateSetting}" target="_blank">
                                <i class="jli jl-settings" data-toggle="tooltip" data-placement="top" data-original-title="${openSettingTooltip}"></i>
                                <span>${titleTempl}</span>
                            </a>
                        </li>`;
                            const fromPPMInvoice = getTemplateUrl
                                ?.toLowerCase()
                                .includes("ppminvoice");

                            let className = "downloadTemplate";
                            var poClass = "";
                            var _href;

                            if ($ul.hasClass("poMarkAsSentModalClass"))
                                poClass = "poMarkAsSentModal";
                            if (
                                typeof $ul.data("icon") !== "undefined" &&
                                $ul.data("icon") === "mdi-printer"
                            ) {
                                className = "printTemplate";
                                _href = fromPPMInvoice
                                    ? canonicalize(
                                          "/Document/PrintPPMInvoice/" +
                                              modelDetailId
                                      )
                                    : href;
                            } else {
                                _href = fromPPMInvoice
                                    ? canonicalize(
                                          "/Document/DownloadPPMInvoice/" +
                                              modelDetailId
                                      )
                                    : href;
                            }
                            var url = `${_href}?templateId=${template.TemplateId}`;
                            var li;

                            if (isBlank(click)) {
                                li = `
                                <li>
                                    <a data-url="${url}"  class="${poClass} ${className}">
                                        <span>${
                                            template.Title
                                        }</span>
                                        ${
                                            template.HasNewTemplate
                                                ? newTemplate
                                                : ""
                                        }
                                        ${template.IsDefault ? defaultStar : ""}
                                    </a>
                                </li>`;
                            } else {
                                li = `
                                <li>
                                <button type="button" onclick="${click}('${url}', ${callBack})">
                                    <span class="jl-localization" data-localize-culture="true">${
                                        template.Title
                                    }</span>
                                    ${
                                        template.HasNewTemplate
                                            ? newTemplate
                                            : ""
                                    }
                                    ${template.IsDefault ? defaultStar : ""}
                                </button>
                                </li>`;
                            }
                            if (
                                (template.IsDefault && templateCount > 1) ||
                                templateCount - 1 === i
                            ) {
                                li += divider;
                            }
                            if (templateCount - 1 === i) {
                                li += templateSettings;
                            }

                            $ul.append($(li));
                        }
                    });
                    bindActionTemplate();
                    if (!isModal) alreadyGotTemplates = true;
                }
            },
        });
    }
}

function checkDocumentTemplateType(e, url, isModal = false) {
    let controllerName = $("#controllerName").val();
    var newUrl =
        controllerName === "PPMInvoice"
            ? canonicalize(
                  `/api/DocumentTemplate/GetDocumentTemplatesForEmailInvoice?type=PPMInvoice&resourceId=${modelDetailId}`
              )
            : url;

    if (typeof QuotePricesVM != "undefined" && typeof storage != "undefined") {
        if (window.location.pathname.includes('/ProjectQuote/Detail/')) {
            getDocumentTemplates(url);
            return;
        }

        var type = storage.state.IsNormalQuote ? "Quote" : "QuoteMultiSection";
        newUrl =
            storage.state.quoteApi.GetDocumentTemplatesForMenu +
            type +
            `&resourceId=${modelDetailId}`;
        $(e)
            .siblings(".template-containers")
            .attr("isNormalQuote", type === "Quote");
        getDocumentTemplates(newUrl);
        return;
    }
    getDocumentTemplates(newUrl, isModal);
}

async function onClickShareEmail(url) {
    toggleSpinnerModal(true);
    const response = await checkTargetFrozenStatus();
    if (!response.success) {
        toggleSpinnerModal(false);
        return;
    }
    buttonGetWithAntiForgery(url, handleSwitchModalReturn);
}

async function checkTargetFrozenStatus() {
    let response = { success: true };
    if (
        typeof objSuspendModel === "undefined" ||
        !objSuspendModel.ppmContractId
    )
        return response;
    await JL_SERVICES.get({
        url: canonicalize("/api/Job/ValidateJobFrozenStatus"),
        params: {
            ppmContractId: objSuspendModel.ppmContractId,
            jobId: objSuspendModel.jobId,
            errorEntityType: objSuspendModel.entityType,
        },
        success: (data) => {
            response = data;
            return data;
        },
    });
    return response;
}

// This can be used for things like Discount when adding / editing invoice lines
// It is useful when we want to toggle the background colour of a text box to show it has a value and clear another text box
// So when user enters Discount Percentage, it will highlight blue, and Discount Amount will become empty text and white background
function clearAndRemoveColour(
    colourSelector,
    clearSelector,
    colourHex = "#e5f4f6",
    emptyHex = ""
) {
    if (!isBlank(colourSelector)) {
        var $inputToColour = $(colourSelector);
        if ($inputToColour.val()) {
            $inputToColour.css("background-color", colourHex);
        } else {
            $inputToColour.css("background-color", emptyHex);
        }
    }

    if (!isBlank(clearSelector)) {
        var $inputToClear = $(clearSelector);
        $inputToClear.val("");
        $inputToClear.css("background-color", emptyHex);
    }
}

// This is using to show/hide discount input type, when users want to change what kind of discount amount that they wants.
function bindShowHide(class_show, class_hide, id_show, id_hide, activeClass) {
    $(class_hide).removeClass(activeClass);
    if (!$(class_show).hasClass(activeClass)) {
        $(class_show).addClass(activeClass);
    }
    $(id_show).show();
    $(class_show).attr("selected", "selected");
    $(id_hide).hide();
    $(class_hide).removeAttr("selected");
}

function hideValidationKendo() {
    $("span.k-tooltip-validation").remove();
}

(function (e) {
    function t() {
        var e = document.createElement("p");
        var t = false;
        if (e.addEventListener)
            e.addEventListener(
                "DOMAttrModified",
                function () {
                    t = true;
                },
                false
            );
        else if (e.attachEvent)
            e.attachEvent("onDOMAttrModified", function () {
                t = true;
            });
        else return false;
        e.setAttribute("id", "target");
        return t;
    }
    function n(t, n) {
        if (t) {
            var r = this.data("attr-old-value");
            if (n.attributeName.indexOf("style") >= 0) {
                if (!r["style"]) r["style"] = {};
                var i = n.attributeName.split(".");
                n.attributeName = i[0];
                n.oldValue = r["style"][i[1]];
                n.newValue = i[1] + ":" + this.prop("style")[e.camelCase(i[1])];
                r["style"][i[1]] = n.newValue;
            } else {
                n.oldValue = r[n.attributeName];
                n.newValue = this.attr(n.attributeName);
                r[n.attributeName] = n.newValue;
            }
            this.data("attr-old-value", r);
        }
    }
    var r = window.MutationObserver || window.WebKitMutationObserver;
    e.fn.attrchange = function (i) {
        var s = { trackValues: false, callback: e.noop };
        if (typeof i === "function") {
            s.callback = i;
        } else {
            e.extend(s, i);
        }
        if (s.trackValues) {
            e(this).each(function (t, n) {
                var r = {};
                for (var i, t = 0, s = n.attributes, o = s.length; t < o; t++) {
                    i = s.item(t);
                    r[i.nodeName] = i.value;
                }
                e(this).data("attr-old-value", r);
            });
        }
        if (r) {
            var o = {
                subtree: false,
                attributes: true,
                attributeOldValue: s.trackValues,
            };
            var u = new r(function (t) {
                t.forEach(function (t) {
                    var n = t.target;
                    if (s.trackValues) {
                        t.newValue = e(n).attr(t.attributeName);
                    }
                    s.callback.call(n, t);
                });
            });
            return this.each(function () {
                u.observe(this, o);
            });
        } else if (t()) {
            return this.on("DOMAttrModified", function (e) {
                if (e.originalEvent) e = e.originalEvent;
                e.attributeName = e.attrName;
                e.oldValue = e.prevValue;
                s.callback.call(this, e);
            });
        } else if ("onpropertychange" in document.body) {
            return this.on("propertychange", function (t) {
                t.attributeName = window.event.propertyName;
                n.call(e(this), s.trackValues, t);
                s.callback.call(this, t);
            });
        }
        return this;
    };
})(jQuery);

function removeAllOpenTooltips() {
    $(".tooltip").remove();
}

function byteArrayToBase64(array) {
    var binary = "";
    var bytes = new Uint8Array(array);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

$(document).on("click", ".jl-toggle-menu > button", function () {
    var hasClassOpen = $(this).parent().hasClass("open");
    $(".jl-toggle-menu").removeClass("open");
    if (hasClassOpen) {
        $(this).parent().removeClass("open");
    } else {
        $(this).parent().addClass("open");
    }
});

$(document).mouseup(function (e) {
    var container = $(".jl-toggle-menu");
    if (typeof isPlannerPage !== "undefined" && isPlannerPage) {
        return;
    }
    if ($(".jl-toggle-menu.dismissPop.open").length > 0) {
        return false;
    }
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".jl-toggle-menu").removeClass("open");
    }
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

const buildURLQuery = (obj) =>
    Object.entries(obj)
        .map((pair) => pair.map(encodeURIComponent).join("="))
        .join("&");

function createBlobFormData(jsonObject, blobName) {
    var formData = new FormData();
    var dataFileBlob = new Blob([JSON.stringify(jsonObject)], {
        type: "application/json",
    });

    if (isBlank(blobName)) blobName = "dataFile";
    formData.append(blobName, dataFileBlob, "dataFileBlob");

    return formData;
}

const generateUUID = () => {
    var d = new Date().getTime();
    var d2 = (performance && performance.now && performance.now() * 1000) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
    );
};

const lightOrDark = (color) => {
    var r, g, b, hsp;
    if (color.match(/^rgb/)) {
        color = color.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
        );
        r = color[1];
        g = color[2];
        b = color[3];
    } else {
        color = +(
            "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
        );
        r = color >> 16;
        g = (color >> 8) & 255;
        b = color & 255;
    }
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    return hsp > 127.5 ? false : true;
};

function isUUID(value) {
    var regex = /[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i;
    var match = regex.exec(value);
    return match !== null;
}

function executeLazyLoad(container) {
    var items = isEmpty(container)
        ? $(".jl-lazyLoad")
        : container.find(".jl-lazyLoad");
    items.each(function (index, item) {
        var $item = $(item);
        if ($item.data("jl-lazyLoad-done") !== true) {
            var url = $item.data("url");
            if (url) {
                JL_SERVICES.get({
                    url: url,
                    success: function (data) {
                        if ($item.hasClass("replaceElement")) {
                            $item.before(data).remove();
                        } else {
                            $item.html(data);
                        }
                    },
                });
            }
            $item.data("jl-lazyLoad-done", true);
        }
    });
}

$(function () {
    executeLazyLoad();
});

function loadUrlAction(elementId) {
    var element = $(elementId);
    var url = element.data("url");
    if (url) {
        element.load(url, function () {
            if (typeof initDateTimePickers === "function")
                initDateTimePickers();
        });
    }
}

function openUrlInNewTab(url) {
    toggleSpinnerModal(false);
    SwitchModalOnSuccess(); // Close modals
    AddNotificationMessage(
        "Because of pending changes on this page, we will open a new tab."
    );
    setTimeout((e) => {
        window.open(url, "_blank");
    }, 2000);
}

function hasParentWithMatchingSelector(target, selector) {
    return [...document.querySelectorAll(selector)].some(
        (el) => el !== target && el.contains(target)
    );
}

function setVisibilityWrapper(isVisibility, element) {
    if (isVisibility === true) {
        $(element).show();
    } else {
        $(element).hide();
    }
}

/**
 * @param name of function to tracking available
 * @param callback is a function will be invoked after available
 * This function will be destroyed interval after 1 min log name of func tracking
 */
function whenAvailable(name, callback) {
    try {
        let selector;
        const interval = 50; // ms
        let totalTimeWaited = 0;
        const maxWaitTimeInMs = 1000 * 10; // 10s
        const checkIfAvailable = function() {
            if (window[name]) {
                clearInterval(selector);
                callback(window[name]);
            } else if (totalTimeWaited >= maxWaitTimeInMs) {
                clearInterval(selector);
                if (typeof RunningEnvironment !== 'undefined' && (EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Local || EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Dev)) {
                    console.error("Timed out while waiting for " + name);
                }
            } else {
                totalTimeWaited += interval;
            }
        };
        selector = setInterval(checkIfAvailable, interval);
    } catch (e) {
        throw e;
    }
}


function overrideTextArea() {
    var originalVal = $.fn.val;
    $.fn.val = function (value) {
        if (typeof formdesginerVM === "object") {
            if (originalVal.call(this) === "undefined") {
                return originalVal.call(this, value);
            }
        }
        if (typeof value === "undefined") {
            if ($(this).is("textarea")) {
                return originalVal
                    .call(this)
                    .replace(/\r\n/g, "\n")
                    .replace(/\r/g, "\n")
                    .replace(/\n/g, "\r\n");
            }
            return originalVal.call(this);
        } else {
            return originalVal.call(this, value);
        }
    };
}

function isEmpty(mixed_var) {
    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, "", "0"];

    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixed_var === emptyValues[i]) {
            return true;
        }
    }

    if (typeof mixed_var === "object") {
        for (key in mixed_var) {
            return false;
        }
        return true;
    }

    return false;
}

//From https://stackoverflow.com/questions/24048547/checking-if-an-object-is-array-like
function isArrayLike(item) {
    return (
        Array.isArray(item) ||
        (!!item &&
            typeof item === "object" &&
            item.hasOwnProperty("length") &&
            typeof item.length === "number" &&
            item.length > 0 &&
            item.length - 1 in item)
    );
}

function canonicalize(url) {
    var div = document.createElement("div");
    div.innerHTML = "<a></a>";
    if (url && isValidHttpUrl(url)) {
        url = url.replace(window.location.origin, "");
    }
    div.firstChild.href = url || '/'; // Ensures that the href is properly escaped
    div.innerHTML = div.innerHTML; // Run the current innerHTML back through the parser
    return div.firstChild.href;
}
var canonicalizePlugin;
function initCanonicalizePlugin() {
    waitFunctionName('Vue', () => {
        canonicalizePlugin = {
            install(Vue, options) {
                Vue.prototype.canonicalize = (url) => canonicalize(url);
            },
        };
        Vue.use(canonicalizePlugin);
    });
}
function bindTouchEvents() {
    return isMobileIpad() ? "click" : "mouseover";
}
function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

/**
 * get props
 * @param {Object} object
 * @param {String|Array} path
 * @param {*} defaultVal
 */
function _get(object, key, defaultVal) {
    key = Array.isArray(key) ? key : key.split(".");
    object = object[key[0]];
    if (object && key.length > 1) {
        return _get(object, key.slice(1));
    }
    return object === undefined || object ===  null ? defaultVal : object;
}

/**
 * debounce function
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 */

function debounce(func, wait, immediate) {
    var t;
    return function () {
        var c = this,
            args = arguments;
        clearTimeout(t);
        t = setTimeout(function () {
            t = null;
            if (!immediate) func.apply(c, args);
        }, wait);
        if (immediate && !t) func.apply(c, args);
    };
}

function throttle(func, wait) {
    let lastCall = 0;

    return function () {
        var c = this,
            args = arguments;
        const now = new Date().getTime();

        if (now - lastCall < wait) return;
        lastCall = now;

        func.apply(c, args);
    };
}

function getBool(val) {
    return !isNaN(+val) ? !!+val : !!String(val).toLowerCase().replace(!!0, "");
}

const omit = (o, ...paths) =>
    Object.fromEntries(Object.entries(o).filter(([k]) => !paths.includes(k)));

async function waitFunctionName(functionName, cb) {
    let maxWaitTimeInMs = 1000 * 60; // 1 min
    const intervalTimeInMs = 300;
    let timeout;
    let sleep = (ms) => {
        return new Promise((resolve) => timeout = setTimeout(resolve, ms));
    };
    while (typeof window[functionName] !== "function") {
        if (maxWaitTimeInMs <= 0) {
            if (typeof RunningEnvironment !== 'undefined' && (EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Local || EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Dev)) {
                console.error("Timed out while waiting for " + functionName);
            }
            clearTimeout(timeout);
            return;
        }
        maxWaitTimeInMs -= intervalTimeInMs;
        await sleep(intervalTimeInMs);
    }
    clearTimeout(timeout);
    cb();
}

function snackBarToggle(vm, action) {
    switch (action) {
        case "save":
        case "undo":
            vm.find(".jlMakeEditAble-Edit").show();
            vm.find(".snackbar").removeClass("open");
            vm.find(".form-control").attr("disabled", true);
            break;
        case "edit":
            vm.find(".jlMakeEditAble-Edit").hide();
            vm.find(".snackbar").addClass("open");
            vm.find(".form-control").attr("disabled", false);
            break;
        default:
            break;
    }
}

function getValueBetweenBrackets(text) {
    if (!text) return;
    var re = /\((.*)\)/i;
    return Number(text.match(re)[1]);
}

function submitFormWhenInputBlur() {
    $(document).on("blur change", ".autoSubmitWhenBlur", function () {
        let currentInput = $(this)
            .closest(".jl-select-custom")
            .find(".k-input");
        if (!currentInput.is(":focus")) {
            let form = $(this).closest("form").attr("id");
            bindAutoSubmit(form);
        }
    });
}

function kendoFormValidationBlock(formId) {
    $(document).ready(function () {
        $(".KendoFormValidation").kendoValidator();
        $("button.jl-button-save").on("click", function () {
            let form = $("#" + formId);
            if (typeof form !== "undefined") {
                $(".KendoFormValidation")
                    .kendoValidator()
                    .data("kendoValidator")
                    .validate();
                let valid = form.valid();
                if (valid) {
                    form.submit();
                }
            }
        });
    });
}

function regionHrefBreadcrumb() {
    let urlElement = $(".jl-breadcrumb, .region-helper").find("a");
    for (let i = 0; i < urlElement.length; i++) {
        let elem = urlElement[i];
        elem.href = canonicalize(elem.href);
    }
}
function removeEmpty(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != "" && typeof v != "boolean")
    );
}

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function triggerValidateInput(element) {
    wait(1).then(() => {
        $("input[name=" + element + "]").trigger("blur");
    });
}

function addOrRemove(array, value, force) {
    var index = array.indexOf(value);

    if (force === false) {
        if (index !== -1) {
            array.splice(index, 1);
        }
    } else if (force === true) {
        if (index === -1) {
            array.push(value);
        }
    } else {
        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }
    }
}

function fixKendoMultiSelectWhenClearSearch($element) {
    var multiselect = $element.data("kendoMultiSelect"),
        itemDeselect = "";
    if (typeof multiselect === "undefined") return;
    multiselect.bind("deselect", (e) => {
        itemDeselect = e.dataItem?.Id;
    });

    multiselect.bind("change", (e) => {
        if (itemDeselect) {
            multiselect.value(
                multiselect.value().filter((m) => m !== itemDeselect)
            );
        }

        // Keep searching options with field = Title
        if (multiselect._prev) {
            multiselect.dataSource.filter({
                field: "Title",
                operator: "contains",
                value: multiselect._prev,
            });
        }

        itemDeselect = "";
    });
}

function bindMobileHamburgerBtnClick(e) {
    e = e || window.e;
    e.preventDefault();
    e.stopPropagation();
    if (typeof jlSidebarVM !== "undefined") {
        jlSidebarVM.onMobileHamburgerClick();
    }
}

function check_tenant_tivoli() {
    const TenantIds = [
        "410da25f-ad77-4062-aeeb-13c1a483d34c", //Tivoli
        "0b4524b6-2463-429b-9446-ea769c5e9f82",
        "6fffaec3-5b7d-451a-a4c0-b1726ee716ee",
        "7121b752-599d-4cda-ba1b-7366d134f360",
        "05bd2813-d770-4444-bac2-9be6812b80a2",
        "cb089377-f195-4049-9372-dc364e3288ca",
        "c1aee118-d1c0-41a6-9bd5-68560599709a",
    ];
    return !!(typeof VM_TenantId !== "undefined" && TenantIds.includes(VM_TenantId));
}

function waitForElm(selector) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        const timeInMs = 60 * 1000; //one min to wait element
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (Date.now() - startTime >= timeInMs) {
                if (typeof RunningEnvironment !== 'undefined' && (EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Local || EnvironmentEnum[RunningEnvironment] === EnvironmentEnum.Dev)) {
                    console.error("Timed out while waiting for " + selector);
                }
                observer.disconnect();
            }
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

function initAutocompleAdressEvent(targetId, isAdvancedMobileFeatures = false) {
    var autocompleteTimeout = 0;
    var addressHiddenId = "AddressAutocompleteHiddenField";

    $("#" + targetId).wrap('<div class="address-autocomplete-block">');

    var newInput = document.createElement("INPUT");
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        newInput.setAttribute("type", isAdvancedMobileFeatures ? "text" : "password");
    } else {
        newInput.setAttribute("type", "text");
    }
    newInput.setAttribute("id", addressHiddenId);
    newInput.setAttribute("name", addressHiddenId);

    $(newInput).insertAfter($("#" + targetId));

    $(document).on("keydown focus input", "#" + targetId, function () {
        if ($(this).val() === $("#" + addressHiddenId).val()) return;

        clearTimeout(autocompleteTimeout);
        var target = document.getElementById(addressHiddenId);
        autocompleteTimeout = setTimeout(() => {
            target.value = $(this).val();
            $(target).focus();
        }, 1000);
    });

    $(document).on("keydown", "#" + addressHiddenId, function () {
        var newVal = $(this).val();
        var oldVal = $("#" + targetId).val();
        var $target = $("#" + targetId);
        if (!$target) return;
        $(this).val(oldVal);
        $target.val(newVal).focus();
        $target[0] && $target[0].dispatchEvent(new CustomEvent("input"));
    });
}

if (typeof structuredClone !== "function")
    window.structuredClone = (val) => JSON.parse(JSON.stringify(val));

const isObject = (value) => {
    return Object.prototype.toString.call(value) === '[object Object]';
};

const checkStrIsJSON = (str) => {
    try {
        return (JSON.parse(str) && !!str);
    } catch (e) {
        return false;
    }
}

const checkStrIsDate = (date, format="DD/MM/YYYY") => {
    return typeof date === 'string' && Number.isNaN(+date) && moment(date, format, true).isValid();
}

const checkObjectHasDateTime =  (obj = {}, {formatDate="DD/MM/YYYY", formatDateTime = "DD/MM/YYYY HH:mm"}) => {
    let isPropertyDateTime = false;

    for(let j in obj) {
        if(checkStrIsDate(obj[j], formatDate) || checkStrIsDate(obj[j], formatDateTime)){
            isPropertyDateTime = true
            break;
        }
    }

    return isPropertyDateTime;
}

const mapPropertyForNewDateTime =  (obj = {}, {
    old_DateTimeFormat = "",
    old_DateFormat = "",
    new_DateFormat = "",
    new_DateTimeFormat = "",
}) => {
    const result = {};
    if(!new_DateFormat || !new_DateTimeFormat || !old_DateTimeFormat || !old_DateFormat) {
        throw new Error("Required old and new Format Date!")
    }

    for(let j in obj) {
        if(j === 'jlFilterDateFormat'){
            result[j] = new_DateFormat;
            continue;
        }

        if(j === 'jlFilterDateTimeFormat'){
            result[j] = new_DateTimeFormat;
            continue;
        }

        if(!checkStrIsDate(obj[j], old_DateFormat) && !checkStrIsDate(obj[j], old_DateTimeFormat)){
            result[j] = obj[j];
            continue;
        }

        const dateISO = moment(obj[j], old_DateFormat).toISOString();

        if(moment(obj[j], old_DateFormat).isValid()) {
            result[j] = moment(dateISO).format(new_DateFormat);
            continue;
        }

        if(moment(obj[j], old_DateTimeFormat).isValid()) {
            result[j] = moment(dateISO).format(new_DateTimeFormat);
            continue;
        }
    }

    return result;
}

const checkAndMapDateTimeFormatUserFromStorage = ({
    user_DateTimeFormat,
    user_DateFormat,
    user_Guidid
}) => {
    if(!user_DateTimeFormat || !user_DateFormat || !user_Guidid) {
        throw new Error("Required user_DateFormat, user_DateTimeFormat and user_Guidid!");
    }

    const localStorageData = localStorage ? {...localStorage} : {};

    for(let i in localStorageData) {
        const isForOtherUserId = i.indexOf(user_Guidid) === -1;

        if(isForOtherUserId) {
            continue;
        }

        const itemParse = checkStrIsJSON(localStorageData[i]) ? JSON.parse(localStorageData[i]) : "";

        if(typeof itemParse !== 'object') {
            continue;
        }

        const formatDate = itemParse?.jlFilterDateFormat || "";
        const formatDateTime = itemParse?.jlFilterDateTimeFormat || "";
        const objHasDateTimeProperty = checkObjectHasDateTime(itemParse, {formatDate, formatDateTime});
        const isMissingDateTime = !formatDate || !formatDateTime || !objHasDateTimeProperty;
        const isSameFormat = formatDate === user_DateFormat && formatDateTime === user_DateTimeFormat;

        if(isMissingDateTime || isSameFormat) {
            continue;
        }

        localStorage.setItem(
            i,
            JSON.stringify(
                mapPropertyForNewDateTime(itemParse, {
                    old_DateFormat: formatDate,
                    old_DateTimeFormat: formatDateTime,
                    new_DateFormat: user_DateFormat,
                    new_DateTimeFormat: user_DateTimeFormat,
                })
            )
        );
    }
}

const isSameOrAfterToday = (date) => {
    const dateMoment = moment(date);
    return dateMoment.isSameOrAfter(new Date(), 'day');
}

const getIntOrNull = (value) => {
    value = isNumeric(value) ? parseInt(value) : null;
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value ? value : null;
}


function listenStopListener(element, eventName, callback, timeout = 1000) {
    let handle = null;
    const onEventHandler = function() {
        if (handle) {
            clearTimeout(handle);
        }
        handle = setTimeout(callback, timeout);
    };
    element.addEventListener(eventName, onEventHandler);
    return function() {
        element.removeEventListener(eventName, onEventHandler);
    };
}

// Tooltips and Popovers of Bootstrap use built-in sanitizer to sanitize options which accept HTML.
// https://getbootstrap.com/docs/3.4/javascript/#js-sanitizer
// This function add new values to default whitelist
function addNewWhiteListValues() {
    let defaultWhiteList = $.fn.tooltip.Constructor?.DEFAULTS?.whiteList || [];
    const elementsAllowed = ['table', 'tbody', 'th', 'tr', 'td', 'label'];

    for (const element of elementsAllowed) {
        defaultWhiteList[element] = [];
    }

    defaultWhiteList.canvas = ['width', 'height'];
}

/**
 * Alternative method to serialize a form with disabled inputs
 */
var serializeDisabledInputs = {};

function serializeIncludeDisabledBegin(name) {
    toggleSpinnerModal(true);
    serializeDisabledInputs[name] = $(name).find("input:disabled");
    serializeDisabledInputs[name].removeAttr("disabled");
}

function serializeIncludeDisabledComplete(name) {
    serializeDisabledInputs[name]?.attr("disabled", "disabled");
    serializeDisabledInputs[name] = null;
    toggleSpinnerModal(false);
}

/* End Alternative method */

const setLoadingForRef = (refs, value) => {
    if(refs){
        refs.isLoading = value;
    }
}

var countDecimals = function (value) {
    if(Math.floor(value) === Number(value)) return 0;
    return value.toString().split(".")[1]?.length || 0;
}

const isBeforeToday = (date) => {
    const dateMoment = moment(date);
    return dateMoment.isBefore(new Date(), 'day');
};

const generateUniqueId = (prefix) => {
    return `${prefix}-${generateUUID()}`;
};



function flattenArray(array) {
    const result = [];

    const helper = (innerArr) => {
        for (const item of innerArr) {
            if (Array.isArray(item)) {
                helper(item);
            } else {
                result.push(item);
            }
        }
    }

    helper(array);
    return result;
}

function arrayMove(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

const whiteListElements = ['.preview-report'];

function removeEditButtonForReadonlyMode(){
   // if select jquery lenght of whiteListElements is greater than 0, return
    if($(whiteListElements.join(',')).length > 0) return;
    const elementsButton = [
        // Select all elements with a class containing "jl-button" except those within specific containers
        '[class*="jl-button"]:not(',
            '.jlAdvanceSearch-togglePannel [class*="jl-button"],', // Exclude buttons in the advanced search toggle panel
            '#deleteConfirmationModal [class*="jl-button"],',      // Exclude buttons in the delete confirmation modal
            '.workspace-modal [class*="jl-button"]',
            '.view-detail-quickview-button [class*="jl-button"]',
            '.additional-menu [class*="jl-button"]',
        ')',
        // Select elements with the class "jl-button-save"
        '.jl-button-save'
    ].join(' '); 

    const classContainers = [
        '.readonlyForContainers',
        '.additional-menu',
        '.responsive-menu',
        '.card-title.editable button',
        elementsButton,
        'button:has(.jl-pencil-circle), .jl-pencil-circle',
        'button:has(.jl-delete), .jl-delete',
    ];

    const classContainersDisabled = [
        '.table-actions',
    ];

    const stringClass = classContainers.toString();
    $(classContainersDisabled.toString()).find('button').attr('disabled', true);
    $(stringClass).remove();

}

function isValidGuid(guid) {
    const guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    const emptyGuid = '00000000-0000-0000-0000-000000000000';
    
    // Check if the GUID matches the regex and is not the empty GUID
    return guidRegex.test(guid) && guid !== emptyGuid;
}
