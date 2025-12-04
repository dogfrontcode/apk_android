export interface IGovSectionProps {
    formState: [any, React.Dispatch<React.SetStateAction<any>>];
    onSubmit: (submit: boolean) => void;
}