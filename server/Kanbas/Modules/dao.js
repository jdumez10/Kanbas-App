import moduleModel from "./model.js";

export const createModule = (module) => moduleModel.create(module);
export const findModulesForCourse = (courseId) => moduleModel.find({ course: courseId });
export const findModuleById = (moduleId) => moduleModel.findById(moduleId);
export const updateModule = (moduleId, module) => moduleModel.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => moduleModel.deleteOne({ _id: moduleId });
