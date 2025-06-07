import { getPlayerById } from "@/actions/actions";
import CaptainManage from "@/components/manage/captain-manage";

import React, { Suspense } from "react";

async function ManagePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const player = (await getPlayerById(id)) as Player;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex gap-8">
                <div className="container w-1/2">
                    <h3 className="text-center border-b border-primary pb-2">
                        Teams
                    </h3>
                    <CaptainManage player={player} />
                </div>
                <div className="container w-1/2">
                    <h3 className="text-center border-b border-primary pb-2">
                        Leagues
                    </h3>
                </div>
            </div>
        </Suspense>
    );
}

export default ManagePage;
