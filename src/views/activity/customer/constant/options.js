/*
 * @Author: mengpeng
 * @Date: 2021-02-18 19:47:16
 * @Last Modified by: mengpeng 
 * @Last Modified time: 2021-02-18 19:47:20 
 */

export const FormOptions = {
  formProps: {
    inline: true,
    size: "mini"
  },
  fieldDefs: [
    { field: "phone", label: "客户手机" },
    { field: "weixin", label: "员工微信号" },
    { field: "transaction_id", label: "微信支付订单号" },
  ]
};
export const TableOptions = {
  colDefs: [
    { field: "phone", label: "客户手机" },
    { field: "weixin", label: "员工微信号" },
    { field: "transaction_id", label: "微信支付订单号" },
    { field: "time_end", label: "支付完成时间" },
  ]
};
