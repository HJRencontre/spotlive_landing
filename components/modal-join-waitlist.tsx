import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button, Input, ModalBody, useDisclosure } from "@nextui-org/react";
import { MailIcon } from "./icons/MailIcon";

interface ModalJoinWaitlistProps {
  buttonTitle: string;
}
export default function ModalJoinWaitlist({
  buttonTitle,
}: ModalJoinWaitlistProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const headerTitle = "S'inscrire à la newsletter";
  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-full px-20 bg-blueElectric text-white"
      >
        {buttonTitle}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {headerTitle}
              </ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="mac@beth.com"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fermer
                </Button>
                <Button color="primary" onPress={onClose}>
                  Rejoindre
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
