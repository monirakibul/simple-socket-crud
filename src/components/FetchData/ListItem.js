import React from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({ item, handleDelete, setEditItem, setIsEditItemModal, setDescription, setTitle }) => {
    const { _id, title, description } = item;
    return (
        <div className="card bg-base-100 border border-gray-100 lg:mx-5 my-3 shadow">
            <div className="flex justify-between items-center px-5 py-2">
                <div className='w-10/12 break-words'>
                    <h2 className={`text-xl font-bold `}>{title}</h2>
                    <p className={``}>{description}</p>
                </div>
                <div className="w-2/12 card-actions justify-end">
                    <label for="edit" onClick={() => { setEditItem(item); setDescription(item.description); setTitle(item.title); setIsEditItemModal(true) }} className="btn btn-circle btn-sm bg-green-500 border-none hover:bg-green-700">
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-rose-700 border-none hover:bg-red-900">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListItem;