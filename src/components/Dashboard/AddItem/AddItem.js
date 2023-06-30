import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addItemError, setAddItemError] = useState('')

    const handleAddItem = (data) => {
        setAddItemError('')
        console.log(data);
    }
    return (
        <section>
            <h2 className='text-2xl font-serif font-bold text-orange-500 text-center lg:mt-6 mb-4 '>Add Item</h2>

            <form onSubmit={handleSubmit(handleAddItem)} className='flex flex-col w-96 mx-auto mb-4'>

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold'>
                    Category
                </label>
                <input
                    {...register("category", { required: "Category is required" })}
                    type="text"
                    placeholder="Category"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.category && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.category?.message}</p>}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold'>
                    Name
                </label>
                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.name && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.name?.message}</p>}

                <div className='flex w-full max-w-xs mx-auto mb-2.5'>

                    <div className='flex flex-col'>
                        <label className='w-full max-w-xs ml-1.5 mb-1 font-semibold'>
                            Price
                        </label>
                        <input
                            {...register("price", { required: "Price is required" })}
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {errors.price && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.price?.message}</p>}

                    <div className='flex flex-col'>

                        <label className='w-full max-w-xs ml-11 mb-1 font-semibold'>
                            VAT
                        </label>
                        <div className='flex justify-end'>
                            <input
                                {...register("vat", { required: "Vat is required" })}
                                type="number"
                                placeholder="VAT"
                                className="input input-bordered w-2/3"
                                required
                            />
                            <label className='ml-1 mt-3 text-gray-400'>%</label>
                        </div>

                    </div>
                    {errors.vat && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.vat?.message}</p>}

                </div>

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold'>Add Photo</label>
                <input
                    {...register("img", { required: "Image is required" })}
                    type="file"
                    className="w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.img && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.img?.message}</p>}

                <button
                    type="submit"
                    className="bg-orange-500 text-white font-bold w-full max-w-xs mx-auto py-2 mt-1.5 rounded-md">
                    Add
                </button>

                {addItemError && <p className='text-red-500 ml-10 pr-5 mb-2.5 font-semibold'>{addItemError}</p>}
            </form>
        </section>)
}

export default AddItem