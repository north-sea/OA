/*
 * @Author: ruiwang
 * @Date: 2019-11-18 17:12:55
 * @Last Modified by: pengmeng
 * @Last Modified time: 2020-12-07 17:18:53
 */

import {
    Input,
    DatePicker,
} from 'element-ui';

import NscSelect from '@/components/nsc/nsc-select'
import DefType from './def-type';

export default {
    [DefType.text]: Input,
    [DefType.date]: DatePicker,
    [DefType.dateTime]: DatePicker,
    [DefType.select]: NscSelect,
};
