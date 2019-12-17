const isBlank = (str) => {
    return (!str || /^\s*$/.test(str));
}

const isNotBlank = (str) => !isBlank(str);

const StringUtil = {
    isBlank: isBlank,
    isNotBlank: isNotBlank
}

export { StringUtil };