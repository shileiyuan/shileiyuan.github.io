import API from '@/utils/api'
import Mock from 'mockjs'
import parse from 'url-parse'

Mock.mock(new RegExp(API.get.queryTable), function (options) {
  const params = parse(options.url, true).query
  const { pageSize } = params
  const data = `data|${pageSize}`
  return Mock.mock({
    'status': 0,
    [data]: [{
      'id': '@guid',
      'name': '@cname',
      'age|1-100': 1
    }],
    'total': 100
  })
})
