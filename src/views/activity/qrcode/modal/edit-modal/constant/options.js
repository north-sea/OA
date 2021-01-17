export const genFormOptions = isEdit => {
  return {
    formProps: {
      labelPosition: "left",
      labelWidth: "200px",
      size: "medium"
    },
    fieldDefs: [
      { field: "name", label: "姓名" },
    { field: "weixin", label: "微信号" },
      { field: "newCustomerNum", label: "新增数量", disabled: isEdit },
    ]
  };
};
