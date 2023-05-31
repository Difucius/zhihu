import React, { useEffect } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import AnswerList from './routes/answerList/answerList.component';
import Answer from './routes/answer/answer.component';
import Reply from './routes/reply/reply.component';

const App = () => {
    useEffect(() => {
        //dispatch(setCurrentUser())
    }, []);
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index={true} element={<AnswerList />}></Route>
                    <Route path='/authentication' element={<Authentication />}></Route>
                    <Route path='/answer/:id' element={<Answer />}></Route>
                    <Route path='/answer/:answerId/reply/:replyId' element={<Reply/>}></Route>
                </Route>
            </Routes>
        </div>
    );

};


export default App;
