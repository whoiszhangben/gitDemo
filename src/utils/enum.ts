export const enums = {
    // 周几
    DayOfWeek: {
        SUNDAY: 0,    // 星期天
        MONDAY: 1,    // 星期一
        TUESDAY: 2,    // 星期二
        WEDNESDAY: 3,    // 星期三
        THURSDAY: 4,    // 星期四
        FRIDAY: 5,    // 星期五
        SATURDAY: 6,    // 星期六
    },
    AlertLevel: {
        URGENT: 1, // 紧急
        SERIOUS: 2, // 严重
        SECONDARY: 3, // 次要
        TIP: 4, //提示
    },
    HysType: {
        NONE: 1, // 无
        SUDDENFILTER: 2, // 突变过滤
        FORBIDDENREPEAT: 3, // 禁止重复
    },
    portType: {
        COM: 1, // 串口
        DI: 2, // DI
        DO: 3, // DO
    },
    roleType: {
        ADMIN: 1,
        OPERATOR: 2,
        USER: 3
    },
    subSystem: {
        COMMON: 1, // 通用系统
        MONITOR: 2, // 监控系统
        ENTRANCE: 3, // 门禁系统
        ALARM: 4, // 报警系统
        WATERCOOLING: 5, // 水冷系统
        LIGHTCONTROL: 6 // 照明控制
    },
    valueType: {
        NUMBER: 1,
        TEXT: 2,
        BOOLEAN: 3,
        STATUS: 4,
    },
    operator: {
        Equal: 1,
        NotEqual: 2,
        GreaterThan: 3,
        LessThan: 4,
        GreaterThanOrEqual: 5,
        LessThanOrEqual: 6
    }

}