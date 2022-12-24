import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from './_util';

export default [
    {
        url: '/api/timeSetting/getTimeSpanList',
        timeout: 200,
        method: 'post',
        response: () => {
            let timeSpanResp = {
                "list": [
                    {
                        id: 1,
                        timeSpanName: '黄金时段',
                        timeSpanDesc: '{"dateRange":["2022-12-17T01:16:53.999Z","2023-01-29T01:16:53.999Z"],"timeRange":["2022-12-16T22:00:00.033Z","2022-12-17T10:00:00.761Z"],"monthCond":[1,2,3,7,6],"weekCond":[1,3,5],"dayCond":[1,2,3,5,6,8,33,34,36]}',
                    },
                    {
                        id: 2,
                        timeSpanName: '午夜时段',
                        timeSpanDesc: '{"dateRange":["2022-12-13T02:28:13.447Z","2023-01-27T02:28:13.447Z"],"timeRange":["2022-12-17T02:00:00.585Z","2022-12-17T15:00:00.417Z"],"monthCond":[1,3,4,6,8,10,12],"weekCond":[2,4,6],"dayCond":[1,2,33,35]}',
                    },
                    {
                        id: 3,
                        timeSpanName: '630剧场',
                        timeSpanDesc: '{"dateRange":["2022-12-22T02:28:13.447Z","2023-01-27T02:28:13.447Z"],"timeRange":["2022-12-17T02:00:00.585Z","2022-12-17T12:10:00.417Z"],"monthCond":[1,3,4,6,8,10,12],"weekCond":[2,4,6,1,3],"dayCond":[1,2,3,4,33,35,36,34]}',
                    }
                ],
                "total": 8,
                "page": 1,
                "pageSize": 10
            }
            return resultSuccess(timeSpanResp);
        },
    }
] as MockMethod[];