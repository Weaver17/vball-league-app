function FormTitle({ title }: { title: string }) {
    return (
        <h1 className="text-2xl font-bold font-title text-center mb-4 text-primary border-b border-border pb-4">
            {title}
        </h1>
    );
}

export default FormTitle;
