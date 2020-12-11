import {
  GenderEnum,
  PositionEnum,
  ResourceEnum,
  InrerviewStatusEnum
} from "@/constant/enum/type";
import { getDateTime, getDate } from "@/utils/time";

export const FormOptions = {
  formProps: {
    inline: true,
    size: "mini"
  },
  fieldDefs: [
    { field: "candidateName", label: "候选人" },
    { field: "gender", label: "性别", enumType: GenderEnum },
    { field: "jobKey", label: "应聘岗位", enumType: PositionEnum },
    { field: "resource", label: "来源", enumType: ResourceEnum },
    { field: "status", label: "状态", enumType: InrerviewStatusEnum },
    { field: "phone", label: "手机号" },
    {
      field: "timeOnBoard",
      label: "入职时间",
      type: "date",
      props: { valueFormat: "timestamp" }
    }
  ]
};
const itemProps = { minWidth: "170px" };
export const TableOptions = {
  colDefs: [
    { field: "candidateName", label: "候选人" },
    { field: "gender", label: "性别", enumType: GenderEnum },
    { field: "creatorName", label: "创建人" },
    { field: "jobName", label: "应聘岗位" },
    {
      field: "resource",
      label: "来源",
      enumType: ResourceEnum,
      itemProps: { minWidth: "120px" }
    },
    { field: "status", label: "状态", enumType: InrerviewStatusEnum },
    { field: "phone", label: "手机号", itemProps: { minWidth: "120px" } },
    { field: "interviewerTime", label: "面试时间", filter: getDateTime, itemProps },
    { field: "timeOnBoard", label: "入职时间", filter: getDate, itemProps },
    { field: "remark", label: "备注" },
    { field: "op", label: "操作", itemProps: { fixed: "right" ,minWidth: "130px"} }
  ]
};
