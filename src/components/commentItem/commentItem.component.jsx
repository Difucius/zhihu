import { Card, Button, Input } from 'antd';
import { CardContainer } from './commentItem.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { Fragment, useEffect, useState } from 'react';
import { deleteComment } from '../../api/anwser';


const { Meta } = Card;


const CommentItem = ({ content, commentator, deleteComment, _id }) => {
    const currentUser = useSelector(selectCurrentUser);
    let userId = '';
    useEffect(() => {
        userId = '';
        if (currentUser) {
            userId = currentUser._id;
        }
    }, [currentUser]);

    const [isEdit, setIsEdit] = useState(false);


    const onChange = (e) => {
        const value = e.target.value;
    };

    const onSubmit = () => {

    };

    const onDelete = () => {
        console.log(deleteComment);
    };

    return (
        <Card
            bordered={false}
            style={{
                width: 1200,
                marginTop: 20,
                flexBasis: '100%',
                marginLeft: 100,
                marginRight: 100,

            }}
        >
            <CardContainer>
                <Meta
                    description={content ? content : 'This is the content'}
                />
            </CardContainer>
            {_id !== commentator &&
                <Fragment>
                    <Button shape='circle' icon={<DeleteTwoTone onClick={onDelete} />} />
                    <Button shape='circle' icon={<EditTwoTone />} />
                    {isEdit && <Fragment>
                        <Input onChange={onChange} placeholder='Basic usage' />
                        <Button onClick={onSubmit}>提交</Button>
                    </Fragment>}

                </Fragment>
            }
        </Card>
    );
};
export default CommentItem;
