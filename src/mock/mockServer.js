/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口,指定数据路径，code标识正常or非正常数据
Mock.mock('/goods', {code:0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code:0, data: data.ratings})
// 返回info的接口
Mock.mock('/info', {code:0, data: data.info})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可，代码运行便可以访问接口