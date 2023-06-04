import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends =useLoaderData();
    
    return (
        <div>
            <h2>this are my friends:{friends.length}</h2>
            <div>
                {
                    friends.map(friend =><Friends>
                        key={friend.id}
                        friend={friend}
                    </Friends>)
                }
            </div>
        </div>
    );
};

export default Friends;