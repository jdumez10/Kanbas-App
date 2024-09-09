import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

interface ModuleControlButtonsProps {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: ModuleControlButtonsProps) {
  return (
    <div className="float-end align-items-center">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-2" />
      <FaTrash onClick={() => deleteModule(moduleId)} className="text-danger me-2" />
      <GreenCheckmark />
      <BsPlus className="fs-1 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
