import React from 'react'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="flex justify-center mt-6">
            <nav>
                <ul className="pagination ">
                    {pageNumbers.map(number => (
                        <li
                            key={number}
                            className={`page-item ${currentPage === number ? 'active' : ''}`}
                        >
                            <button onClick={() => onPageChange(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Pagination