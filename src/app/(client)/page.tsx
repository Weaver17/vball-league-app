import CurrentLeaguesTable from "@/components/app/tables/current-leagues-table";
import {
    Table,
    TableCaption,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import React from "react";

function Home() {
    return (
        <div className="section">
            <div className="container w-2/3  mt-12">
                <h4 className="font-semibold">
                    Welcome! Sign in to join a team or league. Sign up to set up
                    your height, position, and level of play
                </h4>
            </div>
            <div className="container">
                <h4 className="underline font-semibold">Current Leagues</h4>
                <CurrentLeaguesTable />
            </div>
        </div>
    );
}

export default Home;
