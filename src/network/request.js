export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:4000/api/',
        timeout: 5000
    });
    // 3.请求拦截
    instance.interceptors.request.use(config => {
    	//必要步骤
        return config
    },err => {
        console.log(err)
    })
    // 4.响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    },err => {
        console.log(err)
    })
    // 2.发送真正的网络请求
    return instance(config)
}