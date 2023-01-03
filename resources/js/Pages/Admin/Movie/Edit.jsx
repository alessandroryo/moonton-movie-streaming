import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import { Inertia } from "@inertiajs/inertia";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Admin - Update Movie</title>
            </Head>
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <Label
                            forInput="name"
                            value="Movie Name"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="name"
                            handleChange={onHandleChange}
                            isFocused={true}
                            placeholder="Enter the name of the movie"
                            variant="primary-outline"
                            defaultValue={movie.name}

                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <Label
                            forInput="category"
                            value="Movie Category"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="category"
                            handleChange={onHandleChange}
                            isFocused={true}
                            placeholder="Enter the category of the movie"
                            variant="primary-outline"
                            defaultValue={movie.category}
                        />
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label
                            forInput="video_url"
                            value="Movie Video URL"
                            className="mt-4"
                        />
                        <Input
                            type="text"
                            name="video_url"
                            handleChange={onHandleChange}
                            isFocused={true}
                            placeholder="Enter the video url of the movie"
                            variant="primary-outline"
                            defaultValue={movie.video_url}
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label
                            forInput="thumbnail"
                            value="Movie Thumbnail"
                            className="mt-4"
                        />
                        <Input
                            type="file"
                            name="thumbnail"
                            handleChange={onHandleChange}
                            isFocused={true}
                            placeholder="Insert thumbnail of the movie"
                            variant="primary-outline"
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>
                    <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40" />
                    <div>
                        <Label
                            forInput="rating"
                            value="Movie Rating"
                            className="mt-4"
                        />
                        <Input
                            type="number"
                            name="rating"
                            handleChange={onHandleChange}
                            isFocused={true}
                            placeholder="Enter the rating of the movie"
                            variant="primary-outline"
                            defaultValue={movie.rating}
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row mt-4 items-center">
                        <Label
                            forInput="is_featured"
                            value="Movie Is Featured"
                            className="mt-1 mr-3"
                        />
                        <Checkbox
                            name="is_featured"
                            handleChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                            checked={movie.is_featured}
                        />
                        <InputError
                            message={errors.is_featured}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    <Button
                        type="submit"
                        processing={processing}
                        className="mt-4"
                    >
                        Save
                    </Button>
                    <Link href={route("register")}>
                        <Button type="button" variant="light-outline">
                            <span className="text-base text-white">
                                Create New Account
                            </span>
                        </Button>
                    </Link>
                </div>
            </form>
        </Authenticated>
    );
}
