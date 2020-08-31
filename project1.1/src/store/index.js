import Vue from 'vue'
import Vuex from 'vuex'
// 手动安装vuex
Vue.use(Vuex);

const state = {
    adminInfo: {
        avatar:'myVuexStore'
    }
}

const mutations = {
    saveAdminInfo(state, adminInfo) { 
        state.adminInfo = adminInfo
        console.dir(state);
    }
}

const actions = {
    async getAdminData({ commit }) { 
        // 异常捕获
        try {
            // 在这里 应该要根据登录的id去查询 用户的个人数据(接口调用返回数据)
            // const res=await getAdminInfo()
            // if(res.status==1){}
            commit('saveAdminInfo', {
                id: 2,
                test:'测试'
            })
        } catch (error) {
            // console.log(error.message);

        }
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})