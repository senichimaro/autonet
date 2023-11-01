import textShortner from "@/utils/textShortner";
import Link from "next/link";
import SaveButton from "../SaveButton/SaveButton";


{/* <li key={post.id}>
    <Link href={`${post.id}`}>
    {post.title}
    </Link>
</li> */}

export default function Card({title, body, userId, id}) {
  return (
    <div className="card border-secondary mb-3" style={{maxWidth: "15rem"}}>
      <div className="card-header d-flex justify-content-between">
        <div className="card-link">
            Author {userId}
        </div>
        <SaveButton text="Save" id={id}/>
      </div>
      <div className="card-body">
        <h4 className="card-title">
            <Link href={`${id}`}>
                {textShortner(title)}
            </Link>
        </h4>
        <p className="card-text">
            {textShortner(body, 75)}
        </p>
      </div>
      <div className="card-header" style={{ backgroundColor: "transparent !important" }}>
        <Link href={`${id}`} className="card-link">
          See Article
        </Link>
      </div>
    </div>
  );
}
