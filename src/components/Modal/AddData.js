import React, { useState } from 'react';

const AddData = ({ handleAddItem }) => {


    return (
        <>
            <input type="checkbox" id="add" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="add" id='add-modal' class="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Add a item</h3>
                    <form onSubmit={handleAddItem} className='flex flex-col items-center justify-center'>
                        <input name='title' type="text" placeholder="Type Title here" class="input input-bordered w-full max-w-xs my-5" required />
                        <input name='description' type="text" placeholder="Type Description here" class="input input-bordered w-full max-w-xs mb-5" required />
                        <button id='submit' for="add" type='submit' class="text-white btn btn-success  w-full max-w-xs">Add Item</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddData;