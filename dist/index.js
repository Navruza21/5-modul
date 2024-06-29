"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//  https://8bb1c4695ec175c7.mokky.dev/markalar
var table = document.getElementById("table");
var markaSidebar = document.querySelector(".marka-sidebar");
var mashinaSidebar = document.querySelector(".mashina-sidebar");
var selectDiv = document.querySelector("#select");
function markalar() {
    return __awaiter(this, void 0, void 0, function () {
        var response, thead_1, tbody_1, trh, th, plusBtn_1, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectDiv.innerHTML = "";
                    mashinaSidebar.classList.remove("active");
                    markaSidebar.classList.add("active");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.get("https://8bb1c4695ec175c7.mokky.dev/markalar")];
                case 2:
                    response = _a.sent();
                    console.log("test res", response.data);
                    table.innerHTML = "";
                    thead_1 = document.createElement("thead");
                    tbody_1 = document.createElement("tbody");
                    trh = document.createElement("tr");
                    trh.innerHTML = "\n                  <th scope=\"col\">Mashina rasmi</th>\n                  <th scope=\"col\">Mashina nomi</th>\n                  <th scope=\"col\"> Sozlamalar</th>\n                ";
                    th = document.createElement("th");
                    th.setAttribute("scope", "col");
                    plusBtn_1 = document.createElement("button");
                    plusBtn_1.className = "btn";
                    plusBtn_1.innerHTML = "<i class=\"fa-solid fa-plus\"></i>";
                    th.appendChild(plusBtn_1);
                    trh.appendChild(th);
                    thead_1.appendChild(trh);
                    response.data.map(function (marka) {
                        var tr = document.createElement("tr");
                        tr.innerHTML = "\n                    <td style=\"height=75px\"> <img src=\"".concat(marka.img, "\" alt=\"\" width=\"80px\" > </td>\n                    <td style=\"height=75px\"> ").concat(marka.car, " </td>\n                    ");
                        tr.className = "align-middle";
                        var td = document.createElement("td");
                        td.className = "d-flex gap-2 align-middle ";
                        td.style.height = "75px";
                        var button1 = document.createElement("button");
                        var button2 = document.createElement("button");
                        button1.className = "btn edit";
                        button2.className = "btn delete";
                        button1.innerHTML = "<i class=\"fa-solid fa-pencil\"></i>";
                        button2.innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
                        table.appendChild(thead_1);
                        td.appendChild(button1);
                        td.appendChild(button2);
                        tr.appendChild(td);
                        tbody_1.appendChild(tr);
                        table.appendChild(tbody_1);
                        button2.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                            var error_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("test delete marka");
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, deleteMarka(marka.id)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_2 = _a.sent();
                                        console.log(error_2);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        button1.setAttribute("data-bs-toggle", "modal");
                        button1.setAttribute("data-bs-target", "#editMarka");
                        // edit
                        button1.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                            var imgEdit, nomiEdit, footerMarkaEdit, orqagaMarkaEdit, saveinfoMarkaEdit;
                            var _this = this;
                            return __generator(this, function (_a) {
                                console.log("test edit marka ");
                                imgEdit = document.querySelector("#img");
                                nomiEdit = document.querySelector("#nomi");
                                imgEdit.value = marka.img;
                                nomiEdit.value = marka.car;
                                footerMarkaEdit = document.querySelector("#footer-edit-marka");
                                orqagaMarkaEdit = document.createElement("button");
                                orqagaMarkaEdit.innerHTML = "Orqaga";
                                orqagaMarkaEdit.className = "btn btn-secondary";
                                orqagaMarkaEdit.setAttribute("data-bs-dismiss", "modal");
                                saveinfoMarkaEdit = document.createElement("button");
                                saveinfoMarkaEdit.innerHTML = "Saqlash";
                                saveinfoMarkaEdit.className = "btn btn-primary";
                                footerMarkaEdit.innerHTML = "";
                                footerMarkaEdit.appendChild(orqagaMarkaEdit);
                                footerMarkaEdit.appendChild(saveinfoMarkaEdit);
                                saveinfoMarkaEdit.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                    var error_3;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log("edit marka save");
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 3, , 4]);
                                                //@ts-ignore
                                                return [4 /*yield*/, axios.patch("https://8bb1c4695ec175c7.mokky.dev/markalar/".concat(marka.id), {
                                                        img: imgEdit.value,
                                                        car: nomiEdit.value,
                                                    })];
                                            case 2:
                                                //@ts-ignore
                                                _a.sent();
                                                console.log("test2");
                                                markalar();
                                                return [3 /*break*/, 4];
                                            case 3:
                                                error_3 = _a.sent();
                                                console.log("ozgartirish kiritilmadi", error_3);
                                                return [3 /*break*/, 4];
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); });
                        // add
                        plusBtn_1.setAttribute("data-bs-toggle", "modal");
                        plusBtn_1.setAttribute("data-bs-target", "#addMarka");
                        plusBtn_1.addEventListener("click", function () {
                            var foot = document.querySelector("#footer-add-marka");
                            var orqagaAdd = document.createElement("button");
                            orqagaAdd.innerHTML = "orqaga";
                            orqagaAdd.className = "btn btn-secondary";
                            orqagaAdd.setAttribute("data-bs-dismiss", "modal");
                            var saveAdd = document.createElement("button");
                            saveAdd.innerHTML = "Marka qo'shish";
                            saveAdd.className = "btn btn-primary";
                            foot.innerHTML = "";
                            foot.appendChild(orqagaAdd);
                            foot.appendChild(saveAdd);
                            saveAdd.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                var imgAdd, carAdd, error_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("marka add ");
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            imgAdd = document.getElementById("imgmarka");
                                            carAdd = document.getElementById("nomimarka");
                                            //@ts-ignore
                                            return [4 /*yield*/, axios.post("https://8bb1c4695ec175c7.mokky.dev/markalar", {
                                                    img: imgAdd.value,
                                                    car: carAdd.value,
                                                })];
                                        case 2:
                                            //@ts-ignore
                                            _a.sent();
                                            imgAdd.value = "";
                                            carAdd.value = "";
                                            markalar();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_4 = _a.sent();
                                            console.log("ozgartirish kiritilmadi", error_4);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("error marka()", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function mashinalar() {
    return __awaiter(this, void 0, void 0, function () {
        var select, option1, response, button, response_1, thead_2, tbody_2, error_5;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    markaSidebar.classList.remove("active");
                    mashinaSidebar.classList.add("active");
                    select = document.createElement("select");
                    select.className = "form-select";
                    option1 = document.createElement("option");
                    option1.value = "6";
                    option1.text = "Barchasi";
                    select.appendChild(option1);
                    return [4 /*yield*/, axios.get("https://8bb1c4695ec175c7.mokky.dev/markalar")];
                case 1:
                    response = _a.sent();
                    response.data.map(function (marka) {
                        var option = document.createElement("option");
                        option.value = "".concat(marka.id);
                        option.text = "".concat(marka.car);
                        select.appendChild(option);
                    });
                    button = document.createElement("button");
                    button.className = "btn";
                    button.innerHTML = "<i class=\"fa-solid fa-plus\"></i>";
                    button.setAttribute("data-bs-toggle", "modal");
                    button.setAttribute("data-bs-target", "#exampleModal");
                    selectDiv.innerHTML = "";
                    selectDiv.appendChild(select);
                    selectDiv.appendChild(button);
                    select.addEventListener("change", function () { return __awaiter(_this, void 0, void 0, function () {
                        var response_2, thead_3, tbody_3, error_6;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 4, , 5]);
                                    console.log("salom");
                                    if (!(select.value == option1.value)) return [3 /*break*/, 1];
                                    mashinalar();
                                    return [3 /*break*/, 3];
                                case 1: return [4 /*yield*/, axios.get("https://8bb1c4695ec175c7.mokky.dev/mashina?markaId=".concat(Number(select.value)))];
                                case 2:
                                    response_2 = _a.sent();
                                    console.log("select test res", response_2.data);
                                    table.innerHTML = "";
                                    thead_3 = document.createElement("thead");
                                    tbody_3 = document.createElement("tbody");
                                    thead_3.innerHTML = "  <tr>\n                    <th scope=\"col\">\u2116</th>\n                    <th scope=\"col\">Xaridor ismi</th>\n                    <th scope=\"col\">Marka id</th>\n                    <th scope=\"col\">Mashina rangi</th>\n                    <th scope=\"col\">Buyurtma sanasi</th>\n                    <th scope=\"col\">Sozlamalar</th>\n                  </tr>";
                                    response_2.data.map(function (mashina, index) {
                                        var tr = document.createElement("tr");
                                        var td = document.createElement("td");
                                        td.className = "d-flex gap-2";
                                        var button1 = document.createElement("button");
                                        var button2 = document.createElement("button");
                                        button1.className = "btn edit";
                                        button2.className = "btn delete";
                                        button1.innerHTML = "<i class=\"fa fa-pen\" aria-hidden=\"true\"></i>";
                                        button2.innerHTML = "<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>";
                                        tr.innerHTML = " <td> ".concat(index + 1, "</td>\n                        <td> ").concat(mashina.customer, "</td>\n                        <td>").concat(mashina.markaId, "</td>\n                        <td>").concat(mashina.colour, "</td>\n                        <td>").concat(mashina.date, "</td>\n                       \n                       ");
                                        table.appendChild(thead_3);
                                        td.appendChild(button1);
                                        td.appendChild(button2);
                                        tr.appendChild(td);
                                        tbody_3.appendChild(tr);
                                        table.appendChild(tbody_3);
                                        button2.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                            var error_7;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log("test ");
                                                        _a.label = 1;
                                                    case 1:
                                                        _a.trys.push([1, 3, , 4]);
                                                        return [4 /*yield*/, deleteMashina(mashina.id)];
                                                    case 2:
                                                        _a.sent();
                                                        mashinalar();
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        error_7 = _a.sent();
                                                        return [3 /*break*/, 4];
                                                    case 4: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    });
                                    _a.label = 3;
                                case 3: return [3 /*break*/, 5];
                                case 4:
                                    error_6 = _a.sent();
                                    console.log(error_6);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, axios.get("https://8bb1c4695ec175c7.mokky.dev/mashina")];
                case 3:
                    response_1 = _a.sent();
                    console.log("test res", response_1.data);
                    table.innerHTML = "";
                    thead_2 = document.createElement("thead");
                    tbody_2 = document.createElement("tbody");
                    thead_2.innerHTML = "  <tr>\n                    <th scope=\"col\">\u2116</th>\n                    <th scope=\"col\">Xaridor ismi</th>\n                    <th scope=\"col\">Marka id</th>\n                    <th scope=\"col\">Mashina rangi</th>\n                    <th scope=\"col\">Buyurtma sanasi</th>\n                    <th scope=\"col\">Sozlamalar</th>\n                  </tr>";
                    response_1.data.map(function (mashina, index) {
                        var tr = document.createElement("tr");
                        var td = document.createElement("td");
                        td.className = "d-flex gap-2";
                        var button1 = document.createElement("button");
                        var button2 = document.createElement("button");
                        button1.className = "btn edit";
                        button2.className = "btn delete";
                        button1.innerHTML = "<i class=\"fa fa-pen\" aria-hidden=\"true\"></i>";
                        button2.innerHTML = "<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>";
                        tr.innerHTML = " <td> ".concat(index + 1, "</td>\n                                  <td> ").concat(mashina.customer, "</td>\n                                  <td>").concat(mashina.markaId, "</td>\n                                  <td>").concat(mashina.colour, "</td>\n                                  <td>").concat(mashina.date, "</td>\n                                 \n                                 ");
                        table.appendChild(thead_2);
                        td.appendChild(button1);
                        td.appendChild(button2);
                        tr.appendChild(td);
                        tbody_2.appendChild(tr);
                        table.appendChild(tbody_2);
                        button2.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                            var error_8;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log("test ");
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, deleteMashina(mashina.id)];
                                    case 2:
                                        _a.sent();
                                        mashinalar();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_8 = _a.sent();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        // edit
                        button1.setAttribute("data-bs-toggle", "modal");
                        button1.setAttribute("data-bs-target", "#exampleModaledit");
                        button1.addEventListener("click", function () {
                            var xaridor = document.getElementById("customerEdit");
                            var rang = document.getElementById("colourEdit");
                            var sana = document.getElementById("dateEdit");
                            var markaid = document.querySelector("#markaEdit");
                            console.log("button edit");
                            var footerMashinaEdit = document.querySelector("#footer-modaledit");
                            var orqagaMashinaEdit = document.createElement("button");
                            orqagaMashinaEdit.innerHTML = "Orqaga";
                            orqagaMashinaEdit.className = "btn btn-secondary";
                            orqagaMashinaEdit.setAttribute("data-bs-dismiss", "modal");
                            var saveinfoMashinaEdit = document.createElement("button");
                            // console.log("markaid0", markaid.value);
                            saveinfoMashinaEdit.innerHTML = "Saqlash";
                            saveinfoMashinaEdit.className = "btn btn-primary";
                            footerMashinaEdit.innerHTML = "";
                            footerMashinaEdit.appendChild(orqagaMashinaEdit);
                            footerMashinaEdit.appendChild(saveinfoMashinaEdit);
                            xaridor.value = mashina.customer;
                            rang.value = mashina.colour;
                            sana.value = mashina.date;
                            //@ts-ignore
                            markaid.value = mashina.markaId;
                            saveinfoMashinaEdit.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                var error_9;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            //@ts-ignore
                                            return [4 /*yield*/, axios.patch("https://8bb1c4695ec175c7.mokky.dev/mashina/".concat(mashina.id), {
                                                    customer: xaridor.value,
                                                    colour: rang.value,
                                                    date: sana.value,
                                                    markaId: markaid.value,
                                                })];
                                        case 1:
                                            //@ts-ignore
                                            _a.sent();
                                            mashinalar();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            error_9 = _a.sent();
                                            console.log(error_9);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        // add
                        button.setAttribute("data-bs-toggle", "modal");
                        button.setAttribute("data-bs-target", "#exampleModal");
                        button.addEventListener("click", function () {
                            var foot = document.querySelector("#footer-add-modal");
                            var orqagaadd = document.createElement("button");
                            orqagaadd.innerHTML = "orqaga";
                            orqagaadd.className = "btn btn-secondary";
                            orqagaadd.setAttribute("data-bs-dismiss", "modal");
                            var saveadd = document.createElement("button");
                            saveadd.innerHTML = "mashinalar qoshish";
                            saveadd.className = "btn btn-primary";
                            foot.innerHTML = "";
                            foot.appendChild(orqagaadd);
                            foot.appendChild(saveadd);
                            saveadd.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                var xaridoradd, rangadd, sanaadd, markaIDadd, error_10;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("mashina add ");
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            xaridoradd = document.getElementById("customer");
                                            rangadd = document.getElementById("colour");
                                            sanaadd = document.getElementById("date");
                                            markaIDadd = document.getElementById("markaID");
                                            //@ts-ignore
                                            return [4 /*yield*/, axios.post("https://8bb1c4695ec175c7.mokky.dev/mashina", {
                                                    customer: xaridoradd.value,
                                                    date: sanaadd.value,
                                                    colour: rangadd.value,
                                                    markaId: markaIDadd.value,
                                                })];
                                        case 2:
                                            //@ts-ignore
                                            _a.sent();
                                            mashinalar();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_10 = _a.sent();
                                            console.log("ozgartirish kiritilmadi", error_10);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function deleteMarka(id) {
    return __awaiter(this, void 0, void 0, function () {
        var error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("delete marka");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    //@ts-ignore
                    return [4 /*yield*/, axios.delete("https://8bb1c4695ec175c7.mokky.dev/markalar/".concat(id))];
                case 2:
                    //@ts-ignore
                    _a.sent();
                    markalar();
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteMashina(id) {
    return __awaiter(this, void 0, void 0, function () {
        var error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("delete mashina");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    //@ts-ignore
                    return [4 /*yield*/, axios.delete("https://8bb1c4695ec175c7.mokky.dev/mashina/".concat(id))];
                case 2:
                    //@ts-ignore
                    _a.sent();
                    mashinalar();
                    return [3 /*break*/, 4];
                case 3:
                    error_12 = _a.sent();
                    console.error(error_12);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
window.onload = function () {
    markalar();
};
markaSidebar === null || markaSidebar === void 0 ? void 0 : markaSidebar.addEventListener("click", markalar);
mashinaSidebar === null || mashinaSidebar === void 0 ? void 0 : mashinaSidebar.addEventListener("click", mashinalar);
