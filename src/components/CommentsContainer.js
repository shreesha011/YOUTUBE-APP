import React from "react"

//Created commnetsData like name,title,replies and passed the data as props to Comments component
const commentsData = [
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
      ],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
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
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

   //Passing the data from Comments lists to Comments using props({data})
   const Comment=({data}) =>{
    const{name,text,replies}=data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-3 my-2">
            <img
             className="w-8 h-8"
             alt="user" 
             src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
             />

            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>

        </div>
        )
    }


//    Passing the data from CommentsContainer to Comments lists using props({comments})
   const CommentsList= ({comments}) =>{
    if (!comments) {
        return null;
    }

    // Print list of name,text replies using map concepts
    return comments.map((comment,index) =>(
        <div key={index}>
          <Comment data={comment}/>

          <div className="pl-5 border border-l-black ml-5">
            {/* Used Recursion for Printing N nested comments (calling <CommentsList> again) */}
            <CommentsList comments={comment.replies}/>
          </div>

        </div>
    )) ; 
};

//CommentsContainer is like an array and inside that object is defined
const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
       <h1 className="text-1xl font-bold">Comments: </h1>
       <CommentsList comments={commentsData}/>
        </div>
    )   
}

export default CommentsContainer;