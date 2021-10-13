import React from 'react'
import { range } from 'lodash'
import { Pagination as ReactStrapPagination, PaginationItem, PaginationLink } from 'reactstrap';

export const Pagination = ({ currentPage, totalPages, queryParams }) => {
    return (
        <ReactStrapPagination>
            {
                range(0, totalPages).map(page => {
                    {
                        return page + 1 === currentPage ?
                            <PaginationItem key={page} active>
                                <PaginationLink href={`/admin/search/?page=${page + 1}&${queryParams}`}>
                                    {page + 1}
                                </PaginationLink>
                            </PaginationItem>
                            : <PaginationItem key={page}>
                                <PaginationLink href={`/admin/search/?page=${page + 1}&${queryParams}`}>
                                    {page + 1}
                                </PaginationLink>
                            </PaginationItem>
                    }
                })
            }
        </ReactStrapPagination>
    )
}