const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  const blogs = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa54a676234d17f8",
      title: "Hello 2",
      author: "Atara",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 10,
      __v: 1,
    },
  ];

  const listWith0Blogs = [];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test("when list has 0 blogs", () => {
    const result = listHelper.totalLikes(listWith0Blogs);
    expect(result).toBe(0);
  });

  test("find item with max likes", () => {
    const result = listHelper.favoriteBlog(blogs);
    expect(result).toEqual({
      _id: "5a422aa54a676234d17f8",
      title: "Hello 2",
      author: "Atara",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 10,
      __v: 1,
    });
  });

  test("async await test", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("verify id property name", async () => {
    const response = await api.get("/api/blogs");
    response.body.forEach((blog) => {
      expect(blog.id).toBeDefined();
    });
  });

  test("addition of a new blog", async () => {
    const newBlog = {
      title: "tester",
      author: "atara",
      url: "blabla.co.il",
      likes: 3,
    };
    const initialBlogs = api.get("/api/blogs");
    await api
      .post("/api/blogs")
      .send(newBlog)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await api.get("/api/blogs");
    expect(blogsAtEnd).toHaveLength(initialBlogs.length + 1);
  });
});
