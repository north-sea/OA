<template>
    <el-popover placement="right" width="800" trigger="click" class="nsc-calendar">
        <el-calendar>
            <template #dateCell="{date,data}">
                <span :class="{'is-selected':data.isSelected,'is-weekend':isWeekend(date)}">
                {{ getDate(date)}}
                </span>
                <ul class="events">
                    <li v-for="{name,time} in calendarData[data.day]"  :key="`${time}-${name}`">
                        <el-badge is-dot />{{time}}-{{name}}
                    </li>
                </ul>
            </template>
        </el-calendar>
     <el-button slot="reference" type="text" icon="el-icon-date"></el-button>
    </el-popover>
</template>

<script>
import dayjs from "dayjs";
import {getCalendarData} from '@/api/calendar';

export default {
    name: "NscCalendar",
    data() {
        return {
            days: dayjs.weekdays(),
            calendarData: {}
        }
    },
    async mounted() {
        const {data: {body}} = await getCalendarData();
        this.calendarData = body
    },
    methods: {
        isWeekend(time) {
            return dayjs(time).weekday() > 4
        },
        getDate(time) {
            return dayjs(time).format('MM-DD')
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    padding-right: 10px;
    font-size: 25px;
    position: relative;
    top: -10px;
}
.is-weekend {
    color: green;
}
.is-selected {
    color: #1989fa;
}
.events {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        text-overflow: ellipsis;
        font-size: 12px;
        ::v-deep {
            &.el-badge {
                top: 4px;
            }
        }
        
    }
}
</style>