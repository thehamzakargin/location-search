import type { Place } from "../api/Place";
import { ReactHTMLElement, useState } from "react";

interface LocationSearcProps {
    onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({onPlaceClick}: LocationSearcProps) {
    const [term, setTerm] = useState ('');
    const [places, SetPlaces] = useState<Place>([]);
    const handleSubmit = async (event: React.FormEvent<ReactHTMLElement>) => {
        event.preventDefault();
    }

    return <div>
        <form>
            <label className="font-bold" htmlFor="term">
                Search
            </label>
            <input
            className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
            id="term"
            value={term}
            onChange={e => setTerm(e.target.value)}
            />
        </form>
    </div>;
}