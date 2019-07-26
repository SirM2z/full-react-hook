export default function(page, pageSize, order, orderBy, search) {
  let data = [
    {
      created: "2019-07-18T05:40:42.026Z",
      email: "ryan@ryanc.top",
      id: "0",
      roles: "admin",
      username: "Ryan",
    },
    {
      created: "2019-07-19T15:00:45.537Z",
      email: "ryan1@ryanc.top",
      id: "1",
      roles: "",
      username: "Ryan1",
    },
    {
      created: "2019-07-22T08:25:50.847Z",
      email: "ryan2@ryanc.top",
      id: "2",
      roles: "",
      username: "Ryan2",
    },
    {
      created: "2019-07-22T08:25:57.478Z",
      email: "ryan3@ryanc.top",
      id: "3",
      roles: "",
      username: "Ryan3",
    },
    {
      created: "2019-07-22T08:26:02.816Z",
      email: "ryan4@ryanc.top",
      id: "4",
      roles: "",
      username: "Ryan4",
    },
    {
      created: "2019-07-22T08:26:24.732Z",
      email: "ryan5@ryanc.top",
      id: "5",
      roles: "",
      username: "Ryan5",
    },
    {
      created: "2019-07-22T08:26:33.784Z",
      email: "ryan6@ryanc.top",
      id: "6",
      roles: "",
      username: "Ryan6",
    }
  ]
  data = data.filter((item) => item.username.includes(search));
  return {
    message: "数据请求成功",
    result: {
      data: (orderBy && order === 'DESC') ? data.reverse() : data,
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 7,
        total_page: 1
      }
    },
    status: "success"
  }
}