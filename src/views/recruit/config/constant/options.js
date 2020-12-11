import { TypeEnum } from "@/constant/enum/type";

export const FormOptions = {
  formProps: {
    inline: true,
    size:"mini"
  },
  fieldDefs: [
    { field: "key", label: "配置名称" ,enumType:TypeEnum},
  ]
};
export const TableOptions = {
  colDefs: [
    { field: "key", label: "键值" },
    { field: "label", label: "展示" },
    { field: "op", label: "操作"}
  ]
};
