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
    { field: "name", label: "姓名" },
    { field: "weixin", label: "微信号" },
  ]
};
const itemProps = { minWidth: "170px" };
export const TableOptions = {
  colDefs: [
    { field: "name", label: "姓名" },
    { field: "weixin", label: "微信号" },
    { field: "newCustomerNum", label: "新增数量" },
    { field: "op", label: "操作", itemProps: { fixed: "right" ,minWidth: "130px"} }
  ]
};
