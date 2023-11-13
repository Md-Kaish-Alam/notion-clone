"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restoreArchive);

  const onRemoveDocument = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting Document...",
      success: "Document deleted successfully!",
      error: "Failed to delete Document!",
    });

    router.push("/documents");
  };

  const onRestoreDocument = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring Document...",
      success: "Document  restore successfully!",
      error: "Failed to restore Document!",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This Page is in the Trash!</p>
      <Button
        size="sm"
        onClick={onRestoreDocument}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        Restore Page
      </Button>
      <ConfirmModal onConfirm={onRemoveDocument}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Delete Forever
        </Button>
      </ConfirmModal>
    </div>
  );
};
