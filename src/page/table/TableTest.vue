<template>
    <Table stripe border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: '序号',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '条码',
                        key: 'name'
                    },
                    {
                        title: '类型',
                        key: 'age',
                        sortable: true
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        date: '1'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        date: '2'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        date: '3'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        date: '4'
                    }
                ]
            }
        }
    }
</script>
