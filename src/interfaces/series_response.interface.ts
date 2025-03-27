import Series from "./series.interface";

export interface SeriesResponse {
    page: number;
    results: Series[];
    total_pages: number;
    total_results: number;
}