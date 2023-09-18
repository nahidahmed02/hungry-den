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

        fetch('https://hungry-den-server.onrender.com/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
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

            <h2 className='border-b-2 border-b-orange-500 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Add Item</h2>

            <form onSubmit={handleSubmit(handleAddItem)} className='flex flex-col w-96 mx-auto mb-4'>

                {/*=================================== CATEGORY FIELD ===================================*/}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold text-gray-200'>
                    Category
                </label>

                {
                    tap
                        ?
                        // ===================== EXISTING CATEGORIES =====================
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-full max-w-xs mx-auto mb-2.5"
                            required
                        >
                            {
                                category?.map((ctgry, index) => <option
                                    key={index}
                                    value={ctgry}
                                    className='bg-black'
                                >{ctgry}</option>)
                            }
                        </select>
                        :
                        // ==================== FOR ADDING NEW CATEGORY ====================
                        <input
                            {...register("category", { required: "Category is required" })}
                            type="text"
                            placeholder="Category"
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                }

                {/* ======== TO TOGGLE BETWEEN NEW & EXISTING CATEGORY ========*/}

                <small
                    className='cursor-pointer w-fit ml-60 -mt-1 text-gray-200'
                    onClick={toggleCategoryField}
                >
                    {tap ? 'Add new Category' : 'Existing Categories'}
                </small>

                {errors.category && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.category?.message}</p>}

                {/*=================================== FOOD NAME FIELD ===================================*/}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold text-gray-200'>
                    Name
                </label>

                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.name && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.name?.message}</p>}

                {/*=================================== PRICE & VAT FIELD ===================================*/}

                <div className='flex w-full max-w-xs mx-auto mb-2.5'>

                    {/*=============== PRICE FIELD ===============*/}

                    <div className='flex flex-col'>
                        <label className='w-full max-w-xs ml-1.5 mb-1 font-semibold text-gray-200'>
                            Price
                        </label>

                        <input
                            {...register("price", { required: "Price is required", min: { value: '1', message: "Invalid price" } })}
                            type="number"
                            placeholder="Price"
                            className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-full"
                            required
                        />
                    </div>

                    {/*================== VAT FIELD ==================*/}

                    <div className='flex flex-col'>

                        <label className='w-full max-w-xs ml-11 mb-1 font-semibold text-gray-200'>
                            VAT
                        </label>

                        <div className='flex justify-end'>
                            <input
                                {...register("vat", { required: "Vat is required", min: { value: '1', message: 'Invalid VAT' } })}
                                type="number"
                                placeholder="VAT"
                                className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-2/3"
                                required
                            />
                            <label className='ml-1 mt-3 text-gray-200'>%</label>
                        </div>

                    </div>

                </div>
                {errors.price && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.price?.message}</p>}
                {errors.price && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.min?.message}</p>}
                {errors.vat && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.vat?.message}</p>}
                {errors.vat && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.min?.message}</p>}

                {/*=================================== PHOTO URL FIELD ===================================*/}

                <label className='w-full max-w-xs ml-9 mb-1 font-semibold text-gray-200'>Add Photo</label>

                {/*================= TO GET THE PHOTO LINK =================*/}

                <small className='mb-1.5 ml-9 text-gray-200'>
                    Please visit
                    <a href="https://postimages.org/" target='_blank' className='text-yellow-500 hover:text-yellow-400 font-semibold italic'> this website </a>
                    and upload your image. Then <br /> copy the
                    <span className='font-semibold text-orange-400'> Direct Link </span>
                    and paste that in this input field ⬇️
                </small>

                {/*======================= URL FIELD =======================*/}

                <input
                    {...register("photo", { required: "Image is required" })}
                    type="text"
                    placeholder='Direct Link'
                    className="input input-bordered bg-transparent shadow shadow-gray-200 text-yellow-500 border-yellow-500 w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.img && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.img?.message}</p>}

                {/*=================================== SUBMIT BUTTON ===================================*/}

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-gray-200 font-bold shadow shadow-gray-200 hover:rounded-2xl w-full max-w-xs mx-auto py-2 mt-1.5 rounded-md">
                    Add
                </button>

                {/*============================== SHOWING ERRORS IN THE UI ==============================*/}

                {addItemError && <p className='text-yellow-500 ml-10 pr-5 mb-2.5 font-semibold'>{addItemError}</p>}
            </form>

        </section>)
}

export default AddItem