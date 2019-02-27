import Axios from 'axios'

export const env = process.env.NODE_ENV
Axios.defaults.baseURL = env === 'development' ? '/api/' : '/'
Axios.interceptors.response.use((response) => {
  if (response.status === 200 || response.status === 304) {
    return response.data
  } else if (response.status === 400) {
    return response.statusText
  } else {
    return false
  }
})

export default Axios

// 编码规则： 链接命名为URL+接口名, 暴露于组件的名， Api+接口名
export const URLbindingPhone = '/bindingPhone.json'
export const ApibindingPhone = async (data) => {
  try {
    const res = await Axios.post(URLbindingPhone, data)
    return res
  } catch (err) {
    console.log(err)
  }
}
