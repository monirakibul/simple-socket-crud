import React from 'react';
import ListItem from './ListItem';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FetchData = ({ items, handleDelete, setEditItem, setIsEditItemModal, setIsAddItemModal, setTitle, setDescription }) => {
    return (
        <div>
            <div className="flex flex-col add-task py-10 px-5 lg:min-h-[calc(100vh-72px)] lg:px-10">
                <div className="flex item-center justify-between">
                    <h2 className="text-xl text-green-600 pb-4"><FontAwesomeIcon icon={faFile}></FontAwesomeIcon>  All Items</h2>
                    <label onClick={() => setIsAddItemModal(true)} for="add" class="btn modal-button btn-sm">Add Item</label>
                </div>
                <div className='flex flex-col lg:flex-grow lg:max-h-[calc(100vh-200px)] items-center w-full'>
                    <div className="max-h-full lg:overflow-y-scroll w-full">
                        {
                            items.length === 0 ?
                                <p className='text-gray-500 p-5 text-center'>No items Available</p>
                                :
                                items.map((item, index) => <ListItem
                                    item={item}
                                    key={index}
                                    handleDelete={handleDelete}
                                    setDescription={setDescription}
                                    setTitle={setTitle}
                                    setIsEditItemModal={setIsEditItemModal}
                                    setEditItem={setEditItem}
                                ></ListItem>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FetchData;