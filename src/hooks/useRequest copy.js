import {
  useEffect,
  useReducer,
  useRef,
  useCallback,
  useContext,
  useMemo
} from 'react'
import axios from 'axios'
import RequestContext from '@/context/RequestContext'

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { data: state.data, loading: true, error: null }
    case 'SUCCESS':
      return { data: action.data, loading: false, error: null }
    case 'FAIL':
      return { data: state.data, loading: false, error: action.error }
    default:
      return state
  }
}

function useRequest(config, options = {}) {
  const { onSuccess, onFail, onFinish, imperative } = options

  const request = useContext(RequestContext)

  const initialState = { data: undefined, loading: !!config && !imperative, error: null }

  const [state, dispatch] = useReducer(reducer, initialState)

  const sourcesRef = useRef([])

  const cancel = useCallback(() => {
    for (let i = 0; i < sourcesRef.current.length; i++) {
      if (
        sourcesRef.current[i] &&
        typeof sourcesRef.current[i].cancel === 'function'
      ) {
        sourcesRef.current[i].cancel()
        sourcesRef.current[i] = null
      }
    }
  }, [])

  const load = useCallback(
    (overriddenConfig, overriddenOptions = {}) => {
      // Cancel previous requests.
      cancel()
      const usedConfig = overriddenConfig || config
      const configs = Array.isArray(usedConfig) ? usedConfig : [usedConfig]
      const requests = configs.map((config, i) => {
        sourcesRef.current[i] = axios.CancelToken.source()
        return request({
          ...config,
          cancel: false,
          cancelToken: sourcesRef.current[i].token
        })
      })
      const handleSuccess = overriddenOptions.onSuccess || onSuccess
      const handleFail = overriddenOptions.onFail || onFail
      const handleFinish = overriddenOptions.onFinish || onFinish
      dispatch({ type: 'LOADING' })
      return axios
        .all(requests)
        .then(datas => {
          let data = datas
          if (!Array.isArray(usedConfig)) data = datas[0]
          dispatch({ type: 'SUCCESS', data })
          if (typeof handleSuccess === 'function') handleSuccess(data)
          if (typeof handleFinish === 'function') handleFinish()
        })
        .catch(error => {
          // Ignore axios cancelled error.
          if (!axios.isCancel(error)) {
            cancel()
            dispatch({ type: 'FAIL', error })
            if (typeof handleFail === 'function') handleFail(error)
            if (typeof handleFinish === 'function') handleFinish()
          }
        })
    },
    [cancel, config, onFail, onFinish, onSuccess, request]
  )

  const reload = useCallback(() => {
    return load()
  }, [load])

  const result = useMemo(() => {
    return { ...state, cancel, load, reload }
  }, [cancel, load, reload, state])

  useEffect(
    () => {
      if (!!config && !imperative) load()
      return cancel
    },
    // Only `config` and `imperative` effect auto load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config, imperative]
  )

  return result
}
export default useRequest
