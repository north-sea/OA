import {GenderEnum} from "@/constant/enum/type";

export const FormOptions={
    formProps:{
        inline:true
    },
    fieldDefs:[
        {field:'candidateName',label:'候选人'},
        {field:'gender',label:'性别',enumType:GenderEnum},
    ]
}

export const TableOptions={
    colDefs:[
        {field:'candidateName',label:'候选人'},
        {field:'gender',label:'性别'},
        {field:'creatorName',label:'创建人'},
        {field:'jobName',label:'应聘岗位'},
        {field:'resource',label:'来源'},
        {field:'rate',label:'评价'},
        {field:'dateStart',label:'面试时间'},
        {field:'timeCreated',label:'创建时间'},
        {field:'timeUpdated',label:'更新时间'},
        {field:'op',label:'操作'},
    ]
}