import { Context } from '@/src/context/Context';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { foods, refetch } = useContext(Context);
    const [addItemError, setAddItemError] = useState('');
    const [tap, setTap] = useState(false);

    const categories = foods?.map(food => food.category);
    const category = categories?.filter((category, index) => categories.indexOf(category) === index)

    const toggleCategoryField = () => {
        return setTap(!tap)
    }

    const handleAddItem = (data) => {

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('New item added')
                setAddItemError('')
                refetch()
                reset()
            })
    }

    return (
        <section>
            <h2 className='text-2xl font-serif font-bold text-orange-500 text-center lg:mt-6 mb-4 '>Add Item</h2>

            <form onSubmit={handleSubmit(handleAddItem)} className='flex flex-col w-96 mx-auto mb-4'>

                {/*=================================== CATEGORY FIELD ===================================*/}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold'>
                    Category
                </label>

                {
                    tap
                        ?
                        // ===================== EXISTING CATEGORIES =====================
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        >
                            {
                                category.map((ctgry, index) => <option
                                    key={index}
                                    value={ctgry}
                                >{ctgry}</option>)
                            }
                        </select>
                        :
                        // ==================== FOR ADDING NEW CATEGORY ====================
                        <input
                            {...register("category", { required: "Category is required" })}
                            type="text"
                            placeholder="Category"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                }

                {/* ======== TO TOGGLE BETWEEN NEW & EXISTING CATEGORY ========*/}

                <small
                    className='cursor-pointer w-fit ml-60 -mt-1'
                    onClick={toggleCategoryField}
                >
                    {tap ? 'Add new Category' : 'Existing Categories'}
                </small>

                {errors.category && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.category?.message}</p>}

                {/*=================================== FOOD NAME FIELD ===================================*/}

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

                {/*=================================== PRICE & VAT FIELD ===================================*/}

                <div className='flex w-full max-w-xs mx-auto mb-2.5'>

                    {/*=============== PRICE FIELD ===============*/}

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

                    {/*================== VAT FIELD ==================*/}

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

                {/*=================================== PHOTO URL FIELD ===================================*/}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold'>Add Photo</label>

                {/*================= TO GET THE PHOTO LINK =================*/}

                <small className='mb-1 ml-9'>
                    Please visit
                    <a href="https://postimages.org/" target='_blank' className='text-blue-600 underline'> this website </a>
                    and upload your image. Then <br /> copy the
                    <span className='font-semibold'> Direct Link </span>
                    and paste that in this input field ⬇️
                </small>

                {/*======================= URL FIELD =======================*/}

                <input
                    {...register("img", { required: "Image is required" })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.img && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.img?.message}</p>}

                {/*=================================== SUBMIT BUTTON ===================================*/}

                <button
                    type="submit"
                    className="bg-orange-500 text-white font-bold w-full max-w-xs mx-auto py-2 mt-1.5 rounded-md">
                    Add
                </button>

                {/*============================== SHOWING ERRORS IN THE UI ==============================*/}

                {addItemError && <p className='text-red-500 ml-10 pr-5 mb-2.5 font-semibold'>{addItemError}</p>}
            </form>

        </section>)
}

export default AddItem