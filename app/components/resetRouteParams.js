export const resetRouteParams = (navigation) => {
    navigation.setParams({ newScore: null, tryAgain: true });
}

export const resetRouteParamsAll = (navigation) => {
    navigation.setParams({ newScore: null, tryAgain: null });
}