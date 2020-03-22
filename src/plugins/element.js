import Vue from 'vue'

import { Button, Form, FormItem, Input, MessageBox, Loading } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$loading = Loading.service
