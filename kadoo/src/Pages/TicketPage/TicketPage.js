import React, { useEffect, useState } from 'react'
import AppBar from '../../Components/AppBar/AppBar'

export default function TicketPage() {
    return(
        <div>
            <AppBar
            SearchOption={false}
            TicketOption={false}
            CartOption={false}
            AuthorizationOption={true}
            DrawerOption={true}
            />
        </div>
    )
}