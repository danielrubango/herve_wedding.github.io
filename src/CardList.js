import React from 'react';
import Card from './Card';
import './card-list.css';

const CardList = ({datas}) => {
    return (
        <div className={"card-list"}>
            {
                datas.map(({nom, table}) => {
                    return (
                        <Card
                            key={nom+table}
                            nom={nom}
                            table={table}
                        />
                    )
                }
            )}
        </div>
    );
}

export default CardList;
