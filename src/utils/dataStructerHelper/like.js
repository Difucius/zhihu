export function extendedAnswerArr(answerArr, likesArr, dislikesArr, secondTime = false) {
    const likeSet = new Map();
    const dislikeSet = new Map();
    likesArr.forEach((item, index) => {
        likeSet.set(item._id, index);
    });
    dislikesArr.forEach((item, index) => {
        dislikeSet.add(item._id, index);
    });
    for (let i = 0; i < answerArr.length; i++) {
        answerArr[i].like = false;
        answerArr[i].dislike = false;
        if (likeSet.has(answerArr[i]._id)) {
            const answerer = answerArr[i].answerer;
            const voteCount = answerArr[i].voteCount;
            const content = answerArr[i].content;
            const questionId = answerArr[i].questionId
            answerArr[i] = likesArr[likeSet.get(answerArr[i]._id)];
            answerArr[i].answerer = answerer;
            answerArr[i].content = content;
            answerArr[i].like = true;
            answerArr[i].questionId = questionId
            answerArr[i].voteCount = voteCount;
        }
    }
    // answerArr.forEach((item) => {
    //     item.like = false;
    //     item.dislike = false;
    //     if (likeSet.has(item._id)) {
    //         if (secondTime) {
    //             item.voteCount = item.voteCount + 1;
    //         }
    //         item.like = true;
    //     }
    //     if (dislikeSet.has(item._id)) {
    //         item.dislike = true;
    //     }
    // });
    return [...answerArr];
}
