import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useBouncedDelay = (callback, timeout, deps) => {
	const [firstTime, setFirstTime] = useState(true);
	const delayedCallback = useCallback(debounce(callback, timeout), [...deps]);

	useEffect(() => {
		firstTime ? setFirstTime(false) : delayedCallback();
		return delayedCallback.cancel;
	}, [...deps, delayedCallback]);
};

export default useBouncedDelay;