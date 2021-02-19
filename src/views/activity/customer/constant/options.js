/*
 * @Author: mengpeng
 * @Date: 2021-02-18 19:47:16
 * @Last Modified by: mengpeng 
 * @Last Modified time: 2021-02-19 09:27:04 
 */

export const FormOptions = {
  formProps: {
    inline: true,
    size: "mini"
  },
  fieldDefs: [
    { field: "weixin", label: "员工微信号" },
    { field: "name", label: "员工姓名" },
    { field: "phone", label: "客户手机" },
    { field: "transaction_id", label: "微信支付订单号" },
  ]
};
export const TableOptions = {
  colDefs: [
    { field: "weixin", label: "员工微信号" },
    { field: "name", label: "员工姓名" },
    { field: "phone", label: "客户手机" },
    { field: "transaction_id", label: "微信支付订单号" },
    { field: "time_end", label: "支付完成时间" },
  ]
};
