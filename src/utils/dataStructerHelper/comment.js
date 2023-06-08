export function extendedComment(commentArr, rootCommentId = null) {
    return commentArr.reduce((prev, cur) => {
        if (cur.rootCommentId === rootCommentId) {
            const children = extendedComment(commentArr, cur._id);
            if (children.length) {
                cur.children = children;
            } else {
                cur.children = [];
            }
            prev.push(cur);
        }
        return prev;
    }, []);
}
