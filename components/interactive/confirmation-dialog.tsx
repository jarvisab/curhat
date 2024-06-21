import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmationDialogProps {
    title: string;
    description: string;
    onConfirm: () => void;
}

const ConfirmationDialogContent: React.FC<ConfirmationDialogProps> = ({
    title,
    description,
    onConfirm
}) => {
    return (
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
    );
};

export default ConfirmationDialogContent;