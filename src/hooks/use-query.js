import { useCallback, useState } from "react"
import queryString from 'query-string'

function getQueryParams() {
    let queryParams = {}
    if (typeof window !== 'undefined') {
        queryParams = queryString.parse(window.location.search)
    }
    return queryParams
}

function setQueryParams(query) {
    if (typeof window !== 'undefined') {
        const hasKeys = Object.keys(query).length > 0
        const urlSuffix = hasKeys ? `?${queryString.stringify(query)}` : ''
        window.history.pushState(window.history.state, '', `${window.location.pathname}${urlSuffix}`)
    }
}

function clearQueryParam(key) {
    const queryParams = getQueryParams()
    delete queryParams[key]
    setQueryParams(queryParams)
}

export function useQueryParam(name, defaultValue) {

    const [queryParam, setQueryParam] = useState(() => {
        let value = defaultValue
        let param = null
        if (typeof window !== 'undefined') {
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)

            if (urlParams.has(name))
                param = urlParams.get(name)

        }

        return param || value
    })

    const clear = useCallback(() => {
        clearQueryParam(name)
    }, [name]);

    const changeUrlParam = useCallback((val) => {
        setQueryParam(val)
        if (val === defaultValue) {
            clear()
        }
        else {
            setQueryParams(Object.assign(Object.assign({}, getQueryParams()), { [name]: val }))
        }
    }, [defaultValue, name, clear])

    return [queryParam, changeUrlParam]
}