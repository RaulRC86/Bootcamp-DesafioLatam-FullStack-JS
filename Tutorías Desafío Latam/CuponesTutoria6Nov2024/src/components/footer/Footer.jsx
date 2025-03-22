
export const Footer = ({ description }) => {
    return (
        <>
            <footer className="text-center my-4 text-secondary">
                <img src="src/assets/img/logo-black.png" className="mb-2" width="82px" />
                <p className="mx-5">{description}</p>
            </footer>

        </>
    )
}
