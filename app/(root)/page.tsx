import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn={firstName:"Aditya",lastName:"Pandey",email:"adityapandeyp1234@gmail.com"}
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn.firstName || "guest"}
                subtext="Access and manage your accounts and transactions efficiently."
                />

            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
            />
            </header>
            RECENT TRANSCATIONS
        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:230.23},{currentBalance:830.23}]}
        />
    </section>
  )
}

export default Home