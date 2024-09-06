import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            position="middle center"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="3"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};
export default LoaderComp;