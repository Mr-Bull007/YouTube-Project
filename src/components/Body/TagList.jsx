import Tag from "./Tag";

const TagList = () => {
    const tagListArray = ["All", "Podcasts", "TED", "Live", "Ancient History", "Reading", "Film Criticism", "Philosophy", "Writing", "Comedy", "News"]

  return (
    <div className="flex">
      {tagListArray.map(tag => <Tag key={tag} title={tag}/>)}
    </div>
  );
};

export default TagList;
