import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const loggedIn = { firstName: 'Ahmed', lastName: "errami", email: "aerrami588@gmail.com" }

const Home = () => {
  return (
    <section className='home'>
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || "Geust"}
          subtext="Access and manage your account and transactions efficiently."
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.32}
        />
      </header>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 123.32}]}
      />
    </section>
  )
}

export default Home