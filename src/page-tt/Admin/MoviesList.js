import React, { useEffect } from "react";
import MovieForm from "./MovieForm";
import { useDispatch } from "react-redux";
import moment from "moment";
import { message, Table } from "antd";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import Button from "../../components/Button";
import { DeleteMovie, GetAllMovies } from "../../apicalls/movies";

function MoviesList() {
  const [movies, SetMovies] = React.useState([]);
  const [showMoviesFormModal, SetShowMoviesFormModal] = React.useState(false);
  const [selectedMovie, SetselectedMovie] = React.useState(null);
  const [formType, SetformType] = React.useState("add");
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllMovies();
      if (response.success) {
        SetMovies(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const handleDelete = async (movieId) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteMovie({
        movieId,
      });
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "poster",
      dataindex: "poster",
      render: (text, record) => {
        return (
          <img
            src={record.poster}
            alt="poster"
            height="60"
            width="80"
            className="br-1"
          />
        );
      },
    },
    {
      title: "name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description"
    },
    { 
      title:"Duration",
      dataIndex:"duration"
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",

      render: (text, record) => {
        return moment(record.releaseDate).format("DD-MM-YYYY");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap 1">
            <i className="ri-delete-bin-line"
            onClick={() => {
              handleDelete(record._id);
            }}
            
            ></i>
            <i className="ri-pencil-line" onClick={() => {
                SetselectedMovie(record);
                SetformType("edit");
                SetShowMoviesFormModal(true);
              }}></i>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          title="Add Movie"
          variant="outlined"
          onClick={() => {
            SetShowMoviesFormModal(true);
            SetformType("add");
          }}
        />
      </div>

      <Table columns={columns} dataSource={movies} />
      {showMoviesFormModal && (
        <MovieForm
          showMoviesFormModal={showMoviesFormModal}
          SetShowMoviesFormModal={SetShowMoviesFormModal}
          selectedMovie={selectedMovie}
          SetselectedMovie={SetselectedMovie}
          formType={formType}
          getData={getData}
        />
      )}
    </div>
  );
}

export default MoviesList;
