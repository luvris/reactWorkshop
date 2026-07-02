export default function AgeMessage({age}){
    return(
        <div>
            <p>
                {age === 0 ? "Age not set yet."
                 : age > 0 && age <= 12 ? "You are a child."
                 : age >= 13 && age <= 19 ? "You are a teenager." : "You are an adult."}
            </p>
        </div>
    );
}