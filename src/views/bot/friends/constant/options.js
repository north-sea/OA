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
    { field: "avatar", label: "头像" },
    { field: "alias", label: "备注"},
    { field: "name", label: "名称"},
    { field: "province", label:"省份"},
    { field: "weixin", label: "微信号" },
  ]
};
export const TableOptions = {
  colDefs: [
    { field: "avatar", label: "头像" },
    { field: "alias", label: "备注"},
    { field: "name", label: "名称"},
    { field: "province", label:"省份"},
    { field: "weixin", label: "微信号" },
    { field: "op", label: "操作", itemProps: { fixed: "right" ,minWidth: "130px"} }
  ]
};
