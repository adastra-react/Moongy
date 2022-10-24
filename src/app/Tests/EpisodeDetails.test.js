import EpisodeDetails from "../components/EpisodeDetails";
import { getByTestId, render, screen } from "@testing-library/react";


describe("EpisodeDetails", () => {
    it("renders the episode details", () => {
        const { getByTestId } = render(<EpisodeDetails />);
        const episodeName = getByTestId("episodeName").textContent;
        expect(episodeName).toBe("Pilot")
    });
})