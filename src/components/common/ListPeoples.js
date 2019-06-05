import React from 'react'
import {Table} from 'antd'
import {observer} from 'mobx-react'


const ListPeoples = observer(({data = [], total = 0, columns = [], loading = false, loadData = f => f}) =>
    <Table
        size='middle'
        loading={loading}
        columns={columns}
        dataSource={data}
        onChange={loadData}
        pagination={{total: total}}
    />
)


ListPeoples.propTypes = {}

export default ListPeoples