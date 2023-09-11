import { useParams, useLocation } from "react-router-dom";

function PostItem() {
  let params = useParams();
  let location = useLocation();

  console.log(params)
  console.log(location)

  return (
    <div className="PostItem">
      PostItem
    </div>
  );
}

export default PostItem;
