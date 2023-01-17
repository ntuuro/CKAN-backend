import { BaseApi } from '../api/api';
import {Main} from "../../shared/types/DataSet.types";

const projectEndpoint = BaseApi.injectEndpoints({
    endpoints: builder => ({
        importsData: builder.query<Main, string>({
            query: (dataset) => ({
                url: '/action/package_show?id=' + dataset,
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                }

            }),
            providesTags: ['Imports']
        }),
        annualCars: builder.query<Main, string>({
            query: (dataset) => ({
                url: '/action/package_show?id=' + dataset,
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                }
            }),
            providesTags: ['AnnualCars']

        }),

    })
});

export const { useImportsDataQuery, useAnnualCarsQuery } =
    projectEndpoint;
