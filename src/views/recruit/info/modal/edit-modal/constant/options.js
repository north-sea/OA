import { GenderEnum, PositionEnum, ResourceEnum ,InrerviewStatusEnum} from "@/constant/enum/type";

export const genFormOptions = (isEdit) => {
  return {
    formProps: {
      labelPosition: "left",
      labelWidth: "200px",
      size: "medium"
    },
    fieldDefs: [
      { field: "candidateName", label: "候选人" ,disabled:isEdit},
      { field: "gender", label: "性别", enumType: GenderEnum ,disabled:isEdit},
      { field: "jobKey", label: "应聘岗位", enumType: PositionEnum },
      { field: "resource", label: "来源", enumType: ResourceEnum ,disabled:isEdit},
      { field: "phone", label: "手机号" },
      {
        field: "interviewerTime",
        label: "面试时间",
        type: "datetime",
        props: { valueFormat: "timestamp" },
      },
      { field: "rate", label: "评价" ,type: "textarea",hide:!isEdit},
      { field: "status", label: "状态", enumType: InrerviewStatusEnum ,hide:!isEdit},
      { field: "reason", label: "原因" ,type: "textarea",hide:!isEdit},
    ]
  };
};
