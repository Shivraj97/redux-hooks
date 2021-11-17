const initialState = {
  balance: {
    accountBalance: 0,
    isBalanceNegative: false,
  },
  isAccountActive: false,
  isSavingAccount: true,
}

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT": {
      return {
        ...state,
        balance: {
          ...state.balance,
          accountBalance: action.payload
            ? state.balance.accountBalance + action.payload
            : 0,
          isBalanceNegative:
            state.balance.accountBalance + action.payload < 0 ? true : false,
        },
      }
    }
    case "WITHDRAW": {
      return {
        ...state,
        balance: {
          ...state.balance,
          accountBalance: action.payload
            ? state.balance.accountBalance - action.payload
            : 0,
          isBalanceNegative:
            state.balance.accountBalance - action.payload < 0 ? true : false,
        },
      }
    }
    case "COLLECT_INTEREST": {
      return {
        ...state,
        balance: {
          ...state.balance,
          accountBalance: state.balance.accountBalance * 1.03,
        },
      }
    }
    case "DELETE_ACCOUNT": {
      return {
        ...state,
        balance: {
          ...state.balance,
          accountBalance: (state.balance.accountBalance = 0),
        },
      }
    }
    case "SWITCH_ACCOUNT": {
      return {
        ...state,
        isAccountActive: !state.isAccountActive,
        isSavingAccount: !state.isSavingAccount,
      }
    }
    default:
      return state
  }
}
