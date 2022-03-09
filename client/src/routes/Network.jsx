import React from "react";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import { users } from "../users";
import "../styles/scss/network.css";
const Network = () => {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />

        <main className="main">
          <section className="followSection">
            <div className="followSectionHeader">
              <h1 className="followHeading">
                Black voices to follow and amplify
              </h1>
              <button className="followSectionBtn">See all</button>
            </div>
            <div className="followSectionRow">
              {users.map((user) => (
                <UserCard key={user.id} {...user} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Network;
