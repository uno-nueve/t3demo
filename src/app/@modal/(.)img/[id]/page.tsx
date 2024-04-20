import { Modal } from "./modal";
import FullPageImageView from "~/app/commons/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid id");
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
