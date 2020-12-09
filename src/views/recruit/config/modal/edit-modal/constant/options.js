import { GenderEnum, PositionEnum, ResourceEnum ,InrerviewStatusEnum} from "@/constant/enum/type";

export const genFormOptions = (isEdit) => {
  return {
    formProps: {
      labelPosition: "left",
      labelWidth: "200px",
      size: "medium"
    },
    fieldDefs: [
      { field: "key", label: "键值" ,disabled:isEdit},
      { field: "label", label: "展示"},
    ]
  };
};
