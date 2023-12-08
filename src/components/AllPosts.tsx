import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User Id",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "body",
      headerName: "Post Body",
      flex: 1,
    },
  ];

  return (
    <div style={{ width: "100%", padding: "24px" }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        All Posts
      </Typography>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default AllPosts;
