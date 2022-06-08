import React from 'react';

const EditData = (props) => {
    const { handleEditItem, setTitle, setDescription, title, description, } = props;

    return (
        <>
            <input type="checkbox" id="edit" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="edit" class="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Edit a item</h3>
                    <form onSubmit={handleEditItem} className='flex flex-col items-center justify-center'>
                        <input onChange={(e) => setTitle(e.target.value)} name="title" type="text" placeholder="Type Title here" class="input input-bordered w-full max-w-xs my-5" value={title} required />
                        <input onChange={(e) => setDescription(e.target.value)} name='description' type="text" placeholder="Type Description here" class="input input-bordered w-full max-w-xs mb-5" value={description} required />
                        <button type='submit' class="text-white btn btn-success  w-full max-w-xs">Edit Item</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditData;