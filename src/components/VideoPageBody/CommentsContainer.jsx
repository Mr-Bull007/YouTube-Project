const commentsData = [
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [
      {
        name: "Rushabh Sagara",
        text: "nsnxsns snsnds ss psondsmpsncnc",
        replies: [
          {
            name: "Rushabh Sagara",
            text: "nsnxsns snsnds ss psondsmpsncnc",
            replies: [
              {
                name: "Rushabh Sagara",
                text: "nsnxsns snsnds ss psondsmpsncnc",
                replies: [
                  {
                    name: "Rushabh Sagara",
                    text: "nsnxsns snsnds ss psondsmpsncnc",
                    replies: [
                      {
                        name: "Rushabh Sagara",
                        text: "nsnxsns snsnds ss psondsmpsncnc",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [
      {
        name: "Rushabh Sagara",
        text: "nsnxsns snsnds ss psondsmpsncnc",
        replies: [],
      },
    ],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [
      {
        name: "Rushabh Sagara",
        text: "nsnxsns snsnds ss psondsmpsncnc",
        replies: [
          {
            name: "Rushabh Sagara",
            text: "nsnxsns snsnds ss psondsmpsncnc",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [],
  },
  {
    name: "Rushabh Sagara",
    text: "nsnxsns snsnds ss psondsmpsncnc",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex ml-4 my-2">
      <img
        className="w-9 h-9 object-cover rounded-full mr-2"
        alt="profile pic"
        src="https://th.bing.com/th/id/OIP.J0Vuw5Aao6NZWhrt2Di36QHaFV?pid=ImgDet&w=474&h=341&rs=1"
      />
      <div>
        <p className="text-sm font-thin pt-1">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((c, i) => (
    <div key={i}>
      <Comment data={c} />
      <div className="ml-5 px-2 py-2 border border-l-black">
        <CommentList comments={c.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg">
      <div className="font-bold text-xl my-2 py-2">Comments:</div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
