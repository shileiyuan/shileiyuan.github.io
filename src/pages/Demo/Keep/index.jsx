import React, { useMemo } from 'react'
import { Table } from 'antd'
import useRequest from '@/hooks/useRequest'
import usePagination from '@/hooks/usePagination'
import API from '@/utils/api'

export default function Keep() {
  const pagination = usePagination({ showSizeChanger: true })

  const config = useMemo(() => {
    const { current, pageSize } = pagination
    return {
      // method: 'get',
      url: API.get.queryTable,
      params: { current, pageSize }
    }
  }, [pagination])

  const { data = {}, loading } = useRequest(config)

  const columns = [
    { title: '姓名', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' }
  ]

  const { total, data: dataSource } = data
  console.log('render')

  return (
    <>
      <h1>{process.env.NODE_ENV}</h1>
      <div style={{ width: 500 }}>
        <Table
          rowKey='id'
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          size='middle'
          pagination={{ ...pagination, total }}
          bordered
        />
      </div>
    </>
  )
}
