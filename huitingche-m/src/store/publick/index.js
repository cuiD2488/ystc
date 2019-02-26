const state = {
  userInfo: null
}

const getters = {
  userInfo: state => state.userInfo
}

const action = {
}

const mutations = {
  'GETUSERINFO' (state) {
    console.log(state)
    console.log('vux')
  }
}

export default {
  state,
  getters,
  action,
  mutations
}
