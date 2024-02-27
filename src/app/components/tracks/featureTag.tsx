import { Badge } from "@/components/ui/badge"

type Props = {
    children: React.ReactNode;
};

export default function featureTag({ children }: Props) {
    return (
        <Badge>
            <p className="">
                {children}
            </p>
        </Badge>
    );
}
