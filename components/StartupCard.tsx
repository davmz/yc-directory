import { formatDate } from "@/lib/utils"
import { EyeIcon, Link } from "lucide-react"
import { Button } from "./ui/button";
import Image from 'next/image';

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    console.log(post);

    const { _createdAt, views, author, title, category, _id, image, description  } = post;

    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_cart_date">
                    {formatDate(_createdAt)}
                </p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>
            
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">
                            {author?.name}
                        </p>
                    </Link>

                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">
                            {title}
                        </h3>
                    </Link>
                </div>

                <Link href={`/user/${author?._id}`}>
                    <Image
                        width={48}
                        height={48}
                        alt="placeholder"
                        className="rounded-full"
                        src="https://placehold.co/48x48"
                    />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card-desc">
                    {description}
                </p>

                <img src={image} alt="placeholder" className="startup-card-img"/>
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>

                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard