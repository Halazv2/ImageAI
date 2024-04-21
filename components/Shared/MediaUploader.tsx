"use client";
import Image from "next/image";
import { useToast } from "../ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccess = (result: any) => {
    setImage((pevState: any) => ({
      ...pevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast({
      title: "Image uploaded successfully",
      description: "1 credit has been deducted from your account",
      duration: 3000,
      className: "success-toast",
    });
  };
  const onUploadError = () => {
    toast({
      title: "Something went wrong while uploading the image",
      description: "Please try again",
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="image_ia"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccess}
      onError={onUploadError}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3>
          {publicId ? (
            <div className="cursor-pointer overflow-hidden rounded-[10px]">
              <CldImage
                width={getImageSize(type, image, "width")}
                height={getImageSize(type, image, "height")}
                src={publicId}
                sizes={"(max-width: 767px) 100vw, 50vw"}
                alt={dataUrl as PlaceholderValue}
                className="media-uploader_cldImage"
              />
            </div>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <Image
                  src="/assets/icons/add.svg"
                  width={24}
                  height={24}
                  alt="Add Image"
                />
              </div>
              <p className="p-16-regular">Click here to upload an image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
