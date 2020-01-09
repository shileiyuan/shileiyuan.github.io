import { useCallback, useReducer, useMemo } from 'react'

const defaultInitialProps = {
  current: 1,
  pageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100']
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE': {
      if (
        (action.current === undefined && action.pageSize === undefined) ||
        (action.current === state.current &&
          action.pageSize === state.pageSize)
      ) {
        return state
      }
      const result = { ...state }
      if (action.current !== undefined) {
        result.current = action.current
      }
      if (action.pageSize !== undefined) {
        result.pageSize = action.pageSize
      }
      return result
    }
    default:
      return state
  }
}

export default function usePagination(initialProps) {
  const [state, dispatch] = useReducer(reducer, { ...defaultInitialProps, ...initialProps })

  const handleChange = useCallback((current, pageSize) => {
    dispatch({ type: 'CHANGE', current, pageSize })
  }, [])

  return useMemo(() => {
    return { onChange: handleChange, onShowSizeChange: handleChange, ...state }
  }, [handleChange, state])
}
