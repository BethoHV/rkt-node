"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseServise_1 = __importDefault(require("./CreateCourseServise"));
function createCourse(request, response) {
    CreateCourseServise_1.default.execute({
        educator: "Dani",
        name: "NodeJs",
        duration: 10
    });
    CreateCourseServise_1.default.execute({
        educator: "Diego",
        name: "ReactJs"
    });
    return response.send();
}
exports.createCourse = createCourse;
