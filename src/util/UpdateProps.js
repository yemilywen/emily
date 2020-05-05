const updateProps = (element, propToAdd) => {
    return {
        ...element,
        props: {
            ...element.props,
            ...propToAdd
        }
    }
}

export default updateProps;