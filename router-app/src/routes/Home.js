import React from 'react';

const Home = ({history}) => {
    return (
        <div>
          홈
          <button onClick={()=>{history.push('/posts')}}>
            button
          </button>
        </div>
    );
};

export default Home;
