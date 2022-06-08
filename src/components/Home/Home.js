import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FetchData from '../FetchData/FetchData';
import AddData from '../Modal/AddData';
import EditData from '../Modal/EditData';

const Home = ({ socket }) => {
    const [isAddItemModal, setIsAddItemModal] = useState(true);
    const [isEditItemModal, setIsEditItemModal] = useState(true);
    const [editItem, setEditItem] = useState(true);
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        try {
            socket.emit('get_items');
            socket.on('get_items', (data) => {
                setItems(data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [socket])


    const handleAddItem = e => {
        e.preventDefault();
        const item = {
            title: e.target.title.value,
            description: e.target.description.value,
        }
        socket.emit("add_item", item);
        setIsAddItemModal(false)
        toast.success("Item added successfully!")
    }

    const handleEditItem = e => {
        e.preventDefault();
        const item = {
            id: editItem._id,
            title: title,
            description: description,
        }
        socket.emit("edit_item", item);
        setIsEditItemModal(false)
        toast.success("Item has been edited")

    }

    const handleDelete = id => {

        const item = {
            id: id
        }
        socket.emit("delete_item", item);
        toast.success("Item has been deleted.")
    }

    return (
        <div>
            <FetchData setDescription={setDescription} setIsAddItemModal={setIsAddItemModal} setTitle={setTitle} setEditItem={setEditItem} handleDelete={handleDelete} items={items} setIsEditItemModal={setIsEditItemModal} />
            {
                isAddItemModal && <AddData handleAddItem={handleAddItem} />
            }
            {
                isEditItemModal && <EditData handleEditItem={handleEditItem} editItem={editItem} setEditItem={setEditItem} description={description} title={title} setDescription={setDescription} setTitle={setTitle} />
            }
        </div>
    );
};

export default Home;