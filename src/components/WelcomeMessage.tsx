interface WelcomeMessageProps {
    position: string;
    country?: string;
}
const WelcomeMessage = ({
    position,
    country = "Vietnam",
}: WelcomeMessageProps) => {
    return (
        <p className="mb-0">
            Welcome {position} from {country}
        </p>
    );
};
export default WelcomeMessage;
