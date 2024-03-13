const { axiosInstance } = require(".");

// Add a new movie
export const AddMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/movie/add-movie", payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}


export const GetAllMovies = async () => {
    try {
        const response = await axiosInstance.get("/api/movie/get-all-movies");
        return response.data;
    } catch (error) {
        return error.response;
    }
}


export const UpdateMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/movie/update-movie", payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}


export const DeleteMovie = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/movie/delete-movie", payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

// get a movie by id
export const GetMovieById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/movie/get-movie-by-id/${id}`);
        return response.data;
    } catch (error) {
        return error.response;
    }
}