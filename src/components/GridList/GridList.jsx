import React from 'react';
import GridItem from "./GridItem";

const GridList = (props) => {
    const {users} = props
    return (
        <>
            <div className="main__content-card">
                {
                    users?.map(user => (
                        <GridItem key={user.id} {...user} />
                    ))
                }
            </div>
        </>
    )
};

export default GridList;