import React from "react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IconHeart, IconMessage, IconShare } from "@tabler/icons-react";

const FeedCard = ({ announcement }) => {
  const { postedBy, title, description } = announcement;

  return (
    <Card>
      <CardContent className="flex gap-4 py-4 px-16">
        <div className="flex-shrink-0">
          <img
            alt="User avatar"
            className="rounded-full"
            height={40}
            src="https://i.stack.imgur.com/frlIf.png"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-1">
            <Link className="font-medium" href="#">
              {postedBy}
            </Link>
            <time className="text-sm text-gray-500 not-italic">
              {/* Date of the post */}
            </time>
          </div>
          <p className="text-sm leading-5">
            {title} - {description}
          </p>
          {/* <div className="flex items-center gap-4 text-sm"> */}
          {/*   <Button className="flex-1" variant="ghost"> */}
          {/*     <IconHeart className="mr-1 h-4 w-4" /> */}
          {/*     Like */}
          {/*   </Button> */}
          {/*   <Button className="flex-1" variant="ghost"> */}
          {/*     <IconMessage className="mr-1 h-4 w-4" /> */}
          {/*     Comment */}
          {/*   </Button> */}
          {/*   <Button className="flex-1" variant="ghost"> */}
          {/*     <IconShare className="mr-1 h-4 w-4" /> */}
          {/*     Share */}
          {/*   </Button> */}
          {/* </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
